import type { ReactNode } from "react";
import {
  Anim,
  C,
  CrossBadge,
  Draw,
  FadeIn,
  FadeOut,
  HEX,
  Move,
  Pop,
  Pulse,
  Scene,
  TickBadge,
  Turn,
  drawable,
  ease,
} from "./kit";
import { Doc, Lens, Padlock, Person, Seal } from "./props";

function Rows({ items }: { items: [string, string][] }) {
  return (
    <ul className="mt-6 grid gap-4 md:grid-cols-3 md:gap-8">
      {items.map(([title, detail]) => (
        <li key={title} className="text-label font-normal text-copy">
          <span className="block font-semibold text-ink">{title}</span>
          {detail}
        </li>
      ))}
    </ul>
  );
}

const st = {
  fill: "none",
  stroke: C.ink,
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/* ================================================================== */
/* 1. Risk first, then sources as plug-ins, then one record             */
/* ================================================================== */

const FACTORS: ReactNode[] = [
  <rect key="p" x="-9" y="-9" width="18" height="18" rx="3" {...st} />,
  <rect key="c" x="-6" y="-11" width="12" height="22" rx="3" {...st} />,
  <g key="g" {...st}>
    <circle r="10" />
    <path d="M-10 0 L10 0 M0 -10 Q6 0 0 10 Q-6 0 0 -10" />
  </g>,
  <g key="o" {...st}>
    <circle cx="-5" cy="-4" r="4" />
    <circle cx="6" cy="-4" r="4" />
    <path d="M-12 10 Q-5 2 0 10 Q5 2 12 10" />
  </g>,
];

const SOURCES: { y: number; icon: ReactNode; chosen: boolean }[] = [
  {
    y: 92,
    chosen: true,
    icon: (
      <g>
        <g transform="scale(0.55)">
          <Doc lines={3} />
        </g>
        <circle cx="14" cy="10" r="8" fill={C.settled} />
      </g>
    ),
  },
  {
    y: 172,
    chosen: false,
    icon: (
      <g {...st}>
        <rect x="-18" y="-12" width="36" height="24" rx="4" />
        <rect x="-12" y="-5" width="10" height="10" rx="2" fill={C.wattle} stroke="none" />
        <path d="M4 -3 L12 -3 M4 4 L10 4" />
      </g>
    ),
  },
  {
    y: 252,
    chosen: true,
    icon: (
      <g {...st}>
        <circle r="13" />
        <circle cx="-4" cy="-3" r="1.5" fill={C.ink} />
        <circle cx="4" cy="-3" r="1.5" fill={C.ink} />
        <path d="M-5 5 Q0 9 5 5" />
        <path d="M-18 -18 L-18 -12 M-18 -18 L-12 -18 M18 18 L18 12 M18 18 L12 18" />
      </g>
    ),
  },
  {
    y: 332,
    chosen: false,
    icon: (
      <g transform="scale(0.7)">
        <Person fill={C.wattleTint} stroke={C.wattle} />
      </g>
    ),
  },
];

const DIAL: [number, number] = [240, 212];
const SRC_X = 450;
const ADAPTER_X = 610;
const PICK = 2.0;
const PLUG = 2.9;
const RECORD = 4.4;

export function PluginsScene() {
  return (
    <Scene
      viewBox="0 0 960 420"
      end={RECORD + 2.6}
      label="A customer's four risk factors, product, channel, geography and ownership, drop into a dial whose needle settles on a level. That picks a verification path. Two of four identity sources, a document check and a face match, light up and slide into an adapter. The adapter produces one standard verification record, which is stamped. A copy of the identity document is crossed out, because it isn't needed."
    >
      <g transform="translate(76 212) scale(1.6)">
        <Person />
      </g>

      {/* Risk first. */}
      {FACTORS.map((f, i) => {
        const x = 150 + i * 60;
        return (
          <g key={i} transform={`translate(${x} 60)`}>
            <circle r="20" fill={C.paper} stroke={C.hair} strokeWidth="2" />
            <g opacity={0}>
              <FadeIn at={0.3 + i * 0.25} dur={0.1} />
              <Move path={`M0 0 L${DIAL[0] - x} ${DIAL[1] - 60}`} at={0.4 + i * 0.25} dur={0.6} ease={ease.in} />
              <FadeOut at={0.95 + i * 0.25} dur={0.1} />
              <circle r="18" fill={C.wattleTint} />
              {f}
            </g>
            {f}
          </g>
        );
      })}
      <g transform={`translate(${DIAL[0]} ${DIAL[1]})`}>
        <circle r="56" fill={C.paper} stroke={C.ink} strokeWidth="3" />
        <path d="M-40 14 A42 42 0 0 1 -14 -26" fill="none" stroke={C.settled} strokeWidth="9" />
        <path d="M-12 -27 A42 42 0 0 1 14 -27" fill="none" stroke={C.wattle} strokeWidth="9" />
        <path d="M16 -26 A42 42 0 0 1 40 14" fill="none" stroke={C.stop} strokeWidth="9" />
        <g transform="rotate(-70)">
          <Turn type="rotate" values={[-70, 20, -6]} at={1.5} dur={0.8} />
          <line x1="0" y1="8" x2="0" y2="-36" stroke={C.ink} strokeWidth="5" strokeLinecap="round" />
        </g>
        <circle r="7" fill={C.ink} />
      </g>

      {/* The score picks the path; two sources are used. */}
      {SOURCES.map((s, i) => (
        <g key={i}>
          <path d={`M${DIAL[0] + 56} ${DIAL[1]} C${DIAL[0] + 120} ${DIAL[1]} ${SRC_X - 120} ${s.y} ${SRC_X - 62} ${s.y}`} fill="none" stroke={C.hair} strokeWidth="3" />
          {s.chosen && (
            <path d={`M${DIAL[0] + 56} ${DIAL[1]} C${DIAL[0] + 120} ${DIAL[1]} ${SRC_X - 120} ${s.y} ${SRC_X - 62} ${s.y}`} fill="none" stroke={C.magenta} strokeWidth="5" {...drawable}>
              <Draw at={PICK} dur={0.6} />
            </path>
          )}
          <rect x={ADAPTER_X - 8} y={s.y - 12} width="16" height="24" rx="4" fill={C.ink} />
          <g transform={`translate(${SRC_X} ${s.y})`}>
            {s.chosen && <Move path={`M0 0 L${ADAPTER_X - SRC_X - 70} 0`} at={PLUG + i * 0.1} dur={0.5} ease={ease.in} />}
            <rect x="-60" y="-28" width="120" height="56" rx="12" fill={HEX.paper} stroke={C.ink} strokeWidth="3">
              {s.chosen && <Anim attr="fill" values={[HEX.paper, HEX.tint]} at={PICK + 0.5} dur={0.3} />}
            </rect>
            <rect x="60" y="-8" width="12" height="16" rx="2" fill={C.ink} />
            {s.icon}
          </g>
        </g>
      ))}

      {/* One adapter, one record. */}
      <rect x={ADAPTER_X} y="62" width="74" height="300" rx="14" fill={C.magenta} />
      {[0, 1, 2].map((k) => (
        <circle key={k} cx={ADAPTER_X + 37} cy={150 + k * 30} r="5" fill={C.tint} />
      ))}
      <g transform={`translate(${ADAPTER_X + 40} 212)`} opacity={0}>
        <FadeIn at={RECORD} dur={0.2} />
        <Move path={`M0 0 L${840 - ADAPTER_X - 40} 0`} at={RECORD} dur={0.8} ease={ease.out} />
        <g transform="scale(1.6)">
          <Doc lines={4} />
        </g>
      </g>
      <Pop x={858} y={238} at={RECORD + 0.9}>
        <g transform="scale(0.9)">
          <circle r="24" fill={C.paper} />
          <Seal r={22} />
        </g>
      </Pop>
      {/* No copy of the document is needed. */}
      <g transform="translate(800 346)" opacity={0}>
        <FadeIn at={RECORD + 1.2} dur={0.3} />
        <rect x="-30" y="-22" width="60" height="44" rx="5" fill={C.shallows} stroke={C.ink} strokeWidth="2.5" />
        <circle cx="-12" cy="-2" r="9" fill={C.hair} />
        <path d="M4 -6 L20 -6 M4 4 L16 4" stroke={C.hair} strokeWidth="3" strokeLinecap="round" />
      </g>
      <Pop x={836} y={326} at={RECORD + 1.6}>
        <CrossBadge r={14} />
      </Pop>
    </Scene>
  );
}

export function Plugins() {
  return (
    <div>
      <PluginsScene />
      <Rows
        items={[
          ["Decide risk before steps.", "Product, channel, geography and ownership set the score, and the score picks the verification path."],
          ["Treat sources as plug-ins.", "Top to bottom: the Document Verification Service, a Digital ID, a face match with liveness, and a manual path for people without standard ID."],
          ["Record what you did, not the document.", "Every source returns the same verification record. AUSTRAC doesn't require copies of ID documents."],
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 2. Screening that keeps running: every list update, everyone        */
/* ================================================================== */

const UPDATES = [0.8, 3.4, 6.6];
const SWEEP = 1.0;
const PEOPLE = Array.from({ length: 12 }, (_, i) => ({ x: 300 + (i % 4) * 90, y: 110 + Math.floor(i / 4) * 96, i }));
const HIT = 6; // the customer who matches on the second update
const QUEUE: [number, number] = [830, 300];

export function RescreenScene() {
  const hit = PEOPLE[HIT];
  const alertAt = UPDATES[1] + 0.4 + SWEEP * ((hit.x - 260) / 360);
  return (
    <Scene
      viewBox="0 0 960 400"
      end={UPDATES[2] + SWEEP + 1.4}
      label="A sanctions list on a clipboard gets a new page three times. Each time, a scanning bar sweeps across twelve customers. On the second update one customer turns amber as a possible match, and an alert card flies into a review queue. A magnifying glass checks it, the reviewer records a reason, and the card turns green as cleared. The third update finds nothing."
    >
      {/* The list, updated three times. */}
      <g transform="translate(110 200)">
        <rect x="-50" y="-70" width="100" height="140" rx="8" fill={C.wattleTint} stroke={C.ink} strokeWidth="3" />
        <rect x="-20" y="-80" width="40" height="18" rx="5" fill={C.ink} />
        {[0, 1, 2, 3, 4].map((k) => (
          <line key={k} x1="-32" y1={-40 + k * 20} x2={k % 2 ? 18 : 30} y2={-40 + k * 20} stroke={C.wattle} strokeWidth="4" strokeLinecap="round" />
        ))}
      </g>
      {UPDATES.map((t) => (
        <g key={t}>
          <g transform="translate(110 40)" opacity={0}>
            <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.8, 1]} at={t - 0.6} dur={0.8} ease={null} />
            <Move path="M0 0 L0 150" at={t - 0.6} dur={0.6} ease={ease.in} />
            <g transform="scale(0.9)">
              <Doc lines={4} fill={C.paper} />
            </g>
          </g>
          <Pulse x={110} y={200} at={t} from={60} to={110} colour={C.wattle} />
        </g>
      ))}

      {/* The customer base. */}
      {PEOPLE.map((p) => (
        <g key={p.i}>
          {p.i === HIT && (
            <circle cx={p.x} cy={p.y} r="34" fill={HEX.wattleTint} opacity={0}>
              <Anim attr="opacity" values={[0, 1]} at={alertAt} dur={0.2} />
              <Anim attr="fill" values={[HEX.wattleTint, HEX.settledTint]} at={UPDATES[1] + 2.5} dur={0.3} />
            </circle>
          )}
          <g transform={`translate(${p.x} ${p.y})`}>
            <Person />
          </g>
        </g>
      ))}
      {UPDATES.map((t) => (
        <g key={t} transform="translate(260 0)" opacity={0}>
          <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.05, 0.95, 1]} at={t + 0.4} dur={SWEEP} ease={null} />
          <Move path="M0 0 L360 0" at={t + 0.4} dur={SWEEP} ease={null} />
          <rect x="-10" y="56" width="20" height="300" rx="10" fill={C.chart} opacity="0.18" />
          <line x1="0" y1="56" x2="0" y2="356" stroke={C.magenta} strokeWidth="4" strokeLinecap="round" />
        </g>
      ))}

      {/* The review queue. */}
      <path d={`M${QUEUE[0] - 80} ${QUEUE[1] - 10} L${QUEUE[0] + 80} ${QUEUE[1] - 10} L${QUEUE[0] + 70} ${QUEUE[1] + 50} L${QUEUE[0] - 70} ${QUEUE[1] + 50} Z`} fill={C.shallows} stroke={C.ink} strokeWidth="3" strokeLinejoin="round" />
      <g transform={`translate(${hit.x} ${hit.y})`} opacity={0}>
        <FadeIn at={alertAt + 0.1} dur={0.2} />
        <Move path={`M0 0 C120 -80 ${QUEUE[0] - hit.x - 60} -60 ${QUEUE[0] - hit.x} ${QUEUE[1] - hit.y - 40}`} at={alertAt + 0.2} dur={0.9} />
        <rect x="-44" y="-28" width="88" height="56" rx="6" fill={HEX.wattleTint} stroke={C.ink} strokeWidth="2.5">
          <Anim attr="fill" values={[HEX.wattleTint, HEX.settledTint]} at={UPDATES[1] + 2.5} dur={0.3} />
        </rect>
        <rect x="-32" y="-16" width="40" height="8" rx="3" fill={C.wattle} />
        <path d="M-32 6 L28 6" stroke={C.ink} strokeWidth="3" strokeLinecap="round" {...drawable}>
          <Draw at={UPDATES[1] + 2.1} dur={0.4} ease={ease.out} />
        </path>
      </g>
      <g transform={`translate(${QUEUE[0] + 70} ${QUEUE[1] - 130})`} opacity={0}>
        <FadeIn at={UPDATES[1] + 1.3} dur={0.2} />
        <Move path="M0 0 L-60 60 L-40 70" at={UPDATES[1] + 1.3} dur={0.8} />
        <FadeOut at={UPDATES[1] + 2.2} dur={0.3} />
        <Lens />
      </g>
      <Pop x={QUEUE[0] + 46} y={QUEUE[1] - 68} at={UPDATES[1] + 2.6}>
        <TickBadge r={16} />
      </Pop>
    </Scene>
  );
}

export function Rescreen() {
  return (
    <div>
      <RescreenScene />
      <Rows
        items={[
          ["Every list update, every customer.", "Screening runs before service and again whenever DFAT's list, or a PEP list, changes."],
          ["Fuzzy matching makes false alarms.", "A possible match goes to a review queue, not straight to a refusal."],
          ["Each decision is recorded.", "The list entry, the match score, the analyst's decision and the reason."],
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 3. Records: history kept, never edited, deleted on schedule         */
/* ================================================================== */

const LOG = [
  { y: 104, at: 0.4, tone: C.magenta },
  { y: 168, at: 1.0, tone: C.wattle }, // address changed: a new version, the old one kept
  { y: 232, at: 1.6, tone: C.magenta },
  { y: 296, at: 2.2, tone: C.chart },
];
const ERASE = 3.0;
const YEAR = (k: number) => 4.3 + k * 0.42;
const SHRED = YEAR(6) + 0.9;
const SHELF_X = (k: number) => 470 + k * 64;

export function RecordsScene() {
  return (
    <Scene
      viewBox="0 0 960 420"
      end={SHRED + 2.2}
      label="On the left, an event log gains four entries. One is a change of address, shown as a new card in front of the old one, which stays. An eraser tries to rub out an entry and bounces off a padlock. On the right, records fill a shelf, one box per year, for seven years. Then a scheduled job turns and the oldest box drops into a shredder."
    >
      {/* The append-only log. */}
      <rect x="40" y="56" width="330" height="300" rx="12" fill={C.paper} stroke={C.ink} strokeWidth="3" />
      {LOG.map((row, i) => (
        <g key={i} opacity={0}>
          <FadeIn at={row.at} dur={0.3} />
          {i === 1 && (
            <rect x="96" y={row.y - 30} width="250" height="40" rx="6" fill={C.shallows} stroke={C.hair} strokeWidth="2" />
          )}
          <g>
            {i === 1 && <Move path="M0 -10 L0 0" at={row.at} dur={0.3} />}
            <circle cx="70" cy={row.y} r="9" fill={row.tone} />
            <rect x="88" y={row.y - 18} width="262" height="36" rx="6" fill={C.paper} stroke={C.ink} strokeWidth="2" />
            <rect x="100" y={row.y - 6} width={i === 1 ? 120 : 160 - i * 20} height="12" rx="4" fill={row.tone} opacity="0.6" />
          </g>
        </g>
      ))}
      <line x1="70" y1="104" x2="70" y2="296" stroke={C.hair} strokeWidth="3" />
      {/* An attempt to rub something out. */}
      <g transform="translate(420 40)" opacity={0}>
        <FadeIn at={ERASE} dur={0.2} />
        <Move path="M0 0 L-140 120" points={[0, 1, 0.55]} times={[0, 0.6, 1]} at={ERASE} dur={1.0} ease={ease.inOut} />
        <FadeOut at={ERASE + 1.1} dur={0.3} />
        <g transform="rotate(-30)">
          <rect x="-26" y="-12" width="52" height="24" rx="5" fill={C.stopTint} stroke={C.ink} strokeWidth="2.5" />
          <rect x="-26" y="-12" width="18" height="24" rx="5" fill={C.stop} />
        </g>
      </g>
      <Pop x={300} y={170} at={ERASE + 0.55}>
        <g>
          <FadeOut at={ERASE + 1.6} dur={0.3} />
          <circle r="24" fill={C.paper} stroke={C.ink} strokeWidth="2" />
          <g transform="scale(0.8)">
            <Padlock />
          </g>
        </g>
      </Pop>

      {/* Seven years on the shelf. */}
      <line x1="440" y1="300" x2="920" y2="300" stroke={C.ink} strokeWidth="5" strokeLinecap="round" />
      {Array.from({ length: 7 }, (_, k) => (
        <g key={k}>
          <rect x={SHELF_X(k) - 26} y="306" width="52" height="10" rx="3" fill={C.hair} />
          <rect x={SHELF_X(k) - 26} y="306" width="52" height="10" rx="3" fill={C.chart} opacity={0}>
            <Anim attr="opacity" values={[0, 1]} at={YEAR(k)} dur={0.1} ease={null} />
          </rect>
          <g transform={`translate(${SHELF_X(k)} 268)`} opacity={0}>
            <FadeIn at={YEAR(k)} dur={0.15} />
            <g>
              {k === 0 && <Move path="M0 0 L0 0 L0 120" points={[0, 0, 1]} times={[0, 0.4, 1]} at={SHRED} dur={0.8} ease={ease.in} />}
              {k === 0 && <FadeOut at={SHRED + 0.6} dur={0.2} />}
              <Move path="M0 -40 L0 0" at={YEAR(k)} dur={0.3} ease={ease.in} />
              <rect x="-26" y="-30" width="52" height="60" rx="4" fill={C.wattleTint} stroke={C.ink} strokeWidth="2.5" />
              <rect x="-14" y="-16" width="28" height="12" rx="2" fill={C.paper} stroke={C.ink} strokeWidth="1.5" />
            </g>
          </g>
        </g>
      ))}
      {/* The scheduled deletion job. */}
      <g transform="translate(386 386) scale(0.75)">
        <g transform="rotate(0)">
          <Turn type="rotate" values={[0, 180]} at={SHRED - 0.9} dur={0.9} ease={ease.inOut} />
          {Array.from({ length: 8 }, (_, k) => (
            <rect key={k} x="-6" y="-34" width="12" height="14" rx="2" fill={C.ink} transform={`rotate(${k * 45})`} />
          ))}
          <circle r="24" fill={C.ink} />
          <circle r="9" fill={C.paper} />
        </g>
      </g>
      <g transform="translate(470 392)">
        <rect x="-40" y="-14" width="80" height="28" rx="6" fill={C.ink} />
        {[-24, -12, 0, 12, 24].map((x) => (
          <line key={x} x1={x} y1="14" x2={x} y2="26" stroke={C.ink} strokeWidth="3">
            <Anim attr="y2" values={[14, 26]} at={SHRED + 0.6} dur={0.3} />
          </line>
        ))}
      </g>
      <Pulse x={470} y={392} at={SHRED + 0.7} from={20} to={60} colour={C.wattle} />
    </Scene>
  );
}

export function Records() {
  return (
    <div>
      <RecordsScene />
      <Rows
        items={[
          ["History, not overwrites.", "A changed address becomes a new version. The old one stays, with its date and cause."],
          ["A log no one can edit.", "Append-only, so it can prove when an alert first appeared and when a suspicion formed."],
          ["Retention as a scheduled job.", "Records are usually kept for 7 years, then deleted by a rule for each record type."],
        ]}
      />
    </div>
  );
}
