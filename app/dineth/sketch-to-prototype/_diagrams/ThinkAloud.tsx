import { EyeIcon } from "../../_components/icons";
import { Bar, step } from "../../_components/diagram-kit";

const thoughts = [
  "Right, I want to change how I pay. Where would that be?",
  "Is “Continue” going to take my money straight away?",
  "Oh, it says nothing's charged yet. Good, that's clear.",
];

export function ThinkAloud() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:gap-14">
      <div
        data-anim="rise"
        style={step(0)}
        aria-hidden="true"
        className="mx-auto w-full max-w-[300px] rounded-[26px] bg-surface p-3 shadow-device"
      >
        <div className="min-h-[360px] rounded-[18px] border border-hairline px-5 py-6">
          <Bar className="w-32" strong />
          <div className="mt-6 space-y-3">
            <div className="h-14 rounded-md ring-1 ring-hairline-strong" />
            <div className="h-14 rounded-md ring-1 ring-hairline-strong" />
          </div>
          <div className="mt-5 space-y-2">
            <Bar className="w-48" />
            <Bar className="w-36" />
          </div>
          <div className="mt-8 h-12 rounded-sm bg-harbour" />
        </div>
      </div>

      <div>
        <p
          data-anim="fade"
          style={step(0.5)}
          className="text-label font-semibold text-muted"
        >
          What a tester says out loud
        </p>
        <ul className="mt-4 space-y-4">
          {thoughts.map((t, i) => (
            <li
              key={t}
              data-anim="pop"
              style={step(1 + i)}
              className="relative max-w-[26rem] rounded-lg rounded-bl-sm bg-surface px-5 py-4 text-[1.125rem] text-ink ring-1 ring-hairline"
            >
              &ldquo;{t}&rdquo;
            </li>
          ))}
        </ul>
        <p
          data-anim="rise"
          style={step(4.2)}
          className="mt-6 flex items-start gap-3 rounded-md bg-harbour-tint px-5 py-4 text-copy"
        >
          <EyeIcon size={24} className="mt-0.5 shrink-0 text-harbour-deep" />
          <span>
            <strong className="text-ink">Meanwhile, we watch.</strong> We take
            notes and don&apos;t jump in to help. Every pause and question
            shows us something to make clearer.
          </span>
        </p>
      </div>
    </div>
  );
}
