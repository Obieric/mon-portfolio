import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-hero pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 font-mono text-sm tracking-wider text-accent animate-fade-in-up">
            &lt;hello world /&gt;
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
           Développeur Full-Stack  {" "}
            <span className="text-gradient">Web & Mobile</span>
          </h1>
          {/* <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Je transforme des idées en applications {" "}
            <span className="text-gradient">web et mobiles performantes</span>
          </h1> */}
          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
           Je crée des applications modernes, performantes et évolutives qui transforment les idées en solutions digitales concrètes..
          </p>
          {/* <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
           Développeur Full-Stack spécialisé dans la conception de solutions modernes, intuitives et optimisées pour offrir la meilleure expérience utilisateur.
          </p> */}

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" asChild>
              <a href="#projects">Voir mes projets</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Me contacter</a>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: Github, href: "https://github.com/softelisabeth-a11y", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/eric-kanhonou-8aa91012a", label: "LinkedIn" },
              // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary hover:text-primary"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
};

export default Hero;
