import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

export function Prose({ children }: { children: ReactNode }) {
  return <div className="prose-post mx-auto">{children}</div>;
}

export function PlainWords({
  term,
  children,
}: {
  term: string;
  children: ReactNode;
}) {
  return (
    <aside
      aria-label={`In plain words: ${term}`}
      className="rounded-lg bg-shallows px-7 py-6 text-body"
    >
      <p className="text-label font-semibold text-magenta-deep">
        In plain words
      </p>
      <p className="mt-2">
        <strong className="text-ink">{term}</strong> {children}
      </p>
    </aside>
  );
}

type Credit = {
  author: string;
  licence: string;
  licenceUrl: string;
  sourceUrl: string;
};

export function Photo({
  src,
  alt,
  caption,
  credit,
  sizes,
  className = "",
  frameClassName = "",
  eager = false,
}: {
  src: StaticImageData;
  alt: string;
  caption?: ReactNode;
  credit: Credit;
  sizes: string;
  className?: string;
  frameClassName?: string;
  eager?: boolean;
}) {
  const link = "underline decoration-1 underline-offset-2 hover:text-ink";
  return (
    <figure className={className}>
      <div className={`overflow-hidden rounded-lg bg-shallows ${frameClassName}`}>
        <Image
          src={src}
          alt={alt}
          sizes={sizes}
          placeholder="blur"
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="mt-3 text-label text-muted">
        {caption && <span>{caption} </span>}
        <span>
          Photo: {credit.author},{" "}
          <a href={credit.licenceUrl} className={link}>
            {credit.licence}
          </a>
          , via{" "}
          <a href={credit.sourceUrl} className={link}>
            Wikimedia Commons
          </a>
          .
        </span>
      </figcaption>
    </figure>
  );
}

export function Takeaways({
  title,
  items,
  children,
}: {
  title: string;
  items: ReactNode[];
  children?: ReactNode;
}) {
  return (
    <section
      aria-labelledby="takeaways-title"
      className="mx-auto my-16 max-w-[44rem] rounded-lg bg-shallows px-7 py-8 sm:px-10"
    >
      <h2
        id="takeaways-title"
        className="font-heading text-title font-semibold text-ink"
      >
        {title}
      </h2>
      <ol className="mt-6 space-y-5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4">
            <span
              aria-hidden="true"
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-magenta font-semibold text-surface"
            >
              {i + 1}
            </span>
            <span className="pt-1">{item}</span>
          </li>
        ))}
      </ol>
      {children && <div className="mt-7 text-body">{children}</div>}
    </section>
  );
}

export function Sources({
  items,
}: {
  items: { label: ReactNode; href: string }[];
}) {
  return (
    <section
      aria-labelledby="sources-title"
      className="mx-auto mt-16 max-w-[44rem] border-t border-hairline pt-8"
    >
      <h2
        id="sources-title"
        className="font-heading text-title font-semibold text-ink"
      >
        Where our facts come from
      </h2>
      <ul className="mt-4 space-y-1 text-label leading-relaxed text-muted">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="inline-block py-2 text-copy underline decoration-1 underline-offset-2 hover:text-magenta"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
