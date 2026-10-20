"use client";

import { AnimatePresence } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { navItems, siteConfig } from "@/config/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
import { MenuToggle } from "./MenuToggle";
import { MobileMenu } from "./MobileMenu";
import { NavLink } from "./NavLink";

const sectionIds = ["topo", ...navItems.map((item) => item.href.slice(1)), "diagnostico"];

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const activeId = useActiveSection(sectionIds);
  const close = useCallback(() => setOpen(false), []);

  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) close();
    };
    window.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", onChange);
    };
  }, [open, close]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[height,background-color,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          solid
            ? "h-16 border-line/60 bg-ink/75 backdrop-blur-xl backdrop-saturate-150"
            : "h-16 border-transparent bg-transparent md:h-20",
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-6">
          <a
            href="#topo"
            aria-label={siteConfig.name}
            onClick={close}
            className="relative h-9 w-28 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <Image
              src="/brand/logo.png"
              alt={siteConfig.name}
              fill
              sizes="112px"
              className="object-contain object-left"
              priority
            />
          </a>
          <nav className="hidden items-center gap-9 md:flex" aria-label="Principal">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                active={activeId === item.href.slice(1)}
              />
            ))}
            <a
              href={siteConfig.bookingUrl}
              className="rounded-full border border-accent/70 px-5 py-2 text-sm font-semibold text-accent transition-[background-color,color,box-shadow,transform] duration-300 hover:bg-accent hover:text-ink hover:shadow-[0_0_28px_-6px_var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent active:scale-[0.97]"
            >
              Diagnóstico gratuito
            </a>
          </nav>
          <MenuToggle open={open} onToggle={() => setOpen((value) => !value)} />
        </div>
      </header>
      <AnimatePresence>
        {open && <MobileMenu key="mobile-menu" activeId={activeId} onNavigate={close} />}
      </AnimatePresence>
    </>
  );
}
