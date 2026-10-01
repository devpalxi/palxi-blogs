import type { CSSProperties } from "react";
import {
  CheckIcon,
  LockIcon,
  QuestionIcon,
  ReceiptIcon,
} from "../../_components/icons";
import { at } from "../../_components/diagram-kit";

// One payment travels the whole route. The third moment is a detour off
// the main road that rejoins it: things can go wrong, and there's a way back.
const ROUTE =
  "M125 48 H470 C530 48 530 128 590 128 H660 C720 128 720 48 780 48 H875";

const START = 300;
const TRAVEL = 4600;
// Where each station sits along the route (0-1), measured from ROUTE.
const STOPS = [0, 0.308, 0.654, 1];
const arrive = (i: number) => Math.round(START + STOPS[i] * TRAVEL);

const tones = {
  go: { fill: "var(--harbour-green)", title: "text-ink" },
  caution: { fill: "var(--wattle-amber)", title: "text-wattle" },
  done: { fill: "var(--settled-green)", title: "text-settled" },
};

const moments = [
  {
    icon: CheckIcon,
    title: "Before you pay",
    detail: "You can see exactly what you're agreeing to, including every fee.",
    tone: tones.go,
    x: 125,
    y: 48,
  },
  {
    icon: LockIcon,
    title: "While you pay",
    detail: "Your details are protected, and every step is simple and familiar.",
    tone: tones.go,
    x: 375,
    y: 48,
  },
  {
    icon: QuestionIcon,
    title: "If something goes wrong",
    detail: "You're told plainly what happened to your money, and how to get back on track.",
    tone: tones.caution,
    detour: true,
    x: 625,
    y: 128,
  },
  {
    icon: ReceiptIcon,
    title: "After you pay",
    detail: "You get a clear record straight away, and know who to contact.",
    tone: tones.done,
    x: 875,
    y: 48,
  },
];

function Route() {
  return (
    <svg
      viewBox="0 0 1000 176"
      className="hidden w-full lg:block"
      aria-hidden="true"
      focusable="false"
    >
      {/* The road ahead, then the payment's trail drawn over it. */}
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
        stroke="var(--harbour-green)"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        data-anim="draw"
        style={at(START, TRAVEL, { "--ease": "linear" } as CSSProperties)}
      />

      {moments.map((m, i) => {
        const Icon = m.icon;
        return (
          <g key={m.title} transform={`translate(${m.x} ${m.y})`}>
            <circle
              r={31}
              fill="none"
              stroke={m.tone.fill}
              strokeWidth={3}
              data-anim="ripple"
              style={at(arrive(i))}
            />
            <circle
              r={31}
              fill="var(--paper-white)"
              stroke="var(--hairline-strong)"
              strokeWidth={1.5}
            />
            <Icon x={-13} y={-13} size={26} color="var(--slate-muted)" />
            <g data-anim="pop" style={at(arrive(i))}>
              <circle r={31} fill={m.tone.fill} />
              <Icon x={-13} y={-13} size={26} color="var(--paper-white)" />
            </g>
          </g>
        );
      })}

      {/* The payment itself. Hidden at rest; it only exists while moving. */}
      <g
        data-anim="travel"
        className="opacity-0"
        style={at(START, TRAVEL, {
          offsetPath: `path("${ROUTE}")`,
          "--ease": "linear",
        } as CSSProperties)}
      >
        <circle r={13} fill="var(--paper-white)" />
        <circle r={9} fill="var(--harbour-green-deep)" />
      </g>
    </svg>
  );
}

export function TrustJourney() {
  return (
    <div>
      <Route />
      <ol className="lg:mt-2 lg:grid lg:grid-cols-4">
        {moments.map((m, i) => {
          const Icon = m.icon;
          const last = i === moments.length - 1;
          const next = last ? 0 : arrive(i + 1) - arrive(i);
          return (
            <li
              key={m.title}
              className="relative flex gap-5 pb-9 last:pb-0 lg:block lg:px-4 lg:pb-0 lg:text-center"
            >
              {/* Phones and tablets: the same route, running down the page. */}
              {!last && (
                <span
                  aria-hidden="true"
                  className="absolute top-14 bottom-1 left-[26px] w-1 rounded-full bg-hairline-strong lg:hidden"
                >
                  <span
                    data-anim="grow-y"
                    style={at(arrive(i), next, { "--ease": "linear" } as CSSProperties)}
                    className="block h-full w-full rounded-full bg-harbour"
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
                  style={{ ...at(arrive(i)), background: m.tone.fill }}
                  className="absolute inset-0 flex items-center justify-center rounded-full text-surface"
                >
                  <Icon size={26} />
                </span>
              </span>

              <div
                data-anim="focus"
                style={at(arrive(i))}
                className="pt-1.5 lg:pt-0"
              >
                <p
                  className={`text-[1.1875rem] leading-snug font-semibold ${m.tone.title}`}
                >
                  {m.title}
                </p>
                {m.detour && (
                  <p className="mt-2 inline-block rounded-full bg-wattle-tint px-3 py-0.5 text-label font-semibold text-wattle">
                    Only if needed
                  </p>
                )}
                <p className="mt-2 text-label leading-normal text-copy">
                  {m.detail}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
