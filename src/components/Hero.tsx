import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const currentLocale = useLocale();

  // Dil bazlı içerik
  const content = {
    tr: {
      title: "Mutluluğun En Tatlı Hali",
      description: "2010 yılından bu yana ürettiğimiz lezzetli jöle şekerlerimizle çocuklara ve yetişkinlere keyif sunuyoruz.",
      buttonText: "Ürünlerimizi Keşfedin",
    },
    en: {
      title: "The Sweetest Form of Happiness",
      description: "We have been delighting children and adults with our delicious jelly candies produced since 2010.",
      buttonText: "Discover Our Products",
    },
    ar: {
      title: "أحلى أشكال السعادة",
      description: "نحن نسعد الأطفال والكبار بحلوى الجيلي اللذيذة التي ننتجها منذ عام 2010.",
      buttonText: "اكتشف منتجاتنا",
    },
    ru: {
      title: "Самая Сладкая Форма Счастья",
      description: "Мы радуем детей и взрослых нашими вкусными желейными конфетами, производимыми с 2010 года.",
      buttonText: "Откройте для себя наши продукты",
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Sol Taraf - Metin İçeriği */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
              {content[currentLocale as keyof typeof content].title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              {content[currentLocale as keyof typeof content].description}
            </p>
            <Link
              href={"/" + currentLocale + "/products"}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#00BFB3] hover:bg-[#00a79c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BFB3] transition-colors duration-200"
            >
              {content[currentLocale as keyof typeof content].buttonText}
            </Link>
          </div>

          {/* Sağ Taraf - Ürün Görseli */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-lg">
            <div className="relative w-full aspect-square">
              <Image
                src="/nevijel-product.svg"
                alt="Nevijel Ürün Görseli"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
