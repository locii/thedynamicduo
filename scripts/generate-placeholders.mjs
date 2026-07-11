// One-off helper: generates dark, on-brand placeholder images so the layout
// renders with real files. Delete this script (and swap the images) once you
// have real photography. Run with: node scripts/generate-placeholders.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const heroDir = join(root, "src/assets/heroes");
const galleryDir = join(root, "src/assets/gallery");
await mkdir(heroDir, { recursive: true });
await mkdir(galleryDir, { recursive: true });

const INK = "#0e0e10";
const INK2 = "#1a1a20";
const BRASS = "#c9a24b";
const BONE = "#f4f1ea";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function svg({ w, h, label, sub = "", angle = 135, a = "#141419", b = "#0b0b0d" }) {
  label = esc(label);
  sub = esc(sub);
  return Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <defs>
      <linearGradient id="g" gradientTransform="rotate(${angle})">
        <stop offset="0%" stop-color="${a}"/>
        <stop offset="55%" stop-color="${b}"/>
        <stop offset="100%" stop-color="${INK}"/>
      </linearGradient>
      <radialGradient id="v" cx="50%" cy="42%" r="75%">
        <stop offset="55%" stop-color="rgba(0,0,0,0)"/>
        <stop offset="100%" stop-color="rgba(0,0,0,0.55)"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <rect width="100%" height="100%" fill="url(#v)"/>
    <line x1="${w * 0.5}" y1="${h * 0.5 - 46}" x2="${w * 0.5}" y2="${h * 0.5 + 46}"
          stroke="${BRASS}" stroke-width="1.5" opacity="0.5"/>
    <text x="50%" y="49%" text-anchor="middle"
          font-family="Georgia, 'Times New Roman', serif" font-size="${Math.round(w * 0.028)}"
          fill="${BONE}" opacity="0.9" letter-spacing="2">${label}</text>
    <text x="50%" y="56%" text-anchor="middle"
          font-family="Arial, sans-serif" font-size="${Math.round(w * 0.011)}"
          fill="${BRASS}" opacity="0.75" letter-spacing="6">${sub.toUpperCase()}</text>
  </svg>`);
}

const heroes = [
  ["welcome", "The Dynamic Duo", "Guitar · Voice · Performance"],
  ["about-duo", "Indigo & Ruby", "The Duo"],
  ["indigo", "Indigo Sangster", "Singer-Songwriter · Guitarist"],
  ["ruby", "Ruby Cheyne", "Classical Guitarist"],
  ["lessons", "Guitar Lessons", "Learn With Us"],
  ["performances", "Weddings & Events", "Live Performance"],
  ["gallery", "Gallery", "Moments"],
  ["contact", "Get In Touch", "Enquiries"],
];

for (const [name, label, sub] of heroes) {
  await sharp(svg({ w: 2000, h: 1200, label, sub, angle: 120 }))
    .jpeg({ quality: 82 })
    .toFile(join(heroDir, `${name}.jpg`));
}

const galleryAngles = [110, 135, 160, 100, 145, 125, 170, 115];
for (let i = 0; i < 8; i++) {
  const n = String(i + 1).padStart(2, "0");
  await sharp(svg({ w: 1400, h: 1050, label: `Photo ${n}`, sub: "Placeholder", angle: galleryAngles[i] }))
    .jpeg({ quality: 82 })
    .toFile(join(galleryDir, `${n}.jpg`));
}

console.log("Generated", heroes.length, "hero images and 8 gallery placeholders.");
