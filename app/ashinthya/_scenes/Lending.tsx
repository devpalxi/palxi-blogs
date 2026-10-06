import {
  Anim,
  C,
  Draw,
  FadeIn,
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
import { Bank, Bubble, Coin, Doc, Letter, Padlock, Person, Phone, Seal, WebForm } from "./props";

/* ================================================================== */
/* 1. The ledger: every event is a balanced pair of entries            */
/* ================================================================== */

const ROW_Y = (i: number) => 156 + i * 36;
const EVENTS = [
  { at: 0.9, len: 130, colour: C.magenta },
  { at: 2.0, len: 64, colour: C.magenta },
  { at: 3.1, len: 42, colour: C.magenta },
  { at: 4.3, len: 130, colour: C.stop }, // the reversal of a dishonoured repayment
];
const PIVOT: [number, number] = [330, 62];
const RECON = 5.7;

function Pan({ x }: { x: number }) {
  return (
    <g>
      <line x1={x} y1={PIVOT[1]} x2={x - 22} y2={PIVOT[1] + 30} stroke={C.ink} strokeWidth="2" />
      <line x1={x} y1={PIVOT[1]} x2={x + 22} y2={PIVOT[1] + 30} stroke={C.ink} strokeWidth="2" />
      <path d={`M${x - 30} ${PIVOT[1] + 30} Q${x} ${PIVOT[1] + 46} ${x + 30} ${PIVOT[1] + 30} Z`} fill={C.wattleTint} stroke={C.ink} strokeWidth="2.5" />
    </g>
  );
}

export function LedgerScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={8.2}
      label="An open ledger sits under a balance beam. Each event writes a line of the same length on both pages, and the beam wobbles and settles level. A dishonoured repayment is reversed with a new red line rather than being rubbed out. Then a bank statement slides in, each line is matched to it, and a seal marks the day reconciled."
    >
      {/* The balance beam above the book. */}
      <line x1={PIVOT[0]} y1={PIVOT[1]} x2={PIVOT[0]} y2="118" stroke={C.ink} strokeWidth="5" strokeLinecap="round" />
      <g transform={`rotate(0 ${PIVOT[0]} ${PIVOT[1]})`}>
        {EVENTS.map((e, i) => (
          <Turn
            key={i}
            type="rotate"
            values={[0, -5, 3, -1, 0].map((d) => `${d} ${PIVOT[0]} ${PIVOT[1]}`)}
            at={e.at}
            dur={1.0}
            ease={null}
          />
        ))}
        <line x1={PIVOT[0] - 140} y1={PIVOT[1]} x2={PIVOT[0] + 140} y2={PIVOT[1]} stroke={C.ink} strokeWidth="6" strokeLinecap="round" />
        <Pan x={PIVOT[0] - 140} />
        <Pan x={PIVOT[0] + 140} />
      </g>
      <circle cx={PIVOT[0]} cy={PIVOT[1]} r="8" fill={C.ink} />

      {/* The open ledger. */}
      <rect x="100" y="116" width="460" height="226" rx="8" fill={C.deep} />
      <path d="M110 124 L328 128 L328 334 L110 330 Z" fill={C.paper} stroke={C.ink} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M332 128 L550 124 L550 330 L332 334 Z" fill={C.paper} stroke={C.ink} strokeWidth="2.5" strokeLinejoin="round" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <line x1="122" y1={ROW_Y(i) + 12} x2="318" y2={ROW_Y(i) + 12} stroke={C.hairSoft} strokeWidth="2" />
          <line x1="342" y1={ROW_Y(i) + 12} x2="538" y2={ROW_Y(i) + 12} stroke={C.hairSoft} strokeWidth="2" />
        </g>
      ))}
      {EVENTS.map((e, i) => {
        const y = ROW_Y(i);
        return (
          <g key={i}>
            <rect x="126" y={y - 6} width="18" height="12" rx="2" fill={C.hair} opacity={0}>
              <FadeIn at={e.at - 0.1} dur={0.2} />
            </rect>
            <path d={`M${154} ${y} L${154 + e.len} ${y}`} stroke={e.colour} strokeWidth="8" strokeLinecap="round" {...drawable}>
              <Draw at={e.at} dur={0.4} ease={ease.out} />
            </path>
            <rect x="346" y={y - 6} width="18" height="12" rx="2" fill={C.hair} opacity={0}>
              <FadeIn at={e.at + 0.15} dur={0.2} />
            </rect>
            <path d={`M${374} ${y} L${374 + e.len} ${y}`} stroke={e.colour} strokeWidth="8" strokeLinecap="round" {...drawable}>
              <Draw at={e.at + 0.25} dur={0.4} ease={ease.out} />
            </path>
          </g>
        );
      })}
      {/* The reversal points back to the original, which stays as it was. */}
      <path
        d={`M${154 + 130 + 14} ${ROW_Y(3)} C${330} ${ROW_Y(3)} ${330} ${ROW_Y(0)} ${154 + 130 + 14} ${ROW_Y(0)}`}
        fill="none"
        stroke={C.stop}
        strokeWidth="3"
        strokeDasharray="1"
        strokeDashoffset={1}
        pathLength={1}
      >
        <Draw at={4.8} dur={0.6} />
      </path>
      <Pop x={154 + 130 + 14} y={ROW_Y(0)} at={5.35} dur={0.3}>
        <circle r="5" fill={C.stop} />
      </Pop>
      <Pop x={330} y={108} at={RECON + 1.6}>
        <g transform="scale(0.8)">
          <Padlock />
        </g>
      </Pop>

      {/* The bank statement slides in and every line is matched to it. */}
      <g transform="translate(980 0)" opacity={0}>
        <FadeIn at={RECON - 0.2} dur={0.3} />
        <Move path="M0 0 L-200 0" at={RECON - 0.2} dur={0.6} ease={ease.out} />
        <rect x="-10" y="120" width="170" height="222" rx="6" fill={C.paper} stroke={C.ink} strokeWidth="2.5" />
        <rect x="-10" y="120" width="170" height="24" rx="6" fill={C.magenta} />
        {EVENTS.map((e, i) => (
          <path key={i} d={`M14 ${ROW_Y(i)} L${14 + e.len * 0.8} ${ROW_Y(i)}`} stroke={e.colour} strokeWidth="7" strokeLinecap="round" opacity="0.85" />
        ))}
      </g>
      <clipPath id="ledger-recon">
        <rect x="550" y="120" width="0" height="230">
          <Anim attr="width" values={[0, 230]} at={RECON + 0.5} dur={0.7} ease={null} />
        </rect>
      </clipPath>
      <g clipPath="url(#ledger-recon)">
        {EVENTS.map((e, i) => (
          <line key={i} x1={374 + e.len + 12} y1={ROW_Y(i)} x2="790" y2={ROW_Y(i)} stroke={C.settled} strokeWidth="2.5" strokeDasharray="3 6" strokeLinecap="round" />
        ))}
      </g>
      <Pop x={918} y={124} at={RECON + 1.3}>
        <circle r="26" fill={C.paper} />
        <Seal r={24} />
      </Pop>
    </Scene>
  );
}

