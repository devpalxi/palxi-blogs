import type { ReactNode } from "react";
import { CheckIcon } from "../../dineth/_components/icons";
import { at } from "../../dineth/_components/diagram-kit";
import { WarningIcon } from "./icons";
import type { DiagramIcon } from "./shared";

/** One line of a list, read by a highlight and ticked off. */
export function Fact({ text, time }: { text: string; time: number }) {
  return (
    <li className="relative flex gap-2.5">
      <span
        aria-hidden="true"
        data-anim="flash"
        style={at(time, 1100)}
        className="absolute -inset-x-2 -inset-y-1 rounded-md bg-magenta-tint ring-1 ring-magenta/30"
      />
      <span className="relative mt-0.5 size-5 shrink-0">
        <span className="absolute inset-[6px] rounded-full bg-hairline-strong" />
        <span
          aria-hidden="true"
          data-anim="pop"
          style={at(time + 150)}
          className="absolute inset-0 flex items-center justify-center rounded-full bg-magenta text-surface"
        >
          <CheckIcon size={14} />
        </span>
      </span>
      <span data-anim="focus" style={at(time)} className="relative">
        {text}
      </span>
    </li>
  );
}

export type CompareRow = {
  label: string;
  left: string;
  right: string;
  icon?: DiagramIcon;
};

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
          className="flex items-center gap-3 rounded-md bg-magenta px-5 py-3 text-[1.125rem] font-semibold text-surface"
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
                className="absolute -inset-x-2 -inset-y-1.5 rounded-lg bg-magenta-tint ring-2 ring-magenta/25"
              />
              <p
                data-anim="drop"
                style={at(t)}
                className="relative flex items-center gap-3 font-heading text-[1.1875rem] font-semibold text-ink"
              >
                {r.icon && (
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-magenta-tint text-magenta">
                    <r.icon size={18} />
                  </span>
                )}
                {r.label}
              </p>
              <p
                data-anim="slide-l"
                style={at(t + 120)}
                className="relative rounded-md bg-surface p-4 text-label text-copy shadow-device"
              >
                <span className="mb-1 block font-semibold text-magenta-deep md:hidden">
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
              className="absolute -inset-1 rounded-lg bg-magenta-tint ring-2 ring-magenta/30"
            />
            <span className="relative size-9 shrink-0">
              <span
                aria-hidden="true"
                data-anim="ripple"
                style={at(t + 250)}
                className="absolute inset-0 rounded-full ring-4 ring-magenta/40"
              />
              <span className="absolute inset-0 rounded-full bg-hairline-strong/60" />
              <span
                aria-hidden="true"
                data-anim="pop"
                style={at(t + 250)}
                className="absolute inset-0 flex items-center justify-center rounded-full bg-magenta text-surface"
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
                  data-anim="stamp"
                  style={at(t + 750)}
                  className="mt-2 flex -rotate-[4deg] gap-2 rounded-md border-l-4 border-stop bg-stop-tint px-3 py-2 text-label text-copy"
                >
                  <WarningIcon size={18} className="mt-0.5 shrink-0 text-stop" />
                  <span>
                    <strong className="text-stop">Worry if:</strong> {item.worry}
                  </span>
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
