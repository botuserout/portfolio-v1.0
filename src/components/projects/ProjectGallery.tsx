import { type Project } from "@/lib/constants";

interface ProjectGalleryProps {
  project: Project;
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  return (
    <section className="w-full section-padding bg-[#080808] border-b border-white/10">
      <div className="container-main flex flex-col gap-12">
        <div className="flex items-center gap-4 text-label">
          <span>04</span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span>VISUAL SYSTEM & GALLERY</span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Large Image */}
          <div className="md:col-span-12 h-[400px] sm:h-[500px] bg-surface-2 rounded-lg border border-white/10 overflow-hidden relative group">
            <div className="w-full h-full bg-gradient-to-br from-surface via-surface-2 to-accent/10 flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-105">
              <span className="text-mono text-xs text-muted">
                [ GALLERY VIEW 01 — CORE INTERFACE ARCHITECTURE ]
              </span>
            </div>
          </div>

          {/* Secondary Left Image */}
          <div className="md:col-span-6 h-[320px] bg-surface rounded-lg border border-white/10 overflow-hidden relative group">
            <div className="w-full h-full bg-gradient-to-tr from-background via-surface to-accent/5 flex items-center justify-center p-6 transition-transform duration-700 group-hover:scale-105">
              <span className="text-mono text-xs text-muted">
                [ GALLERY VIEW 02 — DATA FLOW DIAGRAM ]
              </span>
            </div>
          </div>

          {/* Secondary Right Image */}
          <div className="md:col-span-6 h-[320px] bg-surface rounded-lg border border-white/10 overflow-hidden relative group">
            <div className="w-full h-full bg-gradient-to-tl from-background via-surface to-accent/5 flex items-center justify-center p-6 transition-transform duration-700 group-hover:scale-105">
              <span className="text-mono text-xs text-muted">
                [ GALLERY VIEW 03 — MOBILE & RESPONSIVE STATES ]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
