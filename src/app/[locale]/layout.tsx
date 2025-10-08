import type { Metadata } from "next";
import { Inter, Baloo_2 } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
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
  title: {
    template: "%s | Neviza Gıda",
    default: "Neviza Gıda - Mutluluğun En Tatlı Hali",
  },
  icons: {
    icon: '/favicon.svg',
  },
  description: "Neviza Gıda olarak güvenli ve kaliteli ürün sunumu ile Türkiye'nin güvenilir şeker markasıyız. Nevijel ve diğer yumuşak şeker çeşitleriyle çocuklara ve dünyaya neşe katıyoruz.",
  keywords: ["neviza", "gıda", "şeker", "jelibon", "nevijel", "ayıcık şeker", "türk markası", "kaliteli şeker"],
  authors: [{ name: "Neviza Gıda" }],
  creator: "Neviza Gıda",
  publisher: "Neviza Gıda",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://nevizagida.com",
    siteName: "Neviza Gıda",
    title: "Neviza Gıda - Mutluluğun En Tatlı Hali",
    description: "Türkiye'nin güvenilir şeker markası. Kaliteli ve lezzetli şeker üretiminde 25 yıllık deneyim.",
    images: [
      {
        url: "/images/brand/neviza-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Neviza Gıda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neviza Gıda - Mutluluğun En Tatlı Hali",
    description: "Türkiye'nin güvenilir şeker markası. Kaliteli ve lezzetli şeker üretiminde 25 yıllık deneyim.",
    images: ["/images/brand/neviza-og-image.jpg"],
  },
  alternates: {
    languages: {
      tr: "/tr",
      en: "/en",
      ar: "/ar",
      ru: "/ru",
    },
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
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#00B4D8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} ${baloo2.variable} font-body antialiased bg-gradient-soft min-h-screen flex flex-col`}>
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