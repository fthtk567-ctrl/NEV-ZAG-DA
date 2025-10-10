const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '..', 'messages', 'ar');
const bakDir = path.resolve(dir, 'backup-' + new Date().toISOString().replace(/[:.]/g, '-'));
fs.mkdirSync(bakDir, { recursive: true });

function tryParse(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

function writeFixed(file, content, method) {
  const rel = path.relative(dir, file);
  const out = path.resolve(dir, rel);
  fs.writeFileSync(out, content, { encoding: 'utf8' });
  console.log(`FIXED ${rel} using ${method}`);
}

const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
for (const f of files) {
  const p = path.join(dir, f);
  const raw = fs.readFileSync(p);
  // backup
  fs.copyFileSync(p, path.join(bakDir, f));

  const candidates = [];

  // 1) as UTF8 string straight
  try { candidates.push({s: raw.toString('utf8'), method: 'utf8'}); } catch (e) {}
  // 2) strip UTF8 BOM then utf8
  try {
    let s = raw.toString('utf8');
    if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
    candidates.push({s, method: 'utf8-strip-bom'});
  } catch(e){}
  // 3) interpret raw as cp1256
  try { candidates.push({s: Buffer.from(raw).toString('latin1'), method: 'latin1'}); } catch(e){}
  // 4) interpret raw as cp1256 via iconv-lite if available
  let iconv;
  try { iconv = require('iconv-lite'); } catch(e) { iconv = null; }
  if (iconv) {
    try { candidates.push({s: iconv.decode(raw, 'win1256'), method: 'cp1256'}); } catch(e){}
    try { candidates.push({s: iconv.decode(raw, 'iso-8859-1'), method: 'iso-8859-1'}); } catch(e){}
  }

  // 5) try common double-encoding repairs
  // raw -> utf8 string -> get bytes as latin1 -> decode cp1256
  try {
    const s1 = raw.toString('utf8');
    const bytesLatin1 = Buffer.from(s1, 'latin1');
    if (iconv) {
      candidates.push({s: iconv.decode(bytesLatin1, 'win1256'), method: 'utf8->latin1bytes->cp1256(iconv)'});
    } else {
      candidates.push({s: Buffer.from(bytesLatin1).toString('utf8'), method: 'utf8->latin1bytes->utf8'});
    }
  } catch(e){}

  // 6) remove suspicious leading bytes like ï»¿ (BOM represented) if present
  try {
    const t = raw.toString('utf8');
    const t2 = t.replace(/^ï»¿\s*/, '');
    candidates.push({s: t2, method: 'remove-encoded-bom-characters'});
  } catch(e){}

  // Evaluate candidates
  let fixed = null;
  for (const c of candidates) {
    if (!c || !c.s) continue;
    if (tryParse(c.s)) {
      fixed = { s: c.s, method: c.method };
      break;
    }
  }

  if (!fixed) {
    // As a last resort, try removing first 3 bytes if they equal EF BB BF
    if (raw.length > 3 && raw[0] === 0xEF && raw[1] === 0xBB && raw[2] === 0xBF) {
      const sliced = raw.slice(3).toString('utf8');
      if (tryParse(sliced)) fixed = { s: sliced, method: 'strip-bom-bytes' };
    }
  }

  if (fixed) {
    writeFixed(p, fixed.s, fixed.method);
  } else {
    console.log(`FAILED ${f} -- none of the heuristics produced valid JSON`);
    // write a pretty-printed hexdump-first-chars file to help manual repair
    const sample = raw.slice(0, 200).toString('hex').match(/.{1,2}/g).slice(0,80).join(' ');
    fs.writeFileSync(path.join(bakDir, f + '.hex.txt'), sample, 'utf8');
  }
}

console.log('Repair attempt finished. Backups stored in', bakDir);