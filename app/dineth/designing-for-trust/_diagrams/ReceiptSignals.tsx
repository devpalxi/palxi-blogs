import type { ReactNode } from "react";
import { CheckIcon, LockIcon } from "../../_components/icons";
import { Pin, step } from "./shared";

const signals = [
  {
    title: "The same name and colours",
    body: "The receipt looks like the screen you paid on. If it suddenly looks different, that's worth a second look.",
  },
  {
    title: "A reference number",
    body: "Something you can quote if you ever ring for help, so nobody has to guess which payment you mean.",
  },
  {
    title: "Date and time, in your time zone",
    body: "Shown in Darwin time for a Darwin marina, not a confusing overseas clock.",
  },
  {
    title: "Every charge, itemised",
    body: "The same amounts you agreed to on the confirmation screen. No surprises.",
  },
  {
    title: "Only the last four digits",
    body: "Enough to know which card you used. Your full card number never appears.",
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

export function ReceiptSignals() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,360px)] md:gap-14">
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
        className="order-1 mx-auto w-full max-w-[360px] rounded-md bg-surface px-6 pt-6 pb-7 text-label shadow-device md:order-2"
      >
        <Line pin={1}>
          <p className="font-semibold text-harbour">harbr</p>
          <p className="font-serif text-[1.25rem] font-semibold text-ink">
            Harbourside Marina
          </p>
        </Line>

        <p className="mt-4 flex items-center gap-2 rounded-sm bg-settled-tint px-3 py-2 font-semibold text-settled">
          <CheckIcon size={20} />
          Payment received
        </p>

        <div className="mt-5 space-y-3 border-t border-dashed border-hairline-strong pt-5">
          <Line pin={2}>
            <p className="text-muted">Receipt number</p>
            <p className="font-semibold text-ink">HB-20481</p>
          </Line>
          <Line pin={3}>
            <p className="text-muted">Paid</p>
            <p className="text-ink">12 October 2026, 2:14 pm (Darwin time)</p>
          </Line>
        </div>

        <Line pin={4} className="mt-5 border-t border-dashed border-hairline-strong pt-5">
          <div className="space-y-1.5">
            <p className="flex justify-between gap-3 text-ink">
              <span>Berth C14, 3 nights</span>
              <span>$186.00</span>
            </p>
            <p className="flex justify-between gap-3 text-ink">
              <span>Card fee</span>
              <span>$0.00</span>
            </p>
            <p className="flex justify-between gap-3 pt-1.5 font-bold text-ink">
              <span>Total paid</span>
              <span>$186.00</span>
            </p>
          </div>
        </Line>

        <Line pin={5} className="mt-5 border-t border-dashed border-hairline-strong pt-5">
          <p className="flex items-center gap-2 text-ink">
            <LockIcon size={20} className="text-harbour" />
            Visa ending 4821
          </p>
        </Line>
      </div>
    </div>
  );
}
