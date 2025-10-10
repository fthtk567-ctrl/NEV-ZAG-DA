# Tum kritik dosyalari kilitleme scripti
Write-Host "Kritik dosyalar kilitleniyor..." -ForegroundColor Yellow

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

$locked = 0
foreach ($file in $files) {
    if (Test-Path $file) {
        Set-ItemProperty -Path $file -Name IsReadOnly -Value $true -ErrorAction SilentlyContinue
        Write-Host "Kilitlendi: $file" -ForegroundColor Green
        $locked++
    }
}

Write-Host ""
Write-Host "Toplam $locked dosya kilitlendi!" -ForegroundColor Cyan
Write-Host "Kilidi acmak icin: .\scripts\unlock-all-critical-files.ps1" -ForegroundColor Yellow
