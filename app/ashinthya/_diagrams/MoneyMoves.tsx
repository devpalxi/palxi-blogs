import type { CSSProperties, ReactNode } from "react";
import { ArrowRightIcon, BankIcon, PersonIcon } from "../../dineth/_components/icons";
import { at } from "../../dineth/_components/diagram-kit";
import { DocumentIcon, ServerIcon } from "./icons";
import { chipTone, linear, type DiagramIcon, type Tone } from "./shared";

// Three ways to move money account to account, each shown in motion:
// real-time push (NPP), pull under an agreement (PayTo), and a batch (BECS).

type Lane = {
  title: string;
  subtitle: string;
  tone: Tone;
  items: string[];
  start: number;
};

const lanes: Lane[] = [
  {
    title: "NPP credit transfer",
    subtitle: "Pushes money out, in real time",
    tone: "default",
    items: [
      "Good for individual payouts",
      "Watch per-payment cost",
      "Some accounts are unreachable",
    ],
    start: 400,
  },
  {
    title: "PayTo",
    subtitle: "Pulls money in, under an agreement",
    tone: "done",
    items: [
      "Good for funding the platform",
      "Single transfers only",
      "Bank support is uneven",
    ],
    start: 3700,
  },
  {
    title: "BECS direct entry",
    subtitle: "Batched, not real time",
    tone: "caution",
    items: [
      "Good for bulk runs and as a fallback",
      "Rejections come back late",
      "Limited data fields",
    ],
    start: 7300,
  },
];

function Node({ icon: Icon, label }: { icon: DiagramIcon; label: string }) {
  return (
    <span className="flex w-20 shrink-0 flex-col items-center gap-1.5 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-surface text-magenta shadow-device ring-1 ring-hairline-strong">
        <Icon size={28} />
      </span>
      <span className="text-label leading-tight font-semibold text-ink">{label}</span>
    </span>
  );
}

function Dot({
  start,
  dur,
  tone = "go",
  mirror = false,
}: {
  start: number;
  dur: number;
  tone?: "go" | "ink";
  mirror?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`absolute inset-0 ${mirror ? "-scale-x-100" : ""}`}
    >
      <span
        data-anim="ride-x"
        style={at(start, dur, linear)}
        className={`absolute top-1/2 left-0 size-5 -translate-1/2 rounded-full ring-[3px] ring-surface ${
          tone === "ink" ? "bg-ink" : "bg-magenta-chart"
        }`}
      />
    </span>
  );
}

function Track({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-1 h-14 flex-1">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-hairline-strong"
      />
      <span
        aria-hidden="true"
        className="absolute top-1/2 right-0 -translate-y-1/2 text-muted"
      >
        <ArrowRightIcon size={22} />
      </span>
      {children}
    </div>
  );
}

function Graphic({ n, start }: { n: number; start: number }) {
  if (n === 0) {
    // Push: a steady stream, each payment going straight through.
    return (
      <div className="flex items-center">
        <Node icon={ServerIcon} label="Your platform" />
        <Track>
          {[0, 1, 2, 3, 4].map((k) => (
            <Dot key={k} start={start + 300 + k * 380} dur={1100} />
          ))}
        </Track>
        <Node icon={PersonIcon} label="The payee" />
      </div>
    );
  }
  if (n === 1) {
    // Pull: an agreement is set up, the platform asks, then the money comes in.
    return (
      <div>
        <div className="mb-2 flex justify-center">
          <span
            data-anim="pop"
            style={at(start + 100)}
            className="flex items-center gap-1.5 rounded-full bg-settled-tint px-3 py-1 text-label font-semibold text-settled"
          >
            <DocumentIcon size={18} />
            Agreement set up
          </span>
        </div>
        <div className="flex items-center">
          <Node icon={BankIcon} label="Payer's bank" />
          <Track>
            <Dot start={start + 900} dur={900} tone="ink" mirror />
            {[0, 1, 2].map((k) => (
              <Dot key={k} start={start + 2000 + k * 420} dur={1000} />
            ))}
          </Track>
          <Node icon={ServerIcon} label="Your platform" />
        </div>
      </div>
    );
  }
  // Batch: payments wait together, then go in one run.
  const queue = [0, 1, 2, 3, 4];
  return (
    <div className="flex items-center">
      <Node icon={ServerIcon} label="Your platform" />
      <Track>
        {queue.map((k) => (
          <span
            key={k}
            aria-hidden="true"
            data-anim="window"
            style={{
              ...at(start + 200 + k * 220, 1500 - k * 220 + 400),
              left: `${k * 7}%`,
            }}
            className="absolute top-1/2 size-5 -translate-y-1/2 rounded-full bg-wattle ring-[3px] ring-surface"
          />
        ))}
        {queue.map((k) => (
          <Dot key={k} start={start + 1900 + k * 70} dur={2300} />
        ))}
      </Track>
      <Node icon={BankIcon} label="The bank" />
    </div>
  );
}

export function MoneyMoves() {
  return (
    <ul className="space-y-10 md:space-y-8">
      {lanes.map((l, i) => (
        <li
          key={l.title}
          className="grid items-center gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-10"
        >
          <div data-anim="focus" style={at(l.start)}>
            <span
              data-anim="pop"
              style={at(l.start)}
              className={`inline-block rounded-full px-3 py-1 text-label font-semibold ${chipTone[l.tone]}`}
            >
              {l.title}
            </span>
            <p className="mt-2 text-[1.125rem] font-semibold text-ink">
              {l.subtitle}
            </p>
            <ul className="mt-2 space-y-1 text-label text-copy">
              {l.items.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-2 shrink-0 rounded-full bg-magenta-chart"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            data-anim="rise"
            style={{ ...at(l.start, 700) } as CSSProperties}
            className="rounded-md bg-surface p-4 shadow-device"
          >
            <Graphic n={i} start={l.start} />
          </div>
        </li>
      ))}
    </ul>
  );
}
