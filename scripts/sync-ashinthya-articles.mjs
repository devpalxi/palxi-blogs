// Copies finished articles from ../articles into the site.
// Markdown -> content/ashinthya/<slug>.md, photos -> public/images/blog/ashinthya/<slug>/.
// Run: node scripts/sync-ashinthya-articles.mjs
import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.resolve(root, "..", "articles");
const contentDir = path.join(root, "content", "ashinthya");
const imagesDir = path.join(root, "public", "images", "blog", "ashinthya");

rmSync(contentDir, { recursive: true, force: true });
rmSync(imagesDir, { recursive: true, force: true });
mkdirSync(contentDir, { recursive: true });

let count = 0;
for (const folder of readdirSync(source, { withFileTypes: true })) {
  if (!folder.isDirectory()) continue;
  const slug = folder.name.replace(/^\d+-/, "");
  const dir = path.join(source, folder.name);
  const markdown = path.join(dir, `${slug}.md`);
  if (!existsSync(markdown)) continue;

  copyFileSync(markdown, path.join(contentDir, `${slug}.md`));
  mkdirSync(path.join(imagesDir, slug), { recursive: true });
  for (const file of readdirSync(dir)) {
    if (file.endsWith(".jpg")) {
      copyFileSync(path.join(dir, file), path.join(imagesDir, slug, file));
    }
  }
  count++;
  console.log(`synced ${slug}`);
}
console.log(`${count} articles`);
