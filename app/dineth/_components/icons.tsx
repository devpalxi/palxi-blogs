import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 24, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const CheckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Icon>
);

export const CrossIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />
  </Icon>
);

export const QuestionIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.6 9.3a2.5 2.5 0 014.8.9c0 1.7-2.4 2.2-2.4 3.8" />
    <path d="M12 17.2v.01" />
  </Icon>
);

export const CardIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="M3 10h18M7 15h3" />
  </Icon>
);

export const LockIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="5" y="10.5" width="14" height="10" rx="2" />
    <path d="M8 10.5V8a4 4 0 018 0v2.5" />
  </Icon>
);

export const BankIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3.5 9.5L12 4.5l8.5 5" />
    <path d="M5.5 10v7.5M9.8 10v7.5M14.2 10v7.5M18.5 10v7.5M3.5 20h17" />
  </Icon>
);

export const PhoneIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
    <path d="M10.5 18.5h3" />
  </Icon>
);

export const ReceiptIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 3.5h12v17l-2.4-1.5-2.4 1.5-2.4-1.5-2.4 1.5L6 20.5z" />
    <path d="M9 8.5h6M9 12h6M9 15.5h3.5" />
  </Icon>
);

export const ChatIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4.5 5.5h15v10h-8l-4.5 3.5v-3.5h-2.5z" />
    <path d="M8.5 9.5h7M8.5 12.5h4.5" />
  </Icon>
);

export const PencilIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M15.5 4.5l4 4L9 19l-5 1 1-5z" />
    <path d="M13.5 6.5l4 4" />
  </Icon>
);

export const TapIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M10 13.5V6a1.75 1.75 0 013.5 0v5.5" />
    <path d="M13.5 11a1.75 1.75 0 013.5 0v1a1.75 1.75 0 013.5 0v3a6 6 0 01-6 6h-1.2a6 6 0 01-4.6-2.2L5.6 15.4a1.6 1.6 0 012.3-2.2L10 15" />
  </Icon>
);

export const EyeIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="3" />
  </Icon>
);

export const HandoverIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3.5" y="4.5" width="17" height="12" rx="2" />
    <path d="M8.5 20h7M12 16.5V20M9 9.5l-2 2 2 2M15 9.5l2 2-2 2" />
  </Icon>
);

export const ArrowLeftIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </Icon>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const ReplayIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4.5 12a7.5 7.5 0 102.2-5.3" />
    <path d="M4.5 4.5v4h4" />
  </Icon>
);
