import { getRequestConfig } from 'next-intl/server';

const locales = ['tr', 'en', 'ar', 'ru']; // TÃ¼m diller aktif
const defaultLocale = 'tr';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  // Ensure that the incoming `locale` is valid
  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }
  
  // Ana dil dosyasÄ±
  const mainMessages = (await import(`../messages/${locale}.json`)).default;
  
  // Sayfalara Ã¶zel Ã§evirileri yÃ¼kle
  const loadNamespaceMessages = async (namespace: string) => {
    try {
      // Ã–nce dile Ã¶zel klasÃ¶r iÃ§indeki dosyayÄ± kontrol et
      return (await import(`../messages/${locale}/${namespace}.json`)).default;
    } catch (err) {
      try {
        // EÄŸer bulunamazsa, kÃ¶k dizindeki dosyayÄ± kontrol et
        return (await import(`../messages/${namespace}.json`)).default;
      } catch (err) {
        // HiÃ§bir dosya bulunamazsa boÅŸ nesne dÃ¶ndÃ¼r
        console.warn(`Translation file for namespace '${namespace}' and locale '${locale}' not found`);
        return {};
      }
    }
  };

  // About ve Products sayfalarÄ± iÃ§in Ã§evirileri paralel olarak yÃ¼kle
  const [aboutMessages, productsMessages] = await Promise.all([
    loadNamespaceMessages('about'),
    loadNamespaceMessages('products')
  ]);

  return {
    locale,
    messages: {
      ...mainMessages,
      about: aboutMessages,
      products: productsMessages
    }
  };
});
