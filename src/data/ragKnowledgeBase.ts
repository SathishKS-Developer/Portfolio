import { RagDocument, RagQueryResult } from '../types';

export const RAG_DOCUMENTS: RagDocument[] = [
  {
    id: "doc-1",
    title: "Sathish KS - Career Profile & Overview",
    category: "Profile",
    content: "Sathish KS is a Java Full Stack Developer with 4 years of experience specializing in Java (8/11/17), Spring Boot, PostgreSQL, Microservices, REST API development, Apache Kafka, and React.js integration. He has hands-on experience building enterprise RAG (Retrieval-Augmented Generation) platforms, high-throughput ETL data pipelines, low-code frameworks (SOVAblu), and automated PDF generation engines using Apache PDFBox.",
    keywords: ["sathish", "profile", "overview", "experience", "java", "full stack", "rag", "spring boot"]
  },
  {
    id: "doc-2",
    title: "ChainSys Experience - ETL & Databricks Integration",
    category: "Experience",
    content: "At ChainSys (Nov 2025 – Jun 2026) as Software Engineer in Madurai, Sathish worked on Loader and Dataflow enterprise products. He upgraded Databricks JAR dependencies and modified API integrations for accurate catalog, schema, table, and column metadata retrieval. He implemented OAuth 2.0 security across Dataflow modules and optimized complex SQL database queries on PostgreSQL and Oracle, achieving up to 40% performance gains in high-volume ETL pipelines.",
    keywords: ["chainsys", "etl", "databricks", "oauth", "postgresql", "oracle", "kafka", "dataflow", "loader", "optimization"]
  },
  {
    id: "doc-3",
    title: "Vaken Technologies - RAG AI Platform & SOVAblu Low-Code",
    category: "Experience",
    content: "At Vaken Technologies (May 2024 – Oct 2025) as Junior Engineer in Trichy, Sathish contributed to a RAG-based AI platform building backend services for document indexing, embedding generation, vector database search, and LLM orchestration using Spring Boot and REST APIs. He also co-developed SOVAblu, a low-code platform built with Java, Spring Boot, Microservices, and React.js. He created dynamic PDF layout rendering with Apache PDFBox and AWS S3, and automated build deployments with AWS CodeCommit and Jenkins.",
    keywords: ["vaken", "rag", "ai", "sovablu", "low-code", "vector", "pdfbox", "aws s3", "jenkins", "docker", "llm"]
  },
  {
    id: "doc-4",
    title: "GitHub Open-Source RAG Repository (Sathish270900/Rag-Project)",
    category: "Open Source",
    content: "Sathish implemented an open-source RAG project hosted on GitHub at https://github.com/Sathish270900/Rag-Project. The project features document indexing, vector chunk similarity search, embedding pipelines, and Spring Boot REST APIs for context-augmented LLM prompt orchestration.",
    keywords: ["github", "rag-project", "sathish270900", "open source", "repository", "embeddings", "spring boot"]
  },
  {
    id: "doc-5",
    title: "Technical Stack - Backend, AI, Data & Frontend",
    category: "Skills",
    content: "Sathish's core technical stack includes: Backend: Java, Spring Boot, Microservices, REST APIs, OAuth 2.0, JWT, JUnit, Apache PDFBox. AI: RAG architecture, vector search, pgvector, LLM orchestration APIs. Databases & Data: PostgreSQL, Oracle DB, Apache Kafka, Databricks. Frontend: React.js, JavaScript, TypeScript, Tailwind CSS, Framer Motion. DevOps & Tools: AWS S3, CloudWatch, Jenkins, Docker, Git, Maven, npm, VS Code.",
    keywords: ["skills", "stack", "java", "spring boot", "react", "typescript", "postgresql", "kafka", "aws", "docker", "rag", "tailwind"]
  },
  {
    id: "doc-6",
    title: "Retrieval-Augmented Generation (RAG) Architecture Deep Dive",
    category: "Projects",
    content: "Sathish designed and built a RAG architecture using Spring Boot REST APIs. The engine ingests enterprise documents, splits text into optimal token chunks, generates vector embeddings, stores them in pgvector/vector databases, and performs cosine similarity matching on incoming user queries. The retrieved document chunks are injected into context-augmented LLM prompts to deliver precision, zero-hallucination answers.",
    keywords: ["rag architecture", "chunking", "embeddings", "vector search", "pgvector", "llm prompt", "cosine similarity"]
  }
];

export const SAMPLE_PROMPTS = [
  "What experience does Sathish have with RAG and AI platforms?",
  "How did Sathish optimize ETL data pipelines at ChainSys?",
  "What is Sathish's core Java and Spring Boot stack?",
  "Tell me about the SOVAblu Low-Code platform he built.",
  "What is the GitHub repository link for his RAG project?"
];

