import { at } from "../../dineth/_components/diagram-kit";
import { chipTone } from "./shared";

type Part = { title: string; subtitle: string; items: string[] };

const CORE_START = 300;
const GAP = 420;

/**
 * A solid core wrapped by an outer ring. The core is built first, one item
 * at a time; then the ring appears around it and its pieces drop into place.
 */
export function CoreEdges({ core, edges }: { core: Part; edges: Part }) {
  const edgeStart = CORE_START + 900 + core.items.length * GAP + 400;
  const half = Math.ceil(edges.items.length / 2);
  const chip = (item: string, i: number) => (
    <li
      key={item}
      data-anim="drop"
      style={at(edgeStart + 700 + i * GAP)}
      className={`rounded-md px-4 py-2.5 text-center text-label font-semibold ${chipTone.done}`}
    >
      {item}
    </li>
  );
  return (
    <div className="relative p-4 sm:p-6">
      {/* The outer ring, drawn after the core is in place. */}
      <span
        aria-hidden="true"
        data-anim="fade"
        style={at(edgeStart, 700)}
        className="absolute inset-0 rounded-lg border-2 border-dashed border-settled/55 bg-surface/60"
      />
      <div className="relative">
        <div data-anim="fade" style={at(edgeStart + 100, 600)} className="mb-4">
          <p className="text-[1.125rem] font-semibold text-settled">{edges.title}</p>
          <p className="text-label text-copy">{edges.subtitle}</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {edges.items.slice(0, half).map((item, i) => chip(item, i))}
        </ul>

        <div
          data-anim="rise"
          style={at(CORE_START, 700)}
          className="my-4 rounded-md bg-harbour p-5 text-surface sm:my-5"
        >
          <p data-anim="pop" style={at(CORE_START + 150)} className="text-[1.25rem] font-semibold">
            {core.title}
          </p>
          <p className="text-label">{core.subtitle}</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {core.items.map((item, i) => (
              <li
                key={item}
                data-anim="pop"
                style={at(CORE_START + 900 + i * GAP)}
                className="rounded-md bg-surface px-4 py-2.5 text-center text-label font-semibold text-harbour-deep"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {edges.items.slice(half).map((item, i) => chip(item, i + half))}
        </ul>
      </div>
    </div>
  );
}
