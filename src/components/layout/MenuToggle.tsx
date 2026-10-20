import { cn } from "@/lib/utils";

interface MenuToggleProps {
  open: boolean;
  onToggle: () => void;
}

const bar =
  "absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";

export function MenuToggle({ open, onToggle }: MenuToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="mobile-menu"
      aria-label={open ? "Fechar menu" : "Abrir menu"}
      className="relative -mr-2 size-11 rounded-full text-paper transition-colors duration-300 hover:bg-paper/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
    >
      <span
        aria-hidden
        className={cn(bar, open ? "translate-y-0 rotate-45" : "-translate-y-[4px]")}
      />
      <span
        aria-hidden
        className={cn(bar, open ? "translate-y-0 -rotate-45" : "translate-y-[4px]")}
      />
    </button>
  );
}
