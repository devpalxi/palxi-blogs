import Link from "next/link";

export default function DinethPage() {
  return (
    <main className="relative z-10 flex min-h-[100dvh] w-full flex-col items-center justify-center gap-6 px-4 py-24 text-center">
      <span className="rounded-full bg-ink/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted ring-1 ring-hairline">
        Coming soon
      </span>
      <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Dineth
      </h1>
      <p className="max-w-sm text-sm leading-relaxed text-muted">
        This page is still being built.
      </p>
      <Link
        href="/"
        className="mt-4 text-sm font-medium text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
      >
        Back home
      </Link>
    </main>
  );
}
