import type { CSSProperties } from "react";
import {
  ChatIcon,
  EyeIcon,
  HandoverIcon,
  PencilIcon,
  ReplayIcon,
  TapIcon,
} from "../../_components/icons";
import { at } from "../../_components/diagram-kit";

// One idea travels the route. Between "watch" and "build" it can loop back
// to "make it clickable" as many times as it needs to.
const ROUTE = "M100 146 H800 C800 40 500 40 500 146 H900";

const START = 300;
const TRAVEL = 6400;
const LENGTH = 1472.25;
const frac = (units: number) => units / LENGTH;
const when = (f: number) => Math.round(START + f * TRAVEL);

// Arrival times at each station (first pass), plus the second lap's.
const FIRST = [0, 200, 400, 600].map((u) => when(frac(u)));
const END = when(1);
const LOOP_BACK = when(frac(700 + 372.25)); // back at "make it clickable"
const LOOP_WATCH = when(frac(700 + 372.25 + 200)); // and "watch" again
const ARRIVE = [...FIRST, END];

const stages = [
  {
    icon: ChatIcon,
    title: "Listen",
    detail: "Talk with the people who'll use it, and understand the real problem.",
    x: 100,
  },
  {
    icon: PencilIcon,
    title: "Sketch",
    detail: "Draw rough ideas on paper. Quick, cheap and easy to throw away.",
    x: 300,
  },
  {
    icon: TapIcon,
    title: "Make it clickable",
    detail: "Build a realistic pretend version you can tap through.",
    x: 500,
  },
  {
    icon: EyeIcon,
    title: "Watch people try it",
    detail: "Real people use it while we quietly take notes.",
    x: 700,
  },
  {
    icon: HandoverIcon,
    title: "Improve, then build",
    detail: "Fix what tripped people up, then hand it to our developers.",
    x: 900,
    done: true,
  },
];

function Route() {
  return (
    <div className="relative hidden lg:block">
      <svg
        viewBox="0 0 1000 190"
        className="w-full"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d={ROUTE}
          fill="none"
          stroke="var(--hairline-strong)"
          strokeWidth={3}
          strokeLinecap="round"
          strokeDasharray="1 11"
        />
        <path
          d={ROUTE}
          pathLength={1}
          fill="none"
          stroke="var(--magenta)"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          data-anim="draw"
          style={at(START, TRAVEL, { "--ease": "linear" } as CSSProperties)}
        />

        {stages.map((s, i) => {
          const Icon = s.icon;
          const fill = s.done ? "var(--magenta)" : "var(--magenta)";
          return (
            <g key={s.title} transform={`translate(${s.x} 146)`}>
              <circle
                r={31}
                fill="none"
                stroke={fill}
                strokeWidth={3}
                data-anim="ripple"
                style={at(ARRIVE[i])}
              />
              {/* The second lap re-visits "make it clickable" and "watch". */}
              {(i === 2 || i === 3) && (
                <circle
                  r={31}
                  fill="none"
                  stroke={fill}
                  strokeWidth={3}
                  data-anim="ripple"
                  style={at(i === 2 ? LOOP_BACK : LOOP_WATCH)}
                />
              )}
              <circle
                r={31}
                fill="var(--paper-white)"
                stroke="var(--hairline-strong)"
                strokeWidth={1.5}
              />
              <Icon x={-13} y={-13} size={26} color="var(--slate-muted)" />
              <g data-anim="pop" style={at(ARRIVE[i])}>
                <circle r={31} fill={fill} />
                <Icon x={-13} y={-13} size={26} color="var(--paper-white)" />
              </g>
            </g>
          );
        })}

        <g
          data-anim="travel"
          className="opacity-0"
          style={at(START, TRAVEL, {
            offsetPath: `path("${ROUTE}")`,
            "--ease": "linear",
          } as CSSProperties)}
        >
          <circle r={13} fill="var(--paper-white)" />
          <circle r={9} fill="var(--magenta-deep)" />
        </g>
      </svg>

      {/* Sits on the loop, like a label on a road sign. */}
      <p
        data-anim="pop"
        style={at(when(frac(700 + 120)), 500)}
        className="absolute top-[24%] left-[65%] flex -translate-x-1/2 items-center gap-2 rounded-full bg-surface px-4 py-2 text-label font-semibold whitespace-nowrap text-magenta-deep ring-2 ring-magenta/35"
      >
        <ReplayIcon size={20} className="shrink-0" />
        Not easy yet? Go round again.
      </p>
    </div>
  );
}

export function ProcessOverview() {
  return (
    <div>
      <Route />

      <ol className="lg:grid lg:grid-cols-5">
        {stages.map((s, i) => {
          const Icon = s.icon;
          const last = i === stages.length - 1;
          const next = last ? 0 : ARRIVE[i + 1] - ARRIVE[i];
          return (
            <li
              key={s.title}
              className="relative flex gap-5 pb-9 last:pb-0 lg:block lg:px-3 lg:pb-0 lg:text-center"
            >
              {!last && (
                <span
                  aria-hidden="true"
                  className="absolute top-14 bottom-1 left-[26px] w-1 rounded-full bg-hairline-strong lg:hidden"
                >
                  <span
                    data-anim="grow-y"
                    style={at(ARRIVE[i], next, { "--ease": "linear" } as CSSProperties)}
                    className="block h-full w-full rounded-full bg-magenta"
                  />
                </span>
              )}
              <span
                aria-hidden="true"
                className="relative flex size-14 shrink-0 items-center justify-center rounded-full bg-surface text-muted ring-1 ring-hairline-strong lg:hidden"
              >
                <Icon size={26} />
                <span
                  data-anim="pop"
                  style={{
                    ...at(ARRIVE[i]),
                    background: s.done ? "var(--magenta)" : "var(--magenta)",
                  }}
                  className="absolute inset-0 flex items-center justify-center rounded-full text-surface"
                >
                  <Icon size={26} />
                </span>
              </span>

              <div data-anim="focus" style={at(ARRIVE[i])} className="pt-1.5 lg:pt-0">
                <p
                  className={`text-[1.1875rem] leading-snug font-semibold ${
                    s.done ? "text-magenta" : "text-ink"
                  }`}
                >
                  {s.title}
                </p>
                <p className="mt-2 text-label leading-normal text-copy">
                  {s.detail}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      {/* Phones and tablets show the loop as a note under the list. */}
      <p className="mt-8 flex items-center gap-3 rounded-md border-2 border-dashed border-magenta/40 bg-surface px-4 py-3 text-label font-semibold text-magenta-deep lg:hidden">
        <ReplayIcon size={22} className="shrink-0" />
        Not easy yet? Go round again: make it clickable, watch, improve.
      </p>
    </div>
  );
}
