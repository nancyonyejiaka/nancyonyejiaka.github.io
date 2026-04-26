"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [view, setView] = useState<"list" | "grid">("list");

  return (
    <section id="projects" className="max-w-[900px] mx-auto px-6 py-16 md:py-20">
      <p className="section-label">Projects</p>
      <h2 className="font-[family-name:var(--font-fira)] text-3xl md:text-4xl font-bold text-[var(--foreground)] leading-tight">
        Systems I&apos;ve designed and shipped.
      </h2>
      <p className="mt-4 text-[var(--muted)] text-base max-w-[600px] leading-relaxed">
        Selected work — each representing a different facet of my engineering practice,
        from recommendation engines to developer tooling.
      </p>
      <div className="mt-10 flex justify-end">
        <div className="flex items-center gap-1 border border-[var(--card-border)] rounded-md p-1">
          <button
            onClick={() => setView("list")}
            aria-label="List view"
            aria-pressed={view === "list"}
            className={`p-2 rounded transition-colors duration-150 ${
              view === "list"
                ? "bg-[var(--accent)] text-white"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <line x1="1" y1="3" x2="15" y2="3" />
              <line x1="1" y1="8" x2="15" y2="8" />
              <line x1="1" y1="13" x2="15" y2="13" />
            </svg>
          </button>
          <button
            onClick={() => setView("grid")}
            aria-label="Grid view"
            aria-pressed={view === "grid"}
            className={`p-2 rounded transition-colors duration-150 ${
              view === "grid"
                ? "bg-[var(--accent)] text-white"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="1" y="1" width="6" height="6" rx="1" />
              <rect x="9" y="1" width="6" height="6" rx="1" />
              <rect x="1" y="9" width="6" height="6" rx="1" />
              <rect x="9" y="9" width="6" height="6" rx="1" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={
          view === "list"
            ? "mt-6 space-y-8"
            : "mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        }
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} view={view} />
        ))}
      </div>
      <div className="editorial-rule" />
    </section>
  );
}
