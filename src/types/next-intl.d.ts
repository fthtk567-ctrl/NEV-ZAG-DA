import type { AbstractIntlMessages } from 'next-intl';

declare module 'next-intl/server' {
  export function getRequestLocale(): Promise<string>;
  export function setRequestLocale(locale: string): void;
  export function getMessages(params?: { locale?: string }): Promise<AbstractIntlMessages>;
}

type LocaleLayoutParams = {
  locale: string;
  params: Record<string, string | string[]>;
};

declare module 'next' {
  export interface PageProps {
    params: LocaleLayoutParams;
  }
}