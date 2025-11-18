const fs = require('fs');
const trData = JSON.parse(fs.readFileSync('messages/tr.json', 'utf8'));
delete trData.home.products.fruitRings;
trData.hero.description = '15 yıllık tecrübemizle sunduğumuz lezzetli jöle şekerlerimizle çocuklara ve yetişkinlere keyif sunuyoruz.';
trData.homeHero.description = '15 yıllık tecrübemizle sunduğumuz lezzetli jöle şekerlerimizle çocuklara ve yetişkinlere keyif sunuyoruz.';
fs.writeFileSync('messages/tr.json', JSON.stringify(trData, null, 2), 'utf8');
console.log('TR güncellendi');
