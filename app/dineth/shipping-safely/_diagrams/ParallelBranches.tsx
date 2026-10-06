import {
  BranchIcon,
  CheckIcon,
  CodeIcon,
  EyeIcon,
  MergeIcon,
  PencilIcon,
  UsersIcon,
} from "../../_components/icons";
import { at } from "../../_components/diagram-kit";
import { Station, Track, Trail, Train, arrival } from "../../_components/rail";

// Design and code each get their own branch. They're worked on side by side,
// reviewed separately, and merged back into the live product together.
const DESIGN = "M40 265 H80 C140 265 120 150 180 150 H820 C880 150 860 265 920 265 H960";
const CODE = "M40 265 H80 C140 265 120 380 180 380 H820 C880 380 860 265 920 265 H960";
const FRACTIONS = [0.3093, 0.5, 0.6907];

// The design is ready a little ahead of the code that follows it.
const D = { start: 300, dur: 5000 };
const C = { start: 1500, dur: 3800 };
const END = D.start + D.dur;
const dT = FRACTIONS.map((f) => arrival(D.start, D.dur, f));
const cT = FRACTIONS.map((f) => arrival(C.start, C.dur, f));

const design = [
  { icon: PencilIcon, title: "A copy of the design is made", detail: "The approved designs stay untouched." },
  { icon: EyeIcon, title: "New screens designed and tried", detail: "Including testing with real people." },
  { icon: CheckIcon, title: "Reviewed and approved", detail: "Another designer checks the changes." },
];
const code = [
  { icon: BranchIcon, title: "A copy of the code is made", detail: "The live product stays untouched." },
  { icon: CodeIcon, title: "Built to match the design", detail: "Following the approved design exactly." },
  { icon: CheckIcon, title: "Reviewed and tested", detail: "Another developer checks every change." },
];

function Labels({
  items,
  times,
  y,
  side,
}: {
  items: typeof design;
  times: number[];
  y: string;
  side: "above" | "below";
}) {
  return (
    <ol className="absolute inset-x-0" style={{ top: y }}>
      {items.map((s, i) => (
        <li
          key={s.title}
          data-anim="focus"
          style={{ ...at(times[i]), left: `${[300, 500, 700][i] / 10}%` }}
          className={`absolute w-[18%] -translate-x-1/2 text-center ${
            side === "above" ? "-translate-y-full" : ""
          }`}
        >
          <p className="text-[1.0625rem] leading-snug font-semibold text-ink">{s.title}</p>
          <p className="mt-1 text-label leading-snug text-copy">{s.detail}</p>
        </li>
      ))}
    </ol>
  );
}

export function ParallelBranches() {
  return (
    <div>
      <div className="relative">
        <svg viewBox="0 0 1000 540" className="w-full" aria-hidden="true" focusable="false">
          <Track d={DESIGN} />
          <Track d={CODE} />
          <Trail d={DESIGN} start={D.start} dur={D.dur} color="var(--deep-ink)" />
          <Trail d={CODE} start={C.start} dur={C.dur} />

          {design.map((s, i) => (
            <Station key={s.title} x={[300, 500, 700][i]} y={150} icon={s.icon} time={dT[i]} fill="var(--deep-ink)" />
          ))}
          {code.map((s, i) => (
            <Station key={s.title} x={[300, 500, 700][i]} y={380} icon={s.icon} time={cT[i]} />
          ))}
          <Station x={960} y={265} icon={UsersIcon} time={END} fill="var(--magenta)" />

          <Train d={DESIGN} start={D.start} dur={D.dur} tone="ink" />
          <Train d={CODE} start={C.start} dur={C.dur} />
        </svg>

        {/* Design labels above their lane, code labels below theirs. */}
        <Labels items={design} times={dT} y="23%" side="above" />
        <Labels items={code} times={cT} y="77%" side="below" />

        {/* Lane titles sit in the quiet band between the two lanes. */}
        <div data-anim="rise" style={at(0, 700)} className="absolute top-[37%] left-[19%]">
          <p className="text-[1.1875rem] font-semibold text-ink">The design branch</p>
          <p className="text-label text-copy">In Figma, our design tool.</p>
        </div>
        <div data-anim="rise" style={at(1200, 700)} className="absolute top-[53%] left-[19%]">
          <p className="text-[1.1875rem] font-semibold text-magenta-deep">The code branch</p>
          <p className="text-label text-copy">In Git, where our code lives.</p>
        </div>
        <div
          data-anim="focus"
          style={at(END)}
          className="absolute top-[58%] right-0 w-[10%] text-right"
        >
          <p className="text-[1.1875rem] leading-tight font-semibold text-magenta">The live product</p>
        </div>
      </div>

      <p
        data-anim="rise"
        style={at(END + 200)}
        className="mt-6 flex items-center gap-3 rounded-md bg-magenta-tint px-5 py-4 text-[1.125rem] font-semibold text-magenta"
      >
        <MergeIcon size={26} className="shrink-0" />
        Both are merged back into the live product together, so what you see
        matches what was designed and tested.
      </p>
    </div>
  );
}
