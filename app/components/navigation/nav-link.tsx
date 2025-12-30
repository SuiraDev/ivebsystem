import { Link, useLocation } from "react-router";
import { type ReactNode } from "react";

interface NavLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
}

export function NavLink({
  to,
  children,
  className = "",
  activeClassName = "text-blue-600",
  exact = false,
}: NavLinkProps) {
  const location = useLocation();
  const isActive = exact
    ? location.pathname === to
    : location.pathname === to || location.pathname.startsWith(to + "/");

  const baseStyles = "text-white/70 hover:text-white transition-colors font-medium";
  const finalClassName = isActive
    ? `${baseStyles} ${activeClassName || "text-[#0ea5e9]"}`
    : `${baseStyles} ${className}`;

  return (
    <Link to={to} className={finalClassName}>
      {children}
    </Link>
  );
}