export function Ledger() {
  return (
    <div>
      <LedgerScene />
      <KeyLine
        items={[
          { label: "Balanced entries", dot: "bg-magenta" },
          { label: "Reversal, never erased", dot: "bg-stop" },
          { label: "Matched to the bank", dot: "bg-settled" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 2. Repayment rails: switching a loan from direct debit to PayTo     */
/* ================================================================== */

const UPPER = "M150 170 L250 170 C320 170 330 86 420 86 L600 86 C690 86 680 170 760 170 L820 170";
const LOWER = "M150 170 L250 170 C320 170 330 254 420 254 L600 254 C690 254 680 170 760 170 L820 170";
const FLIP = 3.5;
const LOWER_COINS = [0.8, 2.0];
const UPPER_COINS = [4.4, 5.6];
const COIN_RUN = 1.7;

function Track({ d, tint }: { d: string; tint: string }) {
  return (
    <g fill="none" strokeLinecap="butt">
      <path d={d} stroke={tint} strokeWidth="34" strokeLinejoin="round" opacity="0.2" />
      <path d={d} stroke={C.muted} strokeWidth="24" strokeDasharray="4 10" />
      <path d={d} stroke={C.ink} strokeWidth="14" strokeLinejoin="round" />
      <path d={d} stroke={C.paper} strokeWidth="8" strokeLinejoin="round" />
    </g>
  );
}

export function RailsScene() {
  return (
    <Scene
      viewBox="0 0 960 340"
      end={UPPER_COINS[1] + COIN_RUN + 0.6}
      label="Two railway tracks run from a loan to the lender's bank: direct debit along the bottom and PayTo along the top. Two monthly repayments travel the direct debit track. Then a lever flips the points and the loan's mandate tag changes colour, and the next repayments travel the PayTo track. The tracks themselves are not rebuilt."
    >
      <Track d={LOWER} tint={C.wattle} />
      <Track d={UPPER} tint={C.chart} />

      {/* The loan, with its mandate tag. */}
      <g transform="translate(96 170)">
        <g transform="scale(1.4)">
          <Doc lines={3} />
        </g>
        <circle cx="14" cy="24" r="11" fill={HEX.wattle} stroke={C.ink} strokeWidth="2.5">
          <Anim attr="fill" values={[HEX.wattle, HEX.magenta]} at={FLIP + 0.3} dur={0.4} />
        </circle>
      </g>
      <Pulse x={110} y={194} at={FLIP + 0.3} from={11} to={34} colour={C.magenta} />

      {/* The points blade and its lever. */}
      <g transform={`rotate(28 250 170)`}>
        <Turn type="rotate" values={["28 250 170", "-28 250 170"]} at={FLIP} dur={0.5} ease={ease.inOut} />
        <line x1="250" y1="170" x2="300" y2="170" stroke={C.ink} strokeWidth="7" strokeLinecap="round" />
      </g>
      <g transform="translate(250 290)">
        <rect x="-26" y="10" width="52" height="14" rx="4" fill={C.ink} />
        <g transform="rotate(35)">
          <Turn type="rotate" values={[35, -35]} at={FLIP} dur={0.5} ease={ease.inOut} />
          <line x1="0" y1="14" x2="0" y2="-26" stroke={C.ink} strokeWidth="6" strokeLinecap="round" />
          <circle cy="-30" r="9" fill={C.stop} stroke={C.ink} strokeWidth="2.5" />
        </g>
      </g>
      <Pulse x={250} y={262} at={FLIP + 0.1} from={14} to={44} colour={C.ink} width={3} />

      <g transform="translate(870 166)">
        <Bank />
      </g>

      {[...LOWER_COINS.map((t) => ({ t, d: LOWER })), ...UPPER_COINS.map((t) => ({ t, d: UPPER }))].map(({ t, d }) => (
        <g key={t}>
          <g opacity={0}>
            <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.08, 0.92, 1]} at={t} dur={COIN_RUN} ease={null} />
            <Move path={d} at={t} dur={COIN_RUN} />
            <Coin />
          </g>
          <Pulse x={820} y={170} at={t + COIN_RUN - 0.05} from={16} to={46} colour={C.settled} width={3} />
        </g>
      ))}
    </Scene>
  );
}

export function Rails() {
  return (
    <div>
      <RailsScene />
      <KeyLine
        items={[
          { label: "PayTo", dot: "bg-magenta-chart" },
          { label: "BECS direct debit", dot: "bg-wattle" },
          { label: "Switch per loan", dot: "bg-stop" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 3. Hardship as a clock: every channel, one case, 21 days             */
/* ================================================================== */

const DIAL: [number, number] = [570, 190];
const DAY_AT = (d: number) => 2.0 + (d - 1) * 0.22; // day d lights up
const DECIDED = 15; // the day the notice goes out, in this illustration
const ALERT = 14;
const SEND = DAY_AT(DECIDED) + 0.4;
const FOLDER: [number, number] = [320, 190];

const CHANNELS = [
  { y: 58, node: <Phone /> },
  { y: 142, node: <Letter /> },
  { y: 232, node: <WebForm /> },
  { y: 320, node: <Bubble /> },
];

export function HardshipClockScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={SEND + 2.6}
      label="A phone call, an email, a web form and a chat message all flow into one hardship case. A ring of 21 segments counts the days. An alert bell rings on day 14. On day 15 a notice flies to the customer and a copy drops into the case file, which is sealed as closed. The rest of the ring is never used."
    >
      {/* Every channel feeds the same case. */}
      {CHANNELS.map((c, i) => (
        <g key={i}>
          <g transform={`translate(80 ${c.y})`}>{c.node}</g>
          <path
            d={`M118 ${c.y} C200 ${c.y} 210 ${FOLDER[1]} ${FOLDER[0] - 50} ${FOLDER[1]}`}
            fill="none"
            stroke={C.wattle}
            strokeWidth="3"
            strokeDasharray="2 8"
            strokeLinecap="round"
          />
          <g opacity={0}>
            <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.85, 1]} at={0.3 + i * 0.3} dur={0.9} ease={null} />
            <Move path={`M118 ${c.y} C200 ${c.y} 210 ${FOLDER[1]} ${FOLDER[0] - 50} ${FOLDER[1]}`} at={0.3 + i * 0.3} dur={0.9} />
            <circle r="8" fill={C.wattle} />
          </g>
        </g>
      ))}

      {/* The case file. */}
      <g transform={`translate(${FOLDER[0]} ${FOLDER[1]})`}>
        <path d="M-46 -40 L-12 -40 L-4 -30 L46 -30 L46 40 L-46 40 Z" fill={C.wattleTint} stroke={C.ink} strokeWidth="3" strokeLinejoin="round" />
        <rect x="-46" y="-22" width="92" height="62" rx="3" fill={C.wattleTint} stroke={C.ink} strokeWidth="3" />
      </g>
      <Pulse x={FOLDER[0]} y={FOLDER[1]} at={1.3} from={40} to={80} colour={C.wattle} />

      {/* Twenty-one days. */}
      {Array.from({ length: 21 }, (_, k) => {
        const d = k + 1;
        const a0 = k * (360 / 21) + 1.6;
        const a1 = a0 + 360 / 21 - 3.2;
        const path = arcPath(DIAL[0], DIAL[1], 120, a0, a1);
        return (
          <g key={d}>
            <path d={path} fill="none" stroke={C.hair} strokeWidth="24" />
            {d <= DECIDED && (
              <path d={path} fill="none" stroke={d >= ALERT ? C.wattle : C.chart} strokeWidth="24" opacity={0}>
                <Anim attr="opacity" values={[0, 1]} at={DAY_AT(d)} dur={0.15} ease={null} />
              </path>
            )}
          </g>
        );
      })}
      <circle cx={DIAL[0]} cy={DIAL[1]} r="96" fill={C.paper} stroke={C.hair} strokeWidth="2" />
      {/* The day count in the middle. */}
      {Array.from({ length: DECIDED }, (_, k) => (
        <Window key={k} from={DAY_AT(k + 1)} to={k + 1 < DECIDED ? DAY_AT(k + 2) : undefined}>
          <text
            x={DIAL[0]}
            y={DIAL[1] + 26}
            textAnchor="middle"
            className="font-heading"
            fontWeight="600"
            fontSize="78"
            fill={k + 1 >= ALERT ? C.wattle : C.ink}
          >
            {k + 1}
          </text>
        </Window>
      ))}
      {/* Day 21 marker: the legal limit. */}
      <g transform={`translate(${DIAL[0]} ${DIAL[1] - 120})`}>
        <path d="M-9 -34 L9 -34 L0 -20 Z" fill={C.stop} />
      </g>
      <Pop x={DIAL[0] + 126} y={DIAL[1] - 104} at={DAY_AT(ALERT)} dur={0.4}>
        <g transform="rotate(0)">
          <Turn type="rotate" values={[0, 16, -14, 10, -6, 0]} at={DAY_AT(ALERT) + 0.3} dur={0.8} ease={null} />
          <circle r="22" fill={C.wattle} />
          <path d="M-10 7 L-10 -2 Q-10 -12 0 -12 Q10 -12 10 -2 L10 7 L13 10 L-13 10 Z" fill={C.paper} />
          <circle cy="14" r="3" fill={C.paper} />
        </g>
      </Pop>

      {/* The notice goes out, and a copy is kept. */}
      <g transform={`translate(${FOLDER[0]} ${FOLDER[1]})`} opacity={0}>
        <FadeIn at={SEND} dur={0.2} />
        <Move path={`M0 0 C120 -230 420 -230 ${812 - FOLDER[0]} 0`} at={SEND} dur={1.3} />
        <Letter />
      </g>
      <g transform="translate(880 196)">
        <g transform="scale(1.5)">
          <Person />
        </g>
      </g>
      <Pulse x={880} y={190} at={SEND + 1.3} from={30} to={70} colour={C.settled} />
      <g transform={`translate(${FOLDER[0]} ${FOLDER[1] - 90})`} opacity={0}>
        <FadeIn at={SEND + 1.4} dur={0.2} />
        <Move path="M0 0 L0 84" at={SEND + 1.4} dur={0.5} ease={ease.in} />
        <g transform="scale(0.8)">
          <Doc lines={3} />
        </g>
      </g>
      <Pop x={FOLDER[0] + 40} y={FOLDER[1] + 34} at={SEND + 2.0}>
        <TickBadge r={18} />
      </Pop>
    </Scene>
  );
}

export function HardshipClock() {
  return (
    <div>
      <HardshipClockScene />
      <KeyLine
        items={[
          { label: "Every channel, one case", dot: "bg-wattle" },
          { label: "21-day clock", dot: "bg-magenta-chart" },
          { label: "Notice sent and kept", dot: "bg-settled" },
        ]}
      />
    </div>
  );
}
