'use client';

// English version - Direct English content
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Star, 
  Heart, 
  Award, 
  Sparkles,
  Package,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function EnglishProductsPage() {
  const productCategories = [
    {
      id: 'nevijel',
      title: 'Nevijel',
      subtitle: 'Premium Jelly Candy',
      description: 'The pioneer of our premium quality soft jelly candies. Nevijel, our main product, is a quality and delicious jelly candy series we have been producing since 2010. With its soft texture and natural fruit flavors, it appeals to consumers of all ages.',
      features: [
        'Soft and chewy texture',
        'Natural fruit flavors',
        'Natural food coloring',
        'Long shelf life',
        'Various packaging sizes',
        'Premium quality ingredients',
        'ISO 22000 certified production',
        'No artificial preservatives'
      ],
      specifications: {
        'Package Sizes': '50g, 100g, 200g, 500g',
        'Shelf Life': '18 months',
        'Storage': 'Store in a cool, dry place',
        'Ingredients': 'Sugar, glucose syrup, gelatin, fruit flavors, natural colors'
      },
      colors: 'bg-gradient-to-br from-pink-300 to-pink-400',
      icon: Sparkles,
      available: true,
      status: 'Available',
      statusColor: 'bg-green-100 text-green-800',
      price: 'Contact for pricing',
      image: '/nevijel-product.svg'
    },
    {
      id: 'jelibon',
      title: 'Gummy Bears',
      subtitle: 'Colorful Bear Candies',
      description: 'Colorful and delicious bear candies that children love most. This product in development will soon take its place on our shelves. It will be produced with the same quality standards as Nevijel.',
      features: [
        'Fun bear shape',
        'Vibrant colors',
        'Chewy texture',
        'Various fruit flavors',
        'Child-friendly packaging',
        'Natural ingredients',
        'Fun and entertaining',
        'Perfect portion sizes'
      ],
      specifications: {
        'Package Sizes': 'Coming Soon',
        'Shelf Life': 'Coming Soon',
        'Storage': 'Coming Soon',
        'Ingredients': 'Under development'
      },
      colors: 'bg-gradient-to-br from-yellow-300 to-yellow-400',
      icon: Heart,
      available: false,
      status: 'In Development',
      statusColor: 'bg-yellow-100 text-yellow-800',
      price: 'Coming Soon',
      image: null
    },
    {
      id: 'meyve-halkalari',
      title: 'Fruit Rings',
      subtitle: 'Ring-Shaped Fruit Candies',
      description: 'Our ring-shaped candies with natural fruit flavors. This delicious category in our new product development process will soon meet you. It will be enriched with intensive fruit flavors.',
      features: [
        'Unique ring shape',
        'Intensive fruit flavors',
        'Colorful varieties',
        'Soft texture',
        'Natural fruit extracts',
        'Eye-catching appearance',
        'Easy to consume',
        'Various flavor options'
      ],
      specifications: {
        'Package Sizes': 'Coming Soon',
        'Shelf Life': 'Coming Soon',
        'Storage': 'Coming Soon',
        'Ingredients': 'Under development'
      },
      colors: 'bg-gradient-to-br from-orange-300 to-orange-400',
      icon: Award,
      available: false,
      status: 'Coming Soon',
      statusColor: 'bg-blue-100 text-blue-800',
      price: 'Coming Soon',
      image: null
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
              Our Products
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover our quality jelly candy varieties produced with over 15 years of experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productCategories.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Product Image/Visual */}
                  <div className={`relative ${product.colors} flex items-center justify-center p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    {product.image ? (
                      <div className="relative">
                        <Image 
                          src={product.image} 
                          alt={product.title} 
                          width={300} 
                          height={300}
                          className="drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                        />
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/30 rounded-full blur-lg"></div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="bg-white/20 rounded-full p-8 backdrop-blur-sm mb-6 inline-block">
                          <div className="bg-white/30 rounded-full p-6">
                            {React.createElement(product.icon, { className: "w-16 h-16 text-white" })}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
                        <p className="text-white/80">Currently in development</p>
                      </div>
                    )}

                    {/* Status Badge */}
                    <div className={`absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-semibold ${product.statusColor}`}>
                      <div className="flex items-center gap-2">
                        {product.available ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Clock className="w-4 h-4" />
                        )}
                        {product.status}
                      </div>
                    </div>
                  </div>

                  {/* Product Information */}
                  <div className={`p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <h2 className="text-3xl lg:text-4xl font-headline font-bold text-gray-900 mb-2">
                          {product.title}
                        </h2>
                        <p className="text-lg text-primary-600 font-semibold mb-4">
                          {product.subtitle}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <Star className="w-5 h-5 text-yellow-500 mr-2" />
                          Key Features
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Specifications */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <Package className="w-5 h-5 text-blue-500 mr-2" />
                          Specifications
                        </h3>
                        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                          {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center">
                              <span className="text-sm font-medium text-gray-700">{key}:</span>
                              <span className="text-sm text-gray-600">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price and Actions */}
                      <div className="pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Price</p>
                            <p className="text-lg font-bold text-gray-900">{product.price}</p>
                          </div>
                          <Badge className={`px-4 py-2 ${product.statusColor} border-0`}>
                            {product.status}
                          </Badge>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button 
                            className={`flex-1 ${
                              product.available 
                                ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                                : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                            }`}
                            disabled={!product.available}
                          >
                            {product.available ? 'Get Information' : 'Coming Soon...'}
                          </Button>
                          <Button 
                            variant="outline" 
                            className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            Contact for Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-headline font-bold text-gray-900 mb-4">
                Quality Assurance
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                All our products are produced in accordance with international quality standards.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: 'ISO 22000 Certified',
                description: 'All production processes comply with food safety standards.'
              },
              {
                icon: Award,
                title: 'Quality Control',
                description: 'Each product undergoes strict quality control tests.'
              },
              {
                icon: Sparkles,
                title: 'Natural Ingredients',
                description: 'We use natural flavors and colors in our products.'
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
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
              Want to Learn More About Our Products?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us for detailed information about our products and special pricing.
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