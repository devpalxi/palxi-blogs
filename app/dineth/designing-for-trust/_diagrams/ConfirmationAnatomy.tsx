import type { CSSProperties } from "react";
import { ArrowLeftIcon } from "../../_components/icons";
import { Bar, Device, Pin, at } from "../../_components/diagram-kit";

// A reading highlight moves down the screen the way your eye checks it.
// Each row lights its matching note; the total then links to the button.
const START = 500;
const SWEEP = 5600;
// When the highlight settles on each row (fractions match d-sweep).
const ROW_AT = [0.04, 0.26, 0.48, 0.7].map((f) => Math.round(START + f * SWEEP));
const LINK_AT = ROW_AT[3] + 450;
const EXIT_AT = START + SWEEP + 150;
const NOTE_AT = [...ROW_AT, EXIT_AT];

const callouts = [
  {
    title: "Who you're paying",
    body: "The name you know them by, not a mystery company name.",
  },
  {
    title: "What it's for",
    body: "Enough detail to spot a mistake before it costs you anything.",
  },
  {
    title: "Every fee, even when it's zero",
    body: "Fees are listed before you pay. Nothing turns up afterwards.",
  },
  {
    title: "The total, said twice",
    body: "Once in the summary and again on the button, so you know exactly what pressing it will do.",
  },
  {
    title: "A clear way out",
    body: "Changed your mind? Going back is always one obvious tap away.",
  },
];

const rows = [
  { label: "Paying", bar: "w-28" },
  { label: "For", bar: "w-32" },
  { label: "Fees", bar: "w-12" },
  { label: "Total", bar: "w-20", strong: true },
];

function Phone() {
  return (
    <Device className="mx-auto w-full max-w-[340px]">
      <div aria-hidden="true">
        <p className="flex items-center gap-1.5 font-semibold text-harbour">
          <ArrowLeftIcon size={18} />
          Back
        </p>
        <p className="mt-4 font-serif text-[1.375rem] leading-tight font-semibold text-ink">
          Check before you pay
        </p>

        <div
          className="relative mt-4"
          style={{ "--row": "3.5rem" } as CSSProperties}
        >
          <span
            data-anim="sweep"
            style={at(START, SWEEP)}
            className="absolute inset-x-[-10px] top-0 h-14 rounded-sm bg-harbour-tint ring-2 ring-harbour/35"
          />
          {rows.map((r, i) => (
            <div
              key={r.label}
              className="relative flex h-14 items-center justify-between gap-4 border-b border-hairline pr-10 last:border-b-0"
            >
              <span className={r.strong ? "font-semibold text-ink" : "text-muted"}>
                {r.label}
              </span>
              <Bar className={r.bar} strong={r.strong} />
              <Pin n={i + 1} at={ROW_AT[i]} className="absolute top-3 right-0" />
            </div>
          ))}

          {/* "Said twice": the total and the button are tied together. */}
          <span
            data-anim="grow-y"
            style={at(LINK_AT, 600)}
            className="absolute top-[12.25rem] -left-3.5 h-[4.5rem] w-2.5 rounded-l-md border-y-2 border-l-2 border-harbour"
          />
        </div>

        <div className="relative mt-5">
          <div className="flex min-h-12 items-center justify-center gap-2 rounded-sm bg-harbour px-4 font-semibold text-surface">
            Pay
            <span className="inline-block h-3.5 w-14 rounded-full bg-surface/45" />
          </div>
          <span
            data-anim="flash"
            style={at(LINK_AT, 1600)}
            className="absolute -inset-1 rounded-md ring-3 ring-harbour/40"
          />
        </div>

        <div className="relative mt-2 pr-10">
          <span
            data-anim="flash"
            style={at(EXIT_AT, 1600)}
            className="absolute inset-y-0 right-8 left-[-2px] rounded-sm bg-harbour-tint ring-2 ring-harbour/35"
          />
          <p className="relative flex min-h-11 items-center justify-center font-semibold text-harbour underline underline-offset-2">
            Go back
          </p>
          <Pin n={5} at={EXIT_AT} className="absolute top-1.5 right-0" />
        </div>
      </div>
    </Device>
  );
}

export function ConfirmationAnatomy() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)] md:gap-14">
      <div data-anim="rise" style={at(0, 700)}>
        <Phone />
      </div>

      <ol className="space-y-6">
        {callouts.map((c, i) => (
          <li
            key={c.title}
            data-anim="focus"
            style={at(NOTE_AT[i])}
            className="flex gap-4"
          >
            <Pin n={i + 1} static />
            <div>
              <p className="text-[1.1875rem] font-semibold text-ink">
                {c.title}
              </p>
              <p className="mt-1 text-copy">{c.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
