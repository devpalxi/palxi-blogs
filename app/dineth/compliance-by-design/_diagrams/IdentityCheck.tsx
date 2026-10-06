import type { ReactNode } from "react";
import { CheckIcon, ChatIcon, IdCardIcon, LockIcon } from "../../_components/icons";
import { Bar, Device, Pin, at } from "../../_components/diagram-kit";

// A highlight reads down the screen, element by element, while the matching
// note lights up. Then the two escape hatches are tried: save and leave, and
// ask for a person.
const T = [800, 2300, 3800, 5300, 7400];

const callouts = [
  {
    title: "Why we're asking",
    body: "One plain sentence: the law requires it, and it helps keep criminals out.",
  },
  {
    title: "What you'll need",
    body: "The choices of ID, listed up front, so there are no surprises halfway through.",
  },
  {
    title: "How your details are used",
    body: "Only to confirm who you are, and kept securely. Never for marketing.",
  },
  {
    title: "Finish later if you're busy",
    body: "Your progress is saved, so a phone call or a customer doesn't mean starting again.",
  },
  {
    title: "A person if you need one",
    body: "Some people don't have standard ID. There's always a way to get help.",
  },
];

// A part of the screen that is briefly highlighted when it's being "read".
function Reg({
  n,
  className = "",
  children,
}: {
  n: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`relative pr-10 ${className}`}>
      <span
        data-anim="flash"
        style={at(T[n - 1], 1400)}
        className="absolute -inset-2 right-8 rounded-md bg-magenta-tint ring-2 ring-magenta/35"
      />
      <div className="relative">{children}</div>
      <Pin n={n} at={T[n - 1]} className="absolute top-0 right-0" />
    </div>
  );
}

function Phone() {
  return (
    <Device className="mx-auto w-full max-w-[340px]" screenClassName="pb-24">
      <div aria-hidden="true">
        <Reg n={1}>
          <p className="font-heading text-[1.3125rem] leading-tight font-semibold text-ink">
            A quick identity check
          </p>
          <div className="mt-2 space-y-1.5">
            <Bar className="w-full" />
            <Bar className="w-3/4" />
          </div>
        </Reg>

        <Reg n={2} className="mt-6">
          <div className="space-y-2">
            {[0, 1].map((k) => (
              <div
                key={k}
                className="flex min-h-12 items-center gap-3 rounded-md px-3 ring-1 ring-hairline-strong"
              >
                <IdCardIcon size={22} className="shrink-0 text-magenta" />
                <Bar className="w-28" />
              </div>
            ))}
          </div>
        </Reg>

        <Reg n={3} className="mt-5">
          <p className="flex items-start gap-2 text-copy">
            <LockIcon size={18} className="mt-0.5 shrink-0 text-magenta" />
            <span className="flex-1 space-y-1.5 pt-1">
              <Bar className="w-full" />
              <Bar className="w-2/3" />
            </span>
          </p>
        </Reg>

        <div className="mt-5 flex min-h-12 items-center justify-center rounded-sm bg-magenta font-semibold text-surface">
          Continue
        </div>

        <Reg n={4} className="mt-2">
          <p className="flex min-h-11 items-center justify-center font-semibold text-magenta underline underline-offset-2">
            Save and finish later
          </p>
          <span
            data-anim="ripple"
            style={at(T[3] + 500)}
            className="absolute top-1/2 left-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-magenta/40"
          />
        </Reg>

        <Reg n={5}>
          <p className="flex min-h-11 items-center justify-center font-semibold text-magenta underline underline-offset-2">
            Talk to a person
          </p>
          <span
            data-anim="ripple"
            style={at(T[4] + 500)}
            className="absolute top-1/2 left-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-magenta/40"
          />
        </Reg>
      </div>

      {/* The two escape hatches answer back, then disappear. */}
      <p
        aria-hidden="true"
        data-anim="window"
        style={at(T[3] + 700, 2600)}
        className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-md bg-ink px-4 py-3 font-semibold text-surface"
      >
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-settled">
          <CheckIcon size={16} />
        </span>
        Progress saved
      </p>
      <p
        aria-hidden="true"
        data-anim="window"
        style={at(T[4] + 700, 2600)}
        className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-md bg-ink px-4 py-3 font-semibold text-surface"
      >
        <ChatIcon size={22} className="shrink-0" />
        A person is on their way
      </p>
    </Device>
  );
}

export function IdentityCheck() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)] md:gap-14">
      <div data-anim="rise" style={at(0, 700)}>
        <Phone />
      </div>

      <ol className="space-y-6">
        {callouts.map((c, i) => (
          <li
            key={c.title}
            data-anim="focus"
            style={at(T[i])}
            className="flex gap-4"
          >
            <Pin n={i + 1} static />
            <div>
              <p className="text-[1.1875rem] font-semibold text-ink">{c.title}</p>
              <p className="mt-1 text-copy">{c.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
