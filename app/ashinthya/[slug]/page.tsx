import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Diagram } from "../../dineth/_components/Diagram";
import { ArrowLeftIcon, ArrowRightIcon } from "../../dineth/_components/icons";
import { articles, formatDate, getAdjacentArticles, getArticle } from "../_data/articles";
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
  const { prev, next } = getAdjacentArticles(article.slug);

  return (
    <main className="overflow-x-hidden">
      <article>
        <header className="mx-auto grid w-full max-w-[1100px] gap-8 px-4 pt-6 sm:px-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:items-center lg:gap-16 lg:pt-14">
          <div className="animate-rise">
            <Link
              href="/ashinthya"
              className="-ml-2 inline-flex min-h-10 items-center gap-2 rounded-full px-3 py-1 text-xs sm:text-label font-semibold text-magenta transition-all duration-200 ease-out-quart hover:bg-magenta-tint hover:text-magenta-deep active:scale-95 group"
            >
              <ArrowLeftIcon size={18} className="transition-transform duration-200 ease-out-quart group-hover:-translate-x-0.5" />
              All guides
            </Link>
            <p className="mt-5 sm:mt-8">
              <span className="inline-block rounded-full bg-magenta-tint px-3 py-1 text-xs sm:text-label font-semibold text-magenta-deep">
                {article.kicker}
              </span>
            </p>
            <h1 className="mt-4 sm:mt-5 font-heading text-[1.85rem] sm:text-[2.5rem] lg:text-display font-semibold text-ink leading-tight sm:leading-none break-words">
              {article.title}
            </h1>
            <p className="mt-4 sm:mt-6 max-w-[36rem] text-base sm:text-standfirst text-copy leading-relaxed">
              {article.description}
            </p>
            <p className="mt-4 sm:mt-6 text-xs sm:text-label text-muted">
              By {article.author} · {formatDate(article.publishedOn)} ·{" "}
              {article.readingMinutes} minute read
            </p>
          </div>

          <div className="animate-rise [animation-delay:120ms] relative overflow-hidden rounded-xl bg-shallows shadow-device ring-1 ring-hairline">
            <Image
              src={article.coverImage}
              alt={article.coverImageAlt}
              width={1200}
              height={630}
              sizes="(min-width: 1024px) 440px, 100vw"
              priority
              className="aspect-[16/10] sm:aspect-[1200/630] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </header>

        <div className="mt-10 px-4 sm:px-8 sm:mt-16 lg:mt-24">
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

        <section className="mx-auto mt-16 max-w-[1100px] border-t border-hairline px-4 pt-10 pb-16 sm:px-8 sm:mt-24 sm:pt-14">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs sm:text-label font-semibold uppercase tracking-wider text-magenta">More Guides</p>
              <h2 className="mt-1 font-heading text-lg sm:text-2xl font-semibold text-ink">Continue reading</h2>
            </div>
            <Link
              href="/ashinthya"
              className="btn-secondary w-fit text-xs sm:text-label min-h-10 sm:min-h-11 px-4 sm:px-5 rounded-full transition-all duration-200 hover:bg-magenta-tint hover:border-magenta/40 hover:text-magenta-deep active:scale-95"
            >
              View all 25 guides
            </Link>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/ashinthya/${prev.slug}`}
                className="group flex flex-col justify-between rounded-xl bg-shallows/80 p-4 sm:p-6 ring-1 ring-hairline/60 transition-all duration-200 hover:bg-surface hover:shadow-card-hover hover:ring-magenta/30 active:scale-[0.99]"
              >
                <div>
                  <span className="text-xs font-semibold text-muted flex items-center gap-1.5">
                    <ArrowLeftIcon size={14} className="transition-transform duration-200 group-hover:-translate-x-1" />
                    Previous Guide
                  </span>
                  <h3 className="mt-2.5 font-heading text-base sm:text-lg font-semibold text-ink transition-colors duration-200 group-hover:text-magenta-deep leading-snug">
                    {prev.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-copy line-clamp-2">
                    {prev.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted">
                  <span className="font-medium text-magenta-deep">{prev.kicker}</span>
                  <span>·</span>
                  <span>{prev.readingMinutes} min read</span>
                </div>
              </Link>
            ) : <div className="hidden sm:block" />}

            {next && (
              <Link
                href={`/ashinthya/${next.slug}`}
                className="group flex flex-col justify-between rounded-xl bg-shallows/80 p-4 sm:p-6 ring-1 ring-hairline/60 transition-all duration-200 hover:bg-surface hover:shadow-card-hover hover:ring-magenta/30 active:scale-[0.99]"
              >
                <div>
                  <span className="text-xs font-semibold text-muted flex items-center justify-end gap-1.5 text-right">
                    Next Guide
                    <ArrowRightIcon size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                  <h3 className="mt-2.5 font-heading text-base sm:text-lg font-semibold text-ink transition-colors duration-200 group-hover:text-magenta-deep leading-snug">
                    {next.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-copy line-clamp-2">
                    {next.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-end gap-2 text-xs text-muted">
                  <span className="font-medium text-magenta-deep">{next.kicker}</span>
                  <span>·</span>
                  <span>{next.readingMinutes} min read</span>
                </div>
              </Link>
            )}
          </div>
        </section>
      </article>
    </main>
  );
}
