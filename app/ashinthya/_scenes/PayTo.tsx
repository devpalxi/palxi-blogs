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
  Window,
  drawable,
  ease,
} from "./kit";
import { Bank, Coin, Doc, Handset, Lens, Person, Server, Shop } from "./props";

function Rows({ items }: { items: [string, string, string][] }) {
  return (
    <ul className="mt-6 grid gap-4 md:grid-cols-3 md:gap-8">
      {items.map(([dot, title, detail]) => (
        <li key={title} className="flex items-start gap-3">
          <span className={`mt-1.5 size-4 shrink-0 rounded-full ${dot}`} />
          <p className="text-label font-normal text-copy">
            <span className="font-semibold text-ink">{title}</span> {detail}
          </p>
        </li>
      ))}
    </ul>
  );
}

/* ================================================================== */
/* 1. Two legs: a PayTo pull to fund, NPP pushes to pay out             */
/* ================================================================== */

const TANK = { x: 480, top: 120, bottom: 320, w: 120 };
const PAYEES = [90, 170, 250, 330];
const AUTH = 1.5;
const PULL = 2.2;
const PUSH = 4.4;
const SLOW = PUSH + 0.9;

export function TwoLegsScene() {
  const fan = (y: number) => `M${TANK.x + TANK.w / 2} 220 C640 220 700 ${y} 820 ${y}`;
  const slow = `M${TANK.x + TANK.w / 2} 260 C600 400 760 400 820 ${PAYEES[3]}`;
  return (
    <Scene
      viewBox="0 0 960 420"
      end={SLOW + 3.0}
      label="On the left, a business that owes money authorises a PayTo agreement on its phone. A line reaches from the platform's float to the business and pulls coins back into the float, which fills. Then coins flash out in real time to four payees. One payee's account can't receive real-time payments, so that coin bounces and travels a slower dashed route, arriving later."
    >
      {/* The payer and its agreement. */}
      <g transform="translate(110 200) scale(1.2)">
        <Shop />
      </g>
      <g transform="translate(200 330)">
        <Handset />
        <Pop x={0} y={-2} at={AUTH}>
          <TickBadge r={13} />
        </Pop>
      </g>
      <g transform="translate(290 70)" opacity={0}>
        <FadeIn at={0.3} dur={0.2} />
        <Move path="M0 0 C0 120 -60 200 -90 252" at={0.6} dur={0.8} />
        <FadeOut at={1.3} dur={0.2} />
        <Doc lines={3} />
      </g>

      {/* The float. */}
      <rect x={TANK.x - TANK.w / 2} y={TANK.top} width={TANK.w} height={TANK.bottom - TANK.top} rx="12" fill={C.paper} stroke={C.ink} strokeWidth="3" />
      <rect x={TANK.x - TANK.w / 2 + 6} y={TANK.bottom - 20} width={TANK.w - 12} height="14" fill={C.chart} opacity="0.5">
        <Anim attr="y" values={[TANK.bottom - 20, TANK.bottom - 130]} at={PULL + 0.8} dur={1.2} />
        <Anim attr="height" values={[14, 124]} at={PULL + 0.8} dur={1.2} />
        <Anim attr="y" values={[TANK.bottom - 130, TANK.bottom - 40]} at={PUSH} dur={1.0} />
        <Anim attr="height" values={[124, 34]} at={PUSH} dur={1.0} />
      </rect>

      {/* PayTo: a pull, under the agreement. */}
      <path d={`M${TANK.x - TANK.w / 2} 200 L172 200`} stroke={C.wattle} strokeWidth="6" strokeLinecap="round" {...drawable}>
        <Draw at={PULL} dur={0.5} ease={ease.out} />
        <Anim attr="opacity" values={[1, 0]} at={PULL + 2.0} dur={0.3} />
      </path>
      <Pop x={176} y={200} at={PULL + 0.5} dur={0.3}>
        <g>
          <FadeOut at={PULL + 2.0} dur={0.3} />
          <circle r="10" fill={C.wattle} stroke={C.ink} strokeWidth="2" />
        </g>
      </Pop>
      {[0, 0.3, 0.6].map((d) => (
        <g key={d} opacity={0}>
          <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.85, 1]} at={PULL + 0.7 + d} dur={0.9} ease={null} />
          <Move path={`M180 200 L${TANK.x - 40} 200`} at={PULL + 0.7 + d} dur={0.9} ease={ease.in} />
          <g transform="scale(0.7)">
            <Coin />
          </g>
        </g>
      ))}

      {/* NPP: real-time pushes to each payee. */}
      {PAYEES.map((y, i) => (
        <Fragment key={y}>
          <path d={fan(y)} fill="none" stroke={C.chart} strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" />
          <g transform={`translate(860 ${y})`}>
            <Person fill={i === 3 ? C.shallows : C.tint} stroke={i === 3 ? C.muted : C.harbour} />
          </g>
          <g opacity={0}>
            <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.85, 1]} at={PUSH + i * 0.08} dur={0.45} ease={null} />
            {i < 3 ? (
              <Move path={fan(y)} at={PUSH + i * 0.08} dur={0.45} ease={ease.in} />
            ) : (
              <Move path={fan(y)} points={[0, 0.8, 0.55]} times={[0, 0.7, 1]} at={PUSH + i * 0.08} dur={0.45} ease={null} />
            )}
            <g transform="scale(0.6)">
              <Coin fill={C.chart} />
            </g>
          </g>
          {i < 3 && <Pulse x={860} y={y} at={PUSH + i * 0.08 + 0.45} from={20} to={46} colour={C.settled} width={3} />}
        </Fragment>
      ))}
      <Pop x={770} y={PAYEES[3] - 30} at={PUSH + 0.6}>
        <g>
          <FadeOut at={SLOW + 0.4} dur={0.3} />
          <CrossBadge r={14} />
        </g>
      </Pop>

      {/* BECS: the slower batch route for the one that can't be reached. */}
      <path d={slow} fill="none" stroke={C.wattle} strokeWidth="4" strokeDasharray="10 9" strokeLinecap="round" opacity={0}>
        <FadeIn at={SLOW} dur={0.5} />
      </path>
      <g opacity={0}>
        <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.05, 0.95, 1]} at={SLOW + 0.6} dur={2.0} ease={null} />
        <Move path={slow} at={SLOW + 0.6} dur={2.0} ease={null} />
        <g transform="scale(0.6)">
          <Coin fill={C.wattle} />
        </g>
      </g>
      <Pop x={900} y={PAYEES[3] - 30} at={SLOW + 2.6}>
        <TickBadge r={14} fill={C.wattle} />
      </Pop>
    </Scene>
  );
}

