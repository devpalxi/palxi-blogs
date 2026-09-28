import type { ReactNode } from "react";
import { BankIcon, CardIcon, CheckIcon, LockIcon } from "../../_components/icons";
import { Pin, step } from "../../_components/diagram-kit";

const changes = [
  {
    title: "A plain question instead of jargon",
    body: "“Payment instrument” became “How would you like to pay?”",
  },
  {
    title: "Bigger choices, easier to tap",
    body: "Small round buttons became large options with a picture and a name.",
  },
  {
    title: "Reassurance where people paused",
    body: "A short line explains nothing is charged until you confirm.",
  },
  {
    title: "One clear next step",
    body: "A single, large button that says what happens next.",
  },
];

function Frame({
  label,
  tone,
  children,
}: {
  label: string;
  tone: "before" | "after";
  children: ReactNode;
}) {
  return (
    <div>
      <p
        className={`mb-4 inline-flex rounded-full px-3 py-1 text-label font-semibold ${
          tone === "before"
            ? "bg-surface text-muted ring-1 ring-hairline-strong"
            : "bg-harbour-tint text-harbour-deep"
        }`}
      >
        {label}
      </p>
      <div
        aria-hidden="true"
        className="mx-auto w-full max-w-[320px] rounded-[26px] bg-surface p-3 shadow-device"
      >
        <div className="min-h-[400px] rounded-[18px] border border-hairline px-5 py-6 text-label">
          {children}
        </div>
      </div>
    </div>
  );
}

function Before() {
  return (
    <Frame label="Early wireframe" tone="before">
      <div className="h-3 w-24 rounded-full bg-hairline-strong" />
      <p className="mt-6 text-muted">Payment instrument</p>
      <div className="mt-4 space-y-3">
        {["Card", "Account"].map((o) => (
          <div key={o} className="flex items-center gap-2 text-muted">
            <span className="size-4 rounded-full border-2 border-hairline-strong" />
            {o}
          </div>
        ))}
      </div>
      <div className="mt-6 flex h-16 items-center justify-center rounded-sm border-2 border-dashed border-hairline-strong text-muted">
        Terms
      </div>
      <div className="mt-8 ml-auto flex h-9 w-24 items-center justify-center rounded-sm border-2 border-hairline-strong text-muted">
        Submit
      </div>
    </Frame>
  );
}

function Option({
  icon,
  label,
  selected = false,
}: {
  icon: ReactNode;
  label: string;
  selected?: boolean;
}) {
  return (
    <div
      className={`flex min-h-14 items-center gap-3 rounded-md px-4 py-3 ${
        selected
          ? "bg-harbour-tint text-ink ring-2 ring-harbour"
          : "text-ink ring-1 ring-hairline-strong"
      }`}
    >
      <span className="text-harbour">{icon}</span>
      <span className="flex-1 font-semibold">{label}</span>
      {selected && (
        <span className="flex size-6 items-center justify-center rounded-full bg-harbour text-surface">
          <CheckIcon size={16} />
        </span>
      )}
    </div>
  );
}

function After() {
  return (
    <Frame label="After testing" tone="after">
      <div className="relative pr-10">
        <p className="font-serif text-[1.375rem] leading-tight font-semibold text-ink">
          How would you like to pay?
        </p>
        <Pin n={1} className="absolute top-0 right-0" />
      </div>
      <div className="relative mt-5 space-y-3 pr-10">
        <Option icon={<CardIcon size={24} />} label="Card" selected />
        <Option icon={<BankIcon size={24} />} label="Bank account" />
        <Pin n={2} className="absolute top-3 right-0" />
      </div>
      <div className="relative mt-5 pr-10">
        <p className="flex items-start gap-2 text-copy">
          <LockIcon size={20} className="mt-0.5 shrink-0 text-harbour" />
          Nothing is charged until you confirm.
        </p>
        <Pin n={3} className="absolute top-0 right-0" />
      </div>
      <div className="relative mt-6 pr-10">
        <div className="flex min-h-12 items-center justify-center rounded-sm bg-harbour font-semibold text-surface">
          Continue
        </div>
        <Pin n={4} className="absolute top-2 right-0" />
      </div>
    </Frame>
  );
}

export function BeforeAfter() {
  return (
    <div>
      <div className="grid gap-10 md:grid-cols-2 md:gap-8">
        <div data-anim="rise" style={step(0)}>
          <Before />
        </div>
        <div data-anim="rise" style={step(1)}>
          <After />
        </div>
      </div>

      <ol className="mt-10 grid gap-6 md:grid-cols-2 md:gap-x-8">
        {changes.map((c, i) => (
          <li
            key={c.title}
            data-anim="rise"
            style={step(i + 1)}
            className="flex gap-4"
          >
            <Pin n={i + 1} static />
            <div>
              <p className="text-[1.1875rem] font-semibold text-ink">
                {c.title}
              </p>
              <p className="mt-1 text-copy">{c.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
