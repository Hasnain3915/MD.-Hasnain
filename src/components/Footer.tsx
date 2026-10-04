import React from 'react';
import { Mail, Linkedin, FileText, ArrowUp, MessageCircle } from 'lucide-react';
import { profileData } from '../data/profileData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-[#0B0F19] dark:bg-[#0B0F19] light:bg-slate-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-white dark:text-white light:text-slate-900 tracking-tight font-sans">
              © 2026 Md. Hasnain. Built with modern web standards and AI efficiency.
            </p>
            <p className="text-xs text-slate-400 font-mono mt-1 font-normal">
              Junior Accountant | Retail Operations & Financial Automation
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-slate-400">
            <a
              href="https://wa.me/8801870488324"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://www.linkedin.com/in/md-hasnain-4aa010440"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://mybdjobs.bdjobs.com/cafb59fc-7a19-4c9c-89c0-6d455e010a87"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Bdjobs Profile</span>
            </a>

            <a
              href="mailto:hasnain.finpro@gmail.com"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <a
              href="https://drive.google.com/uc?export=download&id=1mrGTmbCLuHWG_OojdffxSmclmGDbFq8C"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1.5 text-cyan-400 font-semibold"
              title="Download Verified Resume PDF"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Back to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-all hover:-translate-y-0.5"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

        </div>

        {/* Small location tagline */}
        <div className="mt-8 pt-6 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-slate-500">
          <span>Dhaka / Bhola, Bangladesh</span>
          <span>Verified Career Profile · Siyam-Zihad Refactored Architecture</span>
        </div>

      </div>
    </footer>
  );
};
