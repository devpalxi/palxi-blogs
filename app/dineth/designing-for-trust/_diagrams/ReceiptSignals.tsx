import type { ReactNode } from "react";
import { CheckIcon } from "../../_components/icons";
import { Bar, Pin, step } from "./shared";

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
  pin?: number;
  className?: string;
}) {
  return (
    <div className={`relative pr-10 ${className}`}>
      {children}
      {pin && <Pin n={pin} className="absolute top-0 right-0" />}
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

export function ReceiptSignals() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,340px)] md:gap-14">
      <ol className="order-2 space-y-6 md:order-1">
        {signals.map((s, i) => (
          <li
            key={s.title}
            data-anim="rise"
            style={step(i + 1)}
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

      <div
        data-anim="rise"
        style={step(0)}
        aria-hidden="true"
        className="order-1 mx-auto w-full max-w-[340px] rounded-md bg-surface px-6 pt-6 pb-7 text-label shadow-device md:order-2"
      >
        <Line pin={1}>
          <div className="flex items-center gap-3">
            <span className="size-9 shrink-0 rounded-sm bg-harbour-tint" />
            <Bar className="w-32" strong />
          </div>
        </Line>

        <p className="mt-5 flex items-center gap-2 rounded-sm bg-settled-tint px-3 py-2 font-semibold text-settled">
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
          <p className="text-ink">Paid with card ending •••• </p>
        </Line>
      </div>
    </div>
  );
}
