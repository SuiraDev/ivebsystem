import { Icon } from "@iconify/react";
import { Container } from "~/components";
import { useScrollAnimation } from "~/hooks/use-scroll-animation";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Análise",
    description: "Analisamos sua ideia e entendemos o negócio.",
  },
  {
    number: "02",
    title: "Definição",
    description: "Definimos escopo, exclusividade e valor mensal.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Desenvolvemos, hospedamos e mantemos o software.",
  },
  {
    number: "04",
    title: "Expansão",
    description: "Avaliamos expansão para outras empresas do segmento.",
  },
];

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section 
      id="como-funciona" 
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
              Como funciona
            </h2>
          </div>
        </div>
      </Container>

      <Container className="w-full flex-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full">
          {steps.map((step, index) => (
            <div
              key={`step-${step.number}`}
              className={`p-10 transition-all duration-1000 group border-b md:border-b-0 md:border-r border-white/10 md:last:border-r-0 last:border-b-0 flex flex-col justify-center ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-white font-black text-xl mb-6 transition-transform group-hover:scale-110">
              {step.number}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
            <p className="text-white/50 text-base leading-relaxed font-light">
              {step.description}
            </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
