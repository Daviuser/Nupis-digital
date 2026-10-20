import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WordFade } from "@/components/ui/WordFade";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section id="topo" className="relative flex min-h-svh items-end overflow-hidden pb-16 pt-32 sm:items-center sm:pb-24">
      <Image
        src="/images/escritorio.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30 sm:bg-gradient-to-r sm:from-ink sm:via-ink/80 sm:to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Comunicação e crescimento empresarial
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            <WordFade text="Sua empresa pode crescer com previsibilidade. E a gente mostra como." />
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg">
            A Nupis é uma consultoria de comunicação e crescimento empresarial. Ajudamos negócios que já cansaram de correr atrás de resultado e querem crescer com estrutura, clareza e constância.
          </p>
          <Button href={siteConfig.bookingUrl} className="mt-9 w-full sm:w-auto">
            Agendar diagnóstico gratuito
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
