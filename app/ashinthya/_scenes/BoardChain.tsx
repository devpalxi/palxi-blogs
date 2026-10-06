import {
  Anim,
  C,
  Draw,
  FadeIn,
  Mini,
  Move,
  Pop,
  Pulse,
  Scene,
  TickBadge,
  Turn,
  drawable,
  ease,
} from "./kit";

/*
 * Where CPS 234 lands. APRA's letter goes to the chair of the board; the
 * board answers for the entity, which sits inside the standard's shield;
 * the vendor sits outside it and is reached by a contract and an audit.
 */

const CHAIRS: [number, number][] = [
  [-50, -66],
  [0, -66],
  [50, -66],
  [-50, 66],
  [0, 66],
  [50, 66],
];

/** A boardroom table from above, centred on the origin. */
function Table({ lit = false }: { lit?: boolean }) {
  return (
    <>
      <ellipse rx="92" ry="44" fill={C.paper} stroke={C.ink} strokeWidth="3" />
      <ellipse rx="76" ry="30" fill="none" stroke={C.hair} strokeWidth="2" />
      {CHAIRS.map(([x, y]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r="15" fill={C.shallows} stroke={C.ink} strokeWidth="2.5" />
      ))}
      <circle cx="-120" cy="0" r="17" fill={lit ? C.magenta : C.tint} stroke={C.magenta} strokeWidth="3" />
    </>
  );
}

/** A bank-style building, centred on the origin. */
function Building() {
  return (
    <g fill={C.paper} stroke={C.ink} strokeWidth="3" strokeLinejoin="round">
      <path d="M-92 -44 L0 -94 L92 -44 Z" />
      <rect x="-82" y="-44" width="164" height="14" />
      {[-62, -26, 12, 48].map((x) => (
        <rect key={x} x={x} y="-30" width="14" height="96" />
      ))}
      <rect x="-82" y="66" width="164" height="12" />
      <rect x="-94" y="78" width="188" height="12" />
    </g>
  );
}

/** A server rack, centred on the origin. */
function Rack({ blink = false }: { blink?: boolean }) {
  return (
    <g>
      <rect x="-60" y="-90" width="120" height="180" rx="8" fill={C.ink} />
      {[0, 1, 2, 3].map((k) => {
        const y = -76 + k * 42;
        return (
          <g key={k}>
            <rect x="-48" y={y} width="96" height="32" rx="4" fill={C.copy} />
            <circle cx="-34" cy={y + 16} r="4.5" fill={C.chart}>
              {blink && (
                <Anim
                  attr="opacity"
                  values={[1, 0.25, 1, 0.25, 1]}
                  at={0.6 + k * 0.35}
                  dur={2.4}
                  ease={null}
                />
              )}
            </circle>
            <circle cx="-20" cy={y + 16} r="4.5" fill={C.wattleTint} />
            {[0, 8, 16, 24].map((dx) => (
              <line key={dx} x1={4 + dx} y1={y + 9} x2={4 + dx} y2={y + 23} stroke={C.muted} strokeWidth="3" strokeLinecap="round" />
            ))}
          </g>
        );
      })}
      <rect x="-54" y="90" width="18" height="8" rx="2" fill={C.ink} />
      <rect x="36" y="90" width="18" height="8" rx="2" fill={C.ink} />
    </g>
  );
}

const SHIELD =
  "M0 -150 C60 -128 110 -126 130 -122 L130 10 C130 90 70 135 0 160 C-70 135 -130 90 -130 10 L-130 -122 C-110 -126 -60 -128 0 -150 Z";

/** An envelope whose flap opens at `openAt`, letting the letter rise out. */
function Envelope({ openAt }: { openAt: number }) {
  return (
    <g strokeLinejoin="round">
      <rect x="-24" y="-16" width="48" height="32" rx="3" fill={C.paper} stroke={C.ink} strokeWidth="2.5" />
      <g transform="translate(0 -16)">
        <g transform="scale(1 1)">
          <Turn type="scale" values={["1 1", "1 -1"]} at={openAt} dur={0.3} ease={ease.inOut} />
          <path d="M-24 0 L0 19 L24 0 Z" fill={C.paper} stroke={C.ink} strokeWidth="2.5" />
        </g>
      </g>
      <g opacity={0}>
        <FadeIn at={openAt + 0.25} dur={0.2} />
        <Turn type="translate" values={["0 0", "0 -22"]} at={openAt + 0.25} dur={0.5} />
        <rect x="-18" y="-12" width="36" height="26" rx="2" fill={C.paper} stroke={C.ink} strokeWidth="2" />
        <line x1="-11" y1="-5" x2="11" y2="-5" stroke={C.hair} strokeWidth="3" strokeLinecap="round" />
        <line x1="-11" y1="2" x2="5" y2="2" stroke={C.hair} strokeWidth="3" strokeLinecap="round" />
      </g>
      <path d="M-24 -4 L0 9 L24 -4 L24 13 Q24 16 21 16 L-21 16 Q-24 16 -24 13 Z" fill={C.paper} stroke={C.ink} strokeWidth="2.5" />
    </g>
  );
}

