import { Bar, Pin, step } from "../../_components/diagram-kit";

const callouts = [
  {
    title: "Who you're paying",
    body: "The name you know them by, not a mystery company name.",
  },
  {
    title: "What it's for",
    body: "Enough detail to spot a mistake before it costs you anything.",
  },
  {
    title: "Every fee, even when it's zero",
    body: "Fees are listed before you pay. Nothing turns up afterwards.",
  },
  {
    title: "The total, said twice",
    body: "Once in the summary and again on the button, so you know exactly what pressing it will do.",
  },
  {
    title: "A clear way out",
    body: "Changed your mind? Going back is always one obvious tap away.",
  },
];

function Row({
  label,
  pin,
  bar,
  strong = false,
}: {
  label: string;
  pin?: number;
  bar: string;
  strong?: boolean;
}) {
  return (
    <div className="relative flex items-center justify-between gap-4 py-3 pr-10">
      <span className={strong ? "font-semibold text-ink" : "text-muted"}>
        {label}
      </span>
      <Bar className={bar} strong={strong} />
      {pin && <Pin n={pin} className="absolute top-2 right-0" />}
    </div>
  );
}

export function ConfirmationAnatomy() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)] md:gap-14">
      <div
        data-anim="rise"
        style={step(0)}
        className="mx-auto w-full max-w-[340px] rounded-[26px] bg-surface p-3 shadow-device"
        aria-hidden="true"
      >
        <div className="rounded-[18px] border border-hairline px-5 pt-6 pb-6 text-label">
          <p className="font-serif text-[1.375rem] leading-tight font-semibold text-ink">
            Check before you pay
          </p>

          <div className="mt-4 divide-y divide-hairline">
            <Row label="Paying" bar="w-28" pin={1} />
            <Row label="For" bar="w-32" pin={2} />
            <Row label="Fees" bar="w-14" pin={3} />
            <Row label="Total" bar="w-20" strong pin={4} />
          </div>

          <div className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-sm bg-harbour px-4 font-semibold text-surface">
            Pay
            <span className="inline-block h-3.5 w-14 rounded-full bg-surface/45" />
          </div>
          <div className="relative mt-2 pr-10">
            <p className="flex min-h-11 items-center justify-center font-semibold text-harbour underline underline-offset-2">
              Go back
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
