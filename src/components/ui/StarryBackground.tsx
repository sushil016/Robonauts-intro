import { FC, useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    radius: number;
    alpha: number;
    velocity: number;
}
  
export const StarryBackground: FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let animationFrameId: number;
  
        const stars: Star[] = [];
        for (let i = 0; i < 100; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3,
                alpha: Math.random(),
                velocity: Math.random() * 0.5,
            });
        }
  
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
  
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();
  
                star.y += star.velocity;
                if (star.y > canvas.height) star.y = 0;
            });
  
            animationFrameId = requestAnimationFrame(animate);
        };
  
        animate();
  
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);
  
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', }}>
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full"
                width={typeof window !== "undefined" ? window.innerWidth : 300}
                height={typeof window !== "undefined" ? window.innerHeight : 300}
            />
        </div>
    );
};