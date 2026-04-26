import OrbitingMoons from "./OrbitingMoons";
import { contactHeading, contactDescription, contactLinks } from "@/data/contact";

const contactMoons = [
  // Tight inner ring — hot, fast
  { radius: 50, size: 3, speed: 0.045, color: "rgb(255, 118, 199)", opacity: 0.8, startAngle: 0 },
  { radius: 70, size: 4, speed: 0.038, color: "rgb(255, 118, 199)", opacity: 0.65, startAngle: 3.14 },
  // Inner belt
  { radius: 100, size: 6, speed: 0.028, color: "rgb(108, 212, 255)", opacity: 0.7, startAngle: 1 },
  { radius: 120, size: 8, speed: 0.022, color: "rgb(154, 232, 201)", opacity: 0.6, startAngle: 2.3 },
  // Mid system
  { radius: 155, size: 12, speed: 0.016, color: "rgb(181, 128, 242)", opacity: 0.55, startAngle: 4 },
  { radius: 185, size: 9, speed: 0.012, color: "rgb(108, 212, 255)", opacity: 0.5, startAngle: 5.5 },
  // Outer ring
  { radius: 230, size: 7, speed: 0.008, color: "rgb(154, 232, 201)", opacity: 0.4, startAngle: 0.5 },
  { radius: 270, size: 10, speed: 0.006, color: "rgb(181, 128, 242)", opacity: 0.35, startAngle: 2.8 },
  { radius: 310, size: 4, speed: 0.004, color: "rgb(255, 118, 199)", opacity: 0.3, startAngle: 4.7 },
  { radius: 350, size: 3, speed: 0.003, color: "rgb(108, 212, 255)", opacity: 0.25, startAngle: 1.3 },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[var(--section-alt)] opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--accent)] opacity-[0.06] blur-[100px]" />
        <div className="absolute -top-10 -left-10 w-[250px] h-[250px] rounded-full bg-[var(--string)] opacity-[0.04] blur-[60px]" />
        <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] rounded-full bg-[var(--function)] opacity-[0.04] blur-[60px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--card-border) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>
      <OrbitingMoons moons={contactMoons} />
      <div className="max-w-[900px] mx-auto px-6 py-16 md:py-20">
        <p className="section-label">Contact</p>
        <h2 className="font-[family-name:var(--font-fira)] text-3xl md:text-4xl font-bold text-[var(--foreground)] leading-tight">
          {contactHeading}
        </h2>
        <p className="mt-4 text-[var(--muted)] text-base max-w-[600px] leading-[1.8]">
          {contactDescription}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.icon === "linkedin" ? "_blank" : undefined}
              rel={link.icon === "linkedin" ? "noopener noreferrer" : undefined}
              className={
                link.variant === "primary"
                  ? "inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--accent)] text-white text-sm font-medium rounded-md hover:bg-[var(--accent-hover)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] shadow-sm hover:shadow-md"
                  : "inline-flex items-center gap-2 px-7 py-3.5 text-[var(--accent)] text-sm font-medium rounded-md border border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              }
            >
              {link.icon === "email" && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              )}
              {link.icon === "linkedin" && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              )}
              {link.label}
            </a>
          ))}
        </div>
        <div className="editorial-rule" />
      </div>
    </section>
  );
}
