import type { ReactNode } from "react";
import { ChatIcon, ClipboardIcon, PhoneIcon } from "../../dineth/_components/icons";
import { Bar, at } from "../../dineth/_components/diagram-kit";
import { Ticker } from "./Ticker";
import { BellIcon, DocumentIcon, GlobeIcon, MailIcon, StampIcon } from "./icons";
import { linear } from "./shared";

// A hardship request has 21 days to be decided. Every channel leads into one
// case; the clock then runs day by day; a notice is sent and collections pause.
const CHANNELS = [
  { icon: PhoneIcon, label: "Phone" },
  { icon: MailIcon, label: "Email" },
  { icon: GlobeIcon, label: "Web form" },
  { icon: ChatIcon, label: "Chat" },
];
const DAYS = Array.from({ length: 21 }, (_, i) => i + 1);

const T_CASE = 1500;
const T_CAL = 2000;
const STEP = 150;
const T_NOTICE = T_CAL + 21 * STEP + 500;
const T_PAUSE = T_NOTICE + 1300;

function Panel({
  n,
  title,
  caption,
  delay,
  children,
}: {
  n: number;
  title: string;
  caption: string;
  delay: number;
  children: ReactNode;
}) {
  return (
    <section
      data-anim="rise"
      style={at(delay, 700)}
      className="mx-auto w-full max-w-[34rem] rounded-md bg-surface p-5 shadow-device lg:max-w-none"
    >
      <p className="flex items-center gap-3 text-[1.125rem] font-semibold text-ink">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-magenta text-label font-bold text-surface">
          {n}
        </span>
        {title}
      </p>
      <p className="mt-1 mb-4 text-label text-copy">{caption}</p>
      {children}
    </section>
  );
}

export function Hardship() {
  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)_minmax(0,1fr)]">
      <Panel
        n={1}
        title="Every channel, one case"
        caption="Created automatically with the date received."
        delay={0}
      >
        <div className="flex items-stretch gap-2">
          <ul className="space-y-2">
            {CHANNELS.map((c, i) => {
              const Icon = c.icon;
              return (
                <li
                  key={c.label}
                  data-anim="slide-l"
                  style={at(300 + i * 160)}
                  className="flex h-10 items-center gap-2 rounded-md bg-shallows px-3 text-label font-semibold text-ink"
                >
                  <Icon size={18} className="text-magenta" />
                  {c.label}
                </li>
              );
            })}
          </ul>
          <div aria-hidden="true" className="relative min-w-6 flex-1">
            {CHANNELS.map((c, i) => (
              <span
                key={c.label}
                className="absolute inset-x-0"
                style={{ top: `${20 + i * 48}px` }}
              >
                <span className="absolute inset-x-0 h-[3px] rounded-full bg-hairline-strong" />
                <span
                  data-anim="grow-x"
                  style={at(500 + i * 160, 500, linear)}
                  className="absolute inset-x-0 h-[3px] rounded-full bg-magenta"
                />
                <span
                  data-anim="ride-x"
                  style={at(600 + i * 160, 700, linear)}
                  className="absolute top-[1.5px] left-0 size-3.5 -translate-1/2 rounded-full bg-ink ring-[3px] ring-surface"
                />
              </span>
            ))}
          </div>
          <div
            data-anim="pop"
            style={at(T_CASE)}
            className="flex w-[5.5rem] shrink-0 flex-col items-center justify-center rounded-md bg-magenta p-3 text-center text-surface"
          >
            <ClipboardIcon size={28} />
            <span className="mt-1 text-label leading-tight font-semibold">
              Case opens
            </span>
            <span className="mt-2 w-full">
              <Bar className="w-full bg-surface/60" />
            </span>
          </div>
        </div>
      </Panel>

      <Panel
        n={2}
        title="The clock runs"
        caption="A visible countdown, with alerts before day 21."
        delay={T_CAL - 700}
      >
        <p
          data-anim="fade"
          style={at(T_CAL - 200)}
          className="mb-3 font-heading text-headline leading-none font-semibold text-ink"
        >
          <Ticker
            phases={[
              {
                at: T_CAL,
                dur: 20 * STEP,
                from: 1,
                to: 21,
                prefix: "Day ",
                suffix: " of 21",
              },
            ]}
            rest="21 days to decide"
          />
        </p>
        <ol aria-hidden="true" className="grid grid-cols-7 gap-1.5">
          {DAYS.map((d) => {
            const warn = d >= 18 && d < 21;
            const last = d === 21;
            const t = T_CAL + (d - 1) * STEP;
            return (
              <li
                key={d}
                className="relative flex aspect-square items-center justify-center rounded-md bg-hairline-strong/50 text-label font-semibold text-muted"
              >
                {d}
                <span
                  data-anim="pop"
                  style={at(t, 300)}
                  className={`absolute inset-0 flex items-center justify-center rounded-md text-surface ${
                    last ? "bg-stop" : warn ? "bg-wattle" : "bg-magenta-chart"
                  }`}
                >
                  {d}
                </span>
                {d === 18 && (
                  <span
                    data-anim="pop"
                    style={at(t + 150)}
                    className="absolute -top-2 -right-2 z-10 flex size-6 items-center justify-center rounded-full bg-wattle text-surface ring-2 ring-surface"
                  >
                    <BellIcon size={14} />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </Panel>

      <Panel
        n={3}
        title="Decided, noticed, applied"
        caption="No case closes without a stored customer notice."
        delay={T_NOTICE - 900}
      >
        <div className="relative mx-auto w-full max-w-[14rem] rounded-md bg-shallows p-4 pb-12 ring-1 ring-hairline-strong">
          <DocumentIcon size={22} className="text-muted" />
          <div className="mt-2 space-y-1.5">
            <Bar className="w-full" />
            <Bar className="w-5/6" />
            <Bar className="w-2/3" />
          </div>
          <span
            data-anim="stamp"
            style={at(T_NOTICE)}
            className="absolute right-2 bottom-2 flex -rotate-[4deg] items-center gap-1.5 rounded-md border-2 border-settled bg-surface/90 px-2.5 py-1 text-label font-bold text-settled uppercase"
          >
            <StampIcon size={18} />
            Notice sent
          </span>
        </div>

        <div
          data-anim="rise"
          style={at(T_PAUSE, 600)}
          className="mt-4 flex items-center gap-3"
        >
          <span aria-hidden="true" className="relative h-9 w-16 shrink-0">
            <span
              data-anim="fade"
              style={at(T_PAUSE + 500, 400)}
              className="absolute inset-0 rounded-full bg-muted/40"
            >
              <span className="absolute top-1 left-1 size-7 rounded-full bg-surface shadow-device" />
            </span>
            <span
              data-anim="swap-out"
              style={at(T_PAUSE + 500, 400)}
              className="absolute inset-0 rounded-full bg-magenta"
            >
              <span className="absolute top-1 right-1 size-7 rounded-full bg-surface shadow-device" />
            </span>
          </span>
          <p className="text-label text-copy">
            <strong className="text-ink">Arrangement applied:</strong> the
            schedule changes and collections pause.
          </p>
        </div>
      </Panel>
    </div>
  );
}
