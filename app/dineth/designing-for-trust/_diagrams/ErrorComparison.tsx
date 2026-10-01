import type { ReactNode } from "react";
import { CheckIcon, CrossIcon, QuestionIcon } from "../../_components/icons";
import { Device, at } from "../../_components/diagram-kit";

// The worries a confusing message leaves behind, and the part of a clear
// message that answers each one. They light up in pairs.
const T = {
  worries: [900, 1400, 1900],
  goodScreen: 2700,
  answers: [3300, 4500, 5700],
};

const pairs = [
  {
    worry: "Has my money gone?",
    answer: "No, and it says so first.",
  },
  {
    worry: "Did I do something wrong?",
    answer: "It explains why, without blaming you.",
  },
  {
    worry: "What am I meant to do now?",
    answer: "Two clear ways to carry on.",
  },
];

function Verdict({
  tone,
  time,
  children,
}: {
  tone: "stop" | "settled";
  time: number;
  children: ReactNode;
}) {
  const styles =
    tone === "stop" ? "bg-stop-tint text-stop" : "bg-settled-tint text-settled";
  return (
    <p
      data-anim="fade"
      style={at(time)}
      className={`mb-5 inline-flex self-start items-center gap-2 rounded-full px-3 py-1 text-label font-semibold ${styles}`}
    >
      {tone === "stop" ? <CrossIcon size={18} /> : <CheckIcon size={18} />}
      {children}
    </p>
  );
}

// A part of the clear message, briefly highlighted when it answers a worry.
function Answers({ i, children }: { i: number; children: ReactNode }) {
  return (
    <div className="relative">
      <span
        data-anim="flash"
        style={at(T.answers[i], 1500)}
        className="absolute -inset-2 rounded-md ring-2 ring-settled/45"
      />
      <div data-anim="focus" style={at(T.answers[i])}>
        {children}
      </div>
    </div>
  );
}

export function ErrorComparison() {
  return (
    <div className="grid gap-12 md:grid-cols-2 md:gap-10">
      {/* Unhelpful */}
      <div className="flex flex-col">
        <Verdict tone="stop" time={0}>
          Hard to understand
        </Verdict>
        <div data-anim="rise" style={at(0)}>
          <Device className="mx-auto w-full max-w-[320px]" screenClassName="min-h-[430px]">
            <div className="flex size-12 items-center justify-center rounded-full bg-stop-tint text-stop">
              <CrossIcon size={26} />
            </div>
            <p className="mt-5 text-[1.375rem] font-bold text-ink">Error 402</p>
            <p className="mt-2 text-copy">
              Transaction declined.
              <br />
              Code: DO_NOT_HONOR
            </p>
            <div className="mt-10 flex min-h-11 items-center justify-center rounded-sm bg-muted font-semibold text-surface">
              OK
            </div>
          </Device>
        </div>

        <p className="mt-8 font-semibold text-ink">What you&apos;re left wondering</p>
        <ul className="mt-3 space-y-3">
          {pairs.map((p, i) => (
            <li
              key={p.worry}
              data-anim="rise"
              style={at(T.worries[i])}
              className="flex items-start gap-3 rounded-md bg-wattle-tint px-4 py-3"
            >
              <QuestionIcon size={24} className="mt-0.5 shrink-0 text-wattle" />
              <span>
                <span className="block text-[1.125rem] text-ink">{p.worry}</span>
                <span className="block text-label text-wattle">
                  The message doesn&apos;t say.
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Reassuring */}
      <div className="flex flex-col">
        <Verdict tone="settled" time={T.goodScreen}>
          What we show instead
        </Verdict>
        <div data-anim="rise" style={at(T.goodScreen)}>
          <Device className="mx-auto w-full max-w-[320px]" screenClassName="min-h-[430px]">
            <p className="font-serif text-[1.3125rem] leading-snug font-semibold text-ink">
              Your payment hasn&apos;t gone through
            </p>
            <div className="mt-4 space-y-4">
              <Answers i={0}>
                <p className="flex items-start gap-2 rounded-sm bg-settled-tint px-3 py-2.5 font-semibold text-settled">
                  <CheckIcon size={20} className="mt-0.5 shrink-0" />
                  No money has left your account.
                </p>
              </Answers>
              <Answers i={1}>
                <p className="text-copy">
                  Your bank didn&apos;t approve this card payment. This can
                  happen with a new card or a larger amount than usual.
                </p>
              </Answers>
              <Answers i={2}>
                <div className="space-y-2 font-semibold">
                  <div className="flex min-h-11 items-center justify-center rounded-sm bg-harbour text-surface">
                    Try another card
                  </div>
                  <div className="flex min-h-11 items-center justify-center rounded-sm border border-hairline-strong text-ink">
                    Pay from your bank account
                  </div>
                </div>
              </Answers>
            </div>
          </Device>
        </div>

        <p className="mt-8 font-semibold text-ink">Each worry, answered</p>
        <ul className="mt-3 space-y-3">
          {pairs.map((p, i) => (
            <li
              key={p.worry}
              data-anim="focus"
              style={at(T.answers[i])}
              className="flex items-start gap-3 rounded-md bg-surface px-4 py-3"
            >
              <span
                data-anim="pop"
                style={at(T.answers[i])}
                className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-settled text-surface"
              >
                <CheckIcon size={18} />
              </span>
              <span>
                <span className="block text-[1.125rem] text-ink">{p.worry}</span>
                <span className="block text-label text-settled">{p.answer}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
