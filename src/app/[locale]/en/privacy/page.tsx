'use client';

// English version - Direct English content
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  AlertTriangle,
  CheckCircle,
  Mail,
  Calendar
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function EnglishPrivacyPage() {
  const sections = [
    {
      icon: Shield,
      title: 'Data Protection',
      content: 'We protect your personal data in accordance with Turkish Personal Data Protection Law (KVKK) and international standards.'
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: 'We use advanced security measures to ensure the security and confidentiality of your personal data.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      content: 'We inform you transparently about how we collect, process and store your personal data.'
    },
    {
      icon: Users,
      title: 'Your Rights',
      content: 'You have the right to access, correct, delete and limit the processing of your personal data.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-candy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-headline font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We respect your privacy and take the protection of your personal data seriously.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-primary-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {section.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Shield className="w-6 h-6 text-primary-600 mr-2" />
                  Personal Data Protection Policy
                </CardTitle>
                <p className="text-gray-600">
                  Last updated: October 2025
                </p>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <div className="space-y-8">
                  {/* Section 1 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      1. Data Controller
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Your personal data is processed by Neviza Food Industry as the data controller.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Company:</strong> Neviza Gıda Sanayi<br />
                        <strong>Address:</strong> Konya / Turkey<br />
                        <strong>Email:</strong> nevizagida@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Eye className="w-5 h-5 text-blue-600 mr-2" />
                      2. Personal Data We Collect
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We may collect the following personal data:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Identity information (name, surname)</li>
                      <li>Contact information (email address, phone number)</li>
                      <li>Address information</li>
                      <li>Communication preferences</li>
                      <li>Website usage data (cookies, IP address)</li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Lock className="w-5 h-5 text-purple-600 mr-2" />
                      3. Purposes of Data Processing
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Your personal data is processed for the following purposes:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Providing customer service and support</li>
                      <li>Product sales and order management</li>
                      <li>Communication and information sharing</li>
                      <li>Legal obligations compliance</li>
                      <li>Marketing activities (with your consent)</li>
                      <li>Website performance improvement</li>
                    </ul>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 text-orange-600 mr-2" />
                      4. Your Rights
                    </h3>
                    <p className="text-gray-600 mb-4">
                      According to KVKK, you have the following rights:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Access Rights</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Learning whether your data is processed</li>
                          <li>• Requesting information about processing</li>
                          <li>• Learning the purpose of processing</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Control Rights</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Requesting correction of incorrect data</li>
                          <li>• Requesting deletion of data</li>
                          <li>• Objecting to processing</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                      5. Data Security
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We take the following measures to ensure the security of your personal data:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="text-gray-600 space-y-2">
                        <li>• Technical security measures (encryption, firewall)</li>
                        <li>• Administrative security measures (access control)</li>
                        <li>• Physical security measures (secure data storage)</li>
                        <li>• Regular security audits and updates</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 6 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Mail className="w-5 h-5 text-indigo-600 mr-2" />
                      6. Contact Information
                    </h3>
                    <p className="text-gray-600 mb-4">
                      For questions about your personal data or to exercise your rights, you can contact us:
                    </p>
                    <div className="bg-primary-50 p-6 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                          <p className="text-gray-600">nevizagida@gmail.com</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Mail Address</h4>
                          <p className="text-gray-600">
                            Neviza Gıda Sanayi<br />
                            Konya / Turkey
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 7 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Calendar className="w-5 h-5 text-teal-600 mr-2" />
                      7. Policy Updates
                    </h3>
                    <p className="text-gray-600">
                      This privacy policy may be updated from time to time. Updates will be published on our website 
                      and you will be notified if necessary. We recommend that you check this page regularly.
                    </p>
                  </div>

                  {/* Last Section */}
                  <div className="border-t pt-8">
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                        Important Note
                      </h4>
                      <p className="text-gray-600 text-sm">
                        This privacy policy has been prepared in accordance with the Turkish Personal Data Protection Law (KVKK). 
                        For detailed information about your rights and our obligations, please refer to the official KVKK text.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-white mb-6">
              Questions About Your Privacy?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              If you have any questions about our privacy policy or your personal data, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/en/contact" 
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="mailto:nevizagida@gmail.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}