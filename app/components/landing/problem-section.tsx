import { Icon } from "@iconify/react";
import { useScrollAnimation } from "~/hooks/use-scroll-animation";

interface Problem {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const problems: Problem[] = [
  {
    icon: "mdi:cash-off",
    title: "Alto investimento",
    description: "Projetos acima de R$ 150k",
    color: "text-red-400",
  },
  {
    icon: "mdi:clock-outline",
    title: "Retorno lento",
    description: "Meses antes de validar",
    color: "text-yellow-400",
  },
  {
    icon: "mdi:lock",
    title: "Baixa flexibilidade",
    description: "Mudanças custam caro",
    color: "text-orange-400",
  },
];

export function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section 
      id="problema"
      ref={ref} 
      className="relative min-h-screen py-24 bg-[#0d1222] bg-grid-separator flex items-center scroll-mt-24"
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
            Criar software próprio ainda é caro demais
          </h2>
          <p className="text-xl text-white/60 leading-relaxed">
            Muitas empresas possuem ideias valiosas, mas não conseguem tirá-las
            do papel por causa do alto custo de desenvolvimento cobrado por
            softhouses tradicionais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {problems.map((problem, index) => (
            <div key={`problem-${index}`} className="group relative">
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-0 bottom-0 -ml-8 lg:-ml-8 separator-vertical" />
              )}
              <Icon 
                icon={problem.icon} 
                className={`w-12 h-12 ${problem.color} mb-6 transition-transform group-hover:scale-110`}
                aria-hidden="true"
              />
              <h3 className="text-2xl font-semibold text-white mb-4">{problem.title}</h3>
              <p className="text-white/50 text-base leading-relaxed">{problem.description}</p>
              {index < problems.length - 1 && (
                <div className="md:hidden separator-line mt-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
