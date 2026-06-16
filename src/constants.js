export const site = {
  brand: "krishna.dev",
};

export const CF_HANDLE = "DraGon9236";
export const LC_HANDLE = "chamarthysr";

export const navTabs = [
  "about.txt",
  "experience.sh",
  "projects",
  "skills.json",
];

export const sections = {
  about: {
    command: "cat about.txt",
    title: "About Me",
  },
  experience: {
    command: "./run_experience.sh",
    title: "Experience",
  },
  projects: {
    command: "ls -la /projects",
    title: "Featured Projects",
  },
  skills: {
    command: "skills.json",
    title: "Skills",
  },
  achievements: {
    command: "stdout",
    title: "Achievements",
  },
};

export const notableMetrics = {
  gate_cse: {
    year: 2026,
    all_india_rank: 118,
    score: 879,
  },
  hackathons: ["Ranked Top 2 at HACKMIT 2025 (500+ participants)"],
  competitive_programming: {
    leetcode: "Knight (Top 3%, 2000+ rating)",
    codeforces: "Expert (1600+ rating)",
  },
};

export const terminalTokens = {
  openCommand: "./open",
  fileMode: "drwxr-xr-x",
  commitPrefix: "commit",
  diffAdded: "+",
  courseworkLabel: "coursework",
  stdoutLabel: "stdout:",
};

export const hero = {
  prompt: "> Hello, World. I'm Krishna Chamarthy.",
  title: "Systems & Machine Learning Engineer",
  profession: "M.Tech CSE student at IIT Kanpur.",
  location: "Pune, Maharashtra, India",
  summary: {
    prefix: "I work at the intersection of",
    focusAreas: [
      "distributed systems",
      "machine learning",
      "information retrieval",
    ],
    suffix: "building systems that are fast, observable, and useful.",
  },
  portraitLabel: "portrait.png",
  portraitPlaceholder: "Add your image here",
};

export const links = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "Resume", href: "/KrishnaChamarthy_Resume.pdf" },
];

export const about = {
  school: "IIT Kanpur",
  undergraduateSchool: "MIT World Peace University",
  cgpa: "8.77",
  coursework: [
    "High Performance Computing",
    "Distributed and Cloud Computing",
    "Machine Learning",
  ],
};

export const experiences = [
  {
    hash: "85c0ffee",
    role: "Software Engineer Intern",
    org: "Northern Trust Corporation",
    commits: [
      "Architected a real-time Kafka streaming pipeline handling 50,000 events/minute.",
      "Reduced processing latency by 85% across high-throughput ingestion paths.",
      "Deployed a data observability platform that reduced anomaly detection time by 70%.",
    ],
  },
];

export const projects = [
  {
    name: "User-Space Runtime Function Interposition",
    tech: ["C", "Linux", "ptrace", "x86-64"],
    description:
      "Live-patching framework for runtime function interposition using ptrace and x86-64 architecture, benchmarked at 4.35ms patch latency.",
    linkLabel: "paper",
    href: "#",
  },
  {
    name: "Real-Time CTR Prediction Engine",
    tech: ["PyTorch", "Kafka", "Python"],
    description:
      "High-throughput prediction service combining PyTorch inference with Kafka streams, achieving sub-1ms prediction latency.",
    href: "#",
  },
  {
    name: "RepoScope",
    tech: ["Embeddings", "Ollama", "IR"],
    description:
      "Embedding-based repository retrieval system using local LLM models, reaching 92% search relevance across 10,000+ files.",
    href: "#",
  },
  {
    name: "Distributed File System",
    tech: ["C++", "TCP/IP", "gRPC"],
    description:
      "Distributed storage system with a custom TCP/IP protocol and gRPC control plane designed for 99.9% data availability.",
    href: "#",
  },
];

export const skills = {
  coreCompetencies: [
    "Distributed Systems",
    "Machine Learning",
    "Information Retrieval",
    "System Design",
    "TCP/IP",
  ],
  languages: ["C++", "Python", "Java", "C", "JavaScript", "SQL", "HTML/CSS"],
  machineLearning: [
    "Neural Networks",
    "Embedding Models",
    "LLMs",
    "NLP",
    "Statistical Modeling",
    "Classification",
  ],
  frameworks: [
    "PyTorch",
    "Scikit-learn",
    "Spring Boot",
    "React",
    "Node.js",
    "Flask",
    "gRPC",
  ],
  infrastructureAndTools: ["Docker", "Kafka", "AWS", "Azure", "Linux", "Git"],
  databases: ["PostgreSQL", "MongoDB", "Azure Cosmos DB", "Snowflake"],
};

export const footer = {
  name: "Krishna Chamarthy",
  links: [
    { label: "email", href: "mailto:hello@example.com", icon: "mail" },
    { label: "github", href: "https://github.com/", icon: "github" },
    { label: "linkedin", href: "https://www.linkedin.com/", icon: "linkedin" },
  ],
};
