import { Icon } from "@iconify/react";
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
    <section 
      id="solucao" 
      ref={ref} 
      className="relative min-h-screen py-24 bg-[#0a0e1a] bg-grid-separator flex items-center scroll-mt-24"
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
            Nosso modelo resolve isso
          </h2>
          <p className="text-xl text-white/60 leading-relaxed">
            Entramos com a mão de obra técnica e você paga um valor mensal
            acessível para desenvolver, hospedar e manter seu software ativo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {solutions.map((solution, index) => (
            <div key={`solution-${index}`} className="group relative">
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-0 bottom-0 -ml-8 lg:-ml-8 separator-vertical" />
              )}
              <Icon 
                icon={solution.icon} 
                className={`w-12 h-12 ${solution.color} mb-6 transition-transform group-hover:scale-110`}
                aria-hidden="true"
              />
              <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
              <p className="text-white/50 text-base leading-relaxed">{solution.description}</p>
              {index < solutions.length - 1 && (
                <div className="md:hidden separator-line mt-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
