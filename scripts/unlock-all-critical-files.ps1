# Tum kritik dosyalarin kilidini acma scripti
Write-Host "Kritik dosyalarin kilidi aciliyor..." -ForegroundColor Yellow

$files = @(
    "messages\tr.json",
    "messages\en.json",
    "messages\ru.json",
    "messages\ar.json",
    "src\types\page.ts",
    "next.config.ts",
    "tsconfig.json",
    "src\i18n.ts",
    "src\middleware.ts",
    "src\components\Header.tsx",
    "src\components\Footer.tsx",
    "src\app\[locale]\page.tsx",
    "src\app\[locale]\layout.tsx"
)

$unlocked = 0
foreach ($file in $files) {
    if (Test-Path $file) {
        Set-ItemProperty -Path $file -Name IsReadOnly -Value $false -ErrorAction SilentlyContinue
        Write-Host "Kilidi acildi: $file" -ForegroundColor Green
        $unlocked++
    }
}

Write-Host ""
Write-Host "Toplam $unlocked dosyanin kilidi acildi!" -ForegroundColor Cyan
Write-Host "DIKKAT: Degisiklik sonrasi tekrar kilitleyin!" -ForegroundColor Red
Write-Host "Kilitlemek icin: .\scripts\lock-all-critical-files.ps1" -ForegroundColor Yellow
