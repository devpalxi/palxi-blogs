import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { Marked } from "marked";

export type Article = {
  slug: string;
  title: string;
  description: string;
  kicker: string;
  author: string;
  publishedOn: string;
  updatedOn: string;
  coverImage: string;
  coverImageAlt: string;
  tags: string[];
  readingMinutes: number;
  body: string;
};

const contentDir = path.join(process.cwd(), "content", "ashinthya");
const imageBase = "/images/blog/ashinthya";
const siteOrigin = "https://palxi.com.au";

function parseFrontmatter(raw: string) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(raw);
  if (!match) throw new Error("Article is missing frontmatter");
  const data: Record<string, string | string[]> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const sep = line.indexOf(":");
    if (sep === -1) continue;
    const value = line.slice(sep + 1).trim();
    data[line.slice(0, sep).trim()] = value.startsWith('"') || value.startsWith("[")
      ? JSON.parse(value)
      : value;
  }
  return { data, body: match[2] };
}

function loadAll(): Article[] {
  const files = readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  const slugs = new Set(files.map((f) => f.replace(/\.md$/, "")));

  const articles = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const { data, body } = parseFrontmatter(
      readFileSync(path.join(contentDir, file), "utf8"),
    );

    const marked = new Marked({
      walkTokens(token) {
        if (token.type === "image" && !/^(https?:)?\/\//.test(token.href)) {
          token.href = `${imageBase}/${slug}/${token.href}`;
        }
        if (token.type === "link") {
          const blog = /^\/blog\/([^/#?]+)/.exec(token.href);
          if (blog && slugs.has(blog[1])) {
            token.href = `/ashinthya/${blog[1]}`;
          } else if (token.href.startsWith("/")) {
            token.href = siteOrigin + token.href;
          }
        }
      },
    });

    const withoutTitle = body.replace(/^\s*# .*\r?\n/, "");
    const html = (marked.parse(withoutTitle, { async: false }) as string)
      .replace(
        /<p><img src="([^"]*)" alt="([^"]*)"[^>]*><\/p>\s*<p><em>([\s\S]*?)<\/em><\/p>/g,
        '<figure><img src="$1" alt="$2" width="1200" height="800" loading="lazy" decoding="async"><figcaption>$3</figcaption></figure>',
      )
      .replace(/<table>/g, '<div class="table-wrap"><table>')
      .replace(/<\/table>/g, "</table></div>");

    const words = withoutTitle.split(/\s+/).filter(Boolean).length;

    return {
      slug,
      title: data.title as string,
      description: data.description as string,
      kicker: data.kicker as string,
      author: data.author as string,
      publishedOn: data.date as string,
      updatedOn: (data.lastUpdated ?? data.date) as string,
      coverImage: `${imageBase}/${slug}/${data.coverImage as string}`,
      coverImageAlt: data.coverImageAlt as string,
      tags: (data.tags as string[]) ?? [],
      readingMinutes: Math.max(1, Math.round(words / 220)),
      body: html,
    };
  });

  return articles.sort(
    (a, b) =>
      b.publishedOn.localeCompare(a.publishedOn) ||
      a.title.localeCompare(b.title),
  );
}

export const articles = loadAll();

export function getArticle(slug: string) {
  const article = articles.find((a) => a.slug === slug);
  if (!article) throw new Error(`Unknown article: ${slug}`);
  return article;
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Darwin",
  }).format(new Date(`${iso}T12:00:00+09:30`));
}
