import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nevizagida.com';
  const locales = ['tr', 'en', 'ru', 'ar'];
  const pages = ['', '/about', '/products', '/contact', '/privacy', '/terms'];

  const sitemap: MetadataRoute.Sitemap = [];

  // Ana sayfa (her dil için)
  locales.forEach(locale => {
    pages.forEach(page => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1 : 0.8,
      });
    });
  });

  return sitemap;
}
