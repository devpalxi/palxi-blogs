import { Fragment } from "react";
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
import { Bank, Cloud, Doc, Laptop, Lens, Person, Seal, Server } from "./props";

function Rows({ items, cols = 3 }: { items: [string, string, string][]; cols?: number }) {
  return (
    <ul className={`mt-6 grid gap-4 md:gap-8 ${cols === 4 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
      {items.map(([dot, title, detail]) => (
        <li key={title} className="flex items-start gap-3">
          <span className={`mt-1.5 size-4 shrink-0 rounded-full ${dot}`} />
          <p className="text-label font-normal text-copy">
            <span className="block font-semibold text-ink">{title}</span>
            {detail}
          </p>
        </li>
      ))}
    </ul>
  );
}

/* ================================================================== */
/* 1. Type 1 is a snapshot, Type 2 is a film                            */
/* ================================================================== */

const M0 = 80;
const MW = 66.7; // one month
const mx = (m: number) => M0 + m * MW;
const STRIP_Y = 250;
const FRAMES = Array.from({ length: 12 }, (_, i) => mx(3) + 10 + i * 33);
const SAMPLED: { i: number; ok: boolean }[] = [
  { i: 1, ok: true },
  { i: 3, ok: true },
  { i: 5, ok: false },
  { i: 8, ok: true },
  { i: 10, ok: true },
];
const SHOT = 0.8;
const FILM = 2.0;
const SAMPLE = (k: number) => 3.8 + k * 0.55;
// The lens stops on each sampled frame. keyPoints are distances along the
// path, so work them out from the hops between frames.
const HOPS = [FRAMES[0] - 13, ...SAMPLED.map((s) => FRAMES[s.i])].map((x, i, xs) =>
  i === 0 ? 0 : Math.hypot(x - xs[i - 1], i === 1 ? 20 : 0),
);
const LENS_POINTS = HOPS.map((_, i) => HOPS.slice(0, i + 1).reduce((a, b) => a + b, 0) / HOPS.reduce((a, b) => a + b, 0));
const BRIDGE = SAMPLE(4) + 1.0;

export function TypesScene() {
  return (
    <Scene
      viewBox="0 0 960 420"
      end={BRIDGE + 2.0}
      label="A year of months runs along a line. For Type 1, a camera flashes once over a single day and a photo of the controls drops out. For Type 2, a film strip unrolls across six months, and a magnifying glass samples frames along it, stamping ticks, with one amber exception. After the period ends, a bridge letter signed by the vendor's management covers the months until the next report, with a dashed outline because no one tested it."
    >
      {/* The year. */}
      <line x1={M0} y1="340" x2={mx(12)} y2="340" stroke={C.ink} strokeWidth="4" strokeLinecap="round" />
      {Array.from({ length: 13 }, (_, m) => (
        <line key={m} x1={mx(m)} y1="332" x2={mx(m)} y2="348" stroke={C.ink} strokeWidth="2.5" />
      ))}

      {/* Type 1: one date. */}
      <line x1={mx(1.5)} y1="110" x2={mx(1.5)} y2="340" stroke={C.wattle} strokeWidth="3" strokeDasharray="4 6" />
      <g transform={`translate(${mx(1.5)} 70)`}>
        <rect x="-34" y="-22" width="68" height="44" rx="8" fill={C.ink} />
        <rect x="-12" y="-30" width="24" height="10" rx="3" fill={C.ink} />
        <circle r="14" fill={C.copy} stroke={C.paper} strokeWidth="3" />
        <circle r="6" fill={C.paper} opacity={0}>
          <Anim attr="opacity" values={[0, 1, 0]} at={SHOT} dur={0.4} ease={null} />
          <Anim attr="r" values={[6, 60, 80]} at={SHOT} dur={0.4} ease={null} />
        </circle>
      </g>
      <g transform={`translate(${mx(1.5)} 90)`} opacity={0}>
        <FadeIn at={SHOT + 0.2} dur={0.2} />
        <Move path="M0 0 L0 120" at={SHOT + 0.2} dur={0.7} ease={ease.out} />
        <g transform="rotate(-6)">
          <rect x="-40" y="-44" width="80" height="92" rx="4" fill={C.paper} stroke={C.ink} strokeWidth="2.5" />
          <rect x="-32" y="-36" width="64" height="58" fill={C.shallows} />
          {[0, 1, 2].map((k) => (
            <rect key={k} x={-24 + k * 18} y="-18" width="12" height="12" rx="2" fill={C.wattle} />
          ))}
        </g>
      </g>

      {/* Type 2: a period, sampled by the auditor. */}
      <clipPath id="soc-film">
        <rect x={mx(3)} y={STRIP_Y - 40} width="0" height="80">
          <Anim attr="width" values={[0, mx(9) - mx(3)]} at={FILM} dur={1.4} ease={null} />
        </rect>
      </clipPath>
      <g clipPath="url(#soc-film)">
        <rect x={mx(3)} y={STRIP_Y - 30} width={mx(9) - mx(3)} height="60" fill={C.ink} />
        {Array.from({ length: 24 }, (_, k) => (
          <g key={k}>
            <rect x={mx(3) + 6 + k * 16.6} y={STRIP_Y - 26} width="8" height="6" rx="1.5" fill={C.paper} />
            <rect x={mx(3) + 6 + k * 16.6} y={STRIP_Y + 20} width="8" height="6" rx="1.5" fill={C.paper} />
          </g>
        ))}
        {FRAMES.map((x) => (
          <rect key={x} x={x} y={STRIP_Y - 15} width="26" height="30" rx="2" fill={C.shallows} />
        ))}
      </g>
      <line x1={mx(3)} y1={STRIP_Y + 40} x2={mx(3)} y2="340" stroke={C.harbour} strokeWidth="3" />
      <line x1={mx(9)} y1={STRIP_Y + 40} x2={mx(9)} y2="340" stroke={C.harbour} strokeWidth="3" />
      <g transform={`translate(${FRAMES[0]} ${STRIP_Y - 80})`} opacity={0}>
        <FadeIn at={SAMPLE(0) - 0.4} dur={0.2} />
        <Move
          path={`M0 0 ${SAMPLED.map((s) => `L${FRAMES[s.i] + 13 - FRAMES[0]} 20`).join(" ")}`}
          points={LENS_POINTS}
          times={[0, ...SAMPLED.map((_, k) => (k + 1) / SAMPLED.length)]}
          at={SAMPLE(0) - 0.4}
          dur={SAMPLE(4) - SAMPLE(0) + 0.4}
          ease={ease.inOut}
        />
        <FadeOut at={SAMPLE(4) + 0.4} dur={0.3} />
        <g transform="scale(0.8)">
          <Lens />
        </g>
      </g>
      {SAMPLED.map((s, k) => (
        <Fragment key={s.i}>
          <rect x={FRAMES[s.i]} y={STRIP_Y - 15} width="26" height="30" rx="2" fill={s.ok ? C.settledTint : C.wattleTint} opacity={0}>
            <Anim attr="opacity" values={[0, 1]} at={SAMPLE(k)} dur={0.15} />
          </rect>
          <Pop x={FRAMES[s.i] + 13} y={STRIP_Y - 52} at={SAMPLE(k) + 0.05} dur={0.3}>
            {s.ok ? (
              <TickBadge r={11} />
            ) : (
              <g>
                <circle r="11" fill={C.wattle} />
                <path d="M0 -6 L0 2 M0 6 L0 6.5" stroke={C.paper} strokeWidth="3" strokeLinecap="round" />
              </g>
            )}
          </Pop>
        </Fragment>
      ))}

      {/* The gap until the next report: a bridge letter, untested. */}
      <rect x={mx(9) + 8} y={STRIP_Y - 46} width={mx(12) - mx(9) - 8} height="92" rx="10" fill="none" stroke={C.muted} strokeWidth="2.5" strokeDasharray="7 7" opacity={0}>
        <FadeIn at={BRIDGE} dur={0.4} />
      </rect>
      <g transform={`translate(${mx(10.5)} ${STRIP_Y})`} opacity={0}>
        <FadeIn at={BRIDGE} dur={0.3} />
        <Move path="M0 -60 L0 0" at={BRIDGE} dur={0.5} ease={ease.out} />
        <rect x="-36" y="-26" width="72" height="52" rx="5" fill={C.paper} stroke={C.ink} strokeWidth="2.5" />
        <path d="M-36 -25 L0 2 L36 -25" fill="none" stroke={C.ink} strokeWidth="2.5" />
        <path d="M-20 16 q5 -8 10 0 t10 0 t8 -3" fill="none" stroke={C.harbour} strokeWidth="2.5" strokeLinecap="round" {...drawable}>
          <Draw at={BRIDGE + 0.5} dur={0.5} ease={ease.out} />
        </path>
      </g>
      <g transform={`translate(${mx(10.5)} 120) scale(1.1)`} opacity={0}>
        <FadeIn at={BRIDGE} dur={0.3} />
        <Person fill={C.shallows} stroke={C.muted} />
      </g>
    </Scene>
  );
}

export function Types() {
  return (
    <div>
      <TypesScene />
      <Rows
        items={[
          ["bg-wattle", "Type 1: one date.", "Were the controls suitably designed on that day? A photo, not a record of how they ran."],
          ["bg-harbour", "Type 2: a period.", "Did they operate effectively over months? The auditor samples evidence across the period and lists exceptions."],
          ["bg-hairline-strong", "Bridge letter: the gap.", "From the vendor's management, not the auditor, with no independent testing behind it."],
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 2. What the report actually covers                                   */
/* ================================================================== */

const BOX = { x: 290, y: 90, w: 360, h: 230 };
const SAMPLES = 8;
const TEST = (k: number) => 1.8 + k * 0.22;
const OPINION = TEST(SAMPLES - 1) + 0.6;
const CARVE = OPINION + 0.8;
const HANDBACK = CARVE + 1.4;

export function ScopeScene() {
  return (
    <Scene
      viewBox="0 0 960 420"
      end={HANDBACK + 2.4}
      label="A dashed boundary draws around a vendor's system: its product and its people. The vendor's corporate laptop sits outside it. The client's bank on the right is linked to the product, which gets a tick for being inside the boundary. The auditor's test samples tick along the top of the box, one of them amber, and the auditor's seal stamps the corner. The cloud host below is outside the boundary, carved out, so its own report is asked for. Finally two keys slide out to the client: controls the client is expected to run itself."
    >
      {/* The scope boundary. */}
      <rect x={BOX.x} y={BOX.y} width={BOX.w} height={BOX.h} rx="22" fill={C.tint} fillOpacity="0.35" stroke={C.harbour} strokeWidth="4" strokeDasharray="1" strokeDashoffset={1} pathLength={1}>
        <Draw at={0.3} dur={1.1} />
      </rect>
      <rect x={BOX.x} y={BOX.y} width={BOX.w} height={BOX.h} rx="22" fill="none" stroke={C.harbour} strokeWidth="4" strokeDasharray="14 10" opacity={0}>
        <FadeIn at={1.4} dur={0.2} />
      </rect>
      <g transform="translate(400 230)">
        <Server />
      </g>
      <g transform="translate(550 236) scale(1.4)">
        <Person />
      </g>
      <g transform="translate(160 220)">
        <Laptop />
      </g>

      {/* The client uses this product: is it in scope? */}
      <path d="M800 230 C700 230 520 270 440 250" fill="none" stroke={C.ink} strokeWidth="3" strokeDasharray="3 7" strokeLinecap="round" />
      <g transform="translate(850 226)">
        <Bank fill={C.wattleTint} />
      </g>
      <Pop x={444} y={168} at={1.3}>
        <TickBadge r={15} />
      </Pop>

      {/* The auditor's samples, then the opinion. */}
      {Array.from({ length: SAMPLES }, (_, k) => (
        <Fragment key={k}>
          <rect x={BOX.x + 30 + k * 40} y={BOX.y + 18} width="28" height="28" rx="5" fill={C.paper} stroke={C.hair} strokeWidth="2" />
          <Pop x={BOX.x + 44 + k * 40} y={BOX.y + 32} at={TEST(k)} dur={0.3}>
            {k === 5 ? (
              <g>
                <circle r="11" fill={C.wattle} />
                <path d="M0 -6 L0 2 M0 6 L0 6.5" stroke={C.paper} strokeWidth="3" strokeLinecap="round" />
              </g>
            ) : (
              <TickBadge r={11} />
            )}
          </Pop>
        </Fragment>
      ))}
      <Pop x={BOX.x + BOX.w} y={BOX.y} at={OPINION}>
        <circle r="30" fill={C.paper} />
        <g transform="scale(1.25)">
          <Seal r={22} colour={C.harbour} />
        </g>
      </Pop>

      {/* The cloud host is outside: carved out. */}
      <g transform="translate(470 376) scale(0.8)">
        <Cloud fill={C.shallows} />
      </g>
      <line x1="440" y1={BOX.y + BOX.h} x2="450" y2="352" stroke={C.muted} strokeWidth="3" strokeDasharray="4 6" />
      <Pulse x={470} y={376} at={CARVE} from={40} to={80} colour={C.wattle} />
      <g transform="translate(560 376)" opacity={0}>
        <FadeIn at={CARVE + 0.2} dur={0.3} />
        <Move path="M0 0 C80 -10 180 -40 250 -90" at={CARVE + 0.5} dur={1.0} />
        <g transform="scale(0.8)">
          <Doc lines={3} accent={C.wattle} />
        </g>
      </g>

      {/* Customer responsibilities come back to the client. */}
      {[0, 1].map((k) => (
        <g key={k} transform={`translate(${BOX.x + BOX.w - 40} ${170 + k * 70})`} opacity={0}>
          <FadeIn at={HANDBACK + k * 0.3} dur={0.2} />
          <Move path={`M0 0 L${780 - (BOX.x + BOX.w - 40)} ${(k ? 30 : -10)}`} at={HANDBACK + k * 0.3} dur={0.9} />
          <circle r="18" fill={C.wattleTint} stroke={C.wattle} strokeWidth="2.5" />
          <circle cx="-4" r="5" fill="none" stroke={C.ink} strokeWidth="2.5" />
          <path d="M1 0 L10 0 M7 0 L7 5" stroke={C.ink} strokeWidth="2.5" strokeLinecap="round" />
        </g>
      ))}
    </Scene>
  );
}

export function ScopeCheck() {
  return (
    <div>
      <ScopeScene />
      <Rows
        cols={4}
        items={[
          ["bg-harbour", "Scope.", "Is the product your client uses inside the boundary, for a recent period?"],
          ["bg-wattle", "Exceptions.", "Which tests failed, how serious were they, and what's been fixed?"],
          ["bg-hairline-strong", "Carve-outs.", "Hosting outside the boundary relies on its own report. Ask for it."],
          ["bg-wattle", "Customer controls.", "What the report assumes your client does, like reviewing access or guarding API keys."],
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 3. The template mill                                                 */
/* ================================================================== */

const LOGOS = [C.harbour, C.wattle, C.stop, C.chart, C.ink];
const PRESS = (k: number) => 0.5 + k * 0.75;
const OUTX = (k: number) => 380 + k * 112;
const COMPARE = PRESS(4) + 1.4;

function Report({ logo }: { logo: string }) {
  return (
    <g>
      <rect x="-40" y="-54" width="80" height="108" rx="5" fill={C.paper} stroke={C.ink} strokeWidth="2.5" />
      <circle cx="-22" cy="-36" r="9" fill={logo} />
      {[-14, -2, 10, 22, 34].map((y, i) => (
        <rect key={y} x="-26" y={y} width={[52, 40, 50, 30, 46][i]} height="6" rx="2" fill={C.hair} />
      ))}
    </g>
  );
}

export function MillScene() {
  return (
    <Scene
      viewBox="0 0 960 400"
      end={COMPARE + 3.0}
      label="A stamping press comes down five times. Each time a report slides out along a belt: five reports, identical except for a different coloured logo in the corner. A magnifying glass lifts one report and lays it over another. Every line matches exactly, and an amber warning sign pops up, as dashed outlines appear around all five."
    >
      {/* The press. */}
      <rect x="80" y="40" width="20" height="300" rx="4" fill={C.ink} />
      <rect x="240" y="40" width="20" height="300" rx="4" fill={C.ink} />
      <rect x="70" y="30" width="200" height="26" rx="6" fill={C.ink} />
      <g>
        {[0, 1, 2, 3, 4].map((k) => (
          <Turn key={k} type="translate" values={["0 0", "0 120", "0 0"]} times={[0, 0.45, 1]} at={PRESS(k)} dur={0.6} ease={ease.inOut} />
        ))}
        <rect x="160" y="56" width="20" height="60" fill={C.copy} />
        <rect x="110" y="110" width="120" height="34" rx="6" fill={C.wattle} stroke={C.ink} strokeWidth="3" />
      </g>
      <rect x="60" y="300" width="840" height="16" rx="8" fill={C.hair} />
      {Array.from({ length: 14 }, (_, k) => (
        <circle key={k} cx={80 + k * 60} cy="308" r="5" fill={C.muted} />
      ))}

      {LOGOS.map((logo, k) => (
        <g key={k} transform="translate(170 246)" opacity={0}>
          <FadeIn at={PRESS(k) + 0.3} dur={0.1} />
          <Move path={`M0 0 L${OUTX(k) - 170} 0`} at={PRESS(k) + 0.5} dur={0.7} ease={ease.out} />
          <Report logo={logo} />
          <rect x="-50" y="-64" width="100" height="128" rx="10" fill="none" stroke={C.stop} strokeWidth="3" strokeDasharray="8 6" opacity={0}>
            <Anim attr="opacity" values={[0, 1]} at={COMPARE + 1.6 + k * 0.08} dur={0.2} />
          </rect>
        </g>
      ))}

      {/* Lay one over another: every line matches. */}
      <g transform={`translate(${OUTX(4)} 246)`} opacity={0}>
        <Anim attr="opacity" values={[0, 0.7, 0.7, 0]} times={[0, 0.1, 0.85, 1]} at={COMPARE} dur={2.0} ease={null} />
        <Move path={`M0 0 L0 -150 L${OUTX(2) - OUTX(4)} -150 L${OUTX(2) - OUTX(4)} 0`} points={[0, 0.3, 0.75, 1]} times={[0, 0.3, 0.7, 1]} at={COMPARE} dur={1.6} ease={ease.inOut} />
        <Report logo={LOGOS[4]} />
      </g>
      <g transform={`translate(${OUTX(2) + 70} 120)`} opacity={0}>
        <FadeIn at={COMPARE + 1.0} dur={0.2} />
        <Move path="M0 0 L-40 80" at={COMPARE + 1.0} dur={0.6} />
        <FadeOut at={COMPARE + 2.0} dur={0.3} />
        <Lens />
      </g>
      <Pop x={OUTX(2)} y={110} at={COMPARE + 1.6}>
        <path d="M0 -30 L28 18 L-28 18 Z" fill={C.wattle} stroke={C.ink} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M0 -12 L0 2 M0 9 L0 10" stroke={C.paper} strokeWidth="4.5" strokeLinecap="round" />
      </Pop>
    </Scene>
  );
}

export function Mill() {
  return (
    <div>
      <MillScene />
      <ul className="mt-6 grid list-disc gap-2 pl-6 text-label font-normal text-copy md:grid-cols-2 md:gap-x-10">
        <li>Control descriptions so generic they could apply to any company.</li>
        <li>A first Type 2 with no exceptions.</li>
        <li>Tests that mostly consist of asking management.</li>
        <li>A signing firm you can&apos;t find, or can&apos;t confirm as a licensed CPA firm.</li>
        <li>A system description that never names the product your client is buying.</li>
      </ul>
      <p className="mt-4 border-t border-hairline pt-4 text-label font-normal text-copy">
        None of these proves a report is bad, but each one is worth a follow-up question to the vendor.
      </p>
    </div>
  );
}
