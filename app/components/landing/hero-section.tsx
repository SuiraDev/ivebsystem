import { Icon } from "@iconify/react";
import { Button, Container } from "~/components";
import { useScrollAnimation } from "~/hooks/use-scroll-animation";

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export function HeroSection({ onScrollToForm }: HeroSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center bg-[#0a0e1a] overflow-hidden w-full pt-20 md:pt-24"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950/20 via-transparent to-blue-950/20" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <Container className="relative z-10 w-full">
        <div 
          className={`max-w-7xl mx-auto text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 border border-white/10 bg-white/5 px-6 py-2 mb-12 mt-2 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <Icon icon="mdi:lightning-bolt" className="w-4 h-4 text-sky-400" aria-hidden="true" />
            <span className="text-sm font-medium text-sky-400 tracking-wider uppercase">
              Tecnologia sob demanda
            </span>
          </div>

          {/* Headline */}
          <h1 
            className={`text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 tracking-tight transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Crie seu software
            <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              sem investir R$ 200k+
            </span>
          </h1>

          {/* Description */}
          <p 
            className={`text-xl md:text-2xl text-white/60 max-w-3xl mb-16 leading-relaxed font-light transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Desenvolvemos software sob demanda com{" "}
            <span className="text-white font-semibold">custo mensal previsível</span>
            , exclusividade garantida e possibilidade de expansão para outros
            clientes do mesmo segmento.
          </p>

          {/* Value props */}
          <ul 
            className={`grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 text-sm text-white/70 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <li className="flex items-center gap-3">
              <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
              <span>Código 100% exclusivo</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon icon="mdi:rocket-launch" className="w-5 h-5 text-sky-400 flex-shrink-0" aria-hidden="true" />
              <span>MVP rápido</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon icon="mdi:currency-usd" className="w-5 h-5 text-blue-400 flex-shrink-0" aria-hidden="true" />
              <span>Sem aporte inicial</span>
            </li>
          </ul>

          {/* Actions */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button 
              size="lg" 
              variant="primary" 
              onClick={onScrollToForm}
              className="group"
            >
              Solicitar proposta gratuita
              <Icon 
                icon="mdi:arrow-right" 
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Button>

            <Button
              size="lg"
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("como-funciona")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Como funciona
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon icon="mdi:chevron-down" className="w-6 h-6 text-white/40" aria-hidden="true" />
      </div>
    </section>
  );
}
