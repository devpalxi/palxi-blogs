import type { ComponentType, CSSProperties, SVGProps } from "react";
import { at } from "../../_components/diagram-kit";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

const linear = { "--ease": "linear" } as CSSProperties;

/** Railway track: two rails with sleepers across them. Static. */
export function Track({ d, muted = false }: { d: string; muted?: boolean }) {
  return (
    <g fill="none" strokeLinecap="butt">
      <path d={d} stroke="var(--hairline-strong)" strokeWidth={14} opacity={muted ? 0.55 : 1} />
      <path d={d} stroke="var(--shallows)" strokeWidth={8} />
      <path
        d={d}
        stroke="var(--hairline-strong)"
        strokeWidth={22}
        strokeDasharray="2.5 13"
        opacity={muted ? 0.45 : 0.8}
      />
    </g>
  );
}

/** The painted route the train leaves behind it. */
export function Trail({
  d,
  start,
  dur,
  color = "var(--harbour-green)",
}: {
  d: string;
  start: number;
  dur: number;
  color?: string;
}) {
  return (
    <path
      d={d}
      pathLength={1}
      fill="none"
      stroke={color}
      strokeWidth={6}
      strokeLinecap="round"
      strokeLinejoin="round"
      data-anim="draw"
      style={at(start, dur, linear)}
    />
  );
}

/** A train: a rounded carriage that follows `d`, then vanishes at the end. */
export function Train({
  d,
  start,
  dur,
  tone = "go",
}: {
  d: string;
  start: number;
  dur: number;
  tone?: "go" | "ink";
}) {
  const fill = tone === "go" ? "var(--harbour-green-deep)" : "var(--deep-ink)";
  return (
    <g
      data-anim="travel"
      className="opacity-0"
      style={at(start, dur, { offsetPath: `path("${d}")`, offsetRotate: "auto", "--ease": "linear" } as CSSProperties)}
    >
      <rect x={-17} y={-10} width={34} height={20} rx={7} fill="var(--paper-white)" />
      <rect x={-13} y={-6} width={26} height={12} rx={4} fill={fill} />
      <circle cx={9} cy={0} r={2.5} fill="var(--paper-white)" />
    </g>
  );
}

/** A station on the line. Lights up (and ripples) when the train arrives. */
export function Station({
  x,
  y,
  icon: Icon,
  time,
  fill = "var(--harbour-green)",
  r = 28,
}: {
  x: number;
  y: number;
  icon: Icon;
  time: number;
  fill?: string;
  r?: number;
}) {
  const s = (r - 4) * 0.9;
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill="none" stroke={fill} strokeWidth={3} data-anim="ripple" style={at(time)} />
      <circle r={r} fill="var(--paper-white)" stroke="var(--hairline-strong)" strokeWidth={1.5} />
      <Icon x={-s / 2} y={-s / 2} size={s} color="var(--slate-muted)" />
      <g data-anim="pop" style={at(time)}>
        <circle r={r} fill={fill} />
        <Icon x={-s / 2} y={-s / 2} size={s} color="var(--paper-white)" />
      </g>
    </g>
  );
}

/** When the train reaches fraction f of a route that starts at `start`. */
export function arrival(start: number, dur: number, f: number) {
  return Math.round(start + f * dur);
}
