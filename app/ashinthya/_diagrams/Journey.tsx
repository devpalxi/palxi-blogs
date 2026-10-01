import type { CSSProperties, ReactNode } from "react";
import { at } from "../../dineth/_components/diagram-kit";
import {
  JOURNEY_LEG,
  JOURNEY_START,
  chipTone,
  linear,
  ringTone,
  solidTone,
  stopTime,
  type DiagramIcon,
  type Tone,
} from "./shared";

export type Stop = {
  icon: DiagramIcon;
  title: string;
  detail?: ReactNode;
  tone?: Tone;
  /** A small label that pops when the train arrives, e.g. "Gap found". */
  badge?: { text: string; tone?: Tone; icon?: DiagramIcon };
};

const titleTone: Record<Tone, string> = {
  default: "text-ink",
  done: "text-settled",
  caution: "text-ink",
  stop: "text-ink",
};

// Track: grey bed with sleepers, a green trail laid by the train, and the train.
export function Segment({
  dir,
  from,
  className = "",
  leg,
}: {
  dir: "x" | "y";
  from: number;
  className?: string;
  leg: number;
}) {
  const x = dir === "x";
  const timing = at(from, leg, linear);
  return (
    <span aria-hidden="true" className={`absolute ${className}`}>
      <span
        className={`absolute rounded-full bg-hairline-strong ${
          x ? "inset-x-0 top-0 h-[3px]" : "inset-y-0 left-0 w-[3px]"
        }`}
      />
      <span
        data-anim={x ? "grow-x" : "grow-y"}
        style={timing}
        className={`absolute rounded-full bg-harbour ${
          x ? "inset-x-0 top-0 h-[3px]" : "inset-y-0 left-0 w-[3px]"
        }`}
      />
      <span
        data-anim={x ? "ride-x" : "ride-y"}
        style={timing}
        className={`absolute z-10 -translate-1/2 rounded-md bg-ink ring-[3px] ring-surface ${
          x ? "top-[1.5px] left-0 h-3.5 w-6" : "top-0 left-[1.5px] h-6 w-3.5"
        }`}
      />
    </span>
  );
}

function Station({
  stop,
  time,
  last,
}: {
  stop: Stop;
  time: number;
  last: boolean;
}) {
  const Icon = stop.icon;
  const tone = stop.tone ?? "default";
  return (
    <span className="relative z-10 block size-12 shrink-0">
      <span
        aria-hidden="true"
        data-anim="ripple"
        style={at(time)}
        className={`absolute inset-0 rounded-full ring-4 ${ringTone[tone]}`}
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center rounded-full bg-surface text-muted shadow-device ring-1 ring-hairline-strong"
      >
        <Icon size={24} />
      </span>
      <span
        aria-hidden="true"
        data-anim="pop"
        style={at(time)}
        className={`absolute inset-0 flex items-center justify-center rounded-full text-surface ${solidTone[last && tone === "default" ? "done" : tone]}`}
      >
        <Icon size={24} />
      </span>
    </span>
  );
}

/**
 * A train runs along a track and stops at each step in turn. Each station
 * lights up and its text comes into focus as the train arrives. In a row on
 * wide screens, stacked on phones. `flow="column"` stacks it everywhere.
 */
export function Journey({
  stops,
  flow = "row",
  header,
  footer,
  start = JOURNEY_START,
  leg = JOURNEY_LEG,
}: {
  stops: Stop[];
  flow?: "row" | "column";
  header?: ReactNode;
  footer?: { icon: DiagramIcon; children: ReactNode };
  start?: number;
  leg?: number;
}) {
  const row = flow === "row";
  const n = stops.length;
  const end = stopTime(n - 1, start, leg);
  const Foot = footer?.icon;
  return (
    <div>
      {header}
      <ol
        style={{ "--cols": n } as CSSProperties}
        className={`flex flex-col ${row ? "md:grid md:grid-cols-[repeat(var(--cols),minmax(0,1fr))] md:gap-4" : "mx-auto max-w-[40rem]"}`}
      >
        {stops.map((s, i) => {
          const time = stopTime(i, start, leg);
          const lastStop = i === n - 1;
          const Badge = s.badge?.icon;
          return (
            <li
              key={s.title}
              className={`relative flex gap-4 pb-8 last:pb-0 ${row ? "md:block md:pb-0" : ""}`}
            >
              {!lastStop && (
                <>
                  <Segment
                    dir="y"
                    from={time}
                    leg={leg}
                    className={`top-12 bottom-0 left-[22.5px] w-[3px] ${row ? "md:hidden" : ""}`}
                  />
                  {row && (
                    <Segment
                      dir="x"
                      from={time}
                      leg={leg}
                      className="top-[22.5px] left-14 hidden h-[3px] w-[calc(100%-2.5rem)] md:block"
                    />
                  )}
                </>
              )}
              <Station stop={s} time={time} last={lastStop} />
              <div
                data-anim="focus"
                style={at(time)}
                className={`pt-1 ${row ? "md:mt-4 md:pt-0 md:pr-3" : ""}`}
              >
                {s.badge && (
                  <span
                    data-anim="pop"
                    style={at(time + 150)}
                    className={`mb-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-label font-semibold ${chipTone[s.badge.tone ?? "caution"]}`}
                  >
                    {Badge && <Badge size={18} />}
                    {s.badge.text}
                  </span>
                )}
                <p
                  className={`text-[1.125rem] leading-snug font-semibold ${titleTone[s.tone ?? "default"]}`}
                >
                  {s.title}
                </p>
                {s.detail && (
                  <p className="mt-1 text-label text-copy">{s.detail}</p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
      {footer && Foot && (
        <p
          data-anim="rise"
          style={at(end + 500)}
          className="mt-8 flex items-start gap-3 rounded-md border-2 border-dashed border-harbour/40 bg-surface px-5 py-4 text-copy"
        >
          <Foot size={24} className="mt-0.5 shrink-0 text-harbour-deep" />
          <span>{footer.children}</span>
        </p>
      )}
    </div>
  );
}
