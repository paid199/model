# Next Door Photos – Cincinnati / Dayton website

One-page site for a real estate photography company, with a working quote-request form.
Next.js (static export) styled with the `design-taste-frontend` skill's kit.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/, upload it to any host
```

## Make the quote form send for real

The form posts to a form service, which emails each request to you. Free options: Formspree, Web3Forms, Basin.

1. Sign up at https://formspree.io, create a form and copy its endpoint (`https://formspree.io/f/xxxxxxx`).
2. Build with it:
   ```bash
   NEXT_PUBLIC_QUOTE_ENDPOINT=https://formspree.io/f/xxxxxxx NEXT_PUBLIC_QUOTE_EMAIL=you@yourdomain.com npm run build
   ```
   On Vercel or Netlify, add the same two variables in the project settings.

Without `NEXT_PUBLIC_QUOTE_ENDPOINT`, the form opens the visitor's email app addressed to
`NEXT_PUBLIC_QUOTE_EMAIL` (default: a placeholder `quotes@nextdoorphotos.example`, which goes nowhere).

The form checks each field before sending, shows the error under the field, and shows
"Your quote request is in…" only after the form service confirms it. Fields sent: name, email,
phone (optional), property address, service, notes.

## Replace before launch

- **Photos:** every photo is a stand-in from Wikimedia Commons (credited in `public/credits.html`).
  Swap in the company's own work in `public/img/` (keep the file names or update `app/page.tsx`), then
  delete the credits link if none are left.
- **Services list:** interior photos, aerials (drone) and video walkthroughs were assumed for the trade.
  Add or remove services in `app/page.tsx` (the services list, the nav menu and the form's Service options).
- **Contact details:** no phone, email or street address is shown, because none were confirmed.
- **Brand:** if this is a franchise location, check the franchise's brand rules (logo, colours, wording).
- `public/share.jpg` is a screenshot of the hero, used when the link is shared.
