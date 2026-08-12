"use client";

import Link from "next/link";
import { type Project } from "@/lib/constants";

interface ProjectListRowProps {
  project: Project;
  onHover: (project: Project | null) => void;
}

export function ProjectListRow({ project, onHover }: ProjectListRowProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      onMouseEnter={() => onHover(project)}
      onMouseLeave={() => onHover(null)}
      className="w-full py-6 border-b border-white/10 flex items-center justify-between group transition-colors hover:bg-surface/40 px-4 rounded-sm"
      data-cursor="project"
      data-cursor-label="VIEW"
    >
      <div className="flex items-center gap-6 sm:gap-12">
        <span className="text-mono text-xs text-muted group-hover:text-accent transition-colors">
          {project.number}
        </span>
        <span className="text-display-md font-bold text-text group-hover:text-accent group-hover:translate-x-2 transition-all duration-300">
          {project.name}
        </span>
      </div>

      <div className="flex items-center gap-8 text-mono text-xs">
        <span className="hidden sm:inline-block text-muted">
          {project.category[0]}
        </span>
        <span className="text-dim">{project.year}</span>
        <span className="text-accent group-hover:translate-x-2 transition-transform duration-300">
          →
        </span>
      </div>
    </Link>
  );
}