/** A contract that is signed and sealed once it reaches the vendor. */
function Contract({ signAt }: { signAt: number }) {
  return (
    <g>
      <rect x="-18" y="-24" width="36" height="48" rx="3" fill={C.paper} stroke={C.ink} strokeWidth="2.5" />
      {[-14, -7, 0].map((y) => (
        <line key={y} x1="-10" y1={y} x2="10" y2={y} stroke={C.hair} strokeWidth="3" strokeLinecap="round" />
      ))}
      <path d="M-11 13 q3 -7 6 0 t6 0 t5 -2" fill="none" stroke={C.ink} strokeWidth="2.2" strokeLinecap="round" {...drawable}>
        <Draw at={signAt} dur={0.5} ease={ease.out} />
      </path>
      <Pop x={10} y={15} at={signAt + 0.45} dur={0.4}>
        <circle r="6" fill={C.wattle} />
      </Pop>
    </g>
  );
}

function Magnifier() {
  return (
    <g>
      <circle r="22" fill={C.paper} fillOpacity="0.35" stroke={C.ink} strokeWidth="5" />
      <line x1="16" y1="16" x2="38" y2="38" stroke={C.ink} strokeWidth="9" strokeLinecap="round" />
    </g>
  );
}

export function BoardChainScene() {
  return (
    <Scene
      viewBox="0 0 960 380"
      end={9.2}
      label="A letter from APRA lands at the chair of the board table. A solid arrow runs from the board to the regulated entity, and a shield draws itself around the entity. A dashed line then carries a contract out to the technology vendor, which sits outside the shield, where it is signed and sealed, and a magnifying glass checks the vendor."
    >
      {/* The board */}
      <g transform="translate(160 200)" opacity={0}>
        <FadeIn at={0.1} />
        <ellipse cy="92" rx="104" ry="8" fill={C.ink} opacity="0.08" />
        <Table />
      </g>
      {/* The chair's seat lights up when the letter lands. */}
      <circle cx="40" cy="200" r="17" fill={C.magenta} opacity={0}>
        <Anim attr="opacity" values={[0, 1]} at={2.05} dur={0.3} />
      </circle>
      <Pulse x={40} y={200} at={2.05} from={17} to={48} colour={C.magenta} />

      {/* APRA's letter flies in to the chair. */}
      <g transform="translate(26 30)" opacity={0}>
        <FadeIn at={0.7} dur={0.3} />
        <Move path="M0 0 C120 -10 120 120 56 170" at={0.8} dur={1.25} />
        {/* Rotation goes on an inner group: it would replace the translate. */}
        <g transform="rotate(-18)">
          <Turn type="rotate" values={[-18, 8, 0]} at={0.8} dur={1.25} ease={ease.inOut} />
          <Envelope openAt={2.2} />
        </g>
      </g>

      {/* The board answers for the entity. */}
      <path d="M268 200 L338 200" stroke={C.magenta} strokeWidth="6" strokeLinecap="round" fill="none" {...drawable}>
        <Draw at={2.4} dur={0.6} />
      </path>
      <Pop x={344} y={200} at={2.95} dur={0.35}>
        <path d="M-14 -12 L4 0 L-14 12 Z" fill={C.magenta} />
      </Pop>

      {/* The entity, inside the standard's shield. */}
      <g transform="translate(480 200)">
        <path d={SHIELD} fill={C.tint} opacity={0}>
          <Anim attr="opacity" values={[0, 1]} at={3.9} dur={0.8} />
        </path>
        <g opacity={0}>
          <FadeIn at={0.25} />
          <ellipse cy="96" rx="100" ry="7" fill={C.ink} opacity="0.08" />
          <Building />
        </g>
        {/* Once the shield is up, a glint of light crosses it. */}
        <clipPath id="cps234-board-shield">
          <path d={SHIELD} />
        </clipPath>
        <g clipPath="url(#cps234-board-shield)">
          <g transform="translate(-220 0)">
            <Turn type="translate" values={["-220 0", "220 0"]} at={4.55} dur={1.0} ease={ease.inOut} />
            <rect x="-22" y="-220" width="44" height="440" fill={C.paper} opacity="0.55" transform="rotate(22)" />
          </g>
        </g>
        <path d={SHIELD} fill="none" stroke={C.magenta} strokeWidth="5" strokeLinejoin="round" {...drawable}>
          <Draw at={3.05} dur={1.3} />
        </path>
      </g>
      <Pop x={606} y={84} at={4.4}>
        <TickBadge r={18} />
      </Pop>

      {/* Contracts and audits reach the vendor. */}
      <clipPath id="cps234-board-reach">
        <rect x="612" y="160" width="0" height="80">
          <Anim attr="width" values={[0, 110]} at={4.75} dur={0.7} ease={null} />
        </rect>
      </clipPath>
      <path
        d="M614 200 L716 200"
        stroke={C.wattle}
        strokeWidth="5"
        strokeDasharray="12 10"
        strokeLinecap="round"
        clipPath="url(#cps234-board-reach)"
      />

      <g transform="translate(800 200)" opacity={0}>
        <FadeIn at={0.4} />
        <ellipse cy="102" rx="72" ry="7" fill={C.ink} opacity="0.08" />
        <Rack blink />
      </g>

      <g transform="translate(618 200)" opacity={0}>
        <FadeIn at={4.7} dur={0.3} />
        <Move path="M0 0 C40 -40 90 -30 122 40" at={5.2} dur={1.0} />
        <Contract signAt={6.25} />
      </g>

      <g transform="translate(866 96)" opacity={0}>
        <FadeIn at={6.5} dur={0.3} />
        <Move path="M0 0 C-40 30 -20 70 -50 96 C-80 122 -40 150 22 142" at={6.6} dur={1.6} />
        <Magnifier />
      </g>
      <Pop x={856} y={104} at={8.25}>
        <TickBadge r={18} fill={C.wattle} />
      </Pop>
    </Scene>
  );
}

