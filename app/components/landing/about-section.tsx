import { Icon } from "@iconify/react";
import { useScrollAnimation } from "~/hooks/use-scroll-animation";

interface AboutData {
  companyName: string;
  tagline?: string;
  mission: string;
  vision?: string;
  values: string[];
  founder?: {
    name: string;
    role: string;
    bio?: string;
    image?: string;
  };
  history?: string;
}

const aboutData: AboutData = {
  companyName: "iVebSystem",
  tagline: "Tecnologia sob demanda, parceria de longo prazo",
  mission:
    "Democratizar o acesso a soluções tecnológicas personalizadas, permitindo que empresas de todos os tamanhos transformem suas ideias em realidade sem alto investimento inicial.",
  vision:
    "Ser a principal referência em desenvolvimento de software sob demanda no Brasil, conhecida por parcerias duradouras e resultados excepcionais.",
  values: ["Transparência", "Comprometimento", "Inovação", "Parceria", "Qualidade"],
  history:
    "A iVebSystem nasceu da necessidade de oferecer soluções tecnológicas acessíveis para empresas que não podem investir grandes quantias inicialmente. Acreditamos que toda empresa merece ter acesso a tecnologia de ponta, independentemente do tamanho do seu orçamento.",
};

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative min-h-screen py-24 bg-[#0a0e1a] bg-grid-separator flex items-center scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
            Sobre a iVebSystem
          </h2>
          {aboutData.tagline && (
            <p className="text-xl text-sky-400">{aboutData.tagline}</p>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-x-16 md:gap-x-24 gap-y-12 md:gap-y-16">
          <div className="space-y-12 md:space-y-16">
            {aboutData.history && (
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Nossa História</h3>
                <p className="text-white/60 leading-relaxed text-base">{aboutData.history}</p>
              </div>
            )}

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Missão</h3>
              <p className="text-white/60 leading-relaxed text-base">{aboutData.mission}</p>
            </div>

            {aboutData.vision && (
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Visão</h3>
                <p className="text-white/60 leading-relaxed text-base">{aboutData.vision}</p>
              </div>
            )}
            <div className="lg:hidden separator-line" />
          </div>

          <div className="space-y-12 md:space-y-16 relative">
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 -ml-8 md:-ml-12 separator-vertical" />
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Nossos Valores</h3>
              <ul className="space-y-3">
                {aboutData.values.map((value) => (
                  <li key={value} className="flex items-center gap-3">
                    <Icon icon="mdi:check-circle" className="w-5 h-5 text-sky-400 flex-shrink-0" />
                    <span className="text-white/80 text-base">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

