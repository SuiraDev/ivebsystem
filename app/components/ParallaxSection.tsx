"use client";
import React, { useEffect, useRef, useState } from 'react';

interface ParallaxSectionProps {
  imagePath: string;
  height?: string;
  overlayColor?: string;
  children?: React.ReactNode;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  imagePath, 
  height = "400px", 
  overlayColor = "rgba(10, 10, 10, 0.6)",
  children 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.pageYOffset;
      const sectionTop = rect.top + scrollPosition;
      
      // Calculate offset based on scroll position relative to section
      const val = (scrollPosition - sectionTop) * 0.4;
      setOffset(val);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden w-full"
      style={{ height }}
    >
      <div 
        className="absolute inset-0 w-full h-[150%] bg-cover bg-center transition-transform duration-100 ease-out will-change-transform"
        style={{ 
          backgroundImage: `url(${imagePath})`,
          transform: `translateY(${offset}px)`,
          top: "-25%"
        }}
      />
      <div 
        className="absolute inset-0 z-10"
        style={{ backgroundColor: overlayColor }}
      />
      {children && (
        <div className="relative z-20 h-full flex items-center justify-center">
          {children}
        </div>
      )}
    </section>
  );
};
