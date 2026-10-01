import { at, Bar } from "../../dineth/_components/diagram-kit";
import { LockIcon } from "../../dineth/_components/icons";
import { chipTone, type Tone } from "./shared";

export type Flip = { front: string; back: string; tone: Tone };

const START = 500;
const GAP = 700;

/**
 * Cards that start as a rule on one face and turn over, one after another,
 * to show what that rule becomes in the product. At rest the answers show.
 */
export function FlipCards({ cards }: { cards: Flip[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((c, i) => {
        const t = START + i * GAP;
        return (
          <li
            key={c.front}
            data-anim="rise"
            style={at(i * 90, 600)}
            className="grid"
          >
            {/* Front: the obligation, with the answer still hidden. */}
            <div
              data-anim="flip-out"
              style={at(t)}
              className="relative z-10 flex flex-col justify-between rounded-md bg-surface p-5 shadow-device [grid-area:1/1]"
            >
              <div>
                <span
                  className={`inline-block rounded-full px-3 py-1 text-label font-semibold ${chipTone[c.tone]}`}
                >
                  {c.front}
                </span>
                <div aria-hidden="true" className="mt-4 space-y-2">
                  <Bar className="w-full" />
                  <Bar className="w-4/5" />
                  <Bar className="w-3/5" />
                </div>
              </div>
              <p className="mt-4 flex items-center gap-2 text-label text-muted" aria-hidden="true">
                <LockIcon size={18} />
                What does it become?
              </p>
            </div>
            {/* Back: the feature, a data field or a log. */}
            <div
              data-anim="flip-in"
              style={at(t + 300)}
              className="flex flex-col rounded-md bg-surface p-5 shadow-device ring-2 ring-harbour/20 [grid-area:1/1]"
            >
              <span
                className={`inline-block w-fit rounded-full px-3 py-1 text-label font-semibold ${chipTone[c.tone]}`}
              >
                {c.front}
              </span>
              <p className="mt-4 text-copy">{c.back}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
