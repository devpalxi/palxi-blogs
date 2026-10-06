import type { CSSProperties, ReactNode } from "react";
import { CountUp } from "../../dineth/_components/CountUp";
import { at } from "../../dineth/_components/diagram-kit";
import { BellIcon } from "./icons";
import { chipTone, type DiagramIcon, type Tone } from "./shared";

export type Dial = {
  label: ReactNode;
  /** How far round the ring runs, 0 to 1. Shows the order of the deadlines only. */
  f: number;
  tone?: Tone;
  /** A number that counts up in the middle... */
  count?: { to: number; unit: string };
  /** ...or an icon, for a deadline that isn't a length of time. */
  icon?: DiagramIcon;
  /** Small text under the label, e.g. "Before it happens". */
  tag?: string;
};

const ringColour: Record<Tone, string> = {
  default: "var(--magenta-chart)",
  done: "var(--settled-green)",
  caution: "var(--wattle-amber)",
  stop: "var(--stop-red)",
};

const START = 700;
const dur = (f: number) => 900 + Math.round(f * 2600);

function Ring({ d, index }: { d: Dial; index: number }) {
  const tone = d.tone ?? "default";
  const Icon = d.icon;
  const run = dur(d.f);
  const begin = START + index * 140;
  return (
    <div className="relative mx-auto size-[7.5rem] sm:size-36">
      <svg viewBox="0 0 120 120" className="absolute inset-0" aria-hidden="true" focusable="false">
        {/* A dial face with tick marks, like a stopwatch. */}
        <circle cx="60" cy="60" r="56" fill="var(--paper-white)" stroke="var(--hairline)" />
        {Array.from({ length: 12 }, (_, k) => (
          <line
            key={k}
            x1="60"
            y1="9"
            x2="60"
            y2={k % 3 === 0 ? 15 : 12}
            stroke="var(--hairline-strong)"
            strokeWidth={k % 3 === 0 ? 2 : 1.5}
            strokeLinecap="round"
            transform={`rotate(${k * 30} 60 60)`}
          />
        ))}
        <circle
          cx="60"
          cy="60"
          r="40"
          fill="none"
          stroke="var(--hairline-strong)"
          strokeWidth="9"
          opacity="0.5"
        />
        <g transform="rotate(-90 60 60)">
          <circle
            cx="60"
            cy="60"
            r="40"
            fill="none"
            stroke={ringColour[tone]}
            strokeWidth="9"
            strokeLinecap="round"
            pathLength={100}
            data-anim="dial"
            style={
              {
                ...at(begin, run),
                "--rest": 100 - d.f * 100 + (d.f >= 1 ? 0.001 : 0),
                "--ease": "cubic-bezier(0.4, 0, 0.2, 1)",
              } as CSSProperties
            }
          />
        </g>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {d.count ? (
          <>
            <span className="font-heading text-[1.75rem] leading-none font-semibold text-ink sm:text-[2rem]">
              <CountUp to={d.count.to} delay={begin} duration={run} />
            </span>
            <span className="mt-0.5 max-w-[5.5rem] text-label leading-[1.1] text-muted">
              {d.count.unit}
            </span>
          </>
        ) : (
          Icon && (
            <span
              data-anim="pop"
              style={at(begin + run * 0.5)}
              className="text-ink"
            >
              <Icon size={34} />
            </span>
          )
        )}
      </div>
    </div>
  );
}

/**
 * A row of stopwatch dials. Each ring fills to show how long its deadline is
 * (in order, not to scale) while the number inside counts up. One event,
 * several clocks.
 */
export function Dials({
  dials,
  startLabel,
  note,
}: {
  dials: Dial[];
  startLabel?: string;
  note?: string;
}) {
  const cols =
    dials.length <= 3
      ? "sm:grid-cols-3"
      : dials.length === 4
        ? "sm:grid-cols-4"
        : "sm:grid-cols-3 lg:grid-cols-5";
  return (
    <div>
      {startLabel && (
        <p
          data-anim="pop"
          style={at(0)}
          className="mb-8 inline-flex items-center gap-3 rounded-full bg-ink px-5 py-2.5 font-semibold text-surface"
        >
          <span className="relative flex size-6 items-center justify-center">
            <span
              aria-hidden="true"
              data-anim="ripple"
              style={at(150)}
              className="absolute inset-0 rounded-full ring-4 ring-surface/50"
            />
            <BellIcon size={22} />
          </span>
          {startLabel}
        </p>
      )}
      <ul className={`grid grid-cols-2 gap-x-4 gap-y-9 ${cols}`}>
        {dials.map((d, i) => {
          const tone = d.tone ?? "default";
          const begin = START + i * 140;
          return (
            <li key={i} className="text-center">
              <Ring d={d} index={i} />
              {d.tag && (
                <span
                  data-anim="pop"
                  style={at(begin + dur(d.f) * 0.6)}
                  className={`mt-3 inline-block rounded-full px-3 py-1 text-label font-semibold ${chipTone[tone]}`}
                >
                  {d.tag}
                </span>
              )}
              <p
                data-anim="focus"
                style={at(begin + dur(d.f) * 0.6)}
                className="mx-auto mt-2 max-w-[15rem] text-label text-copy"
              >
                {d.label}
              </p>
            </li>
          );
        })}
      </ul>
      {note && (
        <p
          data-anim="fade"
          style={at(START + dur(1) + 700)}
          className="mt-8 text-label text-muted"
        >
          {note}
        </p>
      )}
    </div>
  );
}
