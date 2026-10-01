import type { ReactNode } from "react";
import { Bar, Device, at } from "../../dineth/_components/diagram-kit";
import { Segment } from "./Journey";
import type { DiagramIcon } from "./shared";

type Layer = { icon: DiagramIcon; title: string; detail: string };

const TAP = 600;
const FALL = 800;
const LEG = 1500;

/**
 * An iceberg: the part above the waterline is what a customer sees (one
 * app). A small marker leaves the screen, crosses the waterline and drops
 * through each layer beneath, lighting each as it arrives.
 */
export function Iceberg({
  product,
  deep,
  footer,
}: {
  product: { title: string; detail: string };
  deep: Layer[];
  footer?: ReactNode;
}) {
  const arrive = (i: number) => FALL + 300 + (i + 1) * LEG;
  const tones = ["bg-harbour-tint text-ink", "bg-harbour text-surface", "bg-harbour-deep text-surface"];
  return (
    <div className="overflow-hidden rounded-lg bg-surface ring-1 ring-hairline-strong">
      {/* Above the waterline. */}
      <div className="grid items-end gap-6 bg-gradient-to-b from-surface to-shallows px-6 pt-8 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10 md:px-10">
        <div data-anim="rise" style={at(0, 700)} className="mx-auto w-full max-w-[13rem]">
          <Device className="rounded-b-none" screenClassName="rounded-b-none pb-8">
            <div aria-hidden="true">
              <div className="space-y-1.5">
                <Bar className="w-3/4" strong />
                <Bar className="w-1/2" />
              </div>
              <div className="mt-4 space-y-1.5">
                <Bar className="w-full" />
                <Bar className="w-5/6" />
              </div>
              <div className="relative mt-5">
                <span
                  data-anim="ripple"
                  style={at(TAP)}
                  className="absolute inset-0 rounded-sm ring-4 ring-harbour/40"
                />
                <div className="relative flex min-h-11 items-center justify-center rounded-sm bg-harbour font-semibold text-surface">
                  Continue
                </div>
              </div>
            </div>
          </Device>
        </div>
        <div className="pb-8 md:pb-10">
          <p
            data-anim="fade"
            style={at(300, 600)}
            className="text-label font-semibold tracking-wide text-muted uppercase"
          >
            What the customer sees
          </p>
          <p
            data-anim="rise"
            style={at(400, 700)}
            className="mt-1 font-serif text-title font-semibold text-ink"
          >
            {product.title}
          </p>
          <p data-anim="fade" style={at(500, 700)} className="mt-1 text-copy">
            {product.detail}
          </p>
        </div>
      </div>

      {/* The waterline. */}
      <svg
        viewBox="0 0 960 24"
        preserveAspectRatio="none"
        className="-mb-px block h-6 w-full"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M0 12 C60 0 120 24 180 12 S300 0 360 12 480 24 540 12 660 0 720 12 840 24 900 12 960 6 960 6 V24 H0 Z"
          fill="var(--harbour-green-tint)"
        />
        <path
          d="M0 12 C60 0 120 24 180 12 S300 0 360 12 480 24 540 12 660 0 720 12 840 24 900 12 960 6 960 6"
          fill="none"
          stroke="var(--harbour-green-chart)"
          strokeWidth={2}
          pathLength={1}
          data-anim="draw"
          style={at(FALL - 200, 900)}
        />
      </svg>

      {/* Below it. */}
      <div className="relative">
        <Segment
          dir="y"
          from={FALL}
          leg={LEG * deep.length + 300}
          className="top-0 bottom-6 left-8 z-10 w-[3px] md:left-10"
        />
        {deep.map((layer, i) => {
          const Icon = layer.icon;
          const t = arrive(i);
          return (
            <div
              key={layer.title}
              data-anim="rise"
              style={at(FALL + i * 200, 600)}
              className={`relative flex items-center gap-4 py-7 pr-6 pl-[4.5rem] md:pl-24 ${tones[Math.min(i + 0, tones.length - 1)]}`}
            >
              <span
                aria-hidden="true"
                data-anim="flash"
                style={at(t, 1300)}
                className="absolute inset-0 bg-surface/25"
              />
              <span className="absolute top-1/2 left-8 z-20 flex size-11 -translate-1/2 items-center justify-center rounded-full bg-surface text-harbour-deep shadow-device md:left-10">
                <Icon size={22} />
              </span>
              <div className="relative">
                <p className="font-serif text-title leading-tight font-semibold">
                  {layer.title}
                </p>
                <p className="mt-0.5 text-label">{layer.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
      {footer && (
        <p
          data-anim="rise"
          style={at(arrive(deep.length - 1) + 400)}
          className="bg-harbour-deep px-6 py-5 text-surface md:px-10"
        >
          {footer}
        </p>
      )}
    </div>
  );
}
