"use client";
import React from "react";
import { Icon } from "./Icon";

export const Testimonials = () => {
  const testimonials = [
    {
      initials: "MR",
      author: "Marcelo Rocha",
      role: "CTO, Fintech Série B",
      quote: "A IvebSystem não entregou apenas código, mas uma nova arquitetura que permitiu escalarmos nosso processamento em 10x sem aumentar o custo de Cloud."
    },
    {
      initials: "AS",
      author: "Ana Souza",
      role: "CEO, HealthTech Startup",
      quote: "Procurávamos parceiros, não fornecedores. Eles entenderam nosso business e propuseram soluções que aceleraram nosso time-to-market em 3 meses."
    },
    {
      initials: "CP",
      author: "Carlos Paiva",
      role: "Head de Produto, LogTech",
      quote: "A consultoria de segurança foi um divisor de águas. Identificaram falhas críticas e implementaram uma arquitetura robusta antes do nosso maior lançamento."
    }
  ];

  return (
    <section id="testimonials" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Confiança que <span className="gradient-text">Gera Resultados</span></h2>
          <p className="text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Veja o que dizem os líderes que transformaram suas operações com a nossa parceria técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-10 rounded-3xl flex flex-col justify-between border-white/5 hover:border-brand-cyan/20 transition-all duration-500 group">
              <div>
                <div className="flex gap-1 mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                  {[...Array(5)].map((_, i) => <Icon key={i} icon="lucide:star" className="text-brand-cyan" width="16" />)}
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed mb-8 font-light italic">&quot;{t.quote}&quot;</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 flex items-center justify-center text-xs font-bold border border-white/10 text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-white tracking-tight">{t.author}</div>
                  <div className="text-xs text-neutral-500 font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
