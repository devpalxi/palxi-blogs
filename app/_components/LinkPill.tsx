import Link from "next/link";
import type { ProfileLink } from "../_data/links";

export function LinkPill({ label, description, href, external }: ProfileLink) {
  const anchorProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      {...anchorProps}
      className="group flex min-h-16 items-center justify-between gap-4 rounded-md border border-hairline-strong bg-surface px-6 py-4 text-left transition-[background-color,border-color,transform] duration-200 ease-out-quart hover:border-harbour hover:bg-harbour-tint active:scale-[0.98]"
    >
      <span>
        <span className="block text-[1.25rem] font-semibold text-ink">
          {label}
        </span>
        {description && (
          <span className="mt-0.5 block text-label text-muted">
            {description}
          </span>
        )}
      </span>
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="shrink-0 text-harbour transition-transform duration-200 ease-out-quart group-hover:translate-x-1"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </Link>
  );
}
