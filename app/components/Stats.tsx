"use client";
import React from "react";

export const Stats = () => {
  const stats = [
    { label: "Risco para o Cliente", value: "BAIXO", accent: "group-hover:text-brand-cyan" },
    { label: "Entrega Garantida", value: "100%", accent: "group-hover:text-brand-purple" },
    { label: "Projetos Senior", value: "95%+", accent: "group-hover:text-brand-blue" },
    { label: "Diagnóstico", value: "FAST", accent: "group-hover:text-brand-cyan" }
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-brand-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className={`text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2 ${stat.accent} transition-colors duration-300`}>
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
