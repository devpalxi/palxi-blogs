import type { CSSProperties, ReactNode } from "react";
import { at } from "../../dineth/_components/diagram-kit";
import { chipTone, linear, type DiagramIcon, type Tone } from "./shared";

export type CascadeNode = {
  icon: DiagramIcon;
  title: string;
  detail: string;
  /** Bound nodes light up solid; the others get a dashed outline. */
  bound?: boolean;
  badge: { text: string; tone: Tone; icon: DiagramIcon };
};

export type CascadeLink = {
  label: string;
  kind: "solid" | "dashed";
};

const START = 400;
const LEG = 1500;
const STOP = 1100;

// Node i lights up once the pulse has crossed the links before it.
const arrive = (i: number) => START + i * (LEG + STOP);
const leave = (i: number) => arrive(i) + 500;

const dashed =
  "bg-[repeating-linear-gradient(90deg,var(--harbour-green)_0_10px,transparent_10px_18px)]";
const dashedV =
  "bg-[repeating-linear-gradient(180deg,var(--harbour-green)_0_10px,transparent_10px_18px)]";
const dashedBase =
  "bg-[repeating-linear-gradient(90deg,var(--hairline-strong)_0_10px,transparent_10px_18px)]";
const dashedBaseV =
  "bg-[repeating-linear-gradient(180deg,var(--hairline-strong)_0_10px,transparent_10px_18px)]";

function Link({
  link,
  index,
  dir,
}: {
  link: CascadeLink;
  index: number;
  dir: "x" | "y";
}) {
  const x = dir === "x";
  const start = leave(index);
  const timing = at(start, LEG, linear);
  const isDashed = link.kind === "dashed";
  const base = isDashed ? (x ? dashedBase : dashedBaseV) : "bg-hairline-strong";
  const trail = isDashed ? (x ? dashed : dashedV) : "bg-harbour";
  const rail = x ? "inset-x-0 top-0 h-[4px]" : "inset-y-0 left-0 w-[4px]";
  return (
    <span aria-hidden="true" className="absolute inset-0">
      <span className={`absolute rounded-full ${rail} ${base}`} />
      <span
        data-anim={x ? "grow-x" : "grow-y"}
        style={timing}
        className={`absolute rounded-full ${rail} ${trail}`}
      />
      {[0, 1, 2].map((k) => (
        <span
          key={k}
          data-anim={x ? "ride-x" : "ride-y"}
          style={at(start + k * 260, LEG - 520, linear)}
          className={`absolute z-10 -translate-1/2 rounded-full bg-ink ring-[3px] ring-surface ${
            x ? "top-[2px] left-0" : "top-0 left-[2px]"
          } ${k === 0 ? "size-4" : "size-3"}`}
        />
      ))}
    </span>
  );
}

function Orb({
  node,
  time,
}: {
  node: CascadeNode;
  time: number;
}) {
  const Icon = node.icon;
  const bound = node.bound ?? true;
  return (
    <span className="relative z-20 block size-16 shrink-0 md:size-20">
      <span
        aria-hidden="true"
        data-anim="ripple"
        style={at(time)}
        className="absolute inset-0 rounded-full ring-[6px] ring-harbour/35"
      />
      {/* Resting state: an empty, unlit ring. */}
      <span className="absolute inset-0 flex items-center justify-center rounded-full bg-surface text-muted shadow-device ring-1 ring-hairline-strong">
        <Icon size={32} />
      </span>
      {/* Lit state: solid for bound parties, a dashed outline for the rest. */}
      <span
        aria-hidden="true"
        data-anim="pop"
        style={at(time)}
        className={`absolute inset-0 flex items-center justify-center rounded-full ${
          bound
            ? "bg-harbour text-surface shadow-[0_0_0_8px_rgb(0_99_95/0.10)]"
            : "border-[3px] border-dashed border-harbour bg-surface text-harbour"
        }`}
      >
        <Icon size={32} />
      </span>
    </span>
  );
}

/**
 * A pulse of responsibility crossing a chain of parties. Bound parties light
 * up solid as it reaches them; links can be solid (a direct duty) or dashed
 * (reached only through contracts). Row on wide screens, stacked on phones.
 */
export function Cascade({
  nodes,
  links,
  footer,
}: {
  nodes: CascadeNode[];
  links: CascadeLink[];
  footer?: ReactNode;
}) {
  const n = nodes.length;
  const end = arrive(n - 1);
  return (
    <div>
      <ol
        style={{ "--cols": n } as CSSProperties}
        className="mx-auto flex max-w-[17rem] flex-col md:grid md:max-w-none md:grid-cols-[repeat(var(--cols),minmax(0,1fr))]"
      >
        {nodes.map((node, i) => {
          const time = arrive(i);
          const Badge = node.badge.icon;
          const last = i === n - 1;
          return (
            <li
              key={node.title}
              className="relative flex gap-5 pb-14 last:pb-0 md:block md:pb-0 md:text-center"
            >
              {!last && (
                <>
                  {/* Phones: a vertical link under the orb. */}
                  <span className="absolute top-16 -bottom-0 left-[30px] w-[4px] md:hidden">
                    <Link link={links[i]} index={i} dir="y" />
                  </span>
                  {/* Wide screens: a horizontal link to the next orb's centre. */}
                  <span className="absolute top-[38px] left-1/2 hidden h-[4px] w-full md:block">
                    <Link link={links[i]} index={i} dir="x" />
                  </span>
                  <span
                    data-anim="pop"
                    style={at(leave(i) + 350)}
                    className={`absolute top-[40px] left-full z-30 hidden -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1 text-label font-semibold whitespace-nowrap shadow-device lg:block ${
                      links[i].kind === "dashed"
                        ? "bg-wattle-tint text-wattle"
                        : "bg-harbour-tint text-harbour-deep"
                    }`}
                  >
                    {links[i].label}
                  </span>
                </>
              )}
              <div className="md:flex md:justify-center">
                <Orb node={node} time={time} />
              </div>
              <div data-anim="focus" style={at(time)} className="min-w-0 md:mt-5 md:px-4">
                <p className="font-serif text-title font-semibold text-ink">
                  {node.title}
                </p>
                <p className="mt-1 text-label text-copy">{node.detail}</p>
                <span
                  data-anim="pop"
                  style={at(time + 250)}
                  className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-label font-semibold ${chipTone[node.badge.tone]}`}
                >
                  <Badge size={18} />
                  {node.badge.text}
                </span>
                {!last && (
                  <span
                    data-anim="fade"
                    style={at(leave(i) + 350)}
                    className={`mt-3 flex w-fit items-center rounded-full px-3 py-1 text-label font-semibold md:mx-auto lg:hidden ${
                      links[i].kind === "dashed"
                        ? "bg-wattle-tint text-wattle"
                        : "bg-harbour-tint text-harbour-deep"
                    }`}
                  >
                    {links[i].label}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ol>
      {footer && (
        <p
          data-anim="rise"
          style={at(end + 700)}
          className="mx-auto mt-10 max-w-[40rem] rounded-md border-2 border-dashed border-harbour/40 bg-surface px-5 py-4 text-center font-serif text-[1.25rem] leading-snug text-ink"
        >
          {footer}
        </p>
      )}
    </div>
  );
}
