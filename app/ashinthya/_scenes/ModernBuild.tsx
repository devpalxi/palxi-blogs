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
import { Bank, Coin, Doc, Padlock, Person, Seal } from "./props";

/* ================================================================== */
/* 1. CostTiers: 3 Software Project Price Levels                      */
/* ================================================================== */

export function CostTiersScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.8}
      label="A visual illustration of the three software project price tiers. On the left, a lightweight Tier 1 pilot prototype. In the center, a multi-engine Tier 2 production platform. On the right, a heavy-duty Tier 3 enterprise core system, each scaling with project scope and security requirements."
    >
      {/* Tier 1: Prototype */}
      <g transform="translate(180 200)">
        <rect x={-80} y={-70} width="160" height="140" rx={10} fill={C.paper} stroke={C.ink} strokeWidth="3" />
        <rect x={-60} y={-50} width="120" height="24" rx={4} fill={C.shallows} />
        <rect x={-60} y={-14} width="120" height="16" rx={3} fill={C.shallows} />
        <rect x={-60} y={10} width="120" height="16" rx={3} fill={C.shallows} />
        <Coin r={14} fill={C.wattle} />
        <Pop x={60} y={-50} at={1.2}>
          <TickBadge r={14} />
        </Pop>
      </g>

      {/* Tier 2: Production Engine */}
      <g transform="translate(480 180)">
        <rect x={-90} y={-90} width="180" height="180" rx={12} fill={C.tint} stroke={C.magenta} strokeWidth="3.5" />
        <rect x={-70} y={-70} width="140" height="28" rx={4} fill={C.paper} />
        <Bank fill={C.paper} />
        <g transform="translate(0 50)">
          <Coin r={14} fill={C.magenta} />
        </g>
        <Pop x={70} y={-70} at={2.0}>
          <TickBadge r={16} />
        </Pop>
      </g>

      {/* Tier 3: Enterprise Core */}
      <g transform="translate(780 160)">
        <rect x={-100} y={-110} width="200" height="220" rx={14} fill={C.settledTint} stroke={C.settled} strokeWidth="4" />
        <rect x={-80} y={-90} width="160" height="32" rx={6} fill={C.settled} />
        <g transform="translate(0 0)">
          <Bank fill={C.paper} />
        </g>
        <g transform="translate(0 70)">
          <Seal r={22} colour={C.settled} />
        </g>
        <Pop x={80} y={-90} at={2.8}>
          <TickBadge r={18} />
        </Pop>
      </g>
    </Scene>
  );
}

