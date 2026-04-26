"use client";

import { useState, useEffect } from "react";
import { heroSlides as slides, heroSubtitle, resumeUrl } from "@/data/hero";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(slides[0].headline.charAt(0));
  const [phase, setPhase] = useState<"typing" | "paused" | "deleting">("typing");
  const [titleVisible, setTitleVisible] = useState(true);

  const currentHeadline = slides[index].headline;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      if (displayedText.length < currentHeadline.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentHeadline.slice(0, displayedText.length + 1));
        }, 35);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), 2500);
      }
    } else if (phase === "deleting") {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentHeadline.slice(0, displayedText.length - 1));
        }, 20);
      } else {
        setTitleVisible(false);
        timeout = setTimeout(() => {
          setIndex((prev) => (prev + 1) % slides.length);
          setTitleVisible(true);
          setPhase("typing");
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, phase, currentHeadline]);

  return (
    <section id="hero" className="relative max-w-[900px] mx-auto px-6 pt-10 pb-16 md:pt-20 md:pb-32">
      <p className="section-label h-5 overflow-hidden" aria-hidden="true">
        <span
          className={`inline-block transition-all duration-300 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3"
          }`}
        >
          {slides[index].title}
        </span>
      </p>
      <span className="sr-only">{slides[index].title}. {currentHeadline}</span>
      <div className="grid" aria-hidden="true">
        {slides.map((s) => (
          <span
            key={s.headline}
            className="invisible col-start-1 row-start-1 font-[family-name:var(--font-fira)] text-[1.5rem] sm:text-[1.75rem] md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight"
          >
            {s.headline}
          </span>
        ))}
        <h1 className="col-start-1 row-start-1 font-[family-name:var(--font-fira)] text-[1.5rem] sm:text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-[1.15] tracking-tight">
          {displayedText}
          <span className="inline-block w-[3px] h-[1em] bg-[var(--accent)] ml-1 align-middle animate-pulse" aria-hidden="true" />
        </h1>
      </div>
      <p className="mt-4 text-lg text-[var(--muted)] max-w-[600px] leading-relaxed">
        {heroSubtitle}
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            history.replaceState(null, "", "/");
          }}
          className="px-7 py-3.5 bg-[var(--accent)] text-white text-sm font-medium rounded-md hover:bg-[var(--accent-hover)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] shadow-sm hover:shadow-md"
        >
          Get in touch
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            history.replaceState(null, "", "/");
          }}
          className="px-7 py-3.5 text-[var(--accent)] text-sm font-medium rounded-md border border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          View projects
        </a>
        <div className="flex flex-row gap-4 items-center sm:contents">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 px-4 rounded-full border border-[var(--accent)]/40 flex items-center justify-center gap-2 text-[var(--accent)] text-sm font-medium hover:bg-[var(--accent)]/10 hover:border-[var(--accent)] transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Resume
          </a>
          <button
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              history.replaceState(null, "", "/");
            }}
            aria-label="Scroll to next section"
            className="w-11 h-11 rounded-full border border-[var(--accent)]/40 flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)]/10 hover:border-[var(--accent)] transition-all duration-300 animate-bounce"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="editorial-rule" />
    </section>
  );
}
