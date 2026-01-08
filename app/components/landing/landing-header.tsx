import { Icon } from "@iconify/react";
import { Container, Button } from "~/components";

interface LandingHeaderProps {
  onScrollToForm: () => void;
  onMobileMenuOpen: () => void;
  onLinkClick: (href: string) => void;
  onScrollToTop?: () => void;
}

export function LandingHeader({
  onScrollToForm,
  onMobileMenuOpen,
  onLinkClick,
  onScrollToTop,
}: LandingHeaderProps) {
  const handleLogoClick = () => {
    if (onScrollToTop) {
      onScrollToTop();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0e1a]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-2 group"
          aria-label="Voltar ao topo"
        >
          <img
            src="/iveb-logo.svg"
            alt="iVebSystem Logo"
            className="h-8 w-auto"
          />
          <span className="text-lg font-semibold tracking-tighter text-white group-hover:text-sky-400 transition-colors">
            IVEBSYSTEM
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a
            href="#como-funciona"
            onClick={(e) => {
              e.preventDefault();
              onLinkClick("#como-funciona");
            }}
            className="hover:text-sky-400 transition-colors"
          >
            Como Funciona
          </a>
          <a
            href="#vantagens"
            onClick={(e) => {
              e.preventDefault();
              onLinkClick("#vantagens");
            }}
            className="hover:text-sky-400 transition-colors"
          >
            Vantagens
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              onLinkClick("#faq");
            }}
            className="hover:text-sky-400 transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={onScrollToForm}
            variant="primary"
            className="px-4 py-2 text-sm font-medium text-white bg-sky-500 rounded-lg hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/20 transition-all"
          >
            Começar Agora
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={onMobileMenuOpen}
          aria-label="Abrir menu"
        >
          <Icon icon="mdi:menu" className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

