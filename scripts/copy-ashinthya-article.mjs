// Copies ONE article from ../articles into the site, leaving the others alone.
// (sync-ashinthya-articles.mjs rebuilds the whole folder, which rewrites every
// file's line endings.)
// Run: node scripts/copy-ashinthya-article.mjs 18-iso-27001-certification-australia-cost
import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const folder = process.argv[2];
if (!folder) throw new Error("Usage: node scripts/copy-ashinthya-article.mjs <NN-slug>");

const dir = path.resolve(root, "..", "articles", folder);
const slug = folder.replace(/^\d+-/, "");
const markdown = path.join(dir, `${slug}.md`);
if (!existsSync(markdown)) throw new Error(`No article at ${markdown}`);

const imagesDir = path.join(root, "public", "images", "blog", "ashinthya", slug);
copyFileSync(markdown, path.join(root, "content", "ashinthya", `${slug}.md`));
rmSync(imagesDir, { recursive: true, force: true });
mkdirSync(imagesDir, { recursive: true });
for (const file of readdirSync(dir)) {
  if (file.endsWith(".jpg")) copyFileSync(path.join(dir, file), path.join(imagesDir, file));
}
console.log(`copied ${slug}`);
