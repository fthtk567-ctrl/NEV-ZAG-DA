const fs = require('fs');
const path = require('path');

// TR dosyalarını oku ve birleştir
const trAbout = JSON.parse(fs.readFileSync('./messages/tr/about.json', 'utf8'));
const trProducts = JSON.parse(fs.readFileSync('./messages/tr/products.json', 'utf8'));

const trMerged = {
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
  about: trAbout,
  products: trProducts,
  home: {
    statsSection: {
      title: "Rakamlarla Neviza"
    },
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
    productSection: {
      title: "Ürün Kategorilerimiz"
    },
    products: {
      nevijel: {
        name: "Nevijel",
        description: "Premium kalitede yumuşak jöle şekerlerimizin öncüsü. Ana ürünümüz olan Nevijel, 2010'dan beri ürettiğimiz kaliteli ve lezzetli bir seçenek.",
        features: {
          feature1: "Yumuşak dokulu",
          feature2: "Meyve aromalı",
          feature3: "Doğal renkler",
          feature4: "Uzun raf ömrü"
        }
      },
      gummyBears: {
        name: "Jelibon Ayıcık",
        description: "Çocukların en sevdiği renkli ve lezzetli ayıcık şekerleri. Geliştirme aşamasında olan bu ürün çok yakında raflarımızda yerini alacak.",
        features: {
          feature1: "Çiğneme keyfi",
          feature2: "Renkli görünüm",
          feature3: "Meyve lezzetleri",
          feature4: "Eğlenceli şekil"
        }
      },
      fruitRings: {
        name: "Meyve Halkaları",
        description: "Doğal meyve aromalı halka şeklindeki şekerlerimiz. Yeni ürün geliştirme sürecimizde olan bu lezzetli kategorimiz çok yakında sizlerle.",
        features: {
          feature1: "Halka şekli",
          feature2: "Doğal aromalar",
          feature3: "Renkli çeşitler",
          feature4: "Yumuşak doku"
        }
      }
    },
    productStatus: {
      available: "Mevcut",
      development: "Geliştirme Aşamasında",
      comingSoon: "Yakında"
    },
    quality: {
      title: "Kalite ve Güvende Öncüyüz",
      paragraph1: "2010 yılından bu yana, kaliteli jöle şeker üretiminde sektörün öncü firmalarından biriyiz. Modern tesisimizde, en yüksek hijyen standartlarında üretim yapıyoruz.",
      paragraph2: "Tüm ürünlerimiz, Türk Gıda Kodeksi ve uluslararası standartlara uygun olarak üretilmekte ve düzenli kalite kontrollerinden geçmektedir.",
      paragraph3: "Misyonumuz, çocuklar ve yetişkinler için güvenli, kaliteli ve lezzetli ürünler sunmaktır. Vizyonumuz ise Türkiye'nin jöle şeker sektöründe lider markası olmaktır."
    },
    buttons: {
      details: "Detayları Gör",
      comingSoon: "Yakında..."
    }
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
    hero: {
      title: "İletişim",
      description: "Bizimle iletişime geçin, sorularınızı yanıtlayalım."
    },
    infoSection: {
      title: "İletişim Bilgileri"
    },
    info: {
      phone: {
        title: "Telefon",
        content: "+90 507 651 42 00"
      },
      email: {
        title: "E-posta",
        content: "nevizagida@gmail.com"
      },
      address: {
        title: "Adres",
        content: "Çumra Organize Sanayi Bölgesi\\nÇumra/Konya"
      },
      hours: {
        title: "Çalışma Saatleri",
        content: "Pazartesi - Cuma: 08:00 - 18:00\\nCumartesi: 09:00 - 14:00"
      }
    },
    form: {
      title: "Mesaj Gönder",
      description: "Size nasıl yardımcı olabileceğimizi öğrenmek için formu doldurun.",
      name: {
        label: "Ad Soyad",
        placeholder: "Adınız ve soyadınız"
      },
      email: {
        label: "E-posta",
        placeholder: "E-posta adresiniz"
      },
      phone: {
        label: "Telefon",
        placeholder: "+90 5XX XXX XX XX"
      },
      company: {
        label: "Şirket",
        placeholder: "Şirket adınız"
      },
      subject: {
        label: "Konu"
      },
      subjectOptions: {
        general: "Genel Bilgi",
        sales: "Satış ve Fiyat",
        partnership: "İş Ortaklığı",
        support: "Teknik Destek"
      },
      message: {
        label: "Mesajınız",
        placeholder: "Mesajınızı buraya yazın..."
      },
      submit: "Mesaj Gönder"
    },
    quickContact: {
      title: "Hızlı İletişim",
      description: "Acil durumlar için doğrudan telefon ile arayabilir veya e-posta gönderebilirsiniz.",
      call: "Hemen Ara",
      email: "E-posta Gönder"
    }
  }
};

