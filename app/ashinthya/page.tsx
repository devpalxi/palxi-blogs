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
    <main className="mx-auto w-full max-w-[1100px] px-4 sm:px-8">
      <section className="max-w-[44rem] pt-[clamp(44px,7vw,104px)] pb-8 sm:pb-12">
        <div className="animate-rise inline-flex items-center gap-2 rounded-full bg-magenta-tint px-3 py-1 text-xs sm:text-label font-semibold text-magenta-deep mb-4 sm:mb-6">
          <span className="size-2 rounded-full bg-magenta animate-pulse" />
          <span>{articles.length} In-Depth Industry Guides</span>
        </div>
        <h1 className="animate-rise font-heading text-[2.25rem] sm:text-[3rem] lg:text-display font-semibold text-ink leading-[1.1] sm:leading-[1.08] tracking-tight">
          Guides for Australian financial services teams
        </h1>
        <p
          className="animate-rise mt-4 sm:mt-6 text-base sm:text-standfirst text-copy leading-relaxed"
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
            className="animate-rise border-b border-hairline transition-colors duration-200"
            style={{ animationDelay: `${Math.min(i, 8) * 45 + 120}ms` }}
          >
            <Link
              href={`/ashinthya/${article.slug}`}
              className="group grid gap-4 py-6 sm:py-8 md:py-10 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-8 lg:gap-10 rounded-xl sm:-mx-4 sm:px-4 transition-all duration-200 hover:bg-shallows/60 focus-visible:outline-2 focus-visible:outline-magenta"
            >
              <div className="max-w-[44rem]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-block rounded-full bg-magenta-tint px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-label font-semibold text-magenta-deep">
                    {article.kicker}
                  </span>
                  <span className="text-xs sm:text-label text-muted">
                    {article.readingMinutes} min read
                  </span>
                </div>
                <h2 className="mt-3 font-heading text-lg sm:text-xl lg:text-headline font-semibold text-ink leading-snug transition-colors duration-200 ease-out-quart group-hover:text-magenta-deep">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm sm:text-body text-copy leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {article.description}
                </p>
                <p className="mt-3 text-xs sm:text-label text-muted">
                  {formatDate(article.publishedOn)}
                </p>
              </div>
              <span className="btn-primary w-fit min-h-10 sm:min-h-12 py-2 sm:py-2.5 px-4 sm:px-6 rounded-full text-xs sm:text-label font-semibold shadow-sm transition-all duration-200 ease-out-quart group-hover:bg-magenta-deep group-hover:shadow-md group-hover:translate-x-0.5 group-active:scale-95 sm:self-end">
                <span>Read guide</span>
                <span className="btn-chip size-7 sm:size-8">
                  <ArrowRightIcon
                    size={16}
                    className="transition-transform duration-200 ease-out-quart group-hover:translate-x-0.5"
                  />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
