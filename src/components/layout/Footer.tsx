import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import { navItems, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="relative h-14 w-36">
            <Image src="/brand/logo.png" alt={siteConfig.name} fill sizes="144px" className="object-contain object-left" />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">{siteConfig.description}</p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-col gap-3 text-sm text-muted">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-3 text-sm text-muted">
          <a href={siteConfig.bookingUrl} className="font-semibold text-accent">
            Agendar diagnóstico gratuito
          </a>
          {siteConfig.email && (
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-paper">
              <Mail aria-hidden className="size-4" />
              {siteConfig.email}
            </a>
          )}
          {siteConfig.phone && (
            <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="flex items-center gap-2 hover:text-paper">
              <Phone aria-hidden className="size-4" />
              {siteConfig.phone}
            </a>
          )}
        </div>
      </div>
      <p className="border-t border-line px-6 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
