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
    <main>
      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">
        <section className="pt-[clamp(56px,8vw,104px)] pb-12">
          <h1 className="animate-rise max-w-[44rem] text-display font-semibold text-ink">
            How we build money tools you can trust
          </h1>
          <p
            className="animate-rise mt-6 max-w-[40rem] text-standfirst text-copy"
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
                className="group grid gap-5 py-10 lg:grid-cols-[13rem_minmax(0,1fr)_auto] lg:items-center lg:gap-10"
              >
                <div>
                  <span className="inline-block rounded-full bg-magenta-tint px-3.5 py-1 text-label font-semibold text-magenta-deep">
                    {post.tag}
                  </span>
                  <p className="mt-3 text-label text-muted">
                    {formatDate(post.publishedOn)}
                    <br />
                    {post.readingMinutes} minute read
                  </p>
                </div>
                <div className="max-w-[44rem]">
                  <h2 className="text-headline font-semibold text-ink transition-colors duration-150 ease-out-quart group-hover:text-magenta">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-body text-copy">{post.summary}</p>
                </div>
                <span
                  aria-hidden="true"
                  className="btn-chip hidden size-12 bg-magenta transition-colors duration-150 ease-out-quart group-hover:bg-magenta-deep lg:inline-flex"
                >
                  <ArrowRightIcon size={22} />
                </span>
                <span className="btn-primary self-start lg:hidden">
                  Read the story
                  <span className="btn-chip">
                    <ArrowRightIcon size={20} />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
