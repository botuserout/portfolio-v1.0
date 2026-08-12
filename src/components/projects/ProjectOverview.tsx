import { type Project } from "@/lib/constants";
import { PearlButton } from "@/components/ui/pearl-button";

interface ProjectOverviewProps {
  project: Project;
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section className="w-full section-padding bg-[#080808] border-b border-white/10">
      <div className="container-main grid-main gap-y-12">
        {/* Left Column: Metadata & Tech Stack */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-8">
          <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
            <span className="text-mono text-xs text-muted uppercase">ROLE</span>
            <span className="text-body-lg text-text font-medium">
              {project.role}
            </span>
          </div>

          <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
            <span className="text-mono text-xs text-muted uppercase">YEAR</span>
            <span className="text-body-lg text-text font-medium">
              {project.year}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-mono text-xs text-muted uppercase">
              TECHNOLOGY STACK
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-mono text-xs text-text bg-surface border border-white/10 px-3 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.link && (
            <div className="pt-4">
              <PearlButton
                href={project.link}
                size="sm"
                label="VIEW REPOSITORY / LIVE"
                data-cursor="pointer"
              />
            </div>
          )}
        </div>

        {/* Right Column: Problem & Solution Editorial */}
        <div className="col-span-12 md:col-span-8 flex flex-col gap-12">
          {/* Overview Statement */}
          <div className="flex flex-col gap-4">
            <h2 className="text-label text-accent">01 // OVERVIEW</h2>
            <p className="text-body-lg text-text font-normal leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem */}
          <div className="flex flex-col gap-4">
            <h2 className="text-label text-muted">02 // THE CHALLENGE</h2>
            <p className="text-body text-muted leading-relaxed">
              Creating a scalable solution for {project.name} required balancing
              high-throughput data processing with an intuitive, low-latency UI.
              Existing tools lacked real-time feedback loops and responsive design standards.
            </p>
          </div>

          {/* Solution */}
          <div className="flex flex-col gap-4">
            <h2 className="text-label text-accent">03 // THE ARCHITECTURE</h2>
            <p className="text-body text-muted leading-relaxed">
              Engineered using modern stack components ({project.tech.slice(0, 3).join(", ")}),
              the system delivers instant state synchronization, modular API boundaries, and
              optimized asset delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
