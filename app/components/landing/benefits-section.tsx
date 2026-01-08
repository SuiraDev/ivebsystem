import { Icon } from "@iconify/react";
import { useScrollAnimation } from "~/hooks/use-scroll-animation";

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

const benefits: Benefit[] = [
  {
    id: "no-investment",
    title: "Sem Alto Investimento Inicial",
    description: "Não precisa desembolsar R$ 50K+ de uma vez. Pagamento parcelado e acessível.",
    icon: "lucide:dollar-sign",
    highlight: true,
  },
  {
    id: "installments",
    title: "Pagamento Parcelado",
    description: "Divida o investimento em parcelas que cabem no seu orçamento mensal.",
    icon: "lucide:credit-card",
    highlight: true,
  },
  {
    id: "guarantee",
    title: "Garantia de Entrega",
    description: "Contrato com garantia de entrega do software conforme especificado.",
    icon: "lucide:shield-check",
    highlight: true,
  },
  {
    id: "partnership",
    title: "Parceria Contínua",
    description: "Não é apenas entrega. Parceria para manutenção, evolução e crescimento.",
    icon: "lucide:handshake",
    highlight: false,
  },
  {
    id: "expansion",
    title: "Extensão e Comercialização",
    description: "Possibilidade de estender o projeto e comercializar para outras empresas do segmento.",
    icon: "lucide:chart-line",
    highlight: false,
  },
];

export function BenefitsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="vantagens"
      ref={ref}
      className="relative min-h-screen py-24 bg-[#0d1222] bg-grid-separator flex items-center scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
            Vantagens do Nosso Modelo
          </h2>
          <p className="text-xl text-white/60 leading-relaxed">
            Entenda por que nosso modelo de desenvolvimento sob demanda é a melhor escolha
            para transformar sua ideia em realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 md:gap-x-16 gap-y-12">
          {benefits.map((benefit, index) => (
            <div key={benefit.id} className="group relative">
              {(index % 3 !== 0 && index > 0) && (
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 -ml-6 md:-ml-8 separator-vertical" />
              )}
              {(index % 2 !== 0 && index > 0) && (
                <div className="hidden md:block lg:hidden absolute left-0 top-0 bottom-0 -ml-6 md:-ml-8 separator-vertical" />
              )}
              <div className="flex items-start gap-4 mb-4">
                <Icon
                  icon={benefit.icon}
                  className="w-10 h-10 text-green-400 flex-shrink-0 mt-1"
                />
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                    {benefit.highlight && (
                      <span className="px-2 py-0.5 text-xs font-semibold bg-sky-500/20 text-sky-400 rounded">
                        Destaque
                      </span>
                    )}
                  </div>
                  <p className="text-white/50 text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
              {index < benefits.length - 1 && (
                <div className="md:hidden separator-line mt-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

