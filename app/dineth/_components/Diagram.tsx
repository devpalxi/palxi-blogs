"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ReplayIcon } from "./icons";

type DiagramProps = {
  caption: ReactNode;
  children: ReactNode;
};

export function Diagram({ caption, children }: DiagramProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setMotionAllowed(true);

    // Never hide something the reader can already see.
    const { top } = stage.getBoundingClientRect();
    if (top < window.innerHeight * 0.9) return;

    stage.dataset.state = "armed";
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          stage.dataset.state = "play";
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  function replay() {
    const stage = stageRef.current;
    if (!stage) return;
    stage.dataset.state = "armed";
    // Reading the animations makes the browser apply the "armed" styles, which
    // cancels every running animation. Cancelling them explicitly too means the
    // restart never depends on a layout read that a build step could drop.
    stage.getAnimations({ subtree: true }).forEach((a) => a.cancel());
    stage.dataset.state = "play";
  }

  return (
    <figure className="mx-auto my-14 w-full max-w-[1000px]">
      <div
        ref={stageRef}
        data-state="static"
        className="diagram rounded-md bg-shallows p-[clamp(16px,3.2vw,44px)]"
      >
        {children}
      </div>
      <figcaption className="mt-4 flex flex-col gap-3 text-label text-muted sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <span className="max-w-[44rem]">{caption}</span>
        {motionAllowed && (
          <button
            type="button"
            onClick={replay}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-sm border border-hairline-strong bg-surface px-4 font-semibold text-ink transition-[background-color,transform] duration-200 ease-out-quart hover:bg-harbour-tint active:scale-[0.98]"
          >
            <ReplayIcon size={20} />
            Play again
          </button>
        )}
      </figcaption>
    </figure>
  );
}
