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
import { Bank, Cloud, Coin, Doc, Handset, Letter, Lens, Person, Server } from "./props";

function Legend({ items }: { items: [string, string, string][] }) {
  return (
    <ul className="mt-6 grid gap-4 md:grid-cols-3 md:gap-8">
      {items.map(([dot, title, detail]) => (
        <li key={title} className="flex items-start gap-3">
          <span className={`mt-1.5 size-4 shrink-0 rounded-full ${dot}`} />
          <p className="text-label font-normal text-copy">
            <span className="font-semibold text-ink">{title}</span> {detail}
          </p>
        </li>
      ))}
    </ul>
  );
}

/* ================================================================== */
/* 1. Tolerance levels: an outage, measured three ways                 */
/* ================================================================== */

const LANE = "M110 210 L840 210";
const DETOUR = "M110 210 L200 210 C200 336 260 344 380 344 L580 344 C700 344 760 336 760 210 L840 210";
const DOWN = 2.6;
const DEGRADE = 3.3;
const UP = 7.0;

function Stopwatch() {
  // Disruption so far against the maximum period the board approved.
  return (
    <g transform="translate(300 78)">
      <rect x="-8" y="-58" width="16" height="12" rx="3" fill={C.ink} />
      <circle r="44" fill={C.paper} stroke={C.ink} strokeWidth="3" />
      <circle r="32" fill="none" stroke={C.hair} strokeWidth="12" />
      <g transform="rotate(-90)">
        <circle r="32" fill="none" stroke={C.wattle} strokeWidth="12" pathLength={100} strokeDasharray="100" strokeDashoffset={100}>
          <Anim attr="stroke-dashoffset" values={[100, 40]} at={DOWN} dur={UP - DOWN} ease={null} />
        </circle>
      </g>
      {/* The tolerance mark, three quarters of the way round. */}
      <line x1="0" y1="-24" x2="0" y2="-42" stroke={C.stop} strokeWidth="5" strokeLinecap="round" transform="rotate(270)" />
    </g>
  );
}

function DataBlocks() {
  // Records written as payments pass; the newest is lost in the outage.
  return (
    <g transform="translate(600 62)">
      <rect x="-10" y="-14" width="160" height="58" rx="8" fill={C.paper} stroke={C.ink} strokeWidth="3" />
      {[0, 1, 2, 3, 4, 5].map((k) => (
        <g key={k} opacity={0}>
          <FadeIn at={0.5 + k * 0.36} dur={0.2} />
          <g>
            {k === 5 && <Turn type="translate" values={["0 0", "0 70"]} at={DOWN + 0.2} dur={0.7} ease={ease.in} />}
            {k === 5 && <FadeOut at={DOWN + 0.6} dur={0.3} />}
            <rect x={k * 23} y="0" width="18" height="30" rx="3" fill={HEX.chart}>
              {k === 5 && <Anim attr="fill" values={[HEX.chart, HEX.stop]} at={DOWN} dur={0.2} />}
            </rect>
          </g>
        </g>
      ))}
      {/* How much data may be lost: no more than the last two records. */}
      <line x1={4 * 23 - 3} y1="-8" x2={4 * 23 - 3} y2="38" stroke={C.stop} strokeWidth="3" strokeDasharray="4 4" />
    </g>
  );
}

export function ToleranceScene() {
  const before = [0.2, 0.7, 1.2];
  const detour = [DEGRADE + 0.9, DEGRADE + 1.9, DEGRADE + 2.9];
  const after = [UP + 0.4, UP + 0.9];
  return (
    <Scene
      viewBox="0 0 960 420"
      end={UP + 3.2}
      label="Payments flow from a customer's phone through the core platform to the bank. The platform fails. A stopwatch starts filling towards its tolerance mark, and the newest data record drops away, inside the allowed loss. A slower detour through a manual step keeps some payments moving. The platform recovers before the stopwatch reaches the mark, and payments flow again."
    >
      <Stopwatch />
      <DataBlocks />
      <Pop x={364} y={44} at={UP + 0.2}>
        <TickBadge r={16} />
      </Pop>
      <Pop x={758} y={44} at={UP + 0.35}>
        <TickBadge r={16} />
      </Pop>

      {/* The normal path and the degraded one. */}
      <path d={LANE} stroke={C.hair} strokeWidth="16" strokeLinecap="round" fill="none" />
      <path d={DETOUR} stroke={C.wattle} strokeWidth="8" strokeLinecap="round" fill="none" {...drawable}>
        <Draw at={DEGRADE} dur={0.9} />
        <Anim attr="opacity" values={[1, 0.3]} at={UP + 0.3} dur={0.5} />
      </path>
      <g transform="translate(480 344)" opacity={0}>
        <FadeIn at={DEGRADE + 0.5} />
        <circle r="30" fill={C.wattleTint} stroke={C.wattle} strokeWidth="3" />
        <g transform="scale(0.7)">
          <Doc lines={3} />
        </g>
      </g>

      {[
        ...before.map((t) => ({ t, d: LANE, run: 2.2 })),
        ...detour.map((t) => ({ t, d: DETOUR, run: 3.0 })),
        ...after.map((t) => ({ t, d: LANE, run: 2.2 })),
      ].map(({ t, d, run }) => (
        <g key={t} opacity={0}>
          <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.06, 0.94, 1]} at={t} dur={run} ease={null} />
          <Move path={d} at={t} dur={run} ease={null} />
          <g transform="scale(0.8)">
            <Coin />
          </g>
        </g>
      ))}
      {/* One payment caught in the outage waits, then finishes. */}
      <g opacity={0}>
        <FadeIn at={1.8} dur={0.1} />
        <Move path="M110 210 L425 210" at={1.8} dur={0.95} ease={null} />
        <Move path="M425 210 L840 210" at={UP + 0.1} dur={1.25} ease={null} />
        <FadeOut at={UP + 1.3} dur={0.1} />
        <g transform="scale(0.8)">
          <Coin />
        </g>
      </g>

      <g transform="translate(70 210)">
        <Handset />
      </g>
      <g transform="translate(886 206)">
        <Bank />
      </g>

      {/* The core platform. */}
      <g transform="translate(480 210) scale(1.1)">
        <Server />
        <rect x="-35" y="-50" width="70" height="100" rx="6" fill={C.stop} opacity={0}>
          <Anim attr="opacity" values={[0, 0.75]} at={DOWN} dur={0.2} />
          <Anim attr="opacity" values={[0.75, 0]} at={UP} dur={0.4} />
        </rect>
      </g>
      <Pop x={526} y={150} at={DOWN} dur={0.3}>
        <g opacity="1">
          <FadeOut at={UP} dur={0.3} />
          <path d="M4 -18 L-8 2 L2 2 L-4 18 L10 -4 L0 -4 Z" fill={C.wattle} stroke={C.ink} strokeWidth="2" strokeLinejoin="round" />
        </g>
      </Pop>
      <Pulse x={480} y={210} at={DOWN} from={40} to={90} colour={C.stop} />
      <Pulse x={480} y={210} at={UP} from={40} to={90} colour={C.settled} />
    </Scene>
  );
}

export function Tolerance() {
  return (
    <div>
      <ToleranceScene />
      <Legend
        items={[
          ["bg-wattle", "Maximum period of disruption.", "The stopwatch. A recovery time per service, tested, that lands before the tolerance mark."],
          ["bg-harbour-chart", "Maximum extent of data loss.", "The records. Replication and backups keep any loss inside the dashed line."],
          ["bg-wattle", "Minimum service in degraded mode.", "The detour. A slower way that still works, such as manual processing."],
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 2. Monitoring: every server green, and the customer still can't pay */
/* ================================================================== */

const J_Y = 260;
const STOPS = [
  { x: 80, node: <Person /> },
  { x: 230, node: <Handset /> },
  { x: 400, node: <KeyNode /> },
  { x: 570, node: <g transform="scale(0.7)"><Server /></g> },
];
const BREAK_X = 485; // between the identity service and payments
const PROBE = 3.0;
const ALERT = PROBE + 1.2;
const CLOCK: [number, number] = [830, 110];

function KeyNode() {
  return (
    <g>
      <circle r="30" fill={C.tint} stroke={C.harbour} strokeWidth="3" />
      <circle cx="-8" r="8" fill="none" stroke={C.ink} strokeWidth="4" />
      <path d="M0 0 L16 0 M10 0 L10 7 M15 0 L15 6" stroke={C.ink} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
}

export function MonitoringScene() {
  return (
    <Scene
      viewBox="0 0 960 400"
      end={ALERT + 4.4}
      label="Three servers each show a green tick. Below them a customer tries to pay through an app, an identity service and a payments system, but the link between identity and payments is broken and the payment bounces back. The servers stay green. Then a test payment runs the same journey, hits the break and raises an alarm. A 24-hour clock starts and a notice flies to APRA well before it runs out."
    >
      {/* Server checks: green the whole time. */}
      <rect x="40" y="30" width="420" height="130" rx="12" fill={C.paper} stroke={C.hair} strokeWidth="2" />
      {[130, 250, 370].map((x, i) => (
        <g key={x}>
          <g transform={`translate(${x} 96) scale(0.72)`}>
            <Server />
          </g>
          <Pop x={x + 30} y={58} at={0.3 + i * 0.15}>
            <TickBadge r={13} />
          </Pop>
          {[1.6, 3.6, 5.6].map((t) => (
            <Pulse key={t} x={x + 30} y={58} at={t + i * 0.1} from={13} to={30} colour={C.settled} width={3} />
          ))}
        </g>
      ))}

      {/* The customer journey. */}
      <path d={`M80 ${J_Y} L${BREAK_X - 16} ${J_Y}`} stroke={C.hair} strokeWidth="10" strokeLinecap="round" />
      <path d={`M${BREAK_X + 16} ${J_Y} L570 ${J_Y}`} stroke={C.hair} strokeWidth="10" strokeLinecap="round" />
      <path d={`M${BREAK_X - 10} ${J_Y - 14} L${BREAK_X - 2} ${J_Y + 4} L${BREAK_X - 12} ${J_Y + 14}`} fill="none" stroke={C.stop} strokeWidth="4" strokeLinejoin="round" />
      <path d={`M${BREAK_X + 10} ${J_Y - 14} L${BREAK_X + 2} ${J_Y + 4} L${BREAK_X + 12} ${J_Y + 14}`} fill="none" stroke={C.stop} strokeWidth="4" strokeLinejoin="round" />
      {STOPS.map((s) => (
        <g key={s.x} transform={`translate(${s.x} ${J_Y})`}>
          {s.node}
        </g>
      ))}

      {/* The customer's payment bounces off the break. */}
      <g transform={`translate(110 ${J_Y - 36})`} opacity={0}>
        <FadeIn at={0.8} dur={0.2} />
        <Move path={`M0 0 L${BREAK_X - 130} 0`} points={[0, 1, 0.8]} times={[0, 0.8, 1]} at={0.9} dur={1.5} ease={ease.inOut} />
        <FadeOut at={2.6} dur={0.3} />
        <g transform="scale(0.7)">
          <Coin />
        </g>
      </g>
      <Pop x={BREAK_X} y={J_Y - 52} at={2.1}>
        <g>
          <FadeOut at={PROBE - 0.3} dur={0.3} />
          <CrossBadge r={15} />
        </g>
      </Pop>

      {/* A test payment runs the whole journey, and finds the break. */}
      <g transform={`translate(110 ${J_Y + 40})`} opacity={0}>
        <FadeIn at={PROBE} dur={0.2} />
        <Move path={`M0 0 L${BREAK_X - 125} 0`} at={PROBE} dur={1.1} ease={null} />
        <circle r="10" fill={C.harbour} />
        <circle r="16" fill="none" stroke={C.harbour} strokeWidth="2" strokeDasharray="3 4" />
      </g>
      <path d={`M110 ${J_Y + 40} L${BREAK_X - 15} ${J_Y + 40}`} stroke={C.harbour} strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" fill="none" opacity={0}>
        <FadeIn at={PROBE} dur={0.3} />
      </path>
      <Pulse x={BREAK_X - 10} y={J_Y + 40} at={ALERT - 0.1} from={14} to={50} colour={C.stop} />
      <Pop x={BREAK_X} y={J_Y + 96} at={ALERT}>
        <g transform="rotate(0)">
          <Turn type="rotate" values={[0, 16, -14, 10, -6, 0]} at={ALERT + 0.3} dur={0.8} ease={null} />
          <circle r="20" fill={C.stop} />
          <path d="M-9 6 L-9 -2 Q-9 -11 0 -11 Q9 -11 9 -2 L9 6 L12 9 L-12 9 Z" fill={C.paper} />
        </g>
      </Pop>

      {/* The 24-hour clock, and the notice to APRA. */}
      <g transform={`translate(${CLOCK[0]} ${CLOCK[1]})`}>
        <circle r="56" fill={C.paper} stroke={C.ink} strokeWidth="3" />
        <circle r="42" fill="none" stroke={C.hair} strokeWidth="14" />
        <g transform="rotate(-90)">
          <circle r="42" fill="none" stroke={C.stop} strokeWidth="14" pathLength={100} strokeDasharray="100" strokeDashoffset={100}>
            <Anim attr="stroke-dashoffset" values={[100, 72]} at={ALERT + 0.3} dur={2.2} ease={null} />
          </circle>
        </g>
        <line x1="0" y1="0" x2="0" y2="-26" stroke={C.ink} strokeWidth="4" strokeLinecap="round" transform="rotate(0)">
          <Turn type="rotate" values={[0, 101]} at={ALERT + 0.3} dur={2.2} ease={null} />
        </line>
        <circle r="5" fill={C.ink} />
      </g>
      <g transform={`translate(${CLOCK[0]} 320)`}>
        <g transform="scale(0.8)">
          <Bank fill={C.tint} />
        </g>
      </g>
      <g transform={`translate(${CLOCK[0]} ${CLOCK[1] + 66})`} opacity={0}>
        <FadeIn at={ALERT + 2.4} dur={0.2} />
        <Move path="M0 0 L0 92" at={ALERT + 2.4} dur={0.8} />
        <FadeOut at={ALERT + 3.2} dur={0.2} />
        <g transform="scale(0.8)">
          <Letter />
        </g>
      </g>
      <Pulse x={CLOCK[0]} y={312} at={ALERT + 3.2} from={30} to={70} colour={C.settled} />
      <Pop x={CLOCK[0] + 52} y={276} at={ALERT + 3.4}>
        <TickBadge r={16} />
      </Pop>
    </Scene>
  );
}

export function Monitoring() {
  return (
    <div>
      <MonitoringScene />
      <Legend
        items={[
          ["bg-settled", "Server checks:", "every machine is up, so every light stays green, even while customers can't pay."],
          ["bg-harbour", "A journey check:", "a test payment asks \"can a customer make a payment?\" end to end, and finds the break."],
          ["bg-stop", "The 24-hour notice:", "APRA must hear within 24 hours when a critical operation is outside tolerance."],
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 3. Fourth parties: a failure deep in the chain reaches every bank   */
/* ================================================================== */

const BANKS = [200, 480, 760].map((x) => ({ x, y: 72 }));
const VENDORS = [340, 620].map((x) => ({ x, y: 212 }));
const FOURTH: { x: number; y: number; node: ReactNode }[] = [
  { x: 150, y: 352, node: <Offshore /> },
  { x: 480, y: 352, node: <Cloud /> },
  { x: 810, y: 352, node: <g transform="scale(0.9)"><Lens /></g> },
];
const EDGES: [number, number, number, number][] = [
  // bank -> vendor
  [BANKS[0].x, BANKS[0].y, VENDORS[0].x, VENDORS[0].y],
  [BANKS[1].x, BANKS[1].y, VENDORS[0].x, VENDORS[0].y],
  [BANKS[1].x, BANKS[1].y, VENDORS[1].x, VENDORS[1].y],
  [BANKS[2].x, BANKS[2].y, VENDORS[1].x, VENDORS[1].y],
  // vendor -> fourth party
  [VENDORS[0].x, VENDORS[0].y, FOURTH[0].x, FOURTH[0].y],
  [VENDORS[0].x, VENDORS[0].y, FOURTH[1].x, FOURTH[1].y],
  [VENDORS[1].x, VENDORS[1].y, FOURTH[1].x, FOURTH[1].y],
  [VENDORS[1].x, VENDORS[1].y, FOURTH[2].x, FOURTH[2].y],
];
const FAIL = 3.0;
const UP_TO_VENDORS = FAIL + 0.9;
const UP_TO_BANKS = UP_TO_VENDORS + 0.9;
const MAP = UP_TO_BANKS + 1.6;

function Offshore() {
  return (
    <g>
      <circle r="36" fill={C.shallows} stroke={C.ink} strokeWidth="3" />
      <ellipse rx="16" ry="36" fill="none" stroke={C.hair} strokeWidth="2.5" />
      <line x1="-36" y1="0" x2="36" y2="0" stroke={C.hair} strokeWidth="2.5" />
      <g transform="translate(20 14) scale(0.7)">
        <Person />
      </g>
    </g>
  );
}

export function FourthPartyScene() {
  return (
    <Scene
      viewBox="0 0 960 420"
      end={MAP + 2.2}
      label="Three banks at the top rely on two technology vendors, and those vendors rely on fourth parties underneath: an offshore support team, a shared cloud, and a fraud engine. A faulty update hits the shared cloud. Red pulses travel up to both vendors and then to all three banks. Finally a dashed outline draws around one bank's whole chain, down to its fourth parties."
    >
      {EDGES.map(([x1, y1, x2, y2], i) => (
        <path key={i} d={`M${x1} ${y1 + 40} L${x2} ${y2 - 40}`} stroke={C.hair} strokeWidth="4" strokeLinecap="round" {...drawable}>
          <Draw at={0.4 + (i < 4 ? 0 : 0.8) + (i % 4) * 0.1} dur={0.6} />
        </path>
      ))}

      {/* The dependency map for the middle bank, drawn last. */}
      <path
        d="M480 18 C600 18 700 120 690 212 C780 300 560 420 480 412 C400 420 180 300 270 212 C260 120 360 18 480 18 Z"
        fill={C.tint}
        fillOpacity="0.35"
        stroke={C.harbour}
        strokeWidth="4"
        strokeDasharray="1"
        strokeDashoffset={1}
        pathLength={1}
        opacity={0}
      >
        <Anim attr="opacity" values={[0, 1]} at={MAP} dur={0.1} />
        <Draw at={MAP} dur={1.4} />
      </path>

      {BANKS.map((b, i) => (
        <g key={b.x} transform={`translate(${b.x} ${b.y}) scale(0.62)`}>
          <Bank />
          <rect x="-56" y="-58" width="112" height="102" rx="10" fill={C.stop} opacity={0}>
            <Anim attr="opacity" values={[0, 0.35, 0.15]} at={UP_TO_BANKS + i * 0.08} dur={1.2} />
          </rect>
        </g>
      ))}
      {VENDORS.map((v, i) => (
        <g key={v.x} transform={`translate(${v.x} ${v.y}) scale(0.7)`}>
          <Server />
          <rect x="-35" y="-50" width="70" height="100" rx="6" fill={C.stop} opacity={0}>
            <Anim attr="opacity" values={[0, 0.6, 0.3]} at={UP_TO_VENDORS + i * 0.08} dur={1.2} />
          </rect>
        </g>
      ))}
      {FOURTH.map((f) => (
        <g key={f.x} transform={`translate(${f.x} ${f.y})`}>
          {f.node}
        </g>
      ))}

      {/* The faulty update lands on the shared cloud. */}
      <g transform={`translate(${FOURTH[1].x} ${FOURTH[1].y})`}>
        <path
          d="M-40 22 Q-58 22 -58 6 Q-58 -10 -40 -10 Q-38 -32 -14 -32 Q4 -44 22 -30 Q46 -32 48 -8 Q62 -4 60 10 Q58 22 42 22 Z"
          fill={C.stop}
          opacity={0}
        >
          <Anim attr="opacity" values={[0, 0.5]} at={FAIL} dur={0.3} />
        </path>
      </g>
      <Pop x={FOURTH[1].x} y={FOURTH[1].y - 4} at={FAIL - 0.1} dur={0.35}>
        <path d="M5 -22 L-10 3 L1 3 L-5 22 L12 -5 L1 -5 Z" fill={C.wattle} stroke={C.ink} strokeWidth="2" strokeLinejoin="round" />
      </Pop>
      <Pulse x={FOURTH[1].x} y={FOURTH[1].y} at={FAIL} from={40} to={110} colour={C.stop} />

      {/* Red pulses climb the chain. */}
      {EDGES.filter((e) => e[2] === FOURTH[1].x && e[3] === FOURTH[1].y).map(([x1, y1, x2, y2]) => (
        <g key={`${x1}`} transform={`translate(${x2} ${y2 - 40})`} opacity={0}>
          <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.9, 1]} at={FAIL + 0.1} dur={0.8} ease={null} />
          <Move path={`M0 0 L${x1 - x2} ${y1 + 40 - (y2 - 40)}`} at={FAIL + 0.1} dur={0.8} ease={ease.in} />
          <circle r="9" fill={C.stop} />
        </g>
      ))}
      {EDGES.slice(0, 4).map(([x1, y1, x2, y2], i) => (
        <g key={i} transform={`translate(${x2} ${y2 - 40})`} opacity={0}>
          <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.9, 1]} at={UP_TO_VENDORS + 0.1} dur={0.8} ease={null} />
          <Move path={`M0 0 L${x1 - x2} ${y1 + 40 - (y2 - 40)}`} at={UP_TO_VENDORS + 0.1} dur={0.8} ease={ease.in} />
          <circle r="9" fill={C.stop} />
        </g>
      ))}
      {BANKS.map((b, i) => (
        <Pulse key={b.x} x={b.x} y={b.y} at={UP_TO_BANKS + i * 0.08} from={30} to={70} colour={C.stop} />
      ))}
    </Scene>
  );
}

export function FourthParty() {
  return (
    <div>
      <FourthPartyScene />
      <ul className="mt-6 grid gap-4 md:grid-cols-3 md:gap-8">
        {[
          ["Top: regulated entities.", "Three banks, sharing some of the same vendors."],
          ["Middle: material service providers.", "The vendors each bank has a contract with."],
          ["Bottom: fourth parties.", "An offshore support team, a shared cloud and a fraud engine. No bank signed anything with them."],
        ].map(([t, d]) => (
          <li key={t} className="text-label font-normal text-copy">
            <span className="font-semibold text-ink">{t}</span> {d}
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-hairline pt-4 text-label font-normal text-copy">
        The dashed outline is one bank&apos;s dependency map: every critical operation, traced down to fourth parties, and kept current.
      </p>
    </div>
  );
}
