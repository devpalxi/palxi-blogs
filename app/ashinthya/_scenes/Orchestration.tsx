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
  drawable,
  ease,
} from "./kit";
import { KeyLine } from "./Key";
import { Bank, Coin, Handset, Padlock, Seal } from "./props";

/* ================================================================== */
/* 1. RailSwitch: Choosing between Card and Bank-to-Bank Rails        */
/* ================================================================== */

export function RailSwitchScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.5}
      label="A payment packet arrives from a mobile phone checkout. A smart router switch evaluates the transaction amount and fee structure. It swings the track lever downward, sending the large payment along the low-cost PayTo bank-to-bank rail directly to a bank vault rather than the high-fee card rail."
    >
      {/* Checkout origin */}
      <g transform="translate(100 190)">
        <Handset screen={C.tint} />
        <circle cx={0} cy={0} r="14" fill={C.magenta} />
        <path d="M-5 0 L-1 4 L6 -4" stroke={C.paper} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>

      {/* Incoming track */}
      <path d="M140 190 L340 190" stroke={C.ink} strokeWidth="6" strokeLinecap="round" />
      <path d="M140 190 L340 190" stroke={C.hair} strokeWidth="2" strokeDasharray="6 8" />

      {/* The moving payment coin */}
      <g transform="translate(140 190)">
        <Move path="M0 0 L200 0" at={0.5} dur={1.2} ease={ease.out} />
        <Coin r={16} fill={C.wattle} />
      </g>

      {/* Router Junction */}
      <g transform="translate(380 190)">
        <circle cx={0} cy={0} r="38" fill={C.paper} stroke={C.ink} strokeWidth="4" />
        <rect x={-18} y={-18} width="36" height="36" rx={8} fill={C.tint} />
        {/* Switch Lever */}
        <g transform="rotate(0)">
          <Turn
            type="rotate"
            values={["-25", "25", "25"]}
            times={[0, 0.4, 1]}
            at={1.8}
            dur={0.8}
            ease={ease.inOut}
          />
          <line x1="-12" y1="0" x2="28" y2="0" stroke={C.magenta} strokeWidth="5" strokeLinecap="round" />
          <circle cx={28} cy={0} r="5" fill={C.magenta} />
        </g>
      </g>

      {/* Upper Track: Card Rail */}
      <path d="M420 170 C520 140 600 100 740 100" stroke={C.ink} strokeWidth="4" fill="none" />
      <g transform="translate(790 100)">
        <rect x={-50} y={-30} width="100" height="60" rx={6} fill={C.paper} stroke={C.ink} strokeWidth="3" />
        <rect x={-42} y={-20} width="24" height="18" rx={3} fill={C.wattle} />
        <line x1="-42" y1="12" x2="38" y2="12" stroke={C.hair} strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Lower Track: PayTo A2A Rail */}
      <path d="M420 210 C520 240 600 280 740 280" stroke={C.magenta} strokeWidth="5" fill="none" />
      <g transform="translate(790 280)">
        <Bank fill={C.paper} />
      </g>

      {/* Coin proceeds along lower rail */}
      <g transform="translate(380 190)" opacity={0}>
        <FadeIn at={2.6} dur={0.1} />
        <Move path="M40 20 C140 50 220 90 380 90" at={2.6} dur={1.6} ease={ease.out} />
        <Coin r={16} fill={C.settled} />
      </g>

      <Pop x={790} y={280} at={4.4}>
        <TickBadge r={18} />
      </Pop>
      <Pulse x={790} y={280} at={4.4} colour={HEX.settled} />
    </Scene>
  );
}

