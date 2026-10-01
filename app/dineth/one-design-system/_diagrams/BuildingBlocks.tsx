import type { CSSProperties, ReactNode } from "react";
import { CheckIcon } from "../../_components/icons";
import { Bar, at } from "../../_components/diagram-kit";

// The basics are chosen first. Pulses carry them down into the building
// blocks, and the blocks are then dropped into every finished screen.
const SWATCH = 520;
const J1 = 2000;
const BLOCKS = 2900;
const J2 = 4100;
const SCREENS = 4700;
// When each block is used in the screens (and flashes in the layer above).
const USE = { field: 5000, notice: 5700, button: 6400 };

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
      className="grid gap-5 rounded-lg bg-surface p-5 sm:p-6 md:grid-cols-[13rem_minmax(0,1fr)] md:items-center md:gap-8"
    >
      <div>
        <p className="font-serif text-title font-semibold text-ink">{title}</p>
        <p className="mt-1 text-label text-copy">{body}</p>
      </div>
      <div aria-hidden="true">{children}</div>
    </div>
  );
}

// A line that draws downwards with a pulse riding it.
function Joiner({ time }: { time: number }) {
  return (
    <div aria-hidden="true" className="relative mx-auto h-10 w-[3px]">
      <span className="absolute inset-0 rounded-full bg-hairline-strong" />
      <span
        data-anim="grow-y"
        style={at(time, 600, { "--ease": "linear" } as CSSProperties)}
        className="absolute inset-0 rounded-full bg-harbour"
      />
      <span
        data-anim="travel"
        className="absolute top-0 left-0 size-3.5 rounded-full bg-harbour-deep opacity-0 ring-4 ring-surface"
        style={at(time, 600, {
          offsetPath: 'path("M1.5 0 V40")',
          "--ease": "linear",
        } as CSSProperties)}
      />
    </div>
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

const swatches = [
  "bg-harbour",
  "bg-ink",
  "bg-shallows ring-1 ring-hairline-strong",
  "bg-settled",
  "bg-stop",
];

export function BuildingBlocks() {
  return (
    <div>
      <Tier time={0} title="The basics" body="Colours, text styles and spacing, chosen once.">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <div className="flex gap-2">
            {swatches.map((c, i) => (
              <span
                key={c}
                data-anim="pop"
                style={at(SWATCH + i * 140, 450)}
                className={`size-9 rounded-full ${c}`}
              />
            ))}
          </div>
          <div data-anim="fade" style={at(SWATCH + 800, 600)} className="flex items-baseline gap-3 text-ink">
            <span className="font-serif text-[2rem] font-semibold">Aa</span>
            <span className="text-[1.5rem]">Aa</span>
          </div>
          <div className="flex items-end gap-1.5">
            {[8, 14, 20, 28].map((h, i) => (
              <span
                key={h}
                data-anim="grow-up"
                style={{ ...at(SWATCH + 1100 + i * 120, 500), height: h }}
                className="w-3 rounded-t-[3px] bg-hairline-strong"
              />
            ))}
          </div>
        </div>
      </Tier>

      <Joiner time={J1} />

      <Tier
        time={J1 + 500}
        title="Building blocks"
        body="Buttons, form fields and notices, made from the basics."
      >
        <div className="grid gap-5 sm:grid-cols-3 sm:items-center">
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

      <Joiner time={J2} />

      <Tier
        time={J2 + 500}
        title="Finished screens"
        body="Every screen, in every product, built from the same blocks."
      >
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((s) => (
            <Screen key={s} s={s} />
          ))}
        </div>
      </Tier>
    </div>
  );
}
