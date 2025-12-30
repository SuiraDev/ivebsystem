import { Icon } from "@iconify/react";
import { Container } from "~/components";
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
      className="w-full min-h-screen bg-[#0d1222] border-t border-white/5 flex flex-col scroll-mt-24"
    >
      <Container className="w-full pt-32 pb-20">
        <div className="max-w-7xl mx-auto text-white">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              Criar software próprio ainda é caro demais
            </h2>
            <p className="text-xl text-white/60 max-w-4xl leading-relaxed font-light">
              Muitas empresas possuem ideias valiosas, mas não conseguem tirá-las
              do papel por causa do alto custo de desenvolvimento cobrado por
              softhouses tradicionais.
            </p>
          </div>
        </div>
      </Container>

      <Container className="w-full flex-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 h-full">
          {problems.map((problem, index) => (
            <div
              key={`problem-${index}`}
              className={`p-10 transition-all duration-1000 group border-b md:border-b-0 md:border-r border-white/10 md:last:border-r-0 last:border-b-0 flex flex-col justify-center ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
            <Icon 
              icon={problem.icon} 
              className={`w-12 h-12 mb-6 ${problem.color} transition-transform group-hover:scale-110`}
              aria-hidden="true"
            />
            <h3 className="text-2xl font-bold text-white mb-3">{problem.title}</h3>
            <p className="text-white/50 text-base leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
