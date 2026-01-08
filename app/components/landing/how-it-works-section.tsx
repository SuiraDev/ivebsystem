import { Icon } from "@iconify/react";
import { useScrollAnimation } from "~/hooks/use-scroll-animation";

interface Step {
  number: string;
  title: string;
  icon: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Análise",
    icon: "lucide:target",
    description: "Analisamos sua ideia e entendemos o negócio.",
  },
  {
    number: "02",
    title: "Definição",
    icon: "lucide:pen-tool",
    description: "Definimos escopo, exclusividade e valor mensal.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    icon: "lucide:cpu",
    description: "Desenvolvemos, hospedamos e mantemos o software.",
  },
  {
    number: "04",
    title: "Expansão",
    icon: "lucide:rocket",
    description: "Avaliamos expansão para outras empresas do segmento.",
  },
];

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section 
      id="como-funciona" 
      ref={ref}
      className="relative min-h-screen py-24 bg-[#0d1222] bg-grid-separator flex items-center scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
            Como funciona
          </h2>
          <p className="text-xl text-white/60">
            Processo ágil e transparente do início ao fim
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {steps.map((step, index) => (
            <div key={`step-${step.number}`} className="relative">
              {(index % 4 !== 0 && index > 0) && (
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 -ml-8 separator-vertical" />
              )}
              {(index % 2 !== 0 && index > 0) && (
                <div className="hidden md:block lg:hidden absolute left-0 top-0 bottom-0 -ml-8 separator-vertical" />
              )}
              <div className="text-6xl font-bold text-white/5 mb-6">{step.number}</div>
              <Icon 
                icon={step.icon} 
                className="w-10 h-10 text-sky-400 mb-6" 
              />
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-base text-white/50 leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="md:hidden separator-line mt-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
