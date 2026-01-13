"use client";
import React from "react";
import { Icon } from "./Icon";

export const Hero = () => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid z-0"></div>
      
      {/* Parallax Background Image */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div 
          className="absolute inset-x-0 -top-40 -bottom-40 bg-cover bg-center transition-transform duration-100 ease-out"
          style={{ 
            backgroundImage: "url('/images/parallax-bg.png')",
            filter: "brightness(0.5) contrast(1.2)",
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        ></div>
      </div>

      <div className="absolute top-0 -left-4 w-96 h-96 bg-brand-purple/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-brand-cyan/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-20 w-96 h-96 bg-brand-blue/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-slide-up backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
          </span>
          <span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">Consultoria Técnica & Engenharia de Elite</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Inteligência Técnica <br className="hidden md:block" />
          para <span className="gradient-text">Escalar seu Negócio</span>
        </h1>

        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up font-light" style={{ animationDelay: '0.2s' }}>
          Parem de queimar caixa com arquiteturas erradas. Entregamos diagnósticos precisos, execução de alto nível e governança técnica para fundadores e CEOs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a 
            href={`https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Gostaria de um diagnóstico técnico para meu negócio.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative flex items-center gap-2">
              Agendar Diagnóstico Técnico
              <Icon icon="ic:baseline-whatsapp" width="18" />
            </span>
          </a>
          <a href="#model" className="px-8 py-3.5 rounded-full border border-white/10 text-white font-medium text-sm hover:bg-white/5 hover:border-white/20 transition-all flex items-center gap-2 opacity-60 hover:opacity-100">
            Conhecer o Modelo
          </a>
        </div>
      </div>
    </section>
  );
};
