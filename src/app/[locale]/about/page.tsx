import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Award, Users, Clock, Target, Heart, Star, CheckCircle } from 'lucide-react';

interface AboutPageProps {
  params: {
    locale: string | Promise<string>;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const locale = await Promise.resolve(params.locale);
  setRequestLocale(locale);
  
  // Çevirileri getTranslations ile alıyoruz
  const t = await getTranslations();

  const companyValues = [
    {
      icon: Shield,
      title: t('about.values.0.title'),
      description: t('about.values.0.description')
    },
    {
      icon: Heart,
      title: t('about.values.2.title'),
      description: t('about.values.2.description')
    },
    {
      icon: Target,
      title: t('about.values.1.title'),
      description: t('about.values.1.description')
    },
    {
      icon: Users,
      title: t('about.values.3.title'),
      description: t('about.values.3.description')
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-headline font-bold text-white mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Simple About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-gray-900 mb-8">
              {t('about.company')}
            </h2>
            <div className="prose prose-lg mx-auto text-gray-800">
              <p className="text-xl leading-relaxed mb-6 text-gray-800">
                {t('about.story.paragraph1')}
              </p>
              <p className="text-xl leading-relaxed mb-6 text-gray-800">
                {t('about.story.paragraph2')}
              </p>
              <p className="text-xl leading-relaxed text-gray-800">
                {t('about.story.paragraph3')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}