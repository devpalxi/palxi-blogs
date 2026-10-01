import type { ReactNode } from "react";
import { at } from "../../dineth/_components/diagram-kit";
import { Ticker, type TickPhase } from "./Ticker";
import {
  chipTone,
  linear,
  solidTone,
  type DiagramIcon,
  type Tone,
} from "./shared";
import { BellIcon, FlagIcon } from "./icons";

export type Lane = {
  label: ReactNode;
  chip: string;
  /** How far the lane runs, 0 to 100. Shows the order of the deadlines only. */
  len: number;
  tone?: Tone;
  /** The train: green for one regime, dark for another. */
  train?: "go" | "ink";
};

const START = 700;
const PER_PCT = 46; // ms of travel per 1% of lane, so longer lanes take longer
const MIN_RUN = 700;

export const laneRun = (len: number) => Math.max(MIN_RUN, Math.round(len * PER_PCT));
export const laneArrival = (len: number) => START + laneRun(len);

export type Clock = {
  heading: string;
  /** What the clock counts through, in order. Times are filled in for you. */
  steps: {
    /** Index of the lane whose arrival ends this step. */
    untilLane: number;
    from: number;
    to: number;
    suffix: string;
    singular?: string;
  }[];
  /** What it settles on once the last lane has finished. */
  rest: string;
  /** Optional text to swap in when a lane ends (for a unit change). */
  after?: { lane: number; text: string }[];
};

function clockPhases(rows: Lane[], clock: Clock): TickPhase[] {
  let from = START;
  const phases: TickPhase[] = clock.steps.map((s) => {
    const end = laneArrival(rows[s.untilLane].len);
    const p: TickPhase = {
      at: from,
      dur: end - from,
      from: s.from,
      to: s.to,
      suffix: s.suffix,
      singular: s.singular,
    };
    from = end;
    return p;
  });
  return phases;
}

/**
 * One event starts several clocks at once. A train leaves the start gate on
 * each lane and arrives at its deadline; shorter deadlines arrive first.
 * An optional readout counts through the time in step with the trains.
 */
export function Lanes({
  rows,
  clock,
  startLabel,
  note,
}: {
  rows: Lane[];
  clock?: Clock;
  startLabel: string;
  note?: string;
}) {
  const phases = clock ? clockPhases(rows, clock) : null;
  const longest = Math.max(...rows.map((r) => laneArrival(r.len)));
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <p
          data-anim="pop"
          style={at(0, undefined)}
          className="inline-flex items-center gap-3 rounded-full bg-ink px-5 py-2.5 font-semibold text-surface"
        >
          <BellIcon size={22} />
          {startLabel}
        </p>
        {clock && phases && (
          <p data-anim="fade" style={at(300)} className="text-left sm:text-right">
            <span className="block text-label text-muted">{clock.heading}</span>
            <Ticker
              phases={[
                ...phases,
                ...(clock.after ?? []).map((a) => ({
                  at: laneArrival(rows[a.lane].len),
                  dur: 0,
                  from: 0,
                  to: 0,
                  text: a.text,
                })),
              ]}
              rest={clock.rest}
              className="font-serif text-headline font-semibold text-ink"
            />
          </p>
        )}
      </div>

      <ul className="mt-8 space-y-7">
        {rows.map((r, i) => {
          const run = laneRun(r.len);
          const arrive = START + run;
          const tone = r.tone ?? "default";
          const timing = at(START, run, linear);
          return (
            <li key={i}>
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <p className="max-w-[34rem] text-copy">{r.label}</p>
                <span
                  data-anim="pop"
                  style={at(arrive)}
                  className={`shrink-0 rounded-full px-4 py-1 text-[1.125rem] font-semibold ${chipTone[tone]}`}
                >
                  {r.chip}
                </span>
              </div>
              <div aria-hidden="true" className="mt-3 pr-3.5">
                <div className="relative h-7" style={{ width: `${r.len}%` }}>
                  <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-hairline-strong" />
                  <span
                    data-anim="grow-x"
                    style={timing}
                    className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-harbour"
                  />
                  <span className="absolute top-1/2 left-0 size-3 -translate-1/2 rounded-full bg-ink" />
                  <span
                    data-anim="ride-x"
                    style={timing}
                    className={`absolute top-1/2 left-0 z-10 h-4 w-7 -translate-1/2 rounded-md ring-[3px] ring-surface ${r.train === "ink" ? "bg-ink" : "bg-harbour-deep"}`}
                  />
                  <span className="absolute top-1/2 -right-3.5 size-7 -translate-y-1/2">
                    <span
                      data-anim="ripple"
                      style={at(arrive)}
                      className="absolute inset-0 rounded-full ring-4 ring-harbour/40"
                    />
                    <span className="absolute inset-0 flex items-center justify-center rounded-full bg-surface text-muted ring-1 ring-hairline-strong">
                      <FlagIcon size={16} />
                    </span>
                    <span
                      data-anim="pop"
                      style={at(arrive)}
                      className={`absolute inset-0 flex items-center justify-center rounded-full text-surface ${solidTone[tone]}`}
                    >
                      <FlagIcon size={16} />
                    </span>
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {note && (
        <p data-anim="fade" style={at(longest + 300)} className="mt-7 text-label text-muted">
          {note}
        </p>
      )}
    </div>
  );
}
