import type { CSSProperties, ReactNode } from "react";
import {
  CheckIcon,
  CrossIcon,
  EyeIcon,
  KeyIcon,
  PersonIcon,
} from "../../dineth/_components/icons";
import { at } from "../../dineth/_components/diagram-kit";
import { BankIcon } from "../../dineth/_components/icons";
import {
  BellIcon,
  ClockIcon,
  DoorIcon,
  FlagIcon,
  SearchIcon,
  ServerIcon,
  WarningIcon,
} from "./icons";
import { linear } from "./shared";

/* ------------------------------------------------------------------ */
/* A card holding one small animated scene                             */
/* ------------------------------------------------------------------ */

export type SceneSpec = {
  title: string;
  detail: string;
  scene: ReactNode;
  /** When the card appears; its scene should start a little after. */
  start: number;
};

export function SceneGrid({
  scenes,
  cols = "md:grid-cols-2 lg:grid-cols-3",
}: {
  scenes: SceneSpec[];
  cols?: string;
}) {
  return (
    <ul className={`grid gap-4 ${cols}`}>
      {scenes.map((s) => (
        <li
          key={s.title}
          data-anim="rise"
          style={at(s.start - 300, 700)}
          className="flex flex-col overflow-hidden rounded-md bg-surface shadow-device"
        >
          <div className="relative h-44 bg-shallows p-4">{s.scene}</div>
          <div className="p-5">
            <p className="text-[1.125rem] leading-snug font-semibold text-ink">
              {s.title}
            </p>
            <p className="mt-1 text-label text-copy">{s.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

const pill = "rounded-full px-2.5 py-0.5 text-label font-semibold";

/* A dot that runs along a track and stops at `stop` percent. */
function Runner({
  start,
  dur,
  stop = 100,
  className = "bg-magenta-chart",
}: {
  start: number;
  dur: number;
  stop?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className="absolute inset-y-0 left-0"
      style={{ width: `${stop}%` }}
    >
      <span
        data-anim="ride-x"
        style={at(start, Math.round((dur * stop) / 100), linear)}
        className={`absolute top-1/2 left-0 size-5 -translate-1/2 rounded-full ring-[3px] ring-surface ${className}`}
      />
    </span>
  );
}

function Rail() {
  return (
    <span
      aria-hidden="true"
      className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-hairline-strong"
    />
  );
}

/* ------------------------------------------------------------------ */
/* Payout ledger: five things it needs from the first release          */
/* ------------------------------------------------------------------ */

/** The same instruction twice: the second is ignored. */
export function IdempotencyScene({ t }: { t: number }) {
  return (
    <div className="flex h-full items-center gap-3">
      <div className="relative h-14 flex-1">
        <Rail />
        <Runner start={t} dur={1100} />
        <Runner start={t + 1200} dur={1100} stop={72} className="bg-ink" />
        <span
          data-anim="flash"
          style={at(t + 1200 + 800, 1400)}
          className="absolute top-1/2 left-[72%] flex size-8 -translate-1/2 items-center justify-center rounded-full bg-stop text-surface"
        >
          <CrossIcon size={18} />
        </span>
      </div>
      <div className="flex w-20 shrink-0 flex-col items-center gap-1 text-center">
        <span className="relative flex size-12 items-center justify-center rounded-md bg-surface text-magenta shadow-device ring-1 ring-hairline-strong">
          <BankIcon size={24} />
          <span
            data-anim="pop"
            style={at(t + 1100)}
            className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-settled text-surface ring-2 ring-surface"
          >
            <CheckIcon size={14} />
          </span>
        </span>
        <span className="text-label leading-tight font-semibold text-ink">Paid once</span>
      </div>
      <span
        data-anim="pop"
        style={at(t + 400)}
        className="absolute top-3 left-4 flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-label font-semibold text-ink shadow-device"
      >
        <KeyIcon size={16} className="text-magenta" />
        Same key twice
      </span>
    </div>
  );
}

/** Four separate states, each lit in turn. */
export function StatusScene({ t }: { t: number }) {
  const states = [
    { label: "Submitted", cls: "bg-magenta-tint text-magenta-deep", ring: "ring-magenta/40" },
    { label: "Settled", cls: "bg-settled-tint text-settled", ring: "ring-settled/40" },
    { label: "Rejected", cls: "bg-stop-tint text-stop", ring: "ring-stop/40" },
    { label: "Held", cls: "bg-wattle-tint text-wattle", ring: "ring-wattle/40" },
  ];
  return (
    <div className="grid h-full grid-cols-2 content-center gap-3">
      {states.map((s, i) => (
        <span key={s.label} className="relative">
          <span
            aria-hidden="true"
            data-anim="ripple"
            style={at(t + i * 650)}
            className={`absolute inset-0 rounded-full ring-4 ${s.ring}`}
          />
          <span
            data-anim="pop"
            style={at(t + i * 650)}
            className={`relative block rounded-full px-3 py-2 text-center text-label font-semibold ${s.cls}`}
          >
            {s.label}
          </span>
        </span>
      ))}
    </div>
  );
}

/** The first route fails, so the payment takes the second route. */
export function FallbackScene({ t }: { t: number }) {
  return (
    <div className="flex h-full flex-col justify-center gap-4">
      <div className="flex items-center gap-3">
        <span className="w-12 shrink-0 text-label font-semibold text-ink">NPP</span>
        <div className="relative h-8 flex-1">
          <Rail />
          <Runner start={t} dur={1200} stop={62} />
          <span
            data-anim="flash"
            style={at(t + 760, 1800)}
            className="absolute top-1/2 left-[62%] flex size-8 -translate-1/2 items-center justify-center rounded-full bg-stop text-surface"
          >
            <CrossIcon size={18} />
          </span>
          <span
            data-anim="pop"
            style={at(t + 800)}
            className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full bg-stop-tint px-2.5 py-0.5 text-label font-semibold text-stop"
          >
            Unreachable
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-12 shrink-0 text-label font-semibold text-ink">BECS</span>
        <div className="relative h-8 flex-1">
          <Rail />
          <Runner start={t + 1600} dur={1500} className="bg-wattle" />
          <span
            data-anim="pop"
            style={at(t + 3100)}
            className="absolute top-1/2 right-0 flex -translate-y-1/2 items-center gap-1 rounded-full bg-wattle-tint px-2.5 py-0.5 text-label font-semibold text-wattle"
          >
            <BellIcon size={14} />
            Payee told
          </span>
        </div>
      </div>
    </div>
  );
}

/** Statement against ledger, row by row, with one break to chase. */
export function ReconcileScene({ t }: { t: number }) {
  const rows = [0, 1, 2, 3];
  return (
    <div className="grid h-full grid-cols-[1fr_2rem_1fr] items-center gap-x-1 gap-y-2.5">
      <p className="text-center text-label font-semibold text-ink">Bank statement</p>
      <span />
      <p className="text-center text-label font-semibold text-ink">Ledger</p>
      {rows.map((r) => {
        const broken = r === 3;
        return (
          <div key={r} className="contents">
            <span className="h-3.5 rounded-full bg-hairline-strong" />
            <span aria-hidden="true" className="relative h-[3px]">
              {broken ? (
                <span
                  data-anim="flash"
                  style={at(t + r * 600 + 400, 1600)}
                  className="absolute top-1/2 left-1/2 flex size-6 -translate-1/2 items-center justify-center rounded-full bg-wattle text-surface"
                >
                  <WarningIcon size={14} />
                </span>
              ) : (
                <span
                  data-anim="grow-x"
                  style={at(t + r * 600, 450, linear)}
                  className="absolute inset-0 rounded-full bg-settled"
                />
              )}
            </span>
            <span
              className={`h-3.5 rounded-full ${broken ? "bg-hairline-strong/50" : "bg-hairline-strong"}`}
            />
          </div>
        );
      })}
    </div>
  );
}

/** A queue whose items age, worked by a person. */
export function QueueScene({ t }: { t: number }) {
  const items = [
    { w: 92, warn: true },
    { w: 58, warn: false },
    { w: 28, warn: false },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-2.5">
          <ClockIcon size={20} className="shrink-0 text-muted" />
          <div aria-hidden="true" className="relative h-3.5 flex-1 rounded-full bg-hairline-strong/60">
            <span
              data-anim="grow-x"
              style={{ ...at(t + i * 300, 1600, linear), width: `${it.w}%` }}
              className={`absolute inset-y-0 left-0 rounded-full ${it.warn ? "bg-wattle" : "bg-magenta-chart"}`}
            />
          </div>
          {it.warn && (
            <span
              data-anim="pop"
              style={at(t + 1900)}
              className="flex size-7 shrink-0 items-center justify-center rounded-full bg-wattle text-surface"
            >
              <BellIcon size={16} />
            </span>
          )}
        </div>
      ))}
      <span
        data-anim="pop"
        style={at(t + 2400)}
        className={`absolute right-4 bottom-3 flex items-center gap-1.5 bg-surface text-ink shadow-device ${pill}`}
      >
        <PersonIcon size={16} className="text-magenta" />
        A person works it
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Security testing: three kinds, three questions                      */
/* ------------------------------------------------------------------ */

/** A scan reads down a list and flags a few items, then a person triages. */
export function ScanScene({ t }: { t: number }) {
  const flagged = [1, 4];
  return (
    <div className="flex h-full flex-col justify-center gap-2">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="relative flex items-center gap-2">
          <span
            aria-hidden="true"
            data-anim="flash"
            style={at(t + i * 380, 700)}
            className="absolute -inset-x-2 -inset-y-0.5 rounded-md bg-magenta-tint ring-1 ring-magenta/30"
          />
          <ServerIcon size={16} className="relative shrink-0 text-muted" />
          <span className="relative h-2.5 flex-1 rounded-full bg-hairline-strong" />
          {flagged.includes(i) && (
            <span
              data-anim="pop"
              style={at(t + i * 380 + 250)}
              className="relative flex size-5 items-center justify-center rounded-full bg-wattle text-surface"
            >
              <WarningIcon size={12} />
            </span>
          )}
        </div>
      ))}
      <span
        data-anim="pop"
        style={at(t + 2700)}
        className={`absolute right-3 bottom-2 flex items-center gap-1.5 bg-surface text-ink shadow-device ${pill}`}
      >
        <EyeIcon size={16} className="text-magenta" />
        Human triage
      </span>
    </div>
  );
}

/** An attacker tries three doors inside the agreed scope. */
export function DoorsScene({ t }: { t: number }) {
  const opens = 2;
  return (
    <div className="relative flex h-full items-center gap-2">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ink text-surface">
        <PersonIcon size={22} />
      </span>
      <div className="relative h-full flex-1 rounded-md border-2 border-dashed border-magenta/50 px-2 py-2">
        <span className="absolute -top-3 left-3 bg-shallows px-2 text-label font-semibold text-magenta-deep">
          In scope
        </span>
        <div className="flex h-full flex-col justify-around">
          {[0, 1, 2].map((d) => {
            const s = t + d * 1500;
            const open = d === opens;
            return (
              <div key={d} className="flex items-center gap-2">
                <div className="relative h-5 flex-1">
                  <Rail />
                  <Runner start={s} dur={800} stop={open ? 100 : 80} className="bg-stop" />
                </div>
                <span className="relative flex size-8 shrink-0 items-center justify-center rounded-md bg-surface text-muted ring-1 ring-hairline-strong">
                  <DoorIcon size={18} />
                  <span
                    data-anim={open ? "pop" : "flash"}
                    style={at(s + 750, open ? undefined : 1000)}
                    className={`absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full text-surface ring-2 ring-surface ${open ? "bg-stop" : "bg-settled"}`}
                  >
                    {open ? <WarningIcon size={11} /> : <CrossIcon size={11} />}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** A long, quiet route to a goal past sensors, ending in one question. */
export function StealthScene({ t }: { t: number }) {
  const d = "M14 96 C50 96 40 52 84 52 S120 90 150 66 S176 24 196 22";
  return (
    <div className="relative h-full">
      <svg viewBox="0 0 220 110" className="h-full w-full" aria-hidden="true" focusable="false">
        <path d={d} fill="none" stroke="var(--hairline-strong)" strokeWidth={3} strokeDasharray="1 7" strokeLinecap="round" />
        <path
          d={d}
          fill="none"
          stroke="var(--stop-red)"
          strokeWidth={3}
          strokeLinecap="round"
          pathLength={1}
          data-anim="draw"
          style={at(t, 3400, linear)}
        />
        {[
          [84, 36],
          [150, 50],
        ].map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <circle r={9} fill="var(--paper-white)" stroke="var(--hairline-strong)" />
            <path d="M-4 3 h8 M-3 3 v-4 a3 3 0 0 1 6 0 v4" fill="none" stroke="var(--slate-muted)" strokeWidth={1.4} strokeLinecap="round" />
          </g>
        ))}
        <circle
          r={5}
          fill="var(--deep-ink)"
          stroke="var(--paper-white)"
          strokeWidth={2}
          data-anim="travel"
          className="opacity-0"
          style={
            {
              ...at(t, 3400, linear),
              offsetPath: `path("${d}")`,
            } as CSSProperties
          }
        />
      </svg>
      <span className="absolute top-0 right-0 flex size-8 items-center justify-center rounded-full bg-surface text-magenta shadow-device">
        <FlagIcon size={16} />
      </span>
      <span
        data-anim="pop"
        style={at(t + 3500)}
        className={`absolute bottom-0 left-0 flex items-center gap-1.5 bg-surface text-ink shadow-device ${pill}`}
      >
        <SearchIcon size={16} className="text-magenta" />
        Did anyone notice?
      </span>
    </div>
  );
}

