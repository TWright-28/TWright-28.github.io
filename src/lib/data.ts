export interface Degree {
  degree: string;
  school: string;
  period: string;
  gpa: string;
  honors: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  links: ProjectLink[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  description: string;
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  status?: string;
  links: ProjectLink[];
  description: string;
}

export const siteConfig = {
  name: "Tanner Wright",
  title: "MSc Computer Science",
  subtitle: "UBC · Researcher & Developer",
  bio: "MSc student at UBC researching software ecosystems and bugs. I build research tools, teach software engineering, and enjoy working on hard problems.",
  github: "https://github.com/TWright-28",
  linkedin: "https://linkedin.com/in/tanner-wright-59687922a",
  email: "tannerwright1228@gmail.com",
};

export const about = {
  bio: [
    "I'm a CS grad student at UBC, I moved to BC from the USA when I was 7 and have really enjoyed how beautiful BC is. My research sits at the intersection of software engineering and utilizing LLMs. Currently I'm studying how bugs evolve across open-source ecosystems and have been building agentic tools to automate collection, classification and analysis.",
    "Outside of research I also TA software engineering at UBC, which I enjoy doing. The change however from when I was an undergrad to students now is a little alarming with so many not understanding the basics of coding and a massive over-reliance to AI. I guess I am fortuante to have been in University before AI.",
    "When I'm not at a computer I'm usually watching or playing hockey, hiking with my dogs or now I have just gotten into Roller Hockey and have been doing that around the city with some friends. ",
  ],
  currently: [
    "I have just completed and formally submitted my Thesis to COGS of which I must defend on June 30th",
    "Building a network analysis page of NHL players and how connected they are to all other NHLers",
    "Preparing for Techinical interviews by refreshing on DSA and some other core principles i have not looked at in a bit",
    "I also have a few extra SE papers I am working on and will be submitting those soon before I leave UBC",
  ],
  future: [
    "Thinking to the future, I would like to learn more about the Go language and look more into the archictual side of software which I guess is just software architecture",

  ]
};

export const education: Degree[] = [
  {
    degree: "MSc, Computer Science",
    school: "University of British Columbia",
    period: "Sep 2024 – Aug 2026",
    gpa: "4.0",
    honors: [],
  },
  {
    degree: "BSc, Computer Science",
    school: "University of British Columbia",
    period: "Sept 2019 – May 2023",
    gpa: "4.33",
    honors: [
      "Dean's List",
      "Deputy Vice-Chancellor Scholarship for Continuing Students",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "R", "Java", "PHP", "HTML/CSS", "Bash"],
  },
  {
    category: "ML / AI",
    items: ["LangChain", "LangGraph", "LangSmith", "PyTorch", "TensorFlow", "Hugging Face", "scikit-learn", "Ollama", "RAG", "LLMs"],
  },
  {
    category: "Web & Frameworks",
    items: ["React", "Next.js", "Vue.js", "Node.js", "FastAPI", "Laravel", "Express", "Tailwind", "Vite"],
  },
  {
    category: "Data & Infra",
    items: ["Pandas", "NumPy", "Matplotlib", "Docker", "AWS", "SLURM", "HPC", "Git"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "ChromaDB", "Elasticsearch", "Snowflake"],
  },
];

export const experiences: Experience[] = [
  {
    role: "Graduate Researcher / Research Assistant",
    company: "University of British Columbia",
    period: "Sept 2024 – Present",
    bullets: [
      "Built and maintained an autonomous LLM research platform in Python / LangGraph with a layered agent/tool/helper architecture, SQLite persistence, and modular tool interfaces — reducing manual triage time by 95%.",
      "Collected and classified 69,000+ GitHub issues across 8 npm projects using Qwen3 with a few-shot pipeline (80% accuracy, κ=0.71), analyzing bug-distribution evolution with chi-square tests, survival analysis, and mixed-effects logistic regression (ESEM 2026, under review).",
      "Published the InEx-Bug dataset (377 annotated GitHub issues) at MSR 2026 — the first benchmark for intrinsic vs. extrinsic bug classification.",
      "Authored a 6-chapter MSc thesis on intrinsic vs. extrinsic bug provenance in the npm ecosystem.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "University of British Columbia",
    period: "Sept 2024 – Present",
    bullets: [
      "TA for Software Engineering and Capstone courses; mentored 600+ students.",
      "Led labs and presentations on CI/CD, Python, PyTest, FastAPI, Docker, and software engineering practices.",
    ],
  },
  {
    role: "Application Developer",
    company: "Tamarack Tech",
    period: "May – Sep 2023",
    bullets: [
      "Developed a Shopify Calendar App for a local startup using React and Express with REST APIs.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Glohaven Community Hub",
    period: "May – Sep 2022",
    bullets: [
      "Built a wishlist and digital wallet in Laravel with Vue.js, integrating Stripe for payments.",
      "Migrated 100+ tests from PHPUnit to PestPHP, stabilizing the CI pipeline and improving reliability.",
    ],
  },
];

export const publications: Publication[] = [
  {
    title: "InEx-Bug: Dataset for Intrinsic vs. Extrinsic Bug Classification in the NPM Ecosystem",
    venue: "MSR 2026",
    year: "2025",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/InExBug" },
      { label: "GitHub", href: "https://github.com/InExBug" },
    ],
    description:
      "The first benchmark dataset for intrinsic vs. extrinsic bug classification - 377 annotated GitHub issues with a reproducible metadata extraction pipeline.",
  },
  {
    title: "Evolution of Intrinsic and Extrinsic Bugs Across the NPM Project Lifecycle",
    venue: "ESEM 2026",
    year: "2026",
    status: "under review",
    links: [],
    description:
      "Large-scale empirical study of 69,000+ classified issues across 8 npm projects using non-parametric tests, survival analysis, and mixed-effects logistic regression.",
  },
];

export const projects: Project[] = [
  {
    title: "Extrinsic Agent: Autonomous Bug Research Platform",
    description: "A conversational LLM agent for automated bug research and classification.",
    bullets: [
      "Designed a conversational LLM agent in LangGraph with a three-layer (agent/tool/helper) architecture — correctness lives in the tool layer, making the orchestrating model a swappable parameter.",
      "Implemented time-aware transitive dependency resolution and an SQLite-backed pipeline for collecting, classifying, and dependency-linking npm bug reports.",
      "Validated tool selection and ordering across a 10-scenario suite under local (gpt-oss:20b) and hosted (Gemini 2.5 Flash) models.",
    ],
    tags: ["Python", "LangGraph", "SQLite", "LLMs", "Qwen3", "LangSmith", "LangChain"],
    links: [],
  },
  {
    title: "GEMS: Emergency Management System",
    description: "Full-stack capstone project for managing evacuees during emergency protocols — built with a 4-person team.",
    bullets: [
      "Led a 4-person agile team building a production full-stack system in Laravel, Vue.js, and MySQL with REST APIs.",
      "Integrated OpenLayers mapping for real-time evacuee tracking.",
      "100+ PestPHP tests; full CI/CD pipeline deployed via Docker.",
    ],
    tags: ["Vue.js", "Laravel", "MySQL", "OpenLayers", "Docker", "PestPHP"],
    links: [],
  },
  {
    title: "NHL Game Data Analysis Twitter Bot",
    description: "Automated daily statistical report cards posted to Twitter from the NHL's undocumented REST API.",
    bullets: [
      "Gathered and cleaned data with Python and Pandas, converting it into statistical cards posted via the Twitter API.",
      "Generated plots with matplotlib and seaborn; automated to run once daily.",
    ],
    tags: ["Python", "Pandas", "Twitter API", "matplotlib", "seaborn"],
    links: [
      { label: "Twitter", href: "https://twitter.com/NHLReportCards" },
      { label: "GitHub", href: "https://github.com/TWright-28/NHL_TwitterBot" },
    ],
  },
  {
    title: "Full Stack Reddit Clone",
    description: "A fully functional forum with accounts, posting, likes, follows, and admin analytics.",
    bullets: [
      "Built with PHP: user accounts, post creation, likes, profile pictures, and follow system.",
      "Automated welcome emails via phpMailer; admin dashboard analytics with Charts.js.",
    ],
    tags: ["PHP", "SQL", "AJAX", "Bootstrap", "jQuery", "phpMailer"],
    links: [
      { label: "GitHub", href: "https://github.com/TWright-28/Full-Stack-Reddit-Clone" },
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: "Dean's List",
    description: "Recognized for academic excellence at the University of British Columbia.",
  },
  {
    title: "Deputy Vice-Chancellor Scholarship for Continuing Students",
    description: "Merit-based scholarship awarded to continuing UBC students with outstanding academic performance.",
  },
];
