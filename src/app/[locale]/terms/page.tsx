// Çeviri sistemi geçici olarak devre dışı - direkt Türkçe metin kullanıyoruz
import { setRequestLocale } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Scale, AlertTriangle, CheckCircle, Globe, Mail } from 'lucide-react';

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const termsSections = [
    {
      id: 'general',
      title: 'Genel Hükümler',
      icon: FileText,
      content: [
        'Bu kullanım şartları, Neviza Gıda Sanayi web sitesini kullanımınızı düzenleyen hukuki anlaşmadır.',
        'Sitemizi kullanarak bu şartları kabul etmiş sayılırsınız. Şartları kabul etmiyorsanız sitemizi kullanmamalısınız.',
        'Bu şartlar, yasal düzenlemeler çerçevesinde değişikliğe tabi tutulabilir.'
      ]
    },
    {
      id: 'usage',
      title: 'Site Kullanımı',
      icon: Globe,
      content: [
        'Web sitemiz, ürünlerimiz ve hizmetlerimiz hakkında bilgi vermek amacıyla hazırlanmıştır.',
        'Site içeriğini kişisel ve ticari olmayan amaçlarla kullanabilirsiniz.',
        'Site içeriğini izinsiz kopyalama, dağıtma veya ticari amaçla kullanmak yasaktır.',
        'Sitemizde yer alan bilgilerin doğruluğu için azami özen gösterilmiş olmakla birlikte, değişiklik hakları saklıdır.'
      ]
    },
    {
      id: 'intellectual',
      title: 'Fikri Mülkiyet Hakları',
      icon: Scale,
      content: [
        'Web sitemizdeki tüm içerik, tasarım, logo, marka ve diğer fikri mülkiyet hakları Neviza Gıda Sanayi\'ye aittir.',
        'Bu içeriklerin izinsiz kullanımı, kopyalanması veya dağıtılması yasaktır.',
        'Nevijel markası ve ilgili tüm ürün markaları firmamızın tescilli markalarıdır.',
        'Üçüncü şahıslara ait içerikler için gerekli izinler alınmıştır.'
      ]
    },
    {
      id: 'liability',
      title: 'Sorumluluk Sınırlaması',
      icon: AlertTriangle,
      content: [
        'Web sitemizin kullanımından doğabilecek doğrudan veya dolaylı zararlardan sorumlu değiliz.',
        'Site içeriğindeki bilgilerin doğruluğu için çaba gösterilmekle birlikte, garanti verilmemektedir.',
        'Teknik arızalar, sistem kesintileri veya güncellemelerden kaynaklanan aksaklıklardan sorumlu değiliz.',
        'Üçüncü şahıs sitelere yönlendiren linklerden sorumlu değiliz.'
      ]
    },
    {
      id: 'products',
      title: 'Ürün ve Hizmet Şartları',
      icon: CheckCircle,
      content: [
        'Web sitesinde yer alan ürün bilgileri, fiyatlar ve stok durumu değişikliğe tabidir.',
        'Ürün siparişleri, stok durumu ve üretim kapasitemize göre karşılanmaktadır.',
        'Ürün kalitesi ve güvenliği konusunda ISO 22000 standartlarına uygun üretim yapmaktayız.',
        'Ürün talepleri ve özel siparişler için iletişime geçmenizi rica ederiz.'
      ]
    },
    {
      id: 'contact',
      title: 'İletişim ve Şikayetler',
      icon: Mail,
      content: [
        'Bu kullanım şartları hakkında sorularınız için bizimle iletişime geçebilirsiniz.',
        'Şikayet ve önerilerinizi değerlendirip en kısa sürede geri dönüş yapmaktayız.',
        'Hukuki uyuşmazlıklar Konya mahkemelerinin yetkisindedir.',
        'Türk hukuku geçerlidir.'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-candy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Scale className="w-16 h-16 text-gray-900 mr-4" />
            <h1 className="text-4xl lg:text-6xl font-headline font-bold text-gray-900">
              Kullanım Şartları
            </h1>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Web sitemizi kullanırken uymanız gereken şartlar ve koşullar hakkında 
            detaylı bilgiler bu sayfada yer almaktadır.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Kabul Uyarısı */}
          <Card className="mb-12 border-blue-200 bg-blue-50">
            <CardContent className="p-8">
              <div className="flex items-start">
                <CheckCircle className="w-8 h-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Şartların Kabulü
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Bu web sitesini kullanarak, aşağıda belirtilen tüm kullanım şartlarını 
                    okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan etmiş olursunuz. 
                    Bu şartları kabul etmiyorsanız, lütfen sitemizi kullanmayınız.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Şartlar Bölümleri */}
          <div className="space-y-8">
            {termsSections.map((section, index) => {
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

          {/* Yasal Bildirim */}
          <Card className="mt-12 bg-yellow-50 border-yellow-200">
            <CardContent className="p-8">
              <div className="flex items-start">
                <AlertTriangle className="w-8 h-8 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Yasal Bildirim
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Bu kullanım şartları, Türkiye Cumhuriyeti kanunlarına tabidir. 
                    Şartlarda değişiklik yapma hakkı Neviza Gıda Sanayi\'ye aittir.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Değişiklikler web sitesinde yayınlandığı tarihten itibaren geçerlidir. 
                    Güncel şartları düzenli olarak kontrol etmeniz önerilir.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* İletişim Bilgileri */}
          <Card className="mt-12 bg-gray-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Hukuki ve İletişim Bilgileri
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Şirket Bilgileri</h4>
                  <p className="text-gray-700 mb-1">Neviza Gıda Sanayi</p>
                  <p className="text-gray-700 mb-1">Çumra Organize Sanayi Bölgesi</p>
                  <p className="text-gray-700 mb-1">Konya, Türkiye</p>
                  <p className="text-gray-700">Vergi Dairesi: Çumra V.D.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">İletişim</h4>
                  <p className="text-gray-700 mb-1">Telefon: +90 507 651 42 00</p>
                  <p className="text-gray-700 mb-1">E-posta: nevizagida@gmail.com</p>
                  <p className="text-gray-700 mb-3">Hukuki talepler için aynı iletişim bilgilerini kullanabilirsiniz.</p>
                  <p className="text-sm text-gray-600">
                    <strong>Yetkili Mahkeme:</strong> Konya Mahkemeleri
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Son Güncelleme */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Son güncellenme: Ekim 2025 | Bu şartlar önceden haber verilmeksizin değiştirilebilir.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}