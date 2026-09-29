import type { ReactNode } from "react";
import { CheckIcon, CrossIcon } from "../../_components/icons";
import { Bar, step } from "../../_components/diagram-kit";

const services = ["A booking service", "A payments service", "A community service"];

const without = [
  { label: "Submit", button: "bg-muted text-surface rounded-none", align: "justify-start" },
  { label: "Go", button: "bg-surface text-ink ring-2 ring-ink rounded-full", align: "justify-end" },
  { label: "OK", button: "bg-harbour-tint text-harbour-deep rounded-lg", align: "justify-center" },
];

function Screen({
  label,
  buttonClass,
  align,
}: {
  label: string;
  buttonClass: string;
  align: string;
}) {
  return (
    <div className="flex min-h-40 flex-col rounded-md bg-surface p-3 ring-1 ring-hairline">
      <Bar className="w-3/4" strong />
      <div className="mt-2.5 space-y-1.5">
        <Bar className="w-full" />
        <Bar className="w-1/2" />
      </div>
      <div className={`mt-auto flex pt-4 ${align}`}>
        <span
          className={`inline-flex min-h-10 items-center px-3 text-label font-semibold ${buttonClass}`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

function Row({
  at,
  good,
  title,
  note,
  children,
}: {
  at: number;
  good: boolean;
  title: string;
  note: string;
  children: ReactNode;
}) {
  return (
    <section data-anim="rise" style={step(at)}>
      <p
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-label font-semibold ${
          good ? "bg-settled-tint text-settled" : "bg-stop-tint text-stop"
        }`}
      >
        {good ? <CheckIcon size={18} /> : <CrossIcon size={18} />}
        {title}
      </p>
      <div aria-hidden="true" className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
        {children}
      </div>
      <div aria-hidden="true" className="mt-2 grid grid-cols-3 gap-2 text-center text-label text-muted sm:gap-4">
        {services.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <p className="mt-4 text-copy">{note}</p>
    </section>
  );
}

export function LearnOnce() {
  return (
    <div className="space-y-10">
      <Row
        at={0}
        good={false}
        title="Without a shared system"
        note="Three products, three different buttons. Each time, you have to stop and work out which one does what."
      >
        {without.map((w) => (
          <Screen key={w.label} label={w.label} buttonClass={w.button} align={w.align} />
        ))}
      </Row>
      <Row
        at={1.5}
        good
        title="With one design system"
        note="The same button, in the same place, saying the same thing. Learn it once, and you know it everywhere."
      >
        {services.map((s) => (
          <Screen
            key={s}
            label="Next"
            buttonClass="bg-harbour text-surface rounded-sm w-full justify-center"
            align="justify-center"
          />
        ))}
      </Row>
    </div>
  );
}
