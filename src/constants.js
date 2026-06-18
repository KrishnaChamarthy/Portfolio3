export const site = {
  brand: "krishna.dev",
};

export const CF_HANDLE = "DraGon9236";
export const LC_HANDLE = "chamarthysr";

export const navTabs = [
  "about.txt",
  "skills.json",
  "experience.sh",
  "./projects",
];

export const sections = {
  about: {
    command: "cat about.txt",
    title: "About Me",
  },
  experience: {
    command: "./run_experience.sh",
    title: "Experience & Education",
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
  { label: "GitHub", href: "https://github.com/KrishnaChamarthy" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/krishna-chamarthy-291409187/",
  },
  { label: "Email", href: "mailto:chamarthysr@gmail.com" },
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
    timeframe: "Jul 2026 – Jun 2028",
    degree: "M.Tech in Computer Science and Engineering",
    org: "IIT Kanpur",
    kind: "education",
    summary:
      "Incoming graduate student focused on systems, machine learning, and scalable software design.",
    highlights: [
      "Building a stronger foundation in distributed systems and machine learning.",
      "Continuing to explore the intersection of high-performance software and intelligent data systems.",
    ],
  },
  {
    timeframe: "Jun 2025 – Nov 2025",
    role: "Software Engineer Intern",
    org: "Northern Trust Corporation",
    kind: "experience",
    summary:
      "Architected a real-time Kafka streaming pipeline and hardened the observability layer for high-throughput ingestion paths.",
    highlights: [
      "Architected a real-time Kafka streaming pipeline handling 50,000 events/minute.",
      "Reduced processing latency by 85% across high-throughput ingestion paths.",
      "Deployed a data observability platform that reduced anomaly detection time by 70%.",
    ],
  },
  {
    timeframe: "Jul 2022 – Jun 2026",
    degree: "B.Tech in Computer Engineering",
    org: "MIT World Peace University",
    kind: "education",
    summary:
      "Established the systems and software engineering base that now informs my work.",
    highlights: [
      "Developed a strong core in programming, systems, and applied computer science.",
      "Used coursework and projects to move deeper into low-level engineering and production software.",
    ],
  },
];

export const educationTimeline = [];

