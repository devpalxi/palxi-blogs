import type { CSSProperties } from "react";
import { CheckIcon, EyeIcon, PencilIcon, ReplayIcon, UsersIcon } from "../../_components/icons";
import { Station, arrival } from "../../_components/rail";
import { at } from "../../_components/diagram-kit";

// One lap of a closed loop: people use the products, we notice what trips
// them up, we improve the shared piece, every product gets it. Then round again.
const LOOP =
  "M500 110 A270 110 0 0 1 770 220 A270 110 0 0 1 500 330 A270 110 0 0 1 230 220 A270 110 0 0 1 500 110";
const START = 400;
const TRAVEL = 6000;
const T = [0, 0.25, 0.5, 0.75].map((f) => arrival(START, TRAVEL, f));
const END = START + TRAVEL;

const stops = [
  {
    x: 500, y: 110, icon: UsersIcon, fill: "var(--harbour-green)",
    title: "People use our products",
    detail: "Every day, in every product built from the system.",
    place: "absolute top-0 left-1/2 w-[34%] -translate-x-1/2 text-center",
  },
  {
    x: 770, y: 220, icon: EyeIcon, fill: "var(--harbour-green)",
    title: "We notice what trips them up",
    detail: "Through testing, feedback and questions to our support team.",
    place: "absolute top-[40%] right-0 w-[19%]",
  },
  {
    x: 500, y: 330, icon: PencilIcon, fill: "var(--harbour-green)",
    title: "We improve the shared piece",
    detail: "Once, in the design system, and test the change.",
    place: "absolute bottom-0 left-1/2 w-[34%] -translate-x-1/2 text-center",
  },
  {
    x: 230, y: 220, icon: CheckIcon, fill: "var(--settled-green)",
    title: "Every product gets it",
    detail: "The improvement reaches all our products together.",
    place: "absolute top-[40%] left-0 w-[19%] text-right",
  },
];

export function FeedbackLoop() {
  return (
    <div className="relative">
      <svg viewBox="0 0 1000 440" className="w-full" aria-hidden="true" focusable="false">
        <path
          d={LOOP}
          fill="none"
          stroke="var(--hairline-strong)"
          strokeWidth={3}
          strokeLinecap="round"
          strokeDasharray="1 11"
        />
        <path
          d={LOOP}
          pathLength={1}
          fill="none"
          stroke="var(--harbour-green)"
          strokeWidth={5}
          strokeLinecap="round"
          data-anim="draw"
          style={at(START, TRAVEL, { "--ease": "linear" } as CSSProperties)}
        />

        {stops.map((s, i) => (
          <Station key={s.title} x={s.x} y={s.y} icon={s.icon} time={T[i]} fill={s.fill} />
        ))}
        {/* Back at the start: the loop closes and begins again. */}
        <circle
          cx={500}
          cy={110}
          r={28}
          fill="none"
          stroke="var(--harbour-green)"
          strokeWidth={3}
          data-anim="ripple"
          style={at(END)}
        />

        <circle
          r={13}
          fill="var(--paper-white)"
          data-anim="travel"
          className="opacity-0"
          style={at(START, TRAVEL, {
            offsetPath: `path("${LOOP}")`,
            "--ease": "linear",
          } as CSSProperties)}
        />
        <circle
          r={9}
          fill="var(--harbour-green-deep)"
          data-anim="travel"
          className="opacity-0"
          style={at(START, TRAVEL, {
            offsetPath: `path("${LOOP}")`,
            "--ease": "linear",
          } as CSSProperties)}
        />
      </svg>

      {stops.map((s, i) => (
        <div
          key={s.title}
          data-anim="focus"
          style={at(T[i])}
          className={s.place}
        >
          <p
            className={`text-[1.1875rem] leading-snug font-semibold ${
              i === 3 ? "text-settled" : "text-ink"
            }`}
          >
            {s.title}
          </p>
          <p className="mt-1 text-label leading-snug text-copy">{s.detail}</p>
        </div>
      ))}

      <div
        data-anim="rise"
        style={at(END - 200, 700)}
        className="absolute top-[38%] left-1/2 flex w-[34%] -translate-x-1/2 flex-col items-center text-center"
      >
        <span className="flex size-11 items-center justify-center rounded-full bg-harbour-tint text-harbour-deep">
          <ReplayIcon size={24} />
        </span>
        <p className="mt-2 text-label font-semibold text-harbour-deep">
          And round again. The system is never finished; it keeps learning from
          the people who use it.
        </p>
      </div>
    </div>
  );
}