fs.writeFileSync('./messages/tr.json', JSON.stringify(trMerged, null, 2), 'utf8');

// EN dosyasını oluştur
const enAbout = JSON.parse(fs.readFileSync('./messages/en/about.json', 'utf8'));
const enProducts = JSON.parse(fs.readFileSync('./messages/en/products.json', 'utf8'));

const enMerged = {
  hero: {
    title: "The Sweetest Form of Happiness",
    description: "Since 2010, we have been delighting children and adults with our delicious jelly candies.",
    buttonText: "Discover Our Products"
  },
  homeHero: {
    title: "The Sweetest Form of Happiness",
    description: "Since 2010, we have been delighting children and adults with our delicious jelly candies.",
    buttonText: "Discover Our Products"
  },
  navigation: {
    home: "Home",
    about: "About Us",
    products: "Products",
    quality: "Quality",
    contact: "Contact"
  },
  about: enAbout,
  products: enProducts,
  home: {
    statsSection: {
      title: "Neviza in Numbers"
    },
    stats: {
      customers: "Happy Customers",
      customersDesc: "We have over 250 happy customers worldwide",
      capacity: "Tons Production",
      capacityDesc: "We serve with a monthly production capacity of 50 tons",
      certificates: "Quality Certificate",
      certificatesDesc: "We have 5 quality certificates at international standards",
      experience: "Years Experience",
      experienceDesc: "In the industry since 2010"
    },
    productSection: {
      title: "Our Product Categories"
    },
    products: {
      nevijel: {
        name: "Nevijel",
        description: "Pioneer of our premium quality soft jelly candies. Our main product Nevijel has been a quality and delicious option since 2010.",
        features: {
          feature1: "Soft texture",
          feature2: "Fruit flavored",
          feature3: "Natural colors",
          feature4: "Long shelf life"
        }
      },
      gummyBears: {
        name: "Gummy Bears",
        description: "Colorful and delicious bear-shaped candies loved by children. This product in development will soon be on our shelves.",
        features: {
          feature1: "Chewy pleasure",
          feature2: "Colorful appearance",
          feature3: "Fruit flavors",
          feature4: "Fun shape"
        }
      },
      fruitRings: {
        name: "Fruit Rings",
        description: "Our ring-shaped candies with natural fruit flavors. This delicious category in our new product development process will be with you very soon.",
        features: {
          feature1: "Ring shape",
          feature2: "Natural flavors",
          feature3: "Colorful varieties",
          feature4: "Soft texture"
        }
      }
    },
    productStatus: {
      available: "Available",
      development: "In Development",
      comingSoon: "Coming Soon"
    },
    quality: {
      title: "Leaders in Quality and Safety",
      paragraph1: "Since 2010, we have been one of the leading companies in quality jelly candy production. We produce in our modern facility under the highest hygiene standards.",
      paragraph2: "All our products are manufactured in compliance with Turkish Food Codex and international standards and undergo regular quality controls.",
      paragraph3: "Our mission is to provide safe, quality, and delicious products for children and adults. Our vision is to be Turkey's leading brand in the jelly candy sector."
    },
    buttons: {
      details: "See Details",
      comingSoon: "Coming Soon..."
    }
  },
  footer: {
    company: "Neviza Food Industry",
    address: "Çumra Organized Industrial Zone, Çumra/Konya - Turkey",
    email: "nevizagida@gmail.com",
    phone: "+90 507 651 42 00",
    rights: "All rights reserved.",
    description: "We have been producing quality jelly candies for over 15 years."
  },
  contact: {
    hero: {
      title: "Contact",
      description: "Get in touch with us, let us answer your questions."
    },
    infoSection: {
      title: "Contact Information"
    },
    info: {
      phone: {
        title: "Phone",
        content: "+90 507 651 42 00"
      },
      email: {
        title: "Email",
        content: "nevizagida@gmail.com"
      },
      address: {
        title: "Address",
        content: "Çumra Organized Industrial Zone\\nÇumra/Konya"
      },
      hours: {
        title: "Working Hours",
        content: "Monday - Friday: 08:00 - 18:00\\nSaturday: 09:00 - 14:00"
      }
    },
    form: {
      title: "Send Message",
      description: "Fill out the form to learn how we can help you.",
      name: {
        label: "Full Name",
        placeholder: "Your name and surname"
      },
      email: {
        label: "Email",
        placeholder: "Your email address"
      },
      phone: {
        label: "Phone",
        placeholder: "+90 5XX XXX XX XX"
      },
      company: {
        label: "Company",
        placeholder: "Your company name"
      },
      subject: {
        label: "Subject"
      },
      subjectOptions: {
        general: "General Information",
        sales: "Sales and Pricing",
        partnership: "Business Partnership",
        support: "Technical Support"
      },
      message: {
        label: "Your Message",
        placeholder: "Write your message here..."
      },
      submit: "Send Message"
    },
    quickContact: {
      title: "Quick Contact",
      description: "For urgent matters, you can call directly or send an email.",
      call: "Call Now",
      email: "Send Email"
    }
  }
};

