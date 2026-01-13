"use client";
import React from "react";
import { Icon } from "./Icon";

export const ProblemSection = () => {
  const problems = [
    {
      icon: "lucide:layers",
      title: "Arquitetura mal aplicada",
      description: "Times pequenos morrendo afogados em burocracia técnica, Complexidades e Custos desnecessários.",
      color: "text-brand-cyan",
      bg: "bg-brand-cyan/10"
    },
    {
      icon: "lucide:database",
      title: "Modelagem de dados errada",
      description: "Erros de modelagem de dados que custam caro na hora de escalar e impedem a agilidade do negócio.",
      color: "text-brand-purple",
      bg: "bg-brand-purple/10"
    },
    {
      icon: "lucide:trending-down",
      title: "Dívidas técnicas",
      description: "Atrasos constantes e bugs recorrentes. 80% das soluções quebram na hora de escalar por falta de base.",
      color: "text-brand-blue",
      bg: "bg-brand-blue/10"
    }
  ];

  return (
    <section id="problems" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">O gap da <span className="text-neutral-500">tecnologia tradicional</span></h2>
          <p className="text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Muitas empresas falham não por falta de visão, mas por escolherem modelos de desenvolvimento lentos, caros e arriscados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div key={i} className="glass-card p-10 rounded-3xl border-white/5 hover:border-white/10 group transition-all duration-500">
              <div className={`w-14 h-14 rounded-2xl ${p.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <Icon icon={p.icon} className={p.color} width="28" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{p.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed font-light">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
