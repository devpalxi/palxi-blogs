import type { ReactNode } from "react";
import { Bar, Pin, at } from "../../dineth/_components/diagram-kit";
import { ShieldIcon } from "../../dineth/_components/icons";
import { CalendarIcon, DocumentIcon, SearchIcon } from "./icons";

// A generic certificate is checked region by region. A highlight reads down
// it while the matching note lights up, like a reviewer's checklist.
const T = [900, 2500, 4100, 5700, 7300, 8900];

const checks = [
  {
    title: "Get the certificate",
    body: "Note the number, certification body, version and expiry.",
  },
  {
    title: "Look it up",
    body: "On IAF CertSearch or the JAS-ANZ register.",
  },
  {
    title: "Check the version",
    body: "ISO/IEC 27001:2022. A 2013 certificate is out of date.",
  },
  {
    title: "Read the scope",
    body: "It should name the entity and services delivering your work.",
  },
  {
    title: "Read the Statement of Applicability",
    body: "Look for secure development, suppliers, access and logging.",
  },
  {
    title: "Ask about the last audit",
    body: "Any major nonconformities in the latest surveillance audit?",
  },
];

function Reg({
  n,
  className = "",
  children,
}: {
  n: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      <span
        data-anim="flash"
        style={at(T[n - 1], 1500)}
        className="absolute -inset-2 rounded-md bg-magenta-tint ring-2 ring-magenta/35"
      />
      <div className="relative">{children}</div>
      <Pin n={n} at={T[n - 1]} className="absolute -top-3 -right-3 z-10" />
    </div>
  );
}

function Certificate() {
  return (
    <div className="mx-auto w-full max-w-[26rem] rounded-md bg-surface p-3 shadow-device ring-1 ring-hairline-strong">
      <div
        aria-hidden="true"
        className="rounded-sm border-2 border-double border-magenta/40 px-6 py-7"
      >
        <div className="flex flex-col items-center text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-magenta-tint text-magenta">
            <ShieldIcon size={26} />
          </span>
          <div className="mt-3 w-full space-y-1.5">
            <Bar className="mx-auto w-3/4" strong />
            <Bar className="mx-auto w-1/2" />
          </div>
        </div>

        <Reg n={1} className="mt-6">
          <div className="space-y-1.5">
            <Bar className="w-2/3" />
            <Bar className="w-1/2" />
            <Bar className="w-3/5" />
          </div>
        </Reg>

        <Reg n={2} className="mt-6">
          <div className="flex min-h-10 items-center gap-2 rounded-md px-3 ring-1 ring-hairline-strong">
            <SearchIcon size={18} className="shrink-0 text-magenta" />
            <Bar className="w-2/3" />
          </div>
        </Reg>

        <Reg n={3} className="mt-6">
          <div className="flex items-center gap-2">
            <CalendarIcon size={20} className="shrink-0 text-magenta" />
            <Bar className="w-1/3" strong />
            <Bar className="w-1/4" />
          </div>
        </Reg>

        <Reg n={4} className="mt-6">
          <div className="space-y-1.5">
            <Bar className="w-full" />
            <Bar className="w-11/12" />
            <Bar className="w-3/4" />
          </div>
        </Reg>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <Reg n={5}>
            <div className="flex items-start gap-2">
              <DocumentIcon size={22} className="mt-0.5 shrink-0 text-magenta" />
              <span className="flex-1 space-y-1.5 pt-1">
                <Bar className="w-full" />
                <Bar className="w-2/3" />
              </span>
            </div>
          </Reg>
          <Reg n={6} className="flex justify-end">
            <span className="flex size-14 items-center justify-center rounded-full border-2 border-dashed border-magenta/50">
              <Bar className="w-7" />
            </span>
          </Reg>
        </div>
      </div>
    </div>
  );
}

export function CertCheck() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] md:gap-14">
      <div data-anim="rise" style={at(0, 700)}>
        <Certificate />
      </div>
      <ol className="space-y-5">
        {checks.map((c, i) => (
          <li key={c.title} data-anim="focus" style={at(T[i])} className="flex gap-4">
            <Pin n={i + 1} static />
            <div>
              <p className="text-[1.1875rem] font-semibold text-ink">{c.title}</p>
              <p className="mt-0.5 text-label text-copy">{c.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
