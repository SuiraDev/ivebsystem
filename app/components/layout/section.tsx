import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export function Section({ children, className = "", title }: SectionProps) {
  return (
    <section className={className}>
      {title && (
        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">{title}</h2>
      )}
      {children}
    </section>
  );
}

