import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import ContactForm from './ContactForm';

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}
export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  const contactInfo = [
    {
      icon: Phone,
      title: t('info.phone.title'),
      content: t('info.phone.content'),
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Mail,
      title: t('info.email.title'),
      content: t('info.email.content'),
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: MapPin,
      title: t('info.address.title'),
      content: t('info.address.content'),
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Clock,
      title: t('info.hours.title'),
      content: t('info.hours.content'),
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-headline font-bold text-gray-900 mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-headline font-bold text-gray-900 mb-6">
                {t('infoSection.title')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${info.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm
              translations={{
                form: {
                  title: t('form.title'),
                  description: t('form.description'),
                  name: {
                    label: t('form.name.label'),
                    placeholder: t('form.name.placeholder')
                  },
                  email: {
                    label: t('form.email.label'),
                    placeholder: t('form.email.placeholder')
                  },
                  phone: {
                    label: t('form.phone.label'),
                    placeholder: t('form.phone.placeholder')
                  },
                  company: {
                    label: t('form.company.label'),
                    placeholder: t('form.company.placeholder')
                  },
                  subject: {
                    label: t('form.subject.label')
                  },
                  message: {
                    label: t('form.message.label'),
                    placeholder: t('form.message.placeholder')
                  },
                  submit: t('form.submit'),
                  subjectOptions: {
                    general: t('form.subjectOptions.general'),
                    sales: t('form.subjectOptions.sales'),
                    partnership: t('form.subjectOptions.partnership'),
                    support: t('form.subjectOptions.support')
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-headline text-gray-900 flex items-center justify-center gap-2">
                <MapPin className="w-6 h-6 text-primary-600" />
                {t('map.title')}
              </CardTitle>
              <p className="text-gray-600 mt-2">
                {t('map.description')}
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-medium">{t('map.comingSoon')}</p>
                  <p className="text-sm">{t('info.address.content')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-headline font-bold text-gray-900 mb-4">
              {t('quickContact.title')}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t('quickContact.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905076514200"
                className="inline-flex items-center gap-2 bg-[#00BFB3] text-white px-6 py-3 rounded-lg hover:bg-[#00a79c] transition-colors font-medium"
              >
                <Phone className="w-5 h-5" />
                {t('quickContact.call')}
              </a>
              <a
                href="mailto:nevizagida@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors font-medium"
              >
                <Mail className="w-5 h-5" />
                {t('quickContact.email')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
