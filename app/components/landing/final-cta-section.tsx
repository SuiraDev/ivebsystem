import { Icon } from "@iconify/react";
import { Button, Container } from "~/components";
import { useScrollAnimation } from "~/hooks/use-scroll-animation";

interface FinalCTASectionProps {
  onScrollToForm: () => void;
}

export function FinalCTASection({ onScrollToForm }: FinalCTASectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section 
      ref={ref}
      className="w-full bg-gradient-to-br from-sky-600 via-blue-600 to-cyan-600 pt-40 pb-32 border-t border-white/10 scroll-mt-24"
    >
      <Container className="w-full">
        <div 
          className={`max-w-5xl mx-auto text-white text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
            Vamos tirar sua ideia do papel?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Descubra se esse modelo faz sentido para o seu negócio.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            onClick={onScrollToForm}
            className="group bg-white/10 border-2 border-white/30 hover:bg-white/20 hover:border-white/50 text-white"
          >
            Solicitar proposta gratuita
            <Icon 
              icon="mdi:arrow-right" 
              className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Button>
        </div>
      </Container>
    </section>
  );
}
