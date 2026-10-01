import { CheckIcon } from "../../dineth/_components/icons";
import { CountUp } from "../../dineth/_components/CountUp";
import { at } from "../../dineth/_components/diagram-kit";
import { linear } from "./shared";

// SOC 2 Type 1 is a single date; Type 2 covers a stretch of time. The first
// is a single flash on one day. The second is a bar that grows, collecting
// evidence along the way while the months count up.
const SAMPLES = [0, 1, 2, 3, 4, 5];

export function PeriodsOfTime() {
  const GROW = 3000;
  const T2 = 2400;
  return (
    <div className="space-y-6">
      <section className="rounded-md bg-surface p-5 shadow-device sm:p-6">
        <p data-anim="fade" style={at(0, 600)} className="font-semibold text-ink">
          Type 1: were the controls designed properly?
        </p>
        <div aria-hidden="true" className="relative mt-4 h-12">
          <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-hairline-strong" />
          <span
            data-anim="ripple"
            style={at(500)}
            className="absolute top-1/2 left-[80%] size-12 -translate-1/2 rounded-full ring-4 ring-harbour/40"
          />
          <span
            data-anim="ripple"
            style={at(750)}
            className="absolute top-1/2 left-[80%] size-12 -translate-1/2 rounded-full ring-4 ring-harbour/25"
          />
          <span
            data-anim="pop"
            style={at(500)}
            className="absolute top-1/2 left-[80%] size-9 -translate-1/2 rounded-full bg-harbour"
          />
        </div>
        <p
          data-anim="fade"
          style={at(900)}
          className="mt-1 text-label text-copy"
        >
          A check on one date. It says nothing about how the controls behaved
          before or after.
        </p>
      </section>

      <section className="rounded-md bg-surface p-5 shadow-device sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <p data-anim="fade" style={at(T2 - 300, 600)} className="font-semibold text-ink">
            Type 2: did the controls work in practice?
          </p>
          <p data-anim="fade" style={at(T2 - 300, 600)} className="text-label font-semibold text-harbour-deep">
            <CountUp to={6} delay={T2} duration={GROW} suffix=" months of evidence" />
          </p>
        </div>
        <div aria-hidden="true" className="relative mt-4 h-12">
          <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-hairline-strong" />
          <span className="absolute inset-y-0 left-[20%] w-[60%]">
            <span
              data-anim="grow-x"
              style={at(T2, GROW, linear)}
              className="absolute inset-x-0 top-1/2 h-4 -translate-y-1/2 rounded-full bg-harbour-chart"
            />
            {SAMPLES.map((k) => {
              const pos = 6 + k * 17.6; // % along the bar
              return (
                <span
                  key={k}
                  data-anim="pop"
                  style={{ ...at(T2 + (pos / 100) * GROW, 400), left: `${pos}%` }}
                  className="absolute top-1/2 flex size-5 -translate-1/2 items-center justify-center rounded-full bg-harbour text-surface ring-2 ring-surface sm:size-8 sm:ring-[3px] [&>svg]:size-3 sm:[&>svg]:size-[18px]"
                >
                  <CheckIcon size={18} />
                </span>
              );
            })}
            <span
              data-anim="ride-x"
              style={at(T2, GROW, linear)}
              className="absolute top-1/2 left-0 z-10 size-4 -translate-1/2 rounded-full bg-ink ring-[3px] ring-surface"
            />
          </span>
        </div>
        <p
          data-anim="fade"
          style={at(T2 + GROW + 200)}
          className="mt-1 text-label text-copy"
        >
          Evidence sampled across a period. A first report often covers three
          to six months, and later ones a full year.
        </p>
      </section>
    </div>
  );
}
