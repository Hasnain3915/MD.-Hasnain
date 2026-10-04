import React from 'react';
import { Store, Calendar, MapPin, Coins, PackageCheck, FileSpreadsheet, Users, ShieldCheck, CheckCircle2, ArrowUpRight, Sparkles, Check, Database, Receipt, CheckCheck } from 'lucide-react';

export const Experience: React.FC = () => {
  const accountingCompetencies = [
    { label: 'Cash Reconciliation', icon: Coins, color: 'text-cyan-400 bg-cyan-950/40 border-cyan-700/40' },
    { label: 'Inventory Audits', icon: PackageCheck, color: 'text-emerald-400 bg-emerald-950/40 border-emerald-700/40' },
    { label: 'Tally Prime Vouchers', icon: Database, color: 'text-indigo-400 bg-indigo-950/40 border-indigo-700/40' },
    { label: 'Commercial Invoicing', icon: FileSpreadsheet, color: 'text-blue-400 bg-blue-950/40 border-blue-700/40' }
  ];

  const responsibilities = [
    {
      num: '01',
      title: 'Cash & Cashflow Control',
      description: 'Handled daily store counter cash, verified digital payment receipts (bKash, Nagad, POS slips), recorded petty cash vouchers, and balanced daily sales summaries with zero variance.',
      icon: Coins,
      metricBadge: 'Zero Variance Balance'
    },
    {
      num: '02',
      title: 'Daily Expense & Petty Cash',
      description: 'Maintained strict physical cash vouchers, registered recurring operational disbursements, logged branch expenses, and matched physical registers with nightly bank deposits.',
      icon: Receipt,
      metricBadge: 'Daily Petty Cash Settlement'
    },
    {
      num: '03',
      title: 'Commercial Billing & Invoicing',
      description: 'Prepared commercial sales invoices, store requisitions, quotations, and verified VAT/Tax invoicing compliance for retail and corporate accounts.',
      icon: FileSpreadsheet,
      metricBadge: 'Tax Invoicing Compliance'
    },
    {
      num: '04',
      title: 'Inventory Audit & Custody',
      description: 'Monitored raw materials and finished paint inventory, conducted scheduled physical stock verifications, tracked safety thresholds, and eliminated inventory variance.',
      icon: PackageCheck,
      metricBadge: 'Physical Stock Audits'
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 relative overflow-hidden">
      {/* Ambient Spotlight Glow behind Experience */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Standard Modern Micro-Pill */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Employment Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 mt-1 font-sans">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 max-w-2xl leading-relaxed font-normal">
            Real commercial operations, on-ground cash responsibility, and inventory custody at one of Bangladesh's largest conglomerate business groups.
          </p>
        </div>

        {/* Master Experience Bento Card */}
        <div className="rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/85 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden card-shine hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all duration-300">
          
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/[0.08] dark:border-white/[0.08] light:border-slate-200">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                <span className="text-xs font-mono font-medium text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 uppercase">
                  Full-Time Role · 9 Months
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Nov 2024 – Jul 2025
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight font-sans">
                Showroom In-Charge
              </h3>

              <p className="text-base sm:text-lg font-medium text-cyan-400 dark:text-cyan-400 light:text-cyan-700 mt-1">
                Rainbow Paints <span className="text-slate-400 font-normal">· PRAN-RFL Group</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>November 2024 – July 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 dark:text-slate-300 light:text-slate-700">
                <Store className="w-3.5 h-3.5 text-cyan-400" />
                <span>Retail Cash & Stock Custody</span>
              </div>
            </div>
          </div>

          {/* Interactive Mini-Pills with Clean Icons */}
          <div className="py-6 border-b border-white/[0.08] dark:border-white/[0.08] light:border-slate-200">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3 font-semibold">
              Practiced Accounting Competencies:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {accountingCompetencies.map((comp) => {
                const Icon = comp.icon;
                return (
                  <div
                    key={comp.label}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono font-medium transition-all hover:scale-105 cursor-default ${comp.color}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{comp.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5. Sleek Vertical Gradient Timeline Line & Responsibilities */}
          <div className="mt-8 relative pl-6 sm:pl-8">
            
            {/* Vertical Gradient Timeline Line */}
            <div className="absolute left-2.5 sm:left-3 top-3 bottom-3 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-transparent pointer-events-none" />

            <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-6 font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Direct Operational Custody & Audit Evidence
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {responsibilities.map((resp) => {
                const Icon = resp.icon;
                return (
                  <div
                    key={resp.title}
                    className="group relative p-5 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50/80 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start gap-3.5 mb-3">
                        <div className="p-2.5 rounded-xl bg-cyan-950/60 light:bg-cyan-50 border border-cyan-800/40 text-cyan-400 light:text-cyan-700 shrink-0 group-hover:scale-105 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="text-sm font-bold text-white dark:text-white light:text-slate-900 tracking-tight group-hover:text-cyan-300 transition-colors font-sans">
                              {resp.title}
                            </h5>
                            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40">
                              {resp.num}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed font-normal">
                            {resp.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Clean Metric Badge at the bottom */}
                    <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-800/40">
                        <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{resp.metricBadge}</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">Verified KPI</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Operational Takeaway Footnote */}
          <div className="mt-8 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
            <span>
              <strong className="text-white dark:text-white light:text-slate-900">Direct Financial Custody:</strong> Cash drawer balancing, daily settlement against POS, physical stock audit, and commercial invoice verification.
            </span>
            <span className="font-mono text-cyan-400 shrink-0 font-medium">
              Verified Experience · PRAN-RFL Group
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
