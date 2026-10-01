import { at } from "../../dineth/_components/diagram-kit";
import { Segment } from "./Journey";

const START = 400;
const LAYER_GAP = 1500; // ms between one layer appearing and the next

/**
 * Boxes stacked top to bottom with a small marker travelling down through
 * them. Each box lights up as the marker reaches it, showing how a request
 * passes from the top layer to the one underneath.
 */
export function LayersFlow({
  layers,
  footer,
}: {
  layers: { title: string; detail: string }[];
  footer?: string;
}) {
  const n = layers.length;
  const time = (i: number) => START + i * LAYER_GAP;
  return (
    <div>
      <ol className="mx-auto flex max-w-[40rem] flex-col">
        {layers.map((layer, i) => {
          const t = time(i);
          const top = i === 0;
          return (
            <li key={layer.title} className="flex flex-col items-center">
              <div
                data-anim="rise"
                style={at(t === START ? 0 : t - 700, 700)}
                className={`relative w-full rounded-md px-5 py-4 ${
                  top ? "bg-harbour text-surface" : "bg-surface shadow-device"
                }`}
              >
                <span
                  aria-hidden="true"
                  data-anim="flash"
                  style={at(t, 1300)}
                  className="absolute -inset-1.5 rounded-lg ring-4 ring-harbour/35"
                />
                <p
                  className={`text-[1.125rem] leading-snug font-semibold ${
                    top ? "text-surface" : "text-ink"
                  }`}
                >
                  {layer.title}
                </p>
                <p className={`mt-1 text-label ${top ? "text-surface" : "text-copy"}`}>
                  {layer.detail}
                </p>
              </div>
              {i < n - 1 && (
                <span aria-hidden="true" className="relative block h-12 w-full">
                  <Segment
                    dir="y"
                    from={t + 300}
                    leg={LAYER_GAP - 600}
                    className="inset-y-0 left-1/2 w-[3px] -translate-x-1/2"
                  />
                </span>
              )}
            </li>
          );
        })}
      </ol>
      {footer && (
        <p
          data-anim="rise"
          style={at(time(n - 1) + 900)}
          className="mt-8 rounded-md border-2 border-dashed border-harbour/40 bg-surface px-5 py-4 text-copy"
        >
          {footer}
        </p>
      )}
    </div>
  );
}
