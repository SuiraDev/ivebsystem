"use client";
import React, { useState } from "react";
import { Icon } from "./Icon";

export const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    desafio: ""
  });

  const handleWhatsApp = () => {
    const message = `Olá, meu nome é ${formData.nome}. Meu e-mail é ${formData.email}. Gostaria de falar sobre meu desafio: ${formData.desafio}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5585986178977?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-brand-black">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-brand-cyan/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="glass-card rounded-[2.5rem] border-white/5 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          
          <div className="relative p-12 md:p-16 overflow-hidden flex flex-col justify-between group">
            {/* Technical background with overlay */}
            <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110">
              <img 
                src="/images/contact-bg.png" 
                alt="Contato IvebSystem" 
                className="w-full h-full object-cover brightness-[0.4]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-black/80 via-brand-black/40 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-8">
                <Icon icon="lucide:zap" className="text-brand-cyan" width="14" />
                <span className="text-[10px] font-bold text-brand-cyan tracking-widest uppercase">Diagnóstico Gratuito</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white">
                Pronto para o Próximo Nível Técnico?
              </h2>
              <p className="text-neutral-400 text-lg mb-10 font-light leading-relaxed">
                Resolva sua dívida técnica, escale seu produto com inteligência e pare de queimar caixa com arquiteturas erradas.
              </p>
              
              <div className="space-y-6">
                {[
                  "Roadmap técnico em até 24h",
                  "Análise de viabilidade gratuita",
                  "NDA incluso por padrão",
                  "Acompanhamento direto com Heads"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center shrink-0">
                      <Icon icon="lucide:check" className="text-brand-cyan" width="14" />
                    </div>
                    <span className="text-sm text-neutral-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/5 relative z-10">
              <div className="flex items-center gap-4 text-sm text-neutral-500 hover:text-white transition-colors">
                <Icon icon="lucide:mail" width="18" />
                <span className="font-medium">ivebsystem@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="p-12 md:p-16 bg-neutral-900/40 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-8">Fale Conosco</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">Seu Nome</label>
                <input 
                  type="text" 
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all duration-300 placeholder:text-neutral-700" 
                  placeholder="Ex: João Silva" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">E-mail Corporativo</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all duration-300 placeholder:text-neutral-700" 
                  placeholder="joao@empresa.com" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">Qual seu desafio?</label>
                <textarea 
                  rows={4} 
                  value={formData.desafio}
                  onChange={(e) => setFormData({...formData, desafio: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all duration-300 placeholder:text-neutral-700 resize-none" 
                  placeholder="Descreva seu projeto ou dor tecnológica..."
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button 
                  type="button"
                  onClick={handleWhatsApp}
                  className="group relative w-full flex items-center justify-center gap-3 bg-brand-cyan text-black font-bold text-sm py-5 rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                >
                  <Icon icon="ic:baseline-whatsapp" width="22" />
                  <span>Enviar via WhatsApp</span>
                </button>
                <p className="text-[10px] text-center text-neutral-600 font-bold uppercase tracking-[0.2em] mt-6">
                  Resposta técnica em menos de 24h
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
