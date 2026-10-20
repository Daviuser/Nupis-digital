import type { NavItem } from "@/types";

export const siteConfig = {
  name: "Nupis Digital",
  description:
    "Consultoria de comunicação e crescimento empresarial. Estrutura, clareza e constância para crescer com previsibilidade.",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "#diagnostico",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
};

export const navItems: NavItem[] = [
  { label: "Resultados", href: "#resultados" },
  { label: "Desafios", href: "#desafios" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Método", href: "#metodo" },
  { label: "Diferenciais", href: "#diferenciais" },
];
