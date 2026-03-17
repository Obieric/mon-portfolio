export type ProjectType = "mobile" | "web";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  type: ProjectType;
  techStack: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  challenges: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "profansMobile",
    title: "Promofans Mobile",
    description: "Promofans est une application digitale permettant aux entreprises et boutiques de promouvoir leurs produits à travers des campagnes promotionnelles.",
    longDescription: "PromoHub est une application digitale permettant aux entreprises et boutiques de promouvoir leurs produits à travers des campagnes promotionnelles.Les utilisateurs peuvent s’abonner aux promotions, participer à des campagnes et gagner des réductions ou des crédits utilisables pour effectuer des achats gratuitement dans les boutiques partenaires.L’application est disponible en version web et mobile afin de permettre aux utilisateurs d’accéder facilement aux promotions et opportunités.",
    type: "mobile",
    techStack: ["React Native", "Node.js", "Express"],
    imageUrl: `${import.meta.env.BASE_URL}promofan_mobile.png`,
    githubUrl: "https://github.com/softelisabeth-a11y/Promofans_mobile.git",
    appStoreUrl: "",
    playStoreUrl: "",
    challenges: "Centralisation des données et synchronisation en temps réel.",
    features: ["Gestion des utilisateurs", "Promotions", "Système de crédits", "Boutiques partenaires", "Multi-plateforme"],
  },
  {
    id: "pigruMobile",
    title: "PIGRU Mobile",
    description: "PIGRU signifie Plateforme Intégrée de Gestion des Relations avec les Usagers.C’est un portail numérique mis en place par l’ARCEP Bénin pour faciliter les interactions entre les citoyens.",
    longDescription: "PIGRU signifie Plateforme Intégrée de Gestion des Relations avec les Usagers.C’est un portail numérique mis en place par l’ARCEP Bénin pour faciliter les interactions entre les citoyens, les entreprises du secteur des télécommunications et l’autorité de régulation.Elle sert de point d’accès unique vers plusieurs services numériques de l’ARCEP.",
    type: "mobile",
    techStack: ["React Native",  "Node.js", "Express"],
    imageUrl: `${import.meta.env.BASE_URL}pigru.png`,
    githubUrl: "",
    liveUrl: "",
    challenges: "Elle fait partie de la stratégie de digitalisation des services publics de l’ARCEP pour améliorer la relation avec les usagers et simplifier les démarches administratives.",
    features: ["Déposer des plaintes", "Accéder à des outils comme l’atlas de couverture réseau, le simulateur tarifaire, l’observatoire des télécoms ...", "Accéder aux e-services de l’ARCEP et suivre leurs dossiers en ligne"],
  },
  {
    id: "pigruWeb",
    title: "PIGRU Web",
    description: "PIGRU signifie Plateforme Intégrée de Gestion des Relations avec les Usagers.C’est un portail numérique mis en place par l’ARCEP Bénin pour faciliter les interactions entre les citoyens.",
    longDescription: "PIGRU signifie Plateforme Intégrée de Gestion des Relations avec les Usagers.C’est un portail numérique mis en place par l’ARCEP Bénin pour faciliter les interactions entre les citoyens, les entreprises du secteur des télécommunications et l’autorité de régulation.Elle sert de point d’accès unique vers plusieurs services numériques de l’ARCEP.",
    type: "web",
    techStack: ["React", "Node.js", "SQL", "Express"],
    imageUrl: `${import.meta.env.BASE_URL}pigruWeb.png`,
    githubUrl: "",
    liveUrl: "https://pigru.arcep.bj/",
    challenges: "Elle fait partie de la stratégie de digitalisation des services publics de l’ARCEP pour améliorer la relation avec les usagers et simplifier les démarches administratives.",
    features: ["Déposer des plaintes", "Accéder à des outils comme l’atlas de couverture réseau, le simulateur tarifaire, l’observatoire des télécoms ...", "Accéder aux e-services de l’ARCEP et suivre leurs dossiers en ligne"],
  },
  {
    id: "okraeat",
    title: "OKRA-EAT",
    description: "Une application web permettant de découvrir des restaurants et les mets qu'ils proposent en fonction du type de repas : petit déjeuner, déjeuner et dîner.",
    longDescription: "Une application web permettant de découvrir des restaurants et les mets qu'ils proposent en fonction du type de repas : petit déjeuner, déjeuner et dîner.Le projet permet également de consulter les prix minimum des repas, l’adresse des restaurants et leurs heures d’ouverture.",
    type: "web",
    techStack: ["Vite js", "Node js", "Express", "SQL"],
    imageUrl: `${import.meta.env.BASE_URL}okraeat.png`,
    githubUrl: "https://github.com/softelisabeth-a11y/okraeat.git",
    liveUrl: "",
    challenges: "Faciliter la recherche de restaurants en offrant aux utilisateurs une interface simplee.",
    features: ["Consulter la liste des restaurants", "Voir les menus proposés selon le moment de la journée", "Connaître le prix minimum d’un repas", "Trouver l’adresse et les horaires d’ouverture"],
  },
  {
    id: "natureVerte",
    title: "Nature Verte",
    description: "Nature Verte – E-commerce de Produits Agricoles Biologiques.",
    longDescription: "Nature Verte est une plateforme e-commerce dédiée à la vente de produits agricoles biologiques.Elle permet aux utilisateurs de découvrir, commander et se faire livrer des produits naturels directement issus de l’agriculture biologique.Le projet vise à promouvoir une alimentation saine, soutenir les producteurs locaux et faciliter l’accès aux produits bio de qualité.",
    type: "web",
    techStack: ["React", "Vite js", "Node js", "SQL", "Express"],
    imageUrl: `${import.meta.env.BASE_URL}nature_verte.png`,
    githubUrl: "https://github.com/softelisabeth-a11y/Nature_verte.git",
    liveUrl: "",
    challenges: "Créer une boutique en ligne moderne permettant de promouvoir les produits agricoles biologiques.",
    features: ["Gestion des utilisateurs", "Catalogue de produits", "Panier et commandes", "Gestion des commandes", "Administration des produits et des commandes"],
  },
  {
    id: "profansWeb",
    title: "Promofans Web",
    description: "Promofans est une application digitale permettant aux entreprises et boutiques de promouvoir leurs produits à travers des campagnes promotionnelles.",
    longDescription: "PromoHub est une application digitale permettant aux entreprises et boutiques de promouvoir leurs produits à travers des campagnes promotionnelles.Les utilisateurs peuvent s’abonner aux promotions, participer à des campagnes et gagner des réductions ou des crédits utilisables pour effectuer des achats gratuitement dans les boutiques partenaires.L’application est disponible en version web et mobile afin de permettre aux utilisateurs d’accéder facilement aux promotions et opportunités.",
    type: "web",
    techStack: ["React", "Vite js", "Node js", "SQL", "Express"],
    imageUrl: `${import.meta.env.BASE_URL}promofan2.png`,
    githubUrl: "https://github.com/softelisabeth-a11y/Promofans_web.git",
    liveUrl: "",
    challenges: "Centralisation des données et synchronisation en temps réel.",
    features: ["Gestion des utilisateurs", "Promotions", "Système de crédits", "Boutiques partenaires", "Multi-plateforme"],
  },
];
