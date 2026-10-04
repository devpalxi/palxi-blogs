import type { CSSProperties } from "react";
import { ArrowRightIcon, CheckIcon } from "../../_components/icons";
import { Bar, at } from "../../_components/diagram-kit";

// The shared button is improved once. A pulse then runs out to every service
// at the same time, and each one updates the moment it arrives.
const FIX = 1300;
const SEND = 2300;
const FLIGHT = 1500;
const ARRIVE = SEND + FLIGHT;

const services = ["A booking service", "A payments service", "A community service"];

// Drops land over the centre of each of the three screens (704 wide, 16px gaps).
const ROUTES = [
  "M352 0 C352 56 112 48 112 106",
  "M352 0 V106",
  "M352 0 C352 56 592 48 592 106",
];
const ENDS = [112, 352, 592];

const grid = "[grid-area:1/1]";

export function FixOnce() {
  return (
    <div>
      <div
        data-anim="rise"
        style={at(0, 700)}
        className="mx-auto max-w-[36rem] rounded-lg bg-surface p-5 sm:p-6"
      >
        <p className="font-serif text-title font-semibold text-ink">
          The shared button, improved once
        </p>
        <div
          aria-hidden="true"
          className="mt-5 flex items-center justify-center gap-6"
        >
          <span className="inline-flex min-h-8 items-center rounded-[4px] bg-harbour/55 px-3 text-label text-surface">
            Next
          </span>
          <ArrowRightIcon size={24} className="shrink-0 text-muted" />
          <span className="relative">
            <span
              data-anim="pop"
              style={at(FIX, 500)}
              className="inline-flex min-h-12 items-center rounded-sm bg-harbour px-6 text-[1.125rem] font-semibold text-surface"
            >
              Next
            </span>
            <span
              data-anim="ripple"
              style={at(FIX)}
              className="absolute -inset-1.5 rounded-md ring-4 ring-harbour/35"
            />
          </span>
        </div>
        <p className="mt-4 text-center text-label text-copy">
          Larger, clearer and easier to tap, after testing showed people
          missed it.
        </p>
      </div>

      {/* The pulse fans out to every service at once. */}
      <svg
        viewBox="0 0 704 110"
        aria-hidden="true"
        focusable="false"
        className="mx-auto block w-full max-w-[44rem]"
      >
        <circle
          cx={352}
          cy={4}
          r={6}
          fill="var(--harbour-green)"
          data-anim="pop"
          style={at(SEND - 200, 400)}
        />
        {ROUTES.map((d, i) => (
          <g key={d}>
            <path
              d={d}
              fill="none"
              stroke="var(--hairline-strong)"
              strokeWidth={3}
              strokeLinecap="round"
              strokeDasharray="1 9"
            />
            <path
              d={d}
              pathLength={1}
              fill="none"
              stroke="var(--harbour-green)"
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-anim="draw"
              style={at(SEND, FLIGHT, { "--ease": "linear" } as CSSProperties)}
            />
            <circle
              r={9}
              fill="var(--harbour-green-deep)"
              stroke="var(--paper-white)"
              strokeWidth={3}
              data-anim="travel"
              className="opacity-0"
              style={at(SEND, FLIGHT, {
                offsetPath: `path("${d}")`,
                "--ease": "linear",
              } as CSSProperties)}
            />
            <circle
              cx={ENDS[i]}
              cy={104}
              r={6}
              fill="var(--harbour-green)"
              data-anim="pop"
              style={at(ARRIVE - 100, 400)}
            />
          </g>
        ))}
      </svg>

      <ol className="mx-auto grid max-w-[44rem] grid-cols-3 gap-4">
        {services.map((s, i) => (
          <li key={s} className="flex flex-col">
            <div
              aria-hidden="true"
              data-anim="rise"
              style={at(500 + i * 150, 600)}
              className="flex min-h-36 flex-col rounded-md bg-surface p-3 ring-1 ring-hairline"
            >
              <Bar className="w-3/4" strong />
              <div className="mt-2.5 space-y-1.5">
                <Bar className="w-full" />
                <Bar className="w-1/2" />
              </div>
              <div className="mt-auto grid items-end pt-3">
                <span
                  data-anim="swap-out"
                  style={at(ARRIVE, 500)}
                  className={`${grid} flex min-h-8 items-center justify-center justify-self-center rounded-[4px] bg-harbour/55 px-5 text-label text-surface`}
                >
                  Next
                </span>
                <span
                  data-anim="fade"
                  style={at(ARRIVE, 500)}
                  className={`${grid} relative flex min-h-11 items-center justify-center rounded-sm bg-harbour text-[1.0625rem] font-semibold text-surface`}
                >
                  Next
                  <span
                    data-anim="ripple"
                    style={at(ARRIVE + 100)}
                    className="absolute -inset-1.5 rounded-md ring-4 ring-harbour/35"
                  />
                </span>
              </div>
            </div>
            <p className="mt-2 text-center text-label text-muted">{s}</p>
            <p
              data-anim="pop"
              style={at(ARRIVE + 300, 450)}
              className="mt-1 inline-flex items-center justify-center gap-1.5 text-label font-semibold text-settled"
            >
              <CheckIcon size={18} />
              Updated
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
