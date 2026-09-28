import { step } from "../../_components/diagram-kit";

const rows = Array.from({ length: 10 }, (_, r) => r);
const cols = Array.from({ length: 10 }, (_, c) => c);

export function CostOfChange() {
  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:items-stretch md:gap-6">
      <div
        data-anim="rise"
        style={step(0)}
        className="flex flex-col rounded-md bg-surface p-6"
      >
        <p className="font-serif text-title font-semibold text-ink">
          Changing a sketch
        </p>
        <p className="mt-1 text-label text-muted">Before any code is written</p>
        <div className="flex flex-1 items-center justify-center py-8">
          <span
            data-anim="pop"
            style={step(1)}
            className="size-[22px] rounded-full bg-harbour-chart"
          />
        </div>
        <p className="text-[1.1875rem] font-semibold text-ink">
          About 1 unit of effort
        </p>
      </div>

      <div
        data-anim="rise"
        style={step(1.5)}
        className="flex flex-col rounded-md bg-surface p-6"
      >
        <p className="font-serif text-title font-semibold text-ink">
          Changing it after it&apos;s built
        </p>
        <p className="mt-1 text-label text-muted">
          Once the feature is finished
        </p>
        <div
          aria-hidden="true"
          className="mx-auto my-6 grid w-full max-w-[300px] grid-cols-10 gap-2"
        >
          {rows.map((r) =>
            cols.map((c) => (
              <span
                key={`${r}-${c}`}
                data-anim="pop"
                style={step(2.2 + r * 0.25)}
                className="aspect-square rounded-full bg-harbour-chart"
              />
            )),
          )}
        </div>
        <p className="text-[1.1875rem] font-semibold text-ink">
          About 100 units of effort
        </p>
      </div>
    </div>
  );
}
