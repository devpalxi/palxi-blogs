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
    <header className="sticky top-0 z-50 border-b border-hairline bg-surface/95 backdrop-blur-sm transition-shadow">
      <div className="mx-auto flex w-full max-w-[1100px] flex-wrap items-center justify-between gap-x-4 sm:gap-x-6 gap-y-2 px-4 py-2.5 sm:px-8 sm:py-3">
        <Link
          href="/"
          aria-label="Palxi home"
          className="flex min-h-10 sm:min-h-11 items-center transition-opacity hover:opacity-85"
        >
          <PalxiLogo />
        </Link>

        <nav
          aria-label="Main"
          className="order-3 flex w-full items-center justify-center gap-1 sm:gap-2 md:order-none md:w-auto md:gap-4 overflow-x-auto"
        >
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex min-h-9 sm:min-h-11 items-center rounded-full px-2.5 sm:px-3 text-xs sm:text-label font-medium text-ink transition-colors duration-150 ease-out-quart hover:text-magenta whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#" className="btn-dark min-h-9 sm:min-h-12 px-3.5 sm:px-6 py-2 text-xs sm:text-label font-semibold rounded-full">
          Get in touch
        </a>
      </div>
    </header>
  );
}
