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
/* 1. MintBurn: AUDD Stablecoin 1:1 Reserve Minting and Redemption    */
/* ================================================================== */

export function MintBurnScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.8}
      label="A visual illustration of AUD stablecoin minting. Australian dollar bank deposits enter an accredited bank reserve vault. In response, an automated coining press strikes a digital AUDD token on the blockchain ledger."
    >
      {/* Australian Bank Reserve on left */}
      <g transform="translate(180 190)">
        <Bank fill={C.paper} />
        <rect x={-60} y={44} width="120" height="24" rx={4} fill={C.settledTint} stroke={C.settled} strokeWidth="2" />
        <Coin r={12} fill={C.wattle} />
      </g>

      {/* Cash deposit moving to mint */}
      <path d="M260 190 L420 190" stroke={C.settled} strokeWidth="5" strokeLinecap="round" />
      <g transform="translate(260 190)">
        <Move path="M0 0 L140 0" at={0.5} dur={1.2} ease={ease.out} />
        <Coin r={14} fill={C.wattle} />
      </g>

      {/* Smart Contract Minting Engine in center */}
      <g transform="translate(480 190)">
        <rect x={-70} y={-80} width="140" height="160" rx={12} fill={C.paper} stroke={C.ink} strokeWidth="4" />
        <rect x={-70} y={-80} width="140" height="30" fill={C.ink} />
        {/* Coining stamp press moving down */}
        <g transform="translate(0 -10)">
          <Move path="M0 -30 L0 10 L0 -30" at={1.8} dur={0.8} ease={ease.inOut} />
          <rect x={-30} y={-20} width="60" height="30" rx={4} fill={C.magenta} />
          <path d="M-10 -5 L10 -5" stroke={C.paper} strokeWidth="4" />
        </g>
        <circle cx={0} cy={30} r="22" fill={C.tint} stroke={C.magenta} strokeWidth="3" />
        <Pop x={0} y={30} at={2.2}>
          <Coin r={16} fill={C.magenta} />
        </Pop>
        <Pulse x={0} y={30} at={2.2} colour={HEX.magenta} />
      </g>

      {/* Digital Token moving to wallet on right */}
      <path d="M560 190 L740 190" stroke={C.magenta} strokeWidth="5" strokeLinecap="round" />
      <g transform="translate(560 190)">
        <Move path="M0 0 L160 0" at={2.6} dur={1.2} ease={ease.out} />
        <Coin r={14} fill={C.magenta} />
      </g>

      {/* User Digital Wallet */}
      <g transform="translate(800 190)">
        <rect x={-50} y={-70} width="100" height="140" rx={10} fill={C.paper} stroke={C.ink} strokeWidth="3" />
        <rect x={-36} y={-50} width="72" height="40" rx={4} fill={C.tint} />
        <rect x={-36} y={2} width="72" height="14" rx={3} fill={C.shallows} />
        <rect x={-36} y={22} width="72" height="14" rx={3} fill={C.shallows} />
        <Pop x={36} y={-50} at={3.8}>
          <TickBadge r={16} />
        </Pop>
      </g>
    </Scene>
  );
}

