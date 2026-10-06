import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "../dineth/_components/icons";
import { articles, formatDate } from "./_data/articles";

export const metadata: Metadata = {
  title: "Ashinthya's articles",
  description:
    "Practical guides for Australian financial services teams on compliance, security, payments and choosing what to build.",
};

export default function AshinthyaIndex() {
  return (
    <main className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">
      <section className="max-w-[40rem] pt-[clamp(56px,8vw,104px)] pb-12">
        <h1 className="animate-rise font-heading text-display font-semibold text-ink">
          Guides for Australian financial services teams
        </h1>
        <p
          className="animate-rise mt-6 text-standfirst text-copy"
          style={{ animationDelay: "90ms" }}
        >
          Practical articles on regulation, security, payments and deciding
          what to build, with the sources behind every fact.
        </p>
      </section>

      <ul className="border-t border-hairline">
        {articles.map((article, i) => (
          <li
            key={article.slug}
            className="animate-rise border-b border-hairline"
            style={{ animationDelay: `${180 + i * 60}ms` }}
          >
            <Link
              href={`/ashinthya/${article.slug}`}
              className="group grid gap-4 py-10 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-10"
            >
              <div className="max-w-[44rem]">
                <span className="inline-block rounded-full bg-magenta-tint px-3 py-1 text-label font-semibold text-magenta-deep">
                  {article.kicker}
                </span>
                <h2 className="mt-4 font-heading text-headline font-semibold text-ink transition-colors duration-200 ease-out-quart group-hover:text-magenta-deep">
                  {article.title}
                </h2>
                <p className="mt-3 text-body text-copy">{article.description}</p>
                <p className="mt-4 text-label text-muted">
                  {formatDate(article.publishedOn)} · {article.readingMinutes}{" "}
                  minute read
                </p>
              </div>
              <span className="inline-flex min-h-12 items-center gap-2 self-start rounded-sm bg-magenta px-5 text-label font-semibold text-surface transition-[background-color,transform] duration-200 ease-out-quart group-hover:bg-magenta-deep group-active:scale-[0.98] sm:self-end">
                Read the article
                <ArrowRightIcon
                  size={20}
                  className="transition-transform duration-200 ease-out-quart group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