export function TwoLegs() {
  return (
    <div>
      <TwoLegsScene />
      <Rows
        items={[
          ["bg-wattle", "Funding: a PayTo pull.", "The payer authorises an agreement in online banking, then the platform debits within its terms."],
          ["bg-harbour-chart", "Payouts: NPP credit transfers.", "Real time, 24/7, one payee at a time, to a BSB and account number or PayID."],
          ["bg-wattle", "Fallback: BECS direct entry.", "Batched and slower, for the accounts the NPP can't reach."],
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 2. Confirmation of Payee: a result, an action, a record              */
/* ================================================================== */

const CHECK: [number, number] = [450, 210];
const LANES = [
  { y: 100, tone: C.settled, tint: C.settledTint },
  { y: 210, tone: C.wattle, tint: C.wattleTint },
  { y: 320, tone: C.stop, tint: C.stopTint },
];
const STEP = (k: number) => 0.6 + k * 2.0;
const CHANGE = STEP(3) + 0.2;

function PayeeCard({ edge = C.ink }: { edge?: string }) {
  return (
    <g>
      <rect x="-62" y="-34" width="124" height="68" rx="8" fill={C.paper} stroke={edge} strokeWidth="3" />
      <g transform="translate(-36 2) scale(0.7)">
        <Person />
      </g>
      <rect x="-10" y="-16" width="58" height="9" rx="3" fill={C.ink} opacity="0.75" />
      <rect x="-10" y="0" width="44" height="7" rx="3" fill={C.hair} />
      <rect x="-10" y="12" width="52" height="7" rx="3" fill={C.hair} />
    </g>
  );
}

/** The two names being compared: entered, and the recipient bank's record. */
function Compare({ kind }: { kind: 0 | 1 | 2 }) {
  const rec = [C.chart, C.wattle, C.stop][kind];
  return (
    <g>
      <rect x="-90" y="-46" width="180" height="22" rx="6" fill={C.chart} />
      <rect x="-90" y="24" width={kind === 2 ? 110 : 180} height="22" rx="6" fill={kind === 1 ? C.chart : rec} />
      {kind === 1 && <rect x="40" y="24" width="50" height="22" rx="6" fill={rec} />}
    </g>
  );
}

export function CopScene() {
  const results = [
    <TickBadge key="m" r={20} />,
    <g key="c">
      <circle r="20" fill={C.wattle} />
      <path d="M-9 -3 Q-4 -8 0 -3 Q4 2 9 -3 M-9 5 Q-4 0 0 5 Q4 10 9 5" fill="none" stroke={C.paper} strokeWidth="3" strokeLinecap="round" />
    </g>,
    <CrossBadge key="n" r={20} />,
  ];
  return (
    <Scene
      viewBox="0 0 960 420"
      end={CHANGE + 3.4}
      label="Three new payee cards wait on the left. One at a time, each moves to a checker in the middle, where the name entered is compared with the name the recipient's bank holds. The first matches and slides into the green active row. The second is a close match and goes to the amber row for someone to confirm. The third doesn't match and is put on hold in the red row. Later the active payee's bank details change, so it goes back through the check, while its next payout waits, and returns green."
    >
      {/* The checker. */}
      <rect x={CHECK[0] - 120} y={CHECK[1] - 90} width="240" height="180" rx="16" fill={C.shallows} stroke={C.ink} strokeWidth="3" />
      {[0, 1, 2].map((k) => (
        <Window key={k} from={STEP(k) + 0.6} to={STEP(k) + 1.5}>
          <g transform={`translate(${CHECK[0]} ${CHECK[1]})`}>
            <Compare kind={k as 0 | 1 | 2} />
          </g>
        </Window>
      ))}
      <Window from={CHANGE + 1.0} to={CHANGE + 1.9}>
        <g transform={`translate(${CHECK[0]} ${CHECK[1]})`}>
          <Compare kind={0} />
        </g>
      </Window>
      {[...[0, 1, 2].map((k) => STEP(k)), CHANGE + 0.4].map((t, i) => (
        <g key={i} transform={`translate(${CHECK[0] - 70} ${CHECK[1] - 60})`} opacity={0}>
          <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.15, 0.85, 1]} at={t + 0.6} dur={0.9} ease={null} />
          <Move path="M0 0 L140 60 L60 100" at={t + 0.6} dur={0.9} ease={ease.inOut} />
          <g transform="scale(0.8)">
            <Lens />
          </g>
        </g>
      ))}

      {/* The outcome rows. */}
      {LANES.map((l) => (
        <rect key={l.y} x="680" y={l.y - 46} width="250" height="92" rx="14" fill={l.tint} stroke={l.tone} strokeWidth="3" />
      ))}

      {/* Three new payees, checked in turn. */}
      {[0, 1, 2].map((k) => {
        const t = STEP(k);
        const lane = LANES[k];
        const from: [number, number] = [110, 120 + k * 90];
        return (
          <Fragment key={k}>
            <g transform={`translate(${from[0]} ${from[1]})`}>
              <Move path={`M0 0 L${CHECK[0] - from[0]} ${CHECK[1] - from[1]}`} at={t} dur={0.6} />
              <Move path={`M${CHECK[0] - from[0]} ${CHECK[1] - from[1]} L${770 - from[0]} ${lane.y - from[1]}`} at={t + 1.6} dur={0.6} />
              {k === 0 && <Move path={`M${770 - from[0]} ${lane.y - from[1]} L${CHECK[0] - from[0]} ${CHECK[1] - from[1]}`} at={CHANGE + 0.3} dur={0.6} />}
              {k === 0 && <Move path={`M${CHECK[0] - from[0]} ${CHECK[1] - from[1]} L${770 - from[0]} ${lane.y - from[1]}`} at={CHANGE + 2.0} dur={0.6} />}
              <g transform="scale(0.85)">
                <PayeeCard />
              </g>
              {k === 0 && (
                <rect x="-53" y="-29" width="106" height="58" rx="7" fill="none" stroke={C.wattle} strokeWidth="4" opacity={0}>
                  <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.85, 1]} at={CHANGE} dur={2.4} ease={null} />
                </rect>
              )}
            </g>
            <Pop x={CHECK[0] + 96} y={CHECK[1] - 66} at={t + 1.2} dur={0.35}>
              <g>
                <FadeOut at={t + 1.6} dur={0.2} />
                {results[k]}
              </g>
            </Pop>
            <Pop x={900} y={lane.y - 24} at={t + 2.2}>
              <g transform="scale(0.8)">{results[k]}</g>
            </Pop>
          </Fragment>
        );
      })}

      {/* Bank details change: check again, and hold the payout meanwhile. */}
      <g transform="translate(860 30)" opacity={0}>
        <FadeIn at={CHANGE - 0.6} dur={0.2} />
        <Move path="M0 0 L-60 50" at={CHANGE - 0.6} dur={0.5} />
        <FadeOut at={CHANGE} dur={0.2} />
        <g transform="rotate(40)">
          <rect x="-6" y="-26" width="12" height="44" rx="2" fill={C.wattle} stroke={C.ink} strokeWidth="2" />
          <path d="M-6 18 L0 30 L6 18 Z" fill={C.ink} />
        </g>
      </g>
      <g transform={`translate(${770} ${LANES[0].y})`} opacity={0}>
        <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.9, 1]} at={CHANGE + 0.4} dur={2.2} ease={null} />
        <circle r="20" fill={C.paper} stroke={C.wattle} strokeWidth="3" />
        <rect x="-8" y="-9" width="5" height="18" rx="1.5" fill={C.wattle} />
        <rect x="3" y="-9" width="5" height="18" rx="1.5" fill={C.wattle} />
      </g>
      <Pop x={CHECK[0] + 96} y={CHECK[1] - 66} at={CHANGE + 1.6} dur={0.35}>
        <g>
          <FadeOut at={CHANGE + 2.0} dur={0.2} />
          <TickBadge r={20} />
        </g>
      </Pop>
    </Scene>
  );
}

