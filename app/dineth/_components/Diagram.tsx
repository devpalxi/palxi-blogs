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
      stage.dataset.state = "play";
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
      { threshold: 0.15 },
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  function replay() {
    const stage = stageRef.current;
    if (!stage) return;
    stage.dataset.state = "armed";
    void stage.offsetWidth;
    stage.getAnimations({ subtree: true }).forEach((a) => a.cancel());
    requestAnimationFrame(() => {
      if (!stage) return;
      stage.dataset.state = "play";
      restartScenes(stage);
    });
  }

  return (
    <figure className="mx-auto my-10 sm:my-14 w-full max-w-[1000px]">
      <div
        ref={stageRef}
        data-state="static"
        className="diagram overflow-hidden rounded-xl bg-shallows p-3.5 sm:p-6 md:p-8 lg:p-10 shadow-sm ring-1 ring-hairline/60 transition-shadow duration-300 hover:shadow-md"
      >
        {children}
      </div>
      <figcaption className="mt-3.5 sm:mt-4 flex flex-col gap-3 text-xs sm:text-label text-muted sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <span className="max-w-[44rem] leading-relaxed">{caption}</span>
        {motionAllowed && (
          <button
            type="button"
            onClick={replay}
            className="btn-secondary group shrink-0 self-start text-xs sm:text-label min-h-10 sm:min-h-11 px-3.5 sm:px-4 rounded-full transition-all duration-200 hover:bg-paper hover:shadow-sm active:scale-95"
          >
            <ReplayIcon
              size={18}
              className="transition-transform duration-300 ease-out-quart group-hover:-rotate-90 group-active:-rotate-180"
            />
            Play again
          </button>
        )}
      </figcaption>
    </figure>
  );
}
