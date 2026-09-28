import {
  CheckIcon,
  LockIcon,
  QuestionIcon,
  ReceiptIcon,
} from "../../_components/icons";
import { StepFlow, type FlowStep } from "../../_components/diagram-kit";

const moments: FlowStep[] = [
  {
    icon: CheckIcon,
    title: "Before you pay",
    detail: "You can see exactly what you're agreeing to, including every fee.",
  },
  {
    icon: LockIcon,
    title: "While you pay",
    detail: "Your details are protected, and every step is simple and familiar.",
  },
  {
    icon: QuestionIcon,
    title: "If something goes wrong",
    detail: "You're told plainly what happened to your money and what to do next.",
    tone: "caution",
  },
  {
    icon: ReceiptIcon,
    title: "After you pay",
    detail: "You get a clear record straight away, and know who to contact.",
    tone: "done",
  },
];

export function TrustJourney() {
  return <StepFlow steps={moments} />;
}
