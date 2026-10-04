import React from 'react';
import { FileText, Linkedin, MessageCircle, ArrowRight, Store, GraduationCap, Award, Cpu, MapPin, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profileData';

interface HeroProps {
  onOpenResumeModal: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onExploreWork }) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Ambient Spotlight Glow behind Hero */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-24 right-5 w-[450px] h-[450px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Bento Hero Grid (Left 8 cols, Right 4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
          
          {/* Left Bento Card: Bio & Actions */}
          <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/85 backdrop-blur-xl shadow-xl relative overflow-hidden card-shine hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between">
            
            {/* Subtle top-edge shine */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            <div>
              {/* Modern Micro-Pill with pulsing dot */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-semibold tracking-widest uppercase mb-4">
                <span className="relative flex h-2 w-2 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Junior Accountant & Store Operations (Dhaka / Remote)</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 mb-3 text-balance font-sans">
                {profileData.name}
              </h1>

              {/* Tagline */}
              <h2 className="text-lg sm:text-xl font-medium text-cyan-400 dark:text-cyan-400 light:text-cyan-700 tracking-tight mb-5">
                Junior Accountant <span className="text-slate-500">|</span> Retail Operations & Financial Automation
              </h2>

              {/* Biography */}
              <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
                {profileData.bio}
              </p>
            </div>

            {/* Action CTAs */}
            <div>
              <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-white/[0.08] dark:border-white/[0.08] light:border-slate-100">
                {/* Primary CTA: Sleek gradient with active scale */}
                <a
                  href="https://drive.google.com/uc?export=download&id=1mrGTmbCLuHWG_OojdffxSmclmGDbFq8C"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  title="Download Verified Resume PDF"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>

                {/* Secondary Action Buttons: Frosted glass style */}
                <a
                  href="https://wa.me/8801870488324"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium text-emerald-300 dark:text-emerald-300 light:text-emerald-700 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/md-hasnain-4aa010440"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-700 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://mybdjobs.bdjobs.com/cafb59fc-7a19-4c9c-89c0-6d455e010a87"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium text-amber-300 dark:text-amber-300 light:text-amber-700 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                  title="View Official Bdjobs Profile"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>Bdjobs</span>
                </a>

                <button
                  onClick={onExploreWork}
                  className="inline-flex items-center gap-1.5 px-3 py-3 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors ml-auto hidden xl:inline-flex"
                >
                  <span>Explore Work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Location Strip */}
              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profileData.location}</span>
                <span className="text-slate-600">·</span>
                <span>Open to On-site (Dhaka) & Remote</span>
              </div>
            </div>
          </div>

          {/* Right Bento Card: Executive Portrait */}
          <div className="lg:col-span-4 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/85 backdrop-blur-xl p-4 sm:p-5 flex flex-col justify-between shadow-xl relative overflow-hidden card-shine hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out group">
            
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-inner">
              <img
                src={profileData.profilePhotoUrl}
                alt={`${profileData.name} — ${profileData.role}`}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('rmdPP3kv')) {
                    target.src = 'https://i.postimg.cc/rmdPP3kv/Portrait-retouching-of-reference-20261002235126-jpg.jpg';
                  }
                }}
                className="object-cover w-full h-full rounded-2xl filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Active / Open to Work Badge */}
              <div className="absolute top-3 right-3 z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-medium text-emerald-300 font-mono tracking-wide">
                    Active / Open to Work
                  </span>
                </div>
              </div>

              {/* Bottom Identity Overlay */}
              <div className="absolute bottom-3 left-3 right-3 z-10 text-left">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
                  Executive Candidate
                </span>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Md. Hasnain
                </h3>
                <p className="text-xs text-slate-300">
                  Junior Accountant & Retail Operations
                </p>
              </div>
            </div>

            {/* Under-photo metadata */}
            <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="text-slate-300">PRAN-RFL Group</span>
              <span className="text-cyan-400">Dhaka, Bangladesh</span>
            </div>
          </div>

        </div>

        {/* 3. TRUE ASYMMETRICAL BENTO GRID IN HERO STATS (12-Column Grid) */}
        <div className="grid grid-cols-12 gap-5">
          
          {/* Card 1 (Wide - col-span-12 md:col-span-7): 9 Months Showroom In-Charge */}
          <div className="col-span-12 md:col-span-7 p-6 sm:p-7 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/85 backdrop-blur-xl shadow-xl relative overflow-hidden card-shine hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 uppercase">
                    Commercial Experience
                  </span>
                  <span className="text-xs font-mono text-slate-500">Nov 2024 – Jul 2025</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight font-sans">
                  9 Months Showroom In-Charge @ Rainbow Paints (PRAN-RFL Group)
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-normal leading-relaxed">
                  Full direct operational custody of counter cash drawers, store inventory, banking deposits, and daily sales reconciliation.
                </p>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <span className="text-3xl font-bold text-white dark:text-white light:text-slate-900 font-mono">
                  9 Mos
                </span>
                <span className="block text-[11px] font-mono text-cyan-400">Operations</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Cash Reconciliation
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
                Physical Stock Audits
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                Zero Cash Discrepancy
              </span>
            </div>
          </div>

          {/* Card 2 (Compact - col-span-12 md:col-span-5): BBA in Accounting */}
          <div className="col-span-12 md:col-span-5 p-6 sm:p-7 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/85 backdrop-blur-xl shadow-xl relative overflow-hidden card-shine hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-2xl font-bold text-white dark:text-white light:text-slate-900 font-mono">
                  BBA
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 tracking-tight font-sans">
                BBA in Accounting
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-normal leading-relaxed">
                Ongoing @ Bangladesh Open University (Regional Center: Dhaka) · Comprehensive study in Financial & Managerial Accounting.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Academic Foundation</span>
              <span className="text-indigo-400 font-medium">Appeared (Ongoing)</span>
            </div>
          </div>

          {/* Card 3 (Compact - col-span-12 md:col-span-5): SBMC Certified */}
          <div className="col-span-12 md:col-span-5 p-6 sm:p-7 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/85 backdrop-blur-xl shadow-xl relative overflow-hidden card-shine hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-2xl font-bold text-white dark:text-white light:text-slate-900 font-mono">
                  SBMC
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 tracking-tight font-sans">
                SBMC Certified
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-normal leading-relaxed">
                Practical Accounting & Tally Prime @ As-Sunnah Skill Development Institute · Double-entry, Vouchers & Advanced Excel.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>3-Month Intensive Program</span>
              <span className="text-amber-400 font-medium">Certified 2026</span>
            </div>
          </div>

          {/* Card 4 (Wide - col-span-12 md:col-span-7): Digital Finance Utilities & AI Workflows */}
          <div className="col-span-12 md:col-span-7 p-6 sm:p-7 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/85 backdrop-blur-xl shadow-xl relative overflow-hidden card-shine hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide bg-indigo-500/10 text-indigo-400 border border-indigo-500/25 uppercase">
                    Modern Advantage
                  </span>
                  <span className="text-xs font-mono text-slate-500">AI Prompt Workflows</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight font-sans">
                  Digital Finance Utilities & AI Workflows
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-normal leading-relaxed">
                  Engineered custom Android SQLite expense trackers, automated reconciliation models, and web retail prototypes via AI prompt workflows.
                </p>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <span className="text-3xl font-bold text-white dark:text-white light:text-slate-900 font-mono">
                  4 Tools
                </span>
                <span className="block text-[11px] font-mono text-indigo-400">Built & Verified</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                Custom Trackers Built
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                Room SQLite & Android
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                Automated Reconciliation Models
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
