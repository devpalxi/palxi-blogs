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
import { Bank, Doc, Handset, Padlock, Person, Seal } from "./props";

/* ================================================================== */
/* 1. ConsentGate: Customer Control Over Data Sharing                 */
/* ================================================================== */

export function ConsentGateScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.5}
      label="A customer manages data sharing on a phone screen. The customer toggles permission for transaction history while keeping contact details locked. An automated permission token opens the corresponding data gate."
    >
      {/* Smartphone on left */}
      <g transform="translate(180 190)">
        <rect x={-60} y={-110} width="120" height="220" rx={16} fill={C.ink} />
        <rect x={-50} y={-95} width="100" height="190" rx={6} fill={C.paper} />
        <circle cx={0} cy={-75} r="16" fill={C.tint} />
        <Person fill={C.tint} stroke={C.magenta} />

        {/* Toggles */}
        <g transform="translate(-35 -20)">
          <rect x={0} y={0} width="70" height="24" rx={12} fill={C.settledTint} stroke={C.settled} strokeWidth="2" />
          <circle cx={56} cy={12} r="8" fill={C.settled} />
        </g>
        <g transform="translate(-35 20)">
          <rect x={0} y={0} width="70" height="24" rx={12} fill={C.hairSoft} />
          <circle cx={14} cy={12} r="8" fill={C.hair} />
        </g>
      </g>

      {/* Permission token beam */}
      <path d="M260 170 L480 170" stroke={C.settled} strokeWidth="5" strokeDasharray="6 6" />
      <g transform="translate(260 170)">
        <Move path="M0 0 L200 0" at={1.2} dur={1.2} ease={ease.out} />
        <circle cx={0} cy={0} r="12" fill={C.settled} />
      </g>

      {/* Dual Gates on right */}
      {/* Upper Gate: Permitted Transactions (Opens) */}
      <g transform="translate(560 130)">
        <rect x={-80} y={-35} width="160" height="70" rx={8} fill={C.settledTint} stroke={C.settled} strokeWidth="3" />
        <g transform="translate(0 0)">
          <Turn type="rotate" values={["0", "-45", "-45"]} at={2.4} dur={0.8} ease={ease.inOut} />
          <line x1="-30" y1="0" x2="30" y2="0" stroke={C.settled} strokeWidth="6" strokeLinecap="round" />
        </g>
      </g>
      <path d="M650 130 L820 130" stroke={C.settled} strokeWidth="5" strokeLinecap="round" />
      <g transform="translate(850 130)">
        <Doc lines={3} fill={C.paper} accent={C.settled} />
        <Pop x={14} y={-16} at={3.4}>
          <TickBadge r={14} />
        </Pop>
      </g>

      {/* Lower Gate: Blocked Contact Data (Stays Locked) */}
      <g transform="translate(560 250)">
        <rect x={-80} y={-35} width="160" height="70" rx={8} fill={C.shallows} stroke={C.hair} strokeWidth="3" />
        <Padlock fill={C.hair} />
      </g>
      <path d="M650 250 L750 250" stroke={C.hair} strokeWidth="3" strokeDasharray="4 6" opacity="0.4" />
    </Scene>
  );
}

