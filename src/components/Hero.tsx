import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const currentLocale = useLocale();

  // Dil bazlı içerik
  const content = {
    tr: {
      title: 'Mutluluğun En Tatlı Hali',
      description: '2010 yılından bu yana ürettiğimiz lezzetli jöle şekerlerimizle çocuklara ve yetişkinlere keyif sunuyoruz.',
      buttonText: 'Ürünlerimizi Keşfedin',
    },
    en: {
      title: 'The Sweetest Form of Happiness',
      description: 'We have been delighting children and adults with our delicious jelly candies produced since 2010.',
      buttonText: 'Discover Our Products',
    },
    ar: {
      title: 'أحلى أشكال السعادة',
      description: 'نحن نسعد الأطفال والكبار بحلوى الجيلي اللذيذة التي ننتجها منذ عام 2010.',
      buttonText: 'اكتشف منتجاتنا',
    },
    ru: {
      title: 'Самая Сладкая Форма Счастья',
      description: 'Мы радуем детей и взрослых нашими вкусными желейными конфетами, производимыми с 2010 года.',
      buttonText: 'Откройте для себя наши продукты',
    }
  };
  
  // @ts-ignore - Dil içeriğini al
  const { title, description, buttonText } = content[currentLocale] || content.tr;
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white pt-20 pb-12 md:pt-32 md:pb-20">
      {/* Dekoratif arka plan şekilleri */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dağınık şekerlemeler - sol üst */}
        <div className="absolute -left-10 -top-10 transform rotate-12">
          <div className="w-32 h-32 rounded-full bg-secondary-yellow opacity-20 blur-2xl"></div>
        </div>
        
        {/* Dağınık şekerlemeler - sağ alt */}
        <div className="absolute right-1/4 bottom-20 transform -rotate-12">
          <div className="w-40 h-40 rounded-full bg-secondary-mint opacity-20 blur-3xl"></div>
        </div>
        
        {/* Dağınık şekerlemeler - orta */}
        <div className="absolute right-10 top-1/3 transform rotate-45">
          <div className="w-24 h-24 rounded-full bg-secondary-coral opacity-20 blur-xl"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="font-baloo text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              {description}
            </p>
            <Link 
              href={`/${currentLocale}/products`} 
              className="inline-flex items-center justify-center rounded-md bg-primary-500 px-6 py-3 text-base font-medium text-white shadow-md hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              {buttonText}
            </Link>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-64 md:h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  {/* Halo efekti */}
                  <div className="absolute inset-0 bg-primary-300/20 rounded-full blur-3xl transform scale-125"></div>
                  
                  {/* Hero görseli - Basit ve garantili çalışan SVG */}
                  <Image 
                    src="/nevijel-product.svg"
                    alt="Neviza Jöle Şekerler"
                    width={500}
                    height={500}
                    className="relative z-10 drop-shadow-xl w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}