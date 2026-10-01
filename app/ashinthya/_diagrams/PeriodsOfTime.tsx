import { CheckIcon } from "../../dineth/_components/icons";
import { CountUp } from "../../dineth/_components/CountUp";
import { at, Bar } from "../../dineth/_components/diagram-kit";
import { CameraIcon, FilmIcon } from "./icons";

// SOC 2 Type 1 is a photograph of one day. Type 2 is a film: evidence
// gathered frame by frame across a period.
const FRAMES = [0, 1, 2, 3, 4, 5];
const T2 = 2800;
const STEP = 520;

export function PeriodsOfTime() {
  return (
    <div className="space-y-6">
      <section className="rounded-md bg-surface p-5 shadow-device sm:p-6">
        <p data-anim="fade" style={at(0, 600)} className="flex items-center gap-2 font-semibold text-ink">
          <CameraIcon size={22} className="text-harbour" />
          Type 1: were the controls designed properly?
        </p>
        <div aria-hidden="true" className="relative mt-5 h-32">
          <span className="absolute inset-x-0 bottom-3 h-[3px] rounded-full bg-hairline-strong" />
          <span
            data-anim="ripple"
            style={at(900)}
            className="absolute bottom-3 left-[78%] size-16 -translate-x-1/2 translate-y-1/2 rounded-full ring-4 ring-harbour/35"
          />
          {/* A photograph of one day. */}
          <span
            data-anim="drop"
            style={at(700)}
            className="absolute bottom-10 left-[78%] w-24 -translate-x-1/2 -rotate-3 rounded-sm bg-surface p-2 pb-4 shadow-[0_6px_16px_rgb(18_32_38/0.18)] ring-1 ring-hairline-strong"
          >
            <span className="flex h-12 items-center justify-center rounded-[3px] bg-harbour-tint text-harbour">
              <CheckIcon size={26} />
            </span>
            <span className="mt-2 block">
              <Bar className="w-3/4" />
            </span>
          </span>
          <span
            data-anim="pop"
            style={at(400)}
            className="absolute bottom-3 left-[78%] size-6 -translate-1/2 rounded-full bg-harbour ring-[3px] ring-surface"
          />
        </div>
        <p data-anim="fade" style={at(1100)} className="mt-1 text-label text-copy">
          A check on one date. It says nothing about how the controls behaved
          before or after.
        </p>
      </section>

      <section className="rounded-md bg-surface p-5 shadow-device sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <p data-anim="fade" style={at(T2 - 300, 600)} className="flex items-center gap-2 font-semibold text-ink">
            <FilmIcon size={22} className="text-harbour" />
            Type 2: did the controls work in practice?
          </p>
          <p data-anim="fade" style={at(T2 - 300, 600)} className="text-label font-semibold text-harbour-deep">
            <CountUp to={6} delay={T2} duration={FRAMES.length * STEP} suffix=" months of evidence" />
          </p>
        </div>

        {/* A strip of film: one frame of evidence per stretch of the period. */}
        <div
          aria-hidden="true"
          data-anim="slide-r"
          style={at(T2 - 400, 800)}
          className="mt-5 rounded-md bg-ink px-3 py-3"
        >
          <span className="mb-2 block h-1.5 rounded-full bg-[repeating-linear-gradient(90deg,var(--paper-white)_0_8px,transparent_8px_18px)] opacity-60" />
          <div className="grid grid-cols-6 gap-2">
            {FRAMES.map((k) => (
              <span
                key={k}
                className="relative flex aspect-[4/3] items-center justify-center rounded-[4px] bg-surface/10 ring-1 ring-surface/20"
              >
                <span
                  data-anim="pop"
                  style={at(T2 + k * STEP, 400)}
                  className="absolute inset-0 flex items-center justify-center rounded-[4px] bg-harbour-tint text-harbour"
                >
                  <CheckIcon size={20} />
                </span>
              </span>
            ))}
          </div>
          <span className="mt-2 block h-1.5 rounded-full bg-[repeating-linear-gradient(90deg,var(--paper-white)_0_8px,transparent_8px_18px)] opacity-60" />
        </div>

        <p data-anim="fade" style={at(T2 + FRAMES.length * STEP + 200)} className="mt-3 text-label text-copy">
          Evidence sampled across a period. A first report often covers three
          to six months, and later ones a full year.
        </p>
      </section>
    </div>
  );
}