export function RailSwitch() {
  return (
    <div>
      <RailSwitchScene />
      <KeyLine
        items={[
          { label: "Incoming payment", dot: "bg-wattle" },
          { label: "Smart routing engine", dot: "bg-magenta" },
          { label: "Card rail (higher fee)", dot: "bg-muted" },
          { label: "PayTo A2A rail (settled)", dot: "bg-settled" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 2. Failover: Automatic Redundancy Rerouting                        */
/* ================================================================== */

export function FailoverScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.8}
      label="A transaction encounters a timeout error at the primary card processor. Rather than failing the customer checkout, the orchestration engine instantly catches the error, rotates the bypass gate, and reroutes the payment through the secondary gateway."
    >
      {/* Origin */}
      <g transform="translate(120 190)">
        <rect x={-40} y={-30} width="80" height="60" rx={6} fill={C.paper} stroke={C.ink} strokeWidth="3" />
        <circle cx={0} cy={0} r="14" fill={C.wattle} />
      </g>

      {/* Main split */}
      <path d="M170 190 L320 190" stroke={C.ink} strokeWidth="4" />
      <path d="M320 190 C400 190 440 110 520 110" stroke={C.ink} strokeWidth="4" fill="none" />
      <path d="M320 190 C400 190 440 270 520 270" stroke={C.ink} strokeWidth="4" fill="none" />

      {/* Primary Gateway (Upper) */}
      <g transform="translate(620 110)">
        <rect x={-70} y={-36} width="140" height="72" rx={6} fill={C.stopTint} stroke={C.stop} strokeWidth="3" />
        {/* Red X Barrier */}
        <g transform="translate(0 0)">
          <line x1="-16" y1="-16" x2="16" y2="16" stroke={C.stop} strokeWidth="5" strokeLinecap="round" />
          <line x1="16" y1="-16" x2="-16" y2="16" stroke={C.stop} strokeWidth="5" strokeLinecap="round" />
        </g>
      </g>

      {/* Payment travels to Primary Gateway first */}
      <g transform="translate(170 190)">
        <Move path="M0 0 L150 0 C230 0 270 -80 380 -80" at={0.5} dur={1.4} ease={ease.out} />
        <FadeOut at={2.0} dur={0.3} />
        <circle cx={0} cy={0} r="14" fill={C.stop} />
      </g>
      <Pulse x={550} y={110} at={1.9} colour={HEX.stop} />

      {/* Reroute indicator line */}
      <path
        d="M320 190 C400 190 440 270 520 270"
        stroke={C.settled}
        strokeWidth="6"
        fill="none"
        strokeDasharray="6 8"
        opacity={0}
      >
        <FadeIn at={2.4} dur={0.3} />
      </path>

      {/* Secondary Gateway (Lower) */}
      <g transform="translate(620 270)">
        <rect x={-70} y={-36} width="140" height="72" rx={6} fill={C.settledTint} stroke={C.settled} strokeWidth="3" />
        <g transform="translate(0 0)">
          <path d="M-12 0 L-3 9 L12 -6" stroke={C.settled} strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
      </g>

      {/* Rerouted payment packet moving to Secondary */}
      <g transform="translate(320 190)" opacity={0}>
        <FadeIn at={2.6} dur={0.1} />
        <Move path="M0 0 C80 0 120 80 230 80" at={2.6} dur={1.4} ease={ease.out} />
        <circle cx={0} cy={0} r="14" fill={C.settled} />
      </g>

      {/* Final destination */}
      <path d="M700 270 L820 270" stroke={C.settled} strokeWidth="4" />
      <g transform="translate(850 270)">
        <Bank fill={C.paper} />
        <Pop x={0} y={-40} at={4.3}>
          <TickBadge r={16} />
        </Pop>
      </g>
    </Scene>
  );
}

export function Failover() {
  return (
    <div>
      <FailoverScene />
      <KeyLine
        items={[
          { label: "Payment attempt", dot: "bg-wattle" },
          { label: "Primary processor timeout", dot: "bg-stop" },
          { label: "Automatic failover route", dot: "bg-settled" },
          { label: "Completed transaction", dot: "bg-settled ring-2 ring-settled" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 3. SingleLedger: Unified Record for Cards and A2A                 */
/* ================================================================== */

export function SingleLedgerScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={7.0}
      label="Streams of card charges and account payouts flow into a single central ledger. Each transaction receives a standardized reference number, timestamps, and fees, creating a single reconciled financial record."
    >
      {/* Left side: Card stream */}
      <g transform="translate(140 110)">
        <rect x={-60} y={-30} width="120" height="60" rx={6} fill={C.paper} stroke={C.ink} strokeWidth="3" />
        <rect x={-48} y={-18} width="30" height="20" rx={3} fill={C.magenta} />
        <line x1="-48" y1="12" x2="48" y2="12" stroke={C.hair} strokeWidth="3" />
      </g>
      <path d="M210 110 C320 110 360 170 440 170" stroke={C.magenta} strokeWidth="4" fill="none" />

      {/* Left side: A2A PayTo stream */}
      <g transform="translate(140 270)">
        <Bank fill={C.paper} />
      </g>
      <path d="M210 270 C320 270 360 210 440 210" stroke={C.settled} strokeWidth="4" fill="none" />

      {/* Moving tokens into ledger */}
      <g transform="translate(210 110)">
        <Move path="M0 0 C110 0 150 60 230 60" at={0.6} dur={1.4} ease={ease.out} />
        <Coin r={12} fill={C.magenta} />
      </g>
      <g transform="translate(210 270)">
        <Move path="M0 0 C110 0 150 -60 230 -60" at={1.2} dur={1.4} ease={ease.out} />
        <Coin r={12} fill={C.settled} />
      </g>

      {/* Central Unified Ledger */}
      <g transform="translate(620 190)">
        <rect x={-140} y={-110} width="280" height="220" rx={8} fill={C.paper} stroke={C.ink} strokeWidth="4" />
        <rect x={-140} y={-110} width="280" height="36" rx={6} fill={C.ink} />
        <circle cx={-110} cy={-92} r="6" fill={C.magenta} />
        <circle cx={-90} cy={-92} r="6" fill={C.wattle} />
        <circle cx={-70} cy={-92} r="6" fill={C.settled} />

        {/* Ledger rows stamping in */}
        {[0, 1, 2, 3].map((row) => (
          <g key={row} transform={`translate(-120 ${-50 + row * 40})`}>
            <rect x={0} y={0} width="24" height="24" rx={4} fill={row % 2 === 0 ? C.tint : C.settledTint} opacity={0}>
              <FadeIn at={2.0 + row * 0.8} dur={0.2} />
            </rect>
            <path
              d={`M36 12 L${row % 2 === 0 ? 180 : 160} 12`}
              stroke={row % 2 === 0 ? C.magenta : C.settled}
              strokeWidth="6"
              strokeLinecap="round"
              {...drawable}
            >
              <Draw at={2.1 + row * 0.8} dur={0.5} ease={ease.out} />
            </path>
            <rect x={190} y={4} width="40" height="16" rx={3} fill={C.shallows} opacity={0}>
              <FadeIn at={2.3 + row * 0.8} dur={0.2} />
            </rect>
          </g>
        ))}

        {/* Verification Stamp */}
        <g transform="translate(70 50)">
          <Pop x={0} y={0} at={5.2}>
            <Seal r={28} colour={C.settled} />
          </Pop>
        </g>
      </g>
    </Scene>
  );
}

export function SingleLedger() {
  return (
    <div>
      <SingleLedgerScene />
      <KeyLine
        items={[
          { label: "Card transactions", dot: "bg-magenta" },
          { label: "Bank-to-bank PayTo", dot: "bg-settled" },
          { label: "Unified ledger entry", dot: "bg-hair" },
          { label: "Reconciled status", dot: "bg-settled ring-2 ring-settled" },
        ]}
      />
    </div>
  );
}
