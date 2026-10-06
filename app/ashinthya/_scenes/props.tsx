import { C } from "./kit";

/*
 * Everyday objects drawn once and reused across scenes. Each is centred on
 * the origin and sized in viewBox units; place them with a translate.
 */

const line = {
  fill: "none",
  stroke: C.ink,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** A coin, about 32 across. */
export function Coin({ fill = C.wattle, r = 16 }: { fill?: string; r?: number }) {
  return (
    <g>
      <circle r={r} fill={fill} stroke={C.ink} strokeWidth="2.5" />
      <circle r={r * 0.62} fill="none" stroke={C.paper} strokeWidth="2" opacity="0.7" />
    </g>
  );
}

/** A closed envelope, 48 by 32. */
export function Letter({ fill = C.paper }: { fill?: string }) {
  return (
    <g strokeLinejoin="round">
      <rect x="-24" y="-16" width="48" height="32" rx="3" fill={fill} stroke={C.ink} strokeWidth="2.5" />
      <path d="M-24 -15 L0 3 L24 -15" fill="none" stroke={C.ink} strokeWidth="2.5" />
    </g>
  );
}

/** A sheet of paper with text lines, 40 by 52. */
export function Doc({ lines = 4, fill = C.paper, accent }: { lines?: number; fill?: string; accent?: string }) {
  return (
    <g>
      <path d="M-20 -26 L10 -26 L20 -16 L20 26 L-20 26 Z" fill={fill} stroke={C.ink} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M10 -26 L10 -16 L20 -16" fill="none" stroke={C.ink} strokeWidth="2.5" strokeLinejoin="round" />
      {Array.from({ length: lines }, (_, i) => (
        <line key={i} x1="-12" y1={-12 + i * 9} x2={i === lines - 1 ? 2 : 12} y2={-12 + i * 9} stroke={C.hair} strokeWidth="3" strokeLinecap="round" />
      ))}
      {accent && <circle cx="10" cy="17" r="5" fill={accent} />}
    </g>
  );
}

/** A head and shoulders, about 44 tall. */
export function Person({ fill = C.tint, stroke = C.magenta }: { fill?: string; stroke?: string }) {
  return (
    <g>
      <circle cy="-10" r="11" fill={fill} stroke={stroke} strokeWidth="3" />
      <path d="M-20 22 Q-20 4 0 4 Q20 4 20 22 Z" fill={fill} stroke={stroke} strokeWidth="3" strokeLinejoin="round" />
    </g>
  );
}

/** A mobile phone, 40 by 70. */
export function Handset({ screen = C.paper }: { screen?: string }) {
  return (
    <g>
      <rect x="-20" y="-35" width="40" height="70" rx="8" fill={C.ink} />
      <rect x="-15" y="-27" width="30" height="52" rx="3" fill={screen} />
      <rect x="-6" y="-32" width="12" height="3" rx="1.5" fill={C.copy} />
    </g>
  );
}

/** A bank building, about 100 wide. */
export function Bank({ fill = C.paper }: { fill?: string }) {
  return (
    <g fill={fill} stroke={C.ink} strokeWidth="3" strokeLinejoin="round">
      <path d="M-52 -26 L0 -54 L52 -26 Z" />
      <rect x="-46" y="-26" width="92" height="9" />
      {[-36, -14, 8, 30].map((x) => (
        <rect key={x} x={x} y="-17" width="8" height="48" />
      ))}
      <rect x="-50" y="31" width="100" height="9" />
    </g>
  );
}

/** A shopfront or business, about 90 wide. */
export function Shop({ awning = C.magenta }: { awning?: string }) {
  return (
    <g strokeLinejoin="round">
      <rect x="-42" y="-14" width="84" height="56" fill={C.paper} stroke={C.ink} strokeWidth="3" />
      <path d="M-48 -14 L-40 -38 L40 -38 L48 -14 Z" fill={awning} stroke={C.ink} strokeWidth="3" />
      {[-28, -12, 4, 20].map((x) => (
        <path key={x} d={`M${x + 4} -38 L${x} -14`} stroke={C.paper} strokeWidth="3" opacity="0.6" />
      ))}
      <rect x="-30" y="2" width="28" height="22" fill={C.shallows} stroke={C.ink} strokeWidth="2.5" />
      <rect x="8" y="2" width="22" height="40" fill={C.shallows} stroke={C.ink} strokeWidth="2.5" />
    </g>
  );
}

/** A laptop, about 90 wide. */
export function Laptop({ screen = C.shallows }: { screen?: string }) {
  return (
    <g strokeLinejoin="round">
      <rect x="-36" y="-30" width="72" height="46" rx="4" fill={C.ink} />
      <rect x="-31" y="-25" width="62" height="36" rx="2" fill={screen} />
      <path d="M-46 16 L46 16 L40 26 L-40 26 Z" fill={C.copy} stroke={C.ink} strokeWidth="2.5" />
    </g>
  );
}

/** A server rack, 70 by 100. */
export function Server({ led = C.chart }: { led?: string }) {
  return (
    <g>
      <rect x="-35" y="-50" width="70" height="100" rx="6" fill={C.ink} />
      {[0, 1, 2].map((k) => (
        <g key={k}>
          <rect x="-27" y={-42 + k * 30} width="54" height="22" rx="3" fill={C.copy} />
          <circle cx="-17" cy={-31 + k * 30} r="3.5" fill={led} />
          {[0, 7, 14].map((dx) => (
            <line key={dx} x1={2 + dx} y1={-36 + k * 30} x2={2 + dx} y2={-26 + k * 30} stroke={C.muted} strokeWidth="2.5" strokeLinecap="round" />
          ))}
        </g>
      ))}
    </g>
  );
}

/** A padlock, about 34 wide. */
export function Padlock({ fill = C.ink }: { fill?: string }) {
  return (
    <g>
      <path d="M-10 -4 L-10 -14 A10 10 0 0 1 10 -14 L10 -4" {...line} strokeWidth="5" />
      <rect x="-17" y="-6" width="34" height="26" rx="5" fill={fill} />
      <circle cx="0" cy="6" r="4" fill={C.paper} />
    </g>
  );
}

/** A cloud, about 110 wide. */
export function Cloud({ fill = C.paper }: { fill?: string }) {
  return (
    <path
      d="M-40 22 Q-58 22 -58 6 Q-58 -10 -40 -10 Q-38 -32 -14 -32 Q4 -44 22 -30 Q46 -32 48 -8 Q62 -4 60 10 Q58 22 42 22 Z"
      fill={fill}
      stroke={C.ink}
      strokeWidth="3"
      strokeLinejoin="round"
    />
  );
}

/** A magnifying glass, lens radius 22. */
export function Lens() {
  return (
    <g>
      <circle r="22" fill={C.paper} fillOpacity="0.35" stroke={C.ink} strokeWidth="5" />
      <line x1="16" y1="16" x2="38" y2="38" stroke={C.ink} strokeWidth="9" strokeLinecap="round" />
    </g>
  );
}

/** A rubber stamp mark: a ring with a tick, radius r. */
export function Seal({ r = 22, colour = C.settled }: { r?: number; colour?: string }) {
  const k = r / 22;
  return (
    <g>
      <circle r={r} fill="none" stroke={colour} strokeWidth={4 * k} />
      <circle r={r - 6 * k} fill="none" stroke={colour} strokeWidth={1.5 * k} strokeDasharray={`${3 * k} ${3 * k}`} />
      <path d={`M${-8 * k} 0 L${-2 * k} ${6 * k} L${9 * k} ${-6 * k}`} fill="none" stroke={colour} strokeWidth={4 * k} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

/** A chat bubble, about 50 wide. */
export function Bubble({ fill = C.paper }: { fill?: string }) {
  return (
    <g>
      <path d="M-24 -18 L24 -18 Q28 -18 28 -14 L28 8 Q28 12 24 12 L-6 12 L-16 22 L-14 12 L-24 12 Q-28 12 -28 8 L-28 -14 Q-28 -18 -24 -18 Z" fill={fill} stroke={C.ink} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="-10" cy="-3" r="2.5" fill={C.ink} />
      <circle cx="0" cy="-3" r="2.5" fill={C.ink} />
      <circle cx="10" cy="-3" r="2.5" fill={C.ink} />
    </g>
  );
}

/** An old telephone handset, about 50 wide. */
export function Phone() {
  return (
    <path
      d="M-20 -18 Q-26 -12 -22 -2 Q-12 18 10 24 Q20 26 24 20 L20 12 Q18 8 13 10 L6 13 Q-6 6 -10 -6 L-7 -12 Q-4 -17 -9 -20 L-14 -22 Q-17 -23 -20 -18 Z"
      fill={C.paper}
      stroke={C.ink}
      strokeWidth="3"
      strokeLinejoin="round"
    />
  );
}

/** A computer window with a form, about 60 wide. */
export function WebForm() {
  return (
    <g>
      <rect x="-30" y="-22" width="60" height="44" rx="4" fill={C.paper} stroke={C.ink} strokeWidth="2.5" />
      <line x1="-30" y1="-12" x2="30" y2="-12" stroke={C.ink} strokeWidth="2.5" />
      <rect x="-22" y="-5" width="44" height="7" rx="2" fill={C.shallows} stroke={C.hair} strokeWidth="1.5" />
      <rect x="-22" y="6" width="26" height="8" rx="2" fill={C.magenta} />
    </g>
  );
}
