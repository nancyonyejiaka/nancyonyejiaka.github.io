"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDark, setIsDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    if (isDark) {
      // Twinkling stars
      const stars: { x: number; y: number; r: number; phase: number; speed: number }[] = [];
      for (let i = 0; i < 120; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.5 + 0.5,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.02 + 0.005,
        });
      }

      const drawStars = (time: number) => {
        ctx.clearRect(0, 0, width, height);
        for (const star of stars) {
          const opacity = 0.3 + 0.7 * Math.abs(Math.sin(star.phase + time * star.speed));
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(181, 128, 242, ${opacity})`;
          ctx.fill();
        }
        animId = requestAnimationFrame(drawStars);
      };
      animId = requestAnimationFrame(drawStars);
    } else {
      // Soft aurora / gradient blobs
      const blobs: { x: number; y: number; vx: number; vy: number; radius: number; color: number[] }[] = [];
      const colors = [
        [255, 118, 199],  // accent pink
        [181, 128, 242],  // keyword purple
        [108, 212, 255],  // string cyan
        [154, 232, 201],  // function green
      ];

      for (let i = 0; i < 6; i++) {
        blobs.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 200 + 150,
          color: colors[i % colors.length],
        });
      }

      const drawAurora = () => {
        ctx.clearRect(0, 0, width, height);
        for (const blob of blobs) {
          blob.x += blob.vx;
          blob.y += blob.vy;

          if (blob.x < -blob.radius) blob.x = width + blob.radius;
          if (blob.x > width + blob.radius) blob.x = -blob.radius;
          if (blob.y < -blob.radius) blob.y = height + blob.radius;
          if (blob.y > height + blob.radius) blob.y = -blob.radius;

          const gradient = ctx.createRadialGradient(
            blob.x, blob.y, 0,
            blob.x, blob.y, blob.radius
          );
          gradient.addColorStop(0, `rgba(${blob.color[0]}, ${blob.color[1]}, ${blob.color[2]}, 0.12)`);
          gradient.addColorStop(1, `rgba(${blob.color[0]}, ${blob.color[1]}, ${blob.color[2]}, 0)`);

          ctx.beginPath();
          ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
        animId = requestAnimationFrame(drawAurora);
      };
      animId = requestAnimationFrame(drawAurora);
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [isDark, ready]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[-1] pointer-events-none"
    />
  );
}
