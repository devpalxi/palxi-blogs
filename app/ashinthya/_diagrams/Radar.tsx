import type { CSSProperties, ReactNode } from "react";
import { CountUp } from "../../dineth/_components/CountUp";
import { at } from "../../dineth/_components/diagram-kit";
import { WarningIcon } from "./icons";
import { chipTone, linear, type DiagramIcon } from "./shared";

export type Finding = {
  icon: DiagramIcon;
  title: string;
  detail: string;
};

const START = 700;
const SWEEP = 5200;

/**
 * A radar beam sweeps once round a dial. Each finding sits on the dial at its
 * own angle and flags up as the beam passes, while a list beside it reads the
 * same findings out in order. A big number in the middle counts up.
 */
export function Radar({
  findings,
  centre,
  intro,
}: {
  findings: Finding[];
  intro?: ReactNode;
  centre: { to: number; suffix?: string; caption: ReactNode };
}) {
  const n = findings.length;
  const angle = (i: number) => ((i + 0.5) * 360) / n; // degrees clockwise from the top
  const when = (i: number) => START + Math.round((angle(i) / 360) * SWEEP * 0.94);
  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,360px)_minmax(0,1fr)] md:gap-12">
      <div
        data-anim="rise"
        style={at(0, 700)}
        className="relative mx-auto aspect-square w-full max-w-[22rem]"
      >
        {/* Dial: rings and crosshair. */}
        <span className="absolute inset-0 rounded-full bg-surface shadow-device ring-1 ring-hairline-strong" />
        {[0.72, 0.44].map((r) => (
          <span
            key={r}
            aria-hidden="true"
            className="absolute rounded-full border border-hairline-strong"
            style={{ inset: `${((1 - r) / 2) * 100}%` }}
          />
        ))}
        <span aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px bg-hairline" />
        <span aria-hidden="true" className="absolute inset-y-0 left-1/2 w-px bg-hairline" />

        {/* The beam. */}
        <span
          aria-hidden="true"
          data-anim="spin"
          style={at(START, SWEEP, linear)}
          className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_250deg,rgb(0_144_135/0.10)_300deg,rgb(0_144_135/0.45)_360deg)]"
        />

        {/* The centre readout. */}
        <div className="absolute inset-[27%] flex flex-col items-center justify-center rounded-full bg-surface text-center shadow-device ring-1 ring-hairline-strong">
          <span className="font-serif text-headline leading-none font-semibold text-ink">
            <CountUp to={centre.to} suffix={centre.suffix} delay={START} duration={SWEEP * 0.9} />
          </span>
          <span className="mt-1 max-w-[8rem] text-label leading-tight text-muted">
            {centre.caption}
          </span>
        </div>

        {/* Findings, flagged as the beam reaches them. */}
        {findings.map((f, i) => {
          const a = (angle(i) * Math.PI) / 180;
          const Icon = f.icon;
          const t = when(i);
          return (
            <span
              key={f.title}
              className="absolute size-12 -translate-1/2 sm:size-14"
              style={{
                left: `${50 + 40 * Math.sin(a)}%`,
                top: `${50 - 40 * Math.cos(a)}%`,
              }}
            >
              <span
                aria-hidden="true"
                data-anim="ripple"
                style={at(t)}
                className="absolute inset-0 rounded-full ring-[6px] ring-wattle/40"
              />
              <span className="absolute inset-0 flex items-center justify-center rounded-full bg-surface text-muted ring-1 ring-hairline-strong">
                <Icon size={24} />
              </span>
              <span
                aria-hidden="true"
                data-anim="pop"
                style={at(t)}
                className="absolute inset-0 flex items-center justify-center rounded-full bg-wattle text-surface shadow-[0_0_0_6px_rgb(132_89_34/0.14)]"
              >
                <Icon size={24} />
              </span>
              <span
                aria-hidden="true"
                data-anim="pop"
                style={at(t + 200)}
                className="absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full bg-stop text-surface ring-2 ring-surface"
              >
                <WarningIcon size={14} />
              </span>
            </span>
          );
        })}
      </div>

      <div>
        {intro && (
          <p
            data-anim="fade"
            style={at(200, 600)}
            className="mb-6 max-w-[30rem] text-copy"
          >
            {intro}
          </p>
        )}
        <ol className="space-y-5">
        {findings.map((f, i) => {
          const t = when(i);
          return (
            <li
              key={f.title}
              data-anim="focus"
              style={at(t)}
              className="flex gap-4"
            >
              <span
                data-anim="pop"
                style={{ ...at(t) } as CSSProperties}
                className={`flex size-8 shrink-0 items-center justify-center rounded-full text-label font-bold ${chipTone.caution}`}
              >
                {i + 1}
              </span>
              <div>
                <p className="text-[1.125rem] leading-snug font-semibold text-ink">
                  {f.title}
                </p>
                <p className="mt-1 text-label text-copy">{f.detail}</p>
              </div>
            </li>
          );
        })}
        </ol>
      </div>
    </div>
  );
}
