"use client";
import React from "react";
import { Icon } from "./Icon";

export const WhatsAppCTA = () => {
    const handleWhatsApp = () => {
        window.open(
            `https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Gostaria de um diagnóstico gratuito para meu projeto.")}`,
            "_blank",
        );
    };

    return (
        <button
            onClick={handleWhatsApp}
            className="fixed bottom-8 right-8 z-[100] group flex items-center gap-4 animate-slide-up"
        >
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 h-10 flex items-center shadow-2xl">
                <span className="text-white text-xs font-bold tracking-tight whitespace-nowrap">
                    Fale com um Especialista
                </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-brand-success flex items-center justify-center text-white shadow-[0_0_40px_-5px_#00c16c] group-hover:scale-110 active:scale-95 transition-all duration-300">
                <Icon icon="ic:baseline-whatsapp" width="28" />
            </div>
        </button>
    );
};
