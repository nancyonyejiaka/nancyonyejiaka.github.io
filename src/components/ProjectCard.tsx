import { ProjectData } from "@/data/projects";

export default function ProjectCard({
  project,
  view,
}: {
  project: ProjectData;
  view: "list" | "grid";
}) {
  if (view === "grid") {
    return (
      <article
        id={project.slug}
        className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-4 md:p-6 flex flex-col hover:shadow-[0_0_20px_rgba(255,118,199,0.15),0_0_40px_rgba(255,118,199,0.08)] hover:border-[var(--accent)]/30 hover:-translate-y-1"
        style={{ transition: "box-shadow 700ms, border-color 700ms, transform 700ms" }}
      >
        <h3 className="font-[family-name:var(--font-fira)] text-base md:text-lg font-bold text-[var(--foreground)] leading-snug">
          {project.title}
        </h3>
        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
          {project.active && (
            <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--function)] bg-[var(--function)]/10 px-2.5 py-1 rounded-full whitespace-nowrap">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--function)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--function)]" />
              </span>
              Building
            </span>
          )}
          {project.badge && (
            <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--keyword)] bg-[var(--keyword)]/10 px-2.5 py-1 rounded-full whitespace-nowrap">
              {project.badge}
            </span>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent-light)] px-2.5 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-4 text-[var(--muted)] text-sm md:text-base leading-relaxed flex-1">
          {project.problem}
        </p>
        <p className="mt-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
          {project.impact}
        </p>
      </article>
    );
  }

  return (
    <article
      id={project.slug}
      className="border-l-2 border-[var(--accent)] pl-6 md:pl-8 py-1"
    >
      <div className="flex flex-wrap items-center gap-2 md:gap-3">
        <h3 className="font-[family-name:var(--font-fira)] text-lg md:text-2xl font-bold text-[var(--foreground)] leading-snug">
          {project.title}
        </h3>
        {project.active && (
          <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--function)] bg-[var(--function)]/10 px-2.5 py-1 rounded-full whitespace-nowrap">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--function)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--function)]" />
            </span>
            Currently Building
          </span>
        )}
        {project.badge && (
          <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--keyword)] bg-[var(--keyword)]/10 px-2.5 py-1 rounded-full whitespace-nowrap">
            {project.badge}
          </span>
        )}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent-light)] px-2.5 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 space-y-4 text-[var(--muted)] text-sm md:text-base leading-[1.8]">
        <div>
          <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[var(--foreground)] mb-1">
            Problem
          </p>
          <p>{project.problem}</p>
        </div>
        <div>
          <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[var(--foreground)] mb-1">
            Approach
          </p>
          <p>{project.approach}</p>
        </div>
        <div>
          <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[var(--foreground)] mb-1">
            Impact
          </p>
          <p>{project.impact}</p>
        </div>
      </div>
    </article>
  );
}
