import type { Metadata, Viewport } from "next";
import { Inter, Baloo_2 } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { isLocale, locales, siteOrigin } from '@/lib/site';
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
  metadataBase: new URL(siteOrigin),
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
  keywords: ["neviza gıda", "neviza", "gıda", "şeker üreticisi", "jelibon", "nevijel", "ayıcık şeker", "jöle şeker", "yumuşak şeker", "türk markası", "kaliteli şeker", "çocuk şekeri", "neviza gıda konya", "şeker fabrikası", "türkiye şeker", "candy manufacturer turkey"],
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
};

export const viewport: Viewport = {
  themeColor: '#00B4D8',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  setRequestLocale(locale);
  const { navigation } = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${inter.variable} ${baloo2.variable} font-body antialiased bg-gradient-soft min-h-screen flex flex-col`} suppressHydrationWarning>
        <StructuredData />
        
        <NextIntlClientProvider locale={locale} messages={{ navigation }}>
          <Header />
        </NextIntlClientProvider>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
