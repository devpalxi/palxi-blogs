import { CountUp } from "../../dineth/_components/CountUp";
import { at } from "../../dineth/_components/diagram-kit";
import { linear } from "./shared";

/**
 * Price ranges on one shared dollar scale. Each bar grows from its low end to
 * its high end while the two figures count up beside it.
 */
export function Ranges({
  rows,
  max,
  ticks,
  note,
}: {
  rows: { label: string; detail?: string; min: number; max: number }[];
  max: number;
  ticks: number[];
  note: string;
}) {
  const GAP = 650;
  return (
    <div>
      <div className="relative">
        {/* Faint gridlines at each tick, so the bars read against a scale. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {ticks.map((t) => (
            <span
              key={t}
              data-anim="fade"
              style={{
                ...at(0, 700),
                left: t === max ? "calc(100% - 1px)" : `${(t / max) * 100}%`,
              }}
              className="absolute inset-y-0 w-px bg-hairline"
            />
          ))}
        </div>
        <ul className="relative space-y-6">
          {rows.map((row, i) => {
            const t = 400 + i * GAP;
            const left = (row.min / max) * 100;
            const width = ((row.max - row.min) / max) * 100;
            return (
              <li key={row.label}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <p className="font-semibold text-ink">{row.label}</p>
                  <p
                    data-anim="fade"
                    style={at(t)}
                    className="text-label font-semibold text-harbour-deep"
                  >
                    $<CountUp to={row.min} group delay={t + 150} duration={800} />{" "}
                    to $
                    <CountUp to={row.max} group delay={t + 150} duration={800} />
                  </p>
                </div>
                {row.detail && (
                  <p className="text-label text-muted">{row.detail}</p>
                )}
                <div
                  aria-hidden="true"
                  className="relative mt-2 h-4 rounded-full bg-hairline-strong/60"
                >
                  <span
                    data-anim="grow-x"
                    style={{
                      ...at(t + 150, 800, linear),
                      left: `${left}%`,
                      width: `${width}%`,
                    }}
                    className="absolute inset-y-0 rounded-full bg-harbour-chart"
                  />
                  <span
                    data-anim="pop"
                    style={{ ...at(t), left: `${left}%` }}
                    className="absolute top-1/2 size-5 -translate-1/2 rounded-full bg-harbour ring-[3px] ring-surface"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div aria-hidden="true" className="relative mt-3 h-6 text-label text-muted">
        {ticks.map((t, i) => (
          <span
            key={t}
            className="absolute"
            style={{
              left: `${(t / max) * 100}%`,
              transform:
                i === 0
                  ? "none"
                  : i === ticks.length - 1
                    ? "translateX(-100%)"
                    : "translateX(-50%)",
            }}
          >
            {t === 0 ? "$0" : `$${t / 1000}k`}
          </span>
        ))}
      </div>
      <p className="mt-4 text-label text-muted">{note}</p>
    </div>
  );
}
