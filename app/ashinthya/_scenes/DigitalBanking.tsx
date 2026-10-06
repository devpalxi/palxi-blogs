import { Fragment } from "react";
import {
  Anim,
  C,
  CrossBadge,
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
import { Bank, Coin, Doc, Handset, Laptop, Lens, Person, Server, Shop } from "./props";

function Columns({ items }: { items: { title: string; chip?: [string, string]; detail: string }[] }) {
  return (
    <ul className={`mt-6 grid gap-5 md:gap-8 ${items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
      {items.map((it) => (
        <li key={it.title}>
          <p className="font-semibold text-ink">{it.title}</p>
          {it.chip && (
            <p className="mt-1">
              <span className={`inline-block rounded-full px-3 py-0.5 text-label font-semibold ${it.chip[1]}`}>{it.chip[0]}</span>
            </p>
          )}
          <p className="mt-2 text-label font-normal text-copy">{it.detail}</p>
        </li>
      ))}
    </ul>
  );
}

/* ================================================================== */
/* 1. The licence decides: no deposits, capped deposits, or deposits    */
/* ================================================================== */

const JAR = { x: 470, top: 130, bottom: 320, left: 410, right: 530 };
const CAP_Y = 190;
const DROPS = [1.5, 2.0, 2.5, 3.0, 3.5, 4.0];
const LID = 4.4;
const YEARS = { from: 1.5, to: 5.6 };
const FORK = YEARS.to + 0.2;

export function LicencePathScene() {
  const fillStep = (JAR.bottom - CAP_Y) / DROPS.length;
  return (
    <Scene
      viewBox="0 0 960 420"
      end={FORK + 2.8}
      label="Three lenders side by side. Coins bounce off the non-bank lender, which can't take deposits. Coins drop into the restricted ADI's glass jar until it fills to a dashed cap line and a lid clamps on, while a two-year bar fills underneath. The path then forks: a green marker travels up to a full bank, while the other branch leads to an exit door. Coins pour freely into the full bank."
    >
      {/* Non-bank lender: no deposit slot. */}
      <g transform="translate(150 170) scale(1.3)">
        <Shop />
      </g>
      <g transform="translate(150 300)">
        <rect x="-44" y="-10" width="88" height="40" rx="8" fill={C.paper} stroke={C.ink} strokeWidth="3" />
        <rect x="-26" y="-4" width="52" height="8" rx="4" fill={C.ink} />
        <line x1="-30" y1="-14" x2="30" y2="10" stroke={C.stop} strokeWidth="6" strokeLinecap="round" />
      </g>
      {[0.5, 1.1].map((t) => (
        <g key={t} transform="translate(150 230)" opacity={0}>
          <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.8, 1]} at={t} dur={0.9} ease={null} />
          <Move path="M0 0 L0 50 Q20 20 60 40" points={[0, 0.5, 1]} times={[0, 0.45, 1]} at={t} dur={0.9} ease={ease.inOut} />
          <g transform="scale(0.7)">
            <Coin />
          </g>
        </g>
      ))}
      <Pop x={204} y={280} at={0.95}>
        <CrossBadge r={15} />
      </Pop>

      {/* Restricted ADI: a jar with a cap line. */}
      <clipPath id="licence-jar">
        <path d={`M${JAR.left} ${JAR.top} L${JAR.right} ${JAR.top} L${JAR.right} ${JAR.bottom - 14} Q${JAR.right} ${JAR.bottom} ${JAR.right - 14} ${JAR.bottom} L${JAR.left + 14} ${JAR.bottom} Q${JAR.left} ${JAR.bottom} ${JAR.left} ${JAR.bottom - 14} Z`} />
      </clipPath>
      <rect x={JAR.left} y={JAR.bottom} width={JAR.right - JAR.left} height="0" fill={C.chart} opacity="0.55" clipPath="url(#licence-jar)">
        {DROPS.map((t, k) => (
          <Fragment key={t}>
            <Anim attr="y" values={[JAR.bottom - k * fillStep, JAR.bottom - (k + 1) * fillStep]} at={t + 0.45} dur={0.35} />
            <Anim attr="height" values={[k * fillStep, (k + 1) * fillStep]} at={t + 0.45} dur={0.35} />
          </Fragment>
        ))}
      </rect>
      {DROPS.map((t) => (
        <g key={t} transform={`translate(${JAR.x} 20)`} opacity={0}>
          <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.85, 1]} at={t} dur={0.5} ease={null} />
          <Move path="M0 0 L0 130" at={t} dur={0.5} ease={ease.in} />
          <g transform="scale(0.8)">
            <Coin />
          </g>
        </g>
      ))}
      <path
        d={`M${JAR.left} ${JAR.top} L${JAR.right} ${JAR.top} L${JAR.right} ${JAR.bottom - 14} Q${JAR.right} ${JAR.bottom} ${JAR.right - 14} ${JAR.bottom} L${JAR.left + 14} ${JAR.bottom} Q${JAR.left} ${JAR.bottom} ${JAR.left} ${JAR.bottom - 14} Z`}
        fill={C.paper}
        fillOpacity="0.25"
        stroke={C.ink}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <line x1={JAR.left - 14} y1={CAP_Y} x2={JAR.right + 14} y2={CAP_Y} stroke={C.stop} strokeWidth="3" strokeDasharray="8 6" />
      <path d={`M${JAR.left + 18} ${JAR.top + 20} L${JAR.left + 18} ${JAR.bottom - 30}`} stroke={C.paper} strokeWidth="5" strokeLinecap="round" opacity="0.7" />
      {/* The lid clamps on at the cap. */}
      <g transform={`translate(${JAR.x} ${JAR.top - 90})`} opacity={0}>
        <FadeIn at={LID - 0.1} dur={0.1} />
        <Move path="M0 0 L0 80" at={LID} dur={0.35} ease={ease.in} />
        <rect x="-70" y="-6" width="140" height="18" rx="5" fill={C.ink} />
        <rect x="-16" y="-16" width="32" height="12" rx="4" fill={C.ink} />
      </g>
      <g transform={`translate(${JAR.x} 20)`} opacity={0}>
        <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.8, 1]} at={LID + 0.5} dur={0.9} ease={null} />
        <Move path="M0 0 L0 74 Q20 40 60 50" points={[0, 0.55, 1]} times={[0, 0.4, 1]} at={LID + 0.5} dur={0.9} ease={ease.inOut} />
        <g transform="scale(0.8)">
          <Coin />
        </g>
      </g>
      {/* Up to two years in the restricted phase. */}
      {Array.from({ length: 24 }, (_, k) => {
        const x = JAR.x - 115 + k * 10;
        return (
          <g key={k}>
            <rect x={x} y="356" width="7" height="22" rx="2" fill={C.hair} />
            <rect x={x} y="356" width="7" height="22" rx="2" fill={k < 12 ? C.wattle : C.stop} opacity={0}>
              <Anim attr="opacity" values={[0, 1]} at={YEARS.from + ((YEARS.to - YEARS.from) * k) / 24} dur={0.1} ease={null} />
            </rect>
          </g>
        );
      })}

      {/* The fork: progress to a full licence, or exit. */}
      <path d={`M${JAR.right + 12} 240 C620 240 620 150 720 150`} fill="none" stroke={C.settled} strokeWidth="6" strokeLinecap="round" {...drawable}>
        <Draw at={FORK} dur={0.8} />
      </path>
      <path d={`M${JAR.right + 12} 240 C620 240 620 330 700 330`} fill="none" stroke={C.hair} strokeWidth="5" strokeDasharray="6 8" strokeLinecap="round" />
      <g transform="translate(730 330)">
        <rect x="-18" y="-30" width="36" height="58" rx="3" fill={C.shallows} stroke={C.ink} strokeWidth="3" />
        <circle cx="10" cy="0" r="3" fill={C.ink} />
        <path d="M24 0 L44 0 M36 -8 L44 0 L36 8" stroke={C.muted} strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      <g transform={`translate(${JAR.right + 12} 240)`} opacity={0}>
        <FadeIn at={FORK} dur={0.1} />
        <Move path={`M0 0 C${620 - JAR.right - 12} 0 ${620 - JAR.right - 12} -90 ${720 - JAR.right - 12} -90`} at={FORK} dur={0.8} />
        <circle r="11" fill={C.settled} stroke={C.paper} strokeWidth="3" />
      </g>

      {/* Full ADI: deposits flow. */}
      <g transform="translate(830 156) scale(1.25)">
        <Bank fill={C.tint} />
      </g>
      {[0, 0.3, 0.6, 0.9].map((d) => (
        <g key={d} transform={`translate(${810 + d * 40} 0)`} opacity={0}>
          <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.85, 1]} at={FORK + 0.9 + d} dur={0.6} ease={null} />
          <Move path="M0 0 L0 100" at={FORK + 0.9 + d} dur={0.6} ease={ease.in} />
          <g transform="scale(0.7)">
            <Coin />
          </g>
        </g>
      ))}
      <Pulse x={830} y={120} at={FORK + 1.5} from={40} to={90} colour={C.settled} />
    </Scene>
  );
}

export function LicencePath() {
  return (
    <div>
      <LicencePathScene />
      <Columns
        items={[
          { title: "Non-bank lender", chip: ["ASIC credit licence", "bg-shallows text-ink ring-1 ring-hairline-strong"], detail: "Can't take deposits. CPS 230 doesn't apply, but credit and conduct controls do." },
          { title: "Restricted ADI", chip: ["APRA, up to two years", "bg-wattle-tint text-wattle"], detail: "Deposits capped at $2 million in total and $250,000 per account-holder. Then it moves to a full licence or exits." },
          { title: "Full ADI", chip: ["APRA licence", "bg-magenta-tint text-magenta-deep"], detail: "Can take deposits. CPS 230 applies, with ongoing vendor oversight and data sharing." },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 2. The Consumer Data Right, in both directions                       */
/* ================================================================== */

const LENDER: [number, number] = [480, 196];
const OUT_PATH = "M540 150 C640 120 700 90 790 90";
const IN_PATH = "M800 300 C700 330 640 340 560 336";
const CONSENT = 3.0;

function DataCard({ tone = C.chart }: { tone?: string }) {
  return (
    <g>
      <rect x="-20" y="-14" width="40" height="28" rx="4" fill={C.paper} stroke={C.ink} strokeWidth="2.5" />
      <rect x="-14" y="-7" width="18" height="5" rx="2" fill={tone} />
      <rect x="-14" y="3" width="26" height="4" rx="2" fill={C.hair} />
    </g>
  );
}

export function CdrScene() {
  return (
    <Scene
      viewBox="0 0 960 400"
      end={CONSENT + 5.4}
      label="A lender sits in the middle. First, cards of product data such as rates and fees flow out to a comparison app, and a magnifying glass checks them. Then a customer approves sharing on their phone. Only after that tick do transaction records flow in from another bank to the lender's credit decisioning dial, whose needle swings."
    >
      <g transform={`translate(${LENDER[0]} ${LENDER[1]}) scale(1.25)`}>
        <Bank />
      </g>

      {/* Data holder: product data out. */}
      <path d={OUT_PATH} fill="none" stroke={C.chart} strokeWidth="4" strokeDasharray="2 9" strokeLinecap="round" />
      <g transform="translate(850 90) scale(1.1)">
        <Laptop />
      </g>
      {[0.5, 0.95, 1.4].map((t) => (
        <g key={t} opacity={0}>
          <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.85, 1]} at={t} dur={1.0} ease={null} />
          <Move path={OUT_PATH} at={t} dur={1.0} />
          <DataCard />
        </g>
      ))}
      <g transform="translate(850 84)" opacity={0}>
        <FadeIn at={2.4} dur={0.2} />
        <g transform="scale(1.1)">
          <DataCard />
        </g>
      </g>
      <g transform="translate(800 30)" opacity={0}>
        <FadeIn at={2.5} dur={0.2} />
        <Move path="M0 0 L60 40 L20 60" at={2.5} dur={1.0} />
        <FadeOut at={3.6} dur={0.3} />
        <g transform="scale(0.8)">
          <Lens />
        </g>
      </g>
      <Pop x={906} y={50} at={3.5}>
        <TickBadge r={15} />
      </Pop>

      {/* The customer consents. */}
      <g transform="translate(110 210) scale(1.6)">
        <Person />
      </g>
      <g transform="translate(200 220)">
        <g transform="rotate(0)">
          <Turn type="rotate" values={[0, -8, 8, -5, 0]} at={CONSENT + 0.1} dur={0.5} ease={null} />
          <Handset />
          <Pop x={0} y={-2} at={CONSENT + 0.6}>
            <TickBadge r={13} />
          </Pop>
        </g>
      </g>
      <path d="M232 220 C320 220 360 260 420 270" fill="none" stroke={C.settled} strokeWidth="4" strokeLinecap="round" {...drawable}>
        <Draw at={CONSENT + 0.9} dur={0.6} />
      </path>
      <Pulse x={LENDER[0]} y={LENDER[1]} at={CONSENT + 1.5} from={50} to={100} colour={C.settled} />

      {/* Data recipient: transactions in, with consent, to decisioning. */}
      <g transform="translate(850 300) scale(0.85)">
        <Bank fill={C.shallows} />
      </g>
      <path d={IN_PATH} fill="none" stroke={C.magenta} strokeWidth="4" strokeDasharray="2 9" strokeLinecap="round" opacity={0}>
        <FadeIn at={CONSENT + 1.6} dur={0.3} />
      </path>
      {[0, 0.4, 0.8].map((d) => (
        <g key={d} opacity={0}>
          <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.85, 1]} at={CONSENT + 1.8 + d} dur={1.0} ease={null} />
          <Move path={IN_PATH} at={CONSENT + 1.8 + d} dur={1.0} />
          <DataCard tone={C.magenta} />
        </g>
      ))}
      <g transform="translate(520 336)">
        <circle r="34" fill={C.paper} stroke={C.ink} strokeWidth="3" />
        <path d="M-24 8 A24 24 0 0 1 24 8" fill="none" stroke={C.hair} strokeWidth="6" strokeLinecap="round" />
        <g transform="rotate(-60 0 8)">
          <Turn type="rotate" values={["-60 0 8", "40 0 8", "25 0 8"]} at={CONSENT + 3.0} dur={1.0} />
          <line x1="0" y1="8" x2="0" y2="-16" stroke={C.magenta} strokeWidth="5" strokeLinecap="round" />
        </g>
        <circle cy="8" r="5" fill={C.ink} />
      </g>
    </Scene>
  );
}

export function Cdr() {
  return (
    <div>
      <CdrScene />
      <Columns
        items={[
          { title: "As a data holder", detail: "Product data such as rates, fees and eligibility goes out through the CDR standards, then consumer data with consent. Its accuracy is the lender's job, whichever vendor serves it." },
          { title: "As a data recipient", detail: "With the customer's consent, transaction data from other institutions feeds a credit assessment. It becomes an input to the decisioning you build." },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 3. Swapping the core: wired directly, or through your own API layer  */
/* ================================================================== */

const HALF = 480;
const SWAP = 2.4;
const NEW_IN = SWAP + 1.0;

function EdgeIcons({ ox }: { ox: number }) {
  return (
    <>
      <g transform={`translate(${ox + 80} 76) scale(0.9)`}>
        <Handset />
      </g>
      <g transform={`translate(${ox + 240} 76)`}>
        <circle r="30" fill={C.paper} stroke={C.ink} strokeWidth="3" />
        <path d="M-20 8 A20 20 0 0 1 20 8 M0 8 L10 -8" fill="none" stroke={C.ink} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      <g transform={`translate(${ox + 400} 76)`}>
        <Doc lines={4} />
      </g>
    </>
  );
}

function Core({ x, version }: { x: number; version: "old" | "new" }) {
  return (
    <g transform={`translate(${x} 330) scale(0.85)`}>
      <Server led={version === "old" ? C.wattle : C.chart} />
      {version === "new" && <rect x="-35" y="-50" width="70" height="100" rx="6" fill={C.chart} opacity="0.25" />}
    </g>
  );
}

export function CoreSwapScene() {
  const direct = [80, 240, 400].map((x) => `M${x} 112 C${x} 200 240 220 240 284`);
  const viaApi = [80, 240, 400].map((x) => `M${HALF + x} 112 L${HALF + x} 190`);
  const apiDown = `M${HALF + 240} 210 L${HALF + 240} 284`;
  return (
    <Scene
      viewBox="0 0 960 420"
      end={NEW_IN + 4.4}
      label="Two versions of the same lender. On the left, an app, a decisioning dial and reporting each connect straight to the core. On the right, they connect to the lender's own API layer, which has a single link to the core. The old core slides away in both. On the left all three links snap and turn red, and each has to be redrawn slowly. On the right only the one link to the core is reconnected to the new core, and a tick appears."
    >
      <line x1={HALF} y1="20" x2={HALF} y2="400" stroke={C.hair} strokeWidth="2" strokeDasharray="6 8" />

      {/* Left: everything calls the core directly. */}
      <EdgeIcons ox={0} />
      {direct.map((d, i) => (
        <g key={i}>
          <path d={d} fill="none" stroke={HEX.ink} strokeWidth="4" strokeLinecap="round">
            <Anim attr="stroke" values={[HEX.ink, HEX.stop]} at={SWAP} dur={0.2} />
            <Anim attr="stroke-dasharray" values={["0 0", "6 10"]} at={SWAP} dur={0.01} ease={null} />
          </path>
          {/* Rewiring each one, the slow way. */}
          <path d={d} fill="none" stroke={C.wattle} strokeWidth="4" strokeLinecap="round" {...drawable}>
            <Draw at={NEW_IN + 0.8 + i * 1.0} dur={0.9} ease={ease.inOut} />
          </path>
        </g>
      ))}
      <g opacity={1}>
        <Move path="M0 0 L0 140" at={SWAP} dur={0.7} ease={ease.in} />
        <FadeOut at={SWAP + 0.4} dur={0.3} />
        <Core x={240} version="old" />
      </g>
      <g transform="translate(-260 0)" opacity={0}>
        <FadeIn at={NEW_IN} dur={0.2} />
        <Move path="M0 0 L260 0" at={NEW_IN} dur={0.6} />
        <Core x={240} version="new" />
      </g>
      <Pop x={330} y={250} at={SWAP + 0.3}>
        <g>
          <FadeOut at={NEW_IN + 3.5} dur={0.3} />
          <CrossBadge r={16} />
        </g>
      </Pop>
      <Pop x={330} y={250} at={NEW_IN + 3.8}>
        <TickBadge r={16} fill={C.wattle} />
      </Pop>

      {/* Right: everything calls the lender's own API layer. */}
      <EdgeIcons ox={HALF} />
      {viaApi.map((d, i) => (
        <path key={i} d={d} stroke={C.magenta} strokeWidth="4" strokeLinecap="round" fill="none" />
      ))}
      <rect x={HALF + 50} y="188" width="380" height="24" rx="12" fill={C.magenta} />
      <path d={apiDown} stroke={HEX.ink} strokeWidth="4" strokeLinecap="round" fill="none">
        <Anim attr="stroke-dasharray" values={["0 0", "6 10"]} at={SWAP} dur={0.01} ease={null} />
        <Anim attr="stroke" values={[HEX.ink, HEX.stop]} at={SWAP} dur={0.2} />
      </path>
      <path d={apiDown} stroke={C.settled} strokeWidth="5" strokeLinecap="round" fill="none" {...drawable}>
        <Draw at={NEW_IN + 0.7} dur={0.5} />
      </path>
      <g>
        <Move path="M0 0 L0 140" at={SWAP} dur={0.7} ease={ease.in} />
        <FadeOut at={SWAP + 0.4} dur={0.3} />
        <Core x={HALF + 240} version="old" />
      </g>
      <g transform="translate(260 0)" opacity={0}>
        <FadeIn at={NEW_IN} dur={0.2} />
        <Move path="M0 0 L-260 0" at={NEW_IN} dur={0.6} />
        <Core x={HALF + 240} version="new" />
      </g>
      <Pop x={HALF + 330} y={250} at={NEW_IN + 1.3}>
        <TickBadge r={16} />
      </Pop>
    </Scene>
  );
}

export function CoreSwap() {
  return (
    <div>
      <CoreSwapScene />
      <Columns
        items={[
          { title: "Calling the core directly", detail: "At renewal, a switch means rewiring the app, decisioning and reporting one by one. A negotiation you can't walk away from." },
          { title: "Through your own API layer", detail: "A switch is still hard, but possible: one connection changes. That leverage shows up in the contract terms." },
        ]}
      />
    </div>
  );
}
