import type { ReactNode } from "react";
import { at } from "../../dineth/_components/diagram-kit";
import { ArrowDownIcon } from "./icons";
import { chipTone, linear, solidTone, type Tone } from "./shared";

export type Bin = {
  title: string;
  subtitle?: string;
  tone?: Tone;
  items: string[];
};

const START = 500;
const GAP = 560;
const RUN_MIN = 500;
const RUN_MAX = 1100;

// Items go onto the belt one at a time, taking turns between the bins.
function schedule(bins: Bin[]) {
  const out: { bin: number; item: number; start: number; run: number; drop: number }[] = [];
  const most = Math.max(...bins.map((b) => b.items.length));
  let k = 0;
  for (let i = 0; i < most; i++) {
    for (let b = 0; b < bins.length; b++) {
      if (i >= bins[b].items.length) continue;
      const frac = (b + 0.5) / bins.length;
      const run = Math.round(RUN_MIN + (RUN_MAX - RUN_MIN) * frac);
      const start = START + k * GAP;
      out.push({ bin: b, item: i, start, run, drop: start + run });
      k++;
    }
  }
  return out;
}

/**
 * A conveyor belt carries each item to the bin it belongs in, where it
 * drops into place. On phones the belt is left out and the items simply
 * drop into their bins in the same order.
 */
export function Sorter({
  bins,
  beltLabel,
  footer,
}: {
  bins: Bin[];
  beltLabel: string;
  footer?: ReactNode;
}) {
  const plan = schedule(bins);
  const cols =
    bins.length === 2 ? "md:grid-cols-2" : bins.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4";
  const end = Math.max(...plan.map((p) => p.drop));
  return (
    <div>
      {/* The belt, wide screens only. */}
      <div aria-hidden="true" className="relative mb-2 hidden h-16 md:block">
        <div className="absolute inset-x-0 top-6 h-4 rounded-full bg-ink/90 shadow-device" />
        <div className="absolute inset-x-3 top-[1.65rem] h-2 rounded-full bg-[repeating-linear-gradient(90deg,var(--paper-white)_0_2px,transparent_2px_16px)] opacity-40" />
        <span className="absolute top-0 left-0 rounded-md bg-surface px-3 py-1 text-label font-semibold text-ink shadow-device">
          {beltLabel}
        </span>
        {plan.map((p) => {
          const tone = bins[p.bin].tone ?? "default";
          return (
            <span
              key={`${p.bin}-${p.item}`}
              className="absolute top-0 left-0 h-full"
              style={{ width: `${((p.bin + 0.5) / bins.length) * 100}%` }}
            >
              <span
                data-anim="ride-x"
                style={at(p.start, p.run, linear)}
                className={`absolute top-[2rem] left-0 size-5 -translate-1/2 rounded-full ring-[3px] ring-surface ${solidTone[tone]}`}
              />
            </span>
          );
        })}
      </div>

      <div className={`grid gap-4 ${cols}`}>
        {bins.map((b, bi) => {
          const tone = b.tone ?? "default";
          return (
            <section
              key={b.title}
              data-anim="rise"
              style={at(bi * 150, 700)}
              className="relative rounded-md bg-surface p-4 pt-5 shadow-device"
            >
              <ArrowDownIcon
                size={22}
                className="absolute -top-4 left-1/2 hidden -translate-x-1/2 text-muted md:block"
              />
              <span
                className={`inline-block rounded-full px-3 py-1 text-label font-semibold ${chipTone[tone]}`}
              >
                {b.title}
              </span>
              {b.subtitle && (
                <p className="mt-2 text-label font-semibold text-ink">{b.subtitle}</p>
              )}
              <ul className="mt-3 flex flex-wrap gap-2 text-label">
                {b.items.map((item, ii) => {
                  const p = plan.find((x) => x.bin === bi && x.item === ii)!;
                  return (
                    <li
                      key={item}
                      data-anim="drop"
                      style={at(p.drop)}
                      className={`rounded-md px-3 py-2 font-medium ${chipTone[tone]}`}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
      {footer && (
        <p
          data-anim="rise"
          style={at(end + 500)}
          className="mt-6 rounded-md border-2 border-dashed border-harbour/40 bg-surface px-5 py-4 text-copy"
        >
          {footer}
        </p>
      )}
    </div>
  );
}
