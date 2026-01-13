"use client";
import React from "react";
import { Icon } from "./Icon";

export const Services = () => {
  const services = [
    {
      accentColor: "brand-blue",
      icon: "lucide:microscope",
      title: "Diagnóstico Técnico",
      description: "Análise profunda de arquitetura, performance, segurança e DX para identificar gargalos críticos."
    },
    {
      accentColor: "brand-cyan",
      icon: "lucide:clipboard-check",
      title: "Auditoria de Código",
      description: "Revisão detalhada com roadmap técnico de 90 dias focado em estabilidade e escalabilidade."
    },
    {
      accentColor: "brand-purple",
      icon: "lucide:settings",
      title: "Setup de Padrões",
      description: "Implementação de CI/CD, Clean Architecture e Observabilidade para times de alta performance."
    },
    {
      accentColor: "emerald-500",
      icon: "lucide:user-cog",
      title: "CTO as a Service",
      description: "Liderança técnica estratégica para guiar decisões críticas e escalar o produto com segurança."
    },
    {
      accentColor: "orange-500",
      icon: "lucide:shield-check",
      title: "Governança Técnica",
      description: "Processos de code review contínuo e padrões de engenharia para manter a qualidade a longo prazo."
    },
    {
      accentColor: "pink-500",
      icon: "lucide:layout-template",
      title: "MVP Técnico B2B",
      description: "Desenvolvimento focado em validar hipóteses técnicas e de negócio com velocidade e robustez."
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background with Engineering Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-x-0 top-0 h-full bg-cover bg-center brightness-[0.3]"
          style={{ 
            backgroundImage: "url('/images/engineering.png')",
            maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)"
          }}
        ></div>
        <div className="absolute inset-0 bg-brand-black/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Nossa <span className="text-neutral-500">Expertise</span></h2>
            <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mb-6"></div>
            <p className="text-neutral-400 max-w-xl font-light">
              Soluções desenhadas para performance extrema, segurança de alto nível e manutenibilidade a longo prazo.
            </p>
          </div>
          <a href="#contact" className="text-sm text-brand-cyan hover:text-brand-cyan/80 flex items-center gap-2 transition-colors font-medium">
            Solicitar Orçamento Customizado <Icon icon="lucide:arrow-right" width="16" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="glass-card p-10 rounded-2xl group cursor-default border-white/5 hover:border-brand-cyan/20 transition-all duration-300 relative overflow-hidden">
              {/* Subtle tech accent background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-grid scale-150"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 via-transparent to-brand-purple/20"></div>
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-${s.accentColor}/10 flex items-center justify-center transition-colors group-hover:bg-${s.accentColor}/20`}>
                    <Icon icon={s.icon} className={`text-${s.accentColor}`} width="28" />
                  </div>
                  <Icon icon="lucide:arrow-right" className="text-neutral-800 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" width="20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{s.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
