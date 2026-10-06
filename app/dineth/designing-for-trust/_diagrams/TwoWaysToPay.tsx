import type { ComponentType, CSSProperties, ReactNode, SVGProps } from "react";
import {
  BankIcon,
  CardIcon,
  CheckIcon,
  LockIcon,
  PhoneIcon,
} from "../../_components/icons";
import { Bar, at } from "../../_components/diagram-kit";
import { Scramble } from "../../_components/Scramble";

// Two routes run side by side, then meet at the same receipt.
const T = {
  first: 400,
  second: 1600,
  third: 3000,
  joinDown: 3700,
  joinAcross: 4100,
  joinOut: 4500,
  print: 4800,
};

type Icon = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

function Stage({
  icon: Icon,
  title,
  detail,
  time,
  until,
  children,
}: {
  icon: Icon;
  title: string;
  detail: string;
  time: number;
  until?: number;
  children?: ReactNode;
}) {
  return (
    <li className="relative flex gap-4 pb-7 last:pb-0">
      {until && (
        <span
          aria-hidden="true"
          className="absolute top-12 bottom-1 left-[21px] w-[3px] rounded-full bg-hairline-strong"
        >
          <span
            data-anim="grow-y"
            style={at(time + 300, until - time - 300, { "--ease": "linear" } as CSSProperties)}
            className="block h-full w-full rounded-full bg-magenta"
          />
        </span>
      )}
      <span
        aria-hidden="true"
        data-anim="pop"
        style={at(time)}
        className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-magenta text-surface"
      >
        <Icon size={22} />
      </span>
      <div data-anim="focus" style={at(time)} className="min-w-0 flex-1 pt-1">
        <p className="text-[1.125rem] leading-snug font-semibold text-ink">
          {title}
        </p>
        <p className="mt-1 text-label text-copy">{detail}</p>
        {children}
      </div>
    </li>
  );
}

function Lane({
  icon: Icon,
  title,
  subtitle,
  children,
}: {
  icon: Icon;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section
      data-anim="rise"
      style={at(0)}
      className="rounded-lg bg-surface p-6 sm:p-7"
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-md bg-magenta-tint text-magenta-deep"
        >
          <Icon size={22} />
        </span>
        <div>
          <h3 className="font-heading text-[1.375rem] leading-tight font-semibold text-ink">
            {title}
          </h3>
          <p className="mt-1 text-label text-muted">{subtitle}</p>
        </div>
      </div>
      <ol className="mt-6">{children}</ol>
    </section>
  );
}

// Where the two routes meet. Desktop: two lines join into one.
function Join() {
  const line = "absolute rounded-full bg-magenta";
  return (
    <div aria-hidden="true" className="relative h-12 md:h-16">
      <span
        data-anim="grow-y"
        style={at(T.joinDown, 400)}
        className={`${line} top-0 hidden h-1/2 w-[3px] md:block left-[calc(25%-6px)]`}
      />
      <span
        data-anim="grow-y"
        style={at(T.joinDown, 400)}
        className={`${line} top-0 hidden h-1/2 w-[3px] md:block left-[calc(75%+4px)]`}
      />
      <span
        data-anim="grow-x"
        style={at(T.joinAcross, 400)}
        className={`${line} top-[calc(50%-1.5px)] hidden h-[3px] md:block left-[calc(25%-6px)] w-[calc(25%+7.5px)]`}
      />
      <span
        data-anim="grow-x"
        style={at(T.joinAcross, 400)}
        className={`${line} top-[calc(50%-1.5px)] hidden h-[3px] origin-right md:block left-[calc(50%-1.5px)] w-[calc(25%+8.5px)]`}
      />
      <span
        data-anim="grow-y"
        style={at(T.joinOut, 300)}
        className={`${line} top-0 h-full w-[3px] left-[calc(50%-1.5px)] md:top-1/2 md:h-1/2`}
      />
    </div>
  );
}

