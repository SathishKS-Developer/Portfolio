import { Project, Experience, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Sathish KS",
  title: "Java Full Stack & AI Solutions Engineer",
  tagline: "Building Enterprise Microservices, High-Throughput ETL Pipelines, & RAG-Powered AI Platforms",
  location: "Madurai / Trichy, Tamil Nadu, India",
  email: "sathishferliks@gmail.com",
  phone: "+91 8531068321",
  linkedin: "https://linkedin.com/in/sathish-ks-87224a200",
  github: "https://github.com/Sathish270900",
  bio: `Java Full Stack Developer with 4 years of hands-on experience engineering high-performance enterprise applications. Specializing in Java, Spring Boot, Microservices, PostgreSQL, Apache Kafka, Databricks, and modern React.js integration. Passionate about AI integration—building production RAG (Retrieval-Augmented Generation) platforms for intelligent semantic search and LLM context orchestration.`,
  yearsOfExp: 4,
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Enterprise Projects", value: "6+" },
    { label: "API Query Optimization", value: "Up to 40%" },
    { label: "Microservices & RAG APIs", value: "25+" }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: "chainsys",
    role: "Software Engineer",
    company: "ChainSys",
    period: "Nov 2025 – Jun 2026",
    location: "Madurai, Tamil Nadu",
    type: "Full-time",
    summary: "Engineered core components of Loader & Dataflow enterprise products focused on high-volume ETL processing and multi-database migrations.",
    achievements: [
      "Upgraded Databricks JAR dependencies and re-architected API integrations to ensure accurate schema, catalog, table, and column metadata extraction across enterprise databases.",
      "Implemented standardized OAuth 2.0 authentication protocols in the Dataflow module, elevating enterprise data pipeline security across multiple client deployments.",
      "Optimized complex PostgreSQL and Oracle SQL database queries, significantly reducing ETL execution times and system resource bottlenecks.",
      "Diagnosed and resolved critical platform bugs during early feature rollout, ensuring overall system reliability and high availability."
    ],
    techStack: ["Java", "Spring Boot", "Databricks", "OAuth 2.0", "PostgreSQL", "Oracle", "Kafka", "ETL"]
  },
  {
    id: "vaken-junior",
    role: "Junior Engineer - Development",
    company: "Vaken Technologies",
    period: "May 2024 – Oct 2025",
    location: "Trichy, Tamil Nadu",
    type: "Full-time",
    summary: "Led key backend and full-stack modules for low-code platform creation and RAG-based AI platform services.",
    achievements: [
      "Contributed to a production Retrieval-Augmented Generation (RAG) AI platform using Spring Boot and REST APIs, handling document chunking, embedding generation, vector database indexing, and LLM context orchestration.",
      "Co-developed 'SOVAblu', an enterprise low-code platform allowing users to rapidly generate custom application interfaces via visual drag-and-drop React components and Spring Boot keyword execution engines.",
      "Engineered automated PDF report rendering using Apache PDFBox and Java, accepting JSON layout data via REST APIs and streaming generated documents directly to AWS S3 storage.",
      "Automated CI/CD pipelines utilizing AWS CodeCommit and Jenkins, reducing manual release overhead and cutting production defect rates by 25%.",
      "Monitored application health, error telemetry, and API latency metrics using AWS CloudWatch."
    ],
    techStack: ["Java", "Spring Boot", "React.js", "RAG & Vector Search", "Apache PDFBox", "AWS S3", "Jenkins", "PostgreSQL", "Microservices"]
  },
  {
    id: "vaken-trainee",
    role: "Trainee Engineer - Development",
    company: "Vaken Technologies",
    period: "Aug 2022 – Apr 2024",
    location: "Trichy, Tamil Nadu",
    type: "Full-time",
    summary: "Mastered full-stack Java fundamentals, database optimization, and enterprise API design patterns.",
    achievements: [
      "Developed robust backend REST services with Core Java, Spring Boot, and Spring Data JPA.",
      "Structured complex SQL queries, database indexing, and stored procedures in PostgreSQL.",
      "Built comprehensive JUnit test suites for Service and Controller layers, establishing unit test coverage targets.",
      "Worked in Agile development teams using Git version control, Maven build tools, and npm package managers."
    ],
    techStack: ["Core Java", "Spring Boot", "PostgreSQL", "REST APIs", "JUnit", "Git", "Maven", "npm"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Core Engineering",
    description: "Robust, enterprise-ready microservices and server architecture",
    icon: "Server",
    skills: [
      { name: "Java (8 / 11 / 17 / 21)", level: 95, category: "Backend", highlight: "Core Java, OOP, Streams, Concurrency" },
      { name: "Spring Boot", level: 92, category: "Backend", highlight: "REST APIs, Spring Data JPA, Microservices" },
      { name: "Microservices Architecture", level: 88, category: "Backend", highlight: "Service Discovery, Gateway, Modular APIs" },
      { name: "Spring Security & OAuth 2.0", level: 85, category: "Backend", highlight: "JWT, OAuth 2.0, Role-Based Access" },
      { name: "Apache PDFBox", level: 88, category: "Backend", highlight: "JSON to PDF rendering & document creation" }
    ]
  },
  {
    title: "AI & RAG Engineering",
    description: "Vector embeddings, document indexing, and semantic search",
    icon: "Brain",
    skills: [
      { name: "RAG Architecture", level: 90, category: "AI", highlight: "Chunking, Vector Search, LLM Context Generation" },
      { name: "Vector Databases", level: 85, category: "AI", highlight: "pgvector, Embeddings, Similarity Search" },
      { name: "LLM Orchestration APIs", level: 88, category: "AI", highlight: "OpenAI / Claude / Spring AI integrations" },
      { name: "Semantic Document Search", level: 86, category: "AI", highlight: "Metadata extraction & context filtering" }
    ]
  },
  {
    title: "Databases & Data Pipelines",
    description: "High-throughput data storage, ETL, and asynchronous messaging",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: 92, category: "Data", highlight: "Indexing, Query Tuning, Relational Schema Design" },
      { name: "Oracle DB", level: 82, category: "Data", highlight: "PL/SQL, Large-scale migration pipelines" },
      { name: "Apache Kafka", level: 80, category: "Data", highlight: "Asynchronous event streaming & pub-sub topics" },
      { name: "Databricks & ETL", level: 84, category: "Data", highlight: "Metadata integration, high-volume ETL loader" }
    ]
  },
  {
    title: "Frontend & Full Stack",
    description: "Interactive, fluid web user interfaces and component design",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 88, category: "Frontend", highlight: "Hooks, State Mgmt, Visual Drag-and-Drop Builders" },
      { name: "JavaScript / TypeScript", level: 88, category: "Frontend", highlight: "ES6+, Type Safety, Async/Await" },
      { name: "Tailwind CSS & CSS3", level: 90, category: "Frontend", highlight: "Glassmorphism, Responsive Grid, Animations" },
      { name: "Framer Motion", level: 82, category: "Frontend", highlight: "Scroll-spy, layout animations, micro-interactions" }
    ]
  },
  {
    title: "DevOps, Cloud & Tools",
    description: "Automated deployment pipelines, cloud storage, and monitoring",
    icon: "Cloud",
    skills: [
      { name: "AWS (S3 & CloudWatch)", level: 85, category: "DevOps", highlight: "Blob storage & log telemetry tracking" },
      { name: "Jenkins & AWS CodeCommit", level: 84, category: "DevOps", highlight: "CI/CD pipelines & automated build setup" },
      { name: "Docker", level: 82, category: "DevOps", highlight: "Containerization & multi-stage builds" },
      { name: "Git, Maven, VS Code", level: 92, category: "DevOps", highlight: "Version control & enterprise developer workflow" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "rag-assistant",
    title: "Retrieval-Augmented Generation (RAG) AI Knowledge Platform",
    subtitle: "Enterprise Document Indexing, Vector Embeddings, & Semantic LLM Search",
    description: "Built backend Spring Boot microservices for context-aware document search, vector embedding generation, and LLM prompt orchestration across high-volume enterprise documents.",
    longDescription: "Engineered an end-to-end RAG architecture that ingests structured and unstructured enterprise documents, converts them into high-dimensional vector embeddings, indexes them into a vector database, and performs similarity search to supply precision context to LLMs for hallucination-free AI answers.",
    category: "RAG AI",
    tags: ["Java", "Spring Boot", "PostgreSQL / pgvector", "RAG", "Vector Search", "LLM APIs", "React.js", "Tailwind CSS"],
    metrics: ["Sub-second semantic search latency", "95%+ context precision", "Zero-trust document indexing"],
    featured: true,
    hasInteractiveRag: true,
    highlights: [
      "Custom Spring Boot REST APIs for document upload, chunking, and embedding generation",
      "Vector similarity distance calculation (Cosine / Euclidean) for context matching",
      "Interactive in-portfolio simulator allowing recruiters to test prompt retrieval live!",
      "Role-based metadata filtering preventing unauthorized document context leakage"
    ],
    architecture: "PDF Ingestion Engine → Chunking & Embedding Generator → Vector Index (pgvector) → Cosine Similarity Matcher → LLM Prompt Synthesizer → React Client UI",
    github: "https://github.com/Sathish270900/Rag-Project",
    demo: "#rag-demo"
  },
  {
    id: "enterprise-etl-pipeline",
    title: "High-Throughput Enterprise ETL & Data Migration Pipeline",
    subtitle: "Asynchronous Multi-Database Synchronization with Kafka & Databricks",
    description: "Designed secure, resilient data migration pipelines transferring millions of records between PostgreSQL and Oracle databases using Apache Kafka as an asynchronous messaging bus.",
    longDescription: "Constructed at ChainSys for enterprise ETL modules. Integrated Databricks JAR dependencies to inspect multi-cloud database catalogs and schema metadata while securing end-to-end data flows using OAuth 2.0.",
    category: "ETL & Backend",
    tags: ["Java", "Spring Boot", "Databricks", "Kafka", "OAuth 2.0", "PostgreSQL", "Oracle"],
    metrics: ["40% database query performance gain", "Zero data loss during peak loads"],
    featured: true,
    highlights: [
      "Upgraded Databricks integration to fetch catalog, schema, table, and column metadata dynamically",
      "Secured data pipeline transactions using enterprise OAuth 2.0 protocols",
      "Optimized query execution plans and database connection pools for ultra-fast throughput",
      "Asynchronous Kafka consumer groups handling incremental database log change capture"
    ],
    architecture: "Source DB (PostgreSQL) → Change Data Capture → Apache Kafka Topic → Spring Boot Ingestion Worker → Databricks Metadata Layer → Target DB (Oracle)",
    github: "https://github.com/Sathish270900/enterprise-etl-pipeline"
  },
  {
    id: "lowcode-platform-sovablu",
    title: "SOVAblu Low-Code / No-Code Enterprise Platform",
    subtitle: "Visual Screen Builder & Reusable Business Keyword Engine",
    description: "Co-developed an enterprise low-code framework enabling business users to visually construct dynamic frontend applications and map business workflow keywords directly to Java backend APIs.",
    longDescription: "Developed at Vaken Technologies. Created custom React drag-and-drop screen components, component cloning, visual property inspectors, and a dynamic Spring Boot keyword execution engine that dramatically reduced app delivery turnaround time.",
    category: "Full Stack",
    tags: ["React.js", "JavaScript", "Java", "Spring Boot", "PostgreSQL", "Jenkins", "Tailwind CSS"],
    metrics: ["Reduced screen development time by 60%", "25% bug reduction via unified UI components"],
    featured: true,
    highlights: [
      "Visual drag-and-drop canvas with live grid preview and custom component cloning",
      "Spring Boot backend engine translating keyword configs into executable business logic",
      "Dynamic JSON layout persistence and RESTful API binding for form inputs and tables",
      "Custom React component library designed for modular enterprise expansion"
    ],
    architecture: "React Canvas UI → Visual Layout JSON Payload → Spring Boot Keyword Dispatcher → Microservices Layer → PostgreSQL Persistence",
    github: "https://github.com/Sathish270900/sovablu-low-code-platform"
  },
  {
    id: "pdf-report-builder",
    title: "Dynamic JSON-to-PDF Report Generator",
    subtitle: "Automated Document Layout Engine with Apache PDFBox & AWS S3",
    description: "Architected a Java-based PDF generation engine using Apache PDFBox that dynamically converts JSON component layouts into styled multi-page PDF documents and uploads them to AWS S3.",
    longDescription: "Created at Vaken Technologies. Allowed users to design report templates visually, clone table and chart components, and render PDF reports programmatically with pixel-perfect alignment and cloud storage integration.",
    category: "Cloud & PDF",
    tags: ["Java", "Apache PDFBox", "Spring Boot", "AWS S3", "REST APIs", "PostgreSQL", "Jenkins"],
    metrics: ["Automated 100% of manual PDF document creation", "Sub-2s render time for 50-page reports"],
    featured: false,
    highlights: [
      "JSON layout schema parser translating bounds, text, tables, and borders into PDFBox primitives",
      "Component cloning and repetitive template generation across multi-page document sections",
      "Direct integration with AWS S3 for secure cloud file management and presigned download URL generation",
      "Monitored PDF generation jobs with AWS CloudWatch telemetry"
    ],
    architecture: "REST JSON Template Payload → Apache PDFBox Layout Engine → Stream Buffer → AWS S3 Cloud Bucket → Signed Download URL",
    github: "https://github.com/Sathish270900/pdf-report-builder"
  }
];
