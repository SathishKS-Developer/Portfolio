import React from 'react';
import { Terminal, ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200/80 bg-slate-50/80 py-12 transition-colors dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white shadow-md">
              <Terminal className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {PERSONAL_INFO.title}
              </p>
            </div>
          </div>

          {/* Copyright & Tech Note */}
          <div className="text-center text-xs text-slate-500 dark:text-slate-400">
            <p>© {new Date().getFullYear()} Sathish KS. Built with React 19, TypeScript, Tailwind CSS & Framer Motion.</p>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:text-cyan-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-cyan-400"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-blue-400"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:text-cyan-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-cyan-400"
              aria-label="Email Sathish"
            >
              <Mail className="h-4 w-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500 text-white shadow-md transition-transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
