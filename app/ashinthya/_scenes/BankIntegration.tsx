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
import { Bank, Coin, Doc, Handset, Padlock, Person, Seal } from "./props";

/* ================================================================== */
/* 1. DualPipes: Overnight Batch Files vs Instant API Payments        */
/* ================================================================== */

export function DualPipesScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.8}
      label="A visual comparison of two payment rails. Above, a slow mechanical conveyor moves overnight ABA batch files that wait for overnight settlement. Below, a high-speed fiber tube flashes instant PayTo and Osko payments directly into the bank ledger."
    >
      {/* Top Channel: Overnight Batch */}
      <g transform="translate(100 110)">
        <rect x={-40} y={-30} width="80" height="60" rx={6} fill={C.paper} stroke={C.ink} strokeWidth="3" />
        <Doc lines={3} fill={C.wattleTint} />
      </g>

      <path d="M150 110 L750 110" stroke={C.hair} strokeWidth="8" strokeLinecap="round" />
      <g transform="translate(150 110)">
        <Move path="M0 0 L580 0" at={0.5} dur={3.5} ease={null} />
        <g transform="translate(0 -16)">
          <Doc lines={3} accent={C.wattle} />
        </g>
      </g>

      <g transform="translate(820 110)">
        <Bank fill={C.shallows} />
        <g transform="translate(0 38)">
          <circle cx={0} cy={0} r="14" fill={C.wattleTint} stroke={C.wattle} strokeWidth="2" />
          <path d="M0 -6 L0 0 L4 4" stroke={C.wattle} strokeWidth="2" strokeLinecap="round" />
        </g>
      </g>

      {/* Bottom Channel: Instant Real-Time Rails */}
      <g transform="translate(100 270)">
        <Handset screen={C.tint} />
      </g>

      <path d="M150 270 L750 270" stroke={C.magenta} strokeWidth="6" strokeLinecap="round" />
      {/* Lightning fast moving packet */}
      <g transform="translate(150 270)">
        <Move path="M0 0 L600 0" at={1.0} dur={0.8} ease={ease.out} />
        <circle cx={0} cy={0} r="16" fill={C.settled} stroke={C.paper} strokeWidth="3" />
      </g>
      <Pulse x={750} y={270} at={1.8} colour={HEX.settled} />

      <g transform="translate(820 270)">
        <Bank fill={C.paper} />
        <Pop x={0} y={-40} at={1.9}>
          <TickBadge r={16} />
        </Pop>
      </g>
    </Scene>
  );
}

