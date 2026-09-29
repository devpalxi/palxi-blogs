import {
  CheckIcon,
  EyeIcon,
  PencilIcon,
  ReplayIcon,
  UsersIcon,
} from "../../_components/icons";
import { StepFlow, step, type FlowStep } from "../../_components/diagram-kit";

const loop: FlowStep[] = [
  {
    icon: UsersIcon,
    title: "People use our products",
    detail: "Every day, in every product built from the system.",
  },
  {
    icon: EyeIcon,
    title: "We notice what trips them up",
    detail: "Through testing, feedback and questions to our support team.",
  },
  {
    icon: PencilIcon,
    title: "We improve the shared piece",
    detail: "Once, in the design system, and test the change.",
  },
  {
    icon: CheckIcon,
    title: "Every product gets it",
    detail: "The improvement reaches all our products together.",
    tone: "done",
  },
];

export function FeedbackLoop() {
  return (
    <div>
      <StepFlow steps={loop} />
      <p
        data-anim="rise"
        style={step(4.2)}
        className="mt-8 flex items-center gap-3 rounded-md border-2 border-dashed border-harbour/40 bg-surface px-5 py-4 text-label font-semibold text-harbour-deep"
      >
        <ReplayIcon size={22} className="shrink-0" />
        And round again. The system is never finished; it keeps learning from
        the people who use it.
      </p>
    </div>
  );
}
