import { links } from "./_data/links";
import { LinkPill } from "./_components/LinkPill";

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-[100dvh] w-full items-center justify-center px-4 py-24">
      <div className="flex w-full max-w-sm flex-col items-center gap-10 text-center">
        <span
          className="animate-fade-up rounded-full bg-ink/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted ring-1 ring-hairline"
          style={{ animationDelay: "0ms" }}
        >
          Palxi &middot; Links
        </span>

        <div
          className="animate-fade-up flex flex-col gap-2"
          style={{ animationDelay: "90ms" }}
        >
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Find me here
          </h1>
          <p className="text-sm leading-relaxed text-muted">
            One place for everything I&apos;m building and sharing.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3">
          {links.map((link, i) => (
            <div
              key={link.href}
              className="animate-fade-up"
              style={{ animationDelay: `${180 + i * 80}ms` }}
            >
              <LinkPill {...link} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
