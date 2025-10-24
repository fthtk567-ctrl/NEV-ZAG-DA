import type { Metadata } from "next";
import { Inter, Baloo_2 } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const baloo2 = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nevizagida.com'),
  title: {
    template: "%s | Neviza Gıda",
    default: "Neviza Gıda - Mutluluğun En Tatlı Hali",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/images/brand/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  description: "Neviza Gıda olarak güvenli ve kaliteli ürün sunumu ile Türkiye'nin güvenilir şeker markasıyız. Nevijel ve diğer yumuşak şeker çeşitleriyle çocuklara ve dünyaya neşe katıyoruz.",
  keywords: ["neviza", "gıda", "şeker", "jelibon", "nevijel", "ayıcık şeker", "türk markası", "kaliteli şeker", "jöle şeker", "yumuşak şeker", "çocuk şekeri", "neviza gıda"],
  authors: [{ name: "Neviza Gıda" }],
  creator: "Neviza Gıda",
  publisher: "Neviza Gıda",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.nevizagida.com",
    siteName: "Neviza Gıda",
    title: "Neviza Gıda - Mutluluğun En Tatlı Hali",
    description: "Türkiye'nin güvenilir şeker markası. Kaliteli ve lezzetli şeker üretiminde 25 yıllık deneyim.",
    images: [
      {
        url: "/images/brand/neviza-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Neviza Gıda - Türkiye'nin Güvenilir Şeker Markası",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neviza Gıda - Mutluluğun En Tatlı Hali",
    description: "Türkiye'nin güvenilir şeker markası. Kaliteli ve lezzetli şeker üretiminde 25 yıllık deneyim.",
    images: ["/images/brand/neviza-og-image.jpg"],
    creator: "@nevizagida",
  },
  alternates: {
    canonical: "/",
    languages: {
      tr: "/tr",
      en: "/en",
      ar: "/ar",
      ru: "/ru",
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
  },
};

const locales = ['tr', 'en', 'ar', 'ru'];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#00B4D8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.variable} ${baloo2.variable} font-body antialiased bg-gradient-soft min-h-screen flex flex-col`} suppressHydrationWarning>
        {/* JSON-LD Structured Data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Neviza Gıda Sanayi",
              "alternateName": "Neviza",
              "url": "https://www.nevizagida.com",
              "logo": "https://www.nevizagida.com/neviza-logo-final.svg",
              "description": "Türkiye'nin güvenilir jöle şeker üreticisi. 2010'dan beri kaliteli ve lezzetli ürünler sunuyoruz.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Çumra Organize Sanayi Bölgesi",
                "addressLocality": "Çumra",
                "addressRegion": "Konya",
                "addressCountry": "TR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+90-507-651-42-00",
                "contactType": "customer service",
                "email": "nevizagida@gmail.com"
              },
              "sameAs": [
                "https://www.instagram.com/nevizagida/",
                "https://www.facebook.com/nevizagida/"
              ]
            })
          }}
        />
        
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}