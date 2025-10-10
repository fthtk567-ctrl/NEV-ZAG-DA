# Translation Files Protection Guide 🔒

Bu dokümantasyon, çeviri dosyalarınızı korumak için oluşturulmuş araçları açıklar.

## 📋 İçindekiler

- [Neden Koruma Gerekli?](#neden-koruma-gerekli)
- [Kullanılabilir Scriptler](#kullanılabilir-scriptler)
- [Kullanım Örnekleri](#kullanım-örnekleri)
- [NPM Komutları](#npm-komutları)

## ❓ Neden Koruma Gerekli?

Translation dosyaları (`messages/*.json`) projenin kritik parçalarıdır. Yanlışlıkla:
- ✏️ Manuel düzenleme
- 🤖 Formatter veya linter tarafından değiştirilme
- 🗑️ Silinme
- 📝 Üzerine yazılma

gibi durumları önlemek için bu dosyalar **salt okunur (read-only)** yapılabilir.

## 🛠️ Kullanılabilir Scriptler

### 1️⃣ Dosyaları Kilitleme

```powershell
.\scripts\lock-translations.ps1
```

**Ne yapar?**
- `messages/tr.json` → Salt okunur ✅
- `messages/en.json` → Salt okunur ✅
- `messages/ru.json` → Salt okunur ✅
- `messages/ar.json` → Salt okunur ✅

**Ne zaman kullanılır?**
- Çeviri dosyalarını güncelledikten sonra
- Deployment öncesi
- Uzun süre değişiklik yapılmayacaksa

---

### 2️⃣ Dosyaların Kilidini Açma

```powershell
.\scripts\unlock-translations.ps1
```

**Ne yapar?**
- Tüm translation dosyalarının salt okunur özelliğini kaldırır
- Dosyalar düzenlenebilir hale gelir

**Ne zaman kullanılır?**
- Çeviri dosyalarını güncellemeden önce
- Yeni dil eklerken
- `merge-translations.js` scriptini çalıştırmadan önce

---

### 3️⃣ Dosyaları Yedekleme

```powershell
.\scripts\backup-translations.ps1
```

**Ne yapar?**
- Tüm translation dosyalarının yedeğini alır
- Tarih ve saat damgalı klasör oluşturur
- Örnek: `backups/translations_2025-10-10_17-43-47/`

**Ne zaman kullanılır?**
- Önemli değişiklikler yapmadan önce
- Haftalık rutin yedekleme
- Deployment öncesi

---

## 💡 Kullanım Örnekleri

### Senaryo 1: Çeviri Güncelleme

```powershell
# 1. Kilidi aç
.\scripts\unlock-translations.ps1

# 2. Yedek al
.\scripts\backup-translations.ps1

# 3. Merge script'i çalıştır (otomatik kilitler)
node merge-translations.js

# 4. Test et
npm run dev

# 5. Kontrol et
Get-ChildItem messages\*.json | Select-Object Name, IsReadOnly
```

### Senaryo 2: Acil Düzenleme

```powershell
# Kilidi aç
.\scripts\unlock-translations.ps1

# Dosyayı düzenle
code messages/tr.json

# Tekrar kilitle
.\scripts\lock-translations.ps1
```

### Senaryo 3: Haftalık Yedekleme

```powershell
# Sadece yedek al
.\scripts\backup-translations.ps1
```

---

## 📦 NPM Komutları

package.json'a eklenmiş kısa komutlar:

```json
{
  "scripts": {
    "translations:merge": "node merge-translations.js",
    "translations:lock": "powershell -File ./scripts/lock-translations.ps1",
    "translations:unlock": "powershell -File ./scripts/unlock-translations.ps1",
    "translations:backup": "powershell -File ./scripts/backup-translations.ps1"
  }
}
```

### Kullanım

```bash
# Çevirileri birleştir ve kilitle
npm run translations:merge

# Kilitle
npm run translations:lock

# Kilidi aç
npm run translations:unlock

# Yedekle
npm run translations:backup
```

---

## 🔍 Dosya Durumunu Kontrol Etme

```powershell
# Basit kontrol
Get-ChildItem messages\*.json | Select-Object Name, IsReadOnly

# Detaylı kontrol
Get-ChildItem messages\*.json | Select-Object Name, IsReadOnly, LastWriteTime, Length | Format-Table -AutoSize
```

**Örnek Çıktı:**
```
Name    IsReadOnly LastWriteTime       Length
----    ---------- -------------       ------
ar.json       True 10.10.2025 17:43   10738
en.json       True 10.10.2025 17:43    6620
ru.json       True 10.10.2025 17:43   12938
tr.json       True 10.10.2025 17:43    7307
```

---

## ⚠️ Önemli Notlar

1. **`merge-translations.js` otomatik kilitler**: Script çalıştığında dosyalar otomatik olarak kilitlenir.

2. **Windows özel**: Bu scriptler Windows PowerShell için tasarlanmıştır. macOS/Linux için farklı komutlar kullanılmalıdır.

3. **Git ile senkronizasyon**: Salt okunur özellik git tarafından takip edilmez, sadece local sistem için geçerlidir.

4. **VSCode uyarısı**: Kilitli dosyayı düzenlemeye çalışırsanız VSCode uyarı verir ve kilidi açmanızı ister.

---

## 🆘 Sorun Giderme

### "Access Denied" hatası

```powershell
# Yönetici olarak çalıştırın
Start-Process powershell -Verb RunAs
```

### Script çalışmıyor

```powershell
# Execution Policy'yi kontrol edin
Get-ExecutionPolicy

# Gerekirse değiştirin
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Manuel kilitleme/açma

```powershell
# Kilitle
Set-ItemProperty -Path "messages\tr.json" -Name IsReadOnly -Value $true

# Kilidi aç
Set-ItemProperty -Path "messages\tr.json" -Name IsReadOnly -Value $false
```

---

## 📞 Destek

Sorunlarla karşılaşırsanız:
- README.md dosyasını kontrol edin
- Scripts klasöründeki kodları inceleyin
- PowerShell help komutlarını kullanın: `Get-Help Set-ItemProperty`

---

**🎉 Artık çeviri dosyalarınız güvende!**
