import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Heart, Award, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Şirket istatistikleri
  const companyStats = [
    { 
      id: 1, 
      value: '15+', 
      label: 'Yıllık Deneyim',
      description: '2010\'dan beri sektördeyiz',
      icon: <Award className="h-6 w-6 text-primary-500" /> 
    },
    { 
      id: 2, 
      value: '250+', 
      label: 'Mutlu Müşteri',
      description: 'Türkiye genelinde',
      icon: <Heart className="h-6 w-6 text-pink-500" /> 
    },
    { 
      id: 3, 
      value: '50+', 
      label: 'Üretim Kapasitesi',
      description: 'Ton/Ay',
      icon: <Sparkles className="h-6 w-6 text-amber-500" /> 
    },
    { 
      id: 4, 
      value: '5', 
      label: 'Kalite Sertifikası',
      description: 'Ulusal ve uluslararası',
      icon: <Star className="h-6 w-6 text-yellow-500" /> 
    },
  ];

  // Ürün kategorileri
  const productCategories = [
    {
      id: 'nevijel',
      name: 'Nevijel',
      description: 'Premium kalitede yumuşak jöle şekerlerimizin öncüsü. Ana ürünümüz olan Nevijel, 2010\'dan beri ürettiğimiz kaliteli ve lezzetli bir seçenek.',
      image: '/nevijel-product.svg',
      features: ['Yumuşak dokulu', 'Meyve aromalı', 'Doğal renkler', 'Uzun raf ömrü'],
      gradient: 'from-pink-400 to-purple-300',
      status: 'available',
      link: `/${locale}/products/nevijel`,
    },
    {
      id: 'gummy-bears',
      name: 'Jelibon Ayıcık',
      description: 'Çocukların en sevdiği renkli ve lezzetli ayıcık şekerleri. Geliştirme aşamasında olan bu ürün çok yakında raflarımızda yerini alacak.',
      image: '/gummy-bear.svg',
      features: ['Çiğneme keyfi', 'Renkli görünüm', 'Meyve lezzetleri', 'Eğlenceli şekil'],
      gradient: 'from-yellow-400 to-amber-300',
      status: 'development',
      link: `/${locale}/products/gummy-bears`,
    },
    {
      id: 'fruit-rings',
      name: 'Meyve Halkaları',
      description: 'Doğal meyve aromalı halka şeklindeki şekerlerimiz. Yeni ürün geliştirme sürecimizde olan bu lezzetli kategorimiz çok yakında sizlerle.',
      image: '/fruit-ring.svg',
      features: ['Halka şekli', 'Doğal aromalar', 'Renkli çeşitler', 'Yumuşak doku'],
      gradient: 'from-orange-400 to-red-300',
      status: 'coming-soon',
      link: `/${locale}/products/fruit-rings`,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Company Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Rakamlarla Neviza</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat) => (
              <Card key={stat.id} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-4xl font-bold text-primary-500">{stat.value}</CardTitle>
                    <div className="rounded-full bg-primary-100 p-2">
                      {stat.icon}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-lg">{stat.label}</h3>
                  <CardDescription>{stat.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Ürün Kategorilerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <div 
                key={category.id}
                className={`rounded-xl overflow-hidden bg-gradient-to-br ${category.gradient} p-1 shadow-lg`}
              >
                <div className="bg-white rounded-lg h-full p-6 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    {category.status === 'available' ? (
                      <span className="px-2 py-1 text-xs font-semibold rounded bg-green-100 text-green-800">Mevcut</span>
                    ) : category.status === 'development' ? (
                      <span className="px-2 py-1 text-xs font-semibold rounded bg-amber-100 text-amber-800">Geliştirme Aşamasında</span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-semibold rounded bg-blue-100 text-blue-800">Yakında</span>
                    )}
                  </div>
                  
                  <div className="flex-1 mb-6">
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex justify-center my-6">
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={120}
                        height={120}
                        className="drop-shadow-lg"
                      />
                    </div>
                    <ul className="space-y-2">
                      {category.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600">{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    {category.status === 'available' ? (
                      <Link 
                        href={category.link} 
                        className="inline-flex items-center justify-center rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-1 w-full"
                      >
                        Detayları Gör
                      </Link>
                    ) : (
                      <button 
                        disabled 
                        className="inline-flex items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 shadow hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 w-full cursor-not-allowed"
                      >
                        Yakında...
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Kalite ve Güvende Öncüyüz</h2>
              <p className="text-gray-700 mb-6">
                2010 yılından bu yana, kaliteli jöle şeker üretiminde sektörün öncü firmalarından biriyiz. Modern tesisimizde, en yüksek hijyen standartlarında üretim yapıyoruz.
              </p>
              <p className="text-gray-700 mb-6">
                Tüm ürünlerimiz, Türk Gıda Kodeksi ve uluslararası standartlara uygun olarak üretilmekte ve düzenli kalite kontrollerinden geçmektedir.
              </p>
              <p className="text-gray-700">
                Misyonumuz, çocuklar ve yetişkinler için güvenli, kaliteli ve lezzetli ürünler sunmaktır. Vizyonumuz ise Türkiye'nin jöle şeker sektöründe lider markası olmaktır.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-[300px] h-[300px]">
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-3xl"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg width="240" height="240" viewBox="0 0 240 240" className="text-primary-500">
                    <path
                      fill="currentColor"
                      d="M120 0c66.274 0 120 53.726 120 120s-53.726 120-120 120S0 186.274 0 120 53.726 0 120 0zm0 80c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40z"
                    />
                    <path
                      fill="currentColor"
                      d="M120 20c55.228 0 100 44.772 100 100s-44.772 100-100 100S20 175.228 20 120 64.772 20 120 20zm0 40c-33.137 0-60 26.863-60 60s26.863 60 60 60 60-26.863 60-60-26.863-60-60-60z"
                      opacity=".6"
                    />
                    <path
                      fill="currentColor"
                      d="M120 40c44.183 0 80 35.817 80 80s-35.817 80-80 80-80-35.817-80-80 35.817-80 80-80zm0 60c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z"
                      opacity=".4"
                    />
                  </svg>
                  <svg className="absolute h-24 w-24 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
