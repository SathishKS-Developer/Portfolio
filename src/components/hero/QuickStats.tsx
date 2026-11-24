import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Award, Zap, Cpu, Database } from 'lucide-react';

const STAT_ICONS = [Award, Cpu, Zap, Database];

export const QuickStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {PERSONAL_INFO.stats.map((stat, idx) => {
        const Icon = STAT_ICONS[idx % STAT_ICONS.length];
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 p-4 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5 dark:border-slate-800/80 dark:bg-slate-900/50 dark:hover:border-cyan-500/30"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400 sm:text-3xl">
                {stat.value}
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                <Icon className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};
