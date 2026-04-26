"use client";

import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const clickCooldown = useRef(false);

  function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      clickCooldown.current = true;
      setActiveSection(id);
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", "/");
      setTimeout(() => { clickCooldown.current = false; }, 1000);
    }
  }

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        if (clickCooldown.current) return;
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const sorted = visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveSection(sorted[0].target.id);
        }
      },
      { rootMargin: "-10% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--card-border)]">
      <nav
        aria-label="Main navigation"
        className="max-w-[900px] mx-auto px-6 h-[72px] flex items-center justify-between"
      >
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("");
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
            history.replaceState(null, "", "/");
          }}
          className="font-[family-name:var(--font-fira)] text-xl font-bold text-[var(--accent)]"
        >
          Nancy Onyejiaka
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.href.slice(1)
                      ? "text-[var(--accent)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent)] rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        <button
          className="md:hidden p-2 text-[var(--foreground)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-nav" className="md:hidden border-t border-[var(--card-border)] bg-[var(--background)] font-[family-name:var(--font-fira)]">
          <ul className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { scrollToSection(e, link.href); setMenuOpen(false); }}
                  className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200 text-base font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-4">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