export const projects = [
  {
    name: "User-Space Runtime Function Interposition",
    slug: "runtime-function-interposition",
    role: "Lead Developer and Researcher",
    tech: ["C", "Linux", "ptrace", "x86-64"],
    description:
      "Live-patching framework for runtime function interposition using ptrace and x86-64 architecture, benchmarked at 4.35ms patch latency.",
    linkLabel: "paper",
    href: "#",
    type: "capstone",
    timeline: "Jan 2026 – May 2026",
    summary:
      "A live-patching framework that enables runtime function interposition without recompilation or process restart, achieving sub-5ms patch latency through ptrace-based instruction boundary detection and x86-64 code injection.",
    architecture: {
      overview:
        "Built a kernel-assisted userspace live-patching system using ptrace syscall interception and x86-64 inline code patching.",
      tools: [
        "ptrace: Process tracing for syscall interception and breakpoint management",
        "Capstone: Disassembly framework for safe instruction boundary detection",
        "x86-64 Assembly: Inline patching with minimal context switching overhead",
        "DWARF Debug Info: Symbol resolution and stack unwinding for safety checks",
      ],
      image: "UserPositionDiagram.png",
    },
    keyFeatures: [
      "Live, user-space function interposition without process restart",
      "Safe instruction-boundary detection using Capstone",
      "Sub-5ms patch latency with atomic patch application",
      "Rollback support with microsecond-level rollback latency",
    ],
    benchmarks: [
      {
        metric: "Patch Latency",
        value: "4.35ms",
        description: "Time from patch request to first patched code execution",
      },
      {
        metric: "Rollback Latency",
        value: "626.67µs",
        description: "Time to safely revert a patch",
      },
      {
        metric: "Per-Call Overhead",
        value: "6.10ns",
        description: "Negligible overhead for unpatched functions",
      },
      {
        metric: "Max Patched Functions",
        value: "2048",
        description: "Tested concurrent patches without degradation",
      },
    ],
    challenges: [
      "Instruction boundary detection: Race conditions during multi-threaded function patching required atomic compare-and-swap with instruction boundary validation via Capstone to prevent mid-instruction patching.",
      "Context preservation: Maintaining register state and stack alignment across patched boundaries demanded careful assembly choreography and DWARF-based frame pointer reconstruction.",
    ],
    sourceCode: "#",
    paper:
      "https://drive.google.com/file/d/1h6MDOJLdjNh6ndzjnkO8mUwQMX9D35qu/view",
  },
  {
    name: "Real-Time CTR Prediction Engine",
    slug: "ctr-prediction-engine",
    role: "Solo Developer",
    tech: ["PyTorch", "Kafka", "Python"],
    description:
      "High-throughput prediction service combining PyTorch inference with Kafka streams, achieving sub-1ms prediction latency.",
    type: "experience",
    timeline: "March 2026 – June 2026",
    summary:
      "A production-grade CTR prediction microservice handling 50k+ events/minute with sub-millisecond latency, combining PyTorch model inference with Apache Kafka streaming for real-time decisioning.",
    architecture: {
      overview:
        "Deployed a horizontally scalable prediction service with batch inference optimization and asynchronous Kafka consumers.",
      tools: [
        "PyTorch: GPU-accelerated batch inference with TorchScript optimization for latency reduction",
        "Kafka: Event streaming platform for decoupling prediction requests from responses",
        "ONNX Runtime: Cross-platform model serving for 25% latency improvement over standard PyTorch",
        "Prometheus: Real-time metrics collection for latency percentiles and throughput monitoring",
      ],
    },
    keyFeatures: [
      "Sub-millisecond serving with optimized batch inference",
      "Exactly-once Kafka consumers and idempotent processing",
      "ONNX export + GPU memory pre-allocation for latency stability",
      "Autoscaling prediction workers with backlog-aware batching",
    ],
    benchmarks: [
      {
        metric: "Prediction Latency (p50)",
        value: "0.32ms",
        description: "Median request-to-response time",
      },
      {
        metric: "Prediction Latency (p99)",
        value: "0.89ms",
        description: "99th percentile latency",
      },
      {
        metric: "Throughput",
        value: "50,000 events/min",
        description: "Sustained prediction rate per instance",
      },
      {
        metric: "Model Size",
        value: "12MB",
        description: "Compressed ONNX model for efficient deployment",
      },
    ],
    challenges: [
      "Latency optimization: Reduced inference time by 40% through batch processing, ONNX conversion, and GPU memory pre-allocation to stay under the 1ms SLA.",
      "Zero data loss: Implemented idempotent Kafka consumers with exactly-once delivery semantics and database deduplication to prevent duplicate CTR predictions impacting ad revenue.",
    ],
    sourceCode:
      "https://github.com/KrishnaChamarthy/DeepFM-Realtime-Conversion-Engine",
  },
  {
    name: "RepoScope",
    slug: "reposcope",
    role: "Solo Developer",
    tech: ["Embeddings", "Ollama", "IR"],
    description:
      "Embedding-based repository retrieval system using local LLM models, reaching 92% search relevance across 10,000+ files.",
    type: "personal",
    timeline: "June 2025 – Oct 2025",
    summary:
      "An AI-powered code search tool leveraging local LLM embeddings for semantic repository retrieval, enabling developers to find relevant code across 10,000+ files with 92% relevance without external API calls.",
    architecture: {
      overview:
        "Hybrid retrieval system combining BM25 lexical search with dense embeddings from locally-run LLMs for semantic understanding.",
      tools: [
        "Ollama: Local LLM inference engine for generating embeddings without cloud dependencies",
        "FAISS: Facebook AI Similarity Search for efficient vector indexing and retrieval at scale",
        "BM25: Hybrid ranking combining sparse lexical signals with dense semantic embeddings",
        "Rust: Low-latency indexing backend for file system watching and incremental updates",
      ],
    },
    keyFeatures: [
      "Local LLM embeddings for privacy-preserving code search",
      "Hybrid ranking (BM25 + dense embeddings) for high recall",
      "FAISS-based vector index supporting incremental updates",
      "92% NDCG@5 relevance on large repositories",
    ],
    benchmarks: [
      {
        metric: "Search Relevance (NDCG@5)",
        value: "92%",
        description: "Semantic relevance of top-5 results",
      },
      {
        metric: "Query Latency",
        value: "0.14s",
        description: "End-to-end retrieval time for 10k files",
      },
      {
        metric: "Index Size",
        value: "2.3GB",
        description: "Total embeddings + metadata for typical large repo",
      },
      {
        metric: "Embedding Throughput",
        value: "850 files/min",
        description: "Incremental re-indexing rate",
      },
    ],
    challenges: [
      "Embedding quality vs speed: Chose Ollama's locally-run models over cloud APIs to avoid latency and cost; fine-tuned embedding dimensions to balance recall (92%) against query latency.",
      "Incremental indexing: Built a file watching system with delta indexing to handle 10k+ file repositories without full re-embedding on each change.",
    ],
    sourceCode: "https://github.com/KrishnaChamarthy/RepoScope",
  },
  {
    name: "Distributed File System",
    slug: "distributed-file-system",
    role: "Solo Developer",
    tech: ["C++", "TCP/IP", "gRPC"],
    description:
      "Distributed storage system with a custom TCP/IP protocol and gRPC control plane designed for 99.9% data availability.",
    type: "capstone",
    timeline: "Aug 2023 – Dec 2023",
    summary:
      "A fault-tolerant distributed file system with 3-way replication, consistent hashing for load balancing, and gRPC-based metadata management, achieving 99.9% uptime SLA.",
    architecture: {
      overview:
        "Custom data plane using TCP/IP with gRPC control plane, leveraging consistent hashing for replica placement and Raft consensus for metadata consistency.",
      tools: [
        "C++17: Low-latency data plane with zero-copy IO and custom memory pooling",
        "gRPC: Efficient RPC framework for metadata operations and inter-node communication",
        "Consistent Hashing: Minimizing data movement on node joins/leaves during rebalancing",
        "Raft Consensus: Strong consistency for metadata with automatic leader failover",
      ],
    },
    keyFeatures: [
      "3-way replication with automatic failover",
      "Raft-based metadata service for strong consistency",
      "Zero-copy IO and custom memory pools for high throughput",
      "Consistent hashing for minimal rebalancing impact",
    ],
    benchmarks: [
      {
        metric: "Data Availability",
        value: "99.9%",
        description: "Uptime with 3-way replication and auto-failover",
      },
      {
        metric: "Write Throughput",
        value: "10GB/s",
        description: "Sustained write rate per node",
      },
      {
        metric: "Read Throughput",
        value: "15GB/s",
        description: "Sustained read rate per node",
      },
      {
        metric: "Replication Latency",
        value: "8ms",
        description: "P99 time for secondary replica acknowledgment",
      },
    ],
    challenges: [
      "Replication consistency under failures: Implemented Raft-based quorum reads/writes to prevent split-brain scenarios during network partitions while maintaining low write latency.",
      "Zero-copy networking: Hand-tuned kernel TCP buffer sizes and implemented custom ring buffers to achieve 15GB/s read throughput without CPU bottlenecks.",
    ],
    sourceCode:
      "https://github.com/KrishnaChamarthy/Distributed-File-System-Storage",
  },
  {
    name: "Exoplanet Detection & Classification",
    slug: "exoplanet-detection",
    role: "Researcher & Developer",
    tech: ["Python", "TensorFlow", "Scikit-Learn", "CNN"],
    description:
      "Advanced machine learning system for detecting and characterizing exoplanets using astronomical data from space telescopes.",
    type: "research",
    timeline: "2024 – 2025",
    summary:
      "An advanced computational system utilizing Kepler and TESS telescope data to identify potential exoplanets and analyze their characteristics, achieving a 99.5% accuracy rate using highly optimized CNN architectures.",
    architecture: {
      overview:
        "Data processing pipeline for noisy astronomical data, followed by an ensemble of machine learning models to accurately classify exoplanet transits from stellar light curves.",
      tools: [
        "TensorFlow & Keras: Deep learning frameworks for designing and training Convolutional Neural Networks (CNN)",
        "Scikit-Learn & SciPy: Implementation of Random Forests, SVMs, and advanced data preprocessing",
        "Pandas & NumPy: Handling, cleaning, and extracting features from massive Kepler and TESS datasets",
        "Matplotlib: Visualization of light curves, flux dips, and model performance metrics",
      ],
    },
    keyFeatures: [
      "Detection of planetary transits via light curve flux analysis",
      "Comparative evaluation of CNN, Random Forest, SVM, LightGBM, and Logistic Regression",
      "Handling of highly noisy and imbalanced astronomical datasets",
      "Advanced characterization algorithms to predict properties like orbital period and size",
    ],
    benchmarks: [
      {
        metric: "CNN Accuracy",
        value: "99.5%",
        description: "Highest raw accuracy with an F1 score of 0.727",
      },
      {
        metric: "Random Forest Perf.",
        value: "97.8%",
        description: "Best overall precision-recall balance (F1: 0.790)",
      },
      {
        metric: "False Positive Rate",
        value: "7.1%",
        description: "Reduced from 8.3% through model hyperparameter tuning",
      },
      {
        metric: "Dataset Size",
        value: "150,000+",
        description: "Stellar observations processed from Kepler/TESS data",
      },
    ],
    challenges: [
      "Imbalanced Datasets: Exoplanet transits are extremely rare compared to empty space; required advanced data augmentation and SMOTE techniques to achieve a 0.790 F1 score without heavily skewing precision-recall.",
      "Noisy Astronomical Data: Light curve data from Kepler contains immense stellar noise requiring sophisticated preprocessing and feature extraction to accurately identify periodic flux dips.",
    ],
    sourceCode:
      "https://github.com/KrishnaChamarthy/Exoplanet-Detection-and-Classification",
    paper:
      "https://drive.google.com/file/d/1F9_1iBfC0GAnnqRsd1hD4podC1_qZ3Od/view",
  },
  {
    name: "CampusCore",
    slug: "campuscore",
    role: "Full Stack Developer",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "A comprehensive College Management System web application designed to streamline administration and academic processes.",
    type: "personal",
    timeline: "2023 – 2024",
    summary:
      "A centralized platform built to eliminate administrative overhead, featuring 10+ integrated modules for student enrollment, course scheduling, assignment tracking, and performance analytics.",
    architecture: {
      overview:
        "Full-stack MERN application utilizing React for a component-based frontend, Node.js/Express for a RESTful backend, and MongoDB with Mongoose for NoSQL data modeling.",
      tools: [
        "React: Component-based architecture with React Hooks for state management",
        "Node.js & Express: RESTful API design for robust backend services",
        "MongoDB: NoSQL database with Mongoose ODM for efficient data modeling",
        "JWT & bcrypt: Multi-level role-based authentication and secure access control",
      ],
    },
    keyFeatures: [
      "10+ integrated modules for complete college management",
      "Role-based authentication interfaces for Students, Faculty, and Admins",
      "Automated timetable generation and course scheduling",
      "Real-time attendance tracking and centralized assignment management",
    ],
    benchmarks: [
      {
        metric: "API Response Time",
        value: "< 200ms",
        description: "Optimized backend architecture and database queries",
      },
      {
        metric: "System Modules",
        value: "10+",
        description:
          "Comprehensive feature coverage across administrative needs",
      },
      {
        metric: "Report Generation",
        value: "4x Faster",
        description: "Automated academic reporting during review cycles",
      },
      {
        metric: "User Roles",
        value: "3 Levels",
        description:
          "Distinct, secure interfaces with role-based access control",
      },
    ],
    challenges: [
      "Authentication & Security: Implementing secure multi-level role-based access control requiring distinct interfaces and data isolation for students, faculty, and admins using JSON Web Tokens.",
      "Performance Optimization: Maintaining sub-200ms API response times while handling complex relational queries across 10+ integrated modules in a NoSQL database environment.",
    ],
    sourceCode: "https://github.com/KrishnaChamarthy/FSD_Miniproject",
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
  title: "Systems & Machine Learning Engineer",
  location: "Pune, Maharashtra, India",
  email: "chamarthysr@gmail.com",
  resume: "/KrishnaChamarthy_Resume.pdf",
  profiles: [
    {
      label: "GitHub",
      href: "https://github.com/KrishnaChamarthy",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/krishna-chamarthy-291409187/",
      icon: "linkedin",
    },
    {
      label: "Codeforces",
      href: "https://codeforces.com/profile/DraGon9236",
      icon: "code",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/chamarthysr",
      icon: "code",
    },
  ],
};
