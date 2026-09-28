import { step } from "../../_components/diagram-kit";

const stages = [
  { lit: 1, label: "1 in 100 people", note: "A small first group" },
  { lit: 10, label: "10 in 100", note: "Still looking good" },
  { lit: 50, label: "Half", note: "Watching closely" },
  { lit: 100, label: "Everyone", note: "Fully released" },
];

const cells = Array.from({ length: 100 }, (_, i) => i);

function Toggle() {
  return (
    <span aria-hidden="true" className="flex shrink-0 flex-col items-center gap-1">
      <span className="relative inline-flex h-9 w-16 items-center rounded-full bg-muted/35">
        <span className="absolute left-1 size-7 rounded-full bg-surface shadow-device" />
      </span>
      <span className="text-label font-semibold text-muted">Off</span>
    </span>
  );
}

export function GradualRollout() {
  return (
    <div>
      <ol className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {stages.map((s, i) => (
          <li
            key={s.label}
            data-anim="rise"
            style={step(i * 1.4)}
            className="rounded-md bg-surface p-4"
          >
            <div aria-hidden="true" className="grid grid-cols-10 gap-[3px]">
              {cells.map((c) => (
                <span
                  key={c}
                  className={`aspect-square rounded-full ${
                    c < s.lit ? "bg-harbour-chart" : "bg-hairline-strong"
                  }`}
                />
              ))}
            </div>
            <p className="mt-3 text-[1.125rem] font-semibold text-ink">
              {s.label}
            </p>
            <p className="text-label text-muted">{s.note}</p>
          </li>
        ))}
      </ol>

      <div
        data-anim="rise"
        style={step(5.8)}
        className="mt-8 flex items-center gap-4 rounded-md border-2 border-dashed border-harbour/40 bg-surface px-5 py-4"
      >
        <Toggle />
        <p className="text-copy">
          <strong className="text-ink">Something not right?</strong> The
          feature flag is switched off, and everyone is back to the version
          they had before. No new release needed.
        </p>
      </div>
    </div>
  );
}
