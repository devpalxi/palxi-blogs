import type { ReactNode } from "react";
import { CheckIcon } from "../../dineth/_components/icons";
import { Pin, step } from "../../dineth/_components/diagram-kit";

export type Tone = "default" | "done" | "caution" | "stop";

const chipTone: Record<Tone, string> = {
  default: "bg-harbour-tint text-harbour-deep",
  done: "bg-settled-tint text-settled",
  caution: "bg-wattle-tint text-wattle",
  stop: "bg-stop-tint text-stop",
};

// Full-width panel that appears after the steps of a diagram.
export function Callout({
  at,
  children,
}: {
  at: number;
  children: ReactNode;
}) {
  return (
    <p
      data-anim="rise"
      style={step(at)}
      className="mt-8 rounded-md border-2 border-dashed border-harbour/40 bg-surface px-5 py-4 text-copy"
    >
      {children}
    </p>
  );
}

// Boxes stacked top to bottom, each dropping in after the one above it.
export function Layers({
  layers,
  footer,
}: {
  layers: { title: string; detail: string }[];
  footer?: string;
}) {
  return (
    <div>
      <ol className="mx-auto flex max-w-[40rem] flex-col">
        {layers.map((layer, i) => (
          <li key={layer.title} className="flex flex-col items-center">
            <div
              data-anim="rise"
              style={step(i * 1.1)}
              className={`w-full rounded-md px-5 py-4 ${
                i === 0
                  ? "bg-harbour text-surface"
                  : "bg-surface shadow-device"
              }`}
            >
              <p
                className={`text-[1.125rem] leading-snug font-semibold ${
                  i === 0 ? "text-surface" : "text-ink"
                }`}
              >
                {layer.title}
              </p>
              <p
                className={`mt-1 text-label ${
                  i === 0 ? "text-surface" : "text-copy"
                }`}
              >
                {layer.detail}
              </p>
            </div>
            {i < layers.length - 1 && (
              <span
                aria-hidden="true"
                data-anim="grow-y"
                style={step(i * 1.1 + 0.7)}
                className="block h-6 w-[3px] rounded-full bg-harbour"
              />
            )}
          </li>
        ))}
      </ol>
      {footer && (
        <Callout at={layers.length * 1.1 + 0.3}>{footer}</Callout>
      )}
    </div>
  );
}

