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
/* 1. FraudFilter: Rule Engines and AI Risk Scoring                   */
/* ================================================================== */

export function FraudFilterScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.8}
      label="A visual demonstration of real-time fraud scoring. Incoming payment transactions enter a two-stage filter. A deterministic rule sieve catches basic velocity spikes, while a machine learning risk engine calculates behavioural patterns, separating fraudulent attempts into quarantine while legitimate purchases settle smoothly."
    >
      {/* Transaction queue on left */}
      {[0, 1, 2].map((i) => {
        const y = 110 + i * 80;
        const fraud = i === 1;
        return (
          <g key={i} transform={`translate(140 ${y})`}>
            <Coin r={14} fill={fraud ? C.stop : C.wattle} />
            <path d="M40 0 L220 0" stroke={C.hair} strokeWidth="4" />
            <g transform="translate(40 0)">
              <Move path="M0 0 L180 0" at={0.5 + i * 0.4} dur={1.2} ease={ease.out} />
              <circle cx={0} cy={0} r="10" fill={fraud ? C.stop : C.wattle} />
            </g>
          </g>
        );
      })}

      {/* Fraud Detection Sieve & AI Core */}
      <g transform="translate(480 190)">
        <rect x={-90} y={-110} width="180" height="220" rx={16} fill={C.paper} stroke={C.ink} strokeWidth="4" />
        <rect x={-90} y={-110} width="180" height="32" rx={10} fill={C.ink} />

        {/* AI Scoring Radar / Scanner */}
        <circle cx={0} cy={10} r="44" fill={C.tint} stroke={C.magenta} strokeWidth="3" />
        <g transform="rotate(0 0 10)">
          <Turn type="rotate" values={["0 0 10", "360 0 10"]} at={1.0} dur={3.0} ease={null} />
          <line x1="0" y1="10" x2="38" y2="10" stroke={C.magenta} strokeWidth="4" strokeLinecap="round" />
        </g>
        <Pulse x={0} y={10} at={1.8} colour={HEX.magenta} />
      </g>

      {/* Legitimate Flow (Upper Right) */}
      <path d="M580 140 C680 140 720 100 800 100" stroke={C.settled} strokeWidth="5" fill="none" />
      <g transform="translate(580 140)">
        <Move path="M0 0 C100 0 140 -40 220 -40" at={2.6} dur={1.4} ease={ease.out} />
        <Coin r={14} fill={C.settled} />
      </g>
      <g transform="translate(840 100)">
        <Bank fill={C.paper} />
        <Pop x={0} y={-40} at={4.0}>
          <TickBadge r={16} />
        </Pop>
      </g>

      {/* Quarantine / Blocked Fraud (Lower Right) */}
      <path d="M580 240 C680 240 720 280 800 280" stroke={C.stop} strokeWidth="5" fill="none" strokeDasharray="6 6" />
      <g transform="translate(580 240)">
        <Move path="M0 0 C100 0 140 40 220 40" at={2.4} dur={1.4} ease={ease.out} />
        <circle cx={0} cy={0} r="14" fill={C.stop} />
      </g>
      <g transform="translate(840 280)">
        <rect x={-40} y={-30} width="80" height="60" rx={8} fill={C.stopTint} stroke={C.stop} strokeWidth="3" />
        <Padlock fill={C.stop} />
      </g>
    </Scene>
  );
}

