import React, { useState } from 'react';
import { Smartphone, Globe, Code2, Sparkles, ArrowUpRight, CheckCircle2, X, ExternalLink } from 'lucide-react';

interface UtilityItem {
  id: string;
  title: string;
  badge: string;
  type: string;
  techStack: string[];
  summary: string;
  keyPoints: string[];
  icon: React.ComponentType<{ className?: string }>;
  role: string;
}

export const DigitalUtilities: React.FC = () => {
  const [selectedUtility, setSelectedUtility] = useState<UtilityItem | null>(null);

  const utilities: UtilityItem[] = [
    {
      id: 'expense-tracker',
      title: 'Modern Expense Tracker',
      badge: 'Android Native',
      type: 'Personal Finance Utility',
      techStack: ['Kotlin', 'Jetpack Compose', 'Room / SQLite', 'Material 3'],
      summary: 'Native Android application engineered for structured personal cashflow monitoring, categorized expense tracking, budget caps, and informal debt ledgers.',
      keyPoints: [
        'Real-time cashflow balance & expense categorization',
        'Configurable monthly budget caps with alert thresholds',
        'Informal debt ledger tracking receivables and payables',
        'Offline-first Room database ensuring local data privacy'
      ],
      icon: Smartphone,
      role: 'Concept Design · Prompt Architecture · Data Schemas'
    },
    {
      id: 'muslim-life',
      title: 'Muslim Life Companion',
      badge: 'Android Utility',
      type: 'Lifestyle & Habit Engine',
      techStack: ['Android / Kotlin', 'Local Storage', 'Material 3'],
      summary: 'Clean mobile utility built to explore interface ergonomics, prayer schedule calculation engines based on geographic coordinates, and daily habit tracking.',
      keyPoints: [
        'Offline calculation engine for daily schedules',
        'Daily habit checklist with session state persistence',
        'Typography-first reading view with low-battery footprint',
        'Subtle dark and light spiritual interface themes'
      ],
      icon: Smartphone,
      role: 'UI Prototyping · Engine Calibration · QA Testing'
    },
    {
      id: 'family-expense',
      title: 'Family Expense Hub',
      badge: 'Household Finance',
      type: 'Multi-Member Expense Tool',
      techStack: ['Kotlin', 'Room SQLite', 'Material Design'],
      summary: 'Collaborative household utility designed to manage shared utility bills, grocery purchases, and multi-member monthly contribution settlements.',
      keyPoints: [
        'Multi-member expenditure logging with contributor tags',
        'Category-based monthly allocations (Groceries, Utilities)',
        'Automatic balance claim calculations at month-end',
        'Exportable monthly summaries for transparent auditing'
      ],
      icon: Smartphone,
      role: 'Data Schema Modeling · Reconciliation Logic'
    },
    {
      id: 'coffee-shop',
      title: 'Local Coffee Shop & Bakery',
      badge: 'Web Platform',
      type: 'Commercial Storefront Concept',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      summary: 'Responsive commercial landing page crafted for neighborhood retail food businesses, featuring categorized menus and frictionless direct WhatsApp ordering.',
      keyPoints: [
        'Responsive layout optimized for mobile and desktop screens',
        'Categorized bakery and beverage catalog with live pricing',
        'One-click direct WhatsApp ordering with preformatted item list',
        'Store operating hours, Google Maps location, and gallery'
      ],
      icon: Globe,
      role: 'UI/UX Structuring · Front-End Setup · Ordering Workflow'
    }
  ];

  return (
    <section id="digital-utilities" className="py-16 md:py-20 border-b border-white/10 dark:border-white/10 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Builds & Prototypes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 mt-1 font-sans">
            Digital Tools & AI-Assisted Finance Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 max-w-2xl leading-relaxed font-normal">
            Focused, independent utilities built to explore real-world finance workflows, data models, and prompt-assisted software development.
          </p>
        </div>

        {/* Compact 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {utilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedUtility(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedUtility(item);
                  }
                }}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/85 backdrop-blur-xl shadow-xl relative overflow-hidden card-shine hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer text-left"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-cyan-950/60 light:bg-cyan-50 text-cyan-400 light:text-cyan-700 border border-cyan-800/40">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-medium text-cyan-400">
                        {item.badge}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-slate-400">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2 tracking-tight group-hover:text-cyan-300 transition-colors font-sans">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mb-5 leading-relaxed font-normal">
                    {item.summary}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {item.keyPoints.slice(0, 3).map((pt) => (
                      <div key={pt} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-6">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer action */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    Role: {item.role.split('·')[0]}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span>Inspect Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedUtility && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedUtility(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-[#111827] text-slate-200 p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedUtility(null)}
              aria-label="Close"
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">
              {selectedUtility.badge} · {selectedUtility.type}
            </span>

            <h3 className="text-2xl font-bold text-white mt-1 mb-2">
              {selectedUtility.title}
            </h3>

            <p className="text-xs font-mono text-slate-400 mb-4">
              Role: {selectedUtility.role}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedUtility.summary}
            </p>

            <div className="mb-6">
              <h4 className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-semibold mb-3">
                Key Technical Features & Logic
              </h4>
              <div className="space-y-2">
                {selectedUtility.keyPoints.map((pt) => (
                  <div key={pt} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold mb-2">
                Verified Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedUtility.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-emerald-950/40 text-emerald-300 border border-emerald-700/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Personal prototype build · Clean source</span>
              <button
                onClick={() => setSelectedUtility(null)}
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
