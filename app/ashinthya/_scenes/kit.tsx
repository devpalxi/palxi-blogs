import type { ReactNode } from "react";

/*
 * Small helpers for SVG scenes animated with SVG's own timeline (SMIL:
 * <animate>, <animateTransform>, <animateMotion>), not CSS classes.
 *
 * Each scene is an <svg data-scene="END">. The shared Diagram component
 * holds its clock at 0 until the diagram scrolls into view, restarts it on
 * "Play again", and jumps to END (the finished frame) for reduced motion.
 * Without JavaScript the scene simply plays once on load.
 *
 * Every animation freezes on its last value, so the base attributes of an
 * element are its *starting* state and the animations carry it to the end.
 * Times are in seconds.
 */

export const ease = {
  out: "0.22 1 0.36 1",
  inOut: "0.65 0 0.35 1",
  in: "0.55 0 1 0.45",
} as const;

type Ease = string | null;

const sec = (n: number) => `${Math.round(n * 1000) / 1000}s`;

function curve(
  count: number,
  times: number[] | undefined,
  e: Ease,
  discrete?: boolean,
) {
  const keyTimes = (times ?? Array.from({ length: count }, (_, i) => i / (count - 1))).join(";");
  if (discrete) return { keyTimes, calcMode: "discrete" };
  if (!e) return { keyTimes, calcMode: "linear" };
  return {
    keyTimes,
    calcMode: "spline",
    keySplines: Array.from({ length: count - 1 }, () => e).join(";"),
  };
}

type Timing = {
  at: number;
  dur?: number;
  ease?: Ease;
  /** 0 to 1, one per value. Evenly spaced when left out. */
  times?: number[];
  discrete?: boolean;
};

/** Animates one attribute through a list of values, then holds the last. */
export function Anim({
  attr,
  values,
  at,
  dur = 0.6,
  ease: e = ease.out,
  times,
  discrete,
}: Timing & { attr: string; values: (string | number)[] }) {
  return (
    <animate
      attributeName={attr}
      values={values.join(";")}
      begin={sec(at)}
      dur={sec(dur)}
      fill="freeze"
      {...curve(values.length, times, e, discrete)}
    />
  );
}

/** Same as Anim, for transform (translate, scale or rotate). */
export function Turn({
  type,
  values,
  at,
  dur = 0.6,
  ease: e = ease.out,
  times,
}: Timing & {
  type: "translate" | "scale" | "rotate";
  values: (string | number)[];
}) {
  return (
    <animateTransform
      attributeName="transform"
      type={type}
      values={values.join(";")}
      begin={sec(at)}
      dur={sec(dur)}
      fill="freeze"
      {...curve(values.length, times, e)}
    />
  );
}

/**
 * Moves the parent along a path. The path is relative to where the parent
 * already sits, so start it at "M0 0".
 */
export function Move({
  path,
  at,
  dur = 1,
  ease: e = ease.inOut,
  points,
  times,
  rotate,
}: Timing & {
  path: string;
  /** Distances along the path (0 to 1) at each of `times`. */
  points?: number[];
  rotate?: "auto";
}) {
  const p = points ?? [0, 1];
  return (
    <animateMotion
      path={path}
      begin={sec(at)}
      dur={sec(dur)}
      fill="freeze"
      keyPoints={p.join(";")}
      rotate={rotate}
      {...curve(p.length, times, e)}
    />
  );
}

export const FadeIn = ({ at, dur = 0.5 }: { at: number; dur?: number }) => (
  <Anim attr="opacity" values={[0, 1]} at={at} dur={dur} />
);

export const FadeOut = ({ at, dur = 0.4 }: { at: number; dur?: number }) => (
  <Anim attr="opacity" values={[1, 0]} at={at} dur={dur} />
);

/** Draws a stroke in. The element needs `{...drawable}`. */
export const Draw = ({ at, dur = 0.8, ease: e = ease.inOut }: { at: number; dur?: number; ease?: Ease }) => (
  <Anim attr="stroke-dashoffset" values={[1, 0]} at={at} dur={dur} ease={e} />
);

export const drawable = {
  pathLength: 1,
  strokeDasharray: "1",
  strokeDashoffset: 1,
} as const;

/** Scales its children up from nothing about (x, y), with a small overshoot. */
export function Pop({
  x,
  y,
  at,
  dur = 0.45,
  children,
}: {
  x: number;
  y: number;
  at: number;
  dur?: number;
  children: ReactNode;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g transform="scale(0)">
        <Turn type="scale" values={[0, 1.18, 1]} times={[0, 0.6, 1]} at={at} dur={dur} />
        {children}
      </g>
    </g>
  );
}

/** A ring that swells out from (x, y) and fades: something just happened here. */
export function Pulse({
  x,
  y,
  at,
  from = 10,
  to = 46,
  colour,
  width = 4,
  dur = 0.9,
}: {
  x: number;
  y: number;
  at: number;
  from?: number;
  to?: number;
  colour: string;
  width?: number;
  dur?: number;
}) {
  return (
    <circle cx={x} cy={y} r={from} fill="none" stroke={colour} strokeWidth={width} opacity={0}>
      <Anim attr="r" values={[from, to]} at={at} dur={dur} />
      <Anim attr="opacity" values={[0.8, 0]} at={at} dur={dur} ease={null} />
    </circle>
  );
}

export const C = {
  ink: "var(--deep-ink)",
  copy: "var(--body-ink)",
  muted: "var(--slate-muted)",
  hair: "var(--hairline-strong)",
  hairSoft: "var(--hairline)",
  paper: "var(--paper-white)",
  shallows: "var(--shallows)",
  magenta: "var(--magenta)",
  deep: "var(--magenta-deep)",
  tint: "var(--magenta-tint)",
  chart: "var(--magenta-chart)",
  settled: "var(--settled-green)",
  settledTint: "var(--settled-green-tint)",
  stop: "var(--stop-red)",
  stopTint: "var(--stop-red-tint)",
  wattle: "var(--wattle-amber)",
  wattleTint: "var(--wattle-amber-tint)",
} as const;

/**
 * The same tokens as literal colours. SMIL can't interpolate var(), so any
 * fill or stroke that animates uses these (keep in step with globals.css).
 */
export const HEX = {
  ink: "#222124",
  copy: "#3b3a3e",
  paper: "#ffffff",
  shallows: "#f6f6f6",
  magenta: "#b8339b",
  tint: "#fbeff8",
  chart: "#b8339b",
  settled: "#22683b",
  settledTint: "#e2f6e6",
  stop: "#a83630",
  stopTint: "#ffebe8",
  wattle: "#845922",
  wattleTint: "#fff2d6",
} as const;

/** The outer <svg> of a scene. `end` is when its last animation finishes. */
export function Scene({
  viewBox,
  end,
  label,
  className = "",
  children,
}: {
  viewBox: string;
  end: number;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox={viewBox}
      data-scene={end}
      role="img"
      aria-label={label}
      focusable="false"
      className={`block h-auto w-full overflow-visible ${className}`}
    >
      {children}
    </svg>
  );
}

/** A small static copy of a scene's pictogram, to tie a text label to the drawing. */
export function Mini({
  children,
  box = 80,
  className = "size-11",
}: {
  children: ReactNode;
  box?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox={`${-box / 2} ${-box / 2} ${box} ${box}`}
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 ${className}`}
    >
      {children}
    </svg>
  );
}

/** An arc from angle a0 to a1 (degrees, 0 = 12 o'clock, clockwise). */
export function arcPath(cx: number, cy: number, r: number, a0: number, a1: number) {
  const pt = (a: number) => {
    const t = ((a - 90) * Math.PI) / 180;
    return `${(cx + r * Math.cos(t)).toFixed(2)} ${(cy + r * Math.sin(t)).toFixed(2)}`;
  };
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M${pt(a0)} A${r} ${r} 0 ${large} 1 ${pt(a1)}`;
}

/** Shows its children only between `from` and `to` (seconds), with no fade. */
export function Window({ from, to, children }: { from: number; to?: number; children: ReactNode }) {
  return (
    <g opacity={0}>
      <Anim attr="opacity" values={[0, 1]} at={from} dur={0.01} ease={null} />
      {to != null && <Anim attr="opacity" values={[1, 0]} at={to} dur={0.01} ease={null} />}
      {children}
    </g>
  );
}

/** A tick inside a filled circle, drawn about the origin. */
export function TickBadge({ r = 16, fill = C.settled }: { r?: number; fill?: string }) {
  const k = r / 16;
  return (
    <>
      <circle r={r} fill={fill} />
      <path
        d={`M${-7 * k} ${0.5 * k} L${-2 * k} ${5.5 * k} L${7.5 * k} ${-5 * k}`}
        fill="none"
        stroke={C.paper}
        strokeWidth={3.2 * k}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

/** A cross inside a filled circle, drawn about the origin. */
export function CrossBadge({ r = 16, fill = C.stop }: { r?: number; fill?: string }) {
  const k = (r / 16) * 5.5;
  return (
    <>
      <circle r={r} fill={fill} />
      <path
        d={`M${-k} ${-k} L${k} ${k} M${k} ${-k} L${-k} ${k}`}
        stroke={C.paper}
        strokeWidth={3.2 * (r / 16)}
        strokeLinecap="round"
      />
    </>
  );
}
