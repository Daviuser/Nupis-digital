import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutions } from "@/data/content";

export function SolutionsSection() {
  return (
    <section id="solucoes" className="bg-ink-soft py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.3fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow="Soluções" title="Cada área do crescimento, conectada em uma só estratégia." />
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {solutions.map((solution) => (
            <li key={solution.title}>
              <Reveal className="py-7">
                <h3 className="font-display text-xl font-medium">{solution.title}</h3>
                <p className="mt-2 text-muted">{solution.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
