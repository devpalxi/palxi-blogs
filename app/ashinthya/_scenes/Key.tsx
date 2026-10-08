import type { ReactNode } from "react";

export type KeyItem = {
  label: string;
  /** Tailwind classes for a small colour dot that matches the drawing. */
  dot?: string;
  /** Or a small icon instead of a dot. */
  icon?: ReactNode;
};

/**
 * A one-line key under a scene: what each colour or symbol means, and no
 * more. The caption and the article carry the explanation.
 */
export function KeyLine({ items }: { items: KeyItem[] }) {
  return (
    <ul className="mt-4 sm:mt-5 flex flex-wrap justify-center gap-x-4 sm:gap-x-7 gap-y-2 sm:gap-y-3 text-xs sm:text-label">
      {items.map((it) => (
        <li key={it.label} className="flex items-center gap-1.5 sm:gap-2 font-medium sm:font-semibold text-ink">
          {it.icon ?? (it.dot && <span className={`size-3 sm:size-3.5 shrink-0 rounded-full ${it.dot}`} />)}
          <span>{it.label}</span>
        </li>
      ))}
    </ul>
  );
}

/** Short titles (and an optional chip) under drawings laid out in columns. */
export function ColumnLabels({
  items,
}: {
  items: { title: string; chip?: [string, string]; mini?: ReactNode }[];
}) {
  const cols =
    items.length === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : items.length === 4
        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-3";

  return (
    <ul className={`mt-4 sm:mt-6 grid gap-2.5 sm:gap-4 md:gap-6 ${cols}`}>
      {items.map((it) => (
        <li
          key={it.title}
          className="flex items-center gap-2.5 sm:flex-col sm:gap-2 sm:text-center p-2 sm:p-0 rounded-lg sm:rounded-none bg-surface/70 sm:bg-transparent ring-1 ring-hairline/70 sm:ring-0 transition-colors"
        >
          {it.mini && <span className="sm:hidden shrink-0">{it.mini}</span>}
          <span className="text-xs sm:text-sm md:text-base font-semibold text-ink leading-snug">
            {it.title}
          </span>
          {it.chip && (
            <span
              className={`inline-block ml-auto sm:ml-0 rounded-full px-2.5 py-0.5 text-[0.7rem] sm:text-xs md:text-label font-semibold ${it.chip[1]}`}
            >
              {it.chip[0]}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
