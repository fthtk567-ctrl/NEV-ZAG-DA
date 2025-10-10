const fs = require('fs');
const path = require('path');

const backupDir = path.join(__dirname, '..', 'backups', 'backup-2025-10-10T09-17-39-266Z');
const outDir = path.join(__dirname, '..', 'messages', 'ar');

function findLastJson(text) {
  // Try finding the last '{' and attempt to parse from there moving backwards
  for (let i = text.lastIndexOf('{'); i >= 0; i = text.lastIndexOf('{', i - 1)) {
    const candidate = text.slice(i);
    try {
      const parsed = JSON.parse(candidate);
      return parsed;
    } catch (e) {
      // continue
    }
  }
  return null;
}

function run() {
  if (!fs.existsSync(backupDir)) {
    console.error('Backup dir not found', backupDir);
    process.exit(1);
  }
  const files = fs.readdirSync(backupDir).filter(f => f.endsWith('.json'));
  const results = [];
  for (const file of files) {
    const p = path.join(backupDir, file);
    const raw = fs.readFileSync(p, 'utf8');
    console.log('\nProcessing', file);
    const parsed = findLastJson(raw);
    if (parsed) {
      console.log('Found a trailing valid JSON block; writing to messages/ar/' + file);
      fs.writeFileSync(path.join(outDir, file), JSON.stringify(parsed, null, 2), 'utf8');
      results.push({ file, ok: true });
    } else {
      console.log('No trailing valid JSON found in', file);
      results.push({ file, ok: false });
    }
  }
  console.log('\nSummary:');
  results.forEach(r => console.log(r.file, r.ok ? 'OK' : 'NOT FOUND'));
}

run();
