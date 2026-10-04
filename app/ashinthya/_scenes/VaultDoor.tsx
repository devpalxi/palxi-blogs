import type { ReactNode } from "react";
import {
  Anim,
  C,
  CrossBadge,
  FadeIn,
  FadeOut,
  HEX,
  Mini,
  Move,
  Pop,
  Pulse,
  Scene,
  TickBadge,
  Turn,
  ease,
} from "./kit";

/*
 * High-risk actions sit behind a vault door with two locks: a keyhole for
 * the password and a second lock that only a check on the member's phone
 * opens. First a password alone: the keyhole turns, the wheel jams. Then
 * the password plus the phone: both locks go green and the door swings open.
 */

const D: [number, number] = [620, 208]; // door centre
const R = 150;
const W: [number, number] = [D[0] + 40, D[1]]; // wheel centre
const HINGE = D[0] + R;
const KEYHOLE: [number, number] = [520, 148];
const PHONE_LOCK: [number, number] = [520, 268];
const KEY_FROM = 170;
const KEY_TO = KEYHOLE[0] - 40; // the scaled key's tip sits in the keyhole
const PHONE_AT: [number, number] = [310, 318];

// Act one: a password alone.
const A1 = { in: 0.6, turn: 1.75, ok: 2.05, jam: 2.4, back: 3.6 };
// Act two: the password plus a check on the member's phone.
const A2 = {
  in: 4.9,
  turn: 6.05,
  ok: 6.35,
  phone: 6.0,
  buzz: 6.9,
  send: 7.4,
  ok2: 8.2,
  spin: 8.5,
  out: 9.5,
  swing: 9.9,
};
const REVEAL = A2.swing + 0.9;
const END = REVEAL + 4 * 0.15 + 0.6;

const pict = {
  fill: "none",
  stroke: C.harbour,
  strokeWidth: 4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const ACTIONS: { label: string; icon: ReactNode }[] = [
  {
    label: "Changing member details",
    icon: (
      <g {...pict}>
        <rect x="-26" y="-18" width="52" height="36" rx="5" />
        <circle cx="-11" cy="-4" r="6" />
        <path d="M-21 11 Q-11 1 -1 11" />
        <path d="M7 -6 L19 -6 M7 4 L16 4" />
      </g>
    ),
  },
  {
    label: "Withdrawals",
    icon: (
      <g {...pict}>
        <rect x="-26" y="-6" width="52" height="28" rx="4" />
        <circle cx="0" cy="8" r="7" />
        <path d="M0 -28 L0 -12 M-7 -21 L0 -28 L7 -21" />
      </g>
    ),
  },
  {
    label: "Rollovers",
    icon: (
      <g {...pict}>
        <rect x="-28" y="-10" width="18" height="22" rx="3" />
        <rect x="10" y="-10" width="18" height="22" rx="3" />
        <path d="M-19 -14 Q0 -34 19 -14 M12 -19 L19 -14 L13 -8" />
      </g>
    ),
  },
  {
    label: "Investment switches",
    icon: (
      <g {...pict}>
        <path d="M-24 -9 L24 -9 M16 -17 L24 -9 L16 -1" />
        <path d="M24 11 L-24 11 M-16 3 L-24 11 L-16 19" />
      </g>
    ),
  },
];

/** An old-fashioned key, centred on the origin, bit to the right. */
function Key() {
  return (
    <g strokeLinecap="round">
      <path d="M-34 -6 L-46 -16 L-46 4 Z" fill={C.wattle} />
      <circle cx="-22" cy="0" r="12" fill={C.paper} stroke={C.ink} strokeWidth="5" />
      <line x1="-10" y1="0" x2="30" y2="0" stroke={C.ink} strokeWidth="6" />
      <line x1="18" y1="0" x2="18" y2="10" stroke={C.ink} strokeWidth="5" />
      <line x1="27" y1="0" x2="27" y2="8" stroke={C.ink} strokeWidth="5" />
    </g>
  );
}

/** A key that slides into the keyhole and turns. */
function KeyRun({
  appear,
  arrive,
  turn,
  leave,
  pullOut,
}: {
  appear: number;
  arrive: number;
  turn: number;
  /** Act one: back out the way it came. */
  leave?: number;
  /** Act two: drawn out of the lock before the door swings. */
  pullOut?: number;
}) {
  const run = KEY_TO - KEY_FROM;
  return (
    <g transform={`translate(${KEY_FROM} ${KEYHOLE[1]})`} opacity={0}>
      <FadeIn at={appear} dur={0.3} />
      <Move path={`M0 0 L${run} 0`} at={arrive} dur={1.1} />
      {leave != null && (
        <>
          <Move path={`M${run} 0 L0 0`} at={leave} dur={0.9} />
          <FadeOut at={leave + 0.6} dur={0.4} />
        </>
      )}
      {pullOut != null && (
        <>
          <Move path={`M${run} 0 L${run - 70} 0`} at={pullOut} dur={0.4} ease={ease.in} />
          <FadeOut at={pullOut + 0.15} dur={0.3} />
        </>
      )}
      {/* A quarter turn: seen side-on, the key narrows. */}
      <g transform="scale(1 1)">
        <Turn type="scale" values={["1 1", "1 0.55"]} at={turn} dur={0.3} ease={ease.inOut} />
        {leave != null && <Turn type="scale" values={["1 0.55", "1 1"]} at={leave - 0.25} dur={0.25} ease={ease.inOut} />}
        {pullOut != null && <Turn type="scale" values={["1 0.55", "1 1"]} at={pullOut - 0.25} dur={0.25} ease={ease.inOut} />}
        <g transform="scale(1.3)">
          <Key />
        </g>
      </g>
    </g>
  );
}

function Phone() {
  return (
    <g>
      <rect x="-32" y="-56" width="64" height="112" rx="12" fill={C.ink} />
      <rect x="-25" y="-44" width="50" height="84" rx="5" fill={C.paper} />
      <rect x="-10" y="-52" width="20" height="4" rx="2" fill={C.copy} />
      <rect x="-15" y="22" width="30" height="5" rx="2.5" fill={C.hair} />
      <Pop x={0} y={-4} at={A2.buzz}>
        <TickBadge r={16} />
      </Pop>
    </g>
  );
}

/** A round lock plate on the door; its ring changes colour through the story. */
function Plate({ at: [x, y], children, glyph }: { at: [number, number]; children: ReactNode; glyph: ReactNode }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="28" fill={C.paper} stroke={HEX.ink} strokeWidth="5">
        {children}
      </circle>
      {glyph}
    </g>
  );
}

