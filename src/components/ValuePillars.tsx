import React from 'react';
import { BookOpenCheck, Store, Cpu, Check, Sparkles } from 'lucide-react';

export const ValuePillars: React.FC = () => {
  const pillars = [
    {
      id: 'pillar-1',
      num: '01',
      title: 'Accounting Foundation',
      badge: 'Core Competency',
      description: 'Formal bookkeeping discipline adhering to double-entry standards, ledger maintenance, and audit-ready reconciliations.',
      icon: BookOpenCheck,
      color: 'cyan',
      items: [
        'Double-entry bookkeeping & journalizing',
        'General ledger tracking & trial balance preparation',
        'Cash reconciliation & daily settlement registers',
        'Petty cash vouchers & strict expense classification',
        'Commercial documentation & invoice verification'
      ]
    },
    {
      id: 'pillar-2',
      num: '02',
      title: 'Operational Reality',
      badge: 'On-Ground Experience',
      description: '9 months managing high-tempo showroom operations at Rainbow Paints (PRAN-RFL Group) with zero cash discrepancy.',
      icon: Store,
      color: 'indigo',
      items: [
        '9 months on-ground retail showroom management',
        'Finished paint & raw material inventory tracking',
        'Regular physical stock audits & discrepancy elimination',
        'Zero cash variance across counter registers & petty cash',
        'Fast customer billing, quotations & store replenishment'
      ]
    },
    {
      id: 'pillar-3',
      num: '03',
      title: 'Technology Mindset',
      badge: 'Modern Advantage',
      description: 'Accelerating financial workflows through advanced spreadsheets, computerized Tally Prime, and AI prompt engineering.',
      icon: Cpu,
      color: 'blue',
      items: [
        'Advanced MS Excel modeling (Pivot Tables, VLOOKUP, Validation)',
        'Tally Prime computerized voucher entries & reports',
        'Custom financial trackers developed via AI prompt engineering',
        'Automated reconciliation formulas & budget thresholds',
        'Digital productivity & prompt-driven software builds'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Value Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 mt-1 font-sans">
            What I Bring
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 max-w-2xl leading-relaxed font-normal">
            The powerful intersection of foundational bookkeeping, real retail showroom operations, and digital automation tools.
          </p>
        </div>

        {/* 3 Interactive Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/85 backdrop-blur-xl shadow-xl relative overflow-hidden card-shine hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-cyan-950/60 light:bg-cyan-50 border border-cyan-800/40 text-cyan-400 light:text-cyan-700 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-semibold px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10">
                      {pillar.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2.5 tracking-tight group-hover:text-cyan-300 transition-colors font-sans">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2.5 pt-5 border-t border-white/[0.08] dark:border-white/[0.08] light:border-slate-100">
                    {pillar.items.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer badge */}
                <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Pillar {pillar.num}</span>
                  <span className="text-cyan-400 font-medium">{pillar.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