export function ConsentGate() {
  return (
    <div>
      <ConsentGateScene />
      <KeyLine
        items={[
          { label: "Customer consent toggle", dot: "bg-settled" },
          { label: "Approved transaction flow", dot: "bg-settled ring-2 ring-settled" },
          { label: "Unconsented data (locked)", dot: "bg-hair" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 2. DataConduit: Encrypted CDR Pipeline                            */
/* ================================================================== */

export function DataConduitScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.8}
      label="The CDR data pipeline between a data holder bank and an accredited recipient. Encrypted payloads pass through automated schema validation and latency monitoring checks."
    >
      {/* Data Holder (Bank) */}
      <g transform="translate(140 190)">
        <Bank fill={C.paper} />
      </g>

      {/* Encrypted Pipeline */}
      <path d="M210 190 L750 190" stroke={C.ink} strokeWidth="10" strokeLinecap="round" />
      <path d="M210 190 L750 190" stroke={C.tint} strokeWidth="6" strokeLinecap="round" />

      {/* Moving encrypted packets */}
      <g transform="translate(210 190)">
        <Move path="M0 0 L500 0" at={0.6} dur={2.0} ease={null} />
        <rect x={-16} y={-12} width="32" height="24" rx={4} fill={C.magenta} />
        <Padlock fill={C.paper} />
      </g>

      {/* Inspection Gate / Conformance Validator in center */}
      <g transform="translate(480 190)">
        <circle cx={0} cy={0} r="44" fill={C.paper} stroke={C.magenta} strokeWidth="4" />
        <circle cx={0} cy={0} r="28" fill={C.tint} />
        <path d="M-8 0 L-2 6 L8 -4" stroke={C.magenta} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <Pulse x={0} y={0} at={1.8} colour={HEX.magenta} />
      </g>

      {/* Accredited Recipient */}
      <g transform="translate(820 190)">
        <rect x={-60} y={-70} width="120" height="140" rx={10} fill={C.paper} stroke={C.ink} strokeWidth="3" />
        <rect x={-60} y={-70} width="120" height="26" fill={C.ink} />
        <rect x={-42} y={-28} width="84" height="20" rx={4} fill={C.settledTint} />
        <rect x={-42} y={4} width="84" height="20" rx={4} fill={C.tint} />
        <rect x={-42} y={36} width="84" height="20" rx={4} fill={C.shallows} />
        <Pop x={44} y={-50} at={2.8}>
          <TickBadge r={16} />
        </Pop>
      </g>
    </Scene>
  );
}

export function DataConduit() {
  return (
    <div>
      <DataConduitScene />
      <KeyLine
        items={[
          { label: "Data holder bank", dot: "bg-paper ring-1 ring-ink" },
          { label: "Encrypted CDR pipeline", dot: "bg-magenta" },
          { label: "Conformance schema validator", dot: "bg-tint ring-2 ring-magenta" },
          { label: "Accredited recipient dashboard", dot: "bg-settled" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 3. CdrAccreditation: Verified Recipient Certification              */
/* ================================================================== */

export function CdrAccreditationScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.5}
      label="The CDR accreditation review. A compliance audit verifies information security controls and insurance requirements before the official CDR register seal stamps the entity as an Accredited Data Recipient."
    >
      {/* The Application Certificate */}
      <g transform="translate(320 190)">
        <rect x={-140} y={-100} width="280" height="200" rx={8} fill={C.paper} stroke={C.ink} strokeWidth="4" />
        <rect x={-110} y={-70} width="160" height="12" rx={4} fill={C.ink} opacity="0.8" />
        <rect x={-110} y={-46} width="220" height="8" rx={3} fill={C.hair} />
        <rect x={-110} y={-28} width="200" height="8" rx={3} fill={C.hair} />

        {/* Verification checklist items */}
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(-110 ${0 + i * 28})`}>
            <circle cx={6} cy={6} r="8" fill={C.settled} opacity={0}>
              <FadeIn at={1.0 + i * 0.5} dur={0.3} />
            </circle>
            <path
              d="M3 6 L5 8 L9 4"
              stroke={C.paper}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity={0}
            >
              <FadeIn at={1.1 + i * 0.5} dur={0.2} />
            </path>
            <line x1="24" y1="6" x2="160" y2="6" stroke={C.hair} strokeWidth="6" strokeLinecap="round" />
          </g>
        ))}

        {/* Golden Accreditation Seal Stamp */}
        <g transform="translate(80 40)">
          <Pop x={0} y={0} at={3.0}>
            <Seal r={32} colour={C.wattle} />
          </Pop>
        </g>
      </g>

      {/* CDR Register on right */}
      <g transform="translate(700 190)">
        <rect x={-90} y={-80} width="180" height="160" rx={8} fill={C.wattleTint} stroke={C.wattle} strokeWidth="3" />
        <rect x={-70} y={-60} width="140" height="24" rx={4} fill={C.wattle} />
        <rect x={-70} y={-20} width="140" height="14" rx={3} fill={C.paper} />
        <rect x={-70} y={4} width="140" height="14" rx={3} fill={C.paper} />
        <rect x={-70} y={28} width="140" height="14" rx={3} fill={C.paper} />
        <Pop x={50} y={-48} at={3.6}>
          <TickBadge r={16} />
        </Pop>
      </g>
    </Scene>
  );
}

export function CdrAccreditation() {
  return (
    <div>
      <CdrAccreditationScene />
      <KeyLine
        items={[
          { label: "Security & privacy audit", dot: "bg-settled" },
          { label: "CDR accreditation seal", dot: "bg-wattle" },
          { label: "Accredited Register listing", dot: "bg-wattle-tint ring-2 ring-wattle" },
        ]}
      />
    </div>
  );
}
