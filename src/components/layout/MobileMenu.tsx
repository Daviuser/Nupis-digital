"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { navItems, siteConfig } from "@/config/site";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  activeId: string | null;
  onNavigate: () => void;
}

export function MobileMenu({ activeId, onNavigate }: MobileMenuProps) {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.45;
  const itemDelay = (index: number) => (reduceMotion ? 0 : 0.12 + index * 0.05);

  return (
    <div id="mobile-menu" className="fixed inset-0 z-40 md:hidden">
      <motion.button
        type="button"
        aria-label="Fechar menu"
        tabIndex={-1}
        onClick={onNavigate}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.35 }}
      />
      <motion.div
        className="absolute inset-x-0 top-0 flex max-h-svh flex-col overflow-y-auto rounded-b-3xl border-b border-line/60 bg-ink px-5 pb-8 pt-24 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
        initial={{ y: "-8%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-4%", opacity: 0 }}
        transition={{ duration, ease: easeOut }}
      >
        <nav aria-label="Menu mobile" className="flex flex-col">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              aria-current={activeId === item.href.slice(1) ? "location" : undefined}
              className={cn(
                "flex items-center justify-between border-b border-line/60 py-4 font-display text-2xl tracking-tight transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                activeId === item.href.slice(1)
                  ? "text-accent"
                  : "text-paper active:text-accent",
              )}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration, ease: easeOut, delay: itemDelay(index) }}
            >
              {item.label}
              <span
                aria-hidden
                className={cn(
                  "size-1.5 rounded-full bg-accent transition-opacity duration-300",
                  activeId === item.href.slice(1) ? "opacity-100" : "opacity-0",
                )}
              />
            </motion.a>
          ))}
        </nav>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration, ease: easeOut, delay: itemDelay(navItems.length) }}
          className="mt-8"
        >
          <Button href={siteConfig.bookingUrl} onClick={onNavigate} className="w-full">
            Agendar diagnóstico gratuito
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
