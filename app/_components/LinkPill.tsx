import Link from "next/link";
import type { ProfileLink } from "../_data/links";

export function LinkPill({ label, href, external }: ProfileLink) {
  const anchorProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      {...anchorProps}
      className="group relative block rounded-[1.75rem] bg-hairline/60 p-1.5 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
    >
      <span
        className="
          flex items-center justify-between gap-4 rounded-[calc(1.75rem-0.375rem)]
          bg-surface px-6 py-4
          shadow-[0_1px_2px_rgba(22,21,19,0.04),0_12px_28px_-16px_rgba(22,21,19,0.18)]
          ring-1 ring-hairline
          transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]
          group-hover:shadow-[0_1px_2px_rgba(22,21,19,0.05),0_20px_40px_-16px_rgba(22,21,19,0.24)]
          group-hover:-translate-y-0.5
        "
      >
        <span className="text-lg font-medium tracking-tight text-ink">
          {label}
        </span>
        <span
          className="
            flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink/5
            text-ink transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]
            group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:bg-ink/10
          "
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            className="stroke-current"
          >
            <path
              d="M3 10L10 3M10 3H4.5M10 3V8.5"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </Link>
  );
}
