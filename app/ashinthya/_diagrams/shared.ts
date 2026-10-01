import type { ComponentType, CSSProperties, SVGProps } from "react";

export type DiagramIcon = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
export type Tone = "default" | "done" | "caution" | "stop";

export const chipTone: Record<Tone, string> = {
  default: "bg-harbour-tint text-harbour-deep",
  done: "bg-settled-tint text-settled",
  caution: "bg-wattle-tint text-wattle",
  stop: "bg-stop-tint text-stop",
};

// Solid fill for a lit station or marker of each tone.
export const solidTone: Record<Tone, string> = {
  default: "bg-harbour",
  done: "bg-settled",
  caution: "bg-wattle",
  stop: "bg-stop",
};

export const ringTone: Record<Tone, string> = {
  default: "ring-harbour/40",
  done: "ring-settled/40",
  caution: "ring-wattle/40",
  stop: "ring-stop/40",
};

export const linear = { "--ease": "linear" } as CSSProperties;

// Timeline of a journey: stop i is reached at START + i * LEG.
export const JOURNEY_START = 500;
export const JOURNEY_LEG = 1100;
export const stopTime = (i: number, start = JOURNEY_START, leg = JOURNEY_LEG) =>
  start + i * leg;
