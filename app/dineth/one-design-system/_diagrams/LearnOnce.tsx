import type { ReactNode } from "react";
import { CheckIcon, CrossIcon, QuestionIcon } from "../../_components/icons";
import { Bar, at } from "../../_components/diagram-kit";

// Someone taps the button on each of three services. Without a shared system
// every button is different, so each tap needs a pause to work it out. With
// one design system, every tap just works.
const SLOW = [1300, 2300, 3300];
const FAST = [5600, 5950, 6300];
const NOTE_1 = 4200;
const ROW_2 = 4800;
const NOTE_2 = 6900;

const services = ["A booking service", "A payments service", "A community service"];

const without = [
  { label: "Submit", button: "bg-muted text-surface rounded-none", align: "justify-start" },
  { label: "Go", button: "bg-surface text-ink ring-2 ring-ink rounded-full", align: "justify-end" },
  { label: "OK", button: "bg-magenta-tint text-magenta-deep rounded-lg", align: "justify-center" },
];

// A fingertip that rises onto the button, taps it, then lifts away. It exists
// only while the tap happens, so the finished diagram stays uncluttered.
function Finger({ tap }: { tap: number }) {
  return (
    <span
      aria-hidden="true"
      data-anim="window"
      style={at(tap - 500, 1200)}
      className="pointer-events-none absolute top-1/2 left-1/2 z-10"
    >
      <span data-anim="rise" style={at(tap - 500, 450)} className="block">
        {/* A pointing hand; the index fingertip sits at the button's centre. */}
        <svg
          viewBox="0 0 42 50"
          focusable="false"
          className="-mt-1 -ml-3.5 block h-[50px] w-[42px] drop-shadow-sm"
        >
          <circle
            cx={14}
            cy={5}
            r={9}
            fill="var(--magenta)"
            fillOpacity={0.25}
            stroke="var(--magenta)"
            strokeWidth={2}
          />
          <path
            d="M10 25 V7 a4 4 0 0 1 8 0 V17 a3.5 3.5 0 0 1 7 0 a3.5 3.5 0 0 1 7 0 a3.5 3.5 0 0 1 7 0 V31 Q39 45 28 46 H18 Q12 46 9 38 L3.5 29.5 Q2.5 26.5 5.5 25.5 Q8 25.5 10 28.5 Z"
            fill="var(--paper-white)"
            stroke="var(--deep-ink)"
            strokeWidth={2.2}
            strokeLinejoin="round"
          />
          <path
            d="M25 19 V27 M32 19 V27"
            fill="none"
            stroke="var(--deep-ink)"
            strokeWidth={1.8}
            strokeLinecap="round"
          />
        </svg>
      </span>
    </span>
  );
}

function Screen({
  label,
  buttonClass,
  align,
  tap,
  doubt,
}: {
  label: string;
  buttonClass: string;
  align: string;
  tap: number;
  doubt: boolean;
}) {
  return (
    <div className="relative flex min-h-40 flex-col rounded-md bg-surface p-3 ring-1 ring-hairline">
      <Bar className="w-3/4" strong />
      <div className="mt-2.5 space-y-1.5">
        <Bar className="w-full" />
        <Bar className="w-1/2" />
      </div>
      <div className={`mt-auto flex pt-4 ${align}`}>
        <span
          className={`relative inline-flex min-h-10 items-center px-3 text-label font-semibold ${buttonClass}`}
        >
          {label}
          <span
            data-anim="ripple"
            style={at(tap)}
            className="absolute -inset-1.5 rounded-md ring-4 ring-magenta/40"
          />
          <Finger tap={tap} />
        </span>
      </div>

      <span
        data-anim="pop"
        style={at(tap + (doubt ? 250 : 150), 450)}
        className={`absolute -top-3.5 right-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-label font-semibold ring-2 ring-surface ${
          doubt ? "bg-wattle-tint text-wattle" : "bg-magenta-tint text-magenta"
        }`}
      >
        {doubt ? <QuestionIcon size={18} /> : <CheckIcon size={18} />}
        {doubt ? "Which one?" : "Got it"}
      </span>
    </div>
  );
}

function Row({
  time,
  good,
  title,
  note,
  noteAt,
  children,
}: {
  time: number;
  good: boolean;
  title: string;
  note: string;
  noteAt: number;
  children: ReactNode;
}) {
  return (
    <section>
      <p
        data-anim="rise"
        style={at(time, 600)}
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-label font-semibold ${
          good ? "bg-magenta-tint text-magenta" : "bg-stop-tint text-stop"
        }`}
      >
        {good ? <CheckIcon size={18} /> : <CrossIcon size={18} />}
        {title}
      </p>
      <div
        aria-hidden="true"
        data-anim="rise"
        style={at(time + 150, 600)}
        className="mt-6 grid grid-cols-3 gap-4"
      >
        {children}
      </div>
      <div aria-hidden="true" className="mt-2 grid grid-cols-3 gap-4 text-center text-label text-muted">
        {services.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <p data-anim="rise" style={at(noteAt, 600)} className="mt-4 text-copy">
        {note}
      </p>
    </section>
  );
}

export function LearnOnce() {
  return (
    <div className="space-y-10">
      <Row
        time={0}
        good={false}
        title="Without a shared system"
        note="Three products, three different buttons. Each time, you have to stop and work out which one does what."
        noteAt={NOTE_1}
      >
        {without.map((w, i) => (
          <Screen
            key={w.label}
            label={w.label}
            buttonClass={w.button}
            align={w.align}
            tap={SLOW[i]}
            doubt
          />
        ))}
      </Row>

      <Row
        time={ROW_2}
        good
        title="With one design system"
        note="The same button, in the same place, saying the same thing. Learn it once, and you know it everywhere."
        noteAt={NOTE_2}
      >
        {services.map((s, i) => (
          <Screen
            key={s}
            label="Next"
            buttonClass="bg-magenta text-surface rounded-sm w-full justify-center"
            align="justify-center"
            tap={FAST[i]}
            doubt={false}
          />
        ))}
      </Row>
    </div>
  );
}
