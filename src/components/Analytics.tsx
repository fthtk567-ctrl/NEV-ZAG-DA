import Script from 'next/script';

/**
 * Google Analytics Component
 * 
 * Kullanım:
 * 1. Google Analytics hesabı oluşturun: https://analytics.google.com
 * 2. Measurement ID alın (örn: G-XXXXXXXXXX)
 * 3. Aşağıdaki GA_MEASUREMENT_ID değerini değiştirin
 * 4. Bu component'i layout.tsx'e import edin
 */

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

export function GoogleAnalytics() {
  // Sadece production'da çalıştır
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

/**
 * Meta Pixel (Facebook) Component
 * 
 * Kullanım:
 * 1. Meta Business hesabı oluşturun
 * 2. Pixel ID alın
 * 3. Aşağıdaki META_PIXEL_ID değerini değiştirin
 */

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || 'YOUR_PIXEL_ID';

export function MetaPixel() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <Script
      id="meta-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `,
      }}
    />
  );
}

/**
 * Yandex Metrica Component (Rusya pazarı için)
 * 
 * Kullanım:
 * 1. Yandex Metrica hesabı oluşturun: https://metrica.yandex.com
 * 2. Counter ID alın
 * 3. Aşağıdaki YANDEX_METRICA_ID değerini değiştirin
 */

const YANDEX_METRICA_ID = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID || 'YOUR_COUNTER_ID';

export function YandexMetrica() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <Script
      id="yandex-metrica"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          
          ym(${YANDEX_METRICA_ID}, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });
        `,
      }}
    />
  );
}
