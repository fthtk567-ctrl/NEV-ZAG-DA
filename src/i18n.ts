import { getRequestConfig } from 'next-intl/server';

const locales = ['tr', 'en', 'ar', 'ru']; // Tüm diller aktif
const defaultLocale = 'tr';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  // Ensure that the incoming `locale` is valid
  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }
  
  // Ana dil dosyası
  const mainMessages = (await import(`../messages/${locale}.json`)).default;
  
  // Sayfalara özel çevirileri yükle
  const loadNamespaceMessages = async (namespace: string) => {
    try {
      // Önce dile özel klasör içindeki dosyayı kontrol et
      return (await import(`../messages/${locale}/${namespace}.json`)).default;
    } catch (err) {
      try {
        // Eğer bulunamazsa, kök dizindeki dosyayı kontrol et
        return (await import(`../messages/${namespace}.json`)).default;
      } catch (err) {
        // Hiçbir dosya bulunamazsa boş nesne döndür
        console.warn(`Translation file for namespace '${namespace}' and locale '${locale}' not found`);
        return {};
      }
    }
  };

  // About ve Products sayfaları için çevirileri paralel olarak yükle
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