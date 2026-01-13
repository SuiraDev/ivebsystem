"use client";
import React, { useState } from "react";
import { Icon } from "./Icon";

export const FAQ = () => {
  const faqs = [
    {
      q: "Como funciona o modelo de contratação?",
      a: "Trabalhamos com 3 camadas: Diagnósticos rápidos de escopo fechado, Projetos de execução por entrega (não por hora) e Consultoria recorrente para governança e tech advisory."
    },
    {
      q: "O código-fonte pertence a quem?",
      a: "O código-fonte e toda a propriedade intelectual desenvolvida durante a parceria pertencem integralmente a você. Entregamos repositórios limpos e documentados."
    },
    {
      q: "Qual a experiência da equipe?",
      a: "Nossa equipe é formada exclusivamente por engenheiros seniores e arquitetos de software com vasta experiência em sistemas críticos e escaláveis."
    },
    {
      q: "Posso cancelar a qualquer momento?",
      a: "Sim, trabalhamos com um modelo flexível. Queremos ser parceiros pelo valor que geramos, não por contratos de fidelidade engessados."
    },
    {
      q: "Como é feita a comunicação durante o projeto?",
      a: "Utilizamos metodologias ágeis com reuniões quinzenais de demonstração. Você tem acesso direto ao time técnico através de canais dedicados no Slack/WhatsApp e acompanhamento em tempo real."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 relative bg-neutral-900/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Dúvidas <span className="text-neutral-500">Frequentes</span></h2>
          <p className="text-neutral-400 font-light">Tudo o que você precisa saber sobre como transformamos sua ideia em realidade.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`glass-card rounded-2xl border-white/5 overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-brand-cyan/30 bg-white/5' : 'hover:border-white/10'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 text-left flex items-center justify-between group"
              >
                <span className={`text-base font-semibold transition-colors ${openIndex === i ? 'text-brand-cyan' : 'text-neutral-300 group-hover:text-white'}`}>{faq.q}</span>
                <Icon 
                  icon="lucide:chevron-down" 
                  className={`text-neutral-500 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-brand-cyan' : ''}`} 
                  width="20" 
                />
              </button>
              {openIndex === i && (
                <div className="px-8 pb-6 animate-fade-in">
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
