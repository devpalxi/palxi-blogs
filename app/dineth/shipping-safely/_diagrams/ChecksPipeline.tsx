import {
  BeakerIcon,
  CheckIcon,
  ClipboardIcon,
  CodeIcon,
  EyeIcon,
  LayersIcon,
  QuestionIcon,
  ReceiptIcon,
} from "../../_components/icons";
import { at } from "../../_components/diagram-kit";
import { Station, Track, Trail, Train, arrival } from "./rail";

// A change travels through five checks. At each one, a problem that might
// have been hiding in it is caught, so it never reaches you.
const ROUTE = "M20 65 H980";
const START = 400;
const TRAVEL = 5200;
const GATES = [100, 300, 500, 700, 900];
const T = GATES.map((x) => arrival(START, TRAVEL, (x - 20) / 960));
const DONE = START + TRAVEL;

const checks = [
  { icon: CodeIcon, title: "Built on a branch", detail: "In a safe copy, well away from customers." },
  { icon: EyeIcon, title: "A second developer reviews it", detail: "Every change is read by someone who didn't write it." },
  { icon: BeakerIcon, title: "Automatic tests run", detail: "The computer re-checks that everything else still works." },
  { icon: ClipboardIcon, title: "A tester tries it", detail: "Checking it works the way people will really use it." },
  { icon: LayersIcon, title: "Rehearsed on staging", detail: "A full practice copy, with no real customers or money." },
];

export function ChecksPipeline() {
  return (
    <div>
      <p data-anim="fade" style={at(0, 600)} className="text-label text-muted">
        Imagine a problem hiding in the new work. Each check is another
        chance to catch it.
      </p>

      {/* One chip per check, over its gate: a worry that turns into a tick. */}
      <ol className="mt-6 grid grid-cols-5">
        {checks.map((c, i) => (
          <li key={c.title} className="grid h-11 place-items-end justify-center">
            <span
              data-anim="swap-out"
              style={at(T[i], 500)}
              className="inline-flex items-center gap-1.5 rounded-full bg-wattle-tint px-3 py-1 text-label font-semibold text-wattle [grid-area:1/1]"
            >
              <QuestionIcon size={18} />
              Problem?
            </span>
            <span
              data-anim="pop"
              style={at(T[i] + 100, 500)}
              className="inline-flex items-center gap-1.5 rounded-full bg-settled-tint px-3 py-1 text-label font-semibold text-settled [grid-area:1/1]"
            >
              <CheckIcon size={18} />
              Caught
            </span>
          </li>
        ))}
      </ol>

      <svg viewBox="0 0 1000 130" className="mt-1 w-full" aria-hidden="true" focusable="false">
        <Track d={ROUTE} />
        <Trail d={ROUTE} start={START} dur={TRAVEL} />
        {checks.map((c, i) => (
          <Station
            key={c.title}
            x={GATES[i]}
            y={65}
            icon={c.icon}
            time={T[i]}
            fill={i === checks.length - 1 ? "var(--settled-green)" : "var(--harbour-green)"}
          />
        ))}
        <Train d={ROUTE} start={START} dur={TRAVEL} />
      </svg>

      <ol className="grid grid-cols-5">
        {checks.map((c, i) => (
          <li
            key={c.title}
            data-anim="focus"
            style={at(T[i])}
            className="px-2 text-center"
          >
            <p
              className={`text-[1.0625rem] leading-snug font-semibold ${
                i === checks.length - 1 ? "text-settled" : "text-ink"
              }`}
            >
              {c.title}
            </p>
            <p className="mt-1 text-label leading-snug text-copy">{c.detail}</p>
          </li>
        ))}
      </ol>

      <p
        data-anim="rise"
        style={at(DONE + 300)}
        className="mt-8 flex items-start gap-3 rounded-md border-2 border-dashed border-harbour/40 bg-surface px-5 py-4 text-copy"
      >
        <ReceiptIcon size={24} className="mt-0.5 shrink-0 text-harbour-deep" />
        <span>
          <strong className="text-ink">Every step is recorded:</strong> what
          changed, who made the change, who checked it, and when.
        </span>
      </p>
    </div>
  );
}
