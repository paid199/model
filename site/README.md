# Alterly website

A one-page marketing site for **Alterly**, a made-up developer tool that reviews Postgres migrations in pull
requests and warns about table locks before merge. Built with Next.js (static export) and the
`design-taste-frontend` skill's CSS/JS kit.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
```

## Layout

- `app/layout.tsx` – `<head>`, fonts, the kit's stylesheets and the page palette.
- `app/page.tsx` – the page: hero, app window, steps, frameworks, rules, pricing, questions, footer.
- `app/KitScripts.tsx` – loads the kit's scripts after React hydrates, so their DOM changes never clash with React.
- `public/assets/` – the kit (copied from `.agents/skills/design-taste-frontend/assets`), plus real logos in `public/assets/icons`.
- `public/site.css` – page CSS for the drawn UI pieces and section heights.
- `public/privacy.html`, `public/terms.html` – placeholder legal pages.

## Stand-ins to replace before launch

- Every "Add to GitHub" button opens `mailto:hello@alterly.example`; point it at the real GitHub App install URL.
- The pricing buttons and "Email us" also use `hello@alterly.example`.
- `share.jpg` is a screenshot of the hero; add `<link rel="canonical">` once the domain exists.
- All product facts (38 rules, prices, Postgres 13 to 17, the 40-second check) are invented for this demo.
