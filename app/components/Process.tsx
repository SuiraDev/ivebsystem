"use client";
import React from "react";

const StepItem = ({ number, title, description, accentColor }: { number: string, title: string, description: string, accentColor: string }) => (
  <div className="relative group">
    <div className={`hidden md:flex items-center justify-center w-5 h-5 rounded-full bg-brand-black border-2 border-${accentColor} absolute -top-[10px] z-10 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300`}></div>
    <div className="mb-6 md:mt-16 glass-card p-6 rounded-2xl border-white/5 group-hover:border-white/10 transition-colors">
      <span className={`text-xs font-mono text-${accentColor} mb-3 block font-bold`}>{number}</span>
      <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-xs text-neutral-500 leading-relaxed font-light">{description}</p>
    </div>
  </div>
);

export const Process = () => {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-purple/20 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6 animate-slide-up">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Fluxo de <span className="text-neutral-500">Desenvolvimento</span></h2>
            <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mb-6"></div>
            <p className="text-neutral-400 max-w-md text-sm font-light">Transparência absoluta em cada fase. Você define a prioridade, nós entregamos a excelência.</p>
          </div>
        </div>

        <div className="relative">
          {/* Animated Progress Line */}
          <div className="hidden md:block absolute top-[1px] left-0 w-full h-[2px] bg-neutral-900 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-blue animate-[move-pulse_4s_linear_infinite]" style={{ width: '40%' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            <StepItem 
              accentColor="brand-cyan"
              number="01 - DIAGNÓSTICO"
              title="Mapeamento Técnico"
              description="Análise profunda da arquitetura atual para identificar riscos de segurança e gargalos de performance."
            />
            <StepItem 
              accentColor="brand-purple"
              number="02 - ROADMAP"
              title="Planejamento 90 dias"
              description="Definição clara de metas técnicas, priorização de refatoração e desenho da nova infraestrutura escalável."
            />
            <StepItem 
              accentColor="brand-blue"
              number="03 - EXECUÇÃO"
              title="Sprints de Resultado"
              description="Deploys contínuos com foco em escopo fechado, garantindo entregáveis claros e valor imediato."
            />
            <StepItem 
              accentColor="pink-500"
              number="04 - GOVERNANÇA"
              title="Consultoria Contínua"
              description="Acompanhamento estratégico mensal, code review e aconselhamento técnico para decisões de escala."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