export function executeRagQuery(userQuery: string): RagQueryResult {
  const queryLower = userQuery.toLowerCase().trim();
  const queryWords = queryLower.split(/\s+/).filter(w => w.length > 2);
  
  // Calculate simulated semantic similarity scores based on keyword density & fuzzy matches
  const matchedDocs = RAG_DOCUMENTS.map(doc => {
    let score = 0.45; // baseline semantic vector score
    
    // Check keyword overlaps
    doc.keywords.forEach(kw => {
      if (queryLower.includes(kw)) {
        score += 0.12;
      }
    });

    queryWords.forEach(word => {
      if (doc.content.toLowerCase().includes(word)) {
        score += 0.08;
      }
    });

    // Add slight realistic jitter
    score = Math.min(0.985, Math.max(0.52, score + (Math.sin(doc.id.charCodeAt(4)) * 0.04)));

    // Extract relevant chunk
    const sentences = doc.content.split('. ');
    let bestSentence = sentences[0];
    let maxMatchCount = 0;

    sentences.forEach(s => {
      let count = 0;
      queryWords.forEach(w => {
        if (s.toLowerCase().includes(w)) count++;
      });
      if (count > maxMatchCount) {
        maxMatchCount = count;
        bestSentence = s;
      }
    });

    return {
      id: doc.id,
      title: doc.title,
      score: Number(score.toFixed(3)),
      chunk: bestSentence + (bestSentence.endsWith('.') ? '' : '.')
    };
  }).sort((a, b) => b.score - a.score);

  const topMatches = matchedDocs.slice(0, 3);
  const primaryMatch = topMatches[0];

  // Synthesize answer based on top retrieved contexts
  let answer = "";
  if (queryLower.includes("github") || queryLower.includes("repo") || queryLower.includes("project")) {
    answer = `Sathish's RAG project repository is published on GitHub at: https://github.com/Sathish270900/Rag-Project. It includes backend microservices built with Spring Boot for document indexing, chunking, vector embeddings, and LLM prompt context injection.`;
  } else if (queryLower.includes("rag") || queryLower.includes("ai") || queryLower.includes("llm") || queryLower.includes("vector")) {
    answer = `Based on the RAG Knowledge Assistant context (Similarity Score: ${Math.round(primaryMatch.score * 100)}%), Sathish KS built an end-to-end RAG AI platform (GitHub: https://github.com/Sathish270900/Rag-Project). He built backend services with Spring Boot for document chunking, embedding generation, pgvector indexing, and LLM context orchestration with zero hallucinations.`;
  } else if (queryLower.includes("chainsys") || queryLower.includes("etl") || queryLower.includes("databricks") || queryLower.includes("kafka") || queryLower.includes("oracle")) {
    answer = `Based on retrieved enterprise logs from ChainSys (Similarity Score: ${Math.round(primaryMatch.score * 100)}%), Sathish optimized complex PostgreSQL and Oracle SQL queries for high-volume ETL data pipelines, achieving up to 40% performance gains. He upgraded Databricks JAR dependencies for metadata retrieval and standardized OAuth 2.0 authentication across dataflows.`;
  } else if (queryLower.includes("sovablu") || queryLower.includes("low-code") || queryLower.includes("vaken")) {
    answer = `Retrieved context confirms Sathish co-developed 'SOVAblu' at Vaken Technologies—a low-code platform built with Java, Spring Boot, Microservices, and React.js. He created visual drag-and-drop screen design components and backend keyword execution engines, cutting screen development time by 60%.`;
  } else if (queryLower.includes("pdf") || queryLower.includes("pdfbox") || queryLower.includes("s3") || queryLower.includes("aws")) {
    answer = `According to retrieved documentation, Sathish implemented automated PDF report generation using Apache PDFBox and Java. The engine parses JSON layouts via REST APIs, renders structured multi-page PDF files, and uploads them directly to AWS S3 storage with AWS CloudWatch monitoring.`;
  } else {
    answer = `Based on Sathish KS's career knowledge graph (Top match: "${primaryMatch.title}" @ ${(primaryMatch.score * 100).toFixed(1)}%), Sathish is a Java Full Stack & AI Solutions Engineer with 4 years of experience. Check out his open-source RAG implementation at https://github.com/Sathish270900/Rag-Project.`;
  }

  return {
    query: userQuery,
    answer,
    matchedDocs: topMatches,
    tokensProcessed: Math.floor(180 + userQuery.length * 4.2 + Math.random() * 40),
    latencyMs: Math.floor(190 + Math.random() * 110),
    embeddingDimensions: 1536
  };
}
