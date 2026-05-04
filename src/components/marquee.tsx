"use client";

type Props = {
  items: string[];
  className?: string;
  reverse?: boolean;
  speed?: number;
};

export function Marquee({ items, className, reverse = false, speed = 40 }: Props) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`mask-fade-x relative w-full overflow-hidden ${className ?? ""}`}
      aria-hidden
    >
      <div
        className="marquee-track flex w-max items-center gap-12 py-2 will-change-transform"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-12 text-2xl font-medium tracking-tight text-[var(--color-fg)]/55 sm:text-3xl"
          >
            <span>{item}</span>
            <span className="size-1.5 rounded-full bg-[var(--color-accent)]/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
