"use client";

import { useState, useRef, useEffect } from "react";
import { PROJECTS, SECTION_IDS, type Project } from "@/lib/constants";
import { ProjectCard } from "./ProjectCard";
import { ProjectListRow } from "./ProjectListRow";
import { HoverPreview } from "./HoverPreview";

export function SelectedWork() {
  const [viewMode, setViewMode] = useState<"exhibition" | "list">("exhibition");
  const [activeHoverProject, setActiveHoverProject] = useState<Project | null>(
    null
  );

  return (
    <section
      id={SECTION_IDS.work}
      className="w-full section-padding bg-[#080808] relative z-10"
    >
      <div className="container-main flex flex-col gap-12">
        {/* Top Header Row with View Toggle Switch */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-4 text-label">
            <span>01</span>
            <span className="w-8 h-[1px] bg-white/20" />
            <span>SELECTED WORK</span>
            <span className="text-muted font-normal">[{PROJECTS.length}]</span>
          </div>

          {/* View Mode Toggle Buttons */}
          <div className="flex items-center gap-2 border border-white/10 p-1 rounded-full bg-surface text-mono text-xs">
            <button
              onClick={() => setViewMode("exhibition")}
              className={`px-3 py-1 rounded-full transition-colors ${
                viewMode === "exhibition"
                  ? "bg-accent text-background font-medium"
                  : "text-muted hover:text-text"
              }`}
              data-cursor="pointer"
            >
              EXHIBITION
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-1 rounded-full transition-colors ${
                viewMode === "list"
                  ? "bg-accent text-background font-medium"
                  : "text-muted hover:text-text"
              }`}
              data-cursor="pointer"
            >
              INDEX LIST
            </button>
          </div>
        </div>

        {/* Floating Preview Component (List view) */}
        <HoverPreview activeProject={activeHoverProject} />

        {/* View Mode Switch Rendering */}
        {viewMode === "exhibition" ? (
          <div className="flex flex-col gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col border-t border-white/10 pt-4">
            {PROJECTS.map((project) => (
              <ProjectListRow
                key={project.id}
                project={project}
                onHover={setActiveHoverProject}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
