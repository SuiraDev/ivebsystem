import { Icon } from "@iconify/react";
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
      className="relative min-h-screen py-24 bg-[#0d1222] bg-grid-separator flex items-center scroll-mt-24"
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
            Softhouse tradicional vs nosso modelo
          </h2>
          <p className="text-xl text-white/60">Compare e veja a diferença</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div className="relative">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Icon icon="mdi:close-circle" className="w-7 h-7 text-red-400" />
              Softhouse
            </h3>
            <ul className="space-y-6">
              {traditionalFeatures.map((feature, index) => (
                <li 
                  key={`traditional-${index}`}
                  className="flex items-start gap-4"
                >
                  <Icon icon="mdi:close" className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <span className="text-white/60 text-base">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="md:hidden separator-line my-12" />
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-0 top-0 bottom-0 -ml-12 lg:-ml-12 separator-vertical" />
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Icon icon="mdi:check-circle" className="w-7 h-7 text-green-400" />
              Nosso modelo
            </h3>
            <ul className="space-y-6">
              {ourFeatures.map((feature, index) => (
                <li 
                  key={`our-${index}`}
                  className="flex items-start gap-4"
                >
                  <Icon icon="mdi:check" className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
