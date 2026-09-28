import type { CSSProperties, ReactNode } from "react";
import { Pin, step } from "./shared";

const callouts = [
  {
    title: "Who you're paying",
    body: "The business name, written the way you know it. No mystery company names.",
  },
  {
    title: "Exactly what for",
    body: "The berth, the dates and the number of nights, so you can spot a mistake before it costs you.",
  },
  {
    title: "Every fee, even when it's zero",
    body: "We show the card fee as $0.00 rather than leaving it out. Nothing turns up later.",
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

function Row({
  label,
  value,
  pin,
  strong = false,
}: {
  label: string;
  value: ReactNode;
  pin?: number;
  strong?: boolean;
}) {
  return (
    <div className="relative flex items-baseline justify-between gap-4 py-2.5 pr-9">
      <span className={strong ? "font-semibold text-ink" : "text-muted"}>
        {label}
      </span>
      <span
        className={`text-right ${strong ? "text-[1.1875rem] font-bold text-ink" : "text-ink"}`}
      >
        {value}
      </span>
      {pin && <Pin n={pin} className="absolute top-1.5 right-0" />}
    </div>
  );
}

export function ConfirmationAnatomy() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)] md:gap-14">
      {/* Example screen */}
      <div
        data-anim="rise"
        style={step(0)}
        className="mx-auto w-full max-w-[340px] rounded-[26px] bg-surface p-3 shadow-device"
      >
        <div className="rounded-[18px] border border-hairline px-5 pt-5 pb-6 text-label">
          <p className="font-semibold text-harbour">harbr</p>
          <p className="mt-3 font-serif text-[1.375rem] font-semibold leading-tight text-ink">
            Check before you pay
          </p>

          <div className="mt-4 divide-y divide-hairline">
            <Row label="Paying" value="Harbourside Marina" pin={1} />
            <Row
              label="For"
              value={
                <>
                  Berth C14, 3 nights
                  <br />
                  <span className="text-muted">12 to 15 Oct</span>
                </>
              }
              pin={2}
            />
            <Row label="Berth fee" value="$186.00" />
            <Row label="Card fee" value="$0.00" pin={3} />
            <Row label="Total" value="$186.00" strong pin={4} />
          </div>

          <p className="mt-3 text-muted">Paying with Visa ending 4821</p>

          <div className="relative mt-5">
            <div className="flex min-h-12 items-center justify-center rounded-sm bg-harbour px-4 font-semibold text-surface">
              Pay $186.00
            </div>
          </div>
          <div className="relative mt-2 pr-9">
            <p className="flex min-h-11 items-center justify-center font-semibold text-harbour underline underline-offset-2">
              Go back
            </p>
            <Pin n={5} className="absolute top-2 right-0" />
          </div>
        </div>
      </div>

      {/* Callouts */}
      <ol className="space-y-6">
        {callouts.map((c, i) => (
          <li
            key={c.title}
            data-anim="rise"
            style={step(i + 1) as CSSProperties}
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
