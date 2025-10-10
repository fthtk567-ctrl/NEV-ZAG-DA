import { getRequestConfig } from 'next-intl/server';

const locales = ['tr', 'en', 'ar', 'ru'];
const defaultLocale = 'tr';

export default getRequestConfig(async ({ locale }) => {
  // Validate locale and avoid attempting to import unexpected paths
  let loc = locale;
  if (!loc || !locales.includes(loc) || typeof loc !== 'string' || loc.includes('.')) {
    loc = defaultLocale;
  }

  try {
    const messages = (await import(`../messages/${loc}.json`)).default;
    return { messages };
  } catch (err) {
    // Fallback to default locale if import fails
    // Log for debugging in server output
    // eslint-disable-next-line no-console
    console.error('Could not load messages for locale', loc, err);
    const fallback = (await import(`../messages/${defaultLocale}.json`)).default;
    return { messages: fallback };
  }
});