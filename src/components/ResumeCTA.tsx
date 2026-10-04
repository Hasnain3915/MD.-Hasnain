import React from 'react';
import { FileText, Download, Eye, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';
import { profileData } from '../data/profileData';

interface ResumeCTAProps {
  onOpenResumeModal: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" className="py-20 border-b border-slate-800/60 dark:border-slate-800/80 light:border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border border-teal-500/30 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 dark:from-[#0E1526] dark:to-[#0B0F19] light:from-white light:to-slate-50 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-teal-500/10 blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 light:bg-teal-50 border border-teal-800/40 light:border-teal-200 text-xs font-mono text-teal-400 light:text-teal-700 mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 mb-3">
            View My Resume
          </h2>

          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
            Detailed overview of showroom cash handling experience at Rainbow Paints (PRAN-RFL), BBA coursework, Tally Prime training, and digital builds.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-xl shadow-lg shadow-teal-950/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              <Eye className="w-4 h-4" />
              <span>View Interactive Resume</span>
            </button>

            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 bg-slate-800/80 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 border border-slate-700 dark:border-slate-700 light:border-slate-300 rounded-xl transition-all"
            >
              <Download className="w-4 h-4 text-teal-400" />
              <span>Download PDF Resume</span>
            </button>
          </div>

          {/* Verified Candidate Summary Proofline */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 dark:border-slate-800 light:border-slate-200 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              Recruiter-Ready Format
            </span>
            <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              No Fabricated Metrics
            </span>
            <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              hasnain.finpro@gmail.com
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
