import Link from "next/link";

export default function AshinthyaLayout({ children }: LayoutProps<"/ashinthya">) {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="border-b border-hairline">
        <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/"
            className="flex min-h-11 items-center font-serif text-[1.625rem] font-semibold tracking-[-0.01em] text-ink"
          >
            Palxi
          </Link>
          <nav aria-label="Main">
            <Link
              href="/ashinthya"
              className="flex min-h-11 items-center rounded-sm px-3 text-label font-semibold text-ink transition-colors duration-200 ease-out-quart hover:bg-harbour-tint hover:text-harbour-deep"
            >
              Blog
            </Link>
          </nav>
        </div>
      </header>

      <div className="flex-1">{children}</div>

      <footer className="mt-24 border-t border-hairline">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-2 px-5 py-10 text-label text-muted sm:flex-row sm:justify-between sm:px-8">
          <p>Palxi, an Australian fintech company.</p>
          <p>
            Worried about a scam? Report it at{" "}
            <a
              href="https://www.scamwatch.gov.au/"
              className="font-semibold text-harbour underline underline-offset-2 hover:text-harbour-deep"
            >
              scamwatch.gov.au
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
