import {
  BranchIcon,
  CheckIcon,
  CodeIcon,
  EyeIcon,
  MergeIcon,
  PencilIcon,
} from "../../_components/icons";
import { StepFlow, step, type FlowStep } from "../../_components/diagram-kit";

const lanes: { title: string; subtitle: string; startAt: number; steps: FlowStep[] }[] = [
  {
    title: "The design branch",
    subtitle: "In Figma, our design tool",
    startAt: 1,
    steps: [
      {
        icon: PencilIcon,
        title: "A copy of the design is made",
        detail: "The approved designs stay untouched.",
      },
      {
        icon: EyeIcon,
        title: "New screens are designed and tried",
        detail: "Including testing them with real people.",
      },
      {
        icon: CheckIcon,
        title: "Reviewed and approved",
        detail: "Another designer checks the changes.",
        tone: "done",
      },
    ],
  },
  {
    title: "The code branch",
    subtitle: "In Git, where our code lives",
    startAt: 5,
    steps: [
      {
        icon: BranchIcon,
        title: "A copy of the code is made",
        detail: "The live product stays untouched.",
      },
      {
        icon: CodeIcon,
        title: "The feature is built to match",
        detail: "Following the approved design exactly.",
      },
      {
        icon: CheckIcon,
        title: "Reviewed and tested",
        detail: "Another developer checks every change.",
        tone: "done",
      },
    ],
  },
];

export function ParallelBranches() {
  return (
    <div>
      <div className="divide-y divide-hairline">
        {lanes.map((lane) => (
          <section key={lane.title} className="py-8 first:pt-0">
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
      <p
        data-anim="rise"
        style={step(8.4)}
        className="mt-2 flex items-center gap-3 rounded-md bg-settled-tint px-5 py-4 text-[1.125rem] font-semibold text-settled"
      >
        <MergeIcon size={26} className="shrink-0" />
        Both are merged back into the live product together, so what you see
        matches what was designed and tested.
      </p>
    </div>
  );
}
