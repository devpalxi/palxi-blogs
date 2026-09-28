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
    slug: "sketch-to-prototype",
    title: "From sketch to clickable prototype: our prototyping workflow",
    summary:
      "Before we write a single line of code, we sketch ideas, build a pretend version you can tap through, and watch real people try it. Here is how an idea becomes a feature, and why testing first leads to better products.",
    tag: "Design process",
    author: "Dineth Nimsara",
    publishedOn: "2026-09-28",
    readingMinutes: 8,
  },
  {
    slug: "designing-for-trust",
    title: "Designing for trust: how we approach UI/UX in fintech",
    summary:
      "Money apps have to feel safe as well as work properly. Here is how small design decisions, from a clear confirmation screen to a calm error message, help you feel sure about every payment.",
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
