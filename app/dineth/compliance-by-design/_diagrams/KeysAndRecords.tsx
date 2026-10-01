import { CheckIcon, LockIcon } from "../../_components/icons";
import { Bar, at } from "../../_components/diagram-kit";

// Each team tries every door, but only its own opens. Each success writes a
// line in the log, and the finished log is sealed.
const START = 700;
const GAP = 2000;
const R = [0, 1, 2].map((i) => START + i * GAP);
const SEAL = START + 3 * GAP;

const areas = ["Customer details", "Payments", "Product code"];

const roles: { role: string; access: boolean[]; did: string }[] = [
  { role: "Customer support", access: [true, false, false], did: "viewed customer details" },
  { role: "Finance", access: [false, true, false], did: "approved a payment" },
  { role: "Developers", access: [false, false, true], did: "changed product code" },
];

const HEAD = 64; // px, header row
const ROW = 68; // px, each team row

export function KeysAndRecords() {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <section data-anim="rise" style={at(0, 700)} className="rounded-lg bg-surface p-5 sm:p-6">
        <h3 className="font-serif text-title font-semibold text-ink">
          Only the keys you need
        </h3>
        <p className="mt-1 text-label text-muted">
          Each team can open only what its job requires
        </p>

        <div className="relative mt-5">
          {/* The team currently trying its doors. */}
          {R.map((t, i) => (
            <span
              key={t}
              aria-hidden="true"
              data-anim="flash"
              style={{ ...at(t, 1800), top: HEAD + i * ROW + 4, height: ROW - 8 }}
              className="absolute -inset-x-2 rounded-md bg-harbour-tint ring-2 ring-harbour/30"
            />
          ))}

          <table className="relative w-full table-fixed border-collapse text-label">
            <thead>
              <tr style={{ height: HEAD }}>
                <th className="w-[32%]" scope="col">
                  <span className="sr-only">Team</span>
                </th>
                {areas.map((a) => (
                  <th
                    key={a}
                    scope="col"
                    className="px-1 pb-3 text-center align-bottom font-semibold break-words text-copy"
                  >
                    {a}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {roles.map((r, ri) => (
                <tr key={r.role} style={{ height: ROW }} className="border-t border-hairline">
                  <th scope="row" className="pr-2 text-left font-semibold text-ink">
                    {r.role}
                  </th>
                  {r.access.map((ok, ai) => (
                    <td key={ai} className="text-center">
                      <span className="relative inline-flex">
                        {ok && (
                          <span
                            aria-hidden="true"
                            data-anim="ripple"
                            style={at(R[ri] + 500 + ai * 150)}
                            className="absolute inset-0 rounded-full ring-4 ring-settled/45"
                          />
                        )}
                        <span
                          data-anim="pop"
                          style={at(R[ri] + 300 + ai * 150, 450)}
                          className={`inline-flex size-10 items-center justify-center rounded-full ${
                            ok ? "bg-settled text-surface" : "bg-shallows text-muted"
                          }`}
                        >
                          {ok ? <CheckIcon size={22} /> : <LockIcon size={19} />}
                          <span className="sr-only">{ok ? "Access" : "No access"}</span>
                        </span>
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section data-anim="rise" style={at(300, 700)} className="flex flex-col rounded-lg bg-surface p-5 sm:p-6">
        <h3 className="font-serif text-title font-semibold text-ink">
          A record of every action
        </h3>
        <p className="mt-1 text-label text-muted">
          Who did what, and when, kept where it can&apos;t be quietly edited
        </p>

        <ul className="mt-5 flex-1 divide-y divide-hairline" aria-label="Example audit record">
          {roles.map((r, i) => (
            <li
              key={r.role}
              data-anim="rise"
              style={at(R[i] + 1000)}
              className="relative flex items-center justify-between gap-3 py-3.5"
            >
              <span
                aria-hidden="true"
                data-anim="flash"
                style={at(R[i] + 1000, 1400)}
                className="absolute -inset-x-2 inset-y-1 rounded-md bg-harbour-tint ring-2 ring-harbour/30"
              />
              <span className="relative flex items-center gap-3">
                <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full bg-harbour" />
                <span className="font-semibold text-ink">
                  {r.role} <span className="font-normal text-copy">{r.did}</span>
                </span>
              </span>
              <span className="relative flex shrink-0 items-center gap-2" aria-hidden="true">
                <Bar className="w-10" />
              </span>
            </li>
          ))}
        </ul>

        <p
          data-anim="pop"
          style={at(SEAL)}
          className="mt-4 flex items-center gap-3 rounded-md bg-harbour-tint px-4 py-3 font-semibold text-harbour-deep"
        >
          <LockIcon size={22} className="shrink-0" />
          Sealed: it can&apos;t be changed afterwards
        </p>
      </section>
    </div>
  );
}