export function FraudFilter() {
  return (
    <div>
      <FraudFilterScene />
      <KeyLine
        items={[
          { label: "Incoming transactions", dot: "bg-wattle" },
          { label: "AI risk scoring engine", dot: "bg-magenta" },
          { label: "Approved settlement", dot: "bg-settled" },
          { label: "Quarantined scam attempt", dot: "bg-stop" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 2. ComplianceCubes: Modular Pre-Built Core and Custom Logic        */
/* ================================================================== */

export function ComplianceCubesScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.5}
      label="A visual illustration of the hybrid compliance architecture. Standard commoditised utilities (sanctions lists and PEP registries) sit as pre-built blocks, connecting cleanly into bespoke risk scoring logic that mirrors the firm's exact business rules."
    >
      {/* Pre-built Vendor Block on left */}
      <g transform="translate(240 190)">
        <rect x={-100} y={-90} width="200" height="180" rx={12} fill={C.shallows} stroke={C.ink} strokeWidth="3" />
        <rect x={-80} y={-60} width="160" height="30" rx={4} fill={C.hairSoft} />
        <rect x={-80} y={-15} width="160" height="30" rx={4} fill={C.hairSoft} />
        <rect x={-80} y={30} width="160" height="30" rx={4} fill={C.hairSoft} />
      </g>

      {/* Connection Bus in middle */}
      <path d="M350 190 L530 190" stroke={C.ink} strokeWidth="8" strokeLinecap="round" />
      <path d="M350 190 L530 190" stroke={C.magenta} strokeWidth="4" strokeLinecap="round" />

      {/* Bespoke Custom Logic Module moving in from right */}
      <g transform="translate(700 190)">
        <rect x={-110} y={-90} width="220" height="180" rx={12} fill={C.tint} stroke={C.magenta} strokeWidth="4" />
        <g transform="translate(0 -20)">
          <circle cx={0} cy={0} r="32" fill={C.paper} stroke={C.magenta} strokeWidth="3" />
          <g transform="rotate(0)">
            <Turn type="rotate" values={["0", "180", "360"]} at={1.2} dur={4.0} ease={null} />
            <line x1="-16" y1="0" x2="16" y2="0" stroke={C.magenta} strokeWidth="5" strokeLinecap="round" />
            <line x1="0" y1="-16" x2="0" y2="16" stroke={C.magenta} strokeWidth="5" strokeLinecap="round" />
          </g>
        </g>
        <Pop x={70} y={-50} at={2.8}>
          <TickBadge r={18} />
        </Pop>
      </g>
    </Scene>
  );
}

export function ComplianceCubes() {
  return (
    <div>
      <ComplianceCubesScene />
      <KeyLine
        items={[
          { label: "Commoditised vendor rules (PEP / Sanctions)", dot: "bg-muted" },
          { label: "Standardised API bus", dot: "bg-magenta" },
          { label: "Custom proprietary risk logic", dot: "bg-tint ring-2 ring-magenta" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 3. GapChecklist: ISO 27001 Inspection and Control Remediation      */
/* ================================================================== */

export function GapChecklistScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.8}
      label="A visual demonstration of an ISO 27001 gap review. A clipboard checklist systematically identifies missing operational controls. As the engineering team remediates access rules and logging trails, identified red gaps transition into verified green checkmarks."
    >
      {/* The Auditor's Clipboard */}
      <g transform="translate(340 190)">
        <rect x={-140} y={-110} width="280" height="220" rx={10} fill={C.paper} stroke={C.ink} strokeWidth="4" />
        {/* Top clip */}
        <rect x={-50} y={-126} width="100" height="24" rx={4} fill={C.ink} />
        <rect x={-30} y={-118} width="60" height="8" rx={2} fill={C.hair} />

        {/* Checklist rows */}
        {[0, 1, 2, 3].map((r) => {
          const gap = r === 1;
          return (
            <g key={r} transform={`translate(-100 ${-60 + r * 44})`}>
              <circle cx={10} cy={10} r="10" fill={gap ? C.stopTint : C.settledTint} stroke={gap ? C.stop : C.settled} strokeWidth="2.5" />
              {gap ? (
                <g>
                  <line x1="6" y1="6" x2="14" y2="14" stroke={C.stop} strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="14" y1="6" x2="6" y2="14" stroke={C.stop} strokeWidth="2.5" strokeLinecap="round" />
                </g>
              ) : (
                <path d="M6 10 L9 13 L15 7" stroke={C.settled} strokeWidth="2.5" fill="none" strokeLinecap="round" />
              )}
              <line x1="32" y1="10" x2="200" y2="10" stroke={C.ink} strokeWidth="6" strokeLinecap="round" opacity="0.7" />
            </g>
          );
        })}
      </g>

      {/* Magnifying Glass scanning */}
      <g transform="translate(180 80)">
        <Move path="M0 0 L140 60 L240 120" at={0.5} dur={1.8} ease={ease.inOut} />
        <circle cx={0} cy={0} r="32" fill="none" stroke={C.ink} strokeWidth="5" />
        <line x1="22" y1="22" x2="48" y2="48" stroke={C.ink} strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* Remediation Work on right */}
      <g transform="translate(720 190)">
        <rect x={-100} y={-90} width="200" height="180" rx={12} fill={C.settledTint} stroke={C.settled} strokeWidth="3" />
        <g transform="translate(0 -10)">
          <Padlock fill={C.settled} />
        </g>
        <Pop x={0} y={44} at={3.2}>
          <Seal r={26} colour={C.settled} />
        </Pop>
        <Pulse x={0} y={44} at={3.2} colour={HEX.settled} />
      </g>
    </Scene>
  );
}

export function GapChecklist() {
  return (
    <div>
      <GapChecklistScene />
      <KeyLine
        items={[
          { label: "Verified existing control", dot: "bg-settled" },
          { label: "Identified security gap", dot: "bg-stop" },
          { label: "Remediated audit control", dot: "bg-settled ring-2 ring-settled" },
        ]}
      />
    </div>
  );
}