export function Cop() {
  return (
    <div>
      <CopScene />
      <Rows
        items={[
          ["bg-settled", "Match:", "activate the payee for payouts, and keep the request, result and time."],
          ["bg-wattle", "Close match:", "show the returned name and ask someone to confirm. Record who did, and when."],
          ["bg-stop", "No match:", "hold the payee and ask for new details. Re-run the check whenever bank details change."],
        ]}
      />
    </div>
  );
}

/* ================================================================== */
/* 3. Timeouts and unreachable accounts: no double pays, no dead ends   */
/* ================================================================== */

const TOP = 120;
const BOT = 300;
const SEND = 0.5;
const LOST = SEND + 1.6;
const RESEND = LOST + 1.4;
const SECOND = RESEND + 2.4;

function Instruction() {
  return (
    <g>
      <rect x="-26" y="-17" width="52" height="34" rx="4" fill={C.paper} stroke={C.ink} strokeWidth="2.5" />
      <path d="M-26 -16 L0 2 L26 -16" fill="none" stroke={C.ink} strokeWidth="2.5" />
      {/* The idempotency key travels with the instruction. */}
      <g transform="translate(22 14)">
        <circle r="10" fill={C.wattle} stroke={C.ink} strokeWidth="2" />
        <circle cx="-2" r="3" fill={C.paper} />
      </g>
    </g>
  );
}

