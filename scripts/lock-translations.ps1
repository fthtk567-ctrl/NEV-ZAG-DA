# Translation dosyalarını kilitleme scripti
# Kullanım: .\scripts\lock-translations.ps1

Write-Host "🔒 Translation dosyaları kilitleniyor..." -ForegroundColor Yellow

$files = @(
    "messages\tr.json",
    "messages\en.json",
    "messages\ru.json",
    "messages\ar.json"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Set-ItemProperty -Path $file -Name IsReadOnly -Value $true
        Write-Host "✅ Kilitlendi: $file" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Bulunamadı: $file" -ForegroundColor Red
    }
}

Write-Host "`n🎉 Tüm translation dosyaları salt okunur yapıldı!" -ForegroundColor Cyan
