import { Smartphone, Globe, Zap, Users } from "lucide-react";

const stats = [
  { icon: Smartphone, value: "3+", label: "Applications mobiles" },
  { icon: Globe, value: "8+", label: "Projets Web" },
  { icon: Zap, value: "3+", label: "Années d’expérience" },
  { icon: Users, value: "30+", label: "Clients satisfaits" },
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            A propos <span className="text-gradient"> de moi</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
            Passionné par la technologie et l’innovation, je conçois des solutions numériques modernes, performantes et adaptées aux besoins des utilisateurs.
            Mon objectif est d’aider les entreprises et les entrepreneurs à donner vie à leurs projets numériques en créant des produits fiables, intuitifs et efficaces.

Toujours curieux et en constante évolution, je continue d’explorer de nouvelles technologies afin d’améliorer mes compétences et de proposer des solutions toujours plus innovantes.
Grâce à mes compétences en développement front-end et back-end, je suis capable de transformer une idée en une application complète, fonctionnelle et évolutive. J’accorde une grande importance à la qualité du code, à la performance des applications et à l’expérience utilisateur.
          </p>


          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50 card-glow"
              >
                <Icon className="mx-auto mb-3 h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                <div className="text-2xl font-bold">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
