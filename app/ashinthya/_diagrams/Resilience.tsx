import type { ReactNode } from "react";
import { ArrowRightIcon } from "../../dineth/_components/icons";
import { at } from "../../dineth/_components/diagram-kit";
import { Fact } from "./Cards";
import { BuildingIcon, FlagIcon, HeartbeatIcon, SendIcon, RefreshIcon } from "./icons";
import { chipTone, linear } from "./shared";

// CPS 230 in three ideas: what must keep running, how much disruption is
// tolerated, and which vendors the entity relies on.
const PANEL = 3400;
const t = (i: number) => 300 + i * PANEL;

const OPERATIONS = [
  "Payments, deposits, claims or fund administration",
  "Customer enquiries",
  "The systems and infrastructure that support them",
];

// Each limit is a bar that fills up to its marker and no further.
const LIMITS = [
  { label: "Longest acceptable disruption", stop: 62 },
  { label: "Most data you can afford to lose", stop: 38 },
  { label: "Minimum service in a degraded mode", stop: 78 },
];

const REGISTER = [
  "Core technology services by default",
  "Kept on a register",
  "Submitted to APRA every year",
];

function Panel({
  index,
  title,
  subtitle,
  children,
  link,
}: {
  index: number;
  title: string;
  subtitle: string;
  children: ReactNode;
  link?: boolean;
}) {
  const start = t(index);
  return (
    <li
      data-anim="rise"
      style={at(start, 700)}
      className="relative rounded-md bg-surface p-5 shadow-device"
    >
      {link && (
        <span
          aria-hidden="true"
          data-anim="pop"
          style={at(t(index + 1) - 250)}
          className="absolute top-9 -right-6 z-10 hidden size-8 items-center justify-center rounded-full bg-magenta text-surface md:flex"
        >
          <ArrowRightIcon size={18} />
        </span>
      )}
      <span
        data-anim="pop"
        style={at(start + 200)}
        className={`inline-block rounded-full px-3 py-1 text-label font-semibold ${chipTone.default}`}
      >
        {title}
      </span>
      <p data-anim="fade" style={at(start + 350)} className="mt-3 text-label font-semibold text-ink">
        {subtitle}
      </p>
      <div className="mt-4">{children}</div>
    </li>
  );
}

export function Resilience() {
  return (
    <ol className="grid gap-5 md:grid-cols-3 md:gap-3">
      <Panel index={0} title="Critical operations" subtitle="What must keep running" link>
        <ul className="space-y-3">
          {OPERATIONS.map((op, i) => {
            const ti = t(0) + 700 + i * 650;
            return (
              <li
                key={op}
                data-anim="rise"
                style={at(ti, 500)}
                className="relative overflow-hidden rounded-md bg-shallows px-3.5 py-3"
              >
                <span
                  aria-hidden="true"
                  data-anim="flash"
                  style={at(ti + 300, 1100)}
                  className="absolute inset-0 rounded-md ring-2 ring-settled/40"
                />
                <p className="relative flex items-start gap-2.5 text-label font-medium text-ink">
                  <HeartbeatIcon size={20} className="mt-0.5 shrink-0 text-settled" />
                  {op}
                </p>
                <svg
                  viewBox="0 0 160 16"
                  className="relative mt-1.5 h-4 w-full"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M0 8 H40 L46 2 L54 14 L60 8 H100 L106 2 L114 14 L120 8 H160"
                    fill="none"
                    stroke="var(--settled-green)"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength={1}
                    data-anim="draw"
                    style={at(ti + 200, 900, linear)}
                  />
                </svg>
              </li>
            );
          })}
        </ul>
      </Panel>

      <Panel index={1} title="Tolerance levels" subtitle="Three limits the board approves" link>
        <ul className="space-y-5">
          {LIMITS.map((l, i) => {
            const ti = t(1) + 700 + i * 700;
            return (
              <li key={l.label}>
                <p className="text-label text-copy">{l.label}</p>
                <div aria-hidden="true" className="relative mt-2 h-4 rounded-full bg-hairline-strong/60">
                  <span
                    data-anim="grow-x"
                    style={{ ...at(ti, 900, linear), width: `${l.stop}%` }}
                    className="absolute inset-y-0 left-0 rounded-full bg-magenta-chart"
                  />
                  <span
                    data-anim="pop"
                    style={{ ...at(ti + 900), left: `${l.stop}%` }}
                    className="absolute top-1/2 flex size-7 -translate-1/2 items-center justify-center rounded-full bg-stop text-surface ring-[3px] ring-surface"
                  >
                    <FlagIcon size={14} />
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        <p data-anim="fade" style={at(t(1) + 3000)} className="mt-4 text-label text-muted">
          Illustration: each limit is a line the service must not cross.
        </p>
      </Panel>

      <Panel index={2} title="Material service providers" subtitle="Vendors the entity relies on">
        <ul className="space-y-2 text-label text-copy">
          {REGISTER.map((r, i) => (
            <Fact key={r} text={r} time={t(2) + 700 + i * 430} />
          ))}
        </ul>
        <div aria-hidden="true" className="mt-5 flex items-center">
          <span
            data-anim="pop"
            style={at(t(2) + 2100)}
            className="flex size-12 shrink-0 items-center justify-center rounded-md bg-shallows text-magenta ring-1 ring-hairline-strong"
          >
            <BuildingIcon size={24} />
          </span>
          <span className="relative mx-2 h-10 flex-1">
            <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-hairline-strong" />
            <span
              data-anim="ride-x"
              style={at(t(2) + 2300, 1000, linear)}
              className="absolute top-1/2 left-0 z-10 flex size-8 -translate-1/2 items-center justify-center rounded-md bg-ink text-surface ring-[3px] ring-surface"
            >
              <SendIcon size={16} />
            </span>
          </span>
          <span
            data-anim="pop"
            style={at(t(2) + 3300)}
            className="flex shrink-0 items-center gap-1.5 rounded-full bg-settled px-3 py-1.5 text-label font-semibold text-surface"
          >
            <RefreshIcon size={16} />
            APRA
          </span>
        </div>
        <p data-anim="fade" style={at(t(2) + 3300)} className="mt-2 text-label text-muted">
          The register goes to APRA each year.
        </p>
      </Panel>
    </ol>
  );
}
