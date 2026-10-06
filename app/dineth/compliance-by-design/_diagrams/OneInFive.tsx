import { at } from "../../_components/diagram-kit";
import { CountUp } from "../../_components/CountUp";

// Two fields of 100 people. Dots light up as the number climbs.
const groups = [
  { lit: 21, label: "All Australians", exact: "21.4%", start: 500, gap: 42 },
  { lit: 52, label: "Australians aged 65 and over", exact: "52.3%", start: 2700, gap: 32 },
];

const cells = Array.from({ length: 100 }, (_, i) => i);

export function OneInFive() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {groups.map((g) => {
        const run = g.lit * g.gap;
        return (
          <figure
            key={g.label}
            data-anim="rise"
            style={at(g.start - 400, 700)}
            className="rounded-lg bg-surface p-5 sm:p-6"
          >
            <div aria-hidden="true" className="mx-auto grid max-w-[260px] grid-cols-10 gap-1.5">
              {cells.map((c) => (
                <span key={c} className="relative aspect-square rounded-full bg-hairline-strong">
                  {c < g.lit && (
                    <span
                      data-anim="pop"
                      style={at(g.start + 150 + c * g.gap, 380)}
                      className="absolute inset-0 rounded-full bg-magenta-chart"
                    />
                  )}
                </span>
              ))}
            </div>
            <figcaption className="mt-5">
              <p className="font-heading text-headline font-semibold text-ink">
                <CountUp to={g.lit} delay={g.start + 150} duration={run} /> in 100
              </p>
              <p className="mt-1 text-[1.125rem] font-semibold text-ink">{g.label}</p>
              <p className="text-label text-muted">
                live with disability ({g.exact}, ABS 2022)
              </p>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
