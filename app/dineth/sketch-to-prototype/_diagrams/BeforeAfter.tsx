import type { ReactNode } from "react";
import { BankIcon, CardIcon, CheckIcon, LockIcon } from "../../_components/icons";
import { Device, Pin, at } from "../../_components/diagram-kit";

// One screen, four edits. Each region of the early wireframe is swapped for
// its improved version on a beat, while the matching note lights up.
const T = [1400, 2900, 4400, 5900];
const SWAP = 600;

const changes = [
  {
    title: "A plain question instead of jargon",
    body: "“Payment instrument” became “How would you like to pay?”",
  },
  {
    title: "Bigger choices, easier to tap",
    body: "Small round buttons became large options with a picture and a name.",
  },
  {
    title: "Reassurance where people paused",
    body: "A short line explains nothing is charged until you confirm.",
  },
  {
    title: "One clear next step",
    body: "A single, large button that says what happens next.",
  },
];

// Both versions of a region sit in the same box, so the swap never shifts the layout.
function Region({
  n,
  className = "",
  before,
  after,
}: {
  n: number;
  className?: string;
  before: ReactNode;
  after: ReactNode;
}) {
  return (
    <div className={`relative grid pr-10 ${className}`}>
      <div className="[grid-area:1/1]">{after}</div>
      <div
        data-anim="swap-out"
        style={at(T[n - 1], SWAP)}
        className="[grid-area:1/1] bg-surface"
      >
        {before}
      </div>
      <Pin n={n} at={T[n - 1] + 150} className="absolute top-0 right-0" />
    </div>
  );
}

function Option({
  icon,
  label,
  selected = false,
}: {
  icon: ReactNode;
  label: string;
  selected?: boolean;
}) {
  return (
    <div
      className={`flex min-h-14 items-center gap-3 rounded-md px-4 py-3 ${
        selected
          ? "bg-magenta-tint text-ink ring-2 ring-magenta"
          : "text-ink ring-1 ring-hairline-strong"
      }`}
    >
      <span className="text-magenta">{icon}</span>
      <span className="flex-1 font-semibold">{label}</span>
      {selected && (
        <span className="flex size-6 items-center justify-center rounded-full bg-magenta text-surface">
          <CheckIcon size={16} />
        </span>
      )}
    </div>
  );
}

function Phone() {
  return (
    <Device className="mx-auto w-full max-w-[340px]">
      <div aria-hidden="true">
        {/* 1. The question */}
        <Region
          n={1}
          className="h-[3.75rem] content-start"
          before={<p className="pt-1 text-muted">Payment instrument</p>}
          after={
            <p className="font-heading text-[1.375rem] leading-tight font-semibold text-ink">
              How would you like to pay?
            </p>
          }
        />

        {/* 2. The choices */}
        <Region
          n={2}
          className="mt-4 h-[8.25rem] content-start"
          before={
            <div className="space-y-3 pt-1">
              {["Card", "Account"].map((o) => (
                <div key={o} className="flex items-center gap-2 text-muted">
                  <span className="size-4 rounded-full border-2 border-hairline-strong" />
                  {o}
                </div>
              ))}
            </div>
          }
          after={
            <div className="space-y-3">
              <Option icon={<CardIcon size={24} />} label="Card" selected />
              <Option icon={<BankIcon size={24} />} label="Bank account" />
            </div>
          }
        />

        {/* 3. The reassurance */}
        <Region
          n={3}
          className="mt-4 h-[4.25rem] content-start"
          before={
            <div className="flex h-14 items-center justify-center rounded-sm border-2 border-dashed border-hairline-strong text-muted">
              Terms
            </div>
          }
          after={
            <p className="flex items-start gap-2 pt-1 text-copy">
              <LockIcon size={20} className="mt-0.5 shrink-0 text-magenta" />
              Nothing is charged until you confirm.
            </p>
          }
        />

        {/* 4. The next step */}
        <Region
          n={4}
          className="mt-3 h-12 content-center"
          before={
            <div className="ml-auto flex h-9 w-24 items-center justify-center rounded-sm border-2 border-hairline-strong text-muted">
              Submit
            </div>
          }
          after={
            <div className="flex min-h-12 items-center justify-center rounded-sm bg-magenta font-semibold text-surface">
              Continue
            </div>
          }
        />
      </div>
    </Device>
  );
}

export function BeforeAfter() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)] md:gap-14">
      <div data-anim="rise" style={at(0, 700)}>
        {/* The label swaps with the screen. */}
        <p className="relative mx-auto mb-5 grid w-full max-w-[340px] justify-items-start">
          <span
            data-anim="fade"
            style={at(T[3] + 100, SWAP)}
            className="inline-flex rounded-full bg-magenta-tint px-3 py-1 text-label font-semibold text-magenta-deep [grid-area:1/1]"
          >
            After testing
          </span>
          <span
            data-anim="swap-out"
            style={at(T[3], SWAP)}
            className="inline-flex rounded-full bg-surface px-3 py-1 text-label font-semibold text-muted ring-1 ring-hairline-strong [grid-area:1/1]"
          >
            Early wireframe
          </span>
        </p>
        <Phone />
      </div>

      <ol className="space-y-6">
        {changes.map((c, i) => (
          <li
            key={c.title}
            data-anim="focus"
            style={at(T[i])}
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
