"use client";

import { useEffect, useRef } from "react";

/**
 * A number that counts up from `from` to `to` when its diagram plays, then
 * rests on `to`. At rest (no JS, reduced motion, print) it simply shows `to`.
 */
export function CountUp({
  to,
  from = 0,
  delay = 0,
  duration = 1600,
  suffix = "",
  className = "",
}: {
  to: number;
  from?: number;
  delay?: number;
  duration?: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const stage = el?.closest<HTMLElement>(".diagram");
    if (!el || !stage) return;

    let timer: number | undefined;
    let frame: number | undefined;

    function run() {
      window.clearTimeout(timer);
      if (frame) cancelAnimationFrame(frame);
      el!.textContent = `${from}${suffix}`;
      timer = window.setTimeout(() => {
        const begin = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - begin) / duration, 1);
          // Ease-out so the last few numbers arrive gently.
          const eased = 1 - (1 - t) ** 3;
          el!.textContent = `${Math.round(from + (to - from) * eased)}${suffix}`;
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      }, delay);
    }

    const observer = new MutationObserver(() => {
      if (stage.dataset.state === "play") run();
    });
    observer.observe(stage, { attributes: true, attributeFilter: ["data-state"] });

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [to, from, delay, duration, suffix]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {to}
      {suffix}
    </span>
  );
}
