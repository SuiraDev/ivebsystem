import { Icon } from "@iconify/react";
import { Container } from "~/components";
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
    icon: "mdi:currency-usd-off",
    highlight: true,
  },
  {
    id: "installments",
    title: "Pagamento Parcelado",
    description: "Divida o investimento em parcelas que cabem no seu orçamento mensal.",
    icon: "mdi:credit-card-multiple",
    highlight: true,
  },
  {
    id: "guarantee",
    title: "Garantia de Entrega",
    description: "Contrato com garantia de entrega do software conforme especificado.",
    icon: "mdi:shield-check",
    highlight: true,
  },
  {
    id: "partnership",
    title: "Parceria Contínua",
    description: "Não é apenas entrega. Parceria para manutenção, evolução e crescimento.",
    icon: "mdi:handshake",
    highlight: false,
  },
  {
    id: "expansion",
    title: "Extensão e Comercialização",
    description: "Possibilidade de estender o projeto e comercializar para outras empresas do segmento.",
    icon: "mdi:chart-line",
    highlight: false,
  },
];

export function BenefitsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="vantagens"
      ref={ref}
      className="w-full py-20 bg-[#0a0e1a] border-t border-white/5 scroll-mt-24"
    >
      <Container className="w-full">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center text-white mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              Vantagens do Nosso Modelo
            </h2>
            <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed font-light">
              Entenda por que nosso modelo de desenvolvimento sob demanda é a melhor escolha
              para transformar sua ideia em realidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className={`p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-1000 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon
                      icon={benefit.icon}
                      className="w-6 h-6 text-sky-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                      {benefit.highlight && (
                        <span className="px-2 py-1 text-xs font-semibold bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded">
                          Destaque
                        </span>
                      )}
                    </div>
                    <p className="text-white/60 text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