fs.writeFileSync('./messages/en.json', JSON.stringify(enMerged, null, 2), 'utf8');

// RU dosyası için tam çeviri
const ruMerged = {
  hero: {
    title: "Самые сладкие моменты счастья",
    description: "С 2010 года мы радуем детей и взрослых нашими вкусными желейными конфетами.",
    buttonText: "Откройте для себя наши продукты"
  },
  homeHero: {
    title: "Самые сладкие моменты счастья",
    description: "С 2010 года мы радуем детей и взрослых нашими вкусными желейными конфетами.",
    buttonText: "Откройте для себя наши продукты"
  },
  navigation: {
    home: "Главная",
    about: "О нас",
    products: "Продукты",
    quality: "Качество",
    contact: "Контакты"
  },
  about: {
    title: "О нас",
    subtitle: "С 2010 года мы производим качественные желейные конфеты и распространяем счастье по всему миру.",
    storyTitle: "Наша история",
    valuesTitle: "Наши ценности",
    timelineTitle: "Наш путь",
    certificatesTitle: "Сертификаты качества",
    company: "Neviza Food Industry",
    story: {
      paragraph1: "Как Neviza, мы являемся одной из ведущих компаний Турции по производству желейных конфет с 2010 года. Сочетая современные технологии с традиционным вкусом, мы производим высококачественные и вкусные продукты.",
      paragraph2: "Наши стандарты гигиены и качества соответствуют международным нормам, и мы постоянно проводим исследования и разработки в наших производственных процессах. Таким образом, мы можем предложить инновационные продукты, которые нравятся и детям, и взрослым.",
      paragraph3: "Мы также экспортируем в более чем 4 страны мира, поддерживая присутствие на международных рынках. Благодаря нашему подходу, ориентированному на удовлетворенность клиентов, мы сделали Neviza брендом, представляющим надежные и качественные продукты."
    },
    values: [
      { title: "Качество", description: "Мы обеспечиваем высочайшее качество, производя в соответствии со стандартами ISO 22000." },
      { title: "Инновации", description: "Мы разрабатываем новые вкусы и продукты для постоянного улучшения." },
      { title: "Удовлетворенность клиентов", description: "Мы ставим удовлетворенность клиентов на первое место во всех наших процессах." },
      { title: "Надежность", description: "С нашим десятилетним опытом мы стали надежным брендом в отрасли." }
    ]
  },
  products: {
    hero: {
      title: "Наши продукты",
      description: "Откройте для себя наши сорта желейных конфет, произведенные с более чем 30-летним опытом."
    },
    categoriesSection: {
      title: "Категории наших продуктов",
      description: "Мы привлекаем потребителей всех возрастов нашим широким ассортиментом продукции."
    },
    categories: {
      nevijel: {
        title: "Nevijel",
        description: "Пионер наших мягких желейных конфет премиум-класса",
        features: {
          feature1: "Мягкая текстура",
          feature2: "Фруктовый вкус",
          feature3: "Натуральные цвета",
          feature4: "Длительный срок хранения"
        }
      },
      jelibon: {
        title: "Мишки",
        description: "Красочные и вкусные конфеты, любимые детьми",
        features: {
          feature1: "Удовольствие от жевания",
          feature2: "Красочный внешний вид",
          feature3: "Фруктовые вкусы"
        }
      },
      halkali: {
        title: "Кольца",
        description: "Предпочитаемые теми, кто не может отказаться от классических вкусов",
        features: {
          feature1: "Традиционный вкус",
          feature2: "Веселая форма кольца",
          feature3: "Различные ароматы"
        }
      }
    },
    status: {
      available: "В наличии",
      development: "В разработке",
      comingSoon: "Скоро"
    },
    quality: {
      title: "Наша гарантия качества",
      description: "Вся наша продукция производится на нашем предприятии, одобренном Министерством здравоохранения, в соответствии с высочайшими стандартами качества и гигиеническими условиями. Мы обеспечиваем безопасное производство с нашим сертификатом системы управления безопасностью пищевых продуктов ISO 22000."
    }
  },
  home: {
    statsSection: { title: "Neviza в цифрах" },
    stats: {
      customers: "Довольных клиентов",
      customersDesc: "У нас более 250 довольных клиентов по всему миру",
      capacity: "Тонн продукции",
      capacityDesc: "Мы обслуживаем с ежемесячной производственной мощностью 50 тонн",
      certificates: "Сертификат качества",
      certificatesDesc: "У нас 5 сертификатов качества по международным стандартам",
      experience: "Лет опыта",
      experienceDesc: "В отрасли с 2010 года"
    },
    productSection: { title: "Наши категории продуктов" },
    products: {
      nevijel: {
        name: "Nevijel",
        description: "Пионер наших мягких желейных конфет премиум-класса. Наш основной продукт Nevijel - это качественный и вкусный выбор с 2010 года.",
        features: {
          feature1: "Мягкая текстура",
          feature2: "Фруктовый вкус",
          feature3: "Натуральные цвета",
          feature4: "Длительный срок хранения"
        }
      },
      gummyBears: {
        name: "Мишки",
        description: "Красочные и вкусные конфеты в форме медвежат, любимые детьми.",
        features: {
          feature1: "Удовольствие от жевания",
          feature2: "Красочный внешний вид",
          feature3: "Фруктовые вкусы",
          feature4: "Веселая форма"
        }
      },
      fruitRings: {
        name: "Фруктовые кольца",
        description: "Наши конфеты в форме колец с натуральными фруктовыми ароматами.",
        features: {
          feature1: "Форма кольца",
          feature2: "Натуральные ароматы",
          feature3: "Красочные разновидности",
          feature4: "Мягкая текстура"
        }
      }
    },
    productStatus: {
      available: "В наличии",
      development: "В разработке",
      comingSoon: "Скоро"
    },
    buttons: {
      details: "Подробнее",
      comingSoon: "Скоро..."
    },
    quality: {
      title: "Лидеры в качестве и безопасности",
      paragraph1: "С 2010 года мы являемся одной из ведущих компаний по производству качественных желейных конфет. Мы производим на нашем современном предприятии по высочайшим стандартам гигиены.",
      paragraph2: "Вся наша продукция производится в соответствии с Турецким пищевым кодексом и международными стандартами и проходит регулярный контроль качества.",
      paragraph3: "Наша миссия - предоставлять безопасные, качественные и вкусные продукты для детей и взрослых. Наше видение - стать ведущим брендом Турции в секторе желейных конфет."
    }
  },
  footer: {
    company: "Neviza Food Industry",
    address: "Организованная промышленная зона Чумра, Чумра/Конья - Турция",
    email: "nevizagida@gmail.com",
    phone: "+90 507 651 42 00",
    rights: "Все права защищены.",
    description: "Мы производим качественные желейные конфеты уже более 15 лет."
  },
  contact: {
    hero: { title: "Контакты", description: "Свяжитесь с нами, позвольте нам ответить на ваши вопросы." },
    infoSection: { title: "Контактная информация" },
    info: {
      phone: { title: "Телефон", content: "+90 507 651 42 00" },
      email: { title: "Электронная почта", content: "nevizagida@gmail.com" },
      address: { title: "Адрес", content: "Организованная промышленная зона Чумра\\nЧумра/Конья" },
      hours: { title: "Часы работы", content: "Понедельник - Пятница: 08:00 - 18:00\\nСуббота: 09:00 - 14:00" }
    },
    form: {
      title: "Отправить сообщение",
      description: "Заполните форму, чтобы узнать, как мы можем вам помочь.",
      name: { label: "Полное имя", placeholder: "Ваше имя и фамилия" },
      email: { label: "Электронная почта", placeholder: "Ваш адрес электронной почты" },
      phone: { label: "Телефон", placeholder: "+90 5XX XXX XX XX" },
      company: { label: "Компания", placeholder: "Название вашей компании" },
      subject: { label: "Тема" },
      subjectOptions: {
        general: "Общая информация",
        sales: "Продажи и цены",
        partnership: "Деловое партнерство",
        support: "Техническая поддержка"
      },
      message: { label: "Ваше сообщение", placeholder: "Напишите ваше сообщение здесь..." },
      submit: "Отправить сообщение"
    },
    quickContact: {
      title: "Быстрая связь",
      description: "В срочных случаях вы можете позвонить напрямую или отправить электронное письмо.",
      call: "Позвонить сейчас",
      email: "Отправить письмо"
    }
  }
};

