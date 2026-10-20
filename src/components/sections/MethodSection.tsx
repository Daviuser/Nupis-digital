import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { methodSteps } from "@/data/content";

export function MethodSection() {
  return (
    <section id="metodo" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <SectionHeading eyebrow="Método" title="Quatro etapas para transformar esforço em estrutura." />
      <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
        {methodSteps.map((step, index) => (
          <li key={step.number} className="bg-ink">
            <Reveal delay={index * 0.08} className="flex h-full flex-col gap-4 p-8">
              <span className="font-display text-5xl font-semibold text-accent/90">{step.number}</span>
              <h3 className="font-display text-xl font-medium">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
