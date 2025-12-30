import { Icon } from "@iconify/react";
import { Container } from "~/components";
import { useScrollAnimation } from "~/hooks/use-scroll-animation";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

const services: Service[] = [
  {
    id: "web-systems",
    title: "Sistemas Web Personalizados",
    description: "Desenvolvimento de sistemas web sob medida para suas necessidades específicas.",
    icon: "mdi:web",
    features: ["Responsivo", "Escalável", "Seguro"],
  },
  {
    id: "mobile-apps",
    title: "Aplicativos Mobile",
    description: "Apps nativos ou híbridos para iOS e Android.",
    icon: "mdi:cellphone",
    features: ["iOS", "Android", "Cross-platform"],
  },
  {
    id: "automation",
    title: "Automação de Processos",
    description: "Automatize processos repetitivos e ganhe eficiência operacional.",
    icon: "mdi:robot",
    features: ["RPA", "Workflows", "Integrações"],
  },
  {
    id: "integrations",
    title: "Integrações de Sistemas",
    description: "Conecte seus sistemas existentes e crie um ecossistema integrado.",
    icon: "mdi:api",
    features: ["APIs", "Webhooks", "ETL"],
  },
  {
    id: "consulting",
    title: "Consultoria Tecnológica",
    description: "Orientações estratégicas para transformação digital do seu negócio.",
    icon: "mdi:lightbulb-on",
    features: ["Estratégia", "Arquitetura", "Best Practices"],
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="servicos"
      ref={ref}
      className="w-full py-20 bg-[#0d1222] border-t border-white/5 scroll-mt-24"
    >
      <Container className="w-full">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center text-white mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              Nossos Serviços
            </h2>
            <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed font-light">
              Oferecemos soluções completas de desenvolvimento de software para atender
              todas as necessidades do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`p-8 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500/30 to-blue-500/30 flex items-center justify-center rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <Icon
                      icon={service.icon}
                      className="w-8 h-8 text-sky-400"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/60 text-base leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {service.features && service.features.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium bg-white/5 text-white/70 border border-white/10 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

