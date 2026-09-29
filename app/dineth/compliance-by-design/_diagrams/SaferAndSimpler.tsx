import { CheckIcon, CrossIcon } from "../../_components/icons";
import { step } from "../../_components/diagram-kit";

const pairs = [
  {
    old: "Complicated password rules nobody can remember",
    now: "A long, memorable passphrase, and password managers welcome",
  },
  {
    old: "Forced to change your password every few months",
    now: "Only asked to change it if there's a sign of trouble",
  },
  {
    old: "Pasting a password is blocked",
    now: "Pasting allowed, so a password manager can do the typing",
  },
  {
    old: "Relying on a password alone",
    now: "A second check, like a code on your phone, guards your account",
  },
];

export function SaferAndSimpler() {
  return (
    <div>
      <div className="hidden grid-cols-2 gap-6 pb-3 md:grid">
        <p className="inline-flex items-center gap-2 font-semibold text-stop">
          <CrossIcon size={20} /> The old habit
        </p>
        <p className="inline-flex items-center gap-2 font-semibold text-settled">
          <CheckIcon size={20} /> What current guidance recommends
        </p>
      </div>
      <ol className="space-y-4">
        {pairs.map((p, i) => (
          <li
            key={p.old}
            className="grid gap-2 md:grid-cols-2 md:gap-6"
          >
            <p
              data-anim="rise"
              style={step(i * 0.9)}
              className="flex items-start gap-3 rounded-md bg-stop-tint px-4 py-3 text-ink"
            >
              <CrossIcon size={20} className="mt-1 shrink-0 text-stop" />
              <span>
                <strong className="block text-label text-stop md:sr-only">
                  Old habit
                </strong>
                {p.old}
              </span>
            </p>
            <p
              data-anim="rise"
              style={step(i * 0.9 + 0.45)}
              className="flex items-start gap-3 rounded-md bg-settled-tint px-4 py-3 text-ink"
            >
              <CheckIcon size={20} className="mt-1 shrink-0 text-settled" />
              <span>
                <strong className="block text-label text-settled md:sr-only">
                  Recommended now
                </strong>
                {p.now}
              </span>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
