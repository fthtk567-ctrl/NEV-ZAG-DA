'use client';

// English version - Direct English content
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar, 
  Award, 
  Users, 
  Heart, 
  Shield, 
  Lightbulb,
  Globe2,
  Star,
  CheckCircle
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cva } from 'class-variance-authority';
import { VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

export default function EnglishAboutPage() {
  const companyValues = [
    {
      icon: Shield,
      title: 'Quality',
      description: 'We adhere to the highest quality standards in all our production processes.'
    },
    {
      icon: Heart,
      title: 'Trust',
      description: 'We have gained the trust of thousands of customers over the years.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously improve our products with innovative approaches.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our customers\' satisfaction and happiness is our top priority.'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Company Establishment',
      description: 'Neviza Food Industry was established in Konya.'
    },
    {
      year: '2012',
      title: 'First Product Launch',
      description: 'Nevijel jelly candy was launched as our flagship product.'
    },
    {
      year: '2015',
      title: 'Facility Expansion',
      description: 'Production capacity was increased and technology was modernized.'
    },
    {
      year: '2018',
      title: 'Quality Certification',
      description: 'ISO 22000 Food Safety Certificate was obtained.'
    },
    {
      year: '2020',
      title: 'Market Expansion',
      description: 'Distribution network was expanded throughout Turkey.'
    },
    {
      year: '2023',
      title: 'New Product Development',
      description: 'R&D investments were made for new product categories.'
    }
  ];

  const certificates = [
    {
      name: 'ISO 22000',
      description: 'Food Safety Management System',
      icon: Award
    },
    {
      name: 'Ministry of Health License',
      description: 'Official Production Permit',
      icon: Shield
    },
    {
      name: 'HACCP',
      description: 'Hazard Analysis Critical Control Points',
      icon: CheckCircle
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
              About Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We have been producing quality jelly candies with 15+ years of experience and 
              spreading happiness around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-headline font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Neviza Food Industry was established in 2010 in Konya with the goal of producing quality 
                  and delicious jelly candies. Since our establishment, we have been working to bring the 
                  joy and happiness that candy brings to people's lives.
                </p>
                <p>
                  Our flagship product, Nevijel, was launched in 2012 and quickly became one of the 
                  preferred brands in the market. With our soft textured, fruit flavored and 
                  naturally colored products, we appeal to consumers of all ages.
                </p>
                <p>
                  Today, we produce in our modern facility that complies with international quality 
                  standards and serve our customers with our wide distribution network. We continue 
                  to grow with our customer-focused approach and innovative solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8">
                <div className="text-center">
                  <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
                    <Image 
                      src="/nevijel-product.svg" 
                      alt="Nevijel Product" 
                      width={80} 
                      height={80}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Since 2010</h3>
                  <p className="text-gray-600">
                    15+ years of experience in quality jelly candy production
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-headline font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The fundamental values that guide us in all our business processes and 
                shape our company culture.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-headline font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The important milestones and achievements we have reached throughout our history.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <Badge className="bg-primary-100 text-primary-800 mb-3">
                          {milestone.year}
                        </Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-headline font-bold text-gray-900 mb-4">
                Quality Certificates
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our official documents and certificates that prove our commitment to quality and safety.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {cert.name}
                      </h3>
                      <p className="text-gray-600">
                        {cert.description}
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
              Let's Work Together
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our products or to establish a business partnership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/en/contact" 
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="/en/products" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                View Products
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}