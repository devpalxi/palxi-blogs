import { Anim, C, FadeIn, Pop, Pulse, Scene, Turn, ease } from "./kit";

/*
 * One incident, several clocks. A shock spreads out from the incident and
 * turns over an hourglass for each deadline. The sand runs out in deadline
 * order (not to scale), and each glass rings when its notice is due.
 */

type Clock = {
  amount: string;
  tag: string;
  label: string;
  sand: string;
  /** Seconds the sand takes to run. Shows order only, not real proportions. */
  run: number;
};

const CLOCKS: Clock[] = [
  {
    amount: "24 hours",
    tag: "CPS 230",
    label: "A critical operation is disrupted beyond tolerance",
    sand: C.stop,
    run: 2.4,
  },
  {
    amount: "72 hours",
    tag: "CPS 234",
    label: "A material information security incident",
    sand: C.wattle,
    run: 4.6,
  },
  {
    amount: "72 hours",
    tag: "CPS 230",
    label: "An operational risk incident with material impact",
    sand: C.wattle,
    run: 4.6,
  },
  {
    amount: "10 business days",
    tag: "CPS 234",
    label: "A material control weakness that can't be fixed in time",
    sand: C.chart,
    run: 7.6,
  },
];

const FLIP_AT = 1.2;
const FLIP = 0.7;
const END = FLIP_AT + 0.3 + FLIP + Math.max(...CLOCKS.map((c) => c.run)) + 1;

// Sand shapes. Each pair has the same commands, so SMIL can morph between them.
const TOP_FULL = "M20 58 Q60 70 100 58 L100 112 L20 112 Z";
const TOP_EMPTY = "M20 110 Q60 112 100 110 L100 112 L20 112 Z";
const PILE_EMPTY = "M20 180 L20 180 Q60 180 100 180 L100 180 Z";
const PILE_FULL = "M20 180 L20 156 Q60 112 100 156 L100 180 Z";

const GLASS =
  "M30 38 C30 72 54 90 57 108 C54 126 30 144 30 178 L90 178 C90 144 66 126 63 108 C66 90 90 72 90 38 Z";

export function IncidentScene() {
  return (
    <Scene
      viewBox="0 0 960 120"
      end={END}
      label="A red alarm flashes and rings of shock spread out across the page."
      className="mx-auto max-w-[720px]"
    >
      {[0, 1, 2].map((k) => (
        <Pulse key={k} x={480} y={60} at={0.4 + k * 0.3} from={34} to={460} colour={C.stop} width={3} dur={1.4} />
      ))}
      <Pop x={480} y={60} at={0.15} dur={0.5}>
        <circle r="36" fill={C.stop} />
        <path d="M5 -24 L-12 4 L0 4 L-5 24 L13 -6 L1 -6 Z" fill={C.paper} strokeLinejoin="round" />
      </Pop>
    </Scene>
  );
}

export function HourglassScene({ clock, index }: { clock: Clock; index: number }) {
  const flip = FLIP_AT + index * 0.12;
  const start = flip + FLIP;
  const done = start + clock.run;
  const clip = `hg-glass-${index}`;
  return (
    <Scene
      viewBox="0 0 120 210"
      end={END}
      label={`An hourglass turns over and its sand runs out. The deadline is ${clock.amount}.`}
      className="mx-auto w-24 sm:w-28"
    >
      <defs>
        <clipPath id={clip}>
          <path d={GLASS} />
        </clipPath>
      </defs>
      <g transform="rotate(180 60 108)">
        <Turn type="rotate" values={["180 60 108", "360 60 108"]} at={flip} dur={FLIP} ease={ease.inOut} />

        <path d={GLASS} fill={C.paper} />
        <g clipPath={`url(#${clip})`}>
          {/* Top bulb: a surface with a dip that sinks to the neck. */}
          <path d={TOP_FULL} fill={clock.sand}>
            <Anim attr="d" values={[TOP_FULL, TOP_EMPTY]} at={start} dur={clock.run} ease={null} />
          </path>
          {/* Bottom bulb: a mound that builds up. */}
          <path d={PILE_EMPTY} fill={clock.sand}>
            <Anim attr="d" values={[PILE_EMPTY, PILE_FULL]} at={start} dur={clock.run} ease={null} />
          </path>
          <line x1="60" y1="106" x2="60" y2="178" stroke={clock.sand} strokeWidth="3" opacity={0}>
            <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.03, 0.97, 1]} at={start} dur={clock.run} ease={null} />
          </line>
        </g>
        <path d={GLASS} fill="none" stroke={C.ink} strokeWidth="3" strokeLinejoin="round" />
        <path d="M38 50 C39 70 47 84 52 96" fill="none" stroke={C.paper} strokeWidth="3.5" strokeLinecap="round" opacity="0.8" />

        {/* The frame. */}
        <rect x="14" y="26" width="92" height="12" rx="4" fill={C.ink} />
        <rect x="14" y="178" width="92" height="12" rx="4" fill={C.ink} />
        <line x1="20" y1="38" x2="20" y2="178" stroke={C.ink} strokeWidth="4" />
        <line x1="100" y1="38" x2="100" y2="178" stroke={C.ink} strokeWidth="4" />
      </g>

      {/* Time's up: the notice is due. */}
      <Pulse x={60} y={108} at={done} from={30} to={70} colour={clock.sand} />
      <Pop x={96} y={16} at={done} dur={0.5}>
        <g transform="rotate(0)">
          <Turn type="rotate" values={[0, 18, -14, 10, -6, 0]} at={done + 0.35} dur={0.8} ease={null} />
          <circle r="16" fill={clock.sand} />
          <path d="M-7 5 L-7 -1 Q-7 -9 0 -9 Q7 -9 7 -1 L7 5 L9 7 L-9 7 Z" fill={C.paper} />
          <circle cy="10" r="2.2" fill={C.paper} />
        </g>
      </Pop>
    </Scene>
  );
}

const TAG_TONE: Record<string, string> = {
  "24 hours": "bg-stop-tint text-stop",
  "72 hours": "bg-wattle-tint text-wattle",
  "10 business days": "bg-magenta-tint text-magenta-deep",
};

export function Hourglasses() {
  return (
    <div>
      <IncidentScene />
      <p className="mt-1 text-center font-semibold text-ink">An incident happens</p>
      <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
        {CLOCKS.map((clock, i) => (
          <li key={`${clock.amount}-${clock.tag}`} className="text-center">
            <HourglassScene clock={clock} index={i} />
            <p className="mt-3 font-heading text-title font-semibold text-ink">{clock.amount}</p>
            <p className="mt-1">
              <span className={`inline-block rounded-full px-3 py-0.5 text-label font-semibold ${TAG_TONE[clock.amount]}`}>
                {clock.tag}
              </span>
            </p>
            <p className="mt-2 text-label font-normal text-copy">{clock.label}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 border-t border-hairline pt-4 text-label font-normal text-copy">
        Not to scale. Privacy Act and ransomware payment reporting add further
        clocks.
      </p>
    </div>
  );
}
