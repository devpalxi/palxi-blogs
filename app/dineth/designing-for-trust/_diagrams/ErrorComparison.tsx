import type { ReactNode } from "react";
import { CheckIcon, CrossIcon, QuestionIcon } from "../../_components/icons";
import { step } from "./shared";

const worries = [
  "Has my money gone?",
  "Did I do something wrong?",
  "What am I meant to do now?",
];

const answers = [
  "Plain words, no codes",
  "Says what happened to your money",
  "Gives clear next steps",
  "Doesn't blame you",
];

function Screen({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[22px] bg-surface p-2.5 shadow-device">
      <div className="min-h-[300px] rounded-[14px] border border-hairline px-5 py-6 text-label">
        {children}
      </div>
    </div>
  );
}

export function ErrorComparison() {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-8">
      {/* Unhelpful */}
      <div>
        <p
          data-anim="fade"
          style={step(0)}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-stop-tint px-3 py-1 text-label font-semibold text-stop"
        >
          <CrossIcon size={18} />
          Hard to understand
        </p>
        <div data-anim="rise" style={step(0)}>
          <Screen>
            <div className="flex size-11 items-center justify-center rounded-full bg-stop-tint text-stop">
              <CrossIcon size={24} />
            </div>
            <p className="mt-4 text-[1.25rem] font-bold text-ink">Error 402</p>
            <p className="mt-2 text-copy">
              Transaction declined.
              <br />
              Code: DO_NOT_HONOR
            </p>
            <div className="mt-8 flex min-h-11 items-center justify-center rounded-sm bg-muted font-semibold text-surface">
              OK
            </div>
          </Screen>
        </div>
        <ul className="mt-6 space-y-3" aria-label="What a reader is left wondering">
          {worries.map((w, i) => (
            <li
              key={w}
              data-anim="rise"
              style={step(1 + i * 0.6)}
              className="flex items-center gap-3 text-[1.125rem] text-ink"
            >
              <QuestionIcon size={24} className="shrink-0 text-wattle" />
              {w}
            </li>
          ))}
        </ul>
      </div>

      {/* Reassuring */}
      <div>
        <p
          data-anim="fade"
          style={step(3)}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-settled-tint px-3 py-1 text-label font-semibold text-settled"
        >
          <CheckIcon size={18} />
          What we show instead
        </p>
        <div data-anim="rise" style={step(3)}>
          <Screen>
            <p className="font-serif text-[1.3125rem] leading-snug font-semibold text-ink">
              Your payment hasn&apos;t gone through
            </p>
            <p
              data-anim="fade"
              style={step(4)}
              className="mt-3 flex items-start gap-2 rounded-sm bg-settled-tint px-3 py-2.5 font-semibold text-settled"
            >
              <CheckIcon size={20} className="mt-0.5 shrink-0" />
              No money has left your account.
            </p>
            <p data-anim="fade" style={step(4.6)} className="mt-3 text-copy">
              Your bank didn&apos;t approve this card payment. This can happen
              with a new card or a larger amount than usual.
            </p>
            <div data-anim="fade" style={step(5.2)} className="mt-5 space-y-2">
              <div className="flex min-h-11 items-center justify-center rounded-sm bg-harbour font-semibold text-surface">
                Try another card
              </div>
              <div className="flex min-h-11 items-center justify-center rounded-sm border border-hairline-strong font-semibold text-ink">
                Pay from your bank account
              </div>
            </div>
          </Screen>
        </div>
        <ul className="mt-6 space-y-3" aria-label="Why it works">
          {answers.map((a, i) => (
            <li
              key={a}
              data-anim="rise"
              style={step(6 + i * 0.5)}
              className="flex items-center gap-3 text-[1.125rem] text-ink"
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-settled text-surface">
                <CheckIcon size={18} />
              </span>
              {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
