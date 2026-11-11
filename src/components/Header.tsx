'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { legalPages, localizedPages, logoPath } from '@/lib/site';

const locales = [
  { code: "tr", name: "Türkçe" },
  { code: "en", name: "English" },
  { code: "ar", name: "العربية" },
  { code: "ru", name: "Русский" }
] as const;

export default function Header() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const currentPage = [...localizedPages, ...legalPages].find(
    (page) => pathname === `/${currentLocale}${page}`,
  ) ?? '';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const t = useTranslations("navigation");
  
  const navigation = [
    { name: t("home"), href: `/${currentLocale}` as const },
    { name: t("about"), href: `/${currentLocale}/about` as const },
    { name: t("products"), href: `/${currentLocale}/products` as const },
    { name: t("contact"), href: `/${currentLocale}/contact` as const }
  ] as const;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href={`/${currentLocale}`} className="flex items-center">
            <div className="relative w-24 h-12 flex items-center justify-center">
              <Image 
                src={logoPath}
                alt="Neviza Logo" 
                width={96}
                height={48}
                className="w-auto h-12"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className="text-gray-700 hover:text-primary-500 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Side: Language Selector + Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Language Selector - Always Visible */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                aria-label={t('language')}
                aria-expanded={isLanguageOpen}
                aria-controls={isLanguageOpen ? 'language-options' : undefined}
                onClick={() => setIsLanguageOpen((open) => !open)}
                className="flex items-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {locales.find(l => l.code === currentLocale)?.name}
                </span>
              </Button>
              
              {isLanguageOpen && (
                <div id="language-options" className="absolute end-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {locales.map((locale) => (
                    <Link
                      key={locale.code}
                      href={`/${locale.code}${currentPage}`}
                      lang={locale.code}
                      hrefLang={locale.code}
                      aria-current={currentLocale === locale.code ? 'true' : undefined}
                      className={"block px-4 py-2 hover:bg-gray-50 transition-colors " +
                        (currentLocale === locale.code ? "bg-primary-50 text-primary-600" : "text-gray-700")
                      }
                      onClick={() => setIsLanguageOpen(false)}
                    >
                      {locale.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="lg:hidden"
              aria-label={t('menu')}
              aria-expanded={isMenuOpen}
              aria-controls={isMenuOpen ? 'mobile-navigation' : undefined}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav id="mobile-navigation" className="lg:hidden py-6">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className="text-gray-700 hover:text-primary-500 font-medium transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
