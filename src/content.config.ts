import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Each page's editable content + metadata lives in a Markdown file under
// src/content/pages/. Edit the frontmatter to change the hero image, title,
// intro copy, etc. — no code changes needed.
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      eyebrow: z.string().optional(),
      subtitle: z.string().optional(),
      // Used for <title> + social share preview.
      description: z.string(),
      // Drop a hero image in src/assets/heroes/ and point to it here.
      heroImage: image(),
      heroAlt: z.string().default(""),
      // Optional focal position for the hero crop, e.g. "center 30%".
      heroPosition: z.string().default("center"),
    }),
});

export const collections = { pages };
