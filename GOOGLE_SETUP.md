# 🚀 Google Arama ve SEO Kurulum Adımları

## Hızlı Başlangıç Rehberi

### 1️⃣ Logo ve Görselleri Hazırlayın (ÖNEMLİ!)

**İhtiyacınız olan dosyalar:**

```
📁 /public/images/brand/
├── apple-touch-icon.png (180x180 px)
├── icon-192.png (192x192 px)
├── icon-512.png (512x512 px)
└── neviza-og-image.jpg (1200x630 px)
```

**Hızlı yol:** 
1. Mevcut `neviza-logo-final.svg` dosyanızı açın
2. https://realfavicongenerator.net/ adresine gidin
3. Tüm gerekli boyutları otomatik oluşturun
4. İndirip `/public/images/brand/` klasörüne kopyalayın

### 2️⃣ Google Search Console Kurulumu

**Adım 1:** Google Search Console'a gidin
```
https://search.google.com/search-console
```

**Adım 2:** Site ekleyin
- "Mülk ekle" butonuna tıklayın
- "URL ön eki" seçeneğini seçin
- `https://www.nevizagida.com` yazın

**Adım 3:** Doğrulama kodu alın
- "HTML etiketi" yöntemini seçin
- `content="xxxxxxxxxxxx"` kısmını kopyalayın

**Adım 4:** Kodu projeye ekleyin
`src/app/[locale]/layout.tsx` dosyasını açın ve şu satırı bulun:
```typescript
verification: {
  google: 'YOUR_GOOGLE_VERIFICATION_CODE', // ← BURAYA KOD GELİR
}
```

**Adım 5:** Değişiklikleri deploy edin
```powershell
git add .
git commit -m "Add Google Search Console verification"
git push
```

**Adım 6:** Google'da doğrulayın
- Search Console'a dönün
- "Doğrula" butonuna tıklayın

**Adım 7:** Sitemap gönderin
- Search Console'da "Sitemap'ler" bölümüne gidin
- Şu URL'yi girin: `https://www.nevizagida.com/sitemap.xml`
- "Gönder" butonuna tıklayın

### 3️⃣ Google Analytics Kurulumu (Opsiyonel)

**Adım 1:** Google Analytics hesabı oluşturun
```
https://analytics.google.com
```

**Adım 2:** Measurement ID alın
- "Hesap oluştur" → "Mülk oluştur"
- Measurement ID'yi kopyalayın (örn: G-ABC123XYZ)

**Adım 3:** .env.local dosyası oluşturun
Proje kök dizininde `.env.local` dosyası oluşturun:
```env
NEXT_PUBLIC_GA_ID=G-ABC123XYZ
```

**Adım 4:** Analytics component'i ekleyin
`src/app/[locale]/layout.tsx` dosyasına ekleyin:

```typescript
import { GoogleAnalytics } from '@/components/Analytics';

// <body> etiketinin içine ekleyin:
<body>
  <GoogleAnalytics />
  {/* ... diğer içerik */}
</body>
```

### 4️⃣ Sosyal Medya Paylaşım Testi

Görselleri ekledikten sonra test edin:

**Facebook/WhatsApp:**
```
https://developers.facebook.com/tools/debug/
```
`www.nevizagida.com` yazın ve test edin

**Twitter:**
```
https://cards-dev.twitter.com/validator
```

**LinkedIn:**
```
https://www.linkedin.com/post-inspector/
```

### 5️⃣ Site Performans Testi

**Google PageSpeed:**
```
https://pagespeed.web.dev/
```
`www.nevizagida.com` yazın

**Mobile-Friendly Test:**
```
https://search.google.com/test/mobile-friendly
```

---

## 📊 Kontrol Listesi

### Temel SEO (Yapılmış ✅)
- [x] Meta etiketleri eklendi
- [x] Open Graph etiketleri eklendi
- [x] Twitter Card etiketleri eklendi
- [x] Sitemap oluşturuldu
- [x] Robots.txt yapılandırıldı
- [x] Çoklu dil desteği (hreflang)
- [x] Schema.org yapılandırılmış veri

### Yapılması Gerekenler
- [ ] Logo dosyalarını ekle
- [ ] OG image (sosyal medya görseli) oluştur
- [ ] Google Search Console doğrulaması yap
- [ ] Sitemap gönder
- [ ] Google Analytics kur (opsiyonel)
- [ ] Sosyal medya paylaşımlarını test et

---

## 🎯 Sonraki Adımlar

### Hafta 1:
1. Google Search Console'da siteyi doğrula
2. Sitemap gönder
3. İlk indeksleme raporlarını kontrol et

### Hafta 2-4:
1. Google Analytics verilerini izle
2. Anahtar kelime performansını takip et
3. Sayfa hızını optimize et

### Uzun Vadeli:
1. Blog bölümü ekle (SEO için çok önemli!)
2. Backlink stratejisi oluştur
3. Sosyal medya entegrasyonunu güçlendir

---

## 🆘 Sorun Giderme

**Sitemap bulunamıyor:**
- `https://www.nevizagida.com/sitemap.xml` adresini tarayıcıda kontrol edin
- 404 hatası alıyorsanız, projeyi yeniden deploy edin

**Google doğrulama başarısız:**
- Verification code'u doğru kopyaladığınızdan emin olun
- Deploy edildikten sonra 5-10 dakika bekleyin
- Sayfayı hard refresh yapın (Ctrl+F5)

**OG image görünmüyor:**
- Dosya boyutunun 1 MB altında olduğundan emin olun
- Facebook Debug Tool'u kullanarak cache'i temizleyin
- Görsel URL'sinin doğru olduğunu kontrol edin

---

## 📞 İletişim

Sorularınız için:
- **Email:** nevizagida@gmail.com
- **Telefon:** +90 507 651 42 00

---

**Hazırlayan:** GitHub Copilot  
**Tarih:** 24 Ekim 2025  
**Proje:** Neviza Gıda Web Sitesi
