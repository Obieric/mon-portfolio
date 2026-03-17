import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Smartphone, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="dark flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">Projet non trouvé</h1>
          <Button asChild>
            <Link to="/">← Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-4 pb-24 pt-24">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
          </Link>

          {/* Header */}
          <div className="mb-8 flex items-start justify-between">
            <div>
              <Badge variant="secondary" className="mb-3 gap-1">
                {project.type === "mobile" ? (
                  <Smartphone className="h-3 w-3" />
                ) : (
                  <Globe className="h-3 w-3" />
                )}
                {project.type === "mobile" ? "Mobile App" : "Web App"}
              </Badge>
              <h1 className="text-4xl font-bold">{project.title}</h1>
            </div>
          </div>

          {/* Hero image */}
          <div className="mb-10 aspect-video overflow-hidden rounded-xl border border-border bg-secondary">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="mb-10">
            <h2 className="mb-4 text-xl font-semibold">Résumé</h2>
            <p className="leading-relaxed text-muted-foreground">
              {project.longDescription}
            </p>
          </div>

          {/* Features */}
          <div className="mb-10">
            <h2 className="mb-4 text-xl font-semibold">Caractéristiques clés</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="mb-10">
            <h2 className="mb-4 text-xl font-semibold">Pile technologique</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-10">
            <h2 className="mb-4 text-xl font-semibold">Défis</h2>
            <p className="leading-relaxed text-muted-foreground">
              {project.challenges}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />Code Source 
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </a>
              </Button>
            )}
            {project.appStoreUrl && (
              <Button variant="outline" asChild>
                <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer">
                  App Store
                </a>
              </Button>
            )}
            {project.playStoreUrl && (
              <Button variant="outline" asChild>
                <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                  Play Store
                </a>
              </Button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
