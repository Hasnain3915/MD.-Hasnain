import React from 'react';
import { BookOpen, Table, Cpu, MessageSquareText } from 'lucide-react';
import { currentlyLearningData } from '../data/currentlyLearningData';

export const CurrentlyLearning: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Accounting': return BookOpen;
      case 'Excel': return Table;
      case 'Technology': return Cpu;
      default: return MessageSquareText;
    }
  };

  return (
    <section className="py-20 border-b border-slate-800/60 dark:border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-teal-400 dark:text-teal-400 light:text-teal-700">
            Active Professional Growth
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 mt-1">
            Currently Learning
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 max-w-xl">
            Disciplined daily study and practice areas actively expanding technical depth and professional precision.
          </p>
        </div>

        {/* 4 Minimal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentlyLearningData.map((item) => {
            const Icon = getIcon(item.category);
            return (
              <div
                key={item.category}
                className="p-6 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/60 dark:bg-slate-900/70 light:bg-white hover:border-teal-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase text-teal-400 dark:text-teal-400 light:text-teal-700 font-semibold tracking-wider">
                      {item.category}
                    </span>
                    <div className="p-1.5 rounded-lg bg-teal-950/60 light:bg-teal-50 text-teal-400 light:text-teal-600 border border-teal-800/40 light:border-teal-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900 mb-2">
                    {item.topic}
                  </h3>

                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                    {item.focusArea}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800 dark:border-slate-800 light:border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Ongoing Study</span>
                  <span className="text-teal-400/80">Active</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
