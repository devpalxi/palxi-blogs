import type { ComponentType, CSSProperties, SVGProps } from "react";
import {
  BankIcon,
  CardIcon,
  CheckIcon,
  LockIcon,
  PhoneIcon,
} from "../../_components/icons";
import { step } from "./shared";

type Step = {
  icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
  title: string;
  detail: string;
  done?: boolean;
};

type Lane = { title: string; subtitle: string; startAt: number; steps: Step[] };

const lanes: Lane[] = [
  {
    title: "Paying by card",
    subtitle: "Handled by Stripe",
    startAt: 0,
    steps: [
      {
        icon: CardIcon,
        title: "You enter your card",
        detail: "Into the payment box on the harbr screen.",
      },
      {
        icon: LockIcon,
        title: "It goes straight to Stripe",
        detail: "Locked and sent directly to Stripe, not through our computers.",
      },
      {
        icon: BankIcon,
        title: "Your bank says yes",
        detail: "Usually within a few seconds.",
      },
      {
        icon: CheckIcon,
        title: "The marina is paid",
        detail: "You get a receipt straight away.",
        done: true,
      },
    ],
  },
  {
    title: "Paying from your bank account",
    subtitle: "PayTo, handled by Zepto",
    startAt: 5,
    steps: [
      {
        icon: PhoneIcon,
        title: "You approve it in your bank app",
        detail: "You see who is asking and how much, then say yes.",
      },
      {
        icon: BankIcon,
        title: "Your bank sends the money",
        detail: "Straight from your account. No card needed.",
      },
      {
        icon: CheckIcon,
        title: "The marina is paid",
        detail: "Within seconds, any time of day or night.",
        done: true,
      },
    ],
  },
];

function LaneSteps({ lane }: { lane: Lane }) {
  return (
    <ol
      style={{ "--cols": lane.steps.length } as CSSProperties}
      className="mt-6 flex flex-col md:grid md:grid-cols-[repeat(var(--cols),minmax(0,1fr))] md:gap-4"
    >
      {lane.steps.map((s, i) => {
        const Icon = s.icon;
        const at = lane.startAt + 1 + i;
        const last = i === lane.steps.length - 1;
        return (
          <li
            key={s.title}
            className="relative flex gap-4 pb-8 last:pb-0 md:block md:pb-0"
          >
            {!last && (
              <>
                <span
                  aria-hidden="true"
                  data-anim="grow-x"
                  style={step(at + 0.6)}
                  className="absolute top-[22.5px] left-14 hidden h-[3px] w-[calc(100%-3rem)] rounded-full bg-harbour md:block"
                />
                <span
                  aria-hidden="true"
                  data-anim="grow-y"
                  style={step(at + 0.6)}
                  className="absolute top-14 left-[22.5px] h-[calc(100%-4rem)] w-[3px] rounded-full bg-harbour md:hidden"
                />
              </>
            )}
            <span
              data-anim="pop"
              style={step(at)}
              className={`relative flex size-12 shrink-0 items-center justify-center rounded-full ${
                s.done
                  ? "bg-settled text-surface"
                  : "bg-surface text-harbour shadow-device"
              }`}
            >
              <Icon size={24} />
            </span>
            <div data-anim="rise" style={step(at)} className="pt-1 md:mt-4 md:pt-0 md:pr-3">
              <p
                className={`text-[1.125rem] leading-snug font-semibold ${
                  s.done ? "text-settled" : "text-ink"
                }`}
              >
                {s.title}
              </p>
              <p className="mt-1 text-label text-copy">{s.detail}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function TwoWaysToPay() {
  return (
    <div className="divide-y divide-hairline">
      {lanes.map((lane) => (
        <section key={lane.title} className="py-8 first:pt-0 last:pb-0">
          <div data-anim="fade" style={step(lane.startAt)}>
            <h3 className="font-serif text-title font-semibold text-ink">
              {lane.title}
            </h3>
            <p className="text-label text-muted">{lane.subtitle}</p>
          </div>
          <LaneSteps lane={lane} />
        </section>
      ))}
    </div>
  );
}
