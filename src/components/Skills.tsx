import { Badge } from "@/components/ui/badge";

const mobileSkills = [
  "React Native", "Flutter", "Firebase",
];

const webSkills = [
  "React", "Laravel", "Django", "Node.js", "MySQL",
  "GraphQL", "Tailwind CSS",
];

const toolsSkills = [
  "Git", "Figma", "VS Code", "Android Studio","Insomnia", "Postman",
];

const SkillGroup = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="rounded-xl border border-border bg-card p-6">
    <h3 className="mb-4 font-mono text-sm font-medium tracking-wider text-primary">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge
          key={skill}
          variant="secondary"
          className="px-3 py-1.5 font-mono text-xs transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {skill}
        </Badge>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="border-t border-border py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Pile  <span className="text-gradient">technologique</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
          Des technologies que j’utilise pour donner vie à des idées.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <SkillGroup title="// Mobile" skills={mobileSkills} />
            <SkillGroup title="// Web" skills={webSkills} />
            <SkillGroup title="// Tools" skills={toolsSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
