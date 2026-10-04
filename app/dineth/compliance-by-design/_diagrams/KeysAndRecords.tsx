import type { CSSProperties } from "react";
import { LockIcon } from "../../_components/icons";
import { Bar, at } from "../../_components/diagram-kit";

// Each team's key slides along the corridor past all three doors. Only its own
// door opens; the others stay locked. Each opening writes a line in the log,
// and the finished log is sealed.
const START = 700;
const GAP = 2000;
const R = [0, 1, 2].map((i) => START + i * GAP);
const SEAL = START + 3 * GAP;
const RUN = 1700; // ms for a key to travel the whole corridor

// Corridor geometry (the strip is a 360 x 92 drawing).
const DOORS = [60, 180, 300];
const RAIL_Y = 78;
const RAIL_FROM = 16;
const RAIL_TO = 344;
const RAIL = `M${RAIL_FROM} ${RAIL_Y} H${RAIL_TO}`;
// How far along the run the key is when it reaches each door.
const PASS = DOORS.map((x) => (x - RAIL_FROM) / (RAIL_TO - RAIL_FROM));

const areas = ["Customer details", "Payments", "Product code"];

const roles: { role: string; own: number; did: string }[] = [
  { role: "Customer support", own: 0, did: "viewed customer details" },
  { role: "Finance", own: 1, did: "approved a payment" },
  { role: "Developers", own: 2, did: "changed product code" },
];

