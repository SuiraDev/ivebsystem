import { Icon } from "@iconify/react";
import { Button } from "~/components";
import { useState, useEffect } from "react";

interface MobileMenuProps {
  onScrollToForm: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ onScrollToForm, isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#0a0e1a] border-l border-white/10 z-[95] transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <img 
                src="/iveb-logo.svg" 
                alt="iVebSystem Logo" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-semibold tracking-tight text-white">IVEBSYSTEM</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Fechar menu"
            >
              <Icon icon="mdi:close" className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-4">
              <li>
                <a
                  href="#como-funciona"
                  onClick={() => handleLinkClick("#como-funciona")}
                  className="block py-3 text-base font-medium text-white/70 hover:text-sky-400 transition-colors border-b border-white/10"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#vantagens"
                  onClick={() => handleLinkClick("#vantagens")}
                  className="block py-3 text-base font-medium text-white/70 hover:text-sky-400 transition-colors border-b border-white/10"
                >
                  Vantagens
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={() => handleLinkClick("#faq")}
                  className="block py-3 text-base font-medium text-white/70 hover:text-sky-400 transition-colors border-b border-white/10"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA */}
          <div className="p-6 border-t border-white/10">
            <Button
              size="lg"
              variant="primary"
              onClick={() => {
                onClose();
                onScrollToForm();
              }}
              fullWidth
              className="group"
            >
              Começar Agora
              <Icon
                icon="mdi:arrow-right"
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

