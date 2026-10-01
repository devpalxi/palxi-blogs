import type { CSSProperties, ReactNode } from "react";
import { at } from "../../dineth/_components/diagram-kit";
import { linear, type DiagramIcon } from "./shared";

export type Spoke = {
  icon: DiagramIcon;
  title: string;
  detail: string;
  /** Data flows out of the hub to this one, instead of into the hub. */
  out?: boolean;
};

// The map is drawn on a 100 x 66 grid so lines and cards share coordinates.
const W = 100;
const H = 62;
const CX = 50;
const CY = 31;
const RX = 33;
const RY = 22;

const START = 600;
const GAP = 780;

const pos = (i: number, n: number) => {
  // Offset by half a step so no part sits straight above or below the hub.
  const a = ((i + 0.5) * 2 * Math.PI) / n;
  return { x: CX + RX * Math.sin(a), y: CY - RY * Math.cos(a) };
};

/**
 * A hub with parts around it. The hub rises first; then a line grows to each
 * part in turn and a small marker runs along it, into the hub (or out of it).
 * On phones the same parts are shown as the `fallback` list instead.
 */
export function Hub({
  hub,
  spokes,
  fallback,
}: {
  hub: { icon: DiagramIcon; title: string; detail: string };
  spokes: Spoke[];
  fallback: ReactNode;
}) {
  const n = spokes.length;
  const HubIcon = hub.icon;
  return (
    <div>
      <div className="md:hidden">{fallback}</div>
      <div
        className="relative mx-auto hidden w-full max-w-[1000px] md:block"
        style={{ aspectRatio: `${W} / ${H}` }}
      >
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="absolute inset-0 size-full"
          aria-hidden="true"
          focusable="false"
        >
          {spokes.map((s, i) => {
            const p = pos(i, n);
            const t = START + i * GAP;
            const d = s.out
              ? `M${CX} ${CY} L${p.x} ${p.y}`
              : `M${p.x} ${p.y} L${CX} ${CY}`;
            return (
              <g key={s.title}>
                <line
                  x1={CX}
                  y1={CY}
                  x2={p.x}
                  y2={p.y}
                  stroke="var(--hairline-strong)"
                  strokeWidth={0.45}
                  strokeDasharray="1.2 1.4"
                  strokeLinecap="round"
                />
                <line
                  x1={CX}
                  y1={CY}
                  x2={p.x}
                  y2={p.y}
                  stroke="var(--harbour-green)"
                  strokeWidth={0.6}
                  strokeLinecap="round"
                  pathLength={1}
                  data-anim="draw"
                  style={at(t, 500, linear)}
                />
                <circle
                  r={1.25}
                  fill="var(--deep-ink)"
                  stroke="var(--paper-white)"
                  strokeWidth={0.45}
                  data-anim="travel"
                  className="opacity-0"
                  style={
                    {
                      ...at(t + 450, 900, linear),
                      offsetPath: `path("${d}")`,
                    } as CSSProperties
                  }
                />
              </g>
            );
          })}
        </svg>

        {/* The hub. */}
        <div
          className="absolute z-10 w-[25%] min-w-[11.5rem] -translate-1/2"
          style={{ left: `${CX}%`, top: `${(CY / H) * 100}%` }}
        >
          <div data-anim="rise" style={at(0, 700)} className="relative">
            {spokes.map((_, i) => (
              <span
                key={i}
                aria-hidden="true"
                data-anim="ripple"
                style={at(START + i * GAP + 1250)}
                className="absolute inset-0 rounded-xl ring-[6px] ring-settled/35"
              />
            ))}
            <div className="relative rounded-xl bg-settled px-5 py-5 text-center text-surface shadow-[0_0_0_10px_rgb(34_104_59/0.12)]">
              <HubIcon size={36} className="mx-auto" />
              <p className="mt-2 font-serif text-title leading-tight font-semibold">
                {hub.title}
              </p>
              <p className="mt-1 text-label">{hub.detail}</p>
            </div>
          </div>
        </div>

        {/* The parts. */}
        {spokes.map((s, i) => {
          const p = pos(i, n);
          const t = START + i * GAP;
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              data-anim="rise"
              style={{
                ...at(t + 250, 600),
                left: `${(p.x / W) * 100}%`,
                top: `${(p.y / H) * 100}%`,
              }}
              className="absolute z-10 w-[29%] -translate-1/2"
            >
              <div className="flex gap-3 rounded-md bg-surface p-3.5 shadow-device ring-1 ring-hairline">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-harbour text-surface">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="text-[1.0625rem] leading-snug font-semibold text-ink">
                    {s.title}
                  </p>
                  <p className="mt-0.5 text-label leading-snug text-copy">
                    {s.detail}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
