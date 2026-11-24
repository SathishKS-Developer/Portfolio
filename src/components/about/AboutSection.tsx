import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin, CheckCircle2, Cpu, Code, Database, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400"
          >
            <User className="h-3.5 w-3.5" />
            <span>About Me</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Engineering Enterprise Solutions & AI Context Pipelines
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400"
          >
            Bridging robust Java microservices backend architecture with fluid React frontend experiences and production AI retrieval systems.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Left: Detailed Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/60 sm:p-8"
          >
            <div>
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 dark:border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{PERSONAL_INFO.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-cyan-500" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  With <strong className="text-slate-900 dark:text-white">4 years of software engineering experience</strong> across top tech companies like <strong className="text-slate-900 dark:text-white">ChainSys</strong> and <strong className="text-slate-900 dark:text-white">Vaken Technologies</strong>, I specialize in designing scalable backend platforms, high-volume ETL data loaders, microservices, and AI-enabled document intelligence engines.
                </p>
                <p>
                  My engineering journey spans building low-code application builders (<strong className="text-slate-900 dark:text-white">SOVAblu</strong>), automating complex multi-database synchronization between <strong className="text-slate-900 dark:text-white">PostgreSQL and Oracle using Apache Kafka & Databricks</strong>, and creating context-aware <strong className="text-slate-900 dark:text-white">RAG (Retrieval-Augmented Generation)</strong> microservices using Spring Boot REST APIs and vector similarity search.
                </p>
              </div>

              {/* Core Strengths */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Spring Boot Microservices & REST APIs",
                  "RAG AI & Vector Similarity Search",
                  "ETL Pipeline & Databricks Integration",
                  "Asynchronous Kafka Messaging",
                  "PostgreSQL & Oracle Query Tuning",
                  "React.js & Dynamic UI Builder Canvas"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status strip */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-4 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-4">
                <span>⚡ High Code Coverage</span>
                <span>🛡️ OAuth 2.0 & JWT Security</span>
              </div>
              <a
                href="#contact"
                className="font-semibold text-cyan-600 hover:underline dark:text-cyan-400"
              >
                Let's Build Together →
              </a>
            </div>
          </motion.div>

          {/* Right: Education & Core Pillars Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Education Card */}
            <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-lg backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/60">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">Education</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Academic Background</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200/60 bg-slate-50/70 p-4 dark:border-slate-800/60 dark:bg-slate-950/50">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      K.L.N. College of Engineering
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Bachelor of Engineering in Electronics & Communication Engineering
                    </p>
                  </div>
                  <span className="rounded-md bg-indigo-500/10 px-2 py-0.5 text-[11px] font-bold text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-300">
                    2018 – 2022
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span>Madurai, Tamil Nadu</span>
                  <span className="text-cyan-600 dark:text-cyan-400">CGPA: 7.9 / 10.0</span>
                </div>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/60">
                <Cpu className="h-6 w-6 text-cyan-500" />
                <h4 className="mt-2 text-xs font-bold text-slate-900 dark:text-white">Microservices & AI</h4>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  Spring Boot REST APIs, Vector embeddings & RAG LLM orchestration.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/60">
                <Database className="h-6 w-6 text-indigo-500" />
                <h4 className="mt-2 text-xs font-bold text-slate-900 dark:text-white">ETL & Performance</h4>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  Databricks metadata loader, Kafka streaming & SQL tuning.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
