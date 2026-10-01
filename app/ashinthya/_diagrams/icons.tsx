import type { SVGProps } from "react";

// Extra line icons for the Ashinthya diagrams, drawn to match the shared set.
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

export const BellIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 16.5V11a6 6 0 0112 0v5.5l1.5 2h-15z" />
    <path d="M10 21a2 2 0 004 0" />
  </Icon>
);

export const ClockIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 2" />
  </Icon>
);

export const WarningIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 4l9 15.5H3z" />
    <path d="M12 10v4.2M12 17.2v.1" />
  </Icon>
);

export const SearchIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="10.5" cy="10.5" r="6" />
    <path d="M15 15l5 5" />
  </Icon>
);

export const DocumentIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7 3.5h7l4 4V20.5H7z" />
    <path d="M14 3.5v4h4M9.5 12h5M9.5 15.5h5" />
  </Icon>
);

export const ServerIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="4" y="4" width="16" height="6.5" rx="1.5" />
    <rect x="4" y="13.5" width="16" height="6.5" rx="1.5" />
    <path d="M8 7.25v.1M8 16.75v.1" />
  </Icon>
);

export const FlagIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 21V4M6 5h11l-2.5 4L17 13H6" />
  </Icon>
);

export const SendIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 12l16-8-6 16-3-6.5z" />
  </Icon>
);

export const CalendarIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
    <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
  </Icon>
);

export const ScaleIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 4v16M7 20h10M5 8h14" />
    <path d="M5 8l-2.5 6a3 3 0 005 0zM19 8l-2.5 6a3 3 0 005 0z" />
  </Icon>
);

export const RefreshIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M19.5 12a7.5 7.5 0 01-13 5M4.5 12a7.5 7.5 0 0113-5" />
    <path d="M17.5 3v4h-4M6.5 21v-4h4" />
  </Icon>
);

export const ArrowDownIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </Icon>
);

export const CashIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="6.5" width="18" height="11" rx="2" />
    <circle cx="12" cy="12" r="2.6" />
    <path d="M6.5 9.5v.1M17.5 14.5v.1" />
  </Icon>
);

export const GlobeIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
  </Icon>
);

export const WrenchIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M14.5 6.5a4 4 0 005 5l-9.5 9.5a2.1 2.1 0 01-3-3L16.5 8.5z" />
    <path d="M14.5 6.5l3-3 3 3-3 3" />
  </Icon>
);

export const BuildingIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 20.5V4h9v16.5M14 9h5v11.5M3 20.5h18" />
    <path d="M8 8h3M8 12h3M8 16h3" />
  </Icon>
);

export const MailIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="M4 7.5l8 6 8-6" />
  </Icon>
);

export const CameraIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 8.5h3l1.5-2.5h7L17 8.5h3v10H4z" />
    <circle cx="12" cy="13" r="3.2" />
  </Icon>
);

export const FilmIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="4" y="4.5" width="16" height="15" rx="2" />
    <path d="M8 4.5v15M16 4.5v15M4 9h4M4 15h4M16 9h4M16 15h4" />
  </Icon>
);

export const HeartbeatIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 12h4l2-5 4 10 2-5h6" />
  </Icon>
);

export const StampIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M9 14h6l1.5 4h-9zM12 14V9.5M9.5 9.5a2.5 2.5 0 115 0" />
    <path d="M6 21h12" />
  </Icon>
);

export const DoorIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 20.5V4h9v16.5M3 20.5h18M12 12v.1" />
  </Icon>
);
