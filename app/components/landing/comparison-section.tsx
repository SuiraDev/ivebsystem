import { Icon } from "@iconify/react";
import { Container } from "~/components";
import { useScrollAnimation } from "~/hooks/use-scroll-animation";

const traditionalFeatures: string[] = [
  "Alto custo inicial",
  "Projeto fechado",
  "Baixa flexibilidade",
];

const ourFeatures: string[] = [
  "Mensalidade acessível",
  "Evolução contínua",
  "Parceria de longo prazo",
];

export function ComparisonSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section 
      id="comparacao"
      ref={ref} 
      className="w-full min-h-screen bg-[#0a0e1a] border-t border-white/5 flex flex-col scroll-mt-24"
    >
      <Container className="w-full pt-32 pb-20">
        <div className="max-w-7xl mx-auto text-white">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              Softhouse tradicional vs nosso modelo
            </h2>
          </div>
        </div>
      </Container>

      <Container className="w-full flex-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Traditional */}
          <div 
            className={`p-12 transition-all duration-1000 border-b md:border-b-0 md:border-r border-white/10 md:last:border-r-0 last:border-b-0 flex flex-col justify-center ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Icon icon="mdi:alert-circle" className="w-6 h-6 text-red-400" aria-hidden="true" />
            <span>Softhouse</span>
          </h3>
          <ul className="space-y-4">
            {traditionalFeatures.map((feature, index) => (
              <li 
                key={`traditional-${index}`}
                className="flex items-center gap-3 text-white/60"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Icon icon="mdi:close-circle" className="w-5 h-5 text-red-400 flex-shrink-0" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

          {/* Our Model */}
          <div 
            className={`p-12 transition-all duration-1000 flex flex-col justify-center ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Icon icon="mdi:check-circle" className="w-6 h-6 text-green-400" aria-hidden="true" />
            <span>Nosso modelo</span>
          </h3>
          <ul className="space-y-4">
            {ourFeatures.map((feature, index) => (
              <li 
                key={`our-${index}`}
                className="flex items-center gap-3 text-white/80"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
