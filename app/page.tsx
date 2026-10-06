import { links } from "./_data/links";
import { LinkPill } from "./_components/LinkPill";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] w-full items-center justify-center px-5 py-24">
      <div className="flex w-full max-w-md flex-col gap-10">
        <div className="animate-rise">
          <p className="font-heading text-[1.625rem] font-semibold text-ink">
            Palxi
          </p>
          <h1 className="mt-6 font-heading text-headline font-semibold text-ink">
            Find me here
          </h1>
          <p className="mt-3 text-body text-copy">
            One place for everything I&apos;m building and sharing.
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          {links.map((link, i) => (
            <li
              key={link.href}
              className="animate-rise"
              style={{ animationDelay: `${120 + i * 80}ms` }}
            >
              <LinkPill {...link} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