export function VaultDoorScene() {
  return (
    <Scene
      viewBox="0 0 960 420"
      end={END}
      label="A vault door has two locks: a keyhole and a phone-shaped lock. First a key turns in the keyhole, but the wheel jams, the second lock flashes red and the key withdraws. Then the key turns again while a phone shows a tick and sends a signal to the second lock, which turns green. The wheel spins, the door swings open, and behind it four high-risk actions light up."
    >
      <defs>
        <radialGradient id="vault-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={HEX.tint} />
          <stop offset="0.7" stopColor={HEX.chart} stopOpacity="0.35" />
          <stop offset="1" stopColor={HEX.ink} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* The wall the door is set in. */}
      <ellipse cx={D[0]} cy="404" rx="200" ry="9" fill={C.ink} opacity="0.08" />
      <rect x="440" y="18" width="360" height="380" rx="18" fill={C.paper} stroke={C.hair} strokeWidth="3" />

      {/* What is behind the door: dark until it opens, then lit. */}
      <circle cx={D[0]} cy={D[1]} r={R} fill={C.ink} />
      <circle cx={D[0]} cy={D[1]} r={R} fill="url(#vault-glow)" opacity={0}>
        <Anim attr="opacity" values={[0, 1]} at={A2.swing + 0.3} dur={1.0} ease={ease.inOut} />
      </circle>
      {ACTIONS.map((a, i) => (
        <Pop key={a.label} x={D[0] + (i % 2 ? 52 : -52)} y={D[1] + (i < 2 ? -52 : 52)} at={REVEAL + i * 0.15}>
          <rect x="-43" y="-43" width="86" height="86" rx="12" fill={C.paper} />
          {a.icon}
        </Pop>
      ))}
      {[148, 268].map((y) => (
        <rect key={y} x={HINGE - 6} y={y - 18} width="16" height="36" rx="4" fill={C.ink} />
      ))}

      {/* The door's thickness, which shows once it turns edge-on. */}
      <rect x={HINGE} y={D[1] - R} width="0" height={R * 2} rx="6" fill={C.copy}>
        <Anim attr="width" values={[0, 26]} at={A2.swing + 0.3} dur={0.8} ease={ease.inOut} />
      </rect>

      {/* The door, which swings open on its right-hand hinge. */}
      <g transform={`translate(${HINGE} 0)`}>
        <g transform="scale(1 1)">
          <Turn type="scale" values={["1 1", "0.06 1"]} at={A2.swing} dur={1.1} ease={ease.inOut} />
          <g transform={`translate(${-HINGE} 0)`}>
            <circle cx={D[0]} cy={D[1]} r={R} fill={C.paper} stroke={C.ink} strokeWidth="5" />
            <circle cx={D[0]} cy={D[1]} r={R - 26} fill={C.shallows} stroke={C.hair} strokeWidth="3" />
            {Array.from({ length: 16 }, (_, k) => {
              const t = (k * Math.PI) / 8;
              return <circle key={k} cx={D[0] + Math.cos(t) * (R - 13)} cy={D[1] + Math.sin(t) * (R - 13)} r="4" fill={C.hair} />;
            })}

            {/* The wheel: it jams on a password alone and spins on both. */}
            <g transform={`rotate(0 ${W[0]} ${W[1]})`}>
              <Turn
                type="rotate"
                values={[0, 16, -12, 8, 0].map((d) => `${d} ${W[0]} ${W[1]}`)}
                at={A1.jam}
                dur={0.9}
                ease={null}
              />
              <Turn type="rotate" values={[`0 ${W[0]} ${W[1]}`, `300 ${W[0]} ${W[1]}`]} at={A2.spin} dur={1.1} ease={ease.inOut} />
              <circle cx={W[0]} cy={W[1]} r="50" fill="none" stroke={C.ink} strokeWidth="7" />
              {[0, 60, 120].map((deg) => (
                <g key={deg} transform={`rotate(${deg} ${W[0]} ${W[1]})`}>
                  <line x1={W[0] - 64} y1={W[1]} x2={W[0] + 64} y2={W[1]} stroke={C.ink} strokeWidth="7" strokeLinecap="round" />
                  <circle cx={W[0] - 64} cy={W[1]} r="8" fill={C.ink} />
                  <circle cx={W[0] + 64} cy={W[1]} r="8" fill={C.ink} />
                </g>
              ))}
              <circle cx={W[0]} cy={W[1]} r="14" fill={C.ink} />
            </g>

            {/* Lock one: the password. The keyhole turns with the key. */}
            <Plate
              at={KEYHOLE}
              glyph={
                <g transform="rotate(0)" fill={C.ink}>
                  <Turn type="rotate" values={[0, 90]} at={A1.turn} dur={0.3} ease={ease.inOut} />
                  <Turn type="rotate" values={[90, 0]} at={A1.back - 0.25} dur={0.25} ease={ease.inOut} />
                  <Turn type="rotate" values={[0, 90]} at={A2.turn} dur={0.3} ease={ease.inOut} />
                  <circle cy="-5" r="6" />
                  <path d="M-4 -1 L4 -1 L6 12 L-6 12 Z" />
                </g>
              }
            >
              <Anim attr="stroke" values={[HEX.ink, HEX.settled]} at={A1.ok} dur={0.3} />
              <Anim attr="stroke" values={[HEX.settled, HEX.ink]} at={A1.back} dur={0.3} />
              <Anim attr="stroke" values={[HEX.ink, HEX.settled]} at={A2.ok} dur={0.3} />
            </Plate>

            {/* Lock two: a check on the member's phone. */}
            <Plate
              at={PHONE_LOCK}
              glyph={
                <g>
                  <rect x="-8" y="-13" width="16" height="26" rx="3" fill="none" stroke={C.ink} strokeWidth="3" />
                  <circle cy="7" r="2" fill={C.ink} />
                </g>
              }
            >
              <Anim attr="stroke" values={[HEX.ink, HEX.stop]} at={A1.jam} dur={0.3} />
              <Anim attr="stroke" values={[HEX.stop, HEX.settled]} at={A2.ok2} dur={0.3} />
            </Plate>
          </g>
        </g>
      </g>

      <Pulse x={PHONE_LOCK[0]} y={PHONE_LOCK[1]} at={A1.jam} from={28} to={64} colour={C.stop} />
      <Pulse x={PHONE_LOCK[0]} y={PHONE_LOCK[1]} at={A2.ok2} from={28} to={64} colour={C.settled} />

      {/* "Password alone" is turned away, beside the lock that refused it. */}
      <g>
        <FadeOut at={A2.in - 0.4} dur={0.4} />
        <Pop x={PHONE_LOCK[0] - 62} y={PHONE_LOCK[1] + 48} at={A1.jam + 0.3}>
          <CrossBadge r={24} />
        </Pop>
      </g>

      <KeyRun appear={0.3} arrive={A1.in} turn={A1.turn} leave={A1.back} />
      <KeyRun appear={A2.in - 0.2} arrive={A2.in} turn={A2.turn} pullOut={A2.out} />

      {/* The member's phone rises, buzzes and sends the second check. */}
      <g transform={`translate(${PHONE_AT[0]} 500)`} opacity={0}>
        <FadeIn at={A2.phone} dur={0.3} />
        <Move path={`M0 0 L0 ${PHONE_AT[1] - 500}`} at={A2.phone} dur={0.8} ease={ease.out} />
        <g transform="rotate(0)">
          <Turn type="rotate" values={[0, -7, 7, -5, 5, 0]} at={A2.buzz - 0.45} dur={0.5} ease={null} />
          <Phone />
        </g>
      </g>
      <Pulse x={PHONE_AT[0]} y={PHONE_AT[1] - 4} at={A2.send - 0.2} from={30} to={80} colour={C.settled} width={3} />
      <Pulse x={PHONE_AT[0]} y={PHONE_AT[1] - 4} at={A2.send + 0.1} from={30} to={80} colour={C.settled} width={3} />
      <path
        d={`M${PHONE_AT[0] + 40} ${PHONE_AT[1] - 30} Q${(PHONE_AT[0] + PHONE_LOCK[0]) / 2} ${PHONE_LOCK[1] - 70} ${PHONE_LOCK[0] - 34} ${PHONE_LOCK[1]}`}
        fill="none"
        stroke={C.settled}
        strokeWidth="3"
        strokeDasharray="2 9"
        strokeLinecap="round"
        opacity={0}
      >
        <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.15, 0.8, 1]} at={A2.send} dur={1.1} ease={null} />
      </path>
      <g transform={`translate(${PHONE_AT[0] + 40} ${PHONE_AT[1] - 30})`} opacity={0}>
        <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.9, 1]} at={A2.send} dur={0.85} ease={null} />
        <Move
          path={`M0 0 Q${(PHONE_LOCK[0] - PHONE_AT[0]) / 2 - 40} ${PHONE_LOCK[1] - 70 - (PHONE_AT[1] - 30)} ${PHONE_LOCK[0] - 34 - PHONE_AT[0] - 40} ${PHONE_LOCK[1] - (PHONE_AT[1] - 30)}`}
          at={A2.send}
          dur={0.85}
        />
        <circle r="9" fill={C.settled} />
      </g>
    </Scene>
  );
}

