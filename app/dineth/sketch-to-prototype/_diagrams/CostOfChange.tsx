import type { ReactNode } from "react";
import { CodeIcon, PencilIcon } from "../../_components/icons";
import { at } from "../../_components/diagram-kit";
import { CountUp } from "../../_components/CountUp";

// Same change, two moments. One unit of effort on paper; a hundred once built.
const DOT_START = 1900;
const PER_DOT = 26;

function Card({
  icon,
  title,
  subtitle,
  children,
  time,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
  children: ReactNode;
  time: number;
}) {
  return (
    <div
      data-anim="rise"
      style={at(time)}
      className="flex flex-col rounded-lg bg-surface p-6 sm:p-7"
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-md bg-harbour-tint text-harbour-deep"
        >
          {icon}
        </span>
        <div>
          <p className="font-serif text-[1.375rem] leading-tight font-semibold text-ink">
            {title}
          </p>
          <p className="mt-1 text-label text-muted">{subtitle}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

export function CostOfChange() {
  return (
    <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] md:items-stretch">
      <Card
        icon={<PencilIcon size={22} />}
        title="Changing a sketch"
        subtitle="Before any code is written"
        time={0}
      >
        <div className="flex flex-1 items-center justify-center py-10">
          <span
            aria-hidden="true"
            data-anim="pop"
            style={at(700, 500)}
            className="size-[22px] rounded-full bg-harbour-chart"
          />
        </div>
        <p className="text-[1.1875rem] font-semibold text-ink">
          About{" "}
          <CountUp to={1} from={0} delay={700} duration={400} /> unit of effort
        </p>
      </Card>

      <Card
        icon={<CodeIcon size={22} />}
        title="Changing it after it's built"
        subtitle="Once the feature is finished"
        time={1000}
      >
        <div
          aria-hidden="true"
          className="mx-auto my-6 grid w-full max-w-[320px] grid-cols-10 gap-2"
        >
          {Array.from({ length: 100 }, (_, i) => (
            <span
              key={i}
              data-anim="pop"
              style={at(DOT_START + i * PER_DOT, 420)}
              className="aspect-square rounded-full bg-harbour-chart"
            />
          ))}
        </div>
        <p className="text-[1.1875rem] font-semibold text-ink">
          About{" "}
          <CountUp
            to={100}
            from={0}
            delay={DOT_START}
            duration={100 * PER_DOT}
          />{" "}
          units of effort
        </p>
      </Card>
    </div>
  );
}
