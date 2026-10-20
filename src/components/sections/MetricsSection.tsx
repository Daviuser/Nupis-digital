import { Reveal } from "@/components/ui/Reveal";
import { metrics } from "@/data/content";

export function MetricsSection() {
  return (
    <section id="resultados" className="border-y border-line bg-ink-soft">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Reveal
            key={metric.label}
            delay={index * 0.08}
            className="border-b border-line px-6 py-10 odd:border-r max-lg:nth-last-[-n+2]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <dd className="font-display text-3xl font-semibold text-accent sm:text-4xl xl:text-5xl">{metric.value}</dd>
            <dt className="mt-2 text-sm text-muted">{metric.label}</dt>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
