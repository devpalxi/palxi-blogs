export type Post = {
  slug: string;
  title: string;
  summary: string;
  tag: string;
  author: string;
  publishedOn: string;
  readingMinutes: number;
};

// Newest first. Add each post here when its page is built.
export const posts: Post[] = [
  {
    slug: "one-design-system",
    title: "One design system, many products: how we keep Palxi consistent",
    summary:
      "Drive anywhere in Australia and the road signs speak the same language. One shared design system does the same for every Palxi product, so you learn once and feel at home everywhere.",
    tag: "Design system",
    author: "Dineth Nimsara",
    publishedOn: "2026-09-29",
    readingMinutes: 8,
  },
  {
    slug: "compliance-by-design",
    title: "Compliance by design: building UX around AML, SOC 2 and ISO 27001",
    summary:
      "The rules that protect your money and information shape our products from the start, so staying safe feels simple.",
    tag: "Security & compliance",
    author: "Dineth Nimsara",
    publishedOn: "2026-09-29",
    readingMinutes: 9,
  },
  {
    slug: "shipping-safely",
    title: "How we ship safely: feature branching explained",
    summary:
      "Every software update carries a small risk. We build new features on a safe copy, check them several times over and switch them on gradually, so the service you rely on keeps working.",
    tag: "Engineering",
    author: "Dineth Nimsara",
    publishedOn: "2026-09-28",
    readingMinutes: 9,
  },
  {
    slug: "sketch-to-prototype",
    title: "From sketch to clickable prototype: our prototyping workflow",
    summary:
      "Before we write a single line of code, we sketch ideas, build a pretend version you can tap through, and watch real people try it. That is how an idea becomes a feature, and why testing first leads to better products.",
    tag: "Design process",
    author: "Dineth Nimsara",
    publishedOn: "2026-09-28",
    readingMinutes: 8,
  },
  {
    slug: "designing-for-trust",
    title: "Designing for trust: how we approach UI/UX in fintech",
    summary:
      "Money apps have to feel safe as well as work properly. Small design decisions, from a clear confirmation screen to a calm error message, help you feel sure about every payment.",
    tag: "Design & trust",
    author: "Dineth Nimsara",
    publishedOn: "2026-09-28",
    readingMinutes: 8,
  },
];

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Darwin",
  }).format(new Date(`${iso}T12:00:00+09:30`));
}

export function getPost(slug: string) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Unknown post: ${slug}`);
  return post;
}
