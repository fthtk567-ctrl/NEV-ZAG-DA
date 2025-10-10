export interface LocaleParams {
  locale: string;
}

export interface PageProps<P = Record<string, unknown>> {
  params: Promise<LocaleParams & P>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

declare module 'next' {
  interface PageProps {
    params: Promise<LocaleParams>;
  }
}