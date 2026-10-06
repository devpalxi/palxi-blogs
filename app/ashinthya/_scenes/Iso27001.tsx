import type { ReactNode } from "react";
import { Anim, C, Draw, FadeIn, FadeOut, Move, Pop, Pulse, Scene, TickBadge, Turn, drawable, ease } from "./kit";
import { KeyLine } from "./Key";
import { Coin, Lens, Padlock, Person } from "./props";

const ink = {
  fill: "none",
  stroke: C.ink,
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/* ================================================================== */
/* 1. Your own rules, an auditor's stamp, and someone checking them     */
/* ================================================================== */

const TABS: ReactNode[] = [
  <g key="laptop" {...ink}>
    <rect x="-9" y="-7" width="18" height="11" rx="2" />
    <path d="M-12 7 L12 7" />
  </g>,
  <g key="key" {...ink}>
    <circle cx="-5" r="5" />
    <path d="M0 0 L11 0 M7 0 L7 4" />
  </g>,
  <g key="tape" {...ink}>
    <circle cx="-5" r="5" />
    <circle cx="6" r="5" />
  </g>,
  <g key="person" {...ink}>
    <circle cy="-4" r="4" />
    <path d="M-7 8 Q0 0 7 8" />
  </g>,
];
const TAB_AT = (k: number) => 0.6 + k * 0.5;
const STAMP = 3.0;
const ACCRED = STAMP + 2.0;

export function RulesStampScene() {
  return (
    <Scene
      viewBox="0 0 960 400"
      end={ACCRED + 1.6}
      label="An open ring binder holds a business's own security rules. Four coloured tabs slide out of its edge, one at a time, each showing a control such as a laptop, a key, a backup tape or a person, and a pencil ticks them off a checklist beside it. An auditor's rubber stamp then comes in and stamps a certificate with a seal. Last, a badge lights up behind the stamp: someone has checked the auditor too."
    >
      {/* The checklist of chosen controls. */}
      <g transform="translate(90 220)">
        <rect x="-44" y="-110" width="88" height="220" rx="6" fill={C.paper} stroke={C.ink} strokeWidth="3" />
        {TABS.map((_, k) => (
          <g key={k} transform={`translate(-20 ${-70 + k * 48})`}>
            <rect x="-10" y="-10" width="20" height="20" rx="3" fill={C.paper} stroke={C.hair} strokeWidth="2" />
            <path d="M-6 0 L-1 5 L7 -6" fill="none" stroke={C.settled} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" {...drawable}>
              <Draw at={TAB_AT(k) + 0.3} dur={0.3} ease={ease.out} />
            </path>
            <rect x="18" y="-4" width="32" height="8" rx="3" fill={C.hair} />
          </g>
        ))}
      </g>

      {/* The binder of house rules, with tabs for each control. */}
      <g transform="translate(330 220)">
        {TABS.map((icon, k) => (
          <g key={k} transform={`translate(110 ${-78 + k * 52})`}>
            <Move path="M-60 0 L0 0" at={TAB_AT(k)} dur={0.4} ease={ease.out} />
            <rect x="-30" y="-18" width="70" height="36" rx="6" fill={[C.tint, C.wattleTint, C.settledTint, C.shallows][k]} stroke={C.ink} strokeWidth="2.5" />
            <g transform="translate(18 0)">{icon}</g>
          </g>
        ))}
        <rect x="-130" y="-110" width="250" height="220" rx="10" fill={C.deep} />
        <rect x="-120" y="-100" width="114" height="200" rx="4" fill={C.paper} />
        <rect x="-2" y="-100" width="114" height="200" rx="4" fill={C.paper} />
        {[-60, -20, 20, 60].map((y) => (
          <g key={y}>
            <circle cx="-4" cy={y} r="7" fill="none" stroke={C.muted} strokeWidth="3" />
            <rect x="-104" y={y - 4} width="80" height="7" rx="3" fill={C.hair} />
            <rect x="14" y={y - 4} width="76" height="7" rx="3" fill={C.hair} />
          </g>
        ))}
      </g>

      {/* The certificate. */}
      <g transform="translate(690 280)">
        <rect x="-90" y="-64" width="180" height="128" rx="5" fill={C.paper} stroke={C.ink} strokeWidth="3" />
        <rect x="-60" y="-44" width="120" height="9" rx="3" fill={C.ink} opacity="0.7" />
        <rect x="-44" y="-26" width="88" height="7" rx="3" fill={C.hair} />
        <Pop x={40} y={26} at={STAMP + 1.0} dur={0.3}>
          <circle r="24" fill="none" stroke={C.magenta} strokeWidth="4" />
          <circle r="16" fill={C.tint} stroke={C.magenta} strokeWidth="2" strokeDasharray="3 3" />
          <path d="M-7 0 L-2 5 L8 -6" fill="none" stroke={C.magenta} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </Pop>
      </g>

      {/* The auditor's stamp. */}
      <g transform="translate(1000 120)" opacity={0}>
        <FadeIn at={STAMP - 0.1} dur={0.2} />
        <FadeOut at={STAMP + 1.8} dur={0.4} />
        <Move path="M0 0 L-270 0 L-270 120 L-270 40" points={[0, 0.55, 0.8, 1]} times={[0, 0.5, 0.75, 1]} at={STAMP} dur={1.6} ease={ease.inOut} />
        <rect x="-10" y="-60" width="20" height="44" rx="6" fill={C.wattle} stroke={C.ink} strokeWidth="2.5" />
        <circle cy="-66" r="14" fill={C.wattle} stroke={C.ink} strokeWidth="2.5" />
        <rect x="-36" y="-18" width="72" height="18" rx="4" fill={C.ink} />
        <rect x="-32" y="0" width="64" height="8" rx="2" fill={C.magenta} />
      </g>

      {/* Someone checks the auditor too. */}
      <path d="M840 110 L770 120" stroke={C.wattle} strokeWidth="3" strokeDasharray="3 6" strokeLinecap="round" opacity={0}>
        <FadeIn at={ACCRED} dur={0.3} />
      </path>
      <Pop x={880} y={92} at={ACCRED}>
        <circle r="30" fill={C.wattleTint} stroke={C.wattle} strokeWidth="4" />
        <path d="M-10 28 L-14 52 L0 44 L14 52 L10 28" fill={C.wattle} />
        <path d="M-11 0 L-3 8 L12 -8" fill="none" stroke={C.wattle} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </Pop>
      <Pulse x={880} y={92} at={ACCRED + 0.3} from={30} to={66} colour={C.wattle} />
    </Scene>
  );
}

export function RulesStamp() {
  return (
    <div>
      <RulesStampScene />
      <KeyLine
        items={[
          { label: "Your own security rules", dot: "bg-magenta-deep" },
          { label: "Chosen controls", dot: "bg-settled" },
          { label: "Independent auditor", dot: "bg-magenta" },
          { label: "Accreditation body", dot: "bg-wattle" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 2. The receipt, and the hours that never appear on it                */
/* ================================================================== */

const ITEMS: ReactNode[] = [
  <g key="book" {...ink}>
    <path d="M-12 -9 Q-6 -12 0 -9 Q6 -12 12 -9 L12 9 Q6 6 0 9 Q-6 6 -12 9 Z" />
    <path d="M0 -9 L0 9" />
  </g>,
  <g key="pen" {...ink}>
    <path d="M-10 10 L-6 0 L8 -12 L12 -8 L0 6 Z" />
  </g>,
  <g key="lock" transform="scale(0.55)">
    <Padlock />
  </g>,
  <g key="lens" transform="scale(0.45) translate(-8 -8)">
    <Lens />
  </g>,
];
const PRINT = (k: number) => 0.7 + k * 0.9;
const TEAR = PRINT(3) + 1.2;
const CLOCKS = 9;
const CLOCK_AT = (k: number) => 0.8 + k * 0.62;
const TILL: [number, number] = [240, 280];
const JAR1 = 480;
const JAR2 = 760;
const JAR_BOTTOM = 360;

function Jar({ x }: { x: number }) {
  return (
    <path
      d={`M${x - 70} 200 L${x - 70} ${JAR_BOTTOM - 10} Q${x - 70} ${JAR_BOTTOM} ${x - 60} ${JAR_BOTTOM} L${x + 60} ${JAR_BOTTOM} Q${x + 70} ${JAR_BOTTOM} ${x + 70} ${JAR_BOTTOM - 10} L${x + 70} 200`}
      fill={C.paper}
      fillOpacity="0.4"
      stroke={C.ink}
      strokeWidth="4"
      strokeLinejoin="round"
    />
  );
}

function ClockFace() {
  return (
    <g>
      <circle r="15" fill={C.paper} stroke={C.magenta} strokeWidth="3" />
      <path d="M0 0 L0 -9 M0 0 L6 3" stroke={C.ink} strokeWidth="2.5" strokeLinecap="round" />
    </g>
  );
}

export function ReceiptScene() {
  const receiptTop = (k: number) => 186 - (k + 1) * 34;
  return (
    <Scene
      viewBox="0 0 960 420"
      end={CLOCK_AT(CLOCKS - 1) + 1.4}
      label="An old shop till prints a receipt. Each line on it is a small picture: a book for the standard, a pen for an advisor, a padlock for the security test and a magnifying glass for the audit. With each line, a coin drops into a jar beside the till. Across the counter, a second jar keeps filling with small clock faces, your own team's hours, which never appear on the receipt. The receipt is torn off while the clock jar is still filling."
    >
      <line x1="40" y1={JAR_BOTTOM + 2} x2="920" y2={JAR_BOTTOM + 2} stroke={C.ink} strokeWidth="5" strokeLinecap="round" />

      {/* The receipt grows up out of the till. */}
      <g>
        <FadeOut at={TEAR + 0.5} dur={0.4} />
        <Move path="M0 0 L0 -30" at={TEAR} dur={0.6} ease={ease.out} />
        <rect x={TILL[0] - 56} y="186" width="112" height="0" fill={C.paper} stroke={C.ink} strokeWidth="2">
          {ITEMS.map((_, k) => (
            <Anim key={k} attr="y" values={[receiptTop(k - 1), receiptTop(k)]} at={PRINT(k)} dur={0.4} />
          ))}
          {ITEMS.map((_, k) => (
            <Anim key={`h${k}`} attr="height" values={[186 - receiptTop(k - 1), 186 - receiptTop(k)]} at={PRINT(k)} dur={0.4} />
          ))}
        </rect>
        {ITEMS.map((icon, k) => (
          <g key={k} opacity={0}>
            <FadeIn at={PRINT(k) + 0.3} dur={0.2} />
            <Move path={`M0 ${34 * (k + 1)} L0 0`} at={PRINT(k)} dur={0.4} />
            <g transform={`translate(${TILL[0] - 30} ${receiptTop(k) + 17})`}>{icon}</g>
            <rect x={TILL[0] - 10} y={receiptTop(k) + 14} width="50" height="6" rx="3" fill={C.hair} />
          </g>
        ))}
        <path d={`M${TILL[0] - 56} ${receiptTop(3)} l10 -8 l10 8 l10 -8 l10 8 l10 -8 l10 8 l10 -8 l10 8 l10 -8 l10 8 l10 -8 l12 8`} fill="none" stroke={C.ink} strokeWidth="2" opacity={0}>
          <FadeIn at={TEAR} dur={0.2} />
        </path>
      </g>

      {/* The till. */}
      <g transform={`translate(${TILL[0]} ${TILL[1]})`}>
        <path d="M-100 -80 L100 -80 L120 60 L-120 60 Z" fill={C.wattleTint} stroke={C.ink} strokeWidth="4" strokeLinejoin="round" />
        <rect x="-60" y="-96" width="120" height="16" rx="4" fill={C.ink} />
        {[0, 1, 2].map((r) =>
          [0, 1, 2, 3].map((c) => <rect key={`${r}${c}`} x={-70 + c * 30} y={-60 + r * 24} width="22" height="16" rx="3" fill={C.paper} stroke={C.ink} strokeWidth="2" />),
        )}
        <rect x="-120" y="60" width="240" height="22" rx="4" fill={C.ink} />
        <circle cx="70" cy="-36" r="10" fill={C.stop} stroke={C.ink} strokeWidth="2" />
      </g>

      {/* Outside fees: a coin for each line. */}
      <Jar x={JAR1} />
      {ITEMS.map((_, k) => (
        <g key={k} transform={`translate(${TILL[0] + 110} ${TILL[1] + 50})`} opacity={0}>
          <Anim attr="opacity" values={[0, 1]} at={PRINT(k) + 0.3} dur={0.1} />
          <Move path={`M0 0 C60 -120 ${JAR1 - TILL[0] - 110} -120 ${JAR1 - TILL[0] - 110 + (k % 2 ? 16 : -16)} ${JAR_BOTTOM - 22 - Math.floor(k / 2) * 30 - TILL[1] - 50}`} at={PRINT(k) + 0.3} dur={0.7} ease={ease.in} />
          <Coin />
        </g>
      ))}

      {/* Your own team's hours: they keep coming. */}
      <Jar x={JAR2} />
      {Array.from({ length: CLOCKS }, (_, k) => {
        const col = k % 3;
        const row = Math.floor(k / 3);
        return (
          <g key={k} transform={`translate(${JAR2 - 38 + col * 38} 120)`} opacity={0}>
            <Anim attr="opacity" values={[0, 1]} at={CLOCK_AT(k)} dur={0.1} />
            <Move path={`M0 0 L0 ${JAR_BOTTOM - 22 - row * 32 - 120}`} at={CLOCK_AT(k)} dur={0.6} ease={ease.in} />
            <ClockFace />
          </g>
        );
      })}
    </Scene>
  );
}

export function Receipt() {
  return (
    <div>
      <ReceiptScene />
      <KeyLine
        items={[
          { label: "Outside fees", dot: "bg-wattle" },
          { label: "Your team's hours", dot: "bg-magenta" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 3. The three-year cycle on a wall calendar                           */
/* ================================================================== */

const VISIT = [2.4, 4.6, 6.8];
const FLIP = [3.6, 5.8];
const RENEW = VISIT[2] + 1.8;
const CAL: [number, number] = [330, 220];

function Page({ year, fill }: { year: number; fill: string }) {
  return (
    <g>
      <rect x="-110" y="-110" width="220" height="230" rx="8" fill={fill} stroke={C.ink} strokeWidth="3" />
      <rect x="-110" y="-110" width="220" height="44" rx="8" fill={C.magenta} />
      {Array.from({ length: year }, (_, k) => (
        <circle key={k} cx={(k - (year - 1) / 2) * 30} cy="-88" r="9" fill={C.paper} />
      ))}
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3, 4].map((c) => <rect key={`${r}${c}`} x={-90 + c * 38} y={-50 + r * 38} width="28" height="28" rx="3" fill={C.paper} stroke={C.hair} strokeWidth="1.5" />),
      )}
    </g>
  );
}

function Car({ van = false }: { van?: boolean }) {
  const w = van ? 120 : 84;
  return (
    <g>
      <rect x={-w / 2} y="-22" width={w} height="26" rx="6" fill={van ? C.wattleTint : C.tint} stroke={C.ink} strokeWidth="3" />
      <path d={van ? "M-60 -22 L-60 -44 L30 -44 L50 -22 Z" : "M-26 -22 L-16 -40 L18 -40 L30 -22 Z"} fill={C.paper} stroke={C.ink} strokeWidth="3" strokeLinejoin="round" />
      <circle cx={-w / 2 + 18} cy="6" r="9" fill={C.ink} />
      <circle cx={w / 2 - 18} cy="6" r="9" fill={C.ink} />
    </g>
  );
}

export function CycleScene() {
  return (
    <Scene
      viewBox="0 0 960 420"
      end={RENEW + 2.0}
      label="A wall calendar has three pages, one per year. A certificate is pinned up on day one. Near the end of year one a small car pulls up outside the window and an auditor ticks a checklist, then the page flips to year two and the car visits again. In year three a bigger van arrives for the full audit and a fresh certificate goes up as the calendar turns back to a new first year. All the while, a hand ticks boxes on a sheet by the door: the record keeping never stops."
    >
      {/* The calendar: three pages, flipped up as the years pass. */}
      {[3, 2, 1].map((year) => (
        <g key={year} transform={`translate(${CAL[0]} ${CAL[1]})`}>
          {year < 3 ? (
            <g transform="translate(0 -110)">
              <g transform="scale(1 1)">
                <Turn type="scale" values={["1 1", "1 0"]} at={FLIP[year - 1]} dur={0.5} ease={ease.in} />
                <g transform="translate(0 110)">
                  <Page year={year} fill={C.paper} />
                </g>
              </g>
            </g>
          ) : (
            <Page year={3} fill={C.paper} />
          )}
        </g>
      ))}
      {/* A new first year, after renewal. */}
      <g transform={`translate(${CAL[0]} ${CAL[1]})`} opacity={0}>
        <FadeIn at={RENEW} dur={0.4} />
        <Page year={1} fill={C.paper} />
      </g>
      {[-60, 0, 60].map((x) => (
        <circle key={x} cx={CAL[0] + x} cy={CAL[1] - 112} r="8" fill="none" stroke={C.ink} strokeWidth="4" />
      ))}

      {/* The certificate on the wall. */}
      <g transform="translate(560 130)">
        <Pop x={0} y={0} at={0.5}>
          <rect x="-56" y="-42" width="112" height="84" rx="4" fill={C.paper} stroke={C.ink} strokeWidth="3" />
          <rect x="-36" y="-26" width="72" height="7" rx="3" fill={C.hair} />
          <circle cx="24" cy="18" r="13" fill="none" stroke={C.magenta} strokeWidth="3" />
        </Pop>
        <Pop x={24} y={18} at={RENEW} dur={0.4}>
          <circle r="13" fill={C.magenta} />
        </Pop>
        <circle cy="-46" r="5" fill={C.stop} />
      </g>

      {/* The window, where the auditors arrive. */}
      <rect x="660" y="200" width="270" height="170" rx="8" fill={C.shallows} stroke={C.ink} strokeWidth="4" />
      <line x1="660" y1="330" x2="930" y2="330" stroke={C.hair} strokeWidth="3" />
      <clipPath id="iso-window">
        <rect x="662" y="202" width="266" height="166" rx="6" />
      </clipPath>
      <g clipPath="url(#iso-window)">
        {VISIT.map((t, k) => (
          <g key={t} transform="translate(1000 318)" opacity={0}>
            <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.05, 0.95, 1]} at={t - 0.8} dur={2.0} ease={null} />
            <Move path="M0 0 L-200 0 L-200 0 L-420 0" points={[0, 0.48, 0.48, 1]} times={[0, 0.35, 0.7, 1]} at={t - 0.8} dur={2.0} ease={ease.inOut} />
            <Car van={k === 2} />
          </g>
        ))}
      </g>
      {VISIT.map((t, k) => (
        <g key={t}>
          <Pop x={760} y={262} at={t} dur={0.3}>
            <g>
              <FadeOut at={t + 0.9} dur={0.2} />
              <g transform={k === 2 ? "translate(-16 0)" : undefined}>
                <Person />
              </g>
              {k === 2 && (
                <g transform="translate(18 0)">
                  <Person />
                </g>
              )}
            </g>
          </Pop>
          <Pop x={850} y={250} at={t + 0.4} dur={0.3}>
            <g>
              <FadeOut at={t + 1.0} dur={0.2} />
              <TickBadge r={14} fill={k === 2 ? C.magenta : C.settled} />
            </g>
          </Pop>
        </g>
      ))}

      {/* Record keeping, all year round. */}
      <g transform="translate(90 230)">
        <rect x="-46" y="-120" width="92" height="240" rx="6" fill={C.paper} stroke={C.ink} strokeWidth="3" />
        {Array.from({ length: 8 }, (_, k) => (
          <g key={k} transform={`translate(-18 ${-96 + k * 28})`}>
            <rect x="-8" y="-8" width="16" height="16" rx="3" fill={C.paper} stroke={C.hair} strokeWidth="2" />
            <path d="M-5 0 L-1 4 L6 -5" fill="none" stroke={C.settled} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...drawable}>
              <Draw at={0.8 + k * 1.05} dur={0.25} ease={ease.out} />
            </path>
            <rect x="14" y="-3" width="36" height="6" rx="3" fill={C.hair} />
          </g>
        ))}
      </g>
    </Scene>
  );
}

export function Cycle() {
  return (
    <div>
      <CycleScene />
      <KeyLine
        items={[
          { label: "Certificate issued", dot: "bg-magenta" },
          { label: "Yearly check-up", dot: "bg-settled" },
          { label: "Full audit in year three", dot: "bg-wattle" },
          { label: "Records kept all year", dot: "bg-settled-tint ring-2 ring-settled" },
        ]}
      />
    </div>
  );
}
