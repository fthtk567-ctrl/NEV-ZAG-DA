const fs = require('fs');
const path = require('path');

const messagesDir = path.resolve(__dirname, '..', 'messages');

function readAllJson(dir) {
  const files = [];
  function walk(d) {
    for (const name of fs.readdirSync(d)) {
      const p = path.join(d, name);
      const stat = fs.statSync(p);
      if (stat.isDirectory()) walk(p);
      else if (name.endsWith('.json')) files.push(p);
    }
  }
  walk(dir);
  return files;
}

function getKeys(obj, prefix = '') {
  const keys = [];
  if (obj && typeof obj === 'object') {
    for (const k of Object.keys(obj)) {
      const val = obj[k];
      const full = prefix ? `${prefix}.${k}` : k;
      keys.push(full);
      if (val && typeof val === 'object' && !Array.isArray(val)) {
        keys.push(...getKeys(val, full));
      }
    }
  }
  return keys;
}

const files = readAllJson(messagesDir);
const report = {
  parseErrors: [],
  mojibakeFiles: [],
  keysByFile: {},
};

for (const f of files) {
  const raw = fs.readFileSync(f, 'utf8');
  // detect mojibake-like chars
  if (/[ÃÂÄÙÐÕ]/.test(raw)) {
    report.mojibakeFiles.push(f);
  }
  try {
    const obj = JSON.parse(raw);
    report.keysByFile[f] = getKeys(obj).sort();
  } catch (err) {
    report.parseErrors.push({ file: f, error: err.message });
  }
}

// Compare keys for matching relative paths across locales
function relPath(p) {
  return path.relative(messagesDir, p).replace(/\\/g, '/');
}

const groups = {}; // baseName -> { lang: keys }
for (const f of Object.keys(report.keysByFile)) {
  const r = relPath(f);
  const parts = r.split('/');
  if (parts.length === 1) {
    // root file like en.json
    const lang = path.basename(f, '.json');
    groups[`/${path.basename(f)}`] = groups[`/${path.basename(f)}`] || {};
    groups[`/${path.basename(f)}`][lang] = report.keysByFile[f];
  } else if (parts.length === 2) {
    const lang = parts[0];
    const name = parts[1];
    groups[name] = groups[name] || {};
    groups[name][lang] = report.keysByFile[f];
  } else {
    // deeper nesting - use full relative
    const name = parts.slice(1).join('/');
    const lang = parts[0];
    groups[name] = groups[name] || {};
    groups[name][lang] = report.keysByFile[f];
  }
}

const missing = {};
for (const [name, langs] of Object.entries(groups)) {
  // choose reference as 'en' if present, else first
  const refLang = langs['en'] ? 'en' : Object.keys(langs)[0];
  const refKeys = langs[refLang] || [];
  for (const [lang, keys] of Object.entries(langs)) {
    if (lang === refLang) continue;
    const missingKeys = refKeys.filter(k => !keys.includes(k));
    if (missingKeys.length) missing[`${name}`] = missing[`${name}`] || {};
    if (missingKeys.length) missing[`${name}`][lang] = missingKeys;
  }
}

console.log('=== Summary ===');
console.log('Total JSON files:', files.length);
console.log('Parse errors:', report.parseErrors.length);
for (const e of report.parseErrors) console.log('  -', e.file, e.error);
console.log('Files with likely mojibake patterns:', report.mojibakeFiles.length);
for (const m of report.mojibakeFiles) console.log('  -', m);
console.log('Missing keys by file group:');
for (const [k, v] of Object.entries(missing)) {
  console.log(`-- ${k}`);
  for (const [lang, keys] of Object.entries(v)) {
    console.log(`   ${lang}: ${keys.length} missing`);
    console.log('     ', keys.slice(0,10).map(x=>x).join(', '));
  }
}

if (Object.keys(missing).length === 0 && report.parseErrors.length === 0 && report.mojibakeFiles.length === 0) {
  console.log('\nAll message files look OK.');
} else {
  console.log('\nFixes recommended based on above.');
}
