import { Fragment } from "react";
import {
  Anim,
  C,
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
  Window,
  arcPath,
  drawable,
  ease,
} from "./kit";
import { KeyLine } from "./Key";
import { Bank, Coin, Handset, Lens, Letter, Person, Shop } from "./props";

/* ================================================================== */
/* 1. What does the feature do with money?                              */
/* ================================================================== */

const LANES = [84, 214, 344];
const APP_X = 480;
const HOLD = { in: 0.8, release: 4.6 };
const PAYS = [2.8, 3.6, 4.4, 5.2];

function Bag() {
  return (
    <g>
      <path d="M-18 -10 L18 -10 L22 22 L-22 22 Z" fill={C.wattleTint} stroke={C.ink} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M-8 -10 Q-8 -24 0 -24 Q8 -24 8 -10" fill="none" stroke={C.ink} strokeWidth="2.5" />
    </g>
  );
}

export function MoneyModesScene() {
  return (
    <Scene
      viewBox="0 0 960 420"
      end={PAYS[3] + 1.6}
      label="Three lanes, each running from a customer through an app to a business. In the first, a coin passes straight through the app to the business. In the second, the coin stops inside the app's own vault while a clock turns, and is only released to the business later. In the third, goods travel to the customer first, and then four smaller coins come back one at a time as instalments, filling a ring in quarters."
    >
      {LANES.map((y, i) => (
        <g key={y}>
          <rect x="20" y={y - 58} width="920" height="116" rx="14" fill={i === 1 ? C.wattleTint : i === 2 ? C.tint : C.paper} opacity="0.55" />
          <line x1="110" y1={y} x2="830" y2={y} stroke={C.hair} strokeWidth="4" strokeDasharray="2 10" strokeLinecap="round" />
          <g transform={`translate(70 ${y}) scale(1.4)`}>
            <Person />
          </g>
          <g transform={`translate(876 ${y + 2}) scale(0.95)`}>
            <Shop />
          </g>
          <g transform={`translate(${APP_X} ${y}) scale(1.35)`}>
            <Handset />
          </g>
        </g>
      ))}

      {/* 1. Passes instructions on: straight through. */}
      <path d={`M${APP_X - 8} ${LANES[0] - 8} L${APP_X + 6} ${LANES[0]} L${APP_X - 8} ${LANES[0] + 8}`} fill="none" stroke={C.chart} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <g opacity={0}>
        <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.05, 0.95, 1]} at={0.4} dur={2.0} ease={null} />
        <Move path={`M110 ${LANES[0]} L830 ${LANES[0]}`} at={0.4} dur={2.0} ease={null} />
        <g transform="scale(0.85)">
          <Coin />
        </g>
      </g>
      <Pulse x={850} y={LANES[0]} at={2.4} from={20} to={54} colour={C.settled} />

      {/* 2. Holds money: into the app's vault, released later. */}
      <rect x={APP_X - 13} y={LANES[1] - 10} width="26" height="26" rx="4" fill={C.paper} stroke={C.wattle} strokeWidth="3" />
      <g opacity={0}>
        <FadeIn at={HOLD.in} dur={0.1} />
        <Move path={`M110 ${LANES[1]} L${APP_X} ${LANES[1] + 3}`} at={HOLD.in} dur={1.0} />
        <Move path={`M${APP_X} ${LANES[1] + 3} L830 ${LANES[1]}`} at={HOLD.release} dur={1.0} />
        <FadeOut at={HOLD.release + 1.0} dur={0.1} />
        <g transform="scale(0.6)">
          <Coin />
        </g>
      </g>
      <g transform={`translate(${APP_X + 64} ${LANES[1] - 30})`}>
        <circle r="18" fill={C.paper} stroke={C.ink} strokeWidth="2.5" />
        <line x1="0" y1="0" x2="0" y2="-12" stroke={C.wattle} strokeWidth="3.5" strokeLinecap="round" transform="rotate(0)">
          <Turn type="rotate" values={[0, 720]} at={HOLD.in + 1.0} dur={HOLD.release - HOLD.in - 1.0} ease={null} />
        </line>
        <circle r="3" fill={C.ink} />
      </g>
      <Pulse x={850} y={LANES[1]} at={HOLD.release + 1.0} from={20} to={54} colour={C.settled} />

      {/* 3. Lends or defers payment: goods now, pay in four. */}
      <g opacity={0}>
        <FadeIn at={1.0} dur={0.1} />
        <Move path={`M840 ${LANES[2]} L110 ${LANES[2]}`} at={1.0} dur={1.4} />
        <FadeOut at={2.4} dur={0.2} />
        <Bag />
      </g>
      <Pulse x={70} y={LANES[2]} at={2.4} from={20} to={50} colour={C.magenta} />
      {PAYS.map((t, k) => (
        <Fragment key={t}>
          <g opacity={0}>
            <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.85, 1]} at={t} dur={0.7} ease={null} />
            <Move path={`M110 ${LANES[2]} L${APP_X - 30} ${LANES[2]}`} at={t} dur={0.7} />
            <g transform="scale(0.55)">
              <Coin fill={C.chart} />
            </g>
          </g>
          <path d={arcPath(APP_X + 70, LANES[2] - 26, 16, k * 90 + 4, k * 90 + 86)} fill="none" stroke={C.magenta} strokeWidth="9" opacity={0}>
            <Anim attr="opacity" values={[0, 1]} at={t + 0.7} dur={0.15} ease={null} />
          </path>
        </Fragment>
      ))}
      <circle cx={APP_X + 70} cy={LANES[2] - 26} r="16" fill="none" stroke={C.hair} strokeWidth="9" opacity="0.5" />
    </Scene>
  );
}

