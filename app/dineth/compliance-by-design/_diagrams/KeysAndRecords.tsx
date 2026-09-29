import { CheckIcon, LockIcon } from "../../_components/icons";
import { Bar, step } from "../../_components/diagram-kit";

const areas = ["Customer details", "Payments", "Product code"];

const roles: { role: string; access: boolean[] }[] = [
  { role: "Customer support", access: [true, false, false] },
  { role: "Finance", access: [false, true, false] },
  { role: "Developers", access: [false, false, true] },
];

const log = [
  { action: "Viewed", bar: "w-20" },
  { action: "Changed", bar: "w-24" },
  { action: "Approved", bar: "w-16" },
  { action: "Signed out", bar: "w-20" },
];

export function KeysAndRecords() {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
      <section data-anim="rise" style={step(0)} className="rounded-md bg-surface p-5 sm:p-6">
        <h3 className="font-serif text-title font-semibold text-ink">
          Only the keys you need
        </h3>
        <p className="mt-1 text-label text-muted">
          Each team can open only what its job requires
        </p>

        <table className="mt-5 w-full table-fixed border-collapse text-label">
          <thead>
            <tr>
              <th className="w-[34%]" scope="col">
                <span className="sr-only">Team</span>
              </th>
              {areas.map((a) => (
                <th
                  key={a}
                  scope="col"
                  className="px-1 pb-3 text-center align-bottom font-semibold break-words hyphens-auto text-copy"
                >
                  {a}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roles.map((r, ri) => (
              <tr key={r.role} className="border-t border-hairline">
                <th
                  scope="row"
                  className="py-3 pr-2 text-left font-semibold text-ink"
                >
                  {r.role}
                </th>
                {r.access.map((ok, ai) => (
                  <td key={ai} className="py-3 text-center">
                    <span
                      data-anim="pop"
                      style={step(1 + ri * 0.7 + ai * 0.15)}
                      className={`inline-flex size-9 items-center justify-center rounded-full ${
                        ok ? "bg-settled text-surface" : "bg-shallows text-muted"
                      }`}
                    >
                      {ok ? <CheckIcon size={20} /> : <LockIcon size={18} />}
                      <span className="sr-only">{ok ? "Access" : "No access"}</span>
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section data-anim="rise" style={step(3.4)} className="rounded-md bg-surface p-5 sm:p-6">
        <h3 className="font-serif text-title font-semibold text-ink">
          A record of every action
        </h3>
        <p className="mt-1 text-label text-muted">
          Who did what, and when, kept where it can&apos;t be quietly edited
        </p>
        <ul className="mt-5 divide-y divide-hairline" aria-label="Example audit record">
          {log.map((l, i) => (
            <li
              key={l.action}
              data-anim="rise"
              style={step(4 + i * 0.5)}
              className="flex items-center justify-between gap-3 py-3"
            >
              <span className="flex items-center gap-3">
                <span aria-hidden="true" className="size-2.5 rounded-full bg-harbour" />
                <span className="font-semibold text-ink">{l.action}</span>
              </span>
              <span className="flex items-center gap-2" aria-hidden="true">
                <Bar className={l.bar} />
                <Bar className="w-10" />
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
