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
    <header className="w-full border-b border-white/10 bg-[#0a0e1a]/98 backdrop-blur-xl fixed top-0 left-0 right-0 z-[100] overflow-x-hidden">
      <Container className="w-full">
        <nav className="flex items-center justify-between py-6">
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="Voltar ao topo"
          >
            <img
              src="/iveb-logo.svg"
              alt="iVebSystem Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-black text-white tracking-tight">
              ivebsystem
            </span>
          </button>
          <div className="hidden md:flex items-center gap-12">
            <a
              href="#como-funciona"
              onClick={(e) => {
                e.preventDefault();
                onLinkClick("#como-funciona");
              }}
              className="text-sm font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-wider"
            >
              Como Funciona
            </a>
            <a
              href="#vantagens"
              onClick={(e) => {
                e.preventDefault();
                onLinkClick("#vantagens");
              }}
              className="text-sm font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-wider"
            >
              Vantagens
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                onLinkClick("#faq");
              }}
              className="text-sm font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-wider"
            >
              FAQ
            </a>
            <Button size="md" onClick={onScrollToForm}>
              Começar Agora
            </Button>
          </div>
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={onMobileMenuOpen}
            aria-label="Abrir menu"
          >
            <Icon icon="mdi:menu" className="w-6 h-6" aria-hidden="true" />
          </button>
        </nav>
      </Container>
    </header>
  );
}

