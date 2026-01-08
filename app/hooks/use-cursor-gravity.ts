import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export function useCursorGravity() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ajustar tamanho do canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Criar partículas iniciais (sutis)
    const particleCount = 20;
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: 0,
      vy: 0,
      size: Math.random() * 2 + 1,
    }));

    // Atualizar posição do mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animações
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouse = mouseRef.current;
      const particles = particlesRef.current;

      particles.forEach((particle) => {
        // Calcular distância do mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Força de gravidade sutil (inversamente proporcional ao quadrado da distância)
        const maxDistance = 200;
        if (distance < maxDistance && distance > 0) {
          const force = (1 - distance / maxDistance) * 0.05; // Força sutil
          const angle = Math.atan2(dy, dx);
          
          particle.vx += Math.cos(angle) * force;
          particle.vy += Math.sin(angle) * force;
        }
        
        // Aplicar atrito
        particle.vx *= 0.95;
        particle.vy *= 0.95;
        
        // Atualizar posição
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Rebotar nas bordas
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -0.8;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -0.8;
        
        // Manter partículas na tela
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        
        // Desenhar partícula (muito sutil - efeito de distorção de gravidade)
        const distanceToMouse = Math.sqrt(
          Math.pow(particle.x - mouse.x, 2) + Math.pow(particle.y - mouse.y, 2)
        );
        const intensity = Math.max(0, 1 - distanceToMouse / maxDistance);
        const alpha = 0.1 * intensity; // Opacidade baseada na proximidade
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${alpha})`;
        ctx.fill();
        
        // Linha sutil conectando ao mouse quando próximo
        if (distanceToMouse < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(148, 163, 184, ${alpha * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return canvasRef;
}

