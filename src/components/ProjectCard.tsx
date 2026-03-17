import { Link } from "react-router-dom";
import { ExternalLink, Github, Smartphone, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="group overflow-hidden border-border bg-card transition-all hover:border-primary/40 card-glow">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute right-3 top-3">
          <Badge variant="secondary" className="gap-1 bg-background/80 backdrop-blur-sm">
            {project.type === "mobile" ? (
              <Smartphone className="h-3 w-3" />
            ) : (
              <Globe className="h-3 w-3" />
            )}
            {project.type === "mobile" ? "Mobile" : "Web"}
          </Badge>
        </div>
      </div>

      <CardContent className="p-5">
        <Link to={`/project/${project.id}`}>
          <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
            {project.title}
          </h3>
        </Link>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="font-mono text-[10px]">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge variant="outline" className="font-mono text-[10px]">
              +{project.techStack.length - 4}
            </Badge>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Live demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          <Link
            to={`/project/${project.id}`}
            className="ml-auto text-xs font-medium text-primary transition-colors hover:text-primary/80"
          >
            Voir les détails →
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
