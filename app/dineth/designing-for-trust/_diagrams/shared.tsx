import type { CSSProperties } from "react";

export function step(n: number): CSSProperties {
  return { "--step": n } as CSSProperties;
}

export function Pin({
  n,
  className = "",
  static: isStatic = false,
}: {
  n: number;
  className?: string;
  static?: boolean;
}) {
  return (
    <span
      aria-hidden={isStatic ? undefined : true}
      data-anim={isStatic ? undefined : "pop"}
      style={isStatic ? undefined : step(n)}
      className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-harbour text-label font-bold text-surface ${className}`}
    >
      {n}
    </span>
  );
}