const STATIONS = [
  {
    mini: (
      <g transform="scale(0.32)">
        <Table lit />
      </g>
    ),
    title: "The board",
    chip: { text: "Accountable", cls: "bg-magenta-tint text-magenta-deep" },
    detail: "Ultimately responsible for the information security of the entity.",
  },
  {
    mini: (
      <g transform="scale(0.34)">
        <path d={SHIELD} fill={C.tint} stroke={C.magenta} strokeWidth="8" />
        <g transform="scale(0.8)">
          <Building />
        </g>
      </g>
    ),
    title: "The regulated entity",
    chip: { text: "Bound by CPS 234", cls: "bg-settled-tint text-settled" },
    detail:
      "Keeps security in line with the threats. Classifies its information assets, including those held by third parties.",
  },
  {
    mini: (
      <g transform="scale(0.36)">
        <Rack />
      </g>
    ),
    title: "The technology vendor",
    chip: { text: "Not bound directly", cls: "bg-wattle-tint text-wattle" },
    detail: "Reached through the entity's contracts, assessments and audits.",
  },
];

export function BoardChain() {
  return (
    <div>
      <BoardChainScene />
      <ul className="mt-6 grid gap-6 md:grid-cols-3 md:gap-8">
        {STATIONS.map((s) => (
          <li key={s.title} className="flex gap-4 md:block md:text-center">
            <Mini box={124} className="size-14 md:hidden">{s.mini}</Mini>
            <div>
              <p className="text-[1.125rem] font-semibold text-ink">{s.title}</p>
              <p className="mt-2">
                <span className={`inline-block rounded-full px-3 py-0.5 text-label font-semibold ${s.chip.cls}`}>
                  {s.chip.text}
                </span>
              </p>
              <p className="mt-2 text-label font-normal text-copy">{s.detail}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 border-t border-hairline pt-4 text-label font-normal text-copy">
        Solid arrow: the board answers for the entity. Dashed line: the entity
        reaches its vendors through contracts and audits. The standard binds
        the entity, which then has duties about its vendors.
      </p>
    </div>
  );
}
