import { CodeIcon, EyeIcon, LayersIcon, UsersIcon } from "../../_components/icons";
import { at } from "../../_components/diagram-kit";
import { Station, Track, Trail, Train, arrival } from "../../_components/rail";

// The main line runs left to right. New work splits off onto its own track,
// is built and checked there, and joins back only when it's ready.
const MAIN = "M40 120 H960";
const ROUTE =
  "M40 120 H160 C230 120 190 250 260 250 H740 C810 250 770 120 840 120 H960";
const BRANCH_ONLY = "M160 120 C230 120 190 250 260 250 H740 C810 250 770 120 840 120";

const START = 300;
const TRAVEL = 6400;
const T = [0.3335, 0.5, 0.6665].map((f) => arrival(START, TRAVEL, f));
const END = arrival(START, TRAVEL, 1);
const CUSTOMERS = { start: START, dur: 5600 };

const stops = [
  { x: 320, icon: CodeIcon, title: "Built on its own track", detail: "Customers aren't affected." },
  { x: 500, icon: EyeIcon, title: "Checked and tested", detail: "Another developer reviews it." },
  { x: 680, icon: LayersIcon, title: "Rehearsed on a practice copy", detail: "Of the whole product." },
];

export function BranchLine() {
  return (
    <div>
      <div className="relative">
        <svg viewBox="0 0 1000 310" className="w-full" aria-hidden="true" focusable="false">
          <Track d={MAIN} />
          <Track d={BRANCH_ONLY} muted />
          <Trail d={ROUTE} start={START} dur={TRAVEL} />

          {stops.map((s, i) => (
            <Station key={s.title} x={s.x} y={250} icon={s.icon} time={T[i]} />
          ))}
          <Station x={960} y={120} icon={UsersIcon} time={END} fill="var(--settled-green)" />

          <Train d={MAIN} start={CUSTOMERS.start} dur={CUSTOMERS.dur} tone="ink" />
          <Train d={ROUTE} start={START} dur={TRAVEL} />
        </svg>

        {/* Labels sit over the quiet parts of the map. */}
        <div
          data-anim="rise"
          style={at(0, 700)}
          className="absolute top-0 left-0 w-[30%]"
        >
          <p className="text-[1.1875rem] font-semibold text-ink">The main line</p>
          <p className="text-label text-copy">The product customers use today.</p>
        </div>
        <div
          data-anim="rise"
          style={at(1200, 700)}
          className="absolute top-0 left-1/2 w-[34%] -translate-x-1/2 text-center"
        >
          <p className="text-label font-semibold text-ink">
            Meanwhile, customers carry on as normal.
          </p>
        </div>
        <div
          data-anim="focus"
          style={at(END)}
          className="absolute top-0 right-0 w-[26%] text-right"
        >
          <p className="text-[1.1875rem] font-semibold text-settled">Joins the main line</p>
          <p className="text-label text-copy">Customers get it, already checked.</p>
        </div>
        <div
          data-anim="rise"
          style={at(1800, 700)}
          className="absolute top-[70%] left-0 w-[24%]"
        >
          <p className="text-[1.1875rem] font-semibold text-harbour-deep">A branch</p>
          <p className="text-label text-copy">A safe copy where the new feature is built.</p>
        </div>
      </div>

      <ol className="relative -mt-1 h-24">
        {stops.map((s, i) => (
          <li
            key={s.title}
            data-anim="focus"
            // Centred under its station: its x as a share of the 1000-wide map.
            style={{ ...at(T[i]), left: `${s.x / 10}%` }}
            className="absolute top-0 w-[16%] -translate-x-1/2 text-center"
          >
            <p className="text-[1.0625rem] leading-snug font-semibold text-ink">{s.title}</p>
            <p className="mt-1 text-label leading-snug text-copy">{s.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
