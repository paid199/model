import type { ReactNode } from 'react';
import KitScripts from './KitScripts';

const title = 'Next Door Photos: real estate photography in Cincinnati and Dayton';
const description =
  'Interior, aerial and video media for homes for sale in Cincinnati and Dayton. Tell us about the property and request a quote.';

// Next Door Photos, Cincinnati / Dayton. The page is plain HTML styled by the tasteskill kit in public/assets (loaded as files, in this order).
// The kit's scripts change the DOM, so KitScripts loads them only after React has hydrated.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-type="service"
      data-radius="soft"
      data-buttons="tonal"
      data-motion=""
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Photos, aerials and video for homes for sale in Cincinnati and Dayton." />
        <meta property="og:image" content="/share.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#ffffff" />
        {/* <link rel="canonical" href="https://[the real domain]/"> once the domain is known */}
        <meta name="site-kind" content="other" />
        <meta name="page-type" content="service" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/icons/icon.css" />
        <style
          dangerouslySetInnerHTML={{
            __html: `:root {
  --p-bg: #ffffff; --p-surface: #f2f2f2; --p-ink: #0a0a0a; --p-muted: #6b6b6b;
  --p-accent: #d92b21; --p-accent-ink: #ffffff; --p-action: #d92b21; --p-action-ink: #ffffff;
  --p-inv-bg: #000000; --p-inv-surface: #010101; --p-inv-ink: #ffffff; --p-inv-muted: #868686;
  --p-inv-accent: #d92b21; --p-inv-accent-ink: #ffffff; --p-inv-action: #d92b21; --p-inv-action-ink: #ffffff;
  --font-display: "Hanken Grotesk", system-ui, sans-serif;
  --font-text: "Hanken Grotesk", system-ui, sans-serif;
  --display-weight: 400;
  --display-tracking: -0.03em;
  --display-tracking-xl: -0.038em;
}`,
          }}
        />
        <link rel="stylesheet" href="/assets/moments/pinned-chapters/moment.css" />
        <link rel="stylesheet" href="/site.css" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700);" +
              "document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500);",
          }}
        />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        <link rel="modulepreload" href="/assets/moments/pinned-chapters/moment.js" />
      </head>
      <body>
        {children}
        <KitScripts />
      </body>
    </html>
  );
}
