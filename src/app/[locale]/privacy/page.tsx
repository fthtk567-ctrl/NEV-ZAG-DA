// Çeviri sistemi geçici olarak devre dışı - direkt Türkçe metin kullanıyoruz
import { setRequestLocale } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Lock, UserCheck, Database, Phone } from 'lucide-react';

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const privacySections = [
    {
      id: 'collection',
      title: 'Veri Toplama',
      icon: Database,
      content: [
        'Web sitemizi ziyaret ettiğinizde, size daha iyi hizmet verebilmek için bazı kişisel bilgilerinizi toplamamız gerekebilir.',
        'Topladığımız bilgiler arasında adınız, e-posta adresiniz, telefon numaranız ve firma bilgileriniz yer alabilir.',
        'Bu bilgiler tamamen gönüllülük esasına dayalı olarak ve sizin onayınızla toplanmaktadır.'
      ]
    },
    {
      id: 'usage',
      title: 'Veri Kullanımı',
      icon: Eye,
      content: [
        'Toplanan kişisel verileriniz, sadece size hizmet vermek ve iletişim kurmak amacıyla kullanılmaktadır.',
        'Ürün ve hizmetlerimiz hakkında bilgi vermek, sipariş durumunuzu bildirmek için bu verileri kullanabiliriz.',
        'Verileriniz, yasal zorunluluklar dışında üçüncü şahıslarla paylaşılmamaktadır.'
      ]
    },
    {
      id: 'security',
      title: 'Veri Güvenliği',
      icon: Lock,
      content: [
        'Kişisel verilerinizin güvenliği bizim için son derece önemlidir.',
        'Verilerinizi yetkisiz erişim, değişiklik veya ifşaya karşı korumak için gerekli teknik ve idari önlemleri almaktayız.',
        'Veri aktarımı sırasında SSL şifreleme teknolojisi kullanılmaktadır.'
      ]
    },
    {
      id: 'rights',
      title: 'Haklarınız',
      icon: UserCheck,
      content: [
        'KVKK kapsamında, kişisel verilerinizle ilgili haklarınız bulunmaktadır.',
        'Verilerinizin düzeltilmesi, silinmesi veya işleme itiraz etme hakkına sahipsiniz.',
        'Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.'
      ]
    },
    {
      id: 'cookies',
      title: 'Çerezler (Cookies)',
      icon: Shield,
      content: [
        'Web sitemiz, size daha iyi bir deneyim sunmak için çerezler kullanmaktadır.',
        'Çerezler, tarayıcı tercihlerinizi hatırlamamıza ve site performansını ölçmemize yardımcı olur.',
        'Çerez ayarlarınızı tarayıcınızdan istediğiniz zaman değiştirebilirsiniz.'
      ]
    },
    {
      id: 'contact',
      title: 'İletişim',
      icon: Phone,
      content: [
        'Gizlilik politikamız hakkında sorularınız varsa, bizimle iletişime geçmekten çekinmeyin.',
        'Kişisel verilerinizle ilgili taleplerinizi aşağıdaki iletişim bilgilerimizden bize ulaştırabilirsiniz.',
        'Taleplerinizi en kısa sürede değerlendirip size geri dönüş yapacağız.'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-candy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 text-gray-900 mr-4" />
            <h1 className="text-4xl lg:text-6xl font-headline font-bold text-gray-900">
              Gizlilik Politikası
            </h1>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Kişisel verilerinizin korunması bizim için son derece önemlidir. 
            Bu politika, verilerinizi nasıl topladığımızı ve kullandığımızı açıklamaktadır.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* KVKK Uyarısı */}
          <Card className="mb-12 border-primary-200 bg-primary-50">
            <CardContent className="p-8">
              <div className="flex items-start">
                <Shield className="w-8 h-8 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    KVKK Uyumluluğu
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Bu gizlilik politikası, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) 
                    ve ilgili mevzuat hükümlerine uygun olarak hazırlanmıştır. Neviza Gıda Sanayi 
                    olarak, kişisel verilerinizin korunması konusunda azami özen göstermekteyiz.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Politika Bölümleri */}
          <div className="space-y-8">
            {privacySections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card key={section.id} className="overflow-hidden">
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="flex items-center text-xl text-gray-900">
                      <IconComponent className="w-6 h-6 text-primary-600 mr-3" />
                      {index + 1}. {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {section.content.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* İletişim Bilgileri */}
          <Card className="mt-12 bg-gray-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Veri Sorumlusu ve İletişim Bilgileri
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Şirket Bilgileri</h4>
                  <p className="text-gray-700 mb-1">Neviza Gıda Sanayi</p>
                  <p className="text-gray-700 mb-1">Çumra Organize Sanayi Bölgesi</p>
                  <p className="text-gray-700">Konya, Türkiye</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">İletişim</h4>
                  <p className="text-gray-700 mb-1">Telefon: +90 507 651 42 00</p>
                  <p className="text-gray-700 mb-1">E-posta: nevizagida@gmail.com</p>
                  <p className="text-gray-700">KVKK Talepleriniz için aynı iletişim bilgilerini kullanabilirsiniz.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Son Güncelleme */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Son güncellenme: Ekim 2025 | Bu politika değişikliklere tabi tutulabilir.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}