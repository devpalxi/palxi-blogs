import type { ReactNode } from "react";
import {
  Anim,
  C,
  CrossBadge,
  Draw,
  FadeIn,
  FadeOut,
  HEX,
  Mini,
  Move,
  Pop,
  Pulse,
  Scene,
  TickBadge,
  Turn,
  drawable,
  ease,
} from "./kit";
import { Doc, Handset, Laptop, Server } from "./props";

const ink = {
  fill: "none",
  stroke: C.ink,
  strokeWidth: 3.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/* Small pictograms, about 44 across, centred on the origin. */
const P = {
  ledger: (
    <g {...ink}>
      <path d="M-20 -16 Q-10 -20 0 -15 Q10 -20 20 -16 L20 16 Q10 12 0 17 Q-10 12 -20 16 Z" />
      <path d="M0 -15 L0 17 M-14 -6 L-6 -6 M-14 2 L-6 2 M6 -6 L14 -6 M6 2 L14 2" />
    </g>
  ),
  payroll: (
    <g {...ink}>
      <circle cx="-8" cy="-8" r="6" />
      <path d="M-18 12 Q-18 0 -8 0 Q2 0 2 12" />
      <rect x="6" y="-6" width="16" height="18" rx="2" />
      <path d="M10 0 L18 0 M10 6 L16 6" />
    </g>
  ),
  sanctions: (
    <g {...ink}>
      <rect x="-18" y="-20" width="26" height="36" rx="3" />
      <path d="M-12 -12 L2 -12 M-12 -4 L2 -4 M-12 4 L-2 4" />
      <circle cx="10" cy="8" r="8" />
      <path d="M16 14 L22 20" />
    </g>
  ),
  identity: (
    <g {...ink}>
      <rect x="-22" y="-14" width="44" height="28" rx="4" />
      <circle cx="-9" cy="-3" r="5" />
      <path d="M-17 9 Q-9 1 -1 9 M5 -5 L15 -5 M5 3 L13 3" />
    </g>
  ),
  routing: (
    <g {...ink}>
      <path d="M-20 0 L-4 0 Q4 0 8 -10 L18 -10 M14 -15 L19 -10 L14 -5" />
      <path d="M-4 0 Q4 0 8 10 L18 10 M14 5 L19 10 L14 15" />
      <circle cx="-20" cy="0" r="3" fill={C.ink} />
    </g>
  ),
  feeds: (
    <g {...ink}>
      <path d="M-20 -6 L-8 -6 M-20 6 L-8 6" />
      <rect x="-8" y="-12" width="14" height="24" rx="3" />
      <path d="M6 0 L20 0" />
    </g>
  ),
  app: (
    <g {...ink}>
      <rect x="-12" y="-20" width="24" height="40" rx="5" />
      <path d="M-5 -14 L5 -14 M-6 -4 L6 -4 M-6 4 L2 4" />
    </g>
  ),
  pricing: (
    <g {...ink}>
      <path d="M-20 10 A20 20 0 0 1 20 10" />
      <path d="M0 10 L10 -6" />
      <circle cx="0" cy="10" r="3" fill={C.ink} />
      <path d="M-14 -2 L-11 0 M14 -2 L11 0 M0 -10 L0 -6" />
    </g>
  ),
};

/* ================================================================== */
/* 1. Dealing the capability map into buy, integrate and build         */
/* ================================================================== */

const TRAYS = [
  { x: 170, fill: C.shallows, edge: C.hair, label: "Buy" },
  { x: 480, fill: C.wattleTint, edge: C.wattle, label: "Integrate" },
  { x: 790, fill: C.tint, edge: C.harbour, label: "Build" },
];
const CARDS: { icon: ReactNode; tray: number; slot: number; name: string }[] = [
  { icon: P.ledger, tray: 0, slot: 0, name: "General ledger" },
  { icon: P.app, tray: 2, slot: 0, name: "Customer and broker apps" },
  { icon: P.sanctions, tray: 0, slot: 1, name: "Sanctions and PEP data" },
  { icon: P.routing, tray: 1, slot: 0, name: "Routing between payment rails" },
  { icon: P.payroll, tray: 0, slot: 2, name: "Payroll and office tools" },
  { icon: P.pricing, tray: 2, slot: 1, name: "Pricing and decisioning" },
  { icon: P.identity, tray: 0, slot: 3, name: "Identity verification" },
  { icon: P.feeds, tray: 1, slot: 1, name: "Feeds from custodians and registries" },
];
const DECK: [number, number] = [480, 66];
const DEAL = (i: number) => 0.7 + i * 0.55;
const FLY = 0.8;

function slotPos(tray: number, slot: number) {
  const count = CARDS.filter((c) => c.tray === tray).length;
  const x = TRAYS[tray].x + (slot - (count - 1) / 2) * 64;
  return [x, 262] as const;
}

function CardBack() {
  return (
    <g>
      <rect x="-30" y="-38" width="60" height="76" rx="7" fill={C.deep} stroke={C.ink} strokeWidth="2.5" />
      <rect x="-22" y="-30" width="44" height="60" rx="4" fill="none" stroke={C.chart} strokeWidth="2" strokeDasharray="4 4" />
    </g>
  );
}

function CardFace({ icon, tone }: { icon: ReactNode; tone: string }) {
  return (
    <g>
      <rect x="-30" y="-38" width="60" height="76" rx="7" fill={C.paper} stroke={C.ink} strokeWidth="2.5" />
      <rect x="-30" y="26" width="60" height="12" rx="0" fill={tone} />
      <g transform="translate(0 -6) scale(0.95)">{icon}</g>
    </g>
  );
}

export function SortScene() {
  const last = DEAL(CARDS.length - 1) + FLY;
  return (
    <Scene
      viewBox="0 0 960 400"
      end={last + 1.4}
      label="Eight capability cards are dealt from a deck. Each one flips over in flight and lands in one of three trays. General ledger, sanctions data, payroll and identity verification go to Buy. Payment routing and data feeds go to Integrate. Customer apps and pricing go to Build."
    >
      {/* The deck. */}
      {[3, 2, 1, 0].map((k) => (
        <g key={k} transform={`translate(${DECK[0] + k * 4} ${DECK[1] + k * 4}) scale(1.35)`}>
          <CardBack />
        </g>
      ))}

      {TRAYS.map((t) => (
        <g key={t.label}>
          <rect x={t.x - 145} y="236" width="290" height="140" rx="14" fill={t.fill} stroke={t.edge} strokeWidth="3" />
        </g>
      ))}

      {CARDS.map((card, i) => {
        const [x, y] = slotPos(card.tray, card.slot);
        const t = DEAL(i);
        const tilt = (i % 3) - 1;
        return (
          <g key={card.name} transform={`translate(${DECK[0]} ${DECK[1]})`} opacity={0}>
            <Anim attr="opacity" values={[0, 1]} at={t} dur={0.05} ease={null} />
            <Move path={`M0 0 Q${(x - DECK[0]) * 0.4} -40 ${x - DECK[0]} ${y - DECK[1]}`} at={t} dur={FLY} />
            <g transform="rotate(0)">
              <Turn type="rotate" values={[0, tilt * 14, tilt * 4]} at={t} dur={FLY} />
              <g transform="scale(1.35)">
              <g transform="scale(1 1)">
                <Turn type="scale" values={["1 1", "0 1", "1 1"]} at={t + 0.15} dur={0.4} ease={ease.inOut} />
                <g>
                  <Anim attr="opacity" values={[1, 0]} at={t + 0.35} dur={0.01} ease={null} />
                  <CardBack />
                </g>
                <g opacity={0}>
                  <Anim attr="opacity" values={[0, 1]} at={t + 0.35} dur={0.01} ease={null} />
                  <CardFace icon={card.icon} tone={TRAYS[card.tray].edge} />
                </g>
              </g>
              </g>
            </g>
          </g>
        );
      })}

      {/* The tray fronts sit over the cards. */}
      {TRAYS.map((t, k) => (
        <g key={t.label}>
          <path d={`M${t.x - 145} 298 L${t.x + 145} 298 L${t.x + 136} 368 Q${t.x + 134} 376 ${t.x + 124} 376 L${t.x - 124} 376 Q${t.x - 134} 376 ${t.x - 136} 368 Z`} fill={t.fill} stroke={t.edge} strokeWidth="3" strokeLinejoin="round" />
          <Pulse x={t.x} y={330} at={last + 0.2 + k * 0.12} from={20} to={70} colour={t.edge} width={3} />
        </g>
      ))}
    </Scene>
  );
}

export function Sort() {
  return (
    <div>
      <SortScene />
      <div className="mt-6 grid gap-6 md:grid-cols-3 md:gap-8">
        {[
          { label: "Buy", cls: "bg-shallows text-ink ring-1 ring-hairline-strong", note: "A commodity: every firm needs it, nobody wins customers with it.", tray: 0 },
          { label: "Integrate", cls: "bg-wattle-tint text-wattle", note: "The joins between systems. Custom work whichever way you go.", tray: 1 },
          { label: "Build", cls: "bg-harbour-tint text-harbour-deep", note: "How the firm competes. You own the roadmap.", tray: 2 },
        ].map((col) => (
          <div key={col.label}>
            <span className={`inline-block rounded-full px-3 py-0.5 text-label font-semibold ${col.cls}`}>{col.label}</span>
            <p className="mt-2 text-label font-normal text-copy">{col.note}</p>
            <ul className="mt-3 space-y-2">
              {CARDS.filter((c) => c.tray === col.tray).map((c) => (
                <li key={c.name} className="flex items-center gap-3 text-label font-normal text-copy">
                  <Mini className="size-9 shrink-0 rounded-sm bg-surface" box={60}>
                    {c.icon}
                  </Mini>
                  {c.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/* 2. Buy the core, build the edges, own the layer between them         */
/* ================================================================== */

const CORE = { x: 380, y: 140, w: 200, h: 130 };
const RING = { x: 320, y: 96, w: 320, h: 218 };
const EDGE_PIECES = [
  { x: 120, y: 120, node: <Laptop />, plug: [RING.x, 150] as const },
  { x: 120, y: 300, node: <Handset />, plug: [RING.x, 260] as const },
  { x: 840, y: 120, node: <Gauge />, plug: [RING.x + RING.w, 150] as const },
  { x: 840, y: 300, node: <g transform="scale(1.1)"><Doc lines={4} /></g>, plug: [RING.x + RING.w, 260] as const },
];
const RING_AT = 0.9;
const WRONG = 2.2;
const EDGES_AT = 3.6;
const COPY = 5.6;

function Gauge() {
  return (
    <g>
      <circle r="34" fill={C.paper} stroke={C.ink} strokeWidth="3" />
      <g transform="scale(1.2)">{P.pricing}</g>
    </g>
  );
}

function Cylinder() {
  return (
    <g>
      <path d="M-34 -18 L-34 18 A34 10 0 0 0 34 18 L34 -18" fill={C.tint} stroke={C.ink} strokeWidth="3" />
      <ellipse cy="-18" rx="34" ry="10" fill={C.paper} stroke={C.ink} strokeWidth="3" />
      <path d="M-34 0 A34 10 0 0 0 34 0" fill="none" stroke={C.ink} strokeWidth="2" />
    </g>
  );
}

export function CoreEdgesScene() {
  return (
    <Scene
      viewBox="0 0 960 420"
      end={COPY + 2.4}
      label="In the middle sits the bought core: a loan ledger, a general ledger, and identity and sanctions services. A thick green ring, the integration layer, draws around it. A broker app first tries to wire straight into the core, and that link is crossed out. Then four edge pieces, broker and customer apps, decisioning and reporting, slide in and plug into the ring instead. Finally copies of the data flow down from the ring into the firm's own data store."
    >
      {/* The bought core. */}
      <g opacity={0}>
        <FadeIn at={0.2} />
        <rect x={CORE.x} y={CORE.y} width={CORE.w} height={CORE.h} rx="12" fill={C.shallows} stroke={C.ink} strokeWidth="3" />
        {[CORE.x + 55, CORE.x + 145].map((x) => (
          <g key={x} transform={`translate(${x} ${CORE.y + 48})`}>
            <rect x="-36" y="-30" width="72" height="60" rx="8" fill={C.paper} stroke={C.hair} strokeWidth="2" />
            {P.ledger}
          </g>
        ))}
        {[CORE.x + 55, CORE.x + 145].map((x, i) => (
          <g key={x} transform={`translate(${x} ${CORE.y + 107}) scale(0.6)`}>
            {i === 0 ? P.identity : P.sanctions}
          </g>
        ))}
      </g>

      {/* The integration layer you own. */}
      <rect x={RING.x} y={RING.y} width={RING.w} height={RING.h} rx="26" fill="none" stroke={C.harbour} strokeWidth="12" {...drawable}>
        <Draw at={RING_AT} dur={1.1} />
      </rect>

      {/* Wiring an app straight into the core: crossed out. */}
      <path d={`M160 120 C260 120 300 150 ${CORE.x} 170`} fill="none" stroke={C.stop} strokeWidth="4" strokeDasharray="8 7" opacity={0}>
        <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.8, 1]} at={WRONG} dur={1.4} ease={null} />
      </path>
      <Pop x={RING.x} y={150} at={WRONG + 0.4}>
        <g>
          <FadeOut at={WRONG + 1.1} dur={0.3} />
          <CrossBadge r={16} />
        </g>
      </Pop>

      {EDGE_PIECES.map((e, i) => {
        const at = EDGES_AT + i * 0.25;
        const side = e.x < 480 ? -1 : 1;
        return (
          <g key={i}>
            <path
              d={`M${e.x - side * 50} ${e.y} C${(e.x + e.plug[0]) / 2} ${e.y} ${(e.x + e.plug[0]) / 2} ${e.plug[1]} ${e.plug[0] + side * 6} ${e.plug[1]}`}
              fill="none"
              stroke={C.harbour}
              strokeWidth="5"
              strokeLinecap="round"
              {...drawable}
            >
              <Draw at={at + 0.5} dur={0.5} />
            </path>
            <Pop x={e.plug[0]} y={e.plug[1]} at={at + 0.95} dur={0.3}>
              <circle r="9" fill={C.harbour} stroke={C.paper} strokeWidth="3" />
            </Pop>
            {i === 0 ? (
              /* The broker app is there from the start: it's the one wired wrongly first. */
              <g transform={`translate(${e.x} ${e.y})`}>{e.node}</g>
            ) : (
              <g transform={`translate(${e.x + side * 120} ${e.y})`} opacity={0}>
                <FadeIn at={at} dur={0.3} />
                <Move path={`M0 0 L${-side * 120} 0`} at={at} dur={0.6} />
                {e.node}
              </g>
            )}
          </g>
        );
      })}

      {/* A copy of the data, in a store you control. */}
      <g transform="translate(800 388) scale(0.9)">
        <Cylinder />
      </g>
      <path d={`M${RING.x + RING.w - 40} ${RING.y + RING.h} C${RING.x + RING.w - 40} 380 700 390 760 388`} fill="none" stroke={C.harbour} strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" opacity={0}>
        <FadeIn at={COPY - 0.2} dur={0.3} />
      </path>
      {[0, 0.35, 0.7].map((d) => (
        <g key={d} opacity={0}>
          <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.9, 1]} at={COPY + d} dur={0.9} ease={null} />
          <Move path={`M${RING.x + RING.w - 40} ${RING.y + RING.h} C${RING.x + RING.w - 40} 380 700 390 760 388`} at={COPY + d} dur={0.9} />
          <rect x="-7" y="-7" width="14" height="14" rx="3" fill={C.chart} />
        </g>
      ))}
      <Pop x={846} y={352} at={COPY + 1.7}>
        <TickBadge r={15} />
      </Pop>
    </Scene>
  );
}

export function CoreEdgesSvg() {
  return (
    <div>
      <CoreEdgesScene />
      <ol className="mt-6 grid gap-4 md:grid-cols-3 md:gap-8">
        {[
          ["The core stays close to standard.", "The grey middle is bought: ledgers, identity and sanctions. Configure it, don't rewrite it."],
          ["The integration layer belongs to you.", "Apps, decisioning and reporting plug into the green ring, never straight into the core."],
          ["Data can leave.", "Your own store holds a copy of what matters, in a format you define."],
        ].map(([t, d]) => (
          <li key={t} className="text-label font-normal text-copy">
            <span className="block font-semibold text-ink">{t}</span>
            {d}
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ================================================================== */
/* 3. The exit test: four locks, then an orderly move                   */
/* ================================================================== */

const HINGE_X = 500;
const DOOR_W = 130;
const LOCKS = [118, 182, 246, 310];
const UNLOCK = (k: number) => 1.0 + k * 0.7;
const OPEN = UNLOCK(3) + 0.8;
const MOVE_AT = OPEN + 0.9;
const FLOOR = 336;

// Where each crate starts in the room, and where it ends up in the new home.
const CRATES: [number, number][] = [
  [270, FLOOR],
  [360, FLOOR],
  [315, FLOOR - 66],
];
const CRATE_HOME: [number, number][] = [
  [700, FLOOR],
  [790, FLOOR],
  [745, FLOOR - 66],
];

function Crate() {
  return (
    <g>
      <rect x="-40" y="-32" width="80" height="64" rx="5" fill={C.wattleTint} stroke={C.ink} strokeWidth="3" />
      <path d="M-40 -32 L40 32 M40 -32 L-40 32" stroke={C.wattle} strokeWidth="3" opacity="0.55" />
      <rect x="-14" y="-10" width="28" height="20" rx="3" fill={C.paper} stroke={C.ink} strokeWidth="2" />
    </g>
  );
}

export function ExitScene() {
  return (
    <Scene
      viewBox="0 0 960 400"
      end={MOVE_AT + 3.4}
      label="A system and its data crates sit in a room. The exit door has four locks. One by one their lights turn from red to green as each exit check passes. The door swings open and the crates are carried out along a track to a new home with another provider or team, which lights up."
    >
      {/* The new home. */}
      <rect x="640" y="70" width="300" height="306" rx="12" fill={C.shallows} stroke={C.hair} strokeWidth="3" strokeDasharray="12 9" />
      <g transform="translate(880 210) scale(1.15)">
        <Server led={C.hair} />
        <rect x="-27" y="-42" width="54" height="82" rx="3" fill={C.chart} opacity={0}>
          <Anim attr="opacity" values={[0, 0.4]} at={MOVE_AT + 2.4} dur={0.4} />
        </rect>
      </g>
      <Pulse x={880} y={210} at={MOVE_AT + 2.4} from={50} to={100} colour={C.settled} />
      <Pop x={918} y={140} at={MOVE_AT + 2.7}>
        <TickBadge r={20} />
      </Pop>

      {/* The room. */}
      <rect x="30" y="40" width={HINGE_X - 30} height="336" rx="12" fill={C.paper} stroke={C.ink} strokeWidth="3" />
      <line x1="30" y1={FLOOR + 34} x2={HINGE_X} y2={FLOOR + 34} stroke={C.hair} strokeWidth="3" />
      <g transform="translate(120 250) scale(1.35)">
        <Server />
      </g>
      <path d={`M220 ${FLOOR + 34} L860 ${FLOOR + 34}`} stroke={C.hair} strokeWidth="5" strokeDasharray="2 12" strokeLinecap="round" fill="none" opacity={0}>
        <FadeIn at={OPEN + 0.4} />
      </path>
      {CRATES.map(([bx, by], k) => {
        const [dx, dy] = CRATE_HOME[k];
        const t = MOVE_AT + k * 0.55;
        const doorX = HINGE_X + 40;
        return (
          <g key={k} transform={`translate(${bx} ${by})`}>
            <Move path={`M0 0 L${doorX - bx} ${FLOOR - by}`} at={t} dur={0.7} ease={ease.in} />
            <Move path={`M${doorX - bx} ${FLOOR - by} L${dx - bx} ${FLOOR - by} L${dx - bx} ${dy - by}`} at={t + 0.7} dur={1.1} ease={ease.out} />
            <Crate />
          </g>
        );
      })}

      {/* The door and its four locks. */}
      <rect x={HINGE_X - 6} y="40" width="14" height="34" fill={C.ink} />
      <rect x={HINGE_X - 3} y="74" width="7" height="300" fill={C.paper} />
      <g transform={`translate(${HINGE_X} 0)`}>
        <g transform="scale(1 1)">
          <Turn type="scale" values={["1 1", "0.1 1"]} at={OPEN} dur={0.8} ease={ease.inOut} />
          <g transform={`translate(${-HINGE_X} 0)`}>
            <rect x={HINGE_X} y="70" width={DOOR_W} height="300" rx="5" fill={C.wattleTint} stroke={C.ink} strokeWidth="3.5" />
            {LOCKS.map((y, k) => (
              <g key={y}>
                <rect x={HINGE_X + 62} y={y - 20} width="56" height="40" rx="6" fill={C.paper} stroke={C.ink} strokeWidth="3" />
                <circle cx={HINGE_X + 90} cy={y} r="12" fill={HEX.stop} stroke={C.ink} strokeWidth="2.5">
                  <Anim attr="fill" values={[HEX.stop, HEX.settled]} at={UNLOCK(k) + 0.3} dur={0.2} />
                </circle>
                {/* The bolt slides back into the door. */}
                <rect x={HINGE_X - 18} y={y - 8} width="52" height="16" rx="4" fill={C.ink}>
                  <Anim attr="x" values={[HINGE_X - 18, HINGE_X + 6]} at={UNLOCK(k)} dur={0.35} />
                </rect>
              </g>
            ))}
          </g>
        </g>
      </g>
      {LOCKS.map((y, k) => (
        <Pulse key={y} x={HINGE_X + 90} y={y} at={UNLOCK(k) + 0.3} from={12} to={36} colour={C.settled} width={3} />
      ))}
    </Scene>
  );
}

export function Exit() {
  return (
    <div>
      <ExitScene />
      <ol className="mt-6 grid list-decimal gap-3 pl-6 text-label font-normal text-copy md:grid-cols-2 md:gap-x-10">
        <li>Can you get all your data out, in a usable format, without the provider&apos;s help?</li>
        <li>Could another team run and change the system within a quarter?</li>
        <li>Are the source code, infrastructure setup and documentation held somewhere you control?</li>
        <li>Has anyone tested the exit, even as a desk exercise?</li>
      </ol>
      <p className="mt-4 border-t border-hairline pt-4 text-label font-normal text-copy">
        One lock for each question, top to bottom. The test applies to a bought product and to custom software alike.
      </p>
    </div>
  );
}