export function DualPipes() {
  return (
    <div>
      <DualPipesScene />
      <KeyLine
        items={[
          { label: "Overnight batch file (ABA)", dot: "bg-wattle" },
          { label: "Instant rail (PayTo / Osko)", dot: "bg-settled" },
          { label: "Overnight queue", dot: "bg-hair" },
          { label: "Immediate settlement", dot: "bg-magenta" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 2. DataVault: Customer Consent Unlocking Bank Data                 */
/* ================================================================== */

export function DataVaultScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.5}
      label="A customer on their phone approves data sharing. A green consent key turns inside a digital safe lock, unlocking encrypted bank statement records that stream into the platform dashboard."
    >
      {/* Customer phone */}
      <g transform="translate(160 190)">
        <Handset screen={C.paper} />
        <g transform="translate(0 -5)">
          <Person fill={C.tint} stroke={C.magenta} />
        </g>
        <circle cx={0} cy={18} r="10" fill={C.settled} />
        <path d="M-4 18 L-1 21 L4 16" stroke={C.paper} strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

      {/* Consent transmission line */}
      <path d="M210 190 L420 190" stroke={C.settled} strokeWidth="4" strokeDasharray="6 6" />

      {/* The Bank Vault Lock */}
      <g transform="translate(480 190)">
        <rect x={-80} y={-80} width="160" height="160" rx={12} fill={C.paper} stroke={C.ink} strokeWidth="4" />
        <circle cx={0} cy={0} r="46" fill={C.shallows} stroke={C.ink} strokeWidth="3" />
        {/* Dial turning */}
        <g transform="rotate(0)">
          <Turn type="rotate" values={["0", "90", "90"]} at={1.5} dur={0.8} ease={ease.inOut} />
          <line x1="-30" y1="0" x2="30" y2="0" stroke={C.magenta} strokeWidth="6" strokeLinecap="round" />
          <circle cx={0} cy={0} r="12" fill={C.magenta} />
        </g>
        <Pop x={44} y={-44} at={2.4}>
          <TickBadge r={16} />
        </Pop>
      </g>

      {/* Streaming verified data */}
      <path d="M570 190 L740 190" stroke={C.magenta} strokeWidth="5" strokeLinecap="round" />

      {/* Recipient Dashboard */}
      <g transform="translate(810 190)">
        <rect x={-70} y={-80} width="140" height="160" rx={8} fill={C.paper} stroke={C.ink} strokeWidth="3" />
        <rect x={-70} y={-80} width="140" height="28" fill={C.ink} />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(-50 ${-30 + i * 36})`}>
            <rect x={0} y={0} width="100" height="22" rx={4} fill={C.tint} opacity={0}>
              <FadeIn at={3.0 + i * 0.4} dur={0.3} />
            </rect>
            <path
              d="M10 11 L70 11"
              stroke={C.magenta}
              strokeWidth="4"
              strokeLinecap="round"
              {...drawable}
            >
              <Draw at={3.1 + i * 0.4} dur={0.4} ease={ease.out} />
            </path>
          </g>
        ))}
      </g>
    </Scene>
  );
}

export function DataVault() {
  return (
    <div>
      <DataVaultScene />
      <KeyLine
        items={[
          { label: "Customer biometric consent", dot: "bg-settled" },
          { label: "Bank data vault unlocked", dot: "bg-magenta" },
          { label: "Encrypted stream", dot: "bg-hair" },
          { label: "Financial dashboard", dot: "bg-tint ring-2 ring-magenta" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 3. ApiBridge: Universal Bank Integration Adapter Hub              */
/* ================================================================== */

export function ApiBridgeScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.6}
      label="Three different Australian banks with distinct interfaces plug into an integration adapter hub. The hub translates unique bank data formats into one clean, standardized API for the client platform."
    >
      {/* 3 Bank inputs on left */}
      {[0, 1, 2].map((i) => {
        const y = 80 + i * 110;
        return (
          <g key={i} transform={`translate(140 ${y})`}>
            <Bank fill={C.paper} />
            <path d={`M60 0 L260 ${190 - y}`} stroke={C.hair} strokeWidth="4" fill="none" />
            <g transform="translate(60 0)">
              <Move path={`M0 0 L200 ${190 - y}`} at={0.6 + i * 0.4} dur={1.2} ease={ease.out} />
              <rect x={-8} y={-8} width="16" height="16" rx={3} fill={i === 0 ? C.wattle : i === 1 ? C.magenta : C.settled} />
            </g>
          </g>
        );
      })}

      {/* Central Translation Adapter Hub */}
      <g transform="translate(480 190)">
        <rect x={-80} y={-80} width="160" height="160" rx={16} fill={C.tint} stroke={C.magenta} strokeWidth="4" />
        {/* Internal gear turning */}
        <g transform="rotate(0)">
          <Turn type="rotate" values={["0", "180", "360"]} at={1.0} dur={4.0} ease={null} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((ang) => (
            <line
              key={ang}
              x1="0"
              y1="-36"
              x2="0"
              y2="-26"
              stroke={C.magenta}
              strokeWidth="8"
              strokeLinecap="round"
              transform={`rotate(${ang})`}
            />
          ))}
          <circle cx={0} cy={0} r="26" fill={C.paper} stroke={C.magenta} strokeWidth="4" />
        </g>
      </g>

      {/* Unified Output Stream */}
      <path d="M570 190 L760 190" stroke={C.settled} strokeWidth="6" strokeLinecap="round" />
      <g transform="translate(580 190)">
        <Move path="M0 0 L160 0" at={2.6} dur={1.2} ease={ease.out} />
        <Coin r={14} fill={C.settled} />
      </g>

      {/* Platform Core */}
      <g transform="translate(820 190)">
        <rect x={-60} y={-60} width="120" height="120" rx={10} fill={C.paper} stroke={C.ink} strokeWidth="3" />
        <rect x={-44} y={-44} width="88" height="24" rx={4} fill={C.settledTint} />
        <rect x={-44} y={-10} width="88" height="24" rx={4} fill={C.shallows} />
        <rect x={-44} y={24} width="88" height="24" rx={4} fill={C.shallows} />
        <Pop x={40} y={-40} at={3.8}>
          <TickBadge r={16} />
        </Pop>
      </g>
    </Scene>
  );
}

export function ApiBridge() {
  return (
    <div>
      <ApiBridgeScene />
      <KeyLine
        items={[
          { label: "Diverse bank formats", dot: "bg-wattle" },
          { label: "Integration translation hub", dot: "bg-magenta" },
          { label: "Standardized API stream", dot: "bg-settled" },
          { label: "Unified platform ledger", dot: "bg-settled ring-2 ring-settled" },
        ]}
      />
    </div>
  );
}
