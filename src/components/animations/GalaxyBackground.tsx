import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  opacity: number;
  color: string;
  fadeRate: number;
}

export function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar tamanho do canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Detectar modo escuro/claro
    const isDarkMode = () => {
      return document.documentElement.classList.contains('dark');
    };

    // Cores do design system
    const ORANGE = '#FF4806';
    const BLUE = '#0A142F';

    const particles: Particle[] = [];
    const particleCount = 50; // Quantidade de partículas

    // Criar partícula
    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 20,
        size: Math.random() * 3 + 1, // Tamanho entre 1 e 4px
        speedY: Math.random() * 0.8 + 0.4, // Velocidade de subida
        opacity: Math.random() * 0.5 + 0.5, // Opacidade inicial
        color: ORANGE, // Apenas laranja
        fadeRate: Math.random() * 0.003 + 0.001 // Taxa de desaparecimento
      };
    };

    // Inicializar partículas
    for (let i = 0; i < particleCount; i++) {
      const particle = createParticle();
      particle.y = Math.random() * canvas.height; // Distribuir inicialmente
      particles.push(particle);
    }

    // Animação
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dark = isDarkMode();

      particles.forEach((particle, index) => {
        // Mover partícula para cima
        particle.y -= particle.speedY;
        
        // Reduzir opacidade gradualmente
        particle.opacity -= particle.fadeRate;

        // Se a partícula saiu da tela ou ficou invisível, recriar
        if (particle.y < -20 || particle.opacity <= 0) {
          particles[index] = createParticle();
          return;
        }

        // Desenhar partícula
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Ajustar opacidade baseado no modo
        const adjustedOpacity = dark ? particle.opacity * 0.6 : particle.opacity * 0.4;
        ctx.fillStyle = particle.color + Math.floor(adjustedOpacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Adicionar brilho sutil (glow)
        if (particle.size > 2) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
          const glowOpacity = adjustedOpacity * 0.3;
          ctx.fillStyle = particle.color + Math.floor(glowOpacity * 255).toString(16).padStart(2, '0');
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
}
