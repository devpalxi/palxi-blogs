import type { CSSProperties, ReactNode } from "react";
import { QuestionIcon, UsersIcon } from "../../_components/icons";
import { at } from "../../_components/diagram-kit";

// Customers always reach exactly one live copy. Phase 1: copy A is live while
// copy B is prepared. Phase 2: everyone moves to B in an instant. Phase 3:
// something's wrong, so everyone moves straight back to A.
const T2 = 2900; // the switch to B
const T3 = 5500; // the switch back
const W = T3 - T2;

const PA = "M200 180 C400 180 420 80 620 80";
const PB = "M200 180 C400 180 420 280 620 280";

const grid = "[grid-area:1/1]";

function Traffic({ d, starts }: { d: string; starts: number[] }) {
  return (
    <>
      {starts.map((s) => (
        <circle
          key={s}
          r={7}
          fill="var(--harbour-green)"
          data-anim="travel"
          className="opacity-0"
          style={at(s, 1200, {
            offsetPath: `path("${d}")`,
            "--ease": "var(--ease-out-quart)",
          } as CSSProperties)}
        />
      ))}
    </>
  );
}

function Chip({
  tone,
  children,
}: {
  tone: "live" | "wait" | "fix";
  children: ReactNode;
}) {
  const styles = {
    live: "bg-harbour text-surface",
    wait: "bg-hairline text-muted",
    fix: "bg-wattle-tint text-wattle",
  }[tone];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-label font-semibold ${styles}`}
    >
      {children}
    </span>
  );
}

function Box({
  name,
  version,
  top,
  ring,
  status,
}: {
  name: string;
  version: string;
  top: string;
  ring: ReactNode;
  status: ReactNode;
}) {
  return (
    <div
      className="absolute left-[62%] h-[33%] w-[36%] rounded-md bg-surface ring-1 ring-hairline-strong"
      style={{ top }}
    >
      {ring}
      <div className="relative flex h-full flex-col justify-between px-5 py-4">
        <div>
          <p className="text-[1.1875rem] font-semibold text-ink">{name}</p>
          <p className="text-label text-muted">{version}</p>
        </div>
        <div className="grid justify-items-start">{status}</div>
      </div>
    </div>
  );
}

const Live = () => (
  <Chip tone="live">
    <UsersIcon size={16} />
    Live
  </Chip>
);

export function TwoCopies() {
  return (
    <div>
      <div className="relative">
        <svg viewBox="0 0 1000 360" className="w-full" aria-hidden="true" focusable="false">
          <g fill="none" strokeLinecap="round">
            <path d={PA} stroke="var(--hairline-strong)" strokeWidth={4} strokeDasharray="1 11" />
            <path d={PB} stroke="var(--hairline-strong)" strokeWidth={4} strokeDasharray="1 11" />
            {/* The live connection: on to A, then B, then back to A. */}
            <path d={PA} stroke="var(--harbour-green)" strokeWidth={6} data-anim="dip" style={at(T2, W)} />
            <path d={PB} stroke="var(--harbour-green)" strokeWidth={6} data-anim="window" style={at(T2, W)} />
          </g>
          <Traffic d={PA} starts={[500, 950, 1400]} />
          <Traffic d={PB} starts={[T2 + 350, T2 + 800, T2 + 1250]} />
          <Traffic d={PA} starts={[T3 + 350, T3 + 800, T3 + 1250]} />
        </svg>

        <div
          data-anim="rise"
          style={at(0, 700)}
          className="absolute top-1/2 left-[1%] w-[16%] -translate-y-1/2 text-center"
        >
          <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-ink text-surface">
            <UsersIcon size={28} />
          </span>
          <p className="mt-2 text-[1.0625rem] font-semibold text-ink">Customers</p>
        </div>

        <Box
          name="Copy A"
          version="Current version"
          top="5.5%"
          ring={
            <span
              data-anim="dip"
              style={at(T2, W)}
              className="absolute inset-0 rounded-md bg-harbour-tint ring-2 ring-harbour"
            />
          }
          status={
            <>
              <span data-anim="swap-out" style={at(T2, 500)} className={grid}>
                <Live />
              </span>
              <span data-anim="window" style={at(T2, W)} className={grid}>
                <Chip tone="wait">Standing by</Chip>
              </span>
              <span data-anim="fade" style={at(T3, 500)} className={grid}>
                <Chip tone="live">
                  <UsersIcon size={16} />
                  Live again
                </Chip>
              </span>
            </>
          }
        />
        <Box
          name="Copy B"
          version="New version"
          top="61.5%"
          ring={
            <span
              data-anim="window"
              style={at(T2, W)}
              className="absolute inset-0 rounded-md bg-harbour-tint ring-2 ring-harbour"
            />
          }
          status={
            <>
              <span data-anim="swap-out" style={at(T2, 500)} className={`${grid} w-full`}>
                <span className="mb-2 block text-label text-muted">Getting ready</span>
                <span className="block h-2.5 w-full rounded-full bg-hairline-strong">
                  <span
                    data-anim="grow-x"
                    style={at(400, 2200, { "--ease": "linear" } as CSSProperties)}
                    className="block h-full w-full rounded-full bg-harbour-chart"
                  />
                </span>
              </span>
              <span data-anim="window" style={at(T2, W)} className={grid}>
                <Live />
              </span>
              <span data-anim="fade" style={at(T3, 500)} className={grid}>
                <Chip tone="fix">
                  <QuestionIcon size={16} />
                  Being fixed
                </Chip>
              </span>
            </>
          }
        />
      </div>

      {/* Three captions share one spot; each is on screen for its own phase. */}
      <div className="mt-6 grid rounded-md bg-surface px-6 py-5">
        <div data-anim="swap-out" style={at(T2, 500)} className={grid}>
          <p className="font-serif text-title font-semibold text-ink">1. Prepare</p>
          <p className="mt-1 text-copy">
            Customers use copy A. The new version is set up and checked on copy B.
          </p>
        </div>
        <div data-anim="window" style={at(T2, W)} className={grid}>
          <p className="font-serif text-title font-semibold text-ink">2. Switch</p>
          <p className="mt-1 text-copy">
            Customers are moved across to copy B in an instant. No closed sign.
          </p>
        </div>
        <div data-anim="fade" style={at(T3, 500)} className={grid}>
          <p className="font-serif text-title font-semibold text-ink">3. Safety net</p>
          <p className="mt-1 text-copy">
            Copy A stays ready. If anything looks wrong, we switch straight back.
          </p>
        </div>
      </div>
    </div>
  );
}
