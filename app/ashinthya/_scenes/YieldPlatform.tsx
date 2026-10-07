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
import { Bank, Coin, Doc, Padlock, Seal } from "./props";

/* ================================================================== */
/* 1. WatermarkFee: High-Water Mark and Performance Fees               */
/* ================================================================== */

export function WatermarkFeeScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.8}
      label="A visual demonstration of a high-water mark on a yield platform. The return level rises past the previous benchmark line. Performance fees are only deducted from the excess growth portion above the watermark."
    >
      {/* Return Gauge Reservoir */}
      <g transform="translate(360 200)">
        <rect x={-80} y={-120} width="160" height="240" rx={10} fill={C.paper} stroke={C.ink} strokeWidth="4" />

        {/* Base Level Water */}
        <rect x={-76} y={-20} width="152" height="136" rx={4} fill={C.tint} />

        {/* Rising Return Fluid */}
        <rect x={-76} y={-70} width="152" height="50" rx={2} fill={C.magenta} opacity={0}>
          <FadeIn at={1.0} dur={0.8} />
          <Anim attr="height" values={[0, 50]} at={1.0} dur={1.2} ease={ease.out} />
        </rect>

        {/* High Watermark Line */}
        <line x1="-90" y1="-20" x2="90" y2="-20" stroke={C.ink} strokeWidth="3" strokeDasharray="6 4" />
        <circle cx={90} cy={-20} r="5" fill={C.ink} />
      </g>

      {/* Overflow pipe for performance fee */}
      <path d="M440 150 L640 150" stroke={C.magenta} strokeWidth="4" strokeDasharray="4 4" />
      <g transform="translate(440 150)">
        <Move path="M0 0 L180 0" at={2.6} dur={1.4} ease={ease.out} />
        <Coin r={12} fill={C.magenta} />
      </g>

      {/* Investor Return Vault */}
      <g transform="translate(740 130)">
        <rect x={-70} y={-40} width="140" height="80" rx={8} fill={C.settledTint} stroke={C.settled} strokeWidth="3" />
        <g transform="translate(0 0)">
          <Coin r={16} fill={C.settled} />
        </g>
        <Pop x={44} y={-26} at={3.8}>
          <TickBadge r={14} />
        </Pop>
      </g>

      {/* Platform Fee Jar */}
      <g transform="translate(740 260)">
        <rect x={-50} y={-30} width="100" height="60" rx={6} fill={C.tint} stroke={C.magenta} strokeWidth="3" />
        <Coin r={12} fill={C.magenta} />
      </g>
    </Scene>
  );
}

