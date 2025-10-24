# SEO Kurulum Rehberi - Neviza Gıda

## ✅ Tamamlanan SEO Ayarları

### 1. Meta Etiketleri
- ✅ Title ve Description optimize edildi
- ✅ Keywords eklendi
- ✅ Open Graph meta etiketleri (Facebook, WhatsApp paylaşımları için)
- ✅ Twitter Card meta etiketleri
- ✅ Robots meta etiketleri
- ✅ Canonical URL'ler
- ✅ Çoklu dil desteği (hreflang)

### 2. Yapılandırılmış Veri (Schema.org)
- ✅ Organization schema
- ✅ JSON-LD formatında
- ✅ İletişim bilgileri
- ✅ Sosyal medya bağlantıları

### 3. Teknik SEO
- ✅ Favicon yapılandırması
- ✅ Web manifest dosyası
- ✅ Robots.txt
- ✅ Sitemap (dinamik)

---

## 📋 Yapılması Gerekenler

### 1. Logo ve Görsel Dosyaları Ekleme

Aşağıdaki dosyaları `/public/images/brand/` klasörüne eklemeniz gerekiyor:

#### Favicon Dosyaları:
- `favicon.ico` (16x16, 32x32 boyutları içeren .ico dosyası)
- `favicon.svg` (SVG formatında logo - zaten mevcut olabilir)

#### Apple Touch Icon:
- `apple-touch-icon.png` (180x180 px)

#### PWA İkonları:
- `icon-192.png` (192x192 px)
- `icon-512.png` (512x512 px)

#### Open Graph Görseli:
- `neviza-og-image.jpg` (1200x630 px)
  - Facebook, WhatsApp, LinkedIn paylaşımlarında görünecek
  - Üzerinde Neviza logosu ve kısa bir slogan olmalı
  - JPG veya PNG formatında

### 2. Google Search Console Kurulumu

1. **Google Search Console'a gidin:** https://search.google.com/search-console
2. **Mülk ekleyin:** www.nevizagida.com
3. **Doğrulama kodunu alın**
4. **Kodu layout.tsx'e ekleyin:**
   - `src/app/[locale]/layout.tsx` dosyasını açın
   - `verification.google` değerini değiştirin:
   ```typescript
   verification: {
     google: 'BURAYA_ALINAN_KOD',
   }
   ```
5. **Sitemap gönderin:** https://www.nevizagida.com/sitemap.xml

### 3. Google Analytics Kurulumu (Opsiyonel)

1. **Google Analytics hesabı oluşturun:** https://analytics.google.com
2. **Measurement ID alın** (örn: G-XXXXXXXXXX)
3. **Layout'a ekleyin:**

`src/app/[locale]/layout.tsx` dosyasına head bölümüne ekleyin:

```tsx
{/* Google Analytics */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `,
  }}
/>
```

### 4. Yandex Webmaster Tools (Rusya pazarı için)

1. **Yandex Webmaster'a gidin:** https://webmaster.yandex.com
2. **Site ekleyin:** www.nevizagida.com
3. **Doğrulama kodunu alın**
4. **Layout'a ekleyin:**
   ```typescript
   verification: {
     google: 'GOOGLE_KODU',
     yandex: 'YANDEX_KODU',
   }
   ```

---

## 🖼️ Logo Dosyalarını Hazırlama

### Favicon.ico Oluşturma:
1. Neviza logonuzu 512x512 px PNG olarak hazırlayın
2. https://realfavicongenerator.net/ adresine gidin
3. Dosyayı yükleyin ve tüm platformlar için favicon oluşturun
4. İndirilen dosyaları `/public/` ve `/public/images/brand/` klasörlerine kopyalayın

### Open Graph Görseli Hazırlama:
- Boyut: 1200x630 px
- Format: JPG veya PNG
- Dosya boyutu: 1 MB'dan küçük
- İçerik: Neviza logosu + ürün görseli + slogan
- Örnek tasarım araçları: Canva, Figma, Photoshop

---

## 🚀 Dağıtım Sonrası Kontrol Listesi

### Google Araçları:
- [ ] Google Search Console'da site doğrulandı
- [ ] Sitemap gönderildi
- [ ] robots.txt kontrol edildi
- [ ] Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- [ ] PageSpeed Insights: https://pagespeed.web.dev/

### Meta Etiket Testleri:
- [ ] Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- [ ] Twitter Card Validator: https://cards-dev.twitter.com/validator
- [ ] LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

### Schema Doğrulama:
- [ ] Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Schema Markup Validator: https://validator.schema.org/

---

## 📊 SEO İzleme

Aşağıdaki metrikleri düzenli olarak takip edin:

1. **Google Search Console:**
   - Arama görünümleri
   - Tıklama oranları
   - Ortalama sıralama
   - İndekslenen sayfalar

2. **Google Analytics:**
   - Ziyaretçi sayısı
   - Sayfa görüntülemeleri
   - Hemen çıkma oranı
   - Dönüşüm oranları

3. **Sayfa Hızı:**
   - Core Web Vitals
   - First Contentful Paint (FCP)
   - Largest Contentful Paint (LCP)
   - Cumulative Layout Shift (CLS)

---

## 🔧 Ek Optimizasyonlar

### Gelecek İyileştirmeler:
1. Blog bölümü eklendiğinde Article schema
2. Ürün sayfalarına Product schema
3. FAQ sayfasına FAQPage schema
4. Breadcrumb navigation eklendiğinde BreadcrumbList schema
5. Müşteri yorumları için Review schema

---

## 📞 Destek

Sorularınız için:
- Email: nevizagida@gmail.com
- Tel: +90 507 651 42 00

---

Son güncelleme: 24 Ekim 2025
