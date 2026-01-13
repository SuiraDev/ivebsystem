"use client";
import React from 'react';
import { Icon } from './Icon';

export const TechCarousel = () => {
  const techs = [
    { name: "Next.js", icon: "simple-icons:nextdotjs" },
    { name: "React", icon: "simple-icons:react" },
    { name: "TypeScript", icon: "simple-icons:typescript" },
    { name: "NestJS", icon: "simple-icons:nestjs" },
    { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
    { name: "Node.js", icon: "simple-icons:nodedotjs" },
    { name: "PostgreSQL", icon: "simple-icons:postgresql" },
    { name: "Prisma", icon: "simple-icons:prisma" },
    { name: "Docker", icon: "simple-icons:docker" },
    { name: "AWS", icon: "simple-icons:amazonaws" },
    { name: "OpenAI", icon: "simple-icons:openai" },
    { name: "Python", icon: "simple-icons:python" },
    { name: "Go", icon: "simple-icons:go" },
  ];

  // Double the array to create a seamless loop
  const displayTechs = [...techs, ...techs];

  return (
    <div className="py-20 bg-brand-black/50 border-y border-white/5 relative overflow-hidden group">
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-brand-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-brand-black to-transparent z-10"></div>
      
      <div className="flex animate-scroll whitespace-nowrap">
        {displayTechs.map((tech, i) => (
          <div 
            key={i} 
            className="flex items-center gap-3 px-12 opacity-30 hover:opacity-100 transition-opacity duration-300"
          >
            <Icon icon={tech.icon} className="text-white" width="32" />
            <span className="text-xl font-bold text-white tracking-widest uppercase">{tech.name}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
