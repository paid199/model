import type { ReactNode } from 'react';
import KitScripts from './KitScripts';

const title = 'Alterly: migration review for Postgres apps';
const description =
  'Alterly checks each Postgres migration in a pull request against your table sizes and comments with a safer rewrite before you merge.';

// The page is plain HTML styled by the tasteskill kit in public/assets (loaded as files, in this order).
// The kit's scripts change the DOM, so KitScripts loads them only after React has hydrated.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-type="software"
      data-radius="sharp"
      data-ground="sage"
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
        <meta property="og:description" content="Lock checks for every Postgres migration, posted on the pull request." />
        <meta property="og:image" content="/share.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#18191b" />
        {/* <link rel="canonical" href="https://[the real domain]/"> once the domain is known */}
        <meta name="site-kind" content="software" />
        <meta name="page-type" content="software" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400..700&family=Geist+Mono:wght@400..500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/backgrounds/backgrounds.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/icons/icon.css" />
        <style
          dangerouslySetInnerHTML={{
            __html: `:root {
  --p-bg: #18191b; --p-surface: #222427; --p-ink: #eff0f1; --p-muted: #9c9ea3;
  --p-accent: #ff4a1f; --p-accent-ink: #18191b; --p-action: #ff4a1f; --p-action-ink: #18191b;
  --p-inv-bg: #eff0f1; --p-inv-surface: #dedfe0; --p-inv-ink: #18191b; --p-inv-muted: #5b5c5e;
  --p-inv-accent: #18191b; --p-inv-accent-ink: #eff0f1; --p-inv-action: #18191b; --p-inv-action-ink: #eff0f1;
  --font-display: "Geist", system-ui, sans-serif;
  --font-text: "Geist", system-ui, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  --display-weight: 500;
  --display-tracking: -0.035em;
  --display-tracking-xl: -0.045em;
}`,
          }}
        />
        <link rel="stylesheet" href="/assets/ui/base.css" />
        <link rel="stylesheet" href="/assets/ui/window/fragment.css" />
        <link rel="stylesheet" href="/assets/ui/diff-review/fragment.css" />
        <link rel="stylesheet" href="/assets/ui/checklist/fragment.css" />
        <link rel="stylesheet" href="/assets/diagrams/diagram.css" />
        <link rel="stylesheet" href="/assets/moments/pinned-chapters/moment.css" />
        <link rel="stylesheet" href="/site.css" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700);" +
              "document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500);",
          }}
        />
        <script src="/assets/backgrounds/backgrounds.js"></script>
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
