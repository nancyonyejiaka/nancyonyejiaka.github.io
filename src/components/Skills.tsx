"use client";

import { skillRows as rows } from "@/data/skills";

function MarqueeRow({
  items,
  direction,
  duration,
  colorVar: color,
}: {
  items: string[];
  direction: "left" | "right";
  duration: number;
  colorVar: string;
}) {
  const doubled = [...items, ...items, ...items, ...items];
  const animName = direction === "left" ? "skills-scroll-left" : "skills-scroll-right";

  return (
    <div className="relative overflow-hidden py-2 group" aria-hidden="true">
      <div
        className="flex gap-3 w-max"
        style={{
          animationName: animName,
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center text-base md:text-lg font-medium px-5 py-2.5 md:px-6 md:py-3 rounded-full whitespace-nowrap transition-all duration-200 cursor-default hover:scale-105"
            style={{
              color,
              border: `1px solid ${color}33`,
              backgroundColor: `${color}0d`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 16px ${color}66, 0 0 4px ${color}33`;
              e.currentTarget.style.borderColor = color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = `${color}33`;
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes skills-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes skills-scroll-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .group:hover > div {
          animation-play-state: paused !important;
        }
      `}} />
      <div className="max-w-[900px] mx-auto px-6 pt-12 md:pt-16 pb-4">
        <p className="section-label">Tech Stack</p>
        <h2 className="font-[family-name:var(--font-fira)] text-3xl md:text-4xl font-bold text-[var(--foreground)] leading-tight">
          Tools I work with daily.
        </h2>
      </div>
      <div className="py-8 space-y-3" aria-label="Technology skills marquee" role="marquee">
        {rows.map((row, i) => (
          <MarqueeRow key={i} {...row} />
        ))}
      </div>
      <ul className="sr-only">
        {rows.flatMap((row) => row.items).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="max-w-[900px] mx-auto px-6 pb-8 md:pb-10">
        <div className="editorial-rule" />
      </div>
    </section>
  );
}
