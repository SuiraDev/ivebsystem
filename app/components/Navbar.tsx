"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "./Icon";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const navLinks = [
        { href: "#about", label: "Sobre" },
        { href: "#services", label: "Serviços" },
        { href: "#model", label: "Como funciona" },
        { href: "#process", label: "Processo" },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-[100] glass-nav">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="text-brand-cyan transition-transform duration-500">
                            <img
                                src="/iveb-logo.svg"
                                alt="Logo"
                                className="w-8 h-8"
                            />
                        </div>
                        <span className="text-lg font-semibold tracking-tighter text-white uppercase">
                            IVEB<span className="text-neutral-400">SYSTEM</span>
                        </span>
                    </a>

                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href={`https://wa.me/5585986178977?text=${encodeURIComponent("Olá! Gostaria de falar com um especialista sobre meu projeto.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 text-xs font-semibold bg-white text-black rounded-full hover:bg-brand-cyan hover:text-black transition-all duration-300"
                        >
                            Falar com Especialista
                        </a>
                    </nav>

                    {/* Mobile Toggle Button */}
                    <button
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white relative z-[110] hover:bg-white/10 transition-all active:scale-90"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[90] md:hidden transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                <div
                    className="absolute inset-0 bg-brand-black/98 backdrop-blur-2xl"
                    onClick={() => setIsOpen(false)}
                ></div>

                {/* Technological Background Elements */}
                <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-cyan/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-purple/20 rounded-full blur-[100px] animate-pulse"></div>

                <nav className="relative h-full flex flex-col items-center justify-center gap-10 p-6 z-10">
                    {navLinks.map((link, i) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-4xl font-bold tracking-tighter transition-all duration-500 delay-[${i * 100}ms] ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} hover:text-brand-cyan text-white grayscale hover:grayscale-0`}
                        >
                            <span className="text-xs font-mono text-brand-cyan/50 mr-4 italic">
                                0{i + 1}
                            </span>
                            {link.label}
                        </a>
                    ))}

                    <div
                        className={`mt-10 transition-all duration-700 delay-500 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    >
                        <a
                            href={`https://wa.me/5585986178977?text=${encodeURIComponent("Olá! Gostaria de falar com um especialista sobre meu projeto.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-10 py-5 bg-brand-cyan text-black font-bold rounded-2xl shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-widest"
                        >
                            Falar com Especialista
                            <Icon icon="ic:baseline-whatsapp" width="20" />
                        </a>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-12 flex flex-col items-center gap-6 opacity-40">
                        <div className="flex gap-8">
                            <Icon
                                icon="lucide:linkedin"
                                width="24"
                                className="text-white hover:text-brand-cyan transition-colors"
                            />
                            <Icon
                                icon="lucide:twitter"
                                width="24"
                                className="text-white hover:text-brand-cyan transition-colors"
                            />
                            <Icon
                                icon="lucide:github"
                                width="24"
                                className="text-white hover:text-brand-cyan transition-colors"
                            />
                        </div>
                        <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest italic tracking-[0.2em]">
                            IVEBSYSTEM // HIGH PERFORMANCE
                        </p>
                    </div>
                </nav>
            </div>
        </>
    );
};
