import { Icon } from "@iconify/react";
import { Container } from "~/components";
import { useScrollAnimation } from "~/hooks/use-scroll-animation";

interface Solution {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const solutions: Solution[] = [
  {
    icon: "mdi:rocket-launch",
    title: "Desenvolvimento contínuo",
    description: "Evoluímos o produto conforme a demanda",
    color: "text-sky-400",
  },
  {
    icon: "mdi:credit-card",
    title: "Mensalidade fixa",
    description: "Controle total de custos",
    color: "text-blue-400",
  },
  {
    icon: "mdi:brain",
    title: "Software estratégico",
    description: "Seu produto como ativo",
    color: "text-purple-400",
  },
];

export function SolutionSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="solucao" ref={ref} className="w-full min-h-screen bg-[#0a0e1a] border-t border-white/5 flex flex-col scroll-mt-24">
      <Container className="w-full pt-32 pb-20">
        <div className="max-w-7xl mx-auto text-white">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              Nosso modelo resolve isso
            </h2>
            <p className="text-xl text-white/60 max-w-4xl leading-relaxed font-light">
              Entramos com a mão de obra técnica e você paga um valor mensal
              acessível para desenvolver, hospedar e manter seu software ativo.
            </p>
          </div>
        </div>
      </Container>

      <Container className="w-full flex-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 h-full">
          {solutions.map((solution, index) => (
            <div
              key={`solution-${index}`}
              className={`p-10 transition-all duration-1000 group border-b md:border-b-0 md:border-r border-white/10 md:last:border-r-0 last:border-b-0 flex flex-col justify-center ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
            <Icon 
              icon={solution.icon} 
              className={`w-12 h-12 mb-6 ${solution.color} transition-transform group-hover:scale-110`}
              aria-hidden="true"
            />
            <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
            <p className="text-white/50 text-base leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
