"use client";
import React from "react";
import { Icon } from "./Icon";

export const BusinessModel = () => {
    return (
        <section
            id="model"
            className="py-32 relative overflow-hidden bg-brand-black"
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 animate-slide-up">
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
                        O Futuro é{" "}
                        <span className="gradient-text">Sob Demanda</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Eliminamos a barreira de entrada da alta tecnologia.
                        Compare nosso modelo com o mercado tradicional.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Layer 1 - Entry */}
                    <div className="glass-card p-10 rounded-[2rem] border-white/5 hover:border-brand-cyan/20 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-grid"></div>
                        <div className="relative z-10">
                            <div className="text-brand-cyan mb-6 flex justify-between items-center">
                                <Icon icon="lucide:search" width="32" />
                                <span className="text-xs font-bold bg-brand-cyan/10 px-3 py-1 rounded-full uppercase tracking-widest">
                                    Camada 1
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                Oferta de Entrada
                            </h3>
                            <p className="text-brand-cyan font-bold text-lg mb-6">
                                Sob consulta
                            </p>
                            <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                                Gerar caixa e confiança com fechamento rápido
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-start gap-3 text-sm text-neutral-300">
                                    <Icon
                                        icon="lucide:check"
                                        className="text-brand-cyan shrink-0"
                                        width="16"
                                    />
                                    Diagnóstico técnico Arquitetural
                                </li>
                                <li className="flex items-start gap-3 text-sm text-neutral-300">
                                    <Icon
                                        icon="lucide:check"
                                        className="text-brand-cyan shrink-0"
                                        width="16"
                                    />
                                    Auditoria de código + Roadmap
                                </li>
                                <li className="flex items-start gap-3 text-sm text-neutral-300">
                                    <Icon
                                        icon="lucide:check"
                                        className="text-brand-cyan shrink-0"
                                        width="16"
                                    />
                                    Overview de escalabilidade
                                </li>
                            </ul>
                            <a
                                href={`https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Gostaria de um Diagnóstico Técnico (Camada 1).")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-bold text-sm hover:bg-brand-cyan/20 transition-all active:scale-95"
                            >
                                Solicitar Diagnóstico
                                <Icon icon="ic:baseline-whatsapp" width="18" />
                            </a>
                            <div className="text-xs text-neutral-500 italic mt-6">
                                Relatório + Call de entrega fixa.
                            </div>
                        </div>
                    </div>

                    {/* Layer 2 - Core */}
                    <div className="glass-card p-10 rounded-[2rem] border-white/5 hover:border-brand-cyan/20 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-grid"></div>
                        <div className="relative z-10">
                            <div className="relative z-10">
                                <div className="text-brand-purple mb-6 flex justify-between items-center">
                                    <Icon icon="lucide:box" width="32" />
                                    <span className="text-xs font-bold bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full uppercase tracking-widest">
                                        Camada 2
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Oferta Principal
                                </h3>
                                <p className="text-brand-purple font-bold text-lg mb-6">
                                    Investimento Customizado
                                </p>
                                <p className="text-sm text-neutral-300 font-medium leading-relaxed mb-8">
                                    Contratos de execução com marcos claros
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-start gap-3 text-sm text-neutral-200">
                                        <Icon
                                            icon="lucide:check"
                                            className="text-brand-purple shrink-0"
                                            width="16"
                                        />
                                        Reestruturação de Arquitetura Crítica
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-neutral-200">
                                        <Icon
                                            icon="lucide:check"
                                            className="text-brand-purple shrink-0"
                                            width="16"
                                        />
                                        Refatoração com metas de performance
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-neutral-200">
                                        <Icon
                                            icon="lucide:check"
                                            className="text-brand-purple shrink-0"
                                            width="16"
                                        />
                                        Implementação de Módulos Core
                                    </li>
                                </ul>
                                <a
                                    href={`https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Gostaria de uma proposta customizada para Reestruturação/Execução (Camada 2).")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-brand-purple text-white font-bold text-sm hover:scale-[1.02] transition-transform active:scale-95 shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                                >
                                    Solicitar Proposta
                                    <Icon
                                        icon="ic:baseline-whatsapp"
                                        width="18"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Layer 3 - Recurring */}
                    <div className="glass-card p-10 rounded-[2rem] border-white/5 hover:border-brand-blue/20 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-grid"></div>
                        <div className="relative z-10">
                            <div className="text-brand-blue mb-6 flex justify-between items-center">
                                <Icon icon="lucide:refresh-cw" width="32" />
                                <span className="text-xs font-bold bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full uppercase tracking-widest">
                                    Camada 3
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                Recorrência Estratégica
                            </h3>
                            <p className="text-brand-blue font-bold text-lg mb-6">
                                Investimento Mensal
                            </p>
                            <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                                Previsibilidade e Inteligência Técnica.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-start gap-3 text-sm text-neutral-300">
                                    <Icon
                                        icon="lucide:check"
                                        className="text-brand-blue shrink-0"
                                        width="16"
                                    />
                                    CTO as a Service
                                </li>
                                <li className="flex items-start gap-3 text-sm text-neutral-300">
                                    <Icon
                                        icon="lucide:check"
                                        className="text-brand-blue shrink-0"
                                        width="16"
                                    />
                                    Tech Advisory Mensal
                                </li>
                                <li className="flex items-start gap-3 text-sm text-neutral-300">
                                    <Icon
                                        icon="lucide:check"
                                        className="text-brand-blue shrink-0"
                                        width="16"
                                    />
                                    Governança + Code Review Contínuo
                                </li>
                            </ul>
                            <a
                                href={`https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a Consultoria Estratégica Mensal (Camada 3).")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-bold text-sm hover:bg-brand-blue/20 transition-all transition-transform hover:scale-[1.02] active:scale-95"
                            >
                                Falar com CTO
                                <Icon icon="ic:baseline-whatsapp" width="18" />
                            </a>
                            <div className="text-xs text-neutral-500 italic mt-6">
                                Disponível após execução das Camadas 1 ou 2.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
