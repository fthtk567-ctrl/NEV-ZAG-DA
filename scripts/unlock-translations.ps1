# Translation dosyalarının kilidini açma scripti
# Kullanım: .\scripts\unlock-translations.ps1

Write-Host "🔓 Translation dosyalarının kilidi açılıyor..." -ForegroundColor Yellow

$files = @(
    "messages\tr.json",
    "messages\en.json",
    "messages\ru.json",
    "messages\ar.json"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Set-ItemProperty -Path $file -Name IsReadOnly -Value $false
        Write-Host "✅ Kilidi açıldı: $file" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Bulunamadı: $file" -ForegroundColor Red
    }
}

Write-Host "`n🎉 Tüm translation dosyalarının kilidi açıldı!" -ForegroundColor Cyan
