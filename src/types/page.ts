export interface LocaleParams {
  locale: string;
}

export interface PageProps<P = Record<string, unknown>> {
  params: LocaleParams & P;
  searchParams?: { [key: string]: string | string[] | undefined };
}

declare module 'next' {
  interface PageProps {
    params: LocaleParams;
  }
}