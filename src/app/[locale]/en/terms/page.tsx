'use client';

// English version - Direct English content
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Scale, 
  FileText, 
  AlertTriangle, 
  Shield,
  CheckCircle,
  XCircle,
  Mail,
  Calendar,
  Users,
  Globe2
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function EnglishTermsPage() {
  const keyPoints = [
    {
      icon: Scale,
      title: 'Legal Framework',
      content: 'These terms are governed by Turkish law and regulations.'
    },
    {
      icon: Shield,
      title: 'Service Usage',
      content: 'You must use our services in accordance with the specified terms.'
    },
    {
      icon: Users,
      title: 'User Responsibilities',
      content: 'Users are responsible for their actions and compliance with the terms.'
    },
    {
      icon: Globe2,
      title: 'Service Scope',
      content: 'Terms apply to all our products and services.'
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
              Terms of Service
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {keyPoints.map((point, index) => {
              const IconComponent = point.icon;
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
                        {point.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {point.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
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
                  <FileText className="w-6 h-6 text-primary-600 mr-2" />
                  Terms of Service
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
                      1. Acceptance of Terms
                    </h3>
                    <p className="text-gray-600 mb-4">
                      By accessing and using Neviza Food Industry's website and services, you accept and agree to be bound by these Terms of Service.
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
                      <FileText className="w-5 h-5 text-blue-600 mr-2" />
                      2. Service Description
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Neviza Food Industry provides the following services:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Production and sale of jelly candies</li>
                      <li>Product information and catalog services</li>
                      <li>Customer support and consultation</li>
                      <li>Online product showcase and information</li>
                      <li>Corporate communication services</li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 text-purple-600 mr-2" />
                      3. User Responsibilities
                    </h3>
                    <p className="text-gray-600 mb-4">
                      As a user of our services, you agree to:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                          Permitted Actions
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Use services for legitimate purposes</li>
                          <li>• Provide accurate information</li>
                          <li>• Respect intellectual property rights</li>
                          <li>• Follow applicable laws and regulations</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <XCircle className="w-4 h-4 text-red-600 mr-1" />
                          Prohibited Actions
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Misuse of services</li>
                          <li>• Unauthorized access attempts</li>
                          <li>• Distribution of harmful content</li>
                          <li>• Violation of others' rights</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Shield className="w-5 h-5 text-orange-600 mr-2" />
                      4. Intellectual Property Rights
                    </h3>
                    <p className="text-gray-600 mb-4">
                      All content on our website and services is protected by intellectual property rights:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="text-gray-600 space-y-2">
                        <li>• Company name, logo, and trademarks</li>
                        <li>• Product names and designs</li>
                        <li>• Website content and images</li>
                        <li>• Technical documentation and processes</li>
                        <li>• All original content and materials</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Scale className="w-5 h-5 text-indigo-600 mr-2" />
                      5. Limitation of Liability
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Our liability is limited as follows:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Service Availability</h4>
                        <p className="text-sm text-gray-600">
                          We strive to provide uninterrupted service but cannot guarantee 100% availability. 
                          We are not responsible for temporary service interruptions.
                        </p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Information Accuracy</h4>
                        <p className="text-sm text-gray-600">
                          While we strive to provide accurate information, we cannot guarantee the complete 
                          accuracy of all content and information.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 6 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                      6. Product Terms and Conditions
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Special terms for our products:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• ISO 22000 certified production</li>
                          <li>• Quality control at every stage</li>
                          <li>• Fresh and safe products</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Product Information</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Ingredient information available</li>
                          <li>• Allergen warnings provided</li>
                          <li>• Storage instructions included</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 7 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Mail className="w-5 h-5 text-teal-600 mr-2" />
                      7. Communication and Support
                    </h3>
                    <p className="text-gray-600 mb-4">
                      For questions, support, or legal matters, you can contact us:
                    </p>
                    <div className="bg-primary-50 p-6 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Customer Service</h4>
                          <p className="text-gray-600 text-sm">
                            Email: nevizagida@gmail.com<br />
                            Response time: 1-2 business days
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Legal Department</h4>
                          <p className="text-gray-600 text-sm">
                            Mail: Neviza Gıda Sanayi<br />
                            Konya / Turkey
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 8 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Scale className="w-5 h-5 text-purple-600 mr-2" />
                      8. Applicable Law and Jurisdiction
                    </h3>
                    <p className="text-gray-600 mb-4">
                      These terms are governed by:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>Applicable Law:</strong> Republic of Turkey laws</li>
                        <li>• <strong>Jurisdiction:</strong> Konya Courts and Enforcement Offices</li>
                        <li>• <strong>Language:</strong> Turkish language shall prevail in case of disputes</li>
                        <li>• <strong>Arbitration:</strong> Disputes may be resolved through arbitration if agreed</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 9 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Calendar className="w-5 h-5 text-green-600 mr-2" />
                      9. Terms Updates
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We reserve the right to update these terms:
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <ul className="text-gray-600 space-y-2">
                        <li>• Changes will be published on our website</li>
                        <li>• Users will be notified of significant changes</li>
                        <li>• Continued use implies acceptance of new terms</li>
                        <li>• Check this page regularly for updates</li>
                      </ul>
                    </div>
                  </div>

                  {/* Last Section */}
                  <div className="border-t pt-8">
                    <div className="bg-primary-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-600 mr-2" />
                        Agreement Confirmation
                      </h4>
                      <p className="text-gray-600 text-sm">
                        By using our services, you confirm that you have read, understood, and agree to be bound by these Terms of Service. 
                        If you do not agree to these terms, please do not use our services.
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
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              If you have any questions about our terms of service, please contact us for clarification.
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