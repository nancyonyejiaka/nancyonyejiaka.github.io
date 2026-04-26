"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="border-t border-[var(--divider)]">
        <div className="max-w-[900px] mx-auto px-6 py-10 text-center text-xs text-[var(--muted)] tracking-wide">
          <span>Nancy Onyejiaka &copy; {new Date().getFullYear()}</span>
        </div>
      </footer>

      <button
        onClick={() => {
          document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
          history.replaceState(null, "", "/");
        }}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full border border-[var(--accent)]/40 flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)]/10 hover:border-[var(--accent)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] backdrop-blur-sm ${
          showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
