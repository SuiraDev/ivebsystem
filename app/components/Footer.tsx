"use client";
import React from "react";
import { Icon } from "./Icon";

export const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-brand-black pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    <div className="md:col-span-1">
                        <a
                            href="#"
                            className="flex items-center gap-2 mb-8 group"
                        >
                            <img
                                src="/iveb-logo.svg"
                                alt="Logo"
                                className="w-8 h-8"
                            />
                            <span className="text-xl font-bold tracking-tighter text-white uppercase">
                                IVEB
                                <span className="text-neutral-500">SYSTEM</span>
                            </span>
                        </a>
                        <p className="text-sm text-neutral-500 leading-relaxed mb-8 font-light">
                            Transformando desafios técnicos em vantagens
                            competitivas através de engenharia premium e modelos
                            de negócio escaláveis.
                        </p>
                        <div className="flex gap-5">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/10 transition-all border border-white/5"
                            >
                                <Icon icon="lucide:linkedin" width="20" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/10 transition-all border border-white/5"
                            >
                                <Icon icon="lucide:instagram" width="20" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/10 transition-all border border-white/5"
                            >
                                <Icon icon="lucide:github" width="20" />
                            </a>
                        </div>
                    </div>

                    {[
                        {
                            title: "Soluções",
                            links: [
                                "Sistemas Web",
                                "Mobile Apps",
                                "Automação IA",
                                "Infraestrutura Cloud",
                            ],
                        },
                        {
                            title: "Institucional",
                            links: [
                                "Sobre Nós",
                                "Modelo de Negócio",
                                "Cases de Sucesso",
                                "Blog Tech",
                            ],
                        },
                        {
                            title: "Legal",
                            links: [
                                "Privacidade",
                                "Termos de Uso",
                                "Segurança",
                                "Cookies",
                            ],
                        },
                    ].map((col, i) => (
                        <div key={i}>
                            <h4 className="text-xs font-bold text-white mb-8 uppercase tracking-widest">
                                {col.title}
                            </h4>
                            <ul className="space-y-4">
                                {col.links.map((link, j) => (
                                    <li key={j}>
                                        <a
                                            href="#"
                                            className="text-sm text-neutral-500 hover:text-brand-cyan transition-colors font-light"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-neutral-600 font-light">
                        © {new Date().getFullYear()} IvebSystem Tecnologia Ltda.
                        Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};
