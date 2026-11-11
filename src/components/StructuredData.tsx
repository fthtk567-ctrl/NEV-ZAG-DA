import { contactEmail, locales, logoPath, siteName, siteOrigin } from '@/lib/site';

const organizationId = siteOrigin + '/#organization';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: siteName,
      url: siteOrigin,
      logo: new URL(logoPath, siteOrigin).href,
      email: contactEmail,
      sameAs: [
        'https://www.instagram.com/nevizagida/',
        'https://www.facebook.com/nevizagida/',
      ],
    },
    {
      '@type': 'WebSite',
      name: siteName,
      url: siteOrigin,
      publisher: { '@id': organizationId },
      inLanguage: locales,
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
    />
  );
}
