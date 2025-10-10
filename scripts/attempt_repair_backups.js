const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

const backupDir = path.join(__dirname, '..', 'backups', 'backup-2025-10-10T09-17-39-266Z');
const outDir = path.join(__dirname, '..', 'messages', 'ar');

function tryParseUtf8(buf) {
  try {
    const s = buf.toString('utf8').replace(/^\uFEFF/, '');
    return JSON.parse(s);
  } catch (e) {
    return null;
  }
}

function tryLatin1(buf) {
  try {
    const s = Buffer.from(buf).toString('latin1');
    return JSON.parse(s);
  } catch (e) {
    return null;
  }
}

function tryCp1256(buf) {
  try {
    const s = iconv.decode(buf, 'windows-1256');
    return JSON.parse(s);
  } catch (e) {
    return null;
  }
}

function tryDoubleDecode(buf) {
  try {
    // Interpret as latin1 bytes that actually are utf8 bytes
    const latin = Buffer.from(buf).toString('latin1');
    const recovered = Buffer.from(latin, 'binary').toString('utf8');
    return JSON.parse(recovered);
  } catch (e) {
    return null;
  }
}

function run() {
  if (!fs.existsSync(backupDir)) {
    console.error('Backup dir not found:', backupDir);
    process.exit(1);
  }
  const files = fs.readdirSync(backupDir).filter(f => f.endsWith('.json'));
  const results = [];
  for (const file of files) {
    const p = path.join(backupDir, file);
    const buf = fs.readFileSync(p);
    console.log('\nProcessing', file);

    let parsed = tryParseUtf8(buf);
    if (parsed) {
      console.log('Parsed as UTF-8 (after BOM strip)');
      fs.writeFileSync(path.join(outDir, file), JSON.stringify(parsed, null, 2), 'utf8');
      results.push({ file, method: 'utf8', ok: true });
      continue;
    }

    parsed = tryLatin1(buf);
    if (parsed) {
      console.log('Parsed as Latin1');
      fs.writeFileSync(path.join(outDir, file), JSON.stringify(parsed, null, 2), 'utf8');
      results.push({ file, method: 'latin1', ok: true });
      continue;
    }

    parsed = tryCp1256(buf);
    if (parsed) {
      console.log('Parsed as CP1256 (Windows-1256)');
      fs.writeFileSync(path.join(outDir, file), JSON.stringify(parsed, null, 2), 'utf8');
      results.push({ file, method: 'cp1256', ok: true });
      continue;
    }

    parsed = tryDoubleDecode(buf);
    if (parsed) {
      console.log('Parsed by double-decode heuristic');
      fs.writeFileSync(path.join(outDir, file), JSON.stringify(parsed, null, 2), 'utf8');
      results.push({ file, method: 'double-decode', ok: true });
      continue;
    }

    console.log('FAILED to parse', file);
    results.push({ file, method: null, ok: false });
  }

  console.log('\nSummary:');
  results.forEach(r => console.log(r.file, r.ok ? `OK (${r.method})` : 'FAILED'));
}

run();
