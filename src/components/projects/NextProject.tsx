import Link from "next/link";
import { type Project } from "@/lib/constants";

interface NextProjectProps {
  nextProject: Project;
}

export function NextProject({ nextProject }: NextProjectProps) {
  return (
    <section className="w-full py-24 bg-[#080808] relative overflow-hidden group">
      <Link
        href={`/work/${nextProject.slug}`}
        className="container-main flex flex-col gap-6"
        data-cursor="project"
        data-cursor-label="NEXT"
      >
        <div className="flex items-center justify-between text-mono text-xs text-muted">
          <span>NEXT PROJECT</span>
          <span>{nextProject.number} / 08</span>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-display-xl font-bold uppercase text-text group-hover:text-accent group-hover:translate-x-4 transition-all duration-500">
            {nextProject.name}
          </h2>
          <span className="text-display-xl font-light text-accent group-hover:translate-x-4 transition-transform duration-500">
            →
          </span>
        </div>

        <span className="text-mono text-xs text-muted">
          {nextProject.subtitle}
        </span>
      </Link>
    </section>
  );
}
