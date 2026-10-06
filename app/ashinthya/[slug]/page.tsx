import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Diagram } from "../../dineth/_components/Diagram";
import { ArrowLeftIcon } from "../../dineth/_components/icons";
import { articles, formatDate, getArticle } from "../_data/articles";
import { diagrams, type Placement } from "../_diagrams";

const headingText = (html: string) =>
  html
    .replace(/<[^>]+>/g, "")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&");

// Cuts the article HTML above each placement's heading and puts the diagram in the gap.
function splitBody(html: string, placements: Placement[]) {
  const headings = [...html.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/g)];
  const parts: (string | Placement)[] = [];
  let cursor = 0;
  for (const placement of placements) {
    const match = headings.find(
      (h) => h.index >= cursor && headingText(h[1]) === placement.before,
    );
    if (!match) throw new Error(`No heading "${placement.before}" for diagram`);
    parts.push(html.slice(cursor, match.index), placement);
    cursor = match.index;
  }
  parts.push(html.slice(cursor));
  return parts;
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/ashinthya/[slug]">): Promise<Metadata> {
  const article = getArticle((await params).slug);
  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
    authors: [{ name: article.author }],
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      publishedTime: article.publishedOn,
      modifiedTime: article.updatedOn,
    },
  };
}

export default async function ArticlePage({
  params,
}: PageProps<"/ashinthya/[slug]">) {
  const article = getArticle((await params).slug);

  return (
    <main>
      <article>
        <header className="mx-auto grid w-full max-w-[1100px] gap-10 px-5 pt-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:items-center lg:gap-16 lg:pt-14">
          <div className="animate-rise">
            <Link
              href="/ashinthya"
              className="-ml-2 inline-flex min-h-11 items-center gap-2 rounded-sm px-2 text-label font-semibold text-magenta transition-colors duration-200 ease-out-quart hover:bg-magenta-tint hover:text-magenta-deep"
            >
              <ArrowLeftIcon size={20} />
              All articles
            </Link>
            <p className="mt-8">
              <span className="inline-block rounded-full bg-magenta-tint px-3 py-1 text-label font-semibold text-magenta-deep">
                {article.kicker}
              </span>
            </p>
            <h1 className="mt-5 font-heading text-display font-semibold text-ink">
              {article.title}
            </h1>
            <p className="mt-6 max-w-[36rem] text-standfirst text-copy">
              {article.description}
            </p>
            <p className="mt-6 text-label text-muted">
              By {article.author} · {formatDate(article.publishedOn)} ·{" "}
              {article.readingMinutes} minute read
            </p>
          </div>

          <Image
            src={article.coverImage}
            alt={article.coverImageAlt}
            width={1200}
            height={630}
            sizes="(min-width: 1024px) 440px, 100vw"
            priority
            className="animate-rise aspect-[1200/630] w-full rounded-md bg-shallows object-cover [animation-delay:120ms]"
          />
        </header>

        <div className="mt-16 px-5 sm:px-8 lg:mt-24">
          {splitBody(article.body, diagrams[article.slug] ?? []).map((part, i) =>
            typeof part === "string" ? (
              <div
                key={i}
                className="prose-post prose-article mx-auto"
                dangerouslySetInnerHTML={{ __html: part }}
              />
            ) : (
              <Diagram key={i} caption={part.caption}>
                {part.node}
              </Diagram>
            ),
          )}
        </div>
      </article>
    </main>
  );
}
