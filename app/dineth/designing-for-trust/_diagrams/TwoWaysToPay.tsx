import {
  BankIcon,
  CardIcon,
  CheckIcon,
  LockIcon,
  PhoneIcon,
} from "../../_components/icons";
import { StepFlow, step, type FlowStep } from "./shared";

const lanes: { title: string; subtitle: string; startAt: number; steps: FlowStep[] }[] = [
  {
    title: "Paying by card",
    subtitle: "Card details go to a certified payments specialist",
    startAt: 1,
    steps: [
      {
        icon: CardIcon,
        title: "You enter your card",
        detail: "In a secure payment box on the screen.",
      },
      {
        icon: LockIcon,
        title: "It's locked and sent on",
        detail: "Encrypted and passed straight to the payments specialist.",
      },
      {
        icon: BankIcon,
        title: "Your bank says yes",
        detail: "Usually within a few seconds.",
      },
      {
        icon: CheckIcon,
        title: "Payment complete",
        detail: "You get a receipt straight away.",
        tone: "done",
      },
    ],
  },
  {
    title: "Paying from your bank account",
    subtitle: "Using PayTo, part of Australia's fast payments system",
    startAt: 6,
    steps: [
      {
        icon: PhoneIcon,
        title: "You approve it in your banking",
        detail: "You see who is asking and how much, then say yes.",
      },
      {
        icon: BankIcon,
        title: "Your bank sends the money",
        detail: "Straight from your account. No card needed.",
      },
      {
        icon: CheckIcon,
        title: "Payment complete",
        detail: "You stay in control: pause or cancel in your banking.",
        tone: "done",
      },
    ],
  },
];

export function TwoWaysToPay() {
  return (
    <div className="divide-y divide-hairline">
      {lanes.map((lane) => (
        <section key={lane.title} className="py-8 first:pt-0 last:pb-0">
          <div data-anim="fade" style={step(lane.startAt - 1)} className="mb-6">
            <h3 className="font-serif text-title font-semibold text-ink">
              {lane.title}
            </h3>
            <p className="text-label text-muted">{lane.subtitle}</p>
          </div>
          <StepFlow steps={lane.steps} startAt={lane.startAt} />
        </section>
      ))}
    </div>
  );
}
