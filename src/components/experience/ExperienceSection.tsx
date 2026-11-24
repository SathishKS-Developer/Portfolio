import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, Sparkles, Building2 } from 'lucide-react';
import { EXPERIENCES } from '../../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400"
          >
            <Briefcase className="h-3.5 w-3.5" />
            <span>Career Journey</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Professional Software Engineering Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400"
          >
            4 years of driving backend reliability, enterprise ETL scalability, AI retrieval systems, and low-code platforms.
          </motion.p>
        </div>

        {/* Timeline Items */}
        <div className="relative mt-12 space-y-8 before:absolute before:left-4 before:top-4 before:h-[95%] before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500 before:to-transparent sm:before:left-1/2 sm:before:-translate-x-1/2">
          {EXPERIENCES.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col gap-6 sm:flex-row ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Point Dot */}
                <div className="absolute left-4 top-4 z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white shadow-md dark:border-slate-950 sm:left-1/2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>

                {/* Main Experience Card */}
                <div className="ml-10 w-full sm:ml-0 sm:w-[calc(50%-2rem)]">
                  <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xl backdrop-blur-md transition-all hover:border-cyan-500/40 hover:shadow-2xl dark:border-slate-800/80 dark:bg-slate-900/70 sm:p-7">
                    
                    {/* Header info */}
                    <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-200/80 pb-4 dark:border-slate-800/80">
                      <div>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-cyan-500" />
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            {exp.company}
                          </h3>
                        </div>
                        <p className="mt-0.5 text-sm font-bold text-cyan-600 dark:text-cyan-400">
                          {exp.role}
                        </p>
                      </div>

                      <div className="flex flex-col items-end text-xs text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                          <Calendar className="h-3.5 w-3.5 text-indigo-500" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 mt-0.5">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Role summary */}
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {exp.summary}
                    </p>

                    {/* Key accomplishments */}
                    <div className="mt-4 space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                          <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-500" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:bg-slate-800/80 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

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