fs.writeFileSync('./messages/ru.json', JSON.stringify(ruMerged, null, 2), 'utf8');

// AR dosyası için tam çeviri
const arMerged = {
  hero: {
    title: "أحلى لحظات السعادة",
    description: "منذ عام 2010، نقدم حلوى الجيلي اللذيذة لإسعاد الأطفال والكبار.",
    buttonText: "اكتشف منتجاتنا"
  },
  homeHero: {
    title: "أحلى لحظات السعادة",
    description: "منذ عام 2010، نقدم حلوى الجيلي اللذيذة لإسعاد الأطفال والكبار.",
    buttonText: "اكتشف منتجاتنا"
  },
  navigation: {
    home: "الرئيسية",
    about: "من نحن",
    products: "منتجاتنا",
    quality: "الجودة",
    contact: "اتصل بنا"
  },
  about: {
    title: "من نحن",
    subtitle: "منذ عام 2010، نقوم بإنتاج حلوى الجيلي عالية الجودة ونشر السعادة في جميع أنحاء العالم.",
    storyTitle: "قصتنا",
    valuesTitle: "قيمنا",
    timelineTitle: "مسيرتنا",
    certificatesTitle: "شهادات الجودة",
    company: "شركة نيفيزا للصناعات الغذائية",
    story: {
      paragraph1: "نحن في نيفيزا، واحدة من الشركات الرائدة في تركيا في إنتاج حلوى الجيلي منذ عام 2010. من خلال الجمع بين التكنولوجيا الحديثة والذوق التقليدي، نقوم بإنتاج منتجات عالية الجودة ولذيذة.",
      paragraph2: "تتوافق معايير النظافة والجودة لدينا مع المعايير الدولية، ونقوم باستمرار بإجراء أنشطة البحث والتطوير في عمليات الإنتاج لدينا. وبهذه الطريقة، يمكننا تقديم منتجات مبتكرة تجذب الأطفال والكبار.",
      paragraph3: "نحن نصدر أيضًا إلى أكثر من 4 دول في جميع أنحاء العالم، ونحافظ على تواجدنا في الأسواق الدولية. من خلال نهجنا الذي يركز على رضا العملاء، جعلنا نيفيزا علامة تجارية تمثل المنتجات الموثوقة وعالية الجودة."
    },
    values: [
      { title: "الجودة", description: "نضمن أعلى ضمان للجودة من خلال الإنتاج وفقًا لمعايير ISO 22000." },
      { title: "الابتكار", description: "نطور نكهات ومنتجات جديدة للتحسين المستمر." },
      { title: "رضا العملاء", description: "نضع رضا العملاء في المقام الأول في جميع عملياتنا." },
      { title: "الموثوقية", description: "مع خبرتنا التي تمتد لعشر سنوات، أصبحنا علامة تجارية موثوقة في الصناعة." }
    ]
  },
  products: {
    hero: {
      title: "منتجاتنا",
      description: "اكتشف أصناف حلوى الجيلي عالية الجودة التي ننتجها بخبرة تزيد عن 30 عامًا."
    },
    categoriesSection: {
      title: "فئات منتجاتنا",
      description: "نجذب المستهلكين من جميع الأعمار بمجموعة منتجاتنا الواسعة."
    },
    categories: {
      nevijel: {
        title: "نيفيجل",
        description: "رائد حلوى الجيلي الطرية عالية الجودة لدينا",
        features: {
          feature1: "قوام طري",
          feature2: "نكهة الفواكه",
          feature3: "ألوان طبيعية",
          feature4: "صلاحية طويلة"
        }
      },
      jelibon: {
        title: "دببة الجيلي",
        description: "حلوى ملونة ولذيذة يحبها الأطفال",
        features: {
          feature1: "متعة المضغ",
          feature2: "مظهر ملون",
          feature3: "نكهات الفواكه"
        }
      },
      halkali: {
        title: "حلقات الحلوى",
        description: "يفضلها من لا يمكنهم التخلي عن المذاق الكلاسيكي",
        features: {
          feature1: "مذاق تقليدي",
          feature2: "شكل حلقة ممتع",
          feature3: "نكهات متنوعة"
        }
      }
    },
    status: {
      available: "متوفر",
      development: "قيد التطوير",
      comingSoon: "قريباً"
    },
    quality: {
      title: "ضمان الجودة",
      description: "يتم تصنيع جميع منتجاتنا في منشأتنا المعتمدة من وزارة الصحة وفقًا لأعلى معايير الجودة والظروف الصحية. نضمن الإنتاج الآمن بشهادة نظام إدارة سلامة الأغذية ISO 22000."
    }
  },
  home: {
    statsSection: { title: "نيفيزا بالأرقام" },
    stats: {
      customers: "عميل سعيد",
      customersDesc: "لدينا أكثر من 250 عميل سعيد حول العالم",
      capacity: "طن إنتاج",
      capacityDesc: "نخدم بقدرة إنتاجية شهرية تبلغ 50 طن",
      certificates: "شهادة جودة",
      certificatesDesc: "لدينا 5 شهادات جودة بمعايير دولية",
      experience: "سنوات خبرة",
      experienceDesc: "في الصناعة منذ 2010"
    },
    productSection: { title: "فئات منتجاتنا" },
    products: {
      nevijel: {
        name: "نيفيجل",
        description: "رائد حلوى الجيلي الطرية عالية الجودة لدينا. منتجنا الرئيسي نيفيجل خيار جودة ولذيذ منذ عام 2010.",
        features: {
          feature1: "قوام طري",
          feature2: "نكهة الفواكه",
          feature3: "ألوان طبيعية",
          feature4: "صلاحية طويلة"
        }
      },
      gummyBears: {
        name: "دببة الجيلي",
        description: "حلوى ملونة ولذيذة على شكل دببة يحبها الأطفال.",
        features: {
          feature1: "متعة المضغ",
          feature2: "مظهر ملون",
          feature3: "نكهات الفواكه",
          feature4: "شكل ممتع"
        }
      },
      fruitRings: {
        name: "حلقات الفواكه",
        description: "حلوى على شكل حلقات بنكهات الفواكه الطبيعية.",
        features: {
          feature1: "شكل حلقة",
          feature2: "نكهات طبيعية",
          feature3: "أنواع ملونة",
          feature4: "قوام طري"
        }
      }
    },
    productStatus: {
      available: "متوفر",
      development: "قيد التطوير",
      comingSoon: "قريباً"
    },
    buttons: {
      details: "عرض التفاصيل",
      comingSoon: "قريباً..."
    },
    quality: {
      title: "رواد في الجودة والسلامة",
      paragraph1: "منذ عام 2010، نحن واحدة من الشركات الرائدة في إنتاج حلوى الجيلي عالية الجودة. نقوم بالإنتاج في منشأتنا الحديثة وفقًا لأعلى معايير النظافة.",
      paragraph2: "يتم تصنيع جميع منتجاتنا وفقًا للدستور الغذائي التركي والمعايير الدولية وتخضع لفحوصات جودة منتظمة.",
      paragraph3: "مهمتنا هي تقديم منتجات آمنة وعالية الجودة ولذيذة للأطفال والكبار. رؤيتنا هي أن نكون العلامة التجارية الرائدة في تركيا في قطاع حلوى الجيلي."
    }
  },
  footer: {
    company: "شركة نيفيزا للصناعات الغذائية",
    address: "المنطقة الصناعية المنظمة تشومرا، تشومرا/قونيا - تركيا",
    email: "nevizagida@gmail.com",
    phone: "+90 507 651 42 00",
    rights: "جميع الحقوق محفوظة.",
    description: "نقوم بإنتاج حلوى الجيلي عالية الجودة منذ أكثر من 15 عاماً."
  },
  contact: {
    hero: { title: "اتصل بنا", description: "تواصل معنا، دعنا نجيب على أسئلتك." },
    infoSection: { title: "معلومات الاتصال" },
    info: {
      phone: { title: "الهاتف", content: "+90 507 651 42 00" },
      email: { title: "البريد الإلكتروني", content: "nevizagida@gmail.com" },
      address: { title: "العنوان", content: "المنطقة الصناعية المنظمة تشومرا\\nتشومرا/قونيا" },
      hours: { title: "ساعات العمل", content: "الاثنين - الجمعة: 08:00 - 18:00\\nالسبت: 09:00 - 14:00" }
    },
    form: {
      title: "إرسال رسالة",
      description: "املأ النموذج لمعرفة كيف يمكننا مساعدتك.",
      name: { label: "الاسم الكامل", placeholder: "اسمك ولقبك" },
      email: { label: "البريد الإلكتروني", placeholder: "عنوان بريدك الإلكتروني" },
      phone: { label: "الهاتف", placeholder: "+90 5XX XXX XX XX" },
      company: { label: "الشركة", placeholder: "اسم شركتك" },
      subject: { label: "الموضوع" },
      subjectOptions: {
        general: "معلومات عامة",
        sales: "المبيعات والأسعار",
        partnership: "شراكة تجارية",
        support: "الدعم الفني"
      },
      message: { label: "رسالتك", placeholder: "اكتب رسالتك هنا..." },
      submit: "إرسال الرسالة"
    },
    quickContact: {
      title: "اتصال سريع",
      description: "للأمور العاجلة، يمكنك الاتصال مباشرة أو إرسال بريد إلكتروني.",
      call: "اتصل الآن",
      email: "أرسل بريداً إلكترونياً"
    }
  }
};

fs.writeFileSync('./messages/ar.json', JSON.stringify(arMerged, null, 2), 'utf8');

console.log('Tüm dil dosyaları oluşturuldu: TR, EN, RU, AR');

// Dosyaları salt okunur yap (Windows)
if (process.platform === 'win32') {
  const { execSync } = require('child_process');
  const files = ['tr.json', 'en.json', 'ru.json', 'ar.json'];
  
  console.log('\n🔒 Dosyalar kilitleniyor...');
  
  files.forEach(file => {
    try {
      execSync(`powershell -Command "Set-ItemProperty -Path 'messages\\${file}' -Name IsReadOnly -Value $true"`, { stdio: 'ignore' });
      console.log(`✅ Kilitlendi: messages/${file}`);
    } catch (error) {
      console.warn(`⚠️  ${file} kilitlenemedi (normal olabilir)`);
    }
  });
  
  console.log('\n🎉 Tüm işlemler tamamlandı! Dosyalar korunuyor.');
  console.log('💡 Kilidi açmak için: .\\scripts\\unlock-translations.ps1');
}
