import React, { useState } from 'react';
import { Sun, Moon, FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { Theme } from '../types';

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
  onOpenResumeModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  onOpenResumeModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Toolkit', href: '#toolkit' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#' || href === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 76;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0B0F19]/85 dark:bg-[#0B0F19]/90 light:bg-white/90 border-b border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand with elegant subtitle pill */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, '#')}
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg py-1"
        >
          <span className="text-base font-bold tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors font-sans">
            Md. Hasnain
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Junior Accountant
          </span>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-600"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-cyan-400 light:hover:text-cyan-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons (Theme Toggle & CV Trigger) */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-xl text-slate-400 hover:text-white light:hover:text-slate-900 bg-white/[0.05] border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <a
            href="https://drive.google.com/uc?export=download&id=1mrGTmbCLuHWG_OojdffxSmclmGDbFq8C"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-md shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            title="Download Verified Resume PDF"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white light:hover:text-slate-900 bg-white/[0.05] border border-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 dark:border-white/10 light:border-slate-200 bg-[#0B0F19]/95 dark:bg-[#0B0F19]/95 light:bg-white/95 px-4 pt-3 pb-6 transition-all shadow-2xl backdrop-blur-xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 rounded-xl text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-slate-100 hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex flex-col gap-2">
              <a
                href="https://drive.google.com/uc?export=download&id=1mrGTmbCLuHWG_OojdffxSmclmGDbFq8C"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow"
              >
                <FileText className="w-4 h-4" />
                <span>Download Official CV (PDF)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
