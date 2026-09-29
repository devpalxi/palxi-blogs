import { ArrowRightIcon, CheckIcon } from "../../_components/icons";
import { Bar, step } from "../../_components/diagram-kit";

const services = ["A booking service", "A payments service", "A community service"];

export function FixOnce() {
  return (
    <div>
      <div
        data-anim="rise"
        style={step(0)}
        className="mx-auto max-w-[36rem] rounded-md bg-surface p-5 sm:p-6"
      >
        <p className="font-serif text-title font-semibold text-ink">
          The shared button, improved once
        </p>
        <div
          aria-hidden="true"
          className="mt-5 flex items-center justify-center gap-4 sm:gap-6"
        >
          <span className="inline-flex min-h-8 items-center rounded-[4px] bg-harbour/55 px-3 text-label text-surface">
            Next
          </span>
          <ArrowRightIcon size={24} className="shrink-0 text-muted" />
          <span
            data-anim="pop"
            style={step(1)}
            className="inline-flex min-h-12 items-center rounded-sm bg-harbour px-6 text-[1.125rem] font-semibold text-surface"
          >
            Next
          </span>
        </div>
        <p className="mt-4 text-center text-label text-copy">
          Larger, clearer and easier to tap, after testing showed people
          missed it.
        </p>
      </div>

      <div aria-hidden="true" className="mx-auto grid max-w-[44rem] grid-cols-3 gap-2 sm:gap-4">
        {services.map((s, i) => (
          <div key={s} className="flex justify-center">
            <span
              data-anim="grow-y"
              style={step(1.8 + i * 0.5)}
              className="block h-10 w-[3px] rounded-full bg-harbour"
            />
          </div>
        ))}
      </div>

      <ol className="mx-auto grid max-w-[44rem] grid-cols-3 gap-2 sm:gap-4">
        {services.map((s, i) => (
          <li
            key={s}
            data-anim="rise"
            style={step(2.3 + i * 0.5)}
            className="flex flex-col"
          >
            <div aria-hidden="true" className="flex min-h-36 flex-col rounded-md bg-surface p-3 ring-1 ring-hairline">
              <Bar className="w-3/4" strong />
              <div className="mt-2.5 space-y-1.5">
                <Bar className="w-full" />
                <Bar className="w-1/2" />
              </div>
              <span className="mt-auto flex min-h-10 items-center justify-center rounded-sm bg-harbour text-label font-semibold text-surface">
                Next
              </span>
            </div>
            <p className="mt-2 text-center text-label text-muted">{s}</p>
            <p className="mt-1 inline-flex items-center justify-center gap-1.5 text-label font-semibold text-settled">
              <CheckIcon size={18} />
              Updated
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
