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
      className="my-8 sm:my-10 rounded-xl bg-shallows px-5 py-5 sm:px-7 sm:py-6 text-sm sm:text-body ring-1 ring-hairline/60"
    >
      <p className="text-xs sm:text-label font-semibold text-magenta-deep">
        In plain words
      </p>
      <p className="mt-2 leading-relaxed">
        <strong className="text-ink font-semibold">{term}</strong> {children}
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
      <div className={`overflow-hidden rounded-xl bg-shallows shadow-sm ring-1 ring-hairline/60 ${frameClassName}`}>
        <Image
          src={src}
          alt={alt}
          sizes={sizes}
          placeholder="blur"
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.01]"
        />
      </div>
      <figcaption className="mt-2.5 sm:mt-3 text-xs sm:text-label text-muted leading-relaxed">
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
      className="mx-auto my-12 sm:my-16 max-w-[44rem] rounded-xl bg-shallows px-5 py-6 sm:px-10 sm:py-8 shadow-sm ring-1 ring-hairline/60"
    >
      <h2
        id="takeaways-title"
        className="font-heading text-lg sm:text-title font-semibold text-ink"
      >
        {title}
      </h2>
      <ol className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 sm:gap-4 items-start">
            <span
              aria-hidden="true"
              className="flex size-7 sm:size-9 shrink-0 items-center justify-center rounded-full bg-magenta text-xs sm:text-label font-semibold text-surface"
            >
              {i + 1}
            </span>
            <span className="pt-0.5 text-sm sm:text-body leading-relaxed">{item}</span>
          </li>
        ))}
      </ol>
      {children && <div className="mt-6 text-sm sm:text-body leading-relaxed">{children}</div>}
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
      className="mx-auto mt-12 sm:mt-16 max-w-[44rem] border-t border-hairline pt-6 sm:pt-8"
    >
      <h2
        id="sources-title"
        className="font-heading text-lg sm:text-title font-semibold text-ink"
      >
        Where our facts come from
      </h2>
      <ul className="mt-3 sm:mt-4 space-y-1 text-xs sm:text-label leading-relaxed text-muted">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="inline-block py-1.5 sm:py-2 text-copy underline decoration-1 underline-offset-2 hover:text-magenta transition-colors break-words"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
