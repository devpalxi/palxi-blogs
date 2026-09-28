export type ProfileLink = {
  label: string;
  href: string;
  external?: boolean;
};

// Add new entries here — the home page renders this list in order.
export const links: ProfileLink[] = [
  { label: "dineth", href: "/dineth" },
];
