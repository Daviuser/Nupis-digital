import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { differentials } from "@/data/content";

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-ink-soft py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Diferenciais" title="O que sustenta o nosso jeito de trabalhar." />
        <dl className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 0.08} className="border-t border-accent/60 pt-5">
              <dt className="font-display text-xl font-medium">{item.title}</dt>
              <dd className="mt-2 text-muted">{item.description}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
