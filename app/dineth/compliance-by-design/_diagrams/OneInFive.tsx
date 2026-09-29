import { step } from "../../_components/diagram-kit";

const groups = [
  { lit: 21, label: "All Australians", figure: "21 in 100", exact: "21.4%" },
  { lit: 52, label: "Australians aged 65 and over", figure: "52 in 100", exact: "52.3%" },
];

const cells = Array.from({ length: 100 }, (_, i) => i);

export function OneInFive() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {groups.map((g, gi) => (
        <figure
          key={g.label}
          data-anim="rise"
          style={step(gi * 1.5)}
          className="rounded-md bg-surface p-5 sm:p-6"
        >
          <div
            aria-hidden="true"
            className="mx-auto grid max-w-[240px] grid-cols-10 gap-1.5"
          >
            {cells.map((c) => (
              <span
                key={c}
                className={`aspect-square rounded-full ${
                  c < g.lit ? "bg-harbour-chart" : "bg-hairline-strong"
                }`}
              />
            ))}
          </div>
          <figcaption className="mt-5">
            <p className="font-serif text-headline font-semibold text-ink">
              {g.figure}
            </p>
            <p className="mt-1 text-[1.125rem] font-semibold text-ink">
              {g.label}
            </p>
            <p className="text-label text-muted">
              live with disability ({g.exact}, ABS 2022)
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
