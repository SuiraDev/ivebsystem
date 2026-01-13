"use client";
import React from "react";
import { Icon } from "./Icon";

export const Stats = () => {
  const stats = [
    { icon: "lucide:briefcase", value: "50+ Projetos", accent: "group-hover:text-brand-cyan" },
    { icon: "lucide:users", value: "Time de Especialistas", accent: "group-hover:text-brand-purple" },
    { icon: "lucide:sparkles", value: "Inovação Contínua", accent: "group-hover:text-brand-blue" },
    { icon: "lucide:target", value: "Estratégia para o Futuro", accent: "group-hover:text-brand-cyan" }
  ];

  return (
    <section className="hidden md:block py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className={`flex justify-center items-center ${stat.accent} transition-colors duration-300`}>
                <Icon icon={stat.icon} width="32" className="mb-3" />
              </div>
              <span className="text-xs font-semibold text-white">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
