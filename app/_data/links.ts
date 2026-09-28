export type ProfileLink = {
  label: string;
  description?: string;
  href: string;
  external?: boolean;
};

// Add new entries here — the home page renders this list in order.
export const links: ProfileLink[] = [
  {
    label: "dineth",
    description: "Stories on building money tools you can trust",
    href: "/dineth",
  },
  {
    label: "Ashinthya",
    description: "Guides for Australian financial services teams",
    href: "/ashinthya",
  },
];
