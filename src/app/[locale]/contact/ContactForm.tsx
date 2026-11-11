'use client';

import { type FormEvent, useId, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { contactEmail } from '@/lib/site';

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
      draftLink: string;
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
  const id = useId();
  const [draftUrl, setDraftUrl] = useState<string>();

  function prepareDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? '').trim();
    const details = [
      [form.name.label, value('name')],
      [form.email.label, value('email')],
      [form.phone.label, value('phone')],
      [form.company.label, value('company')],
    ].filter(([, entry]) => entry).map(([label, entry]) => `${label}: ${entry}`);
    const body = [...details, '', value('message')].join('\r\n');
    const subject = value('subject') || form.subjectOptions.general;

    setDraftUrl(`mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  }

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
        <form
          className="space-y-6"
          method="post"
          onSubmit={prepareDraft}
          onChange={draftUrl ? () => setDraftUrl(undefined) : undefined}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`${id}-name`} className="block text-sm font-medium text-gray-700 mb-2">
                {form.name.label}
              </label>
              <input
                type="text"
                id={`${id}-name`}
                name="name"
                autoComplete="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder={form.name.placeholder}
                required
              />
            </div>
            <div>
              <label htmlFor={`${id}-email`} className="block text-sm font-medium text-gray-700 mb-2">
                {form.email.label}
              </label>
              <input
                type="email"
                id={`${id}-email`}
                name="email"
                autoComplete="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder={form.email.placeholder}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`${id}-phone`} className="block text-sm font-medium text-gray-700 mb-2">
                {form.phone.label}
              </label>
              <input
                type="tel"
                id={`${id}-phone`}
                name="phone"
                autoComplete="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder={form.phone.placeholder}
              />
            </div>
            <div>
              <label htmlFor={`${id}-company`} className="block text-sm font-medium text-gray-700 mb-2">
                {form.company.label}
              </label>
              <input
                type="text"
                id={`${id}-company`}
                name="company"
                autoComplete="organization"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder={form.company.placeholder}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor={`${id}-subject`} className="block text-sm font-medium text-gray-700 mb-2">
              {form.subject.label}
            </label>
            <select
              id={`${id}-subject`}
              name="subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            >
              <option>{form.subjectOptions.general}</option>
              <option>{form.subjectOptions.sales}</option>
              <option>{form.subjectOptions.partnership}</option>
              <option>{form.subjectOptions.support}</option>
            </select>
          </div>

          <div>
            <label htmlFor={`${id}-message`} className="block text-sm font-medium text-gray-700 mb-2">
              {form.message.label}
            </label>
            <textarea
              id={`${id}-message`}
              name="message"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-vertical"
              placeholder={form.message.placeholder}
              required
            ></textarea>
          </div>

          <Button type="submit" className="w-full bg-[#00BFB3] hover:bg-[#00a79c] text-white py-3 rounded-lg transition-all flex items-center justify-center gap-2">
            <Send className="w-5 h-5" aria-hidden="true" />
            {form.submit}
          </Button>
          {draftUrl && (
            <p role="status" className="text-center text-sm">
              <a href={draftUrl} className="font-medium text-teal-700 underline">
                {form.draftLink}
              </a>
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
