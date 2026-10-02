import { CountUp } from "../../dineth/_components/CountUp";
import { at } from "../../dineth/_components/diagram-kit";
import { Fact } from "./Cards";
import { FlagIcon } from "./icons";
import { chipTone, type Tone } from "./shared";

export type Step = {
  title: string;
  authority: string;
  tone?: Tone;
  facts: string[];
  /** A big number that counts up on the step, e.g. a cap. */
  stat?: { prefix?: string; to: number; suffix?: string; caption: string };
};

const plinthTone: Record<Tone, string> = {
  default: "bg-harbour",
  done: "bg-settled",
  caution: "bg-wattle",
  stop: "bg-stop",
};

const PER_STEP = 2900;
const heights = ["md:h-28", "md:h-40", "md:h-52"];

/**
 * A staircase of stages. Each step grows from the floor, its facts are read
 * and ticked, and a small flag marks where "you are" as the climb goes on.
 * On phones the steps stack as plain blocks.
 */
export function Staircase({ steps }: { steps: Step[] }) {
  const n = steps.length;
  return (
    <ol className="grid items-end gap-5 md:grid-cols-3 md:gap-3">
      {steps.map((s, i) => {
        const t = 300 + i * PER_STEP;
        const tone = s.tone ?? "default";
        const last = i === n - 1;
        return (
          <li key={s.title} className="flex flex-col">
            <div
              data-anim="rise"
              style={at(t + 700, 700)}
              className="mb-6 rounded-md bg-surface p-5 shadow-device"
            >
              <span
                className={`inline-block rounded-full px-3 py-1 text-label font-semibold ${chipTone[tone]}`}
              >
                Stage {i + 1}
              </span>
              {s.stat && (
                <p className="mt-3">
                  <span className="font-serif text-headline font-semibold text-ink">
                    {s.stat.prefix}
                    <CountUp
                      to={s.stat.to}
                      suffix={s.stat.suffix}
                      delay={t + 1000}
                      duration={1100}
                    />
                  </span>
                  <span className="block text-label text-muted">{s.stat.caption}</span>
                </p>
              )}
              <ul className="mt-3 space-y-2 text-label text-copy">
                {s.facts.map((f, j) => (
                  <Fact key={f} text={f} time={t + 1200 + j * 430} />
                ))}
              </ul>
            </div>

            <div className="relative">
              {/* Where "you are" on the climb. */}
              <span
                aria-hidden="true"
                data-anim={last ? "pop" : "window"}
                style={at(t + 200, last ? undefined : PER_STEP)}
                className="absolute -top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-label font-semibold text-surface shadow-device"
              >
                <FlagIcon size={16} />
                You are here
              </span>
              <div
                data-anim="grow-up"
                style={at(t, 800)}
                className={`flex flex-col justify-end rounded-t-md px-5 pt-8 pb-4 text-surface ${plinthTone[tone]} ${heights[i] ?? ""}`}
              >
                <p className="font-serif text-title leading-tight font-semibold">
                  {s.title}
                </p>
                <p className="text-label">{s.authority}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
