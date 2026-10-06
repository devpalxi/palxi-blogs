import { Anim, C, Draw, FadeIn, FadeOut, Move, Pop, Pulse, Scene, TickBadge, ease } from "./kit";
import { ColumnLabels, KeyLine } from "./Key";
import { Lens, Person, Server } from "./props";

/* ================================================================== */
/* 1. Checking a certificate: the number, the register, the scope      */
/* ================================================================== */

// The certificate number, drawn as a pattern of bars that must match.
const BARS: [number, number][] = [
  [0, 8],
  [12, 4],
  [20, 12],
  [36, 4],
  [44, 8],
  [56, 4],
];
const LOOKUP = 1.4;
const MATCH = LOOKUP + 1.6;
const SCOPE = MATCH + 0.8;

function Bars({ colour = C.wattle }: { colour?: string }) {
  return (
    <g>
      {BARS.map(([x, w]) => (
        <rect key={x} x={x - 30} y="-12" width={w} height="24" rx="1.5" fill={colour} />
      ))}
    </g>
  );
}

function Building({ fill = C.paper }: { fill?: string }) {
  return (
    <g>
      <rect x="-44" y="-50" width="88" height="100" rx="4" fill={fill} stroke={C.ink} strokeWidth="3" />
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={-32 + c * 24} y={-38 + r * 26} width="16" height="16" rx="2" fill={C.shallows} stroke={C.hair} strokeWidth="1.5" />),
      )}
    </g>
  );
}

export function CertLookupScene() {
  return (
    <Scene
      viewBox="0 0 960 400"
      end={SCOPE + 2.0}
      label="A framed certificate carries a pattern of bars, its certificate number. A magnifying glass reads it. A drawer of cards, the public register of accredited certificates, opens and one card rises with the same bar pattern, and a tick appears. Then a dashed outline draws around the building of the team that will do the client's work, showing the certificate's scope covers them."
    >
      {/* The certificate. */}
      <g transform="translate(170 190)">
        <rect x="-120" y="-90" width="240" height="180" rx="6" fill={C.wattleTint} stroke={C.ink} strokeWidth="3" />
        <rect x="-106" y="-76" width="212" height="152" rx="3" fill={C.paper} stroke={C.wattle} strokeWidth="2" />
        <rect x="-70" y="-56" width="140" height="10" rx="4" fill={C.ink} opacity="0.7" />
        <rect x="-50" y="-36" width="100" height="7" rx="3" fill={C.hair} />
        <g transform="translate(-30 10)">
          <Bars />
        </g>
        <circle cx="66" cy="44" r="20" fill={C.magenta} />
        <path d="M56 60 L52 80 L66 72 L80 80 L76 60" fill={C.magenta} />
      </g>
      <g transform="translate(60 120)" opacity={0}>
        <FadeIn at={0.4} dur={0.2} />
        <Move path="M0 0 L80 80" at={0.4} dur={0.8} />
        <FadeOut at={LOOKUP + 0.2} dur={0.3} />
        <Lens />
      </g>

      {/* The register: a drawer of cards. */}
      <path d="M300 200 C360 200 380 250 430 250" fill="none" stroke={C.wattle} strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" opacity={0}>
        <FadeIn at={LOOKUP} dur={0.3} />
      </path>
      <g transform="translate(530 260)">
        {[0, 1, 2, 3, 4].map((k) => (
          <rect key={k} x={-70 + k * 4} y={-40 - k * 6} width="120" height="70" rx="5" fill={C.paper} stroke={C.hair} strokeWidth="2" />
        ))}
        <g opacity={1}>
          <Move path="M0 0 L0 -110" at={LOOKUP + 0.6} dur={0.7} ease={ease.out} />
          <rect x="-60" y="-60" width="120" height="76" rx="5" fill={C.paper} stroke={C.ink} strokeWidth="2.5" />
          <rect x="-60" y="-60" width="34" height="14" rx="4" fill={C.magenta} />
          <g transform="translate(0 -14)">
            <Bars />
          </g>
        </g>
        <path d="M-90 -10 L90 -10 L90 70 L-90 70 Z" fill={C.ink} />
        <rect x="-24" y="18" width="48" height="12" rx="4" fill={C.copy} />
      </g>
      <Pop x={612} y={140} at={MATCH}>
        <TickBadge r={18} />
      </Pop>

      {/* The scope: does it cover the team doing your work? */}
      <g transform="translate(790 120) scale(0.8)">
        <Building />
      </g>
      <g transform="translate(860 300) scale(0.8)">
        <Building fill={C.tint} />
      </g>
      <g transform="translate(860 300)">
        <g transform="scale(0.8)">
          <Person />
        </g>
      </g>
      <rect x="790" y="240" width="140" height="124" rx="16" fill="none" stroke={C.magenta} strokeWidth="4" strokeDasharray="1" strokeDashoffset={1} pathLength={1}>
        <Draw at={SCOPE} dur={1.0} />
      </rect>
      <Pop x={930} y={240} at={SCOPE + 1.0}>
        <TickBadge r={16} />
      </Pop>
    </Scene>
  );
}

