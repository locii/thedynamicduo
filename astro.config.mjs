// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Update `site` once the real domain is known — it's used for sitemap + canonical URLs.
export default defineConfig({
  site: "https://thedynamicduo.com.au",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
