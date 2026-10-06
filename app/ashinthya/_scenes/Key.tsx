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
    <ul className="mt-5 flex flex-wrap justify-center gap-x-7 gap-y-3">
      {items.map((it) => (
        <li key={it.label} className="flex items-center gap-2 text-label font-semibold text-ink">
          {it.icon ?? (it.dot && <span className={`size-3.5 shrink-0 rounded-full ${it.dot}`} />)}
          {it.label}
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
  const cols = items.length === 2 ? "md:grid-cols-2" : items.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3";
  return (
    <ul className={`mt-5 grid gap-4 md:gap-8 ${cols}`}>
      {items.map((it) => (
        <li key={it.title} className="flex items-center gap-3 md:flex-col md:gap-2 md:text-center">
          {it.mini && <span className="md:hidden">{it.mini}</span>}
          <span className="font-semibold text-ink">{it.title}</span>
          {it.chip && (
            <span className={`inline-block rounded-full px-3 py-0.5 text-label font-semibold ${it.chip[1]}`}>
              {it.chip[0]}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
