import Link from "next/link";
import { PalxiLogo } from "./PalxiLogo";

// Link targets are placeholders until the main site's pages are live.
const nav = [
  { label: "What we do", href: "#" },
  { label: "How we work", href: "#" },
  { label: "Team", href: "#" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-hairline bg-surface">
      <div className="mx-auto flex w-full max-w-[1100px] flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-3 sm:px-8">
        <Link
          href="/"
          aria-label="Palxi home"
          className="flex min-h-11 items-center"
        >
          <PalxiLogo />
        </Link>

        <nav
          aria-label="Main"
          className="order-3 flex w-full items-center justify-center gap-2 md:order-none md:w-auto md:gap-4"
        >
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex min-h-11 items-center rounded-full px-3 text-label font-medium text-ink transition-colors duration-150 ease-out-quart hover:text-magenta"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#" className="btn-dark">
          Get in touch
        </a>
      </div>
    </header>
  );
}
