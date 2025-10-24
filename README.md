# Neviza Gıda - Jelly Candy Factory Website

![Neviza Gıda Logo](./public/images/brand/neviza-logo.png)

A modern, multilingual website for **Neviza Jelly Candy Factory** - Turkey's trusted confectionery manufacturer since 1998.

## 🍬 About

Neviza Gıda is a leading Turkish candy manufacturer specializing in soft jelly candies, gummy bears, and other confectionery products. This website showcases our products, certifications, and company information in a modern, user-friendly interface.

## ✨ Features

- **🌍 Multilingual Support**: Turkish, English, Arabic, Russian
- **📱 Responsive Design**: Optimized for all devices
- **🎨 Modern UI/UX**: Clean, candy-themed design with animations
- **🔍 SEO Optimized**: Built-in SEO optimization and sitemap generation
- **⚡ Performance**: Fast loading with Next.js 14 and optimized images
- **🛡️ Type Safety**: Full TypeScript support
- **🎯 Accessibility**: WCAG compliant design

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + Custom Design System
- **UI Components**: Radix UI + shadcn/ui
- **Internationalization**: next-intl
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **SEO**: next-seo + next-sitemap

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/neviza-gida/website.git
   cd neviza-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
neviza-website/
├── public/
│   ├── images/
│   │   ├── brand/          # Logo and brand assets
│   │   ├── products/       # Product images
│   │   └── factory/        # Factory and certification photos
├── src/
│   ├── app/
│   │   ├── [locale]/       # Internationalized pages
│   │   │   ├── about/
│   │   │   ├── products/
│   │   │   ├── documents/
│   │   │   └── contact/
│   │   └── api/           # API routes
│   ├── components/
│   │   ├── ui/            # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Hero.tsx
│   └── lib/
│       └── utils.ts       # Utility functions
├── messages/              # Translation files
│   ├── tr.json           # Turkish
│   ├── en.json           # English
│   ├── ar.json           # Arabic
│   └── ru.json           # Russian
└── content/              # MDX content files
```

## 🌐 Available Languages

- **🇹🇷 Turkish** (`/tr`) - Default
- **🇺🇸 English** (`/en`)
- **🇸🇦 Arabic** (`/ar`) - RTL support
- **🇷🇺 Russian** (`/ru`)

## 📄 Pages

1. **Home** (`/`) - Hero, features, product categories, testimonials
2. **About Us** (`/about`) - Company story, mission, vision, timeline
3. **Products** (`/products`) - Product categories and specifications
4. **Documents** (`/documents`) - Certificates and catalogs download
5. **Contact** (`/contact`) - Contact form and company information

## 🎨 Design System

### Colors
- **Primary**: Turquoise Blue (`#00B4D8`)
- **Secondary**: Pastel Yellow (`#FFE17B`), Mint Green (`#A8E6CF`), Peach (`#FFD3B5`)

### Typography
- **Headlines**: Baloo 2 (playful, rounded)
- **Body**: Inter (clean, readable)

### Animations
- Floating candy animations
- Smooth hover transitions
- Page transition effects

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.nevizagida.com
NEXT_PUBLIC_CONTACT_EMAIL=nevizagida@gmail.com
NEXT_PUBLIC_PHONE=+905076514200

# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Meta Pixel / Facebook (Optional)
NEXT_PUBLIC_META_PIXEL_ID=YOUR_PIXEL_ID

# Yandex Metrica (Optional - for Russian market)
NEXT_PUBLIC_YANDEX_METRICA_ID=YOUR_COUNTER_ID

# Search Engine Verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=YOUR_VERIFICATION_CODE
NEXT_PUBLIC_YANDEX_VERIFICATION=YOUR_VERIFICATION_CODE

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 🔍 SEO & Analytics

### Google Search Console Setup

This website is fully optimized for search engines with:

- ✅ Meta tags and descriptions
- ✅ Open Graph tags (social media)
- ✅ Twitter Card support
- ✅ Structured data (Schema.org)
- ✅ XML Sitemap
- ✅ Robots.txt
- ✅ Multi-language support (hreflang)

