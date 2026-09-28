import type { CSSProperties } from "react";
import { step } from "../../_components/diagram-kit";

type Track = "main" | "split" | "branch" | "merge";

type Row = {
  track: Track;
  node?: "main" | "branch" | "done";
  title?: string;
  note?: string;
};

const rows: Row[] = [
  {
    track: "main",
    node: "main",
    title: "The main line: the product customers use today",
  },
  { track: "split" },
  {
    track: "branch",
    node: "branch",
    title: "A branch: a safe copy where the new feature is built",
    note: "Meanwhile, customers carry on as normal on the main line.",
  },
  {
    track: "branch",
    node: "branch",
    title: "Checked by another developer and tested",
  },
  {
    track: "branch",
    node: "branch",
    title: "Rehearsed on a practice copy of the product",
  },
  { track: "merge" },
  {
    track: "main",
    node: "done",
    title: "Only then does it join the main line",
    note: "Customers get the new feature, already checked.",
  },
];

const MAIN_X = 22;
const BRANCH_X = 74;
const TRACK = 5;
const CURVE_H = 48;

// Transition rows are a fixed 96 × 48px, so the curve never stretches.
const curves: Partial<Record<Track, string>> = {
  split: `M${MAIN_X} 0 C${MAIN_X} 30 ${BRANCH_X} 18 ${BRANCH_X} ${CURVE_H}`,
  merge: `M${BRANCH_X} 0 C${BRANCH_X} 30 ${MAIN_X} 18 ${MAIN_X} ${CURVE_H}`,
};

const nodeStyles = {
  main: "bg-ink",
  branch: "bg-harbour",
  done: "bg-settled",
};

function Rail({
  x,
  className = "",
  anim,
  style,
}: {
  x: number;
  className?: string;
  anim?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      data-anim={anim}
      className={`absolute inset-y-0 ${className}`}
      style={{ left: x - TRACK / 2, width: TRACK, ...style }}
    />
  );
}

export function BranchLine() {
  return (
    <ol className="mx-auto max-w-[44rem]">
      {rows.map((row, i) => {
        const at = i * 0.9;
        const curve = curves[row.track];
        const isTransition = !row.title;
        return (
          <li
            key={i}
            aria-hidden={isTransition ? true : undefined}
            className={`relative grid grid-cols-[96px_minmax(0,1fr)] ${
              isTransition ? "h-12" : "min-h-24"
            }`}
          >
            <Rail x={MAIN_X} className="bg-muted/45" />

            {row.track === "branch" && (
              <Rail
                x={BRANCH_X}
                className="bg-harbour"
                anim="grow-y"
                style={step(at)}
              />
            )}

            {curve && (
              <svg
                aria-hidden="true"
                width={96}
                height={CURVE_H}
                viewBox={`0 0 96 ${CURVE_H}`}
                className="absolute top-0 left-0 overflow-visible"
              >
                <path
                  d={curve}
                  fill="none"
                  stroke="var(--harbour-green)"
                  strokeWidth={TRACK}
                  pathLength={1}
                  data-anim="draw"
                  style={step(at)}
                />
              </svg>
            )}

            {row.node && (
              <span
                aria-hidden="true"
                data-anim="pop"
                style={{
                  ...step(at + 0.3),
                  left: (row.node === "branch" ? BRANCH_X : MAIN_X) - 10,
                }}
                className={`absolute top-5 size-5 rounded-full ring-4 ring-shallows ${nodeStyles[row.node]}`}
              />
            )}

            {row.title && (
              <div
                data-anim="rise"
                style={step(at + 0.3)}
                className="col-start-2 pt-3 pb-5"
              >
                <p
                  className={`text-[1.1875rem] leading-snug font-semibold ${
                    row.node === "done" ? "text-settled" : "text-ink"
                  }`}
                >
                  {row.title}
                </p>
                {row.note && <p className="mt-1 text-copy">{row.note}</p>}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
