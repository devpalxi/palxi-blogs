import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "./_components/icons";
import { formatDate, posts } from "./_data/posts";

export const metadata: Metadata = {
  title: "Dineth's blog",
  description:
    "How Palxi designs and builds fintech you can trust, explained in plain English.",
};

export default function BlogIndex() {
  return (
    <main className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">
      <section className="max-w-[40rem] pt-[clamp(56px,8vw,104px)] pb-12">
        <h1 className="animate-rise font-serif text-display font-semibold text-ink">
          How we build money tools you can trust
        </h1>
        <p
          className="animate-rise mt-6 text-standfirst text-copy"
          style={{ animationDelay: "90ms" }}
        >
          Plain-English stories from the Palxi team about the thinking behind
          harbr, Cruz and our work with the Northern Territory Government. No
          jargon, and pictures wherever words aren&apos;t enough.
        </p>
      </section>

      <ul className="border-t border-hairline">
        {posts.map((post, i) => (
          <li
            key={post.slug}
            className="animate-rise border-b border-hairline"
            style={{ animationDelay: `${180 + i * 80}ms` }}
          >
            <Link
              href={`/dineth/${post.slug}`}
              className="group grid gap-4 py-10 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-10"
            >
              <div className="max-w-[44rem]">
                <span className="inline-block rounded-full bg-harbour-tint px-3 py-1 text-label font-semibold text-harbour-deep">
                  {post.tag}
                </span>
                <h2 className="mt-4 font-serif text-headline font-semibold text-ink transition-colors duration-200 ease-out-quart group-hover:text-harbour-deep">
                  {post.title}
                </h2>
                <p className="mt-3 text-body text-copy">{post.summary}</p>
                <p className="mt-4 text-label text-muted">
                  {formatDate(post.publishedOn)} · {post.readingMinutes} minute
                  read
                </p>
              </div>
              <span className="inline-flex min-h-12 items-center gap-2 self-start rounded-sm bg-harbour px-5 text-label font-semibold text-surface transition-[background-color,transform] duration-200 ease-out-quart group-hover:bg-harbour-deep group-active:scale-[0.98] sm:self-end">
                Read the story
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
