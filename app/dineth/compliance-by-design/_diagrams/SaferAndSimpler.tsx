import {
  ArrowRightIcon,
  CheckIcon,
  ClipboardIcon,
  CrossIcon,
  KeyIcon,
  PhoneIcon,
  ReplayIcon,
} from "../../_components/icons";
import { at } from "../../_components/diagram-kit";

// Each old habit is marked as out, then replaced by what current guidance says.
const GAP = 1900;
const t = (i: number) => 500 + i * GAP;

const pairs = [
  {
    icon: KeyIcon,
    old: "Complicated password rules nobody can remember",
    now: "A long, memorable passphrase, and password managers welcome",
  },
  {
    icon: ReplayIcon,
    old: "Forced to change your password every few months",
    now: "Only asked to change it if there's a sign of trouble",
  },
  {
    icon: ClipboardIcon,
    old: "Pasting a password is blocked",
    now: "Pasting allowed, so a password manager can do the typing",
  },
  {
    icon: PhoneIcon,
    old: "Relying on a password alone",
    now: "A second check, like a code on your phone, guards your account",
  },
];

export function SaferAndSimpler() {
  return (
    <div>
      <div className="hidden grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,1fr)] pb-3 md:grid">
        <p className="inline-flex items-center gap-2 font-semibold text-stop">
          <CrossIcon size={20} /> The old habit
        </p>
        <span />
        <p className="inline-flex items-center gap-2 font-semibold text-settled">
          <CheckIcon size={20} /> What current guidance recommends
        </p>
      </div>

      <ol className="space-y-4">
        {pairs.map((p, i) => {
          const Icon = p.icon;
          return (
            <li
              key={p.old}
              className="grid items-stretch gap-2 md:grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,1fr)] md:gap-0"
            >
              <p
                data-anim="rise"
                style={at(t(i))}
                className="relative flex items-start gap-3 rounded-md bg-stop-tint px-4 py-4 text-ink"
              >
                <Icon size={22} className="mt-0.5 shrink-0 text-stop" />
                <span>
                  <strong className="block text-label text-stop md:sr-only">Old habit</strong>
                  {p.old}
                </span>
                {/* A red "no" badge lands on the old habit. */}
                <span
                  aria-hidden="true"
                  data-anim="pop"
                  style={at(t(i) + 700, 450)}
                  className="absolute -top-2.5 -right-2.5 flex size-7 items-center justify-center rounded-full bg-stop text-surface ring-2 ring-surface"
                >
                  <CrossIcon size={16} />
                </span>
              </p>

              <span
                aria-hidden="true"
                data-anim="pop"
                style={at(t(i) + 1300)}
                className="hidden items-center justify-center md:flex"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-harbour text-surface">
                  <ArrowRightIcon size={22} />
                </span>
              </span>

              <p
                data-anim="rise"
                style={at(t(i) + 1450)}
                className="relative flex items-start gap-3 rounded-md bg-settled-tint px-4 py-4 text-ink"
              >
                <CheckIcon size={22} className="mt-0.5 shrink-0 text-settled" />
                <span>
                  <strong className="block text-label text-settled md:sr-only">
                    Recommended now
                  </strong>
                  {p.now}
                </span>
                <span
                  aria-hidden="true"
                  data-anim="flash"
                  style={at(t(i) + 1450, 1300)}
                  className="absolute inset-0 rounded-md ring-2 ring-settled/55"
                />
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
