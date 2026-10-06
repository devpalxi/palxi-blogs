import type { ReactNode } from "react";
import { at } from "../../_components/diagram-kit";

// Each principle gets a tiny demonstration of what it feels like.
const GAP = 2300;
const t = (i: number) => 400 + i * GAP;

const grid = "[grid-area:1/1]";

// Before and after share one spot; the "after" is the finished state.
function Swap({
  time,
  before,
  after,
}: {
  time: number;
  before: ReactNode;
  after: ReactNode;
}) {
  return (
    <div aria-hidden="true" className="grid place-items-center">
      <div className={grid}>{after}</div>
      <div data-anim="swap-out" style={at(time, 600)} className={`${grid} place-items-center bg-shallows`}>
        {before}
      </div>
    </div>
  );
}

function See({ time }: { time: number }) {
  return (
    <Swap
      time={time}
      before={
        <div className="space-y-2.5">
          <span className="block h-2 w-40 rounded-full bg-hairline-strong" />
          <span className="block h-2 w-28 rounded-full bg-hairline-strong" />
          <span className="block h-2 w-36 rounded-full bg-hairline-strong" />
        </div>
      }
      after={
        <div className="text-center">
          <p className="font-heading text-[1.5rem] leading-tight font-semibold text-ink">
            Large, clear text
          </p>
          <p className="mt-1 text-label text-copy">With strong contrast</p>
        </div>
      }
    />
  );
}

function Use({ time }: { time: number }) {
  return (
    <Swap
      time={time}
      before={
        <span className="flex size-7 items-center justify-center rounded-full border-2 border-hairline-strong" />
      }
      after={
        <span className="relative">
          <span className="flex h-12 w-56 items-center justify-center rounded-sm bg-magenta font-semibold text-surface">
            Pay
          </span>
          <span
            data-anim="ripple"
            style={at(time + 900)}
            className="absolute -inset-1.5 rounded-md ring-4 ring-magenta/35"
          />
        </span>
      }
    />
  );
}

function Understand({ time }: { time: number }) {
  return (
    <Swap
      time={time}
      before={
        <div className="text-center">
          <p className="text-[1.25rem] font-bold text-ink">Error 402</p>
          <p className="text-label text-muted">DO_NOT_HONOR</p>
        </div>
      }
      after={
        <div className="text-center">
          <p className="text-[1.1875rem] leading-snug font-semibold text-ink">
            Your payment hasn&apos;t gone through
          </p>
          <p className="mt-1 text-label text-magenta">No money has left your account.</p>
        </div>
      }
    />
  );
}

function Work({ time }: { time: number }) {
  return (
    <div aria-hidden="true" className="flex items-center gap-4">
      <span className="relative">
        <span className="flex h-11 w-24 items-center justify-center rounded-sm bg-magenta font-semibold text-surface">
          Pay
        </span>
        <span
          data-anim="ripple"
          style={at(time + 200)}
          className="absolute -inset-1.5 rounded-md ring-4 ring-magenta/35"
        />
      </span>
      <span className="flex items-end gap-1" data-anim="pop" style={at(time + 700, 400)}>
        {[10, 18, 26, 18, 10].map((h, i) => (
          <span
            key={i}
            data-anim="grow-up"
            style={{ ...at(time + 800 + i * 90, 500), height: h }}
            className="w-1.5 rounded-full bg-magenta-chart"
          />
        ))}
      </span>
      <span
        data-anim="pop"
        style={at(time + 900)}
        className="rounded-lg rounded-bl-sm bg-surface px-4 py-2.5 font-semibold text-ink ring-1 ring-hairline"
      >
        &ldquo;Button. Pay.&rdquo;
      </span>
    </div>
  );
}

const principles = [
  {
    letter: "P",
    name: "Perceivable",
    plain: "You can see or hear it",
    examples:
      "Large, high-contrast text. Pictures that are described in words. Captions on videos.",
    demo: See,
  },
  {
    letter: "O",
    name: "Operable",
    plain: "You can use it",
    examples:
      "Big buttons that are easy to tap. Works with a keyboard or voice control. No racing a timer.",
    demo: Use,
  },
  {
    letter: "U",
    name: "Understandable",
    plain: "You can make sense of it",
    examples:
      "Plain words. Steps that behave the way you expect. Errors that say how to fix them.",
    demo: Understand,
  },
  {
    letter: "R",
    name: "Robust",
    plain: "It works with your tools",
    examples:
      "Reads properly with screen readers, magnifiers and other assistive technology.",
    demo: Work,
  },
];

export function FourPrinciples() {
  return (
    <ol className="grid gap-5 md:grid-cols-2">
      {principles.map((p, i) => {
        const Demo = p.demo;
        return (
          <li
            key={p.name}
            data-anim="rise"
            style={at(t(i) - 300, 600)}
            className="flex flex-col rounded-lg bg-surface p-6"
          >
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                data-anim="pop"
                style={at(t(i) - 200)}
                className="flex size-12 shrink-0 items-center justify-center rounded-md bg-magenta font-heading text-[1.625rem] font-semibold text-surface"
              >
                {p.letter}
              </span>
              <div>
                <p className="text-[1.1875rem] font-semibold text-ink">{p.name}</p>
                <p className="text-label text-muted">{p.plain}</p>
              </div>
            </div>

            <div className="mt-5 grid h-28 place-items-center overflow-hidden rounded-md bg-shallows">
              <Demo time={t(i) + 300} />
            </div>

            <p className="mt-5 text-copy">{p.examples}</p>
          </li>
        );
      })}
    </ol>
  );
}
