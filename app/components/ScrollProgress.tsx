"use client";
import React, { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setProgress((currentScrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 group hidden md:flex">
      <div className="h-48 w-[2px] bg-white/5 rounded-full overflow-hidden relative">
        <div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-cyan to-brand-purple transition-all duration-150 ease-out"
          style={{ height: `${progress}%` }}
        />
      </div>
      <div className="text-[10px] font-bold text-brand-cyan">
        {Math.round(progress)}%
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </div>
  );
};
