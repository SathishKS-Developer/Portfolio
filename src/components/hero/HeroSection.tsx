import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Bot, Code2, Server } from 'lucide-react';
import { ParticleMesh } from '../ui/ParticleMesh';
import { QuickStats } from './QuickStats';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

interface HeroSectionProps {
  onOpenRagModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRagModal }) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-28">
      <ParticleMesh />

      {/* Deep Radial Glow Backdrops */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-96 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-10 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Main Hero Text Content */}
          <div className="max-w-3xl">
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-700 backdrop-blur-md dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
              </span>
              <span>Available for Senior Java & RAG AI Engineering Roles</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl"
            >
              Hi, I'm <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 text-lg font-bold text-cyan-600 dark:text-cyan-400 sm:text-xl"
            >
              {PERSONAL_INFO.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg"
            >
              Specializing in <span className="font-semibold text-slate-900 dark:text-white">Spring Boot microservices</span>, high-throughput <span className="font-semibold text-slate-900 dark:text-white">ETL pipelines (Kafka & Databricks)</span>, production <span className="font-semibold text-slate-900 dark:text-white">RAG AI search engines</span>, and dynamic <span className="font-semibold text-slate-900 dark:text-white">React UI frameworks</span>.
            </motion.p>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-5 flex flex-wrap gap-2 text-xs font-medium"
            >
              {['Java 17', 'Spring Boot', 'PostgreSQL', 'Apache Kafka', 'RAG & Vector Search', 'React.js', 'AWS', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-200/80 bg-white/70 px-2.5 py-1 text-slate-700 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Action Call-to-Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={onOpenRagModal}
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 hover:shadow-cyan-500/40"
              >
                <Bot className="h-4 w-4 animate-bounce" />
                <span>Test Interactive RAG AI Demo</span>
                <Sparkles className="h-3.5 w-3.5 opacity-80" />
              </button>

              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <span>Contact Me</span>
                <ArrowRight className="h-4 w-4 text-cyan-500" />
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition-transform hover:scale-105 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition-transform hover:scale-105 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} className="text-blue-600 dark:text-blue-400" />
              </a>
            </motion.div>
          </div>

          {/* Interactive Feature Visual / Hero Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[440px]"
          >
            <div className="relative rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-2xl backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/70">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 dark:border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                    rag-architecture.service.ts
                  </span>
                </div>
                <Code2 className="h-4 w-4 text-cyan-500" />
              </div>

              {/* Code Snippet Box */}
              <div className="mt-4 space-y-2.5 font-mono text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                  <Server className="h-3.5 w-3.5" />
                  <span>@RestController @RequestMapping("/api/rag")</span>
                </div>
                <div className="pl-3 text-cyan-600 dark:text-cyan-300">
                  <span>public class</span> RagOrchestratorService &#123;
                </div>
                <div className="pl-6 text-slate-500 dark:text-slate-400">
                  // Vector Similarity Context Search
                </div>
                <div className="pl-6">
                  <span className="text-pink-600 dark:text-pink-400">List&lt;ChunkMatch&gt;</span> matches = pgvector.search(queryEmbedding, 0.85);
                </div>
                <div className="pl-6">
                  <span className="text-indigo-600 dark:text-indigo-400">String</span> prompt = PromptSynthesizer.build(query, matches);
                </div>
                <div className="pl-6 text-green-600 dark:text-green-400">
                  return llmClient.generate(prompt); // 0 Hallucinations
                </div>
                <div className="pl-3 text-cyan-600 dark:text-cyan-300">&#125;</div>
              </div>

              {/* Interactive RAG Launch Banner inside Hero Card */}
              <div className="mt-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 p-3.5 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500 text-white">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">RAG Engine Ready</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Ask Sathish's AI assistant any query</p>
                    </div>
                  </div>
                  <button
                    onClick={onOpenRagModal}
                    className="rounded-lg bg-cyan-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-105"
                  >
                    Launch
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats Grid Below */}
        <div className="mt-14">
          <QuickStats />
        </div>
      </div>
    </section>
  );
};