export function MintBurn() {
  return (
    <div>
      <MintBurnScene />
      <KeyLine
        items={[
          { label: "AUD bank reserve deposit", dot: "bg-wattle" },
          { label: "1:1 Smart contract mint", dot: "bg-magenta" },
          { label: "Digital AUDD in wallet", dot: "bg-tint ring-2 ring-magenta" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 2. MpcKeys: Multi-Party Computation Key Shard Quorum              */
/* ================================================================== */

export function MpcKeysScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.8}
      label="A visual demonstration of MPC custody. Three distinct key shares sit in isolated environments: one with the institution, one in cloud hardware, and one with a backup co-signer. When two of the three turn their keys, the central transaction vault unlocks without ever assembling a complete private key in one place."
    >
      {/* 3 Key Shares on left */}
      {[0, 1, 2].map((i) => {
        const y = 80 + i * 110;
        const active = i < 2;
        return (
          <g key={i} transform={`translate(160 ${y})`}>
            <rect x={-60} y={-35} width="120" height="70" rx={8} fill={active ? C.tint : C.shallows} stroke={active ? C.magenta : C.hair} strokeWidth="3" />
            {/* Key Shard */}
            <g transform="translate(-10 0)">
              <circle cx={-16} cy={0} r="10" fill="none" stroke={active ? C.magenta : C.hair} strokeWidth="3" />
              <line x1="-6" y1="0" x2="24" y2="0" stroke={active ? C.magenta : C.hair} strokeWidth="4" strokeLinecap="round" />
              <line x1="14" y1="0" x2="14" y2="8" stroke={active ? C.magenta : C.hair} strokeWidth="3" strokeLinecap="round" />
            </g>
            <path d={`M60 0 L260 ${190 - y}`} stroke={active ? C.magenta : C.hairSoft} strokeWidth={active ? 4 : 2} fill="none" strokeDasharray={active ? "none" : "4 4"} />
            {active && (
              <g transform="translate(60 0)">
                <Move path={`M0 0 L200 ${190 - y}`} at={0.8 + i * 0.4} dur={1.2} ease={ease.out} />
                <circle cx={0} cy={0} r="8" fill={C.magenta} />
              </g>
            )}
          </g>
        );
      })}

      {/* Central Quorum Vault on right */}
      <g transform="translate(560 190)">
        <rect x={-120} y={-100} width="240" height="200" rx={16} fill={C.paper} stroke={C.ink} strokeWidth="4" />
        <circle cx={0} cy={0} r="50" fill={C.shallows} stroke={C.ink} strokeWidth="3" />
        {/* Vault lock dial */}
        <g transform="rotate(0)">
          <Turn type="rotate" values={["0", "90", "90"]} at={2.2} dur={0.8} ease={ease.inOut} />
          <line x1="-34" y1="0" x2="34" y2="0" stroke={C.settled} strokeWidth="8" strokeLinecap="round" />
          <circle cx={0} cy={0} r="14" fill={C.settled} />
        </g>
        <Pop x={70} y={-60} at={3.2}>
          <TickBadge r={18} />
        </Pop>
        <Pulse x={0} y={0} at={3.0} colour={HEX.settled} />
      </g>

      {/* Output Approved Transaction */}
      <path d="M690 190 L820 190" stroke={C.settled} strokeWidth="6" strokeLinecap="round" />
      <g transform="translate(850 190)">
        <Doc lines={3} fill={C.paper} accent={C.settled} />
        <Pop x={14} y={-16} at={4.2}>
          <Seal r={20} colour={C.settled} />
        </Pop>
      </g>
    </Scene>
  );
}

export function MpcKeys() {
  return (
    <div>
      <MpcKeysScene />
      <KeyLine
        items={[
          { label: "Active key shard (2 of 3 quorum)", dot: "bg-magenta" },
          { label: "Offline backup shard", dot: "bg-hair" },
          { label: "Multi-party vault consensus", dot: "bg-settled" },
          { label: "Signed transfer broadcast", dot: "bg-settled ring-2 ring-settled" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 3. HedgeBalance: Automated Crypto Hedging and Treasury Balance     */
/* ================================================================== */

export function HedgeBalanceScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={6.8}
      label="A visual demonstration of treasury hedging. Price swings in spot digital tokens are balanced by an automated counterweight hedging contract, keeping the overall treasury valuation steady in Australian dollars."
    >
      {/* Central Pivot */}
      <g transform="translate(480 120)">
        <line x1="0" y1="0" x2="0" y2="140" stroke={C.ink} strokeWidth="6" strokeLinecap="round" />
        <circle cx={0} cy={0} r="10" fill={C.ink} />

        {/* Seesaw Beam */}
        <g transform="rotate(0)">
          <Turn
            type="rotate"
            values={["12", "-12", "0"]}
            at={0.8}
            dur={2.4}
            ease={ease.inOut}
          />
          <line x1="-220" y1="0" x2="220" y2="0" stroke={C.ink} strokeWidth="6" strokeLinecap="round" />

          {/* Left Pan: Spot Crypto Token */}
          <line x1="-220" y1="0" x2="-220" y2="50" stroke={C.ink} strokeWidth="2.5" />
          <path d="M-260 50 Q-220 70 -180 50 Z" fill={C.tint} stroke={C.ink} strokeWidth="3" />
          <g transform="translate(-220 38)">
            <Coin r={14} fill={C.magenta} />
          </g>

          {/* Right Pan: Automated Short Hedge Position */}
          <line x1="220" y1="0" x2="220" y2="50" stroke={C.ink} strokeWidth="2.5" />
          <path d="M180 50 Q220 70 260 50 Z" fill={C.settledTint} stroke={C.ink} strokeWidth="3" />
          <g transform="translate(220 36)">
            <rect x={-18} y={-12} width="36" height="24" rx={4} fill={C.settled} />
            <path d="M-8 -2 L0 6 L8 -2" stroke={C.paper} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </g>
        </g>
      </g>

      {/* Target AUD Stable Line beneath */}
      <g transform="translate(480 300)">
        <rect x={-140} y={-30} width="280" height="60" rx={8} fill={C.paper} stroke={C.ink} strokeWidth="3" />
        <Coin r={14} fill={C.wattle} />
        <Pop x={100} y={0} at={3.5}>
          <TickBadge r={16} />
        </Pop>
      </g>
    </Scene>
  );
}

export function HedgeBalance() {
  return (
    <div>
      <HedgeBalanceScene />
      <KeyLine
        items={[
          { label: "Spot token exposure", dot: "bg-magenta" },
          { label: "Automated hedge offset", dot: "bg-settled" },
          { label: "Stable AUD treasury value", dot: "bg-wattle ring-2 ring-wattle" },
        ]}
      />
    </div>
  );
}
