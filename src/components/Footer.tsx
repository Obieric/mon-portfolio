import { Code2 } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Code2 className="h-4 w-4 text-primary" />
        <span>© 2024 DevPortfolio. All rights reserved.</span>
      </div>
      <p className="font-mono text-xs text-muted-foreground">
        Built with React + Vite + Tailwind
      </p>
    </div>
  </footer>
);

export default Footer;
