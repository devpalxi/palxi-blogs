import { PersonIcon } from "../../_components/icons";
import { at } from "../../_components/diagram-kit";
import { CountUp } from "../../_components/CountUp";

// Nielsen's model: share of problems found by n testers = 1 - (1 - L)^n, L = 0.31.
const L = 0.31;
const data = [1, 2, 3, 4, 5].map((n) => ({
  n,
  pct: Math.round((1 - (1 - L) ** n) * 100),
}));

const START = 500;
const GAP = 1500;
const tester = (n: number) => START + (n - 1) * GAP;
const PER_DOT = 24;

// Which tester first finds dot i (null = nobody does, not even five people).
function finder(i: number) {
  const idx = data.findIndex((d) => i < d.pct);
  return idx === -1 ? null : idx;
}

export function FiveTesters() {
  return (
    <div>
      <p className="font-serif text-title font-semibold text-ink">
        Share of problems found
      </p>
      <p className="mt-1 text-label text-muted">
        Imagine a design with 100 problems hiding in it. Each dot is one.
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

      <div
        aria-hidden="true"
        className="mt-8 grid items-center gap-10 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:gap-14"
      >
        <div className="mx-auto grid w-full max-w-[300px] grid-cols-10 gap-2">
          {Array.from({ length: 100 }, (_, i) => {
            const f = finder(i);
            const prev = f === null || f === 0 ? 0 : data[f - 1].pct;
            return (
              <span
                key={i}
                className="relative aspect-square rounded-full bg-hairline-strong"
              >
                {f !== null && (
                  <span
                    data-anim="pop"
                    style={at(tester(f + 1) + 200 + (i - prev) * PER_DOT, 380)}
                    className="absolute inset-0 rounded-full bg-harbour-chart"
                  />
                )}
              </span>
            );
          })}
        </div>

        <ul className="space-y-4">
          {data.map((d) => (
            <li key={d.n} className="flex items-center gap-4">
              <span
                data-anim="pop"
                style={at(tester(d.n))}
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-surface text-harbour shadow-device"
              >
                <PersonIcon size={24} />
              </span>
              <div className="min-w-0 flex-1">
                <p
                  data-anim="fade"
                  style={at(tester(d.n))}
                  className="flex items-baseline justify-between gap-3 text-label text-copy"
                >
                  <span>
                    {d.n} {d.n === 1 ? "person" : "people"}
                  </span>
                  <span className="text-[1.125rem] font-bold text-ink">
                    <CountUp
                      to={d.pct}
                      suffix="%"
                      delay={tester(d.n) + 200}
                      duration={d.pct * PER_DOT - (d.n > 1 ? data[d.n - 2].pct * PER_DOT : 0) + 200}
                    />
                  </span>
                </p>
                <div className="mt-1.5 h-3 rounded-full bg-hairline-strong">
                  <span
                    data-anim="grow-x"
                    style={{
                      ...at(tester(d.n) + 200, 900),
                      width: `${d.pct}%`,
                    }}
                    className="block h-full rounded-full bg-harbour-chart"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p
        data-anim="rise"
        style={at(START + 5 * GAP)}
        className="mt-8 text-copy"
      >
        After about five people, new testers mostly find the same problems
        again. So instead of one big test, we run several small rounds, fixing
        things in between.
      </p>
    </div>
  );
}
