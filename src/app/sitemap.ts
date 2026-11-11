import type { MetadataRoute } from 'next';
import { defaultLocale, legalPages, locales, localizedPages, siteOrigin } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...locales.flatMap((locale) => localizedPages.map((page) => ({
      url: `${siteOrigin}/${locale}${page}`,
    }))),
    ...legalPages.map((page) => ({
      url: `${siteOrigin}/${defaultLocale}${page}`,
    })),
  ];
}
