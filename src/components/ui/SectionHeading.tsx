import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
