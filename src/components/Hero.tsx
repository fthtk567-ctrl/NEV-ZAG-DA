import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const currentLocale = useLocale();

  // Dil bazlÄ± iÃ§erik
  const content = {
    tr: {
      title: 'MutluluÄŸun En TatlÄ± Hali',
      description: '2010 yÄ±lÄ±ndan bu yana Ã¼rettiÄŸimiz lezzetli jÃ¶le ÅŸekerlerimizle Ã§ocuklara ve yetiÅŸkinlere keyif sunuyoruz.',
      buttonText: 'ÃœrÃ¼nlerimizi KeÅŸfedin',
    },
    en: {
      title: 'The Sweetest Form of Happiness',
      description: 'We have been delighting children and adults with our delicious jelly candies produced since 2010.',
      buttonText: 'Discover Our Products',
    },
    ar: {
      title: 'Ø£Ø­Ù„Ù‰ Ø£Ø´ÙƒØ§Ù„ Ø§Ù„Ø³Ø¹Ø§Ø¯Ø©',
      description: 'Ù†Ø­Ù† Ù†Ø³Ø¹Ø¯ Ø§Ù„Ø£Ø·ÙØ§Ù„ ÙˆØ§Ù„ÙƒØ¨Ø§Ø± Ø¨Ø­Ù„ÙˆÙ‰ Ø§Ù„Ø¬ÙŠÙ„ÙŠ Ø§Ù„Ù„Ø°ÙŠØ°Ø© Ø§Ù„ØªÙŠ Ù†Ù†ØªØ¬Ù‡Ø§ Ù…Ù†Ø° Ø¹Ø§Ù… 2010.',
      buttonText: 'Ø§ÙƒØªØ´Ù Ù…Ù†ØªØ¬Ø§ØªÙ†Ø§',
    },
    ru: {
      title: 'Ğ¡Ğ°Ğ¼Ğ°Ñ Ğ¡Ğ»Ğ°Ğ´ĞºĞ°Ñ Ğ¤Ğ¾Ñ€Ğ¼Ğ° Ğ¡Ñ‡Ğ°ÑÑ‚ÑŒÑ',
      description: 'ĞœÑ‹ Ñ€Ğ°Ğ´ÑƒĞµĞ¼ Ğ´ĞµÑ‚ĞµĞ¹ Ğ¸ Ğ²Ğ·Ñ€Ğ¾ÑĞ»Ñ‹Ñ… Ğ½Ğ°ÑˆĞ¸Ğ¼Ğ¸ Ğ²ĞºÑƒÑĞ½Ñ‹Ğ¼Ğ¸ Ğ¶ĞµĞ»ĞµĞ¹Ğ½Ñ‹Ğ¼Ğ¸ ĞºĞ¾Ğ½Ñ„ĞµÑ‚Ğ°Ğ¼Ğ¸, Ğ¿Ñ€Ğ¾Ğ¸Ğ·Ğ²Ğ¾Ğ´Ğ¸Ğ¼Ñ‹Ğ¼Ğ¸ Ñ 2010 Ğ³Ğ¾Ğ´Ğ°.',
      buttonText: 'ĞÑ‚ĞºÑ€Ğ¾Ğ¹Ñ‚Ğµ Ğ´Ğ»Ñ ÑĞµĞ±Ñ Ğ½Ğ°ÑˆĞ¸ Ğ¿Ñ€Ğ¾Ğ´ÑƒĞºÑ‚Ñ‹',
    }
  };
  
  // @ts-ignore - Dil iÃ§eriÄŸini al
  const { title, description, buttonText } = content[currentLocale] || content.tr;
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white pt-20 pb-12 md:pt-32 md:pb-20">
      {/* Dekoratif arka plan ÅŸekilleri */}
      <div className="absolute inset-0 overflow-hidden">
        {/* DaÄŸÄ±nÄ±k ÅŸekerlemeler - sol Ã¼st */}
        <div className="absolute -left-10 -top-10 transform rotate-12">
          <div className="w-32 h-32 rounded-full bg-secondary-yellow opacity-20 blur-2xl"></div>
        </div>
        
        {/* DaÄŸÄ±nÄ±k ÅŸekerlemeler - saÄŸ alt */}
        <div className="absolute right-1/4 bottom-20 transform -rotate-12">
          <div className="w-40 h-40 rounded-full bg-secondary-mint opacity-20 blur-3xl"></div>
        </div>
        
        {/* DaÄŸÄ±nÄ±k ÅŸekerlemeler - orta */}
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
                  
                  {/* Hero gÃ¶rseli - Basit ve garantili Ã§alÄ±ÅŸan SVG */}
                  <Image 
                    src="/nevijel-product.svg"
                    alt="Neviza JÃ¶le Åekerler"
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
