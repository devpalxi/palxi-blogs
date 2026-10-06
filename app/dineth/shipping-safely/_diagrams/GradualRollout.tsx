import { CheckIcon, EyeIcon } from "../../_components/icons";
import { at } from "../../_components/diagram-kit";

// 100 people. The new feature reaches 1, then 10, then half, then everyone,
// with a close eye kept on it at each step. A feature flag can switch it off.
const START = 400;
const stages = [
  { count: 1, label: "1 in 100 people", note: "A small first group", start: START, gap: 0 },
  { count: 10, label: "10 in 100", note: "Still looking good", start: 1800, gap: 70 },
  { count: 50, label: "Half", note: "Watching closely", start: 3500, gap: 26 },
  { count: 100, label: "Everyone", note: "Fully released", start: 5400, gap: 20 },
];
const DONE = 5400 + 50 * 20 + 400;
const SWITCH = DONE + 2000;

// Which stage first lights dot i, and when.
function lightAt(i: number) {
  const idx = stages.findIndex((s) => i < s.count);
  const prev = idx === 0 ? 0 : stages[idx - 1].count;
  return { idx, time: stages[idx].start + 150 + (i - prev) * stages[idx].gap };
}

const people = Array.from({ length: 100 }, (_, i) => i);
const mini = Array.from({ length: 20 }, (_, i) => i);

function Toggle() {
  return (
    <span aria-hidden="true" className="grid shrink-0 justify-items-center gap-1.5">
      <span className="relative grid h-10 w-[72px] [grid-area:1/1]">
        <span
          data-anim="fade"
          style={at(SWITCH + 200, 450)}
          className="relative rounded-full bg-muted/40 [grid-area:1/1]"
        >
          <span className="absolute top-1 left-1 size-8 rounded-full bg-surface shadow-device" />
        </span>
        <span
          data-anim="swap-out"
          style={at(SWITCH, 450)}
          className="relative rounded-full bg-magenta [grid-area:1/1]"
        >
          <span className="absolute top-1 right-1 size-8 rounded-full bg-surface shadow-device" />
        </span>
      </span>
      <span className="grid text-label font-semibold [grid-area:2/1]">
        <span
          data-anim="swap-out"
          style={at(SWITCH, 450)}
          className="text-magenta-deep [grid-area:1/1]"
        >
          On
        </span>
        <span
          data-anim="fade"
          style={at(SWITCH + 200, 450)}
          className="text-muted [grid-area:1/1]"
        >
          Off
        </span>
      </span>
    </span>
  );
}

export function GradualRollout() {
  return (
    <div>
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:gap-12">
        <div aria-hidden="true" className="mx-auto grid w-full max-w-[300px] grid-cols-10 gap-2">
          {people.map((i) => {
            const { time } = lightAt(i);
            return (
              <span key={i} className="relative aspect-square rounded-full bg-hairline-strong">
                <span
                  data-anim="pop"
                  style={at(time, 380)}
                  className="absolute inset-0 rounded-full bg-magenta-chart"
                />
              </span>
            );
          })}
        </div>

        <ol className="space-y-3">
          {stages.map((s, i) => (
            <li
              key={s.label}
              data-anim="focus"
              style={at(s.start)}
              className="flex items-center gap-4 rounded-md bg-surface px-5 py-4"
            >
              <span
                aria-hidden="true"
                data-anim="pop"
                style={at(s.start)}
                className={`flex size-10 shrink-0 items-center justify-center rounded-full text-surface ${
                  i === stages.length - 1 ? "bg-settled" : "bg-magenta"
                }`}
              >
                {i === stages.length - 1 ? <CheckIcon size={22} /> : <EyeIcon size={22} />}
              </span>
              <span>
                <span className="block text-[1.1875rem] font-semibold text-ink">{s.label}</span>
                <span className="block text-label text-muted">{s.note}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div
        data-anim="rise"
        style={at(DONE)}
        className="mt-8 flex items-center gap-5 rounded-md border-2 border-dashed border-magenta/40 bg-surface px-5 py-4"
      >
        <Toggle />
        <div aria-hidden="true" className="grid shrink-0 grid-cols-10 gap-1.5">
          {mini.map((i) => (
            <span key={i} className="relative size-3.5 rounded-full bg-hairline-strong">
              <span
                data-anim="swap-out"
                style={at(SWITCH + 250 + i * 35, 400)}
                className="absolute inset-0 rounded-full bg-magenta-chart"
              />
            </span>
          ))}
        </div>
        <p className="text-copy">
          <strong className="text-ink">Something not right?</strong> The
          feature flag is switched off, and everyone is back to the version
          they had before. No new release needed.
        </p>
      </div>
    </div>
  );
}
