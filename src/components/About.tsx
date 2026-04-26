import OrbitingMoons from "./OrbitingMoons";
import { aboutHeading, aboutParagraphs } from "@/data/about";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { research } from "@/data/research";

const aboutMoons = [
  // Inner planets — fast, small
  { radius: 60, size: 4, speed: 0.04, color: "rgb(255, 118, 199)", opacity: 0.7, startAngle: 0 },
  { radius: 85, size: 5, speed: 0.032, color: "rgb(248, 168, 205)", opacity: 0.6, startAngle: 1.2 },
  { radius: 110, size: 7, speed: 0.025, color: "rgb(108, 212, 255)", opacity: 0.65, startAngle: 2.5 },
  // Mid planets
  { radius: 145, size: 10, speed: 0.018, color: "rgb(154, 232, 201)", opacity: 0.6, startAngle: 0.8 },
  { radius: 180, size: 14, speed: 0.013, color: "rgb(181, 128, 242)", opacity: 0.55, startAngle: 3.8 },
  // Outer giants — slow, large
  { radius: 220, size: 11, speed: 0.009, color: "rgb(108, 212, 255)", opacity: 0.45, startAngle: 5.2 },
  { radius: 270, size: 8, speed: 0.006, color: "rgb(255, 118, 199)", opacity: 0.35, startAngle: 1.6 },
  { radius: 320, size: 5, speed: 0.004, color: "rgb(181, 128, 242)", opacity: 0.3, startAngle: 4.1 },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[var(--section-alt)] opacity-50" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[var(--keyword)] opacity-[0.04] blur-[80px]" />
        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 39px,
              var(--card-border) 39px,
              var(--card-border) 40px
            )`,
          }}
        />
      </div>
      <OrbitingMoons moons={aboutMoons} />
      <div className="max-w-[900px] mx-auto px-6 py-16 md:py-20">
        <p className="section-label">About</p>
        <h2 className="font-[family-name:var(--font-fira)] text-3xl md:text-4xl font-bold text-[var(--foreground)] leading-tight">
          {aboutHeading}
        </h2>
        <div className="mt-8 max-w-[600px] space-y-5 text-[var(--muted)] text-base md:text-lg leading-[1.8]">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-14">
          <p className="section-label">Experience</p>
          <div className="relative mt-6 ml-3 border-l-2 border-[var(--card-border)] pl-5 md:pl-8 space-y-8">
            {experience.map((job, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[calc(1.25rem+5px)] md:-left-[calc(2rem+5px)] top-1.5 w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-[var(--background)]" />
                <p className="text-sm md:text-base text-[var(--muted)]">
                  {job.start} &mdash; {job.end}
                </p>
                <h3 className="text-[var(--foreground)] font-semibold mt-0.5 text-base md:text-lg">
                  {job.title}
                </h3>
                <p className="text-[var(--muted)] text-sm md:text-base">
                  {job.company} &middot; {job.location}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14">
          <p className="section-label">Education</p>
          <div className="mt-6">
            <h3 className="text-[var(--foreground)] font-semibold text-base md:text-lg">
              {education.school}
            </h3>
            <p className="text-sm md:text-base text-[var(--muted)]">{education.location}</p>
            <div className="mt-4 space-y-4">
              {education.degrees.map((deg, i) => (
                <div key={i}>
                  <p className="text-[var(--foreground)] text-sm md:text-base font-medium">
                    {deg.degree}
                  </p>
                  <p className="text-sm md:text-base text-[var(--muted)]">
                    {deg.date} &middot; <span className="italic">{deg.honors}</span>
                  </p>
                  {deg.extras && (
                    <p className="text-sm md:text-base text-[var(--muted)]">{deg.extras}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14">
          <p className="section-label">Research</p>
          <div className="mt-6 space-y-6">
            {research.map((project, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-[var(--foreground)] font-semibold text-sm md:text-base">
                    {project.title}
                  </h3>
                  {project.pdf && (
                    <a
                      href={project.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.6rem] font-semibold uppercase tracking-wider text-[var(--string)] bg-[var(--string)]/10 px-2 py-0.5 rounded-full hover:bg-[var(--string)]/20 transition-colors"
                    >
                      View Paper
                    </a>
                  )}
                </div>
                <ul className="mt-2 space-y-1.5">
                  {project.description.map((desc, j) => (
                    <li key={j} className="text-sm md:text-base text-[var(--muted)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--card-border)]">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="editorial-rule" />
      </div>
    </section>
  );
}
