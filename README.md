# M. Dwiyan Hartono — Portfolio

A static professional portfolio website for **M. Dwiyan Hartono**, Senior Fullstack
Software Developer. Built from scratch with **React + TypeScript + Vite + Tailwind CSS**.

All content is derived from the CV (`cv-extracted.txt`). The home address and phone
number are intentionally **excluded**; only email and website are shown as contact
channels.

## Features

- ⚡️ Vite + React 18 + TypeScript
- 🎨 Tailwind CSS with a custom brand palette
- 🌗 Dark / light mode toggle, persisted to `localStorage` (no flash on load)
- 📱 Fully responsive layout
- 🧭 Sticky navbar, hero, about, experience timeline, grouped tech stack, featured
  projects, filterable other projects, expertise, and contact sections
- 🔎 SEO metadata + Open Graph + Twitter cards + JSON-LD (`schema.org/Person`)
- 🤖 `robots.txt` and `sitemap.xml`
- 🧩 `404.html` SPA fallback for GitHub Pages deep links
- ⭐️ SVG favicon and Open Graph image
- ⬇️ "Download CV" button linking to `public/cv.pdf` (placeholder)
- 🚀 GitHub Actions workflow deploying to GitHub Pages

## Sections

1. **Hero** — name, role, summary, CTAs, quick facts
2. **About** — summary, soft skills, documentation & productivity, location
3. **Experience** — combined work + education timeline
4. **Tech Stack** — grouped: Backend, Frontend, Mobile, Database, API & Integration, Tools
5. **Featured Projects** — Recruitment Management System, DAMRI Dashboard
   Transportation, Bagong Bus Core Ticketing, IDMALL
6. **Other Projects** — all remaining CV projects, filterable by Web / API / Mobile
7. **Career & Expertise** — positioning for senior fullstack / senior backend /
   system analyst, multi-skill crossover
8. **Contact** — email and website only

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser.

## Build

```bash
npm run build
```

The production output is written to `dist/`.

Preview the production build locally:

```bash
npm run preview
```

## Project structure

```
.
├── index.html                  # HTML shell + SEO/OG meta + JSON-LD
├── public/
│   ├── 404.html                # GitHub Pages SPA fallback
│   ├── cv.pdf                  # placeholder CV (replace with real file)
│   ├── favicon.svg
│   ├── og-image.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── theme-init.js           # no-flash theme bootstrap
├── src/
│   ├── components/             # section + UI components
│   ├── data/portfolio.ts       # single source of truth for all CV facts
│   ├── hooks/useTheme.ts       # persisted theme hook
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .github/workflows/deploy.yml
└── tailwind.config.js
```

## Editing content

All facts live in [`src/data/portfolio.ts`](src/data/portfolio.ts): profile, soft
skills, tech stack groups, timeline, and projects. Update that file to change content.

## Deployment (GitHub Pages)

1. Push the repository to GitHub as the user-site repo
   (`DwiyanHartono17/DwiyanHartono17.github.io`).
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to the `main` branch (or run the workflow manually). The
   `.github/workflows/deploy.yml` workflow builds and deploys `dist/`.
4. The site is served at the root user-site URL:
   <https://DwiyanHartono17.github.io/>.

Because this is a user site, `base` stays `'/'` in `vite.config.ts`. If you
ever host it as a project page (`username.github.io/repo`), set
`base: '/<repo-name>/'` in `vite.config.ts`.

## Notes / placeholders

- `public/cv.pdf` is a placeholder PDF — replace it with the real CV.
- The Open Graph image is an SVG (`og-image.svg`). Some platforms prefer PNG/JPG;
  export a 1200×630 PNG if needed and update the `og:image` meta tags.

## License

Content © M. Dwiyan Hartono. Code provided as-is.
