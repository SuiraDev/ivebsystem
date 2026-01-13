"use client";
import React, { useEffect, useState } from 'react';
import { Icon } from './Icon';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-32 right-6 z-[60] p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-brand-cyan/30 transition-all duration-300 group shadow-2xl animate-fade-in"
          aria-label="Voltar ao topo"
        >
          <Icon icon="lucide:arrow-up" className="group-hover:-translate-y-1 transition-transform" width="20" />
        </button>
      )}
    </>
  );
};
