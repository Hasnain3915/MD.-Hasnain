import React, { useState } from 'react';
import { BookOpen, Store, Laptop, Cpu, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { skillsData } from '../data/skillsData';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Competencies' },
    { id: 'accounting', label: 'Accounting' },
    { id: 'operations', label: 'Operations' },
    { id: 'software', label: 'Software' },
    { id: 'technology', label: 'Technology' },
    { id: 'values', label: 'Values & Discipline' }
  ];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'accounting': return BookOpen;
      case 'operations': return Store;
      case 'software': return Laptop;
      case 'technology': return Cpu;
      default: return ShieldCheck;
    }
  };

  const filteredCategories = activeFilter === 'all'
    ? skillsData
    : skillsData.filter((cat) => cat.id === activeFilter);

  return (
    <section id="skills" className="py-16 md:py-20 border-b border-white/10 dark:border-white/10 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-semibold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 mt-1 font-sans">
              Professional Skills
            </h2>
            <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 max-w-xl leading-relaxed font-normal">
              Practical competencies grounded in retail cash management, computerized accounting, office productivity, and emerging tech tools.
            </p>
          </div>

          {/* Segmented Filter Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/[0.08]">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white light:text-slate-600 light:hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = getCategoryIcon(category.id);
            return (
              <div
                key={category.id}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/85 backdrop-blur-xl shadow-xl relative overflow-hidden card-shine hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="p-3 rounded-xl bg-cyan-950/60 light:bg-cyan-50 border border-cyan-800/40 text-cyan-400 light:text-cyan-700 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900 tracking-tight group-hover:text-cyan-300 transition-colors font-sans">
                        {category.name}
                      </h3>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <ul className="space-y-2 pt-4 border-t border-white/[0.08] dark:border-white/[0.08] light:border-slate-100">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 py-0.5"
                      >
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{category.skills.length} core items</span>
                  <span className="text-cyan-400 font-medium uppercase">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
