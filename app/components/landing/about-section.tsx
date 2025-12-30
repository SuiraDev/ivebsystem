import { Icon } from "@iconify/react";
import { Container } from "~/components";
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
              Sobre a iVebSystem
            </h2>
            {aboutData.tagline && (
              <p className="text-xl text-sky-400 font-semibold mb-4">{aboutData.tagline}</p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Coluna Esquerda */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {aboutData.history && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Icon icon="mdi:history" className="w-6 h-6 text-sky-400" aria-hidden="true" />
                    Nossa História
                  </h3>
                  <p className="text-white/60 leading-relaxed">{aboutData.history}</p>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Icon icon="mdi:target" className="w-6 h-6 text-sky-400" aria-hidden="true" />
                  Missão
                </h3>
                <p className="text-white/60 leading-relaxed">{aboutData.mission}</p>
              </div>

              {aboutData.vision && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Icon icon="mdi:eye" className="w-6 h-6 text-sky-400" aria-hidden="true" />
                    Visão
                  </h3>
                  <p className="text-white/60 leading-relaxed">{aboutData.vision}</p>
                </div>
              )}
            </div>

            {/* Coluna Direita */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Icon icon="mdi:heart" className="w-6 h-6 text-sky-400" aria-hidden="true" />
                  Nossos Valores
                </h3>
                <div className="flex flex-wrap gap-3">
                  {aboutData.values.map((value) => (
                    <span
                      key={value}
                      className="px-4 py-2 bg-white/5 border border-white/10 text-white/80 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>

              {aboutData.founder && (
                <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Icon icon="mdi:account" className="w-5 h-5 text-sky-400" aria-hidden="true" />
                    Fundador
                  </h3>
                  <div className="flex items-start gap-4">
                    {aboutData.founder.image && (
                      <img
                        src={aboutData.founder.image}
                        alt={aboutData.founder.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-sky-500/30"
                      />
                    )}
                    <div>
                      <p className="text-white font-semibold">{aboutData.founder.name}</p>
                      <p className="text-white/60 text-sm mb-2">{aboutData.founder.role}</p>
                      {aboutData.founder.bio && (
                        <p className="text-white/60 text-sm leading-relaxed">
                          {aboutData.founder.bio}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

