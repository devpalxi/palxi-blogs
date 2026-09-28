import {
  BeakerIcon,
  ClipboardIcon,
  CodeIcon,
  EyeIcon,
  LayersIcon,
  ReceiptIcon,
} from "../../_components/icons";
import { StepFlow, step, type FlowStep } from "../../_components/diagram-kit";

const checks: FlowStep[] = [
  {
    icon: CodeIcon,
    title: "Built on a branch",
    detail: "In a safe copy, well away from customers.",
  },
  {
    icon: EyeIcon,
    title: "A second developer reviews it",
    detail: "Every change is read by someone who didn't write it.",
  },
  {
    icon: BeakerIcon,
    title: "Automatic tests run",
    detail: "The computer re-checks that everything else still works.",
  },
  {
    icon: ClipboardIcon,
    title: "A tester tries it",
    detail: "Checking it works the way people will really use it.",
  },
  {
    icon: LayersIcon,
    title: "Rehearsed on staging",
    detail: "A full practice copy, with no real customers or money.",
    tone: "done",
  },
];

export function ChecksPipeline() {
  return (
    <div>
      <StepFlow steps={checks} />
      <p
        data-anim="rise"
        style={step(5.2)}
        className="mt-8 flex items-start gap-3 rounded-md border-2 border-dashed border-harbour/40 bg-surface px-5 py-4 text-copy"
      >
        <ReceiptIcon size={24} className="mt-0.5 shrink-0 text-harbour-deep" />
        <span>
          <strong className="text-ink">Every step is recorded:</strong> what
          changed, who made the change, who checked it, and when.
        </span>
      </p>
    </div>
  );
}
