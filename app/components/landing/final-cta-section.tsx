import { Icon } from "@iconify/react";
import { Button } from "~/components";
import { useScrollAnimation } from "~/hooks/use-scroll-animation";

interface FinalCTASectionProps {
  onScrollToForm: () => void;
}

export function FinalCTASection({ onScrollToForm }: FinalCTASectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section 
      ref={ref}
      className="relative min-h-screen py-24 bg-gradient-to-br from-sky-600 via-blue-600 to-cyan-600 bg-grid-separator flex items-center scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-white text-center">
        <h2 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8">
          Vamos tirar sua ideia do papel?
        </h2>
        <p className="text-xl text-white/90 mb-12 leading-relaxed">
          Descubra se esse modelo faz sentido para o seu negócio.
        </p>
        <button 
          onClick={onScrollToForm}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/10 border-2 border-white/30 rounded-lg hover:bg-white/20 hover:border-white/50 transition-all"
        >
          Solicitar proposta gratuita
          <Icon icon="mdi:arrow-right" className="w-5 h-5" />
        </button>
        </div>
      </div>
    </section>
  );
}
