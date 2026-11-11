import type { Metadata } from 'next';

export const siteName = 'Neviza Gıda';
export const siteOrigin = 'https://xn--nevizagda-1pb.com.tr'; // nevizagıda.com.tr
export const contactEmail = 'nevizagida@gmail.com';
export const logoPath = '/neviza-logo-final.svg';
export const productImagePath = '/images/products/nevijel.webp';

export const locales = ['tr', 'en', 'ar', 'ru'] as const;
export const defaultLocale = locales[0];
export const localizedPages = ['', '/about', '/products', '/contact'] as const;
export const legalPages = ['/privacy', '/terms'] as const;

export function isLocale(value: string | undefined): value is (typeof locales)[number] {
  return locales.some((locale) => locale === value);
}

export function localizedMetadata(
  locale: string,
  page: (typeof localizedPages)[number],
  title: string,
  description: string,
): Metadata {
  const canonical = `/${locale}${page}`;
  const fullTitle = page === '' ? `${siteName} - ${title}` : `${title} | ${siteName}`;
  const image = '/images/brand/neviza-og-image.jpg';

  return {
    title: page === '' ? { absolute: fullTitle } : title,
    description,
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(locales.map((language) => [language, `/${language}${page}`])),
        'x-default': `/${defaultLocale}${page}`,
      },
    },
    openGraph: {
      type: 'website',
      siteName,
      url: canonical,
      title: fullTitle,
      description,
      images: [{ url: image, alt: siteName }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
