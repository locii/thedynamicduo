# The Dynamic Duo

Marketing site for **Indigo Sangster & Ruby Cheyne** — classical & contemporary guitar for weddings, corporate events, and lessons.

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com). Dark, elegant theme. Deploys to Netlify.

## Getting started

```bash
npm install
npm run dev      # local dev at http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

Requires Node 18+ (Node 22 recommended).

## Editing content

Page copy lives in **Markdown** files under `src/content/pages/`. Edit the text below the frontmatter, or the frontmatter fields themselves:

| Field          | What it does                                                        |
| -------------- | ------------------------------------------------------------------- |
| `title`        | Page heading + browser tab title                                    |
| `eyebrow`      | Small uppercase label above the heading                             |
| `subtitle`     | Intro line under the hero heading                                   |
| `description`  | SEO / social-share description                                      |
| `heroImage`    | Path to the header image (see below)                                |
| `heroAlt`      | Alt text for the hero image                                         |
| `heroPosition` | Focal point of the hero crop, e.g. `center`, `center 30%`, `top`    |

Pages: `welcome.md`, `about-duo.md`, `indigo.md`, `ruby.md`, `lessons.md`, `performances.md`.
The **Contact**, **Gallery**, **Thanks** and **404** pages live in `src/pages/` (they have no Markdown copy).

Look for `<!-- TODO -->` comments in the Markdown for spots that need real details (pricing, location, travel area, etc.).

## Changing a page's header image

1. Drop your image into `src/assets/heroes/` (e.g. `lessons.jpg`).
2. In that page's Markdown frontmatter, set `heroImage: ../../assets/heroes/lessons.jpg`.

Astro automatically resizes, compresses and serves modern formats (WebP/AVIF). Use large source images (≥2000px wide) for crisp heroes.

## Adding gallery photos

Just **drop image files into `src/assets/gallery/`** (`.jpg`, `.png`, `.webp`). They appear on the `/gallery` page automatically, sorted by filename, and open in a lightbox on click. Subfolders work too. No code changes needed.

Tip: name files `01.jpg`, `02.jpg`, … to control the order.

## Site-wide settings

Edit `src/site.ts`:

- **Contact email** (`contactEmail`) — where the contact form notifications go (also configure this in Netlify → Forms).
- **Instagram** link — leave blank to hide.
- **Navigation** — the `nav` array controls menu order and labels.

Theme colours and fonts live at the top of `src/styles/global.css` (the `@theme` block).

## Contact form

Uses **Netlify Forms** — no backend. On deploy, Netlify detects the form automatically and emails submissions. Set the notification address in Netlify: **Forms → Settings & usage → Form notifications**. A hidden honeypot field filters basic spam.

## Deploying to Netlify

1. Push this repo to GitHub (already configured).
2. In Netlify: **Add new site → Import from Git**, pick the repo.
3. Build settings are picked up from `netlify.toml` (`npm run build`, publish `dist/`).
4. Add your custom domain under **Domain settings**.

Also update `site` in `astro.config.mjs` to the final domain (used for the sitemap and canonical URLs).

## Placeholder images

The images in `src/assets/heroes/` and `src/assets/gallery/` are generated dark placeholders. Replace them with real photography and delete `scripts/generate-placeholders.mjs` when you no longer need it.
