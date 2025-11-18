import React from 'react';

interface StructuredDataProps {
  locale: string;
}

export default function StructuredData({ locale }: StructuredDataProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Neviza Gıda',
    alternateName: 'Neviza Food',
    url: 'https://www.nevizagida.com',
    logo: 'https://www.nevizagida.com/images/brand/neviza-logo.png',
    description:
      locale === 'tr'
        ? "Türkiye'nin güvenilir şeker markası. 15 yıllık tecrübeyle kaliteli jöle şeker ve yumuşak şeker üretimi."
        : "Turkey's trusted candy brand. 15 years of experience in quality jelly candy and soft candy production.",
    sameAs: [
      'https://www.facebook.com/nevizagida',
      'https://www.instagram.com/nevizagida',
      'https://twitter.com/nevizagida',
      'https://www.linkedin.com/company/nevizagida',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@nevizagida.com',
      availableLanguage: ['Turkish', 'English', 'Arabic', 'Russian'],
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.nevizagida.com',
    name: 'Neviza Gıda',
    image: 'https://www.nevizagida.com/images/brand/neviza-logo.png',
    description:
      locale === 'tr'
        ? "15 yıllık tecrübeyle Türkiye'nin en kaliteli jöle şeker ve yumuşak şeker üreticisi"
        : "Turkey's highest quality jelly candy and soft candy manufacturer with 15 years of experience",
    telephone: '+90-XXX-XXX-XXXX',
    email: 'info@nevizagida.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TR',
      addressLocality: 'İstanbul',
    },
    priceRange: '$$',
    currenciesAccepted: 'TRY, USD, EUR',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    openingHours: 'Mo-Fr 09:00-18:00',
    url: 'https://www.nevizagida.com',
    sameAs: [
      'https://www.facebook.com/nevizagida',
      'https://www.instagram.com/nevizagida',
      'https://twitter.com/nevizagida',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Neviza Gıda',
    url: 'https://www.nevizagida.com',
    description:
      locale === 'tr'
        ? "Neviza Gıda resmi web sitesi - Kaliteli şeker ve jelibon üretimi"
        : "Neviza Food official website - Quality candy and jelly production",
    inLanguage: [
      { '@type': 'Language', name: 'Turkish', alternateName: 'tr' },
      { '@type': 'Language', name: 'English', alternateName: 'en' },
      { '@type': 'Language', name: 'Arabic', alternateName: 'ar' },
      { '@type': 'Language', name: 'Russian', alternateName: 'ru' },
    ],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.nevizagida.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: locale === 'tr' ? 'Ana Sayfa' : 'Home',
        item: `https://www.nevizagida.com/${locale}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
