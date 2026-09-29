import type { ReactNode } from "react";
import { CheckIcon } from "../../_components/icons";
import { Bar, step } from "../../_components/diagram-kit";

function Tier({
  at,
  title,
  body,
  children,
}: {
  at: number;
  title: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <div
      data-anim="rise"
      style={step(at)}
      className="grid gap-5 rounded-md bg-surface p-5 sm:p-6 md:grid-cols-[13rem_minmax(0,1fr)] md:items-center md:gap-8"
    >
      <div>
        <p className="font-serif text-title font-semibold text-ink">{title}</p>
        <p className="mt-1 text-label text-copy">{body}</p>
      </div>
      <div aria-hidden="true">{children}</div>
    </div>
  );
}

function Joiner({ at }: { at: number }) {
  return (
    <div aria-hidden="true" className="flex justify-center py-1">
      <span
        data-anim="grow-y"
        style={step(at)}
        className="block h-8 w-[3px] rounded-full bg-harbour"
      />
    </div>
  );
}

function MiniScreen() {
  return (
    <div className="rounded-md p-3 ring-1 ring-hairline-strong">
      <Bar className="w-3/4" strong />
      <div className="mt-3 space-y-1.5">
        <Bar className="w-full" />
        <Bar className="w-2/3" />
      </div>
      <div className="mt-3 h-6 rounded-[4px] bg-harbour" />
    </div>
  );
}

export function BuildingBlocks() {
  return (
    <div>
      <Tier
        at={0}
        title="The basics"
        body="Colours, text styles and spacing, chosen once."
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <div className="flex gap-2">
            {[
              "bg-harbour",
              "bg-ink",
              "bg-shallows ring-1 ring-hairline-strong",
              "bg-settled",
              "bg-stop",
            ].map((c) => (
              <span key={c} className={`size-8 rounded-full ${c}`} />
            ))}
          </div>
          <div className="flex items-baseline gap-3 text-ink">
            <span className="font-serif text-[2rem] font-semibold">Aa</span>
            <span className="text-[1.5rem]">Aa</span>
          </div>
          <div className="flex items-end gap-1.5">
            {[8, 14, 20, 28].map((h) => (
              <span
                key={h}
                className="w-3 rounded-t-[3px] bg-hairline-strong"
                style={{ height: h }}
              />
            ))}
          </div>
        </div>
      </Tier>

      <Joiner at={1} />

      <Tier
        at={1.5}
        title="Building blocks"
        body="Buttons, form fields and notices, made from the basics."
      >
        <div className="grid gap-3 sm:grid-cols-3 sm:items-center">
          <div className="flex min-h-11 items-center justify-center rounded-sm bg-harbour px-4 text-label font-semibold text-surface">
            Continue
          </div>
          <div>
            <Bar className="w-16" />
            <div className="mt-1.5 h-10 rounded-sm ring-1 ring-hairline-strong" />
          </div>
          <div className="flex items-center gap-2 rounded-sm bg-settled-tint px-3 py-2.5 text-label font-semibold text-settled">
            <CheckIcon size={18} />
            <span className="inline-block h-3.5 w-14 rounded-full bg-settled/30" />
          </div>
        </div>
      </Tier>

      <Joiner at={2.5} />

      <Tier
        at={3}
        title="Finished screens"
        body="Every screen, in every product, built from the same blocks."
      >
        <div className="grid grid-cols-3 gap-3">
          <MiniScreen />
          <MiniScreen />
          <MiniScreen />
        </div>
      </Tier>
    </div>
  );
}
