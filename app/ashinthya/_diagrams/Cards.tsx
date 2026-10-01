import type { CSSProperties, ReactNode } from "react";
import { ArrowRightIcon, CheckIcon } from "../../dineth/_components/icons";
import { CountUp } from "../../dineth/_components/CountUp";
import { at } from "../../dineth/_components/diagram-kit";
import { chipTone, linear, type DiagramIcon, type Tone } from "./shared";

export type Column = {
  title: string;
  subtitle?: string;
  tone?: Tone;
  icon?: DiagramIcon;
  items: string[];
  /** A big number that counts up in the card, e.g. a cap or a limit. */
  stat?: {
    to: number;
    prefix?: string;
    suffix?: string;
    caption: string;
    group?: boolean;
  };
};

const COL_LEAD = 700; // ms from a card appearing to its first item
const ITEM_GAP = 430;

// When each card starts, one after another.
function columnStarts(columns: Column[]) {
  const starts: number[] = [];
  let t = 300;
  for (const c of columns) {
    starts.push(t);
    t += COL_LEAD + c.items.length * ITEM_GAP + 250;
  }
  return starts;
}

/**
 * Cards that appear one after another. Within a card a highlight reads down
 * the list, ticking each line as it goes. `link` joins the cards with arrows,
 * `stairs` steps them upwards, and `sort` drops the items in as chips.
 */
