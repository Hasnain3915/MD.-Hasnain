import React, { useState } from 'react';
import { Target, Flag, Store, GraduationCap, Cpu, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const JourneyTimeline: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<number>(0);

  const milestones = [
    {
      year: '2024',
      badge: 'Retail Operations Phase',
      title: 'Retail Showroom Operations',
      subtitle: 'Rainbow Paints (PRAN-RFL Group)',
      icon: Store,
      period: 'Nov 2024 – Jul 2025',
      story: 'Stepped into frontline retail management as Showroom In-Charge. Took sole custody of daily cash drawers, customer invoicing, petty cash, and physical stock audits. Maintained zero cash discrepancy across 9 months of high-velocity operations, proving operational discipline under commercial pressure.',
      skillsAcquired: [
        'Daily cash register reconciliation & banking',
        'Physical inventory audit & variance elimination',
        'Customer billing, quotations & store replenishment',
        'Showroom compliance & store team coordination'
      ]
    },
    {
      year: '2025',
      badge: 'Academic & Technical Foundation',
      title: 'BBA in Accounting + SBMC Training',
      subtitle: 'Bangladesh Open University & As-Sunnah SDI',
      icon: GraduationCap,
      period: '2025 – Present',
      story: 'Commenced BBA studies in Accounting at Bangladesh Open University to cement corporate accounting theory. Simultaneously completed the intensive Small Business Management Course (SBMC) at As-Sunnah Skill Development Institute, gaining rigorous practical training in Tally Prime, advanced Excel formulas, and audit-ready commercial documentation.',
      skillsAcquired: [
        'Double-entry bookkeeping & general ledger postings',
        'Tally Prime vouchers (F4–F9) & trial balance reporting',
        'Advanced MS Excel (VLOOKUP, Pivot Tables, Data Validation)',
        'Procurement documentation (Requisition, RFQ, CS, PO, Invoices)'
      ]
    },
    {
      year: '2026',
      badge: 'Technology & Workflow Innovation',
      title: 'Financial Modeling & Digital Automation',
      subtitle: 'AI-Assisted Utilities & Portfolio Builds',
      icon: Cpu,
      period: '2026',
      story: 'Combined operational knowledge and accounting discipline with modern generative AI prompt engineering. Prototyped specialized finance tracking mobile utilities (Kotlin/Room SQLite), automated reconciliation spreadsheet models, and structured digital workflows designed to eliminate manual bookkeeping bottlenecks.',
      skillsAcquired: [
        'AI prompt engineering for finance workflows',
        'Offline mobile database architecture for expense tracking',
        'Automated reconciliation formula dashboards',
        'Modern web interface prototyping'
      ]
    },
    {
      year: 'Next Goal',
      badge: 'Immediate Career Target',
      title: 'Junior Accountant / Store Operations Executive',
      subtitle: 'Corporate Accounting & Finance Department',
      icon: Target,
      period: 'Open Immediately',
      isGoal: true,
      story: 'Eager to contribute immediately to an established corporate finance team or retail retail operations division. Bringing real cash handling custody, physical inventory audit experience, Tally Prime capability, and an innovative technology mindset that saves time and avoids mistakes.',
      skillsAcquired: [
        'Junior Accountant / Accounts Assistant readiness',
        'Store Operations Specialist / Billing Executive',
        'Immediate availability in Dhaka or remote teams',
        'High integrity, ethics, and civic security discipline'
      ]
    }
  ];

  return (
    <section id="journey" className="py-16 md:py-20 border-b border-white/10 dark:border-white/10 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Storytelling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 mt-1 font-sans">
            Career Journey & Evolution
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 max-w-2xl leading-relaxed font-normal">
            A purposeful, step-by-step roadmap demonstrating practical showroom responsibility, formal accounting education, and digital productivity skills.
          </p>
        </div>

        {/* Milestone Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-8">
          {milestones.map((m, idx) => {
            const Icon = m.icon;
            const isSelected = activeMilestone === idx;
            return (
              <button
                key={m.year}
                onClick={() => setActiveMilestone(idx)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 backdrop-blur-xl ${
                  isSelected
                    ? 'border-cyan-500/50 bg-cyan-950/30 shadow-lg shadow-cyan-950/20'
                    : 'border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-slate-900/60 dark:bg-slate-900/60 light:bg-white hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      m.isGoal
                        ? 'bg-cyan-500 text-slate-950 font-semibold'
                        : isSelected
                        ? 'bg-cyan-500/20 text-cyan-300'
                        : 'bg-white/10 text-slate-300'
                    }`}
                  >
                    {m.year}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white dark:text-white light:text-slate-900 line-clamp-1 font-sans">
                  {m.title}
                </h4>
                <p className="text-[11px] text-slate-400 font-mono mt-0.5 line-clamp-1">
                  {m.period}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Milestone Deep Story Card */}
        {(() => {
          const current = milestones[activeMilestone];
          const Icon = current.icon;
          return (
            <div className="rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/85 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden card-shine hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Story Left Column */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      {current.year}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {current.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight font-sans">
                    {current.title}
                  </h3>

                  <p className="text-sm font-semibold text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
                    {current.subtitle} · <span className="font-mono text-slate-400">{current.period}</span>
                  </p>

                  <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed pt-2 font-normal">
                    {current.story}
                  </p>
                </div>

                {/* Story Right Column: Competencies & Evidence */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/70 border border-white/[0.08]">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-semibold mb-4 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    Key Competencies & Practical Evidence
                  </h4>

                  <div className="space-y-3">
                    {current.skillsAcquired.map((skill) => (
                      <div key={skill} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Milestone 0{activeMilestone + 1} of 04</span>
                    <button
                      onClick={() => setActiveMilestone((prev) => (prev + 1) % milestones.length)}
                      className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium"
                    >
                      <span>Next Phase</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
