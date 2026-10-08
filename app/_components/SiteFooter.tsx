import type { ReactNode, SVGProps } from "react";
import { PalxiLogo } from "./PalxiLogo";

// Link targets are placeholders until the main site's pages are live.
const columns = [
  {
    title: "Navigation",
    links: ["Home", "What we do", "Partners", "Team"],
  },
  {
    title: "Industries",
    links: ["Financial services", "Wealth", "Digital assets", "Identity"],
  },
];

function Icon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={22}
      height={22}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

const socials: { label: string; icon: ReactNode }[] = [
  {
    label: "Palxi on X",
    icon: (
      <Icon fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </Icon>
    ),
  },
  {
    label: "Palxi on Instagram",
    icon: (
      <Icon
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </Icon>
    ),
  },
  {
    label: "Palxi on LinkedIn",
    icon: (
      <Icon fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </Icon>
    ),
  },
  {
    label: "Palxi on GitHub",
    icon: (
      <Icon fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </Icon>
    ),
  },
];

const linkClass =
  "inline-flex min-h-11 items-center text-label text-muted transition-colors duration-150 ease-out-quart hover:text-magenta";

export function SiteFooter() {
  return (
    <footer className="mt-16 sm:mt-24 bg-shallows border-t border-hairline">
      <div className="mx-auto grid w-full max-w-[1100px] gap-8 sm:gap-12 px-4 pt-12 pb-8 sm:px-8 sm:pt-16 sm:pb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
        <div className="max-w-[22rem]">
          <PalxiLogo height={26} />
          <p className="mt-5 text-label text-muted">
            Senior product and engineering for regulated industries.
          </p>
          <p className="mt-3 text-label text-muted">
            Worried about a scam? Report it at{" "}
            <a
              href="https://www.scamwatch.gov.au/"
              className="font-semibold text-magenta underline underline-offset-2 hover:text-magenta-deep"
            >
              scamwatch.gov.au
            </a>
          </p>
          <ul className="mt-5 flex gap-1">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href="#"
                  aria-label={s.label}
                  className="flex size-11 items-center justify-center rounded-full text-ink transition-colors duration-150 ease-out-quart hover:text-magenta"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-label font-semibold text-ink">{col.title}</h2>
            <ul className="mt-3">
              {col.links.map((label) => (
                <li key={label}>
                  <a href="#" className={linkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="text-label font-semibold text-ink">Contact</h2>
          <ul className="mt-3">
            <li>
              <a href="tel:+61284176392" className={linkClass}>
                +61 2 8417 6392
              </a>
            </li>
            <li>
              <a href="mailto:hello@palxi.com.au" className={linkClass}>
                hello@palxi.com.au
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">
        <div className="flex flex-col gap-1 border-t border-hairline-strong py-6 text-label text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Palxi. All rights reserved.</p>
          <p className="flex gap-6">
            <a href="#" className="inline-flex min-h-11 items-center underline underline-offset-2 hover:text-magenta">
              Privacy Policy
            </a>
            <a href="#" className="inline-flex min-h-11 items-center underline underline-offset-2 hover:text-magenta">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
