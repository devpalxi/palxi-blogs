import type { ReactNode } from "react";
import { CheckIcon } from "../../_components/icons";
import { Bar, Pin, at } from "../../_components/diagram-kit";

// The receipt feeds out, gets its "received" stamp, then each sign of a
// trustworthy receipt is pointed out in turn.
const PRINT_AT = 300;
const PRINT = 1900;
const STAMP_AT = PRINT_AT + PRINT + 100;
const SIGNAL_AT = [0, 1, 2, 3, 4].map((i) => STAMP_AT + 600 + i * 750);

const signals = [
  {
    title: "The same name and look",
    body: "It matches the screen you paid on. If a receipt suddenly looks different, that's worth a second look.",
  },
  {
    title: "A reference number",
    body: "Something you can quote if you ever need help, so nobody has to guess which payment you mean.",
  },
  {
    title: "Date and time, in your time zone",
    body: "Local time, not a confusing overseas clock.",
  },
  {
    title: "Every charge, itemised",
    body: "The same amounts you agreed to before you paid. No surprises.",
  },
  {
    title: "Only the last four digits",
    body: "Enough to know which card or account you used. The full number never appears.",
  },
];

function Line({
  children,
  pin,
  className = "",
}: {
  children: ReactNode;
  pin: number;
  className?: string;
}) {
  return (
    <div className={`relative pr-10 ${className}`}>
      {children}
      <Pin n={pin} at={SIGNAL_AT[pin - 1]} className="absolute -top-1 right-0" />
    </div>
  );
}

function Field({ label, bar }: { label: string; bar: string }) {
  return (
    <div className="flex items-center justify-between gap-3 py-1">
      <span className="text-muted">{label}</span>
      <Bar className={bar} />
    </div>
  );
}

function Receipt() {
  return (
    <div aria-hidden="true" className="mx-auto w-full max-w-[350px]">
      {/* The slot the receipt feeds out of. */}
      <div className="relative z-10 rounded-[14px] bg-ink px-3 py-2.5">
        <div className="h-2 rounded-full bg-black/55" />
      </div>
      <div className="-mt-2.5 overflow-hidden px-4 pb-5">
        <div data-anim="print" style={at(PRINT_AT, PRINT)} className="paper-shadow">
          <div className="receipt-edge bg-surface px-6 pt-8 pb-10 text-label">
            <Line pin={1}>
              <div className="flex items-center gap-3">
                <span className="size-9 shrink-0 rounded-sm bg-magenta-tint" />
                <Bar className="w-32" strong />
              </div>
            </Line>

            <p
              data-anim="pop"
              style={at(STAMP_AT, 500)}
              className="mt-5 flex items-center gap-2 rounded-sm bg-magenta-tint px-3 py-2 font-semibold text-magenta"
            >
              <CheckIcon size={20} />
              Payment received
            </p>

            <div className="mt-5 space-y-2 border-t border-dashed border-hairline-strong pt-4">
              <Line pin={2}>
                <Field label="Reference" bar="w-24" />
              </Line>
              <Line pin={3}>
                <Field label="Date and time" bar="w-16" />
              </Line>
            </div>

            <Line
              pin={4}
              className="mt-4 border-t border-dashed border-hairline-strong pt-4"
            >
              <Field label="Item" bar="w-16" />
              <Field label="Fees" bar="w-12" />
              <div className="mt-1 flex items-center justify-between gap-3 py-1">
                <span className="font-semibold text-ink">Total paid</span>
                <Bar className="w-16" strong />
              </div>
            </Line>

            <Line
              pin={5}
              className="mt-4 border-t border-dashed border-hairline-strong pt-4"
            >
              <p className="text-ink">Paid with card ending ••••</p>
            </Line>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReceiptSignals() {
  return (
    <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,350px)] md:gap-14">
      <ol className="order-2 space-y-6 md:order-1 md:pt-10">
        {signals.map((s, i) => (
          <li
            key={s.title}
            data-anim="focus"
            style={at(SIGNAL_AT[i])}
            className="flex gap-4"
          >
            <Pin n={i + 1} static />
            <div>
              <p className="text-[1.1875rem] font-semibold text-ink">
                {s.title}
              </p>
              <p className="mt-1 text-copy">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="order-1 md:order-2">
        <Receipt />
      </div>
    </div>
  );
}
