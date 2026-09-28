import {
  ChatIcon,
  EyeIcon,
  HandoverIcon,
  PencilIcon,
  ReplayIcon,
  TapIcon,
} from "../../_components/icons";
import { StepFlow, step, type FlowStep } from "../../_components/diagram-kit";

const stages: FlowStep[] = [
  {
    icon: ChatIcon,
    title: "Listen",
    detail: "Talk with the people who'll use it, and understand the real problem.",
  },
  {
    icon: PencilIcon,
    title: "Sketch",
    detail: "Draw rough ideas on paper. Quick, cheap and easy to throw away.",
  },
  {
    icon: TapIcon,
    title: "Make it clickable",
    detail: "Build a realistic pretend version you can tap through.",
  },
  {
    icon: EyeIcon,
    title: "Watch people try it",
    detail: "Real people use it while we quietly take notes.",
  },
  {
    icon: HandoverIcon,
    title: "Improve, then build",
    detail: "Fix what tripped people up, then hand it to our developers.",
    tone: "done",
  },
];

export function ProcessOverview() {
  return (
    <div>
      <StepFlow steps={stages} />
      <div className="mt-8 md:grid md:grid-cols-5 md:gap-4">
        <p
          data-anim="rise"
          style={step(5.2)}
          className="flex items-center gap-3 rounded-md border-2 border-dashed border-harbour/40 bg-surface px-4 py-3 text-label font-semibold text-harbour-deep md:col-span-2 md:col-start-3"
        >
          <ReplayIcon size={22} className="shrink-0" />
          Make it clickable, watch, improve. Repeat until it&apos;s easy to use.
        </p>
      </div>
    </div>
  );
}
