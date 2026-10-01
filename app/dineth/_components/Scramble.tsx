"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "ABCDEFGHJKLMNPQRSTUVWXYZabdefghkmnpqrstwxyz23456789#$%&@!?";

/**
 * Text that churns through random characters when its diagram plays, then
 * settles on `text`. At rest (no JS, reduced motion, print) it simply shows
 * `text`. Purely decorative: label the meaning elsewhere.
 */
export function Scramble({
  text,
  delay = 0,
  duration = 1200,
  className = "",
}: {
  text: string;
  delay?: number;
  duration?: number;
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
      timer = window.setTimeout(() => {
        const begin = performance.now();
        let last = 0;
        const tick = (now: number) => {
          const t = (now - begin) / duration;
          if (t >= 1) {
            el!.textContent = text;
            return;
          }
          // Change characters ~16 times a second, not every frame.
          if (now - last > 60) {
            last = now;
            el!.textContent = [...text]
              .map((ch) =>
                ch === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
              )
              .join("");
          }
          frame = requestAnimationFrame(tick);
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
  }, [text, delay, duration]);

  return (
    <span ref={ref} aria-hidden="true" className={className}>
      {text}
    </span>
  );
}
