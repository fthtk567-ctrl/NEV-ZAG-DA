'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ContactFormProps {
  translations: {
    form: {
      title: string;
      description: string;
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      company: { label: string; placeholder: string };
      subject: { label: string };
      message: { label: string; placeholder: string };
      submit: string;
      subjectOptions: {
        general: string;
        sales: string;
        partnership: string;
        support: string;
      };
    };
  };
}

export default function ContactForm({ translations }: ContactFormProps) {
  const { form } = translations;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: form.subjectOptions.general,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Burada form verilerini işleyebilirsiniz, örneğin bir API'ye gönderebilirsiniz
    alert('Form gönderildi! Bu sadece bir demo.');
  };

  return (
    <Card className="shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-headline text-gray-900 flex items-center justify-center gap-2">
          <MessageSquare className="w-6 h-6 text-primary-600" />
          {form.title}
        </CardTitle>
        <p className="text-gray-600 mt-2">
          {form.description}
        </p>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {form.name.label}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder={form.name.placeholder}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {form.email.label}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder={form.email.placeholder}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {form.phone.label}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder={form.phone.placeholder}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {form.company.label}
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder={form.company.placeholder}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {form.subject.label}
            </label>
            <select 
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            >
              <option>{form.subjectOptions.general}</option>
              <option>{form.subjectOptions.sales}</option>
              <option>{form.subjectOptions.partnership}</option>
              <option>{form.subjectOptions.support}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {form.message.label}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-vertical"
              placeholder={form.message.placeholder}
              required
            ></textarea>
          </div>

          <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg transition-all flex items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            {form.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}