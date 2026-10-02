"use client";

import { useEffect, useRef } from "react";

export type TickPhase = {
  /** When the phase starts (ms on the diagram's timeline). */
  at: number;
  /** How long it takes to count from `from` to `to`. 0 = just show it. */
  dur: number;
  from: number;
  to: number;
  prefix?: string;
  suffix?: string;
  /** Shown when the number is exactly 1, e.g. " hour". */
  singular?: string;
  /** Show this fixed text instead of counting. */
  text?: string;
};

/**
 * A readout that counts through several phases in step with a moving part of
 * its diagram, then rests on `rest`. At rest (no JS, reduced motion, print) it
 * simply shows `rest`.
 */
export function Ticker({
  phases,
  rest,
  className = "",
}: {
  phases: TickPhase[];
  rest: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const stage = el?.closest<HTMLElement>(".diagram");
    if (!el || !stage) return;

    let timers: number[] = [];
    let frame: number | undefined;

    const text = (p: TickPhase, n: number) =>
      p.text ??
      `${p.prefix ?? ""}${n}${n === 1 && p.singular ? p.singular : (p.suffix ?? "")}`;

    function clear() {
      timers.forEach((t) => window.clearTimeout(t));
      timers = [];
      if (frame) cancelAnimationFrame(frame);
    }

    function run() {
      clear();
      el!.textContent = text(phases[0], phases[0].from);
      phases.forEach((p) => {
        timers.push(
          window.setTimeout(() => {
            if (frame) cancelAnimationFrame(frame);
            if (p.dur <= 0) {
              el!.textContent = text(p, p.to);
              return;
            }
            const begin = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - begin) / p.dur, 1);
              el!.textContent = text(p, Math.round(p.from + (p.to - p.from) * t));
              if (t < 1) frame = requestAnimationFrame(tick);
            };
            frame = requestAnimationFrame(tick);
          }, p.at),
        );
      });
    }

    const observer = new MutationObserver(() => {
      if (stage.dataset.state === "play") run();
    });
    observer.observe(stage, { attributes: true, attributeFilter: ["data-state"] });

    return () => {
      observer.disconnect();
      clear();
    };
  }, [phases]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {rest}
    </span>
  );
}