function Receipt() {
  return (
    <div className="mx-auto w-full max-w-[300px]">
      {/* The slot the receipt feeds out of. */}
      <div aria-hidden="true" className="relative z-10 h-3.5 rounded-full bg-ink" />
      <div className="-mt-1.5 overflow-hidden px-2.5 pb-4">
        <div
          data-anim="print"
          style={at(T.print, 1400)}
          className="paper-shadow"
        >
          <div className="receipt-edge bg-surface px-6 pt-7 pb-9">
          <p className="flex items-center gap-2.5 font-heading text-[1.25rem] font-semibold text-magenta">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-magenta text-surface">
              <CheckIcon size={20} />
            </span>
            Payment complete
          </p>
          <p className="mt-3 text-label text-copy">
            The same receipt, whichever way you paid.
          </p>
          <div
            aria-hidden="true"
            className="mt-5 space-y-3 border-t border-dashed border-hairline-strong pt-4"
          >
            <div className="flex items-center justify-between gap-3">
              <Bar className="w-20" />
              <Bar className="w-16" />
            </div>
            <div className="flex items-center justify-between gap-3">
              <Bar className="w-14" />
              <Bar className="w-20" strong />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TwoWaysToPay() {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2">
        <Lane
          icon={CardIcon}
          title="Paying by card"
          subtitle="Card details go to a certified payments specialist"
        >
          <Stage
            icon={CardIcon}
            title="You enter your card"
            detail="In a secure payment box on the screen."
            time={T.first}
            until={T.second}
          >
            <p
              aria-hidden="true"
              className="mt-3 flex h-11 items-center gap-2.5 rounded-sm border border-hairline-strong px-3.5 text-[1.125rem] tracking-[0.12em] text-ink"
            >
              {[0, 1, 2, 3].map((g) => (
                <span key={g} data-anim="fade" style={at(T.first + 150 + g * 160, 250)}>
                  ••••
                </span>
              ))}
            </p>
          </Stage>
          <Stage
            icon={LockIcon}
            title="It's scrambled and sent on"
            detail="Encrypted, then passed straight to the payments specialist."
            time={T.second}
            until={T.third}
          >
            <p className="mt-3 flex h-11 items-center overflow-hidden rounded-sm bg-magenta-tint px-3.5 text-[1.0625rem] font-semibold whitespace-nowrap text-magenta-deep">
              <Scramble
                text="k7#Q zR8! w2&d M9$x"
                delay={T.second}
                duration={1200}
              />
              <span className="sr-only">
                The card number now looks like meaningless characters.
              </span>
            </p>
          </Stage>
          <Stage
            icon={BankIcon}
            title="Your bank says yes"
            detail="Usually within a few seconds."
            time={T.third}
          />
        </Lane>

        <Lane
          icon={BankIcon}
          title="Paying from your bank account"
          subtitle="Using PayTo, part of Australia's fast payments system"
        >
          <Stage
            icon={PhoneIcon}
            title="Your banking asks you first"
            detail="In the banking app you already know. You see who is asking and how much."
            time={T.first}
            until={T.second}
          >
            <div
              aria-hidden="true"
              className="mt-3 grid grid-cols-2 gap-2 font-semibold"
            >
              <span className="flex h-11 items-center justify-center rounded-sm border border-hairline-strong text-ink">
                Decline
              </span>
              <span className="relative flex h-11 items-center justify-center rounded-sm bg-magenta text-surface">
                Approve
                <span
                  data-anim="flash"
                  style={at(T.second - 250, 900)}
                  className="absolute -inset-1 rounded-md ring-3 ring-magenta/40"
                />
              </span>
            </div>
          </Stage>
          <Stage
            icon={CheckIcon}
            title="You say yes"
            detail="Nothing moves until you approve it. You can pause or cancel later in your banking."
            time={T.second}
            until={T.third}
          />
          <Stage
            icon={BankIcon}
            title="Your bank sends the money"
            detail="Straight from your account. No card needed."
            time={T.third}
          />
        </Lane>
      </div>

      <Join />
      <Receipt />
    </div>
  );
}
