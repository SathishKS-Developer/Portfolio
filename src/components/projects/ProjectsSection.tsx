import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Bot, Sparkles } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { ProjectCard } from './ProjectCard';

interface ProjectsSectionProps {
  onOpenRagModal: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenRagModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'RAG AI', 'ETL & Backend', 'Full Stack', 'Cloud & PDF'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400"
          >
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>Featured Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Enterprise Engineering & AI Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400"
          >
            Detailed showcase of production RAG AI search platforms, high-throughput ETL data pipelines, low-code engines, and PDF report builders.
          </motion.p>
        </div>

        {/* Interactive RAG Banner Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-3xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 p-6 shadow-xl backdrop-blur-md dark:border-cyan-400/30 dark:bg-slate-900/80"
        >
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/30">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Interactive RAG AI Knowledge Assistant
                </h3>
                <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">
                  Experience semantic document indexing, vector chunk similarity search, and context-based LLM generation live in your browser.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenRagModal}
              className="flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105"
            >
              <Sparkles className="h-4 w-4" />
              <span>Launch RAG Simulator</span>
            </button>
          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'border border-slate-200 bg-white/70 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-400 dark:hover:bg-slate-800'
              }`}
            >
              {cat === 'All' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenRagModal={onOpenRagModal}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
