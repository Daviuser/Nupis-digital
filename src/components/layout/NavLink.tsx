import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  active: boolean;
}

export function NavLink({ href, label, active }: NavLinkProps) {
  return (
    <a
      href={href}
      aria-current={active ? "location" : undefined}
      className={cn(
        "group relative rounded-sm py-2 text-sm font-medium tracking-tight transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
        active ? "text-paper" : "text-muted hover:text-paper",
      )}
    >
      {label}
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100",
          active ? "scale-x-100" : "scale-x-0",
        )}
      />
    </a>
  );
}
