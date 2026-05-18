# Summit Build Co. — Construction SPA

A modern single-page site for a small construction company, built with React, Vite, TypeScript, and Tailwind CSS. Deployed to GitHub Pages as a **project site** at `https://<username>.github.io/SPAconstruction/`.

## Local development (Linux / WSL)

**Prerequisites:** Node.js 20.19+ or 22+ (recommended via [nvm](https://github.com/nvm-sh/nvm)).

```bash
cd ~/Linux_repos/SPAconstruction
npm install
npm run dev
```

Open [http://localhost:5173/SPAconstruction/](http://localhost:5173/SPAconstruction/) — the dev server uses the same `/SPAconstruction/` base path as production.

```bash
npm run build    # output in dist/
npm run preview  # test the production build locally
```

## Customize company info

Edit [`src/lib/site.ts`](src/lib/site.ts) for name, phone, email, address, and tagline.

## Deploy to GitHub Pages

1. Push this repo to GitHub as **`SPAconstruction`** (or update `base` in [`vite.config.ts`](vite.config.ts) and `basename` in [`src/main.tsx`](src/main.tsx) if you rename it).
2. In the repo: **Settings → Pages → Build and deployment → Source:** choose **GitHub Actions**.
3. Push to the `main` branch. The [deploy workflow](.github/workflows/deploy.yml) builds and publishes `dist/`.

Your site will be live at `https://<username>.github.io/SPAconstruction/`.

### SPA routing on refresh

GitHub Pages does not natively support client-side routes. This project uses the [spa-github-pages](https://github.com/rafgraph/spa-github-pages) redirect pattern:

- [`public/404.html`](public/404.html) — redirects unknown paths back to the app
- Script in [`index.html`](index.html) — restores the correct URL after redirect

## Project structure

```
src/
  components/   Layout, shared UI
  pages/        Home, Services, About, Contact
  lib/site.ts   Company constants
```

## Contact form

The contact form is UI-only. Wire up [Formspree](https://formspree.io), Netlify Forms, or similar in [`src/pages/Contact.tsx`](src/pages/Contact.tsx), or use the `mailto:` link on the contact page.

## Renaming the repository

If the GitHub repo name changes, update:

1. `base: '/YourRepoName/'` in `vite.config.ts`
2. `basename="/YourRepoName"` in `src/main.tsx`
3. `pathSegmentsToKeep` in `public/404.html` (keep `1` for project sites)
