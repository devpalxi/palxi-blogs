import { step } from "../../_components/diagram-kit";

// Nielsen's model: share of problems found by n testers = 1 - (1 - L)^n, L = 0.31.
const L = 0.31;
const data = [1, 2, 3, 4, 5].map((n) => ({
  n,
  pct: Math.round((1 - (1 - L) ** n) * 100),
}));

export function FiveTesters() {
  return (
    <div>
      <p className="font-serif text-title font-semibold text-ink">
        Share of problems found
      </p>
      <p className="mt-1 text-label text-muted">
        By the number of people who test a design
      </p>

      <div className="sr-only">
      <table>
        <caption>Share of usability problems found by number of testers</caption>
        <thead>
          <tr>
            <th scope="col">Testers</th>
            <th scope="col">Problems found</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.n}>
              <td>{d.n}</td>
              <td>{d.pct}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div aria-hidden="true" className="mt-8">
        <div className="relative h-[240px] border-b-2 border-hairline-strong">
          <div className="absolute inset-x-0 bottom-[200px] border-t border-dashed border-hairline-strong">
            <span className="absolute -top-7 left-0 text-label text-muted">
              Every problem
            </span>
          </div>
          <div className="absolute inset-0 grid grid-cols-5 gap-3 sm:gap-6">
            {data.map((d, i) => (
              <div key={d.n} className="flex flex-col items-center justify-end">
                <span
                  data-anim="fade"
                  style={step(i + 0.6)}
                  className="mb-2 text-[1.125rem] font-bold text-ink"
                >
                  {d.pct}%
                </span>
                <span
                  data-anim="grow-up"
                  style={{ ...step(i), height: `${(d.pct / 100) * 200}px` }}
                  className="w-full max-w-16 rounded-t-[4px] bg-harbour-chart"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 grid grid-cols-5 gap-3 text-center text-label text-copy sm:gap-6">
          {data.map((d) => (
            <span key={d.n}>
              {d.n} {d.n === 1 ? "person" : "people"}
            </span>
          ))}
        </div>
      </div>

      <p
        data-anim="rise"
        style={step(5)}
        className="mt-8 text-copy"
      >
        After about five people, new testers mostly find the same problems
        again. So instead of one big test, we run several small rounds, fixing
        things in between.
      </p>
    </div>
  );
}
