import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Star, Heart, Award, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface ProductsPageProps {
  params: { locale: string };
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const locale = params.locale;
  await setRequestLocale(locale);
  
  // Çevirileri getTranslations ile alıyoruz
  const t = await getTranslations();

  const productCategories = [
    {
      id: 'nevijel',
      title: t('products.categories.nevijel.title'),
      description: t('products.categories.nevijel.description'),
      features: [
        t('products.categories.nevijel.features.feature1'),
        t('products.categories.nevijel.features.feature2'),
        t('products.categories.nevijel.features.feature3'),
        t('products.categories.nevijel.features.feature4')
      ],
      colors: 'bg-gradient-to-br from-blue-400 to-purple-500',
      icon: Sparkles,
      available: true,
      status: t('products.status.available')
    },
    {
      id: 'jelibon',
      title: t('products.categories.jelibon.title'),
      description: t('products.categories.jelibon.description'),
      features: [
        t('products.categories.jelibon.features.feature1'),
        t('products.categories.jelibon.features.feature2'),
        t('products.categories.jelibon.features.feature3')
      ],
      colors: 'bg-gradient-to-br from-rose-400 to-red-500',
      icon: Sparkles,
      available: true,
      status: t('products.status.available')
    },
    {
      id: 'halkali',
      title: t('products.categories.halkali.title'),
      description: t('products.categories.halkali.description'),
      features: [
        t('products.categories.halkali.features.feature1'),
        t('products.categories.halkali.features.feature2'),
        t('products.categories.halkali.features.feature3')
      ],
      colors: 'bg-gradient-to-br from-emerald-400 to-green-500',
      icon: Sparkles,
      available: false,
      status: t('products.status.comingSoon')
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-candy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-headline font-bold text-gray-900 mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
        </div>
      </section>

      {/* Ürün Kategorileri */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-gray-900 mb-4">
              {t('products.categoriesSection.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('products.categoriesSection.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={category.id} className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Kategori Görseli */}
                  <div className={`relative h-48 ${category.colors} flex items-center justify-center`}>
                    {category.id === 'nevijel' ? (
                      <div className="relative">
                        <Image 
                          src="/nevijel-product.svg" 
                          alt="Nevijel Ürünü" 
                          width={120} 
                          height={120}
                          className="drop-shadow-lg"
                        />
                      </div>
                    ) : (
                      <div className="bg-white/20 rounded-full p-4 backdrop-blur-sm">
                        <div className="bg-white/30 rounded-full p-3">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    )}
                    
                    {/* Durum Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold ${
                      category.available 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {category.status}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {category.description}
                    </p>

                    {/* Özellikler */}
                    <div className="space-y-2 mb-6">
                      {category.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Buton kaldırıldı */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kalite Güvencesi */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('products.quality.title')}
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('products.quality.description')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
