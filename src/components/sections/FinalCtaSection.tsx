import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

export function FinalCtaSection() {
  return (
    <section id="diagnostico" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <Reveal className="rounded-3xl border border-line bg-gradient-to-br from-surface to-ink-soft px-6 py-16 text-center sm:px-16">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Pronto para estruturar o crescimento da sua empresa?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-muted sm:text-lg">
          Agende uma reunião de diagnóstico gratuita e descubra como transformar sua operação comercial em uma estrutura de crescimento previsível.
        </p>
        <Button href={siteConfig.bookingUrl} className="mt-10 w-full sm:w-auto">
          Agendar diagnóstico gratuito
        </Button>
      </Reveal>
    </section>
  );
}
