"use client";

export default function ScrollButton({
  targetId,
  direction,
}: {
  targetId: string;
  direction: "up" | "down";
}) {
  return (
    <button
      onClick={() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", "/");
      }}
      aria-label={direction === "up" ? "Scroll to top" : "Scroll to next section"}
      className="absolute left-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full border border-[var(--accent)]/40 flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)]/10 hover:border-[var(--accent)] transition-all duration-300 animate-bounce"
      style={{ [direction === "up" ? "top" : "bottom"]: "2rem" }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {direction === "up" ? (
          <path d="M12 19V5M5 12l7-7 7 7" />
        ) : (
          <path d="M12 5v14M5 12l7 7 7-7" />
        )}
      </svg>
    </button>
  );
}
