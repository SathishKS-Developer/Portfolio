import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Bot, Sparkles, CheckCircle2 } from 'lucide-react';
import { Project } from '../../types';
import { GithubIcon } from '../ui/Icons';

interface ProjectCardProps {
  project: Project;
  onOpenRagModal?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenRagModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 dark:border-slate-800/80 dark:bg-slate-900/70 sm:p-7"
    >
      <div>
        {/* Top Header & Category Tag */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-200/80 pb-4 dark:border-slate-800/80">
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
            {project.category}
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 text-[11px] font-semibold text-purple-600 dark:text-purple-400">
              <Sparkles className="h-3 w-3" /> Featured Project
            </span>
          )}
        </div>

        {/* Project Title & Subtitle */}
        <h3 className="mt-4 text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
          {project.title}
        </h3>
        <p className="mt-1 text-xs font-bold text-indigo-600 dark:text-indigo-400">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        {/* Metrics Pills if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.metrics.map((m) => (
              <span
                key={m}
                className="rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300"
              >
                ✓ {m}
              </span>
            ))}
          </div>
        )}

        {/* Key Highlights */}
        <div className="mt-4 space-y-2">
          {project.highlights.map((h, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-500" />
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Tags */}
        <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Links & Actions */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-200/80 pt-4 dark:border-slate-800/80">
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
          )}
        </div>

        {project.hasInteractiveRag ? (
          <button
            onClick={onOpenRagModal}
            className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-md shadow-cyan-500/20 transition-transform hover:scale-105"
          >
            <Bot className="h-3.5 w-3.5" />
            <span>Try Interactive RAG</span>
          </button>
        ) : (
          <a
            href={project.github || "#contact"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-bold text-cyan-600 hover:underline dark:text-cyan-400"
          >
            <span>View Architecture</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </motion.div>
  );
};