export function WatermarkFee() {
  return (
    <div>
      <WatermarkFeeScene />
      <KeyLine
        items={[
          { label: "High-water mark threshold", dot: "bg-ink" },
          { label: "Investor yield (priority)", dot: "bg-settled" },
          { label: "Performance fee (excess only)", dot: "bg-magenta" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 2. SegregatedAccounts: Legal Separation of Client Money           */
/* ================================================================== */

export function SegregatedAccountsScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.5}
      label="Clear separation of client trust funds from company operating cash. Client investments sit securely in a dedicated bank vault with independent custody seals, completely walled off from the company operational account."
    >
      {/* Client Funds Vault on left */}
      <g transform="translate(280 190)">
        <rect x={-130} y={-100} width="260" height="200" rx={12} fill={C.paper} stroke={C.ink} strokeWidth="4" />
        <rect x={-130} y={-100} width="260" height="32" rx={8} fill={C.settled} />
        <g transform="translate(0 10)">
          <Bank fill={C.settledTint} />
        </g>
        <Padlock fill={C.settled} />
        <Pop x={90} y={-60} at={1.5}>
          <Seal r={24} colour={C.settled} />
        </Pop>
      </g>

      {/* Impassable Firewall / Barrier in middle */}
      <g transform="translate(480 190)">
        <line x1="0" y1="-120" x2="0" y2="120" stroke={C.ink} strokeWidth="6" strokeLinecap="round" />
        <line x1="-8" y1="-100" x2="-8" y2="100" stroke={C.stop} strokeWidth="3" strokeDasharray="6 6" />
        <line x1="8" y1="-100" x2="8" y2="100" stroke={C.stop} strokeWidth="3" strokeDasharray="6 6" />
        <circle cx={0} cy={0} r="18" fill={C.stop} />
        <line x1="-8" y1="0" x2="8" y2="0" stroke={C.paper} strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Company Operating Account on right */}
      <g transform="translate(680 190)">
        <rect x={-130} y={-100} width="260" height="200" rx={12} fill={C.paper} stroke={C.ink} strokeWidth="4" />
        <rect x={-130} y={-100} width="260" height="32" rx={8} fill={C.copy} />
        <g transform="translate(0 10)">
          <rect x={-60} y={-30} width="120" height="60" rx={6} fill={C.shallows} stroke={C.ink} strokeWidth="2.5" />
          <Coin r={12} fill={C.wattle} />
        </g>
      </g>
    </Scene>
  );
}

export function SegregatedAccounts() {
  return (
    <div>
      <SegregatedAccountsScene />
      <KeyLine
        items={[
          { label: "Segregated client trust vault", dot: "bg-settled" },
          { label: "Statutory legal barrier", dot: "bg-stop" },
          { label: "Company operating account", dot: "bg-copy" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 3. AuditLiquidity: Liquidity Buffer Balancing                     */
/* ================================================================== */

export function AuditLiquidityScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.8}
      label="A balanced scale demonstrating liquidity risk management. Cash reserves on the left tray balance productive loan assets on the right tray, ensuring redemption requests can be satisfied without asset fire sales."
    >
      {/* Central Scale Post */}
      <g transform="translate(480 80)">
        <line x1="0" y1="0" x2="0" y2="180" stroke={C.ink} strokeWidth="6" strokeLinecap="round" />
        <circle cx={0} cy={0} r="10" fill={C.ink} />

        {/* Balance Beam */}
        <g transform="rotate(0)">
          <Turn
            type="rotate"
            values={["-8", "6", "-2", "0"]}
            at={0.8}
            dur={2.2}
            ease={ease.inOut}
          />
          <line x1="-220" y1="0" x2="220" y2="0" stroke={C.ink} strokeWidth="6" strokeLinecap="round" />

          {/* Left Pan: Liquid Cash Buffer */}
          <line x1="-220" y1="0" x2="-240" y2="60" stroke={C.ink} strokeWidth="2.5" />
          <line x1="-220" y1="0" x2="-200" y2="60" stroke={C.ink} strokeWidth="2.5" />
          <path d="M-260 60 Q-220 80 -180 60 Z" fill={C.settledTint} stroke={C.ink} strokeWidth="3" />
          <g transform="translate(-220 50)">
            <Coin r={14} fill={C.settled} />
          </g>

          {/* Right Pan: Productive Loan Assets */}
          <line x1="220" y1="0" x2="200" y2="60" stroke={C.ink} strokeWidth="2.5" />
          <line x1="220" y1="0" x2="240" y2="60" stroke={C.ink} strokeWidth="2.5" />
          <path d="M180 60 Q220 80 260 60 Z" fill={C.wattleTint} stroke={C.ink} strokeWidth="3" />
          <g transform="translate(220 45)">
            <Doc lines={3} fill={C.paper} accent={C.wattle} />
          </g>
        </g>
      </g>

      {/* Verification Seal at bottom */}
      <g transform="translate(480 300)">
        <Pop x={0} y={0} at={3.2}>
          <Seal r={28} colour={C.settled} />
        </Pop>
      </g>
    </Scene>
  );
}

export function AuditLiquidity() {
  return (
    <div>
      <AuditLiquidityScene />
      <KeyLine
        items={[
          { label: "Liquid cash buffer (redemptions)", dot: "bg-settled" },
          { label: "Productive loan assets (yield)", dot: "bg-wattle" },
          { label: "Balanced liquidity audit", dot: "bg-settled ring-2 ring-settled" },
        ]}
      />
    </div>
  );
}