export function IdempotentScene() {
  return (
    <Scene
      viewBox="0 0 960 400"
      end={SECOND + 3.8}
      label="Top: the platform sends a payout instruction carrying a key to the bank, and the bank pays the payee one coin. The confirmation back is lost, an hourglass turns, and the platform resends the same instruction with the same key. The bank recognises the key, sends no second payment, and confirms. Bottom: a payout to an account the real-time network can't reach is rejected straight away, the payee is told about the delay, and the payment goes by the slower batch route instead."
    >
      {/* Top lane: idempotency. */}
      <line x1="140" y1={TOP} x2="820" y2={TOP} stroke={C.hair} strokeWidth="4" strokeDasharray="2 10" strokeLinecap="round" />
      <g transform={`translate(80 ${TOP}) scale(1.05)`}>
        <Server />
      </g>
      <g transform={`translate(480 ${TOP + 4}) scale(1.1)`}>
        <Bank />
      </g>
      <g transform={`translate(870 ${TOP})`}>
        <g transform="scale(1.8)">
          <Person />
        </g>
      </g>
      <g transform={`translate(140 ${TOP})`} opacity={0}>
        <FadeIn at={SEND} dur={0.1} />
        <Move path="M0 0 L290 0" at={SEND} dur={0.8} />
        <FadeOut at={SEND + 0.8} dur={0.1} />
        <g transform="scale(1.3)"><Instruction /></g>
      </g>
      <g opacity={0}>
        <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.9, 1]} at={SEND + 1.0} dur={0.7} ease={null} />
        <Move path={`M530 ${TOP} L830 ${TOP}`} at={SEND + 1.0} dur={0.7} />
        <g transform="scale(1)">
          <Coin />
        </g>
      </g>
      <Pulse x={870} y={TOP} at={SEND + 1.7} from={24} to={56} colour={C.settled} />
      {/* The confirmation back is lost. */}
      <g opacity={0}>
        <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.6, 1]} at={LOST - 0.2} dur={0.9} ease={null} />
        <Move path={`M430 ${TOP + 26} L240 ${TOP + 26}`} at={LOST - 0.2} dur={0.9} ease={null} />
        <circle r="8" fill={C.settled} />
      </g>
      <g transform={`translate(160 ${TOP - 70})`} opacity={0}>
        <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.9, 1]} at={LOST + 0.2} dur={1.2} ease={null} />
        <g transform="rotate(0)">
          <Turn type="rotate" values={[0, 180]} at={LOST + 0.5} dur={0.6} ease={ease.inOut} />
          <path d="M-12 -16 L12 -16 L0 0 L12 16 L-12 16 L0 0 Z" fill={C.wattleTint} stroke={C.ink} strokeWidth="2.5" strokeLinejoin="round" />
        </g>
      </g>
      {/* The same key again: recognised, not paid twice. */}
      <g transform={`translate(140 ${TOP})`} opacity={0}>
        <FadeIn at={RESEND} dur={0.1} />
        <Move path="M0 0 L290 0" at={RESEND} dur={0.8} />
        <FadeOut at={RESEND + 0.9} dur={0.1} />
        <g transform="scale(1.3)"><Instruction /></g>
      </g>
      <Pulse x={480} y={TOP} at={RESEND + 0.8} from={30} to={70} colour={C.wattle} />
      <Pop x={540} y={TOP - 56} at={RESEND + 0.9}>
        <g>
          <circle r="18" fill={C.paper} stroke={C.wattle} strokeWidth="3" />
          <circle cx="-3" cy="0" r="6" fill="none" stroke={C.ink} strokeWidth="3" />
          <path d="M3 0 L12 0 M9 0 L9 5" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />
        </g>
      </Pop>
      <g opacity={0}>
        <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.9, 1]} at={RESEND + 1.2} dur={0.8} ease={null} />
        <Move path={`M430 ${TOP + 26} L150 ${TOP + 26}`} at={RESEND + 1.2} dur={0.8} />
        <circle r="8" fill={C.settled} />
      </g>
      <Pop x={124} y={TOP - 50} at={RESEND + 2.0}>
        <TickBadge r={15} />
      </Pop>

      {/* Bottom lane: an account the NPP can't reach. */}
      <line x1="140" y1={BOT} x2="820" y2={BOT} stroke={C.hair} strokeWidth="4" strokeDasharray="2 10" strokeLinecap="round" />
      <path d={`M150 ${BOT + 20} C300 380 680 380 830 ${BOT + 20}`} fill="none" stroke={C.wattle} strokeWidth="4" strokeDasharray="10 9" strokeLinecap="round" opacity={0}>
        <FadeIn at={SECOND + 0.9} dur={0.3} />
      </path>
      <g transform={`translate(80 ${BOT}) scale(1.05)`}>
        <Server />
      </g>
      <g transform={`translate(870 ${BOT})`}>
        <g transform="scale(1.8)">
          <Person fill={C.shallows} stroke={C.muted} />
        </g>
      </g>
      <g transform={`translate(780 ${BOT})`}>
        <path d="M-12 -12 L-2 -2 M-12 12 L-2 2" stroke={C.ink} strokeWidth="4" strokeLinecap="round" />
        <path d="M12 -12 L2 -2 M12 12 L2 2" stroke={C.stop} strokeWidth="4" strokeLinecap="round" />
      </g>
      <g opacity={0}>
        <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.1, 0.85, 1]} at={SECOND} dur={0.7} ease={null} />
        <Move path={`M150 ${BOT} L760 ${BOT}`} points={[0, 1, 0.8]} times={[0, 0.8, 1]} at={SECOND} dur={0.7} ease={ease.in} />
        <g transform="scale(1)">
          <Coin fill={C.chart} />
        </g>
      </g>
      <Pop x={740} y={BOT - 40} at={SECOND + 0.6}>
        <CrossBadge r={15} />
      </Pop>
      {/* Tell the payee, then send it the slow way. */}
      <Pop x={920} y={BOT - 44} at={SECOND + 1.0}>
        <g transform="rotate(0)">
          <Turn type="rotate" values={[0, 16, -14, 8, 0]} at={SECOND + 1.3} dur={0.6} ease={null} />
          <circle r="16" fill={C.wattle} />
          <path d="M-7 5 L-7 -1 Q-7 -9 0 -9 Q7 -9 7 -1 L7 5 L9 7 L-9 7 Z" fill={C.paper} />
        </g>
      </Pop>
      <g opacity={0}>
        <Anim attr="opacity" values={[0, 1, 1, 0]} times={[0, 0.05, 0.95, 1]} at={SECOND + 1.3} dur={2.0} ease={null} />
        <Move path={`M150 ${BOT + 20} C300 380 680 380 830 ${BOT + 20}`} at={SECOND + 1.3} dur={2.0} ease={null} />
        <g transform="scale(1)">
          <Coin fill={C.wattle} />
        </g>
      </g>
      <Pop x={920} y={BOT + 40} at={SECOND + 3.3}>
        <TickBadge r={15} fill={C.wattle} />
      </Pop>
    </Scene>
  );
}

export function Idempotent() {
  return (
    <div>
      <IdempotentScene />
      <Rows
        items={[
          ["bg-wattle", "An idempotency key", "on every payout instruction, so a timeout never becomes a double payment."],
          ["bg-harbour-chart", "A clear status model:", "submitted, settled, rejected and held are separate states."],
          ["bg-wattle", "A BECS fallback", "for unreachable accounts, with the payee told about the delay."],
        ]}
      />
    </div>
  );
}