// Horizontal bars that grow. Lengths show order only, so pair with a note.
export function BarRows({
  rows,
  note,
}: {
  rows: { label: string; chip: string; pct: number }[];
  note: string;
}) {
  return (
    <div>
      <ul className="space-y-6">
        {rows.map((row, i) => (
          <li key={row.label}>
            <p className="text-copy">{row.label}</p>
            <div className="mt-2 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-4 flex-1 rounded-full bg-hairline-strong/60"
              >
                <span
                  data-anim="grow-x"
                  style={{ ...step(i * 0.8), width: `${row.pct}%` }}
                  className="block h-full rounded-full bg-harbour-chart"
                />
              </span>
              <span
                data-anim="fade"
                style={step(i * 0.8 + 0.6)}
                className="w-[9.5rem] shrink-0 text-right text-[1.125rem] font-semibold text-ink"
              >
                {row.chip}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-label text-muted">{note}</p>
    </div>
  );
}

const money = (n: number) => `$${n.toLocaleString("en-AU")}`;

// Floating bars on a shared dollar scale, one per line item.
export function RangeBars({
  rows,
  max,
  ticks,
  note,
}: {
  rows: { label: string; detail?: string; min: number; max: number }[];
  max: number;
  ticks: number[];
  note: string;
}) {
  return (
    <div>
      <ul className="space-y-6">
        {rows.map((row, i) => (
          <li key={row.label}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="font-semibold text-ink">{row.label}</p>
              <p
                data-anim="fade"
                style={step(i * 0.8 + 0.5)}
                className="text-label font-semibold text-harbour-deep"
              >
                {money(row.min)} to {money(row.max)}
              </p>
            </div>
            {row.detail && (
              <p className="text-label text-muted">{row.detail}</p>
            )}
            <div
              aria-hidden="true"
              className="relative mt-2 h-4 rounded-full bg-hairline-strong/60"
            >
              <span
                data-anim="grow-x"
                style={{
                  ...step(i * 0.8),
                  left: `${(row.min / max) * 100}%`,
                  width: `${((row.max - row.min) / max) * 100}%`,
                }}
                className="absolute inset-y-0 rounded-full bg-harbour-chart"
              />
            </div>
          </li>
        ))}
      </ul>
      <div
        aria-hidden="true"
        className="relative mt-3 h-6 text-label text-muted"
      >
        {ticks.map((t, i) => (
          <span
            key={t}
            className="absolute"
            style={{
              left: `${(t / max) * 100}%`,
              transform:
                i === 0
                  ? "none"
                  : i === ticks.length - 1
                    ? "translateX(-100%)"
                    : "translateX(-50%)",
            }}
          >
            {t === 0 ? "$0" : `$${t / 1000}k`}
          </span>
        ))}
      </div>
      <p className="mt-4 text-label text-muted">{note}</p>
    </div>
  );
}

export type Column = {
  title: string;
  subtitle?: string;
  tone?: Tone;
  items: string[];
};

// Side-by-side cards that rise in one after another.
export function Columns({ columns }: { columns: Column[] }) {
  const cols =
    columns.length === 2
      ? "md:grid-cols-2"
      : columns.length === 3
        ? "md:grid-cols-3"
        : "md:grid-cols-4";
  return (
    <ul className={`grid gap-4 ${cols}`}>
      {columns.map((c, i) => (
        <li
          key={c.title}
          data-anim="rise"
          style={step(i * 1.2)}
          className="rounded-md bg-surface p-5 shadow-device"
        >
          <span
            className={`inline-block rounded-full px-3 py-1 text-label font-semibold ${chipTone[c.tone ?? "default"]}`}
          >
            {c.title}
          </span>
          {c.subtitle && (
            <p className="mt-3 text-label font-semibold text-ink">
              {c.subtitle}
            </p>
          )}
          <ul className="mt-3 space-y-2 text-label text-copy">
            {c.items.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-2 size-2 shrink-0 rounded-full bg-harbour-chart"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

// A result on the left leads to the action on the right.
export function Outcomes({
  rows,
}: {
  rows: { result: string; tone: Tone; action: string }[];
}) {
  return (
    <ul className="space-y-3">
      {rows.map((row, i) => (
        <li
          key={row.result}
          data-anim="rise"
          style={step(i * 0.9)}
          className="grid items-center gap-2 rounded-md bg-surface p-4 shadow-device md:grid-cols-[13rem_minmax(0,1fr)] md:gap-6"
        >
          <span
            className={`inline-block w-fit rounded-full px-3 py-1 text-label font-semibold ${chipTone[row.tone]}`}
          >
            {row.result}
          </span>
          <span className="text-copy">{row.action}</span>
        </li>
      ))}
    </ul>
  );
}

// Numbered cards in two columns, appearing in order.
export function Numbered({
  items,
}: {
  items: { title: string; detail: string }[];
}) {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {items.map((item, i) => (
        <li
          key={item.title}
          data-anim="rise"
          style={step(i * 0.9)}
          className="flex gap-4 rounded-md bg-surface p-5 shadow-device"
        >
          <Pin n={i + 1} static />
          <div>
            <p className="text-[1.125rem] leading-snug font-semibold text-ink">
              {item.title}
            </p>
            <p className="mt-1 text-label text-copy">{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

// Each area pops a tick, then shows what to ask for and what should worry you.
export function Checklist({
  items,
}: {
  items: { title: string; ask: string; worry: string }[];
}) {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {items.map((item, i) => (
        <li
          key={item.title}
          className="flex gap-4 rounded-md bg-surface p-5 shadow-device"
        >
          <span
            aria-hidden="true"
            data-anim="pop"
            style={step(i * 0.7)}
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-harbour text-surface"
          >
            <CheckIcon size={20} />
          </span>
          <div data-anim="rise" style={step(i * 0.7)}>
            <p className="text-[1.125rem] leading-snug font-semibold text-ink">
              {item.title}
            </p>
            <p className="mt-2 text-label text-copy">
              <strong className="text-ink">Ask for:</strong> {item.ask}
            </p>
            <p className="mt-1 text-label text-copy">
              <strong className="text-stop">Worry if:</strong> {item.worry}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

// SOC 2 Type 1 is a single date; Type 2 covers a stretch of time.
export function SnapshotVsPeriod() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-semibold text-ink">
          Type 1: were the controls designed properly?
        </p>
        <div aria-hidden="true" className="relative mt-3 h-8">
          <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-hairline-strong" />
          <span
            data-anim="pop"
            style={step(0.4)}
            className="absolute top-1/2 left-[80%] size-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-harbour"
          />
        </div>
        <p
          data-anim="fade"
          style={step(1)}
          className="text-label text-copy"
        >
          A check on one date. It says nothing about how the controls behaved
          before or after.
        </p>
      </div>
      <div>
        <p className="font-semibold text-ink">
          Type 2: did the controls work in practice?
        </p>
        <div aria-hidden="true" className="relative mt-3 h-8">
          <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-hairline-strong" />
          <span
            data-anim="grow-x"
            style={step(2)}
            className="absolute inset-y-0 left-[20%] w-[60%] rounded-full bg-harbour-chart"
          />
        </div>
        <p
          data-anim="fade"
          style={step(3)}
          className="text-label text-copy"
        >
          Evidence sampled across a period. A first report often covers three
          to six months, and later ones a full year.
        </p>
      </div>
    </div>
  );
}
