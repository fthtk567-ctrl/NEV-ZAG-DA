# Logo Dönüştürme Rehberi

## Mevcut Logo Dosyalarınız

Projenizde zaten şu logo dosyaları var:
- `/public/neviza-logo-final.svg` ✅
- `/public/neviza-logo-correct.svg`
- `/public/neviza-logo.svg`

## Hızlı Favicon Oluşturma

### Yöntem 1: Online Araç (Önerilen)

1. **RealFaviconGenerator kullanın:**
   - https://realfavicongenerator.net/ adresine gidin
   - `neviza-logo-final.svg` dosyanızı yükleyin
   - Tüm platformlar için optimize edilmiş favicon'ları oluşturun
   - Zip dosyasını indirin
   - İçindeki dosyaları şu klasörlere kopyalayın:
     - `favicon.ico` → `/public/`
     - `apple-touch-icon.png` → `/public/images/brand/`
     - `icon-192.png` ve `icon-512.png` → `/public/images/brand/`

### Yöntem 2: Canva (Tasarım İçin)

1. **OG Image oluşturun:**
   - https://canva.com adresine gidin
   - Özel boyut: 1200 x 630 px
   - Neviza logosunu ekleyin
   - "Mutluluğun En Tatlı Hali" sloganını ekleyin
   - Ürün görsellerini ekleyin
   - JPG olarak indirin
   - `/public/images/brand/neviza-og-image.jpg` olarak kaydedin

## Örnek OG Image Tasarımı

```
┌───────────────────────────────────────────────────────┐
│                                                       │
│                   [NEVIZA LOGO]                       │
│                                                       │
│            Mutluluğun En Tatlı Hali                  │
│         Türkiye'nin Güvenilir Şeker Markası         │
│                                                       │
│    🍬    🍭    🧸    🍫    🍒                       │
│   [Ürün Görselleri veya Dekoratif Elementler]      │
│                                                       │
└───────────────────────────────────────────────────────┘
```

**Renk Paleti:**
- Arka plan: `#00B4D8` (Neviza mavisi) ile açık gradyan
- Yazı: Beyaz veya `#023047` (Koyu mavi)
- Vurgular: `#FFB703` (Altın sarısı)

## Dosya Boyutları Kontrol

Oluşturduğunuz görsellerin boyutlarını kontrol edin:

```powershell
# PowerShell'de dosya boyutunu kontrol etme
Get-ChildItem "public\images\brand\*" | Select-Object Name, @{Name="Size(KB)";Expression={[math]::Round($_.Length/1KB,2)}}
```

**Maksimum boyutlar:**
- `favicon.ico`: 100 KB
- `apple-touch-icon.png`: 50 KB
- `icon-192.png`: 20 KB
- `icon-512.png`: 100 KB
- `neviza-og-image.jpg`: 300 KB

## Görsel Optimizasyonu

Dosya boyutları çok büyükse optimize edin:

**Online araçlar:**
- https://squoosh.app/ (Google'ın ücretsiz aracı)
- https://tinypng.com/ (PNG için)
- https://compressor.io/ (JPG için)

## Test ve Doğrulama

Dosyaları ekledikten sonra test edin:

```powershell
# Development server'ı yeniden başlatın
npm run dev
```

Tarayıcıda kontrol edin:
- Favicon: `http://localhost:3000/favicon.ico`
- OG Image: `http://localhost:3000/images/brand/neviza-og-image.jpg`

## ✅ Tamamlanma Kontrolü

- [ ] `favicon.ico` oluşturuldu ve `/public/` klasörüne eklendi
- [ ] `apple-touch-icon.png` oluşturuldu
- [ ] `icon-192.png` oluşturuldu
- [ ] `icon-512.png` oluşturuldu
- [ ] `neviza-og-image.jpg` oluşturuldu
- [ ] Tüm dosyalar optimize edildi
- [ ] Tarayıcıda görüntüleri test ettim
- [ ] Dosya boyutları uygun

---

**İpucu:** Bir tasarımcınız yoksa Fiverr veya Upwork'ten 5-10$ karşılığında profesyonel bir OG image tasarımı yaptırabilirsiniz.
