import { step } from "../../_components/diagram-kit";

const principles = [
  {
    letter: "P",
    name: "Perceivable",
    plain: "You can see or hear it",
    examples: "Large, high-contrast text. Pictures that are described in words. Captions on videos.",
  },
  {
    letter: "O",
    name: "Operable",
    plain: "You can use it",
    examples: "Big buttons that are easy to tap. Works with a keyboard or voice control. No racing a timer.",
  },
  {
    letter: "U",
    name: "Understandable",
    plain: "You can make sense of it",
    examples: "Plain words. Steps that behave the way you expect. Errors that say how to fix them.",
  },
  {
    letter: "R",
    name: "Robust",
    plain: "It works with your tools",
    examples: "Reads properly with screen readers, magnifiers and other assistive technology.",
  },
];

export function FourPrinciples() {
  return (
    <ol className="divide-y divide-hairline">
      {principles.map((p, i) => (
        <li
          key={p.name}
          data-anim="rise"
          style={step(i)}
          className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 py-5 first:pt-0 last:pb-0 md:grid-cols-[3.5rem_minmax(0,14rem)_minmax(0,1fr)] md:items-baseline md:gap-6"
        >
          <span
            aria-hidden="true"
            className="flex size-14 items-center justify-center rounded-md bg-harbour font-serif text-[1.75rem] font-semibold text-surface md:self-start"
          >
            {p.letter}
          </span>
          <div>
            <p className="text-[1.1875rem] font-semibold text-ink">{p.name}</p>
            <p className="text-label text-muted">{p.plain}</p>
          </div>
          <p className="col-start-2 text-copy md:col-start-3">{p.examples}</p>
        </li>
      ))}
    </ol>
  );
}
