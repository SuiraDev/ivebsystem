import { Icon } from "@iconify/react";
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
    icon: "lucide:globe",
    features: ["Responsivo", "Escalável", "Seguro"],
  },
  {
    id: "mobile-apps",
    title: "Aplicativos Mobile",
    description: "Apps nativos ou híbridos para iOS e Android.",
    icon: "lucide:phone",
    features: ["iOS", "Android", "Cross-platform"],
  },
  {
    id: "automation",
    title: "Automação de Processos",
    description: "Automatize processos repetitivos e ganhe eficiência operacional.",
    icon: "lucide:cog",
    features: ["RPA", "Workflows", "Integrações"],
  },
  {
    id: "integrations",
    title: "Integrações de Sistemas",
    description: "Conecte seus sistemas existentes e crie um ecossistema integrado.",
    icon: "lucide:link",
    features: ["APIs", "Webhooks", "ETL"],
  },
  {
    id: "consulting",
    title: "Consultoria Tecnológica",
    description: "Orientações estratégicas para transformação digital do seu negócio.",
    icon: "lucide:lightbulb",
    features: ["Estratégia", "Arquitetura", "Best Practices"],
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="servicos"
      ref={ref}
      className="relative min-h-screen py-24 bg-[#0a0e1a] bg-grid-separator flex items-center scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-white/60 leading-relaxed">
            Oferecemos soluções completas de desenvolvimento de software para atender
            todas as necessidades do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 md:gap-x-16 gap-y-12">
          {services.map((service, index) => (
            <div key={service.id} className="group relative">
              {(index % 3 !== 0 && index > 0) && (
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 -ml-6 md:-ml-8 separator-vertical" />
              )}
              {(index % 2 !== 0 && index > 0) && (
                <div className="hidden md:block lg:hidden absolute left-0 top-0 bottom-0 -ml-6 md:-ml-8 separator-vertical" />
              )}
              <Icon
                icon={service.icon}
                className="w-10 h-10 text-cyan-400 mb-6"
              />
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-white/50 text-base leading-relaxed mb-4">
                {service.description}
              </p>
              {service.features && service.features.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-sm text-white/40"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              )}
              {index < services.length - 1 && (
                <div className="md:hidden separator-line mt-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

