import { Icon } from "@iconify/react";
import { Button } from "~/components";
import { useScrollAnimation } from "~/hooks/use-scroll-animation";

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export function HeroSection({ onScrollToForm }: HeroSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0a0e1a] bg-grid-separator"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-sky-950/20 to-transparent -z-10 rounded-bl-[100px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 text-xs font-semibold tracking-wide uppercase">
            <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse"></span>
            🚀 Tecnologia sob demanda
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
            Crie seu software{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400">
              sem investir R$ 200k+
            </span>
          </h1>
          
          <p className="text-lg text-white/60 leading-relaxed max-w-lg">
            Desenvolvemos software sob demanda com{" "}
            <span className="text-white font-semibold">custo mensal previsível</span>
            , exclusividade garantida e possibilidade de expansão para outros
            clientes do mesmo segmento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onScrollToForm}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-sky-500 rounded-lg hover:bg-sky-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/30 transition-all"
            >
              Solicitar Proposta Gratuita
              <Icon icon="mdi:arrow-right" className="w-4 h-4" />
            </button>
            <button
              onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-lg hover:border-white/20 hover:bg-white/10 transition-all"
            >
              Como Funciona
            </button>
          </div>
        </div>

        {/* Right Visual - Dashboard Mockup */}
        <div className="relative lg:h-[500px] w-full flex items-center justify-center">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-10 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>

          {/* Main Card */}
          <div className="relative w-full max-w-md bg-slate-800/50 backdrop-blur-xl rounded-xl shadow-2xl shadow-black/50 border border-white/10 p-6 hover:scale-105 transition-transform duration-700 ease-out z-10">
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="h-2 w-32 bg-white/10 rounded-full"></div>
            </div>
            {/* Mockup Content */}
            <div className="flex gap-4">
              <div className="w-1/3 space-y-3">
                <div className="h-20 bg-sky-500/20 rounded-lg w-full"></div>
                <div className="h-8 bg-white/5 rounded-lg w-full"></div>
                <div className="h-8 bg-white/5 rounded-lg w-full"></div>
              </div>
              <div className="w-2/3 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="h-8 w-24 bg-white/10 rounded-md"></div>
                  <div className="h-8 w-8 bg-sky-500/20 rounded-full flex items-center justify-center text-sky-400">
                    <Icon icon="mdi:chart-line" className="w-4 h-4" />
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10 flex items-end p-4 gap-2">
                  <div className="w-1/4 h-1/3 bg-blue-400/30 rounded-t"></div>
                  <div className="w-1/4 h-2/3 bg-blue-400/40 rounded-t"></div>
                  <div className="w-1/4 h-1/2 bg-blue-400/50 rounded-t"></div>
                  <div className="w-1/4 h-full bg-sky-500 rounded-t shadow-lg shadow-sky-500/20"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge 1 */}
            <div className="absolute -right-8 top-20 bg-slate-800/90 backdrop-blur-xl p-3 rounded-lg shadow-xl border border-white/10 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="p-2 bg-green-500/20 text-green-400 rounded-md">
                <Icon icon="mdi:code-xml" className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-white/40">Status</div>
                <div className="text-sm font-semibold text-white">Clean Code</div>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute -left-6 bottom-10 bg-slate-800/90 backdrop-blur-xl p-3 rounded-lg shadow-xl border border-white/10 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="p-2 bg-purple-500/20 text-purple-400 rounded-md">
                <Icon icon="mdi:rocket-launch" className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-white/40">Performance</div>
                <div className="text-sm font-semibold text-white">99.9% Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