export function VaultDoor() {
  return (
    <div>
      <VaultDoorScene />
      <ol className="mt-6 grid gap-4 md:grid-cols-2 md:gap-8">
        <li className="flex items-start gap-3">
          <span className="mt-0.5 inline-block shrink-0 rounded-full bg-stop-tint px-3 py-0.5 text-label font-semibold text-stop">
            First
          </span>
          <p className="text-label font-normal text-copy">
            <span className="font-semibold text-ink">A password alone.</span> The
            keyhole turns, but the second lock stays shut and the door won&apos;t open.
          </p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-0.5 inline-block shrink-0 rounded-full bg-settled-tint px-3 py-0.5 text-label font-semibold text-settled">
            Then
          </span>
          <p className="text-label font-normal text-copy">
            <span className="font-semibold text-ink">Password plus a second check.</span>{" "}
            The member confirms on their phone, both locks open, and so does the door.
          </p>
        </li>
      </ol>
      <p className="mt-6 border-t border-hairline pt-4 font-semibold text-ink">
        Behind the door, for a super trustee:
      </p>
      <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
        {ACTIONS.map((a) => (
          <li key={a.label} className="flex items-center gap-3 text-label font-normal text-copy">
            <Mini className="size-12 rounded-sm bg-surface">{a.icon}</Mini>
            {a.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
