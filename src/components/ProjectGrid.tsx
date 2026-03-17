import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const filters = ["Tous", "Mobile", "Web"] as const;

const ProjectGrid = () => {
  const [active, setActive] = useState<(typeof filters)[number]>("Tous");

  const filtered =
    active === "Tous"
      ? projects
      : projects.filter((p) => p.type === active.toLowerCase());

  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
             <span className="text-gradient">Mes projets</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Une sélection de projets que j’ai développés sur des plateformes mobiles et web.
          </p>

          {/* Filter tabs */}
          <div className="mb-10 flex justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  active === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
