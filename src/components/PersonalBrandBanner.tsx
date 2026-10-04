import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

export const PersonalBrandBanner: React.FC = () => {
  return (
    <section className="py-16 border-b border-slate-800/60 dark:border-slate-800/80 light:border-slate-200 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 dark:from-[#0B0F19] dark:via-slate-900/60 dark:to-[#0B0F19] light:from-slate-50 light:via-white light:to-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 light:bg-teal-50 border border-teal-800/40 light:border-teal-200 text-xs font-mono text-teal-400 light:text-teal-700 mb-6">
          <Compass className="w-3.5 h-3.5" />
          <span>Professional Positioning</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 mb-6">
          From Operations to Accounting
        </h2>

        {/* Visual Formula Statement */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-base sm:text-xl font-bold text-teal-300 dark:text-teal-300 light:text-teal-700 mb-6 font-mono">
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 shadow-sm">
            Real operations
          </span>
          <ArrowRight className="w-4 h-4 text-slate-500" />
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 shadow-sm">
            Practical accounting
          </span>
          <ArrowRight className="w-4 h-4 text-slate-500" />
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 shadow-sm">
            Digital thinking
          </span>
        </div>

        <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl mx-auto leading-relaxed">
          My goal is to build a career where practical business operations, accounting discipline and modern technology work together.
        </p>

      </div>
    </section>
  );
};
