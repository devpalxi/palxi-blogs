import type { CSSProperties } from "react";
import {
  CheckIcon,
  CrossIcon,
  KeyIcon,
  LockIcon,
} from "../../dineth/_components/icons";
import { at } from "../../dineth/_components/diagram-kit";
import { ServerIcon, RefreshIcon } from "./icons";
import { Ticker } from "./Ticker";
import { linear, type DiagramIcon } from "./shared";

/* ------------------------------------------------------------------ */
/* Testing coverage: the same amount of testing, spread two ways       */
/* ------------------------------------------------------------------ */

const YEARS = [600, 2500, 4400]; // when each year of testing starts
const CELLS = Array.from({ length: 12 }, (_, i) => i);

// Which of the 12 assets are tested in each year.
const SAME = [[0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]];
const SPREAD = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]];

function Grid({
  plan,
  lit,
}: {
  plan: number[][];
  lit: string;
}) {
  return (
    <div aria-hidden="true" className="mx-auto grid max-w-[260px] grid-cols-4 gap-2">
      {CELLS.map((c) => {
        const years = plan.flatMap((cells, y) => (cells.includes(c) ? [y] : []));
        return (
          <span
            key={c}
            className="relative aspect-square rounded-md bg-hairline-strong/60"
          >
            {years.map((y, k) => (
              <span
                key={y}
                data-anim={k === 0 ? "pop" : "ripple"}
                style={at(YEARS[y] + 150 + (c % 4) * 140, 450)}
                className={
                  k === 0
                    ? `absolute inset-0 flex items-center justify-center rounded-md text-surface ${lit}`
                    : "absolute inset-0 rounded-md ring-4 ring-wattle/45"
                }
              >
                {k === 0 && <CheckIcon size={18} />}
              </span>
            ))}
          </span>
        );
      })}
    </div>
  );
}