export function CostTiers() {
  return (
    <div>
      <CostTiersScene />
      <KeyLine
        items={[
          { label: "Tier 1: Pilot prototype ($60k-$120k)", dot: "bg-wattle" },
          { label: "Tier 2: Production engine ($250k-$600k)", dot: "bg-magenta" },
          { label: "Tier 3: Enterprise core ($750k-$2M+)", dot: "bg-settled" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 2. PartnerVetting: Vetting a Software Development Agency           */
/* ================================================================== */

export function PartnerVettingScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.8}
      label="A visual demonstration of partner due diligence. An agency credential dossier is inspected with a magnifying glass. Key criteria including verified local engineers, complete IP code ownership, and independent security credentials receive approved seals."
    >
      {/* Agency Dossier in center */}
      <g transform="translate(480 190)">
        <rect x={-200} y={-110} width="400" height="220" rx={12} fill={C.paper} stroke={C.ink} strokeWidth="4" />
        <rect x={-200} y={-110} width="400" height="36" rx={8} fill={C.ink} />

        {/* 3 Verification Sections */}
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(-160 ${-40 + i * 50})`}>
            <circle cx={12} cy={12} r="12" fill={C.settled} opacity={0}>
              <FadeIn at={1.2 + i * 0.6} dur={0.3} />
            </circle>
            <path
              d="M7 12 L11 16 L17 9"
              stroke={C.paper}
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              opacity={0}
            >
              <FadeIn at={1.3 + i * 0.6} dur={0.2} />
            </path>
            <line x1="36" y1="12" x2="260" y2="12" stroke={C.ink} strokeWidth="6" strokeLinecap="round" opacity={0.7} />
          </g>
        ))}

        {/* Approved Partnership Stamp */}
        <g transform="translate(130 50)">
          <Pop x={0} y={0} at={3.2}>
            <Seal r={32} colour={C.magenta} />
          </Pop>
        </g>
      </g>
    </Scene>
  );
}

export function PartnerVetting() {
  return (
    <div>
      <PartnerVettingScene />
      <KeyLine
        items={[
          { label: "Verified senior engineering team", dot: "bg-settled" },
          { label: "100% Client code & IP ownership", dot: "bg-settled ring-2 ring-settled" },
          { label: "Approved partnership credentials", dot: "bg-magenta" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 3. BypassBridge: Strangler Fig Core Banking Modernisation          */
/* ================================================================== */

export function BypassBridgeScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={7.0}
      label="A visual demonstration of progressive modernization using the bypass bridge analogy. Alongside an aging stone arch bridge representing the legacy core, engineers erect a modern cable-stayed suspension bridge. Traffic safely diverts across the new bridge lane by lane without interrupting daily service."
    >
      {/* Water river below */}
      <path d="M0 320 Q480 340 960 320 L960 380 L0 380 Z" fill={C.tint} opacity={0.6} />

      {/* Upper Legacy Bridge (Stone arches) */}
      <g transform="translate(0 100)">
        <rect x={60} y={40} width="840" height="20" rx={4} fill={C.paper} stroke={C.ink} strokeWidth="3" />
        {/* Arches */}
        {[180, 360, 540, 720].map((x) => (
          <path key={x} d={`M${x - 60} 60 Q${x} 10 ${x + 60} 60`} stroke={C.ink} strokeWidth="3" fill="none" />
        ))}
      </g>

      {/* Lower Modern Bypass Bridge (Cable-stayed) */}
      <g transform="translate(0 240)">
        {/* Road deck */}
        <rect x={60} y={30} width="840" height="24" rx={6} fill={C.paper} stroke={C.magenta} strokeWidth="4" />
        {/* Pylon Towers */}
        <line x1="320" y1="40" x2="320" y2="-60" stroke={C.ink} strokeWidth="6" strokeLinecap="round" />
        <line x1="640" y1="40" x2="640" y2="-60" stroke={C.ink} strokeWidth="6" strokeLinecap="round" />
        {/* Stay cables */}
        {[-80, -40, 40, 80].map((dx) => (
          <g key={dx}>
            <line x1="320" y1="-50" x2={320 + dx} y2="30" stroke={C.magenta} strokeWidth="2" opacity={0.6} />
            <line x1="640" y1="-50" x2={640 + dx} y2="30" stroke={C.magenta} strokeWidth="2" opacity={0.6} />
          </g>
        ))}
      </g>

      {/* Traffic Diversion: Vehicle moving from old road to new bridge */}
      <g transform="translate(100 130)">
        <Move path="M0 0 L160 0 C240 0 280 140 400 140 L700 140" at={1.0} dur={3.2} ease={ease.inOut} />
        <rect x={-24} y={-12} width="48" height="24" rx={4} fill={C.settled} stroke={C.paper} strokeWidth="2" />
        <circle cx={-12} cy={12} r="5" fill={C.ink} />
        <circle cx={12} cy={12} r="5" fill={C.ink} />
      </g>

      <Pop x={840} y={260} at={4.8}>
        <TickBadge r={18} />
      </Pop>
      <Pulse x={840} y={260} at={4.8} colour={HEX.settled} />
    </Scene>
  );
}

export function BypassBridge() {
  return (
    <div>
      <BypassBridgeScene />
      <KeyLine
        items={[
          { label: "Legacy core system (stone arch)", dot: "bg-muted" },
          { label: "Modern cloud platform (bypass bridge)", dot: "bg-magenta" },
          { label: "Diverted transaction traffic", dot: "bg-settled" },
          { label: "Uninterrupted operation", dot: "bg-settled ring-2 ring-settled" },
        ]}
      />
    </div>
  );
}
