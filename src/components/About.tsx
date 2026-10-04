import React from 'react';
import { ArrowRight, Briefcase, Calculator, Cpu, MapPin, Mail, GraduationCap, Sparkles } from 'lucide-react';
import { profileData } from '../data/profileData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 border-b border-white/10 dark:border-white/10 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Story & Motivation */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-semibold tracking-widest uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Career Narrative</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 mt-1 font-sans">
                A Practical Path Into Professional Accounting
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed font-normal">
              <p>
                I am an aspiring accounting professional currently pursuing a BBA with a focus on accounting and business studies. My previous role as a Showroom In-Charge gave me practical exposure to daily cash transactions, expense management, inventory control, invoicing, sales reporting and retail operations.
              </p>
              <p>
                Alongside accounting, I have developed an interest in technology and digital productivity. I have built personal applications and web projects using prompt-driven and AI-assisted development workflows. This combination of accounting knowledge, operational experience and technology skills shapes the way I approach practical business problems.
              </p>
            </div>

            {/* Practical Career Positioning Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08] dark:border-white/[0.08] light:border-slate-200">
              <div className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-950/60 light:bg-cyan-50 text-cyan-400 light:text-cyan-700 border border-cyan-800/40 shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white dark:text-white light:text-slate-900">Primary Objective</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-snug font-normal">
                    Junior Accountant / Store Operations Executive in corporate accounting
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-950/60 light:bg-indigo-50 text-indigo-400 light:text-indigo-700 border border-indigo-800/40 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white dark:text-white light:text-slate-900">Academic Focus</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-snug font-normal">
                    BBA in Accounting & Business Studies, Bangladesh Open University
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {profileData.location}
              </span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {profileData.email}
              </a>
            </div>
          </div>

          {/* Right Column: Career Direction Bento Diagram */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/85 backdrop-blur-xl shadow-xl relative overflow-hidden card-shine hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all duration-300 space-y-5">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
              
              <div className="border-b border-white/[0.08] pb-3">
                <span className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-semibold">
                  Progression Framework
                </span>
                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mt-1 font-sans">
                  How Operations Informs Accounting
                </h3>
              </div>

              {/* The 3-Step Progression Visual */}
              <div className="space-y-3.5">
                
                {/* Step 1 */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/60 border border-white/[0.08] transition-all hover:border-cyan-500/30">
                  <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-800/40 text-cyan-400 flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-cyan-400 font-semibold">Stage 01</span>
                      <span className="text-xs text-slate-400">· Showroom Custody</span>
                    </div>
                    <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 mt-0.5">
                      Real Operations
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Cash register management, physical stock audits, daily billing, and vendor coordination at Rainbow Paints.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center -my-2">
                  <ArrowRight className="w-4 h-4 text-cyan-500/60 rotate-90" />
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/60 border border-white/[0.08] transition-all hover:border-cyan-500/30">
                  <div className="w-9 h-9 rounded-xl bg-indigo-950/80 border border-indigo-800/40 text-indigo-400 flex items-center justify-center shrink-0">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-indigo-400 font-semibold">Stage 02</span>
                      <span className="text-xs text-slate-400">· Structured Theory</span>
                    </div>
                    <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 mt-0.5">
                      Practical Accounting
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Double-entry principles, Tally Prime vouchers, general ledger reconciliation, and BBA coursework.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center -my-2">
                  <ArrowRight className="w-4 h-4 text-cyan-500/60 rotate-90" />
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/60 border border-cyan-500/30 transition-all hover:border-cyan-500/50">
                  <div className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-800/40 text-cyan-400 flex items-center justify-center shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-cyan-400 font-semibold">Stage 03</span>
                      <span className="text-xs text-cyan-300">· Digital Advantage</span>
                    </div>
                    <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 mt-0.5">
                      Digital Thinking
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      AI prompt workflows, formula automation, and software prototyping for finance tasks.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Quote Banner */}
              <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-800/30 text-xs text-cyan-300 leading-relaxed font-mono text-center">
                "Real operations → Practical accounting → Digital thinking"
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
