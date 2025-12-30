import { type ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  children,
  className = "",
}: PageHeaderProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">{title}</h1>
      {description && <p className="text-white/60 text-lg">{description}</p>}
      {children}
    </div>
  );
}

