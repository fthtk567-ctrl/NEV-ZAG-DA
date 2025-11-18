const fs = require('fs');
const path = 'src/app/[locale]/page.tsx';

let content = fs.readFileSync(path, 'utf8');

// fruit-rings bloğunu kaldır
const regex = /,\s*\{\s*id:\s*'fruit-rings'[\s\S]*?link:\s*`\/\$\{locale\}\/products\/fruit-rings`,\s*\}/;
content = content.replace(regex, '');

fs.writeFileSync(path, content, 'utf8');
console.log('✅ Dosya başarıyla güncellendi!');
