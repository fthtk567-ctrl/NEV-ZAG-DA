import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from '@/lib/site';

export default createMiddleware({
  locales,
  defaultLocale,
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!_next|_vercel|.*\\..*).*)']
};