export function Columns({
  columns,
  link = false,
  stairs = false,
  sort = false,
}: {
  columns: Column[];
  link?: boolean;
  stairs?: boolean;
  sort?: boolean;
}) {
  const starts = columnStarts(columns);
  const cols =
    columns.length === 2
      ? "md:grid-cols-2"
      : columns.length === 3
        ? "md:grid-cols-3"
        : "md:grid-cols-4";
  return (
    <ul className={`grid gap-4 ${cols} ${stairs ? "md:items-end" : ""}`}>
      {columns.map((c, i) => {
        const t = starts[i];
        const Icon = c.icon;
        return (
          <li
            key={c.title}
            data-anim="rise"
            style={{ ...at(t, 700), "--i": i } as CSSProperties}
            className={`relative rounded-md bg-surface p-5 shadow-device ${
              stairs ? "md:mb-[calc(var(--i)*2.25rem)]" : ""
            }`}
          >
            {link && i < columns.length - 1 && (
              <span
                aria-hidden="true"
                data-anim="pop"
                style={at(starts[i + 1] - 250)}
                className="absolute top-9 -right-6 z-10 hidden size-8 items-center justify-center rounded-full bg-harbour text-surface md:flex"
              >
                <ArrowRightIcon size={18} />
              </span>
            )}
            <span
              data-anim="pop"
              style={at(t + 200)}
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-label font-semibold ${chipTone[c.tone ?? "default"]}`}
            >
              {Icon && <Icon size={18} />}
              {c.title}
            </span>
            {c.subtitle && (
              <p
                data-anim="fade"
                style={at(t + 350)}
                className="mt-3 text-label font-semibold text-ink"
              >
                {c.subtitle}
              </p>
            )}
            {c.stat && (
              <p data-anim="pop" style={at(t + 450)} className="mt-3">
                <span className="font-serif text-headline font-semibold text-ink">
                  {c.stat.prefix}
                  <CountUp
                    to={c.stat.to}
                    suffix={c.stat.suffix}
                    group={c.stat.group}
                    delay={t + 500}
                    duration={1100}
                  />
                </span>
                <span className="mt-0.5 block text-label text-muted">
                  {c.stat.caption}
                </span>
              </p>
            )}
            <ul
              className={`mt-4 text-label text-copy ${sort ? "flex flex-wrap gap-2" : "space-y-2"}`}
            >
              {c.items.map((item, j) => {
                const ti = t + COL_LEAD + j * ITEM_GAP;
                return sort ? (
                  <li
                    key={item}
                    data-anim="drop"
                    style={at(ti)}
                    className={`rounded-md px-3 py-2 font-medium ${chipTone[c.tone ?? "default"]}`}
                  >
                    {item}
                  </li>
                ) : (
                  <li key={item} className="relative flex gap-2.5">
                    <span
                      aria-hidden="true"
                      data-anim="flash"
                      style={at(ti, 1100)}
                      className="absolute -inset-x-2 -inset-y-1 rounded-md bg-harbour-tint ring-1 ring-harbour/30"
                    />
                    <span className="relative mt-0.5 size-5 shrink-0">
                      <span className="absolute inset-[6px] rounded-full bg-hairline-strong" />
                      <span
                        aria-hidden="true"
                        data-anim="pop"
                        style={at(ti + 150)}
                        className="absolute inset-0 flex items-center justify-center rounded-full bg-harbour text-surface"
                      >
                        <CheckIcon size={14} />
                      </span>
                    </span>
                    <span data-anim="focus" style={at(ti)} className="relative">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export type CompareRow = { label: string; left: string; right: string };

/**
 * Two options judged line by line. A row's label drops in, then each side
 * slides in from its own edge.
 */
export function Compare({
  leftTitle,
  rightTitle,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  rows,
}: {
  leftTitle: string;
  rightTitle: string;
  leftIcon: DiagramIcon;
  rightIcon: DiagramIcon;
  rows: CompareRow[];
}) {
  const GAP = 780;
  return (
    <div>
      <div className="hidden gap-4 md:grid md:grid-cols-[9rem_minmax(0,1fr)_minmax(0,1fr)]">
        <span />
        <p
          data-anim="slide-l"
          style={at(0, 700)}
          className="flex items-center gap-3 rounded-md bg-harbour px-5 py-3 text-[1.125rem] font-semibold text-surface"
        >
          <LeftIcon size={24} />
          {leftTitle}
        </p>
        <p
          data-anim="slide-r"
          style={at(0, 700)}
          className="flex items-center gap-3 rounded-md bg-ink px-5 py-3 text-[1.125rem] font-semibold text-surface"
        >
          <RightIcon size={24} />
          {rightTitle}
        </p>
      </div>
      <ul className="space-y-5 md:mt-4 md:space-y-4">
        {rows.map((r, i) => {
          const t = 600 + i * GAP;
          return (
            <li
              key={r.label}
              className="relative grid gap-3 md:grid-cols-[9rem_minmax(0,1fr)_minmax(0,1fr)] md:items-stretch md:gap-4"
            >
              <span
                aria-hidden="true"
                data-anim="flash"
                style={at(t, 1300)}
                className="absolute -inset-x-2 -inset-y-1.5 rounded-lg bg-harbour-tint ring-2 ring-harbour/25"
              />
              <p
                data-anim="drop"
                style={at(t)}
                className="relative flex items-center font-serif text-[1.1875rem] font-semibold text-ink"
              >
                {r.label}
              </p>
              <p
                data-anim="slide-l"
                style={at(t + 120)}
                className="relative rounded-md bg-surface p-4 text-label text-copy shadow-device"
              >
                <span className="mb-1 block font-semibold text-harbour-deep md:hidden">
                  {leftTitle}
                </span>
                {r.left}
              </p>
              <p
                data-anim="slide-r"
                style={at(t + 240)}
                className="relative rounded-md bg-surface p-4 text-label text-copy shadow-device"
              >
                <span className="mb-1 block font-semibold text-ink md:hidden">
                  {rightTitle}
                </span>
                {r.right}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Each result on the left leads, along a line with a small marker running
 * down it, to the action on the right.
 */
export function Pairs({
  rows,
  gap = 820,
}: {
  rows: { result: string; tone: Tone; action: string }[];
  gap?: number;
}) {
  return (
    <ul className="space-y-3">
      {rows.map((row, i) => {
        const t = 300 + i * gap;
        const run = at(t + 250, 520, linear);
        return (
          <li
            key={row.result}
            className="grid items-center gap-2 md:grid-cols-[13rem_3.5rem_minmax(0,1fr)] md:gap-0"
          >
            <span
              data-anim="pop"
              style={at(t)}
              className={`inline-block w-fit rounded-full px-3 py-1.5 text-label font-semibold ${chipTone[row.tone]}`}
            >
              {row.result}
            </span>
            <span aria-hidden="true" className="relative hidden h-[3px] md:block">
              <span className="absolute inset-0 rounded-full bg-hairline-strong" />
              <span
                data-anim="grow-x"
                style={run}
                className="absolute inset-0 rounded-full bg-harbour"
              />
              <span
                data-anim="ride-x"
                style={run}
                className="absolute top-1/2 left-0 z-10 size-3.5 -translate-1/2 rounded-full bg-ink ring-[3px] ring-surface"
              />
            </span>
            <span className="relative">
              <span
                aria-hidden="true"
                data-anim="flash"
                style={at(t + 750, 1100)}
                className="absolute -inset-1 rounded-lg bg-harbour-tint ring-2 ring-harbour/25"
              />
              <span
                data-anim="slide-r"
                style={at(t + 700)}
                className="relative block rounded-md bg-surface px-4 py-3 text-copy shadow-device"
              >
                {row.action}
              </span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export type Check = {
  title: string;
  detail?: ReactNode;
  ask?: string;
  worry?: string;
};

/**
 * An inspection: each area is scanned in turn, gets its tick, and then shows
 * what to ask for and what should make you pause.
 */
export function Checklist({
  items,
  gap = 820,
}: {
  items: Check[];
  gap?: number;
}) {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {items.map((item, i) => {
        const t = 350 + i * gap;
        return (
          <li
            key={item.title}
            className="relative flex gap-4 rounded-md bg-surface p-5 shadow-device"
          >
            <span
              aria-hidden="true"
              data-anim="flash"
              style={at(t, 1400)}
              className="absolute -inset-1 rounded-lg bg-harbour-tint ring-2 ring-harbour/30"
            />
            <span className="relative size-9 shrink-0">
              <span
                aria-hidden="true"
                data-anim="ripple"
                style={at(t + 250)}
                className="absolute inset-0 rounded-full ring-4 ring-harbour/40"
              />
              <span className="absolute inset-0 rounded-full bg-hairline-strong/60" />
              <span
                aria-hidden="true"
                data-anim="pop"
                style={at(t + 250)}
                className="absolute inset-0 flex items-center justify-center rounded-full bg-harbour text-surface"
              >
                <CheckIcon size={20} />
              </span>
            </span>
            <div className="relative">
              <p
                data-anim="rise"
                style={at(t)}
                className="text-[1.125rem] leading-snug font-semibold text-ink"
              >
                {item.title}
              </p>
              {item.detail && (
                <p
                  data-anim="fade"
                  style={at(t + 250)}
                  className="mt-1 text-label text-copy"
                >
                  {item.detail}
                </p>
              )}
              {item.ask && (
                <p
                  data-anim="fade"
                  style={at(t + 350)}
                  className="mt-2 text-label text-copy"
                >
                  <strong className="text-ink">Ask for:</strong> {item.ask}
                </p>
              )}
              {item.worry && (
                <p
                  data-anim="fade"
                  style={at(t + 650)}
                  className="mt-1 text-label text-copy"
                >
                  <strong className="text-stop">Worry if:</strong> {item.worry}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
