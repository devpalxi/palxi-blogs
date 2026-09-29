import { IdCardIcon, LockIcon } from "../../_components/icons";
import { Bar, Pin, step } from "../../_components/diagram-kit";

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

export function IdentityCheck() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,330px)_minmax(0,1fr)] md:gap-14">
      <div
        data-anim="rise"
        style={step(0)}
        aria-hidden="true"
        className="mx-auto w-full max-w-[330px] rounded-[26px] bg-surface p-3 shadow-device"
      >
        <div className="rounded-[18px] border border-hairline px-5 pt-6 pb-6 text-label">
          <div className="relative pr-10">
            <p className="font-serif text-[1.3125rem] leading-tight font-semibold text-ink">
              A quick identity check
            </p>
            <div className="mt-2 space-y-1.5">
              <Bar className="w-full" />
              <Bar className="w-3/4" />
            </div>
            <Pin n={1} className="absolute top-0 right-0" />
          </div>

          <div className="relative mt-5 space-y-2 pr-10">
            {[0, 1].map((k) => (
              <div
                key={k}
                className="flex min-h-12 items-center gap-3 rounded-md px-3 ring-1 ring-hairline-strong"
              >
                <IdCardIcon size={22} className="shrink-0 text-harbour" />
                <Bar className="w-28" />
              </div>
            ))}
            <Pin n={2} className="absolute top-2 right-0" />
          </div>

          <div className="relative mt-4 pr-10">
            <p className="flex items-start gap-2 text-copy">
              <LockIcon size={18} className="mt-0.5 shrink-0 text-harbour" />
              <span className="flex-1 space-y-1.5 pt-1">
                <Bar className="w-full" />
                <Bar className="w-2/3" />
              </span>
            </p>
            <Pin n={3} className="absolute top-0 right-0" />
          </div>

          <div className="mt-5 flex min-h-12 items-center justify-center rounded-sm bg-harbour font-semibold text-surface">
            Continue
          </div>
          <div className="relative mt-2 pr-10">
            <p className="flex min-h-11 items-center justify-center font-semibold text-harbour underline underline-offset-2">
              Save and finish later
            </p>
            <Pin n={4} className="absolute top-1.5 right-0" />
          </div>
          <div className="relative pr-10">
            <p className="flex min-h-11 items-center justify-center font-semibold text-harbour underline underline-offset-2">
              Talk to a person
            </p>
            <Pin n={5} className="absolute top-1.5 right-0" />
          </div>
        </div>
      </div>

      <ol className="space-y-6">
        {callouts.map((c, i) => (
          <li
            key={c.title}
            data-anim="rise"
            style={step(i + 1)}
            className="flex gap-4"
          >
            <Pin n={i + 1} static />
            <div>
              <p className="text-[1.1875rem] font-semibold text-ink">
                {c.title}
              </p>
              <p className="mt-1 text-copy">{c.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
