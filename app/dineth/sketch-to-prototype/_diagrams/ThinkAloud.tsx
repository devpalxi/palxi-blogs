import type { CSSProperties } from "react";
import { CheckIcon, EyeIcon, QuestionIcon } from "../../_components/icons";
import { Bar, Device, at } from "../../_components/diagram-kit";

// A tester's finger wanders the screen while they think out loud. We don't
// help; we write down every pause and question.
const START = 700;
const TRAVEL = 4600;
const PAUSE_AT = START + TRAVEL; // the finger reaches "Continue" and hesitates

// Positions are inside a fixed 234 x 304 screen area (see Screen below).
const TOUCH_PATH =
  "M215 200 C190 130 150 90 118 64 C100 90 110 120 130 132 C150 120 120 90 100 66 C120 150 150 230 150 272";

const thoughts = [
  { text: "Right, I want to change how I pay. Where would that be?", at: START },
  { text: "Is “Continue” going to take my money straight away?", at: 3300 },
  { text: "Oh, it says nothing's charged yet. Good, that's clear.", at: PAUSE_AT + 800 },
];

const notes = [
  { text: "Looked in two places for “change how I pay”.", at: 2600 },
  { text: "Paused before pressing “Continue”.", at: PAUSE_AT + 200 },
  { text: "Relaxed once they read the reassurance line.", at: PAUSE_AT + 1300 },
];

function Screen() {
  return (
    <div aria-hidden="true" className="relative h-[304px] w-[234px]">
      <Bar className="w-32" strong />

      <div className="absolute inset-x-0 top-9 h-14 rounded-md ring-1 ring-hairline-strong" />
      <div className="absolute inset-x-0 top-[104px] h-14 rounded-md ring-1 ring-hairline-strong" />

      <div className="absolute inset-x-0 top-[172px] h-14">
        <span
          data-anim="flash"
          style={at(PAUSE_AT + 700, 1800)}
          className="absolute -inset-2 rounded-md bg-settled-tint ring-2 ring-settled/40"
        />
        <div className="relative space-y-2 pt-3">
          <Bar className="w-48" />
          <Bar className="w-36" />
        </div>
      </div>

      <div className="absolute inset-x-0 top-[248px] h-12 rounded-sm bg-harbour" />

      {/* The "I'm not sure" moment. */}
      <span
        data-anim="pop"
        style={at(PAUSE_AT)}
        className="absolute top-[226px] right-0 flex size-9 items-center justify-center rounded-full bg-wattle-tint text-wattle ring-2 ring-surface"
      >
        <QuestionIcon size={22} />
      </span>
      <span
        data-anim="ripple"
        style={at(PAUSE_AT)}
        className="absolute top-[248px] left-[calc(50%-24px)] size-12 rounded-full ring-4 ring-harbour/40"
      />

      {/* The finger. Hidden at rest; it only exists while it moves. */}
      <span
        data-anim="travel"
        className="absolute top-0 left-0 size-[34px] rounded-full bg-harbour/20 opacity-0 ring-2 ring-harbour"
        style={at(START, TRAVEL, {
          offsetPath: `path("${TOUCH_PATH}")`,
          "--ease": "linear",
        } as CSSProperties)}
      />
    </div>
  );
}

export function ThinkAloud() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[292px_minmax(0,1fr)] md:gap-14">
      <div data-anim="rise" style={at(0, 700)}>
        <Device
          className="mx-auto w-[292px] max-w-full"
          screenClassName="flex justify-center"
        >
          <Screen />
        </Device>
      </div>

      <div>
        <p className="text-label font-semibold text-muted">
          What a tester says out loud
        </p>
        <ul className="mt-4 space-y-4">
          {thoughts.map((t) => (
            <li
              key={t.text}
              data-anim="pop"
              style={at(t.at)}
              className="max-w-[26rem] rounded-lg rounded-bl-sm bg-surface px-5 py-4 text-[1.125rem] text-ink ring-1 ring-hairline"
            >
              &ldquo;{t.text}&rdquo;
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-md bg-harbour-tint px-5 py-5">
          <p className="flex items-center gap-3 font-semibold text-ink">
            <EyeIcon size={24} className="shrink-0 text-harbour-deep" />
            Meanwhile, we watch and write it down
          </p>
          <p className="mt-2 text-copy">
            We don&apos;t jump in to help. Every pause and question shows us
            something to make clearer.
          </p>
          <ul className="mt-4 space-y-2.5">
            {notes.map((n) => (
              <li
                key={n.text}
                data-anim="rise"
                style={at(n.at)}
                className="flex items-start gap-3 text-label text-ink"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-harbour text-surface">
                  <CheckIcon size={16} />
                </span>
                {n.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
