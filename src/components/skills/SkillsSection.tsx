import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Brain, Database, Layout, Cloud, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Server,
  Brain,
  Database,
  Layout,
  Cloud
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoriesToDisplay = selectedCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="skills" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-600 dark:text-purple-400"
          >
            <Code2 className="h-3.5 w-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Core Stack & Engineering Proficiency
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400"
          >
            Categorized skills across enterprise Java backend, RAG AI vector search, database pipelines, and modern React interfaces.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {['All', 'Backend', 'AI', 'Databases', 'Frontend', 'DevOps'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'border border-slate-200 bg-white/70 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-400 dark:hover:bg-slate-800'
              }`}
            >
              {cat === 'All' ? 'All Skills' : cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoriesToDisplay.map((cat, catIdx) => {
            const Icon = CATEGORY_ICONS[cat.icon] || Server;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/60"
              >
                <div>
                  <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4 dark:border-slate-800/80">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List with Progress Bars */}
                  <div className="mt-6 space-y-4">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200">
                          <span>{skill.name}</span>
                          <span className="font-mono text-slate-500 dark:text-slate-400">{skill.level}%</span>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                            className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500"
                          />
                        </div>

                        {skill.highlight && (
                          <p className="text-[10px] text-slate-500 dark:text-slate-400">
                            {skill.highlight}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
