import type { CSSProperties, ReactNode } from "react";
import { CheckIcon } from "../../_components/icons";
import { Bar, at } from "../../_components/diagram-kit";

// The basics are chosen first. Curved lines carry them down into the building
// blocks, and the blocks are then dropped into every finished screen.
const SWATCH = 520;
const J1 = 2000;
const BLOCKS = 2900;
const J2 = 4100;
const SCREENS = 4700;
const FLIGHT = 800;
// When each block is used in the screens (and flashes in the layer above).
const USE = { field: 5000, notice: 5700, button: 6400 };

// The diagram is a 704px column (44rem). Every tier is padded by 20px and
// holds three columns with a 16px gap, so the column centres below are where
// the curved joiners start and end.
const COLS = [125.33, 352, 578.67];
const JOIN_H = 72;
const ROUTES = COLS.map((x) =>
  x === 352
    ? `M352 0 V${JOIN_H}`
    : `M352 0 C352 40 ${x} 32 ${x} ${JOIN_H}`,
);

const stroke = {
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function Tier({
  time,
  title,
  body,
  children,
}: {
  time: number;
  title: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <div
      data-anim="rise"
      style={at(time, 700)}
      className="rounded-lg bg-surface p-5"
    >
      <p className="font-serif text-title font-semibold text-ink">{title}</p>
      <p className="mt-1 text-label text-copy">{body}</p>
      <div aria-hidden="true" className="mt-5">
        {children}
      </div>
    </div>
  );
}

// One line fans out into three, with a pulse riding each curve. On phones the
// columns stack, so a single short line stands in for the fan.
function Fan({ time }: { time: number }) {
  return (
    <>
      <svg
        viewBox={`0 0 704 ${JOIN_H}`}
        aria-hidden="true"
        focusable="false"
        className="mx-auto hidden w-full max-w-[44rem] sm:block"
      >
        {ROUTES.map((d, i) => (
          <g key={d}>
            <path
              d={d}
              {...stroke}
              stroke="var(--hairline-strong)"
              strokeWidth={3}
              strokeDasharray="1 9"
            />
            <path
              d={d}
              pathLength={1}
              {...stroke}
              stroke="var(--harbour-green)"
              strokeWidth={4}
              data-anim="draw"
              style={at(time, FLIGHT, { "--ease": "linear" } as CSSProperties)}
            />
            <circle
              r={8}
              fill="var(--harbour-green-deep)"
              stroke="var(--paper-white)"
              strokeWidth={3}
              data-anim="travel"
              className="opacity-0"
              style={at(time, FLIGHT, {
                offsetPath: `path("${d}")`,
                "--ease": "linear",
              } as CSSProperties)}
            />
            <circle
              cx={COLS[i]}
              cy={JOIN_H - 2}
              r={6}
              fill="var(--harbour-green)"
              data-anim="pop"
              style={at(time + FLIGHT - 100, 400)}
            />
          </g>
        ))}
      </svg>
      <div aria-hidden="true" className="relative mx-auto h-10 w-[3px] sm:hidden">
        <span className="absolute inset-0 rounded-full bg-hairline-strong" />
        <span
          data-anim="grow-y"
          style={at(time, 600, { "--ease": "linear" } as CSSProperties)}
          className="absolute inset-0 rounded-full bg-harbour"
        />
      </div>
    </>
  );
}

// A building block that lights up when it is used in a screen.
function Block({ time, use, children }: { time: number; use: number; children: ReactNode }) {
  return (
    <div className="relative">
      <span
        data-anim="flash"
        style={at(use, 1500)}
        className="absolute -inset-2 rounded-md ring-2 ring-harbour/55"
      />
      <div data-anim="pop" style={at(time, 500)} className="relative">
        {children}
      </div>
    </div>
  );
}

function Screen({ s }: { s: number }) {
  const d = s * 160;
  return (
    <div
      data-anim="fade"
      style={at(SCREENS + 100 + d, 500)}
      className="rounded-md p-3 ring-1 ring-hairline-strong"
    >
      <Bar className="w-3/4" strong />
      <div data-anim="rise" style={at(USE.field + d, 600)} className="mt-3">
        <Bar className="w-12" />
        <div className="mt-1.5 h-9 rounded-sm ring-1 ring-hairline-strong" />
      </div>
      <div
        data-anim="rise"
        style={at(USE.notice + d, 600)}
        className="mt-3 flex items-center gap-2 rounded-sm bg-settled-tint px-2.5 py-2 text-settled"
      >
        <CheckIcon size={18} className="shrink-0" />
        <span className="inline-block h-3 w-16 rounded-full bg-settled/30" />
      </div>
      <div
        data-anim="rise"
        style={at(USE.button + d, 600)}
        className="mt-3 flex min-h-10 items-center justify-center rounded-sm bg-harbour text-label font-semibold text-surface"
      >
        Continue
      </div>
    </div>
  );
}

// ---- The basics: three small drawings, each 210 x 72 -------------------

const swatches = [
  { fill: "var(--harbour-green)" },
  { fill: "var(--deep-ink)" },
  { fill: "var(--shallows)", ring: true },
  { fill: "var(--settled-green)" },
  { fill: "var(--stop-red)" },
];

function Colours() {
  return (
    <svg viewBox="0 0 210 72" focusable="false" className="w-full">
      {swatches.map((s, i) => (
        <circle
          key={s.fill}
          cx={25 + i * 40}
          cy={36}
          r={17}
          fill={s.fill}
          stroke={s.ring ? "var(--hairline-strong)" : "none"}
          strokeWidth={2}
          data-anim="pop"
          style={at(SWATCH + i * 140, 450)}
        />
      ))}
    </svg>
  );
}

function TextStyles() {
  return (
    <svg viewBox="0 0 210 72" focusable="false" className="w-full">
      {[18, 52].map((y, i) => (
        <path
          key={y}
          d={`M8 ${y} H202`}
          pathLength={1}
          {...stroke}
          stroke="var(--hairline-strong)"
          strokeWidth={2}
          strokeDasharray="1"
          data-anim="draw"
          style={at(SWATCH + 700 + i * 150, 700)}
        />
      ))}
      <text
        x={20}
        y={52}
        fontSize={48}
        fontWeight={600}
        fill="var(--deep-ink)"
        className="font-serif"
        data-anim="fade"
        style={at(SWATCH + 1000, 600)}
      >
        Aa
      </text>
      <text
        x={112}
        y={52}
        fontSize={34}
        fill="var(--deep-ink)"
        className="font-sans"
        data-anim="fade"
        style={at(SWATCH + 1200, 600)}
      >
        Aa
      </text>
    </svg>
  );
}

function Spacing() {
  const boxes = [18, 82, 146];
  const gaps = [58, 122];
  return (
    <svg viewBox="0 0 210 72" focusable="false" className="w-full">
      {boxes.map((x, i) => (
        <rect
          key={x}
          x={x}
          y={14}
          width={40}
          height={44}
          rx={6}
          fill="var(--shallows)"
          stroke="var(--hairline-strong)"
          strokeWidth={2}
          data-anim="pop"
          style={at(SWATCH + 1100 + i * 140, 450)}
        />
      ))}
      {gaps.map((x, i) => (
        <path
          key={x}
          d={`M${x + 3} 36 H${x + 21} M${x + 3} 28 V44 M${x + 21} 28 V44`}
          pathLength={1}
          {...stroke}
          stroke="var(--harbour-green)"
          strokeWidth={3}
          strokeDasharray="1"
          data-anim="draw"
          style={at(SWATCH + 1700 + i * 200, 500)}
        />
      ))}
    </svg>
  );
}

const basics = [
  { label: "Colours", Drawing: Colours },
  { label: "Text styles", Drawing: TextStyles },
  { label: "Spacing", Drawing: Spacing },
];

export function BuildingBlocks() {
  return (
    <div className="mx-auto max-w-[44rem]">
      <Tier time={0} title="The basics" body="Colours, text styles and spacing, chosen once.">
        <div className="grid gap-5 sm:grid-cols-3 sm:gap-4">
          {basics.map(({ label, Drawing }) => (
            <div key={label}>
              <Drawing />
              <p className="mt-1 text-center text-label text-muted">{label}</p>
            </div>
          ))}
        </div>
      </Tier>

      <Fan time={J1} />

      <Tier
        time={J1 + 500}
        title="Building blocks"
        body="Buttons, form fields and notices, made from the basics."
      >
        <div className="grid gap-5 sm:grid-cols-3 sm:items-center sm:gap-4">
          <Block time={BLOCKS + 300} use={USE.button}>
            <div className="flex min-h-11 items-center justify-center rounded-sm bg-harbour px-4 text-label font-semibold text-surface">
              Continue
            </div>
          </Block>
          <Block time={BLOCKS} use={USE.field}>
            <Bar className="w-16" />
            <div className="mt-1.5 h-10 rounded-sm ring-1 ring-hairline-strong" />
          </Block>
          <Block time={BLOCKS + 600} use={USE.notice}>
            <div className="flex items-center gap-2 rounded-sm bg-settled-tint px-3 py-2.5 text-label font-semibold text-settled">
              <CheckIcon size={18} />
              <span className="inline-block h-3.5 w-14 rounded-full bg-settled/30" />
            </div>
          </Block>
        </div>
      </Tier>

      <Fan time={J2} />

      <Tier
        time={J2 + 500}
        title="Finished screens"
        body="Every screen, in every product, built from the same blocks."
      >
        <div className="grid grid-cols-3 gap-4">
          {[0, 1, 2].map((s) => (
            <Screen key={s} s={s} />
          ))}
        </div>
      </Tier>
    </div>
  );
}
