'use client';

// English version - Direct English content
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Shield, 
  Lightbulb, 
  Globe2,
  Users,
  Sparkles,
  Heart,
  Award,
  Star
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function EnglishHomePage() {
  const productCategories = [
    {
      id: 'nevijel',
      title: 'Nevijel',
      description: 'The pioneer of our premium quality soft jelly candies. Nevijel, our main product, is a quality and delicious jelly candy series we have been producing since 2010.',
      features: ['Soft texture', 'Fruit flavored', 'Natural colors', 'Long shelf life', 'Various sizes', 'Premium quality'],
      colors: 'bg-gradient-to-br from-pink-300 to-pink-400',
      icon: Sparkles,
      available: true,
      status: 'Available'
    },
    {
      id: 'jelibon',
      title: 'Gummy Bears', 
      description: 'Colorful and delicious bear candies that children love most. This product in development will soon take its place on our shelves.',
      features: ['Chewing pleasure', 'Colorful appearance', 'Fruit flavors', 'Fun shape'],
      colors: 'bg-gradient-to-br from-yellow-300 to-yellow-400',
      icon: Heart,
      available: false,
      status: 'In Development'
    },
    {
      id: 'meyve-halkalari',
      title: 'Fruit Rings',
      description: 'Our ring-shaped candies with natural fruit flavors. This delicious category in our new product development process will soon meet you.',
      features: ['Ring shape', 'Natural flavors', 'Colorful varieties', 'Soft texture'],
      colors: 'bg-gradient-to-br from-orange-300 to-orange-400',
      icon: Award,
      available: false,
      status: 'Coming Soon'
    }
  ];

  const companyStats = [
    { icon: Shield, label: 'Quality Assurance', value: 'ISO 22000' },
    { icon: Lightbulb, label: 'Years of Experience', value: '15+' },
    { icon: Globe2, label: 'Country', value: 'Turkey' },
    { icon: Users, label: 'Satisfied Customers', value: '1000+' }
  ];

  return (
    <div className="relative">
      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-candy overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-gray-900 mb-6">
                The Sweetest Form of Happiness
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                We have been delighting children and adults with our delicious jelly candies 
                produced since 2010.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link href="/en/products">
                  <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4">
                    Discover Our Products
                  </Button>
                </Link>
                <Link href="/en/contact">
                  <Button size="lg" variant="outline" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right side - Nevijel Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                  <Image 
                    src="/nevijel-product.svg" 
                    alt="Nevijel - The Sweetest Form of Happiness" 
                    width={400} 
                    height={400}
                    className="drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-300/50 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-300/50 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-headline font-bold text-gray-900 mb-4">
                Our Product Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We appeal to the taste of consumers of all ages with our wide product range.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                    {/* Category Image */}
                    <div className={`relative h-48 ${category.colors} flex items-center justify-center`}>
                      {category.id === 'nevijel' ? (
                        <div className="relative">
                          <Image 
                            src="/nevijel-product.svg" 
                            alt="Nevijel Product" 
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
                      
                      {/* Status Badge */}
                      <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold ${
                        category.available 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {category.status}
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {category.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {category.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Button */}
                      <Button 
                        className={`w-full ${
                          category.available 
                            ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                            : 'bg-gray-100 text-gray-900 cursor-not-allowed'
                        }`}
                        disabled={!category.available}
                      >
                        {category.available ? 'View Details' : 'Coming Soon...'}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Brief */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-headline font-bold text-gray-900 mb-6">
                Quality and Trust Leader
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 2010, we have been one of the leading companies in the sector in quality jelly candy production. 
                We produce under the highest hygiene standards in our modern facility.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">ISO 22000 Food Safety Certificate</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Ministry of Health Approved Facility</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">15+ Years of Industry Experience</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 text-center">
                <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-12 h-12 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Quality Assurance</h3>
                <p className="text-gray-600">
                  In all our production processes, we act in accordance with international quality standards 
                  and prioritize customer satisfaction.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}