"use client";
import React from "react";
import { Icon } from "./Icon";

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[100px] animate-blob pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-purple/10 rounded-full blur-[100px] animate-blob [animation-delay:2s] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-6">
              <span className="text-xs font-semibold text-brand-purple tracking-wide uppercase">Diferencial IvebSystem</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8 leading-tight">
              Não somos apenas codificadores. <br />
              <span className="gradient-text">Arquitetamos o Futuro.</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-10 font-light max-w-xl border-l-2 border-brand-cyan/30 pl-6">
              A IvebSystem nasceu para preencher o vácuo entre a pura codificação e a estratégia de negócios real. Transformamos complexidade técnica em vantagem competitiva sustentável.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="group">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/20 transition-colors border border-brand-cyan/20">
                  <Icon icon="lucide:target" className="text-brand-cyan" width="24" />
                </div>
                <h4 className="text-white font-semibold mb-2">Engenharia de Elite</h4>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                  Nossos projetos são construídos com foco em performance extrema e escala infinita.
                </p>
              </div>
              <div className="group">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center mb-4 group-hover:bg-brand-purple/20 transition-colors border border-brand-purple/20">
                  <Icon icon="lucide:zap" className="text-brand-purple" width="24" />
                </div>
                <h4 className="text-white font-semibold mb-2">Cultura Ágil Real</h4>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                  Foco em entregáveis semanais e feedback contínuo para garantir o ROI do seu investimento.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-2xl glass-card inline-flex items-center gap-6 border-white/10">
               <div>
                  <div className="text-3xl font-bold text-white leading-none">12+</div>
                  <div className="text-[10px] text-brand-cyan uppercase tracking-widest font-bold mt-1">Anos de Mercado</div>
               </div>
               <div className="w-px h-10 bg-white/10"></div>
               <div>
                  <div className="text-3xl font-bold text-white leading-none">100+</div>
                  <div className="text-[10px] text-brand-purple uppercase tracking-widest font-bold mt-1">Sistemas Entregues</div>
               </div>
            </div>
          </div>

          <div className="relative group animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10 aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden glass-card p-2 border-white/10 hover:border-brand-cyan/30 transition-all duration-700 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img 
                src="/images/team.png" 
                alt="Equipe IvebSystem" 
                className="w-full h-full object-cover rounded-[1.8rem] transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></div>
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">Time de Especialistas</span>
                  </div>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    Unimos visão estratégica e execução técnica impecável para acelerar o crescimento do seu negócio.
                  </p>
                  <div className="flex -space-x-3 pt-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-black bg-brand-gray overflow-hidden">
                         <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`} alt="Especialista" />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-brand-black bg-brand-cyan flex items-center justify-center text-[10px] font-bold text-black">+</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative layers */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-cyan/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-purple/20 rounded-full blur-3xl -z-10 animate-blob"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-white/5 rounded-[2rem] -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
            <div className="absolute -bottom-12 -right-12 w-full h-full border border-white/5 rounded-[2rem] -z-20 scale-95 opacity-50 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