**📚 Detailed guides:**
- [Google Setup Guide](./GOOGLE_SETUP.md) - Step-by-step Google Search Console setup
- [SEO Setup Guide](./SEO_SETUP.md) - Complete SEO configuration details
- [Logo Conversion Guide](./LOGO_CONVERSION_GUIDE.md) - How to create required images

**Quick Start:**
1. Create required logo files (see [Logo Guide](./LOGO_CONVERSION_GUIDE.md))
2. Add Google Search Console verification code
3. Submit sitemap: `https://www.nevizagida.com/sitemap.xml`
4. (Optional) Add Google Analytics tracking

### Analytics Integration

The project supports multiple analytics platforms:

**Google Analytics:**
```typescript
import { GoogleAnalytics } from '@/components/Analytics';

// Add to layout.tsx
<GoogleAnalytics />
```

**Meta Pixel (Facebook):**
```typescript
import { MetaPixel } from '@/components/Analytics';

// Add to layout.tsx
<MetaPixel />
```

**Yandex Metrica (for Russian market):**
```typescript
import { YandexMetrica } from '@/components/Analytics';

// Add to layout.tsx
<YandexMetrica />
```

### Testing SEO

**Tools to verify your SEO setup:**
- Google Search Console: https://search.google.com/search-console
- PageSpeed Insights: https://pagespeed.web.dev/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- Rich Results Test: https://search.google.com/test/rich-results

## � File Protection System

### Protecting Critical Files

All critical project files are automatically locked to prevent accidental modifications:

**Lock all critical files:**
```bash
npm run lock:all
```

**Unlock for editing:**
```bash
npm run unlock:all
```

**Protected files include:**
- Translation files (`messages/*.json`)
- Type definitions (`src/types/page.ts`)
- Configuration files (`next.config.ts`, `tsconfig.json`)
- Core components (`Header.tsx`, `Footer.tsx`)
- i18n setup (`src/i18n.ts`, `src/middleware.ts`)

**⚠️ IMPORTANT:** Always unlock before making changes, then lock again after committing!

### Translation Management

**Rebuild all translations:**
```bash
node scripts/rebuild-translations.js
```

**Lock translations only:**
```bash
npm run translations:lock
```

**Unlock translations:**
```bash
npm run translations:unlock
```

**Backup translations:**
```bash
npm run translations:backup
```

## �🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with default settings

### Manual Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

## 📝 Content Management

### Adding New Products

1. Update product data in `messages/{locale}.json`
2. Add product images to `public/images/products/`
3. Update the products page component

### Adding New Languages

1. Create new translation file in `messages/{locale}.json`
2. Add locale to `middleware.ts`
3. Update `src/app/[locale]/layout.tsx`

## 🔒 Translation File Protection

Translation files are protected from accidental modification. Use these PowerShell scripts to manage them:

### Lock Translation Files (Recommended)
```powershell
.\scripts\lock-translations.ps1
```
Makes all translation files read-only to prevent accidental edits.

### Unlock Translation Files
```powershell
.\scripts\unlock-translations.ps1
```
Removes read-only protection when you need to update translations.

### Backup Translation Files
```powershell
.\scripts\backup-translations.ps1
```
Creates a timestamped backup of all translation files in `backups/` directory.

### Update Translations Safely

1. Unlock files: `.\scripts\unlock-translations.ps1`
2. Make your changes in `messages/` directory
3. Test the changes: `npm run dev`
4. Create backup: `.\scripts\backup-translations.ps1`
5. Lock files again: `.\scripts\lock-translations.ps1`

**Note**: Translation files in `messages/` directory are automatically locked after running `merge-translations.js`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- **Email**: info@nevizagida.com
- **Phone**: +90 507 651 4200
- **Website**: [nevizagida.com](https://nevizagida.com)

---

Built with ❤️ by [Neviza Gıda](https://nevizagida.com) - Mutluluğun En Tatlı Hali 🍬
