import { UsersIcon } from "../../_components/icons";
import { step } from "../../_components/diagram-kit";

type Copy = { name: string; version: string; live: boolean; status: string };

const frames: { title: string; body: string; copies: [Copy, Copy] }[] = [
  {
    title: "1. Prepare",
    body: "Customers use copy A. The new version is set up and checked on copy B.",
    copies: [
      { name: "Copy A", version: "Current version", live: true, status: "Live" },
      { name: "Copy B", version: "New version", live: false, status: "Getting ready" },
    ],
  },
  {
    title: "2. Switch",
    body: "Customers are moved across to copy B in an instant. No closed sign.",
    copies: [
      { name: "Copy A", version: "Current version", live: false, status: "Standing by" },
      { name: "Copy B", version: "New version", live: true, status: "Live" },
    ],
  },
  {
    title: "3. Safety net",
    body: "Copy A stays ready. If anything looks wrong, we switch straight back.",
    copies: [
      { name: "Copy A", version: "Current version", live: true, status: "Live again" },
      { name: "Copy B", version: "New version", live: false, status: "Being fixed" },
    ],
  },
];

function CopyBox({ copy }: { copy: Copy }) {
  return (
    <div
      className={`rounded-md px-3 py-3 ${
        copy.live
          ? "bg-harbour-tint ring-2 ring-harbour"
          : "bg-surface ring-1 ring-hairline-strong"
      }`}
    >
      <p className="text-label font-semibold text-ink">{copy.name}</p>
      <p className="text-label text-muted">{copy.version}</p>
      <p
        className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-label font-semibold ${
          copy.live ? "bg-harbour text-surface" : "text-muted"
        }`}
      >
        {copy.live && <UsersIcon size={16} />}
        {copy.status}
      </p>
    </div>
  );
}

export function TwoCopies() {
  return (
    <ol className="grid gap-6 md:grid-cols-3">
      {frames.map((f, i) => (
        <li
          key={f.title}
          data-anim="rise"
          style={step(i * 1.2)}
          className="flex flex-col rounded-md bg-surface p-5"
        >
          <p className="font-serif text-title font-semibold text-ink">
            {f.title}
          </p>
          <p className="mt-2 text-copy">{f.body}</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <CopyBox copy={f.copies[0]} />
            <CopyBox copy={f.copies[1]} />
          </div>
        </li>
      ))}
    </ol>
  );
}
