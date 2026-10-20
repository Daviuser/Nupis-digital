import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problems } from "@/data/content";

export function ProblemsSection() {
  return (
    <section id="desafios" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <SectionHeading eyebrow="O desafio" title="Crescer sem estrutura cansa. Reconhece algum destes sinais?" />
      <ol className="mt-14 divide-y divide-line border-y border-line">
        {problems.map((problem, index) => (
          <li key={problem.title}>
            <Reveal delay={index * 0.06} className="grid gap-3 py-8 md:grid-cols-[5rem_1.2fr_1fr] md:items-baseline md:gap-8">
              <span className="font-display text-sm text-accent">0{index + 1}</span>
              <h3 className="font-display text-2xl font-medium">{problem.title}</h3>
              <p className="text-muted">{problem.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
