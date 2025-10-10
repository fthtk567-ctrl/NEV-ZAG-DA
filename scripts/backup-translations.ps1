# Translation dosyalarını yedekleme scripti
# Kullanım: .\scripts\backup-translations.ps1

$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$backupDir = "backups\translations_$timestamp"

Write-Host "💾 Translation dosyaları yedekleniyor..." -ForegroundColor Yellow

# Backup klasörünü oluştur
New-Item -ItemType Directory -Force -Path $backupDir | Out-Null

$files = @(
    "messages\tr.json",
    "messages\en.json",
    "messages\ru.json",
    "messages\ar.json"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $fileName = Split-Path $file -Leaf
        Copy-Item $file -Destination "$backupDir\$fileName"
        Write-Host "✅ Yedeklendi: $file → $backupDir\$fileName" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Bulunamadı: $file" -ForegroundColor Red
    }
}

Write-Host "`n🎉 Yedekleme tamamlandı: $backupDir" -ForegroundColor Cyan