export function CertLookup() {
  return (
    <div>
      <CertLookupScene />
      <KeyLine
        items={[
          { label: "Certificate number", dot: "bg-wattle" },
          { label: "Accredited register", dot: "bg-magenta" },
          { label: "Scope covers your team", dot: "bg-magenta-tint ring-2 ring-magenta" },
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 2. The pitch team and the people who actually build                 */
/* ================================================================== */

const SENIORS = [C.tint, C.wattleTint, C.settledTint];
const EDGES = [C.magenta, C.wattle, C.settled];
const PITCH_Y = 110;
const DESK_Y = 300;
const LEAVE = 2.2;
const SWAP = LEAVE + 0.9;

function Desk() {
  return (
    <g>
      <rect x="-40" y="18" width="80" height="12" rx="3" fill={C.copy} />
      <rect x="-34" y="30" width="6" height="28" fill={C.copy} />
      <rect x="28" y="30" width="6" height="28" fill={C.copy} />
      <rect x="-18" y="-8" width="36" height="24" rx="3" fill={C.ink} />
    </g>
  );
}

function Half({ ox, named }: { ox: number; named: boolean }) {
  const xs = [ox + 100, ox + 240, ox + 380];
  return (
    <g>
      {/* The pitch stage. */}
      <rect x={ox + 40} y={PITCH_Y + 34} width="400" height="12" rx="4" fill={C.hair} />
      {xs.map((x) => (
        <g key={x} transform={`translate(${x} ${DESK_Y}) scale(1.35)`}>
          <Desk />
        </g>
      ))}

      {named && (
        <g transform={`translate(${ox + 240} ${PITCH_Y - 70})`} opacity={0}>
          <FadeIn at={1.0} dur={0.3} />
          <rect x="-70" y="-22" width="140" height="44" rx="6" fill={C.paper} stroke={C.ink} strokeWidth="2.5" />
          {EDGES.map((e, k) => (
            <Pop key={k} x={-40 + k * 40} y={0} at={1.3 + k * 0.2} dur={0.3}>
              <circle r="11" fill={SENIORS[k]} stroke={e} strokeWidth="3" />
            </Pop>
          ))}
        </g>
      )}

      {/* The senior people who present. */}
      {xs.map((x, k) => (
        <g key={x} transform={`translate(${x} ${PITCH_Y})`}>
          {named ? (
            <Move path={`M0 0 L0 ${DESK_Y - PITCH_Y - 34}`} at={LEAVE + k * 0.15} dur={0.9} />
          ) : (
            <>
              <Move path={`M0 0 L${-(x - ox) - 60} 0`} at={LEAVE + k * 0.15} dur={0.9} ease={ease.in} />
              <FadeOut at={LEAVE + k * 0.15 + 0.6} dur={0.3} />
            </>
          )}
          <g transform="scale(1.7)">
            <Person fill={SENIORS[k]} stroke={EDGES[k]} />
          </g>
        </g>
      ))}

      {/* Without names, different people turn up. */}
      {!named &&
        xs.map((x, k) => (
          <Pop key={x} x={x} y={DESK_Y - 34} at={SWAP + k * 0.2}>
            <g transform="scale(1.5)">
              <Person fill={C.shallows} stroke={C.muted} />
            </g>
          </Pop>
        ))}
      <Pop x={ox + 450} y={DESK_Y - 70} at={SWAP + 0.9}>
        {named ? (
          <TickBadge r={17} />
        ) : (
          <g>
            <circle r="17" fill={C.wattle} />
            <path d="M-5 -6 Q-5 -11 0 -11 Q6 -11 6 -5 Q6 -1 1 1 L1 4 M1 9 L1 9.5" fill="none" stroke={C.paper} strokeWidth="3" strokeLinecap="round" />
          </g>
        )}
      </Pop>
    </g>
  );
}

export function PitchTeamScene() {
  return (
    <Scene
      viewBox="0 0 960 400"
      end={SWAP + 2.0}
      label="Two versions of the same project. In both, three senior people present at the pitch. On the left, nobody's name is written down: the presenters walk away and three different people appear at the desks, with a question mark. On the right, a proposal lists the three names: the same three presenters walk down and sit at the desks, and a tick appears."
    >
      <line x1="480" y1="20" x2="480" y2="380" stroke={C.hair} strokeWidth="2" strokeDasharray="6 8" />
      <Half ox={0} named={false} />
      <Half ox={480} named />
    </Scene>
  );
}

export function PitchTeam() {
  return (
    <div>
      <PitchTeamScene />
      <ColumnLabels items={[{ title: "Names left open" }, { title: "Names in the proposal" }]} />
    </div>
  );
}

/* ================================================================== */
/* 3. Who holds the keys                                                */
/* ================================================================== */

const KEYS = [C.magenta, C.settled, C.wattle];
const HOOKS: [number, number][] = [
  [790, 120],
  [850, 120],
  [910, 120],
];
const BUILD = (k: number) => 1.6 + k * 0.18;
const EXIT = BUILD(11) + 0.8;
const NEXT = EXIT + 1.4;

function KeyShape({ bow }: { bow: string }) {
  return (
    <g strokeLinecap="round">
      <circle cy="-14" r="10" fill={bow} stroke={C.ink} strokeWidth="3" />
      <line x1="0" y1="-4" x2="0" y2="26" stroke={C.ink} strokeWidth="5" />
      <line x1="0" y1="16" x2="8" y2="16" stroke={C.ink} strokeWidth="4" />
      <line x1="0" y1="24" x2="6" y2="24" stroke={C.ink} strokeWidth="4" />
    </g>
  );
}

export function KeysScene() {
  const bricks = Array.from({ length: 12 }, (_, k) => ({ x: 400 + (k % 4) * 44 + (Math.floor(k / 4) % 2 ? 22 : 0), y: 320 - Math.floor(k / 4) * 30, k }));
  return (
    <Scene
      viewBox="0 0 960 400"
      end={NEXT + 2.2}
      label="Three keys, for the code, the cloud accounts and the domains, fly from the build team to hooks on the client's own key board at the very start. The system is then built brick by brick. The build team walks out through a door. A new team arrives, and because the client holds every key, the new team can carry on: a tick appears."
    >
      {/* The build team, and the door they will leave by. */}
      <rect x="20" y="180" width="60" height="150" rx="4" fill={C.shallows} stroke={C.ink} strokeWidth="3" />
      <circle cx="68" cy="258" r="4" fill={C.ink} />
      {[150, 210, 270].map((x, k) => (
        <g key={x} transform={`translate(${x} 300)`}>
          <Move path={`M0 0 L${50 - x} 0`} at={EXIT + k * 0.15} dur={0.8} ease={ease.in} />
          <FadeOut at={EXIT + k * 0.15 + 0.6} dur={0.2} />
          <g transform="scale(1.2)">
            <Person />
          </g>
        </g>
      ))}

      {/* The keys go to the client from the first day. */}
      <rect x="760" y="80" width="180" height="120" rx="10" fill={C.paper} stroke={C.ink} strokeWidth="3" />
      <rect x="760" y="80" width="180" height="16" rx="6" fill={C.magenta} />
      {HOOKS.map(([x, y]) => (
        <path key={x} d={`M${x} ${y - 8} L${x} ${y} Q${x} ${y + 8} ${x + 6} ${y + 6}`} fill="none" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />
      ))}
      {KEYS.map((bow, k) => (
        <g key={k} transform={`translate(${170 + k * 60} 220)`}>
          <Move path={`M0 0 C120 -180 ${HOOKS[k][0] - 170 - k * 60 - 100} -200 ${HOOKS[k][0] - 170 - k * 60} ${HOOKS[k][1] + 20 - 220}`} at={0.4 + k * 0.25} dur={1.0} />
          <KeyShape bow={bow} />
        </g>
      ))}
      <g transform="translate(850 270) scale(1.4)">
        <Person fill={C.tint} stroke={C.magenta} />
      </g>

      {/* The system goes up. */}
      {bricks.map((b) => (
        <rect key={b.k} x={b.x - 20} y={b.y - 13} width="40" height="26" rx="3" fill={C.wattleTint} stroke={C.ink} strokeWidth="2" opacity={0}>
          <Anim attr="opacity" values={[0, 1]} at={BUILD(b.k)} dur={0.12} ease={null} />
        </rect>
      ))}
      <g transform="translate(486 150) scale(0.7)" opacity={0}>
        <FadeIn at={BUILD(11)} dur={0.3} />
        <Server />
      </g>

      {/* A new team can pick it up. */}
      <g transform="translate(-60 300)" opacity={0}>
        <FadeIn at={NEXT} dur={0.2} />
        <Move path="M0 0 L250 0" at={NEXT} dur={0.9} ease={ease.out} />
        <g transform="scale(1.2)">
          <Person fill={C.settledTint} stroke={C.settled} />
        </g>
      </g>
      <Pulse x={480} y={260} at={NEXT + 1.0} from={50} to={110} colour={C.settled} />
      <Pop x={600} y={170} at={NEXT + 1.2}>
        <TickBadge r={18} />
      </Pop>
    </Scene>
  );
}

export function Keys() {
  return (
    <div>
      <KeysScene />
      <KeyLine
        items={[
          { label: "Code", dot: "bg-magenta" },
          { label: "Cloud accounts", dot: "bg-settled" },
          { label: "Domains", dot: "bg-wattle" },
          { label: "Held by your client from day one" },
        ]}
      />
    </div>
  );
}