export function CoverageMap() {
  const panels = [
    {
      title: "The same few assets every year",
      plan: SAME,
      lit: "bg-wattle",
      counts: ["4 of 12 tested", "4 of 12 tested", "4 of 12 tested"],
      note: "A yearly test of the public website, and little else.",
    },
    {
      title: "Coverage that rotates",
      plan: SPREAD,
      lit: "bg-harbour-chart",
      counts: ["4 of 12 tested", "8 of 12 tested", "12 of 12 tested"],
      note: "A coverage map: what was tested, by whom, and what is still open.",
    },
  ];
  return (
    <div>
      <p
        data-anim="fade"
        style={at(0, 500)}
        className="mb-6 text-center font-serif text-headline font-semibold text-ink"
      >
        <Ticker
          phases={[
            { at: YEARS[0], dur: 0, from: 0, to: 0, text: "Year 1" },
            { at: YEARS[1], dur: 0, from: 0, to: 0, text: "Year 2" },
            { at: YEARS[2], dur: 0, from: 0, to: 0, text: "Year 3" },
          ]}
          rest="Three years of testing"
        />
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {panels.map((p, i) => (
          <section
            key={p.title}
            data-anim="rise"
            style={at(i * 150, 700)}
            className="rounded-md bg-surface p-5 shadow-device"
          >
            <p className="mb-4 text-center text-[1.125rem] font-semibold text-ink">
              {p.title}
            </p>
            <Grid plan={p.plan} lit={p.lit} />
            <p className="mt-4 text-center font-semibold text-ink">
              <Ticker
                phases={p.counts.map((text, y) => ({
                  at: YEARS[y] + 700,
                  dur: 0,
                  from: 0,
                  to: 0,
                  text,
                }))}
                rest={p.counts[2]}
              />
            </p>
            <p className="mt-1 text-center text-label text-copy">{p.note}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Backups: can one stolen admin account delete everything?            */
/* ------------------------------------------------------------------ */

const T = 700;
const RUN = 1400;

function Dot({
  start,
  stopAt = 100,
}: {
  start: number;
  /** Where the dot stops, as a percentage of the track. */
  stopAt?: number;
}) {
  return (
    <span
      aria-hidden="true"
      className="absolute inset-y-0 left-0"
      style={{ width: `${stopAt}%` }}
    >
      <span
        data-anim="ride-x"
        style={at(start, Math.round((RUN * stopAt) / 100), linear)}
        className="absolute top-1/2 left-0 size-5 -translate-1/2 rounded-full bg-stop ring-[3px] ring-surface"
      />
    </span>
  );
}

function Outcome({
  icon: Icon,
  label,
  result,
  time,
}: {
  icon: DiagramIcon;
  label: string;
  result: "deleted" | "safe";
  time: number;
}) {
  const deleted = result === "deleted";
  return (
    <div className="flex w-[5.5rem] flex-col items-center text-center">
      <span className="flex size-11 items-center justify-center rounded-full bg-shallows text-harbour ring-1 ring-hairline-strong">
        <Icon size={22} />
      </span>
      <span className="mt-1 text-label leading-tight font-semibold text-ink">
        {label}
      </span>
      <span
        data-anim="pop"
        style={at(time)}
        className={`mt-1 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-label font-semibold ${
          deleted ? "bg-stop-tint text-stop" : "bg-settled-tint text-settled"
        }`}
      >
        {deleted ? <CrossIcon size={14} /> : <CheckIcon size={14} />}
        {deleted ? "Deleted" : "Safe"}
      </span>
    </div>
  );
}

function Row({
  icon,
  label,
  walled,
}: {
  icon: DiagramIcon;
  label: string;
  walled: boolean;
}) {
  const stop = walled ? 62 : 100;
  const arrive = T + Math.round((RUN * stop) / 100);
  return (
    <div className="flex items-center">
      <div className="relative mx-2 h-10 flex-1">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-hairline-strong"
        />
        {walled && (
          <>
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-[66%] w-1.5 rounded-full bg-ink"
            />
            <span
              aria-hidden="true"
              data-anim="flash"
              style={at(arrive, 1200)}
              className="absolute top-1/2 left-[66%] flex size-7 -translate-1/2 items-center justify-center rounded-full bg-stop text-surface"
            >
              <CrossIcon size={16} />
            </span>
          </>
        )}
        <Dot start={T} stopAt={stop} />
      </div>
      <Outcome
        icon={icon}
        label={label}
        result={walled ? "safe" : "deleted"}
        time={arrive + 150}
      />
    </div>
  );
}

function Scenario({
  title,
  walled,
  delay,
}: {
  title: string;
  walled: boolean;
  delay: number;
}) {
  return (
    <section
      data-anim="rise"
      style={at(delay, 700)}
      className="rounded-md bg-surface p-5 shadow-device"
    >
      <p className="mb-4 flex items-center gap-2 text-[1.125rem] font-semibold text-ink">
        {walled ? (
          <LockIcon size={22} className="text-settled" />
        ) : (
          <KeyIcon size={22} className="text-stop" />
        )}
        {title}
      </p>
      <div className="grid grid-cols-[5rem_minmax(0,1fr)] items-center gap-1">
        <div className="flex flex-col items-center text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-ink text-surface">
            <KeyIcon size={24} />
          </span>
          <span className="mt-1 text-label leading-tight font-semibold text-ink">
            Stolen admin account
          </span>
        </div>
        <div className="space-y-5">
          <Row icon={ServerIcon} label="Production" walled={false} />
          <Row icon={RefreshIcon} label="Backups" walled={walled} />
        </div>
      </div>
    </section>
  );
}

export function BackupWall() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Scenario title="Backups walled off" walled delay={0} />
      <Scenario title="Same keys reach both" walled={false} delay={150} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Second checks on high-risk actions                                  */
/* ------------------------------------------------------------------ */

const ACTIONS = [
  "Changing member details",
  "Withdrawals",
  "Rollovers",
  "Investment switches",
];
const GATE = 55; // % along the track
const GAP = 2100;

export function SecondCheck() {
  return (
    <div>
      <ul
        data-anim="fade"
        style={at(0, 500)}
        className="mb-6 flex flex-wrap gap-x-8 gap-y-2 text-label text-copy"
      >
        <li className="flex items-center gap-2">
          <span className="size-4 rounded-full bg-stop" />
          Password alone
        </li>
        <li className="flex items-center gap-2">
          <span className="size-4 rounded-full bg-harbour-chart" />
          Password plus a second check
        </li>
      </ul>
      <ul className="space-y-6">
        {ACTIONS.map((action, i) => {
          const t = 500 + i * GAP;
          const stopRun = Math.round((RUN * GATE) / 100);
          const okStart = t + stopRun + 350;
          const reach = okStart + Math.round((RUN * GATE) / 100);
          return (
            <li key={action} className="grid items-center gap-2 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-6">
              <p data-anim="focus" style={at(t)} className="font-semibold text-ink">
                {action}
              </p>
              <div aria-hidden="true" className="pr-4">
                <div className="relative h-10">
                  <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-hairline-strong" />
                  {/* Password alone: rides up to the gate and is turned back. */}
                  <span
                    className="absolute inset-y-0 left-0"
                    style={{ width: `${GATE}%` }}
                  >
                    <span
                      data-anim="ride-x"
                      style={at(t, stopRun, linear)}
                      className="absolute top-1/2 left-0 size-5 -translate-1/2 rounded-full bg-stop ring-[3px] ring-surface"
                    />
                  </span>
                  {/* Password plus a second check: through the gate. */}
                  <span className="absolute inset-0">
                    <span
                      data-anim="ride-x"
                      style={at(okStart, RUN, linear)}
                      className="absolute top-1/2 left-0 size-5 -translate-1/2 rounded-full bg-harbour-chart ring-[3px] ring-surface"
                    />
                  </span>
                  {/* The gate */}
                  <span
                    className="absolute top-1/2 size-10 -translate-1/2"
                    style={{ left: `${GATE}%` } as CSSProperties}
                  >
                    <span className="absolute inset-0 flex items-center justify-center rounded-full bg-shallows text-muted ring-1 ring-hairline-strong">
                      <LockIcon size={20} />
                    </span>
                    <span
                      data-anim="flash"
                      style={at(t + stopRun, 1200)}
                      className="absolute inset-0 flex items-center justify-center rounded-full bg-stop text-surface"
                    >
                      <CrossIcon size={20} />
                    </span>
                    <span
                      data-anim="pop"
                      style={at(okStart + Math.round((RUN * GATE) / 100) - 200)}
                      className="absolute inset-0 flex items-center justify-center rounded-full bg-settled text-surface"
                    >
                      <CheckIcon size={20} />
                    </span>
                  </span>
                  <span className="absolute top-1/2 -right-3 size-6 -translate-y-1/2">
                    <span className="absolute inset-0 rounded-full bg-hairline-strong/70" />
                    <span
                      data-anim="pop"
                      style={at(reach)}
                      className="absolute inset-0 flex items-center justify-center rounded-full bg-harbour text-surface"
                    >
                      <CheckIcon size={14} />
                    </span>
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
