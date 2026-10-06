"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ReplayIcon } from "./icons";

type DiagramProps = {
  caption: ReactNode;
  children: ReactNode;
};

// SVG scenes (svg[data-scene="<end in seconds>"]) run on SVG's own clock
// rather than CSS, so they are paused, sought and restarted directly.
function scenes(stage: HTMLElement) {
  return [...stage.querySelectorAll<SVGSVGElement>("svg[data-scene]")];
}

function restartScenes(stage: HTMLElement) {
  for (const svg of scenes(stage)) {
    svg.setCurrentTime(0);
    svg.unpauseAnimations();
  }
}

export function Diagram({ caption, children }: DiagramProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Show the finished frame, with nothing moving.
      for (const svg of scenes(stage)) {
        svg.pauseAnimations();
        svg.setCurrentTime(Number(svg.dataset.scene) || 60);
      }
      return;
    }

    setMotionAllowed(true);

    // Never hide something the reader can already see.
    const { top } = stage.getBoundingClientRect();
    if (top < window.innerHeight * 0.9) {
      restartScenes(stage);
      return;
    }

    stage.dataset.state = "armed";
    for (const svg of scenes(stage)) {
      svg.pauseAnimations();
      svg.setCurrentTime(0);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          stage.dataset.state = "play";
          restartScenes(stage);
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
    restartScenes(stage);
  }

  return (
    <figure className="mx-auto my-14 w-full max-w-[1000px]">
      <div
        ref={stageRef}
        data-state="static"
        className="diagram rounded-lg bg-shallows p-[clamp(16px,3.2vw,44px)]"
      >
        {children}
      </div>
      <figcaption className="mt-4 flex flex-col gap-3 text-label text-muted sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <span className="max-w-[44rem]">{caption}</span>
        {motionAllowed && (
          <button
            type="button"
            onClick={replay}
            className="btn-secondary shrink-0 self-start"
          >
            <ReplayIcon size={20} />
            Play again
          </button>
        )}
      </figcaption>
    </figure>
  );
}