const stroke = {
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

// A door that is locked: a shut panel with a padlock that appears when the key
// tries it. A faint ring marks the attempt.
function LockedDoor({ cx, time }: { cx: number; time: number }) {
  return (
    <g>
      <rect
        x={cx - 24}
        y={4}
        width={48}
        height={56}
        rx={6}
        fill="var(--shallows)"
        stroke="var(--hairline-strong)"
        strokeWidth={2.5}
      />
      <g data-anim="pop" style={at(time, 450)}>
        <path
          d={`M${cx - 5} 36 v-6 a5 5 0 0 1 10 0 v6`}
          {...stroke}
          stroke="var(--slate-muted)"
          strokeWidth={3}
        />
        <rect
          x={cx - 10}
          y={35}
          width={20}
          height={16}
          rx={3.5}
          fill="var(--slate-muted)"
        />
      </g>
      <rect
        x={cx - 28}
        y={0}
        width={56}
        height={64}
        rx={10}
        fill="none"
        stroke="var(--slate-muted)"
        strokeWidth={3}
        data-anim="ripple"
        style={at(time)}
      />
    </g>
  );
}

// The team's own door: shut until the key arrives, then swinging open.
function OwnDoor({ cx, time }: { cx: number; time: number }) {
  return (
    <g>
      <g data-anim="swap-out" style={at(time, 400)}>
        <rect
          x={cx - 24}
          y={4}
          width={48}
          height={56}
          rx={6}
          fill="var(--shallows)"
          stroke="var(--hairline-strong)"
          strokeWidth={2.5}
        />
      </g>
      <g data-anim="fade" style={at(time, 500)}>
        <rect
          x={cx - 24}
          y={4}
          width={48}
          height={56}
          rx={6}
          fill="var(--settled-green-tint)"
          stroke="var(--settled-green)"
          strokeWidth={2.5}
        />
        <path
          d={`M${cx - 24} 4 L${cx - 5} 11 V53 L${cx - 24} 60 Z`}
          fill="var(--settled-green)"
          stroke="var(--settled-green)"
          strokeWidth={2.5}
          strokeLinejoin="round"
        />
        <path
          d={`M${cx + 3} 33 l6 6 l12 -13`}
          {...stroke}
          stroke="var(--settled-green)"
          strokeWidth={4}
        />
      </g>
      <rect
        x={cx - 28}
        y={0}
        width={56}
        height={64}
        rx={10}
        fill="none"
        stroke="var(--settled-green)"
        strokeWidth={4}
        data-anim="ripple"
        style={at(time + 100)}
      />
    </g>
  );
}

function Corridor({ role, start }: { role: (typeof roles)[number]; start: number }) {
  return (
    <svg
      viewBox="0 0 360 92"
      aria-hidden="true"
      focusable="false"
      className="block w-full"
    >
      <path
        d={RAIL}
        {...stroke}
        stroke="var(--hairline-strong)"
        strokeWidth={3}
        strokeDasharray="1 9"
      />
      {DOORS.map((cx, d) => {
        const t = start + PASS[d] * RUN;
        return role.own === d ? (
          <OwnDoor key={cx} cx={cx} time={t} />
        ) : (
          <LockedDoor key={cx} cx={cx} time={t} />
        );
      })}
      {/* The key. */}
      <g
        data-anim="travel"
        className="opacity-0"
        style={at(start, RUN, {
          offsetPath: `path("${RAIL}")`,
          "--ease": "linear",
        } as CSSProperties)}
      >
        <circle r={7} cx={-10} cy={0} fill="var(--paper-white)" stroke="var(--harbour-green-deep)" strokeWidth={3.5} />
        <path
          d="M-3 0 H15 M10 0 V6 M15 0 V5"
          {...stroke}
          stroke="var(--harbour-green-deep)"
          strokeWidth={3.5}
        />
      </g>
    </svg>
  );
}

export function KeysAndRecords() {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <section data-anim="rise" style={at(0, 700)} className="rounded-lg bg-surface p-5 sm:p-6">
        <h3 className="font-serif text-title font-semibold text-ink">
          Only the keys you need
        </h3>
        <p className="mt-1 text-label text-muted">
          Each team can open only what its job requires
        </p>

        <div className="mt-5">
          <div aria-hidden="true" className="grid grid-cols-[32%_minmax(0,1fr)]">
            <span />
            <div className="grid grid-cols-3 pb-2 text-center text-label font-semibold text-copy">
              {areas.map((a) => (
                <span key={a} className="px-1">
                  {a}
                </span>
              ))}
            </div>
          </div>

          <ul>
            {roles.map((r, i) => (
              <li
                key={r.role}
                className="relative grid grid-cols-[32%_minmax(0,1fr)] items-center border-t border-hairline"
              >
                <span
                  aria-hidden="true"
                  data-anim="flash"
                  style={at(R[i], RUN + 300)}
                  className="absolute -inset-x-2 inset-y-1 rounded-md bg-harbour-tint ring-2 ring-harbour/30"
                />
                <span className="relative pr-2 text-label font-semibold text-ink">
                  {r.role}
                  <span className="sr-only">
                    {" "}
                    can open {areas[r.own]} only.
                  </span>
                </span>
                <div className="relative">
                  <Corridor role={r} start={R[i]} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-anim="rise" style={at(300, 700)} className="flex flex-col rounded-lg bg-surface p-5 sm:p-6">
        <h3 className="font-serif text-title font-semibold text-ink">
          A record of every action
        </h3>
        <p className="mt-1 text-label text-muted">
          Who did what, and when, kept where it can&apos;t be quietly edited
        </p>

        <ul className="mt-5 flex-1 divide-y divide-hairline" aria-label="Example audit record">
          {roles.map((r, i) => {
            const when = R[i] + PASS[r.own] * RUN + 500;
            return (
              <li
                key={r.role}
                data-anim="rise"
                style={at(when)}
                className="relative flex items-center justify-between gap-3 py-3.5"
              >
                <span
                  aria-hidden="true"
                  data-anim="flash"
                  style={at(when, 1400)}
                  className="absolute -inset-x-2 inset-y-1 rounded-md bg-harbour-tint ring-2 ring-harbour/30"
                />
                <span className="relative flex items-center gap-3">
                  <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full bg-harbour" />
                  <span className="font-semibold text-ink">
                    {r.role} <span className="font-normal text-copy">{r.did}</span>
                  </span>
                </span>
                <span className="relative flex shrink-0 items-center gap-2" aria-hidden="true">
                  <Bar className="w-10" />
                </span>
              </li>
            );
          })}
        </ul>

        <div className="mt-4 flex items-center gap-4 rounded-md bg-harbour-tint px-4 py-3 font-semibold text-harbour-deep">
          <span
            aria-hidden="true"
            data-anim="stamp"
            style={at(SEAL)}
            className="relative flex size-14 shrink-0 items-center justify-center"
          >
            <svg viewBox="0 0 56 56" focusable="false" className="absolute inset-0 size-full">
              <circle cx={28} cy={28} r={25} fill="var(--paper-white)" stroke="var(--harbour-green-deep)" strokeWidth={2.5} />
              <circle cx={28} cy={28} r={20} fill="none" stroke="var(--harbour-green-deep)" strokeWidth={1.5} strokeDasharray="2 4" strokeLinecap="round" />
            </svg>
            <LockIcon size={24} className="relative" />
          </span>
          <p data-anim="fade" style={at(SEAL + 200)}>
            Sealed: it can&apos;t be changed afterwards
          </p>
        </div>
      </section>
    </div>
  );
}
