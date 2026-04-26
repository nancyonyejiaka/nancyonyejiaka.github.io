"use client";

import { useEffect, useRef } from "react";

interface MoonConfig {
  radius: number;
  size: number;
  speed: number;
  color: string;
  opacity: number;
  startAngle: number;
}

export default function OrbitingMoons({
  moons,
  className = "",
}: {
  moons: MoonConfig[];
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const mouseInside = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let startTimeout: ReturnType<typeof setTimeout>;
    let w = 0;
    let h = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      w = canvas.width = rect.width;
      h = canvas.height = rect.height;
      mousePos.current = { x: w / 2, y: h / 2 };
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      mouseInside.current = true;
    };

    const handleMouseLeave = () => {
      mouseInside.current = false;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Four corner positions for distributing moons
    const spawnCorners = [
      { x: w * 0.15, y: h * 0.2 },
      { x: w * 0.85, y: h * 0.2 },
      { x: w * 0.15, y: h * 0.8 },
      { x: w * 0.85, y: h * 0.8 },
    ];

    // Each moon spawns near a corner with tangential velocity
    const moonStates = moons.map((m, i) => {
      const corner = spawnCorners[i % spawnCorners.length];
      const angle = m.startAngle;
      const orbitalSpeed = m.speed * 60;
      return {
        x: corner.x + Math.cos(angle) * m.radius * 0.5,
        y: corner.y + Math.sin(angle) * m.radius * 0.5,
        vx: -Math.sin(angle) * orbitalSpeed,
        vy: Math.cos(angle) * orbitalSpeed,
        homeX: corner.x,
        homeY: corner.y,
        ...m,
      };
    });

    const G = 120;
    const mouseG = 2000;

    const corners = [
      { x: w * 0.15, y: h * 0.2, mass: 1 },
      { x: w * 0.85, y: h * 0.2, mass: 1 },
      { x: w * 0.15, y: h * 0.8, mass: 1 },
      { x: w * 0.85, y: h * 0.8, mass: 1 },
    ];
    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw corner suns
      for (const corner of corners) {
        const sunGrad = ctx.createRadialGradient(corner.x, corner.y, 0, corner.x, corner.y, 12);
        sunGrad.addColorStop(0, "rgba(181, 128, 242, 0.2)");
        sunGrad.addColorStop(0.5, "rgba(181, 128, 242, 0.06)");
        sunGrad.addColorStop(1, "rgba(181, 128, 242, 0)");
        ctx.beginPath();
        ctx.arc(corner.x, corner.y, 12, 0, Math.PI * 2);
        ctx.fillStyle = sunGrad;
        ctx.fill();

        // Faint orbit rings around each corner
        ctx.strokeStyle = "rgba(181, 128, 242, 0.03)";
        ctx.lineWidth = 0.5;
        for (let r = 50; r <= 140; r += 45) {
          ctx.beginPath();
          ctx.arc(corner.x, corner.y, r, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      for (const moon of moonStates) {
        if (mouseInside.current) {
          // Strong mouse attraction — moons chase the cursor
          const dx = mousePos.current.x - moon.x;
          const dy = mousePos.current.y - moon.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const force = mouseG / Math.max(dist * dist, 400);

          moon.vx += (dx / Math.max(dist, 1)) * force;
          moon.vy += (dy / Math.max(dist, 1)) * force;

          // Damping while chasing mouse — prevents overshooting
          moon.vx *= 0.94;
          moon.vy *= 0.94;
        } else {
          // Return to orbital path around home corner
          const dx = moon.homeX - moon.x;
          const dy = moon.homeY - moon.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Spring force pulls back toward home
          const springK = 0.002;
          moon.vx += dx * springK;
          moon.vy += dy * springK;

          // Tangential force to maintain orbit around home
          if (dist > 5) {
            const tangentX = -dy / dist;
            const tangentY = dx / dist;
            moon.vx += tangentX * moon.speed * 1.5;
            moon.vy += tangentY * moon.speed * 1.5;
          }

          // Corner gravity for multi-body feel
          for (const corner of corners) {
            const cdx = corner.x - moon.x;
            const cdy = corner.y - moon.y;
            const cDist = Math.sqrt(cdx * cdx + cdy * cdy);
            const cForce = (G * corner.mass) / Math.max(cDist * cDist, 900);

            moon.vx += (cdx / Math.max(cDist, 1)) * cForce * 0.01;
            moon.vy += (cdy / Math.max(cDist, 1)) * cForce * 0.01;
          }

          // Light damping for smooth orbits
          moon.vx *= 0.985;
          moon.vy *= 0.985;
        }

        // Cap velocity
        const maxV = mouseInside.current ? 8 : 4;
        const v = Math.sqrt(moon.vx * moon.vx + moon.vy * moon.vy);
        if (v > maxV) {
          moon.vx = (moon.vx / v) * maxV;
          moon.vy = (moon.vy / v) * maxV;
        }

        // Update position
        moon.x += moon.vx;
        moon.y += moon.vy;

        // Soft boundary
        if (moon.x < -50) moon.vx += 0.5;
        if (moon.x > w + 50) moon.vx -= 0.5;
        if (moon.y < -50) moon.vy += 0.5;
        if (moon.y > h + 50) moon.vy -= 0.5;

        // Draw moon with glow
        ctx.beginPath();
        ctx.arc(moon.x, moon.y, moon.size, 0, Math.PI * 2);

        const gradient = ctx.createRadialGradient(moon.x, moon.y, 0, moon.x, moon.y, moon.size);
        gradient.addColorStop(0, moon.color.replace(")", `, ${moon.opacity})`).replace("rgb", "rgba"));
        gradient.addColorStop(0.6, moon.color.replace(")", `, ${moon.opacity * 0.4})`).replace("rgb", "rgba"));
        gradient.addColorStop(1, moon.color.replace(")", ", 0)").replace("rgb", "rgba"));
        ctx.fillStyle = gradient;
        ctx.fill();

        // Trail / motion blur
        ctx.beginPath();
        ctx.arc(moon.x - moon.vx * 2, moon.y - moon.vy * 2, moon.size * 0.6, 0, Math.PI * 2);
        const trailGrad = ctx.createRadialGradient(
          moon.x - moon.vx * 2, moon.y - moon.vy * 2, 0,
          moon.x - moon.vx * 2, moon.y - moon.vy * 2, moon.size * 0.6
        );
        trailGrad.addColorStop(0, moon.color.replace(")", `, ${moon.opacity * 0.2})`).replace("rgb", "rgba"));
        trailGrad.addColorStop(1, moon.color.replace(")", ", 0)").replace("rgb", "rgba"));
        ctx.fillStyle = trailGrad;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    startTimeout = setTimeout(() => {
      animId = requestAnimationFrame(draw);
    }, 100);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [moons]);

  return (
    <div ref={containerRef} className={`absolute inset-0 -z-5 ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
