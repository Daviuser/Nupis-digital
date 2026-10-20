import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Button({ href, children, className, onClick }: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_0_0_0_transparent] transition-[background-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-accent-strong hover:shadow-[0_10px_40px_-10px_var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent active:scale-[0.98]",
        className,
      )}
    >
      {children}
      <ArrowUpRight
        aria-hidden
        className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}