export function MoneyModes() {
  return (
    <div>
      <MoneyModesScene />
      <KeyLine
        items={[
          { label: "Passes it on", dot: "bg-surface ring-2 ring-hairline-strong" },
          { label: "Holds money", dot: "bg-wattle" },
          { label: "Lends, pay later", dot: "bg-magenta" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 2. Sub-ledger against the pooled account: reconcile every day       */
/* ================================================================== */

const BASE = 360; // floor of the column and the tank
const ROWS = [120, 80, 150, 60]; // customer balances, in this illustration
const K = 0.6; // bar length to column height
const MISSING = 40;
const COL_X = 520;
const TANK_X = 740;
const D1 = 0.6;
const D2 = 4.2;
const FIX = D2 + 2.2;

export function ReconcileScene() {
  const heights = ROWS.map((r) => r * K);
  const total = heights.reduce((a, b) => a + b, 0);
  const tops = heights.map((_, i) => BASE - heights.slice(0, i + 1).reduce((a, b) => a + b, 0));
  const gap = MISSING * K;
  return (
    <Scene
      viewBox="0 0 960 420"
      end={FIX + 2.0}
      label="On the left, a sub-ledger lists four customers and their balances. Each balance is stacked into a column, which ends level with the water in the partner's pooled account on the right, and a tick appears. On day two the pooled account rises but the column doesn't, leaving a gap. A magnifying glass finds it, a missing fifth entry is added to the sub-ledger, the column rises to match, and a second tick appears."
    >
      {/* Day one, day two. */}
      <g transform="translate(480 34)">
        <rect x="-50" y="-22" width="100" height="40" rx="8" fill={C.paper} stroke={C.ink} strokeWidth="2.5" />
        <rect x="-50" y="-22" width="100" height="10" rx="4" fill={C.stop} />
        {[0, 1].map((d) => (
          <Window key={d} from={d === 0 ? D1 : D2} to={d === 0 ? D2 : undefined}>
            {Array.from({ length: d + 1 }, (_, k) => (
              <circle key={k} cx={(k - d / 2) * 18} cy="4" r="6" fill={C.ink} />
            ))}
          </Window>
        ))}
      </g>

      {/* The platform's sub-ledger. */}
      <rect x="40" y="70" width="360" height="300" rx="12" fill={C.paper} stroke={C.ink} strokeWidth="3" />
      {[...ROWS, MISSING].map((len, i) => {
        const y = 110 + i * 54;
        const late = i === ROWS.length;
        return (
          <g key={i} opacity={late ? 0 : 1}>
            {late && <FadeIn at={FIX} dur={0.3} />}
            <g transform={`translate(84 ${y}) scale(0.7)`}>
              <Person fill={late ? C.wattleTint : C.tint} stroke={late ? C.wattle : C.magenta} />
            </g>
            <rect x="120" y={y - 9} width={len * 1.6} height="18" rx="5" fill={late ? C.wattle : C.chart}>
              {!late && <Anim attr="opacity" values={[1, 0.4, 1]} at={D1 + i * 0.5} dur={0.5} ease={null} />}
            </rect>
          </g>
        );
      })}

      {/* The column built from the sub-ledger. */}
      <rect x={COL_X - 46} y={BASE - total - gap - 20} width="92" height={total + gap + 20} fill="none" stroke={C.hair} strokeWidth="2" strokeDasharray="4 6" />
      {heights.map((h, i) => (
        <rect key={i} x={COL_X - 40} y={tops[i] + h} width="80" height="0" fill={i % 2 ? C.magenta : C.chart} stroke={C.paper} strokeWidth="2">
          <Anim attr="y" values={[tops[i] + h, tops[i]]} at={D1 + i * 0.5 + 0.2} dur={0.4} />
          <Anim attr="height" values={[0, h]} at={D1 + i * 0.5 + 0.2} dur={0.4} />
        </rect>
      ))}
      <rect x={COL_X - 40} y={BASE - total} width="80" height="0" fill={C.wattle} stroke={C.paper} strokeWidth="2">
        <Anim attr="y" values={[BASE - total, BASE - total - gap]} at={FIX + 0.4} dur={0.4} />
        <Anim attr="height" values={[0, gap]} at={FIX + 0.4} dur={0.4} />
      </rect>

      {/* The partner's pooled account. */}
      <rect x={TANK_X - 70} y="80" width="140" height={BASE - 80} rx="10" fill={C.paper} stroke={C.ink} strokeWidth="3" />
      <rect x={TANK_X - 64} y={BASE - total} width="128" height={total} fill={C.chart} opacity="0.4">
        <Anim attr="y" values={[BASE - total, BASE - total - gap]} at={D2} dur={0.6} />
        <Anim attr="height" values={[total, total + gap]} at={D2} dur={0.6} />
      </rect>
      <g transform={`translate(${TANK_X} 80)`}>
        <rect x="-30" y="-12" width="60" height="16" rx="4" fill={C.ink} />
      </g>
      <g transform={`translate(${TANK_X + 90} 110) scale(0.5)`}>
        <Bank />
      </g>

      {/* The level line between them. */}
      <line x1={COL_X + 40} x2={TANK_X - 64} y1={BASE - total} y2={BASE - total} stroke={HEX.settled} strokeWidth="3" strokeDasharray="6 6" opacity={0}>
        <Anim attr="opacity" values={[0, 1]} at={D1 + 2.3} dur={0.2} />
        <Anim attr="stroke" values={[HEX.settled, HEX.wattle]} at={D2 + 0.4} dur={0.2} />
        <Anim attr="y1" values={[BASE - total, BASE - total - gap]} at={FIX + 0.4} dur={0.4} />
        <Anim attr="y2" values={[BASE - total, BASE - total - gap]} at={FIX + 0.4} dur={0.4} />
        <Anim attr="stroke" values={[HEX.wattle, HEX.settled]} at={FIX + 0.8} dur={0.2} />
      </line>
      <line x1={TANK_X - 64} x2={COL_X + 40} y1={BASE - total - gap} y2={BASE - total - gap} stroke={C.wattle} strokeWidth="3" opacity={0}>
        <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.9, 1]} at={D2 + 0.5} dur={FIX - D2} ease={null} />
      </line>
      <rect x={COL_X + 48} y={BASE - total - gap} width="20" height={gap} fill={C.wattleTint} stroke={C.wattle} strokeWidth="2" opacity={0}>
        <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.9, 1]} at={D2 + 0.5} dur={FIX - D2} ease={null} />
      </rect>
      <Pop x={630} y={BASE - total - 34} at={D1 + 2.5}>
        <g>
          <FadeOut at={D2} dur={0.2} />
          <TickBadge r={15} />
        </g>
      </Pop>
      <g transform={`translate(${COL_X + 140} ${BASE - total - gap - 60})`} opacity={0}>
        <FadeIn at={D2 + 0.9} dur={0.2} />
        <Move path="M0 0 L-40 40 L-60 50" at={D2 + 0.9} dur={1.0} />
        <FadeOut at={FIX} dur={0.3} />
        <g transform="scale(0.8)">
          <Lens />
        </g>
      </g>
      <Pop x={630} y={BASE - total - gap - 34} at={FIX + 1.0}>
        <TickBadge r={15} />
      </Pop>
    </Scene>
  );
}

export function Reconcile() {
  return (
    <div>
      <ReconcileScene />
      <KeyLine
        items={[
          { label: "Your sub-ledger", dot: "bg-magenta-chart" },
          { label: "Partner's pooled account", dot: "bg-magenta" },
          { label: "A break", dot: "bg-wattle" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 3. Who reports: detect, pass on, report                              */
/* ================================================================== */

const BELT = 110;
const SPOT = 2.2;
const HANDOFF = 3.4;
const REPORT = HANDOFF + 2.0;

function Flag({ fill = C.wattle }: { fill?: string }) {
  return (
    <g>
      <line x1="-10" y1="-18" x2="-10" y2="20" stroke={C.ink} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M-10 -18 L16 -12 L-10 -2 Z" fill={fill} stroke={C.ink} strokeWidth="2" strokeLinejoin="round" />
    </g>
  );
}

function Regulator() {
  return (
    <g>
      <g transform="scale(1.05)">
        <Bank fill={C.wattleTint} />
      </g>
      <line x1="0" y1="-56" x2="0" y2="-84" stroke={C.ink} strokeWidth="3" />
      <path d="M0 -84 L22 -78 L0 -70 Z" fill={C.stop} />
    </g>
  );
}

export function RelayScene() {
  const coins = [0, 1, 2, 3, 4, 5];
  return (
    <Scene
      viewBox="0 0 960 400"
      end={REPORT + 2.2}
      label="Payments roll along a belt above your client's app. A magnifying glass passes over them and one turns amber and gets a flag. The flag is handed quickly along a track to the licensed partner, while a small stopwatch runs. The partner then sends a report in an envelope to AUSTRAC."
    >
      {/* Payments roll past inside the product. */}
      <rect x="60" y={BELT - 26} width="420" height="52" rx="26" fill={C.shallows} stroke={C.hair} strokeWidth="2" />
      <clipPath id="relay-belt">
        <rect x="60" y={BELT - 26} width="420" height="52" rx="26" />
      </clipPath>
      <g clipPath="url(#relay-belt)">
      {coins.map((k) => (
        <g key={k} transform={`translate(${-20 - k * 70} ${BELT})`}>
          <Move path="M0 0 L480 0" at={0.2} dur={2.0} ease={ease.out} />
          <g>
            <circle r="16" fill={k === 2 ? HEX.chart : HEX.chart} stroke={C.ink} strokeWidth="2.5">
              {k === 2 && <Anim attr="fill" values={[HEX.chart, HEX.wattle]} at={SPOT} dur={0.3} />}
            </circle>
          </g>
        </g>
      ))}
      </g>
      <g transform={`translate(100 ${BELT - 70})`} opacity={0}>
        <FadeIn at={1.2} dur={0.2} />
        <Move path="M0 0 L190 40" at={1.2} dur={1.0} />
        <FadeOut at={SPOT + 0.8} dur={0.3} />
        <g transform="scale(0.85)">
          <Lens />
        </g>
      </g>
      <Pulse x={320} y={BELT} at={SPOT} from={16} to={46} colour={C.wattle} />

      <g transform="translate(150 290) scale(1.6)">
        <Handset />
      </g>

      {/* The flag is handed on, quickly. */}
      <path d="M210 260 C320 200 420 200 520 250" fill="none" stroke={C.wattle} strokeWidth="4" strokeDasharray="2 9" strokeLinecap="round" opacity={0}>
        <FadeIn at={HANDOFF - 0.3} dur={0.3} />
      </path>
      <g transform={`translate(320 ${BELT - 30})`} opacity={0}>
        <FadeIn at={SPOT + 0.3} dur={0.2} />
        <Move path="M0 0 L-110 120" at={HANDOFF - 0.6} dur={0.5} />
        <Move path="M-110 120 C0 60 100 60 200 110" at={HANDOFF} dur={1.0} />
        <Flag />
      </g>
      <g transform="translate(370 330)">
        <circle r="24" fill={C.paper} stroke={C.ink} strokeWidth="2.5" />
        <path d={arcPath(0, 0, 16, 0, 359)} fill="none" stroke={C.hair} strokeWidth="6" />
        <path d={arcPath(0, 0, 16, 0, 110)} fill="none" stroke={C.wattle} strokeWidth="6" {...drawable}>
          <Draw at={HANDOFF} dur={1.0} ease={null} />
        </path>
        <rect x="-5" y="-32" width="10" height="7" rx="2" fill={C.ink} />
      </g>

      {/* The partner reports to AUSTRAC. */}
      <g transform="translate(580 270) scale(1.1)">
        <Bank fill={C.tint} />
      </g>
      <Pulse x={580} y={260} at={HANDOFF + 1.0} from={40} to={80} colour={C.wattle} />
      <path d="M640 240 C720 180 780 170 830 190" fill="none" stroke={C.magenta} strokeWidth="4" strokeDasharray="2 9" strokeLinecap="round" opacity={0}>
        <FadeIn at={REPORT - 0.3} dur={0.3} />
      </path>
      <g transform="translate(640 240)" opacity={0}>
        <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.9, 1]} at={REPORT} dur={1.0} ease={null} />
        <Move path="M0 0 C80 -60 140 -70 190 -50" at={REPORT} dur={1.0} />
        <Letter />
      </g>
      <g transform="translate(870 230)">
        <Regulator />
      </g>
      <Pulse x={870} y={220} at={REPORT + 1.0} from={40} to={90} colour={C.settled} />
      <Pop x={924} y={150} at={REPORT + 1.2}>
        <TickBadge r={16} />
      </Pop>
    </Scene>
  );
}

export function Relay() {
  return (
    <div>
      <RelayScene />
      <KeyLine
        items={[
          { label: "Your product spots it", dot: "bg-wattle" },
          { label: "Partner reports to AUSTRAC", dot: "bg-magenta" },
        ]}
      />
    </div>
  );
}
