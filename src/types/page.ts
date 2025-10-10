export interface LocaleParams {
  locale: string;
}

export interface PageProps<P = {}> {
  params: P & LocaleParams;
  searchParams?: { [key: string]: string | string[] | undefined };
}