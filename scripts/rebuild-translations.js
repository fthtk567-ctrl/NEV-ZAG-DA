const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔄 Translation dosyaları yeniden oluşturuluyor...\n');

// TÜRKÇE (TR) - TAM VERSİYON
const trComplete = {
  hero: {
    title: "Mutluluğun En Tatlı Hali",
    description: "2010 yılından bu yana ürettiğimiz lezzetli jöle şekerlerimizle çocuklara ve yetişkinlere keyif sunuyoruz.",
    buttonText: "Ürünlerimizi Keşfedin"
  },
  homeHero: {
    title: "Mutluluğun En Tatlı Hali",
    description: "2010 yılından bu yana ürettiğimiz lezzetli jöle şekerlerimizle çocuklara ve yetişkinlere keyif sunuyoruz.",
    buttonText: "Ürünlerimizi Keşfedin"
  },
  navigation: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    products: "Ürünler",
    quality: "Kalite",
    contact: "İletişim"
  },
  about: {
    title: "Hakkımızda",
    subtitle: "2010 yılından beri kaliteli jöle şekerler üretiyor ve tüm dünyaya mutluluk dağıtıyoruz.",
    storyTitle: "Hikayemiz",
    valuesTitle: "Değerlerimiz",
    timelineTitle: "Yolculuğumuz",
    certificatesTitle: "Kalite Sertifikalarımız",
    company: "Neviza Gıda Sanayi",
    story: {
      paragraph1: "Neviza olarak, 2010 yılından bu yana Türkiye'nin jöle şekerleme üretimindeki öncü firmalarından biri olarak faaliyet gösteriyoruz. Modern teknolojiyi geleneksel lezzetle birleştirerek, yüksek kaliteli ve lezzetli ürünler üretiyoruz.",
      paragraph2: "Hijyen ve kalite standartlarımız uluslararası normlarla uyumlu olup, üretim süreçlerimizde sürekli olarak araştırma-geliştirme faaliyetleri yürütmekteyiz. Bu sayede hem çocukların hem de yetişkinlerin beğenisine hitap eden yenilikçi ürünler sunabiliyoruz.",
      paragraph3: "Ayrıca dünya genelinde 4'ten fazla ülkeye ihracat yaparak uluslararası pazarlarda da varlık gösteriyoruz. Müşteri memnuniyeti odaklı yaklaşımımızla Neviza markasını güvenilir ve kaliteli ürünlerin temsilcisi haline getirdik."
    },
    values: [
      { title: "Kalite", description: "ISO 22000 standartlarına uygun üretim yaparak en yüksek kalite güvencesini sağlıyoruz." },
      { title: "Yenilikçilik", description: "Sürekli gelişim için yeni tatlar ve ürünler geliştiriyoruz." },
      { title: "Müşteri Memnuniyeti", description: "Tüm süreçlerimizde müşteri memnuniyetini ön planda tutuyoruz." },
      { title: "Güvenilirlik", description: "On yıllık tecrübemizle sektörde güvenilir bir marka haline geldik." }
    ]
  },
  products: {
    hero: { title: "Ürünlerimiz", description: "30 yılı aşkın tecrübemizle ürettiğimiz kaliteli jöle şeker çeşitlerimizi keşfedin." },
    categoriesSection: { title: "Ürün Kategorilerimiz", description: "Geniş ürün yelpazemizle her yaştan tüketicinin beğenisine hitap ediyoruz." },
    categories: {
      nevijel: {
        title: "Nevijel",
        description: "Premium kalitede yumuşak jöle şekerlerimizin öncüsü",
        features: { feature1: "Yumuşak dokulu", feature2: "Meyve aromalı", feature3: "Doğal renkler", feature4: "Uzun raf ömrü" }
      },
      jelibon: {
        title: "Jelibon",
        description: "Çocukların en sevdiği renkli ve lezzetli şekerler",
        features: { feature1: "Çiğneme keyfi", feature2: "Renkli görünüm", feature3: "Meyve lezzetleri" }
      },
      halkali: {
        title: "Halkalı Şeker",
        description: "Klasik lezzetlerden vazgeçemeyenlerin tercihi",
        features: { feature1: "Geleneksel lezzet", feature2: "Eğlenceli halka şekli", feature3: "Çeşitli aromalar" }
      }
    },
    status: { available: "Satışta", development: "Geliştirme Aşamasında", comingSoon: "Yakında" },
    quality: {
      title: "Kalite Güvencemiz",
      description: "Tüm ürünlerimiz en yüksek kalite standartlarında, hijyenik koşullarda ve Sağlık Bakanlığı onaylı tesisimizde üretilmektedir. ISO 22000 Gıda Güvenliği Yönetim Sistemi sertifikamızla güvenli üretim yapıyoruz."
    }
  },
  home: {
    statsSection: { title: "Rakamlarla Neviza" },
    stats: {
      customers: "Mutlu Müşteri",
      customersDesc: "Dünya genelinde 250'den fazla mutlu müşterimiz var",
      capacity: "Ton Üretim",
      capacityDesc: "Aylık 50 ton üretim kapasitesiyle hizmet veriyoruz",
      certificates: "Kalite Belgesi",
      certificatesDesc: "Uluslararası standartlarda 5 kalite belgesine sahibiz",
      experience: "Yıllık Deneyim",
      experienceDesc: "2010'dan beri sektördeyiz"
    },
    productSection: { title: "Ürün Kategorilerimiz" },
    products: {
      nevijel: {
        name: "Nevijel",
        description: "Premium kalitede yumuşak jöle şekerlerimizin öncüsü. Ana ürünümüz olan Nevijel, 2010'dan beri ürettiğimiz kaliteli ve lezzetli bir seçenek.",
        features: { feature1: "Yumuşak dokulu", feature2: "Meyve aromalı", feature3: "Doğal renkler", feature4: "Uzun raf ömrü" }
      },
      gummyBears: {
        name: "Jelibon Ayıcık",
        description: "Çocukların en sevdiği renkli ve lezzetli ayıcık şekerleri. Geliştirme aşamasında olan bu ürün çok yakında raflarımızda yerini alacak.",
        features: { feature1: "Çiğneme keyfi", feature2: "Renkli görünüm", feature3: "Meyve lezzetleri", feature4: "Eğlenceli şekil" }
      },
      fruitRings: {
        name: "Meyve Halkaları",
        description: "Doğal meyve aromalı halka şeklindeki şekerlerimiz. Yeni ürün geliştirme sürecimizde olan bu lezzetli kategorimiz çok yakında sizlerle.",
        features: { feature1: "Halka şekli", feature2: "Doğal aromalar", feature3: "Renkli çeşitler", feature4: "Yumuşak doku" }
      }
    },
    productStatus: { available: "Mevcut", development: "Geliştirme Aşamasında", comingSoon: "Yakında" },
    quality: {
      title: "Kalite ve Güvende Öncüyüz",
      paragraph1: "2010 yılından bu yana, kaliteli jöle şeker üretiminde sektörün öncü firmalarından biriyiz. Modern tesisimizde, en yüksek hijyen standartlarında üretim yapıyoruz.",
      paragraph2: "Tüm ürünlerimiz, Türk Gıda Kodeksi ve uluslararası standartlara uygun olarak üretilmekte ve düzenli kalite kontrollerinden geçmektedir.",
      paragraph3: "Misyonumuz, çocuklar ve yetişkinler için güvenli, kaliteli ve lezzetli ürünler sunmaktır. Vizyonumuz ise Türkiye'nin jöle şeker sektöründe lider markası olmaktır."
    },
    buttons: { details: "Detayları Gör", comingSoon: "Yakında..." }
  },
  footer: {
    company: "Neviza Gıda Sanayi",
    address: "Çumra Organize Sanayi Bölgesi, Çumra/Konya - Türkiye",
    email: "nevizagida@gmail.com",
    phone: "+90 507 651 42 00",
    rights: "Tüm hakları saklıdır.",
    description: "15 yılı aşkın deneyimle kaliteli jöle şekerleri üretiyoruz."
  },
  contact: {
    hero: { title: "İletişim", description: "Bizimle iletişime geçin, sorularınızı yanıtlayalım." },
    infoSection: { title: "İletişim Bilgileri" },
    info: {
      phone: { title: "Telefon", content: "+90 507 651 42 00" },
      email: { title: "E-posta", content: "nevizagida@gmail.com" },
      address: { title: "Adres", content: "Çumra Organize Sanayi Bölgesi\\nÇumra/Konya" },
      hours: { title: "Çalışma Saatleri", content: "Pazartesi - Cuma: 08:00 - 18:00\\nCumartesi: 09:00 - 14:00" }
    },
    form: {
      title: "Mesaj Gönder",
      description: "Size nasıl yardımcı olabileceğimizi öğrenmek için formu doldurun.",
      name: { label: "Ad Soyad", placeholder: "Adınız ve soyadınız" },
      email: { label: "E-posta", placeholder: "E-posta adresiniz" },
      phone: { label: "Telefon", placeholder: "+90 5XX XXX XX XX" },
      company: { label: "Şirket", placeholder: "Şirket adınız" },
      subject: { label: "Konu" },
      subjectOptions: { general: "Genel Bilgi", sales: "Satış ve Fiyat", partnership: "İş Ortaklığı", support: "Teknik Destek" },
      message: { label: "Mesajınız", placeholder: "Mesajınızı buraya yazın..." },
      submit: "Mesaj Gönder"
    },
    quickContact: { title: "Hızlı İletişim", description: "Acil durumlar için doğrudan telefon ile arayabilir veya e-posta gönderebilirsiniz.", call: "Hemen Ara", email: "E-posta Gönder" },
    map: { title: "Konumumuz", description: "Çumra Organize Sanayi Bölgesi'ndeyiz", comingSoon: "Harita yakında eklenecek" }
  }
};

// İNGİLİZCE (EN) - TAM VERSİYON
const enComplete = {
  hero: { title: "The Sweetest Form of Happiness", description: "Since 2010, we have been delighting children and adults with our delicious jelly candies.", buttonText: "Discover Our Products" },
  homeHero: { title: "The Sweetest Form of Happiness", description: "Since 2010, we have been delighting children and adults with our delicious jelly candies.", buttonText: "Discover Our Products" },
  navigation: { home: "Home", about: "About Us", products: "Products", quality: "Quality", contact: "Contact" },
  about: {
    title: "About Us",
    subtitle: "With over 15 years of experience, we produce quality jelly candies and spread happiness worldwide.",
    storyTitle: "Our Story",
    valuesTitle: "Our Values",
    timelineTitle: "Our Journey",
    certificatesTitle: "Quality Certificates",
    company: "Neviza Food Industry",
    story: {
      paragraph1: "As Neviza, we have been operating as one of Turkey's leading jelly candy manufacturers since 2010. By combining modern technology with traditional flavors, we produce high-quality and delicious products.",
      paragraph2: "Our hygiene and quality standards are in line with international norms, and we continuously conduct research and development activities in our production processes. This allows us to offer innovative products that appeal to both children and adults.",
      paragraph3: "We also have a presence in international markets by exporting to more than 4 countries worldwide. With our customer satisfaction-oriented approach, we have made the Neviza brand a representative of reliable and quality products."
    },
    values: [
      { title: "Quality", description: "We provide the highest quality assurance by manufacturing to ISO 22000 standards." },
      { title: "Innovation", description: "We develop new flavors and products for continuous improvement." },
      { title: "Customer Satisfaction", description: "We always prioritize customer satisfaction in all our processes." },
      { title: "Reliability", description: "With our decade of experience, we have become a trusted brand in the industry." }
    ]
  },
  products: {
    hero: { title: "Our Products", description: "Discover our high-quality jelly candy varieties produced with over 30 years of experience." },
    categoriesSection: { title: "Product Categories", description: "We appeal to consumers of all ages with our wide range of products." },
    categories: {
      nevijel: { title: "Nevijel", description: "Pioneer of our premium quality soft jelly candies", features: { feature1: "Soft texture", feature2: "Fruit flavored", feature3: "Natural colors", feature4: "Long shelf life" } },
      jelibon: { title: "Jelly Beans", description: "Colorful and delicious candies loved by children", features: { feature1: "Chewing pleasure", feature2: "Colorful appearance", feature3: "Fruit flavors" } },
      halkali: { title: "Ring Candies", description: "Preferred by those who cannot give up classic flavors", features: { feature1: "Traditional taste", feature2: "Fun ring shape", feature3: "Various flavors" } }
    },
    status: { available: "Available", development: "In Development", comingSoon: "Coming Soon" },
    quality: { title: "Our Quality Assurance", description: "All our products are manufactured in hygienic conditions and in our facility approved by the Ministry of Health, with the highest quality standards. We produce safely with our ISO 22000 Food Safety Management System certification." }
  },
  home: {
    statsSection: { title: "Neviza in Numbers" },
    stats: { customers: "Happy Customers", customersDesc: "We have over 250 happy customers worldwide", capacity: "Tons Production", capacityDesc: "We serve with a monthly production capacity of 50 tons", certificates: "Quality Certificate", certificatesDesc: "We have 5 quality certificates at international standards", experience: "Years Experience", experienceDesc: "In the industry since 2010" },
    productSection: { title: "Our Product Categories" },
    products: {
      nevijel: { name: "Nevijel", description: "Pioneer of our premium quality soft jelly candies. Our main product Nevijel has been a quality and delicious option since 2010.", features: { feature1: "Soft texture", feature2: "Fruit flavored", feature3: "Natural colors", feature4: "Long shelf life" } },
      gummyBears: { name: "Gummy Bears", description: "Colorful and delicious bear-shaped candies loved by children. This product in development will soon be on our shelves.", features: { feature1: "Chewy pleasure", feature2: "Colorful appearance", feature3: "Fruit flavors", feature4: "Fun shape" } },
      fruitRings: { name: "Fruit Rings", description: "Our ring-shaped candies with natural fruit flavors. This delicious category in our new product development process will be with you very soon.", features: { feature1: "Ring shape", feature2: "Natural flavors", feature3: "Colorful varieties", feature4: "Soft texture" } }
    },
    productStatus: { available: "Available", development: "In Development", comingSoon: "Coming Soon" },
    quality: { title: "Leaders in Quality and Safety", paragraph1: "Since 2010, we have been one of the leading companies in quality jelly candy production. We produce in our modern facility under the highest hygiene standards.", paragraph2: "All our products are manufactured in compliance with Turkish Food Codex and international standards and undergo regular quality controls.", paragraph3: "Our mission is to provide safe, quality, and delicious products for children and adults. Our vision is to be Turkey's leading brand in the jelly candy sector." },
    buttons: { details: "See Details", comingSoon: "Coming Soon..." }
  },
  footer: { company: "Neviza Food Industry", address: "Çumra Organized Industrial Zone, Çumra/Konya - Turkey", email: "nevizagida@gmail.com", phone: "+90 507 651 42 00", rights: "All rights reserved.", description: "We have been producing quality jelly candies for over 15 years." },
  contact: {
    hero: { title: "Contact", description: "Get in touch with us, let us answer your questions." },
    infoSection: { title: "Contact Information" },
    info: { phone: { title: "Phone", content: "+90 507 651 42 00" }, email: { title: "Email", content: "nevizagida@gmail.com" }, address: { title: "Address", content: "Çumra Organized Industrial Zone\\nÇumra/Konya" }, hours: { title: "Working Hours", content: "Monday - Friday: 08:00 - 18:00\\nSaturday: 09:00 - 14:00" } },
    form: { title: "Send Message", description: "Fill out the form to learn how we can help you.", name: { label: "Full Name", placeholder: "Your name and surname" }, email: { label: "Email", placeholder: "Your email address" }, phone: { label: "Phone", placeholder: "+90 5XX XXX XX XX" }, company: { label: "Company", placeholder: "Your company name" }, subject: { label: "Subject" }, subjectOptions: { general: "General Information", sales: "Sales and Pricing", partnership: "Business Partnership", support: "Technical Support" }, message: { label: "Your Message", placeholder: "Write your message here..." }, submit: "Send Message" },
    quickContact: { title: "Quick Contact", description: "For urgent matters, you can call directly or send an email.", call: "Call Now", email: "Send Email" },
    map: { title: "Our Location", description: "We are in Çumra Organized Industrial Zone", comingSoon: "Map coming soon" }
  }
};

// RUSÇA (RU) - Tam versiyon devam ediyor...
const ruComplete = JSON.parse(fs.readFileSync('./messages/ru.json', 'utf8'));
const arComplete = JSON.parse(fs.readFileSync('./messages/ar.json', 'utf8'));

// Dosyaları yaz
fs.writeFileSync('./messages/tr.json', JSON.stringify(trComplete, null, 2), 'utf8');
fs.writeFileSync('./messages/en.json', JSON.stringify(enComplete, null, 2), 'utf8');
fs.writeFileSync('./messages/ru.json', JSON.stringify(ruComplete, null, 2), 'utf8');
fs.writeFileSync('./messages/ar.json', JSON.stringify(arComplete, null, 2), 'utf8');

console.log('✅ TR dosyası oluşturuldu');
console.log('✅ EN dosyası oluşturuldu');
console.log('✅ RU dosyası oluşturuldu');
console.log('✅ AR dosyası oluşturuldu');

// Dosyaları kilitle (Windows)
if (process.platform === 'win32') {
  const files = ['tr.json', 'en.json', 'ru.json', 'ar.json'];
  console.log('\n🔒 Dosyalar kilitleniyor...');
  files.forEach(file => {
    try {
      execSync(`powershell -Command "Set-ItemProperty -Path 'messages\\${file}' -Name IsReadOnly -Value $true"`, { stdio: 'ignore' });
      console.log(`✅ Kilitlendi: ${file}`);
    } catch (error) {
      console.warn(`⚠️  ${file} kilitlenemedi`);
    }
  });
}

console.log('\n🎉 İşlem tamamlandı! Tüm translation dosyaları güncellendi ve kilitlendi.');
