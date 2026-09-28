import type { ComponentType, CSSProperties, SVGProps } from "react";

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

// Grey placeholder standing in for real content in a generic wireframe.
export function Bar({
  className = "w-24",
  strong = false,
}: {
  className?: string;
  strong?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block rounded-full ${strong ? "h-4 bg-muted/55" : "h-3.5 bg-hairline-strong"} ${className}`}
    />
  );
}

export type FlowStep = {
  icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
  title: string;
  detail: string;
  tone?: "default" | "done" | "caution";
};

const toneStyles = {
  default: { dot: "bg-surface text-harbour shadow-device", title: "text-ink" },
  done: { dot: "bg-settled text-surface", title: "text-settled" },
  caution: { dot: "bg-wattle-tint text-wattle", title: "text-ink" },
};

// Steps in a row on wider screens, stacked on phones, joined by drawn lines.
export function StepFlow({
  steps,
  startAt = 0,
}: {
  steps: FlowStep[];
  startAt?: number;
}) {
  return (
    <ol
      style={{ "--cols": steps.length } as CSSProperties}
      className="flex flex-col md:grid md:grid-cols-[repeat(var(--cols),minmax(0,1fr))] md:gap-4"
    >
      {steps.map((s, i) => {
        const Icon = s.icon;
        const at = startAt + i;
        const last = i === steps.length - 1;
        const tone = toneStyles[s.tone ?? "default"];
        return (
          <li
            key={s.title}
            className="relative flex gap-4 pb-8 last:pb-0 md:block md:pb-0"
          >
            {!last && (
              <>
                <span
                  aria-hidden="true"
                  data-anim="grow-x"
                  style={step(at + 0.6)}
                  className="absolute top-[22.5px] left-14 hidden h-[3px] w-[calc(100%-3rem)] rounded-full bg-harbour md:block"
                />
                <span
                  aria-hidden="true"
                  data-anim="grow-y"
                  style={step(at + 0.6)}
                  className="absolute top-14 left-[22.5px] h-[calc(100%-4rem)] w-[3px] rounded-full bg-harbour md:hidden"
                />
              </>
            )}
            <span
              data-anim="pop"
              style={step(at)}
              className={`relative flex size-12 shrink-0 items-center justify-center rounded-full ${tone.dot}`}
            >
              <Icon size={24} />
            </span>
            <div
              data-anim="rise"
              style={step(at)}
              className="pt-1 md:mt-4 md:pt-0 md:pr-3"
            >
              <p
                className={`text-[1.125rem] leading-snug font-semibold ${tone.title}`}
              >
                {s.title}
              </p>
              <p className="mt-1 text-label text-copy">{s.detail}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
