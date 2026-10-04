import React, { useState, useEffect } from 'react';
import { Theme } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValuePillars } from './components/ValuePillars';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { DigitalUtilities } from './components/DigitalUtilities';
import { AccountingAssets } from './components/AccountingAssets';
import { JourneyTimeline } from './components/JourneyTimeline';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  // Theme state: dark mode as default per specification
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('hasnain_theme') as Theme;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    }
    return 'dark';
  });

  // Modal states
  const [activeScreenshot, setActiveScreenshot] = useState<{
    token: string | null;
    caption: string;
    imageUrl?: string;
  } | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Apply theme to document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('hasnain_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleExploreWork = () => {
    const toolkitEl = document.getElementById('toolkit');
    if (toolkitEl) {
      toolkitEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] dark:bg-[#0B0F19] light:bg-[#F8FAFC] text-slate-100 dark:text-slate-100 light:text-slate-900 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] relative transition-colors duration-200 selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Global Ambient Glow Spotlights */}
      <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[650px] h-[650px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-10 w-[550px] h-[550px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 left-1/3 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* 1. Header with Bento 3-Zone Navigation & PDF CV Trigger */}
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      <main>
        {/* 2. Bento Hero Section with Bio, Portrait & 4 Minimal Stats Badges */}
        <Hero
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onExploreWork={handleExploreWork}
        />

        {/* 3. Core Value Pillars ("What I Bring" - 3 Bento Cards) */}
        <ValuePillars />

        {/* 4. About Section with 3-Stage Career Framework */}
        <About />

        {/* 5. Professional Experience (Rainbow Paints - PRAN-RFL Group) */}
        <Experience />

        {/* 6. Categorized Professional Skills with Filter */}
        <Skills />

        {/* 7. Digital Tools & AI-Assisted Finance Projects (Compact Bento Grid) */}
        <DigitalUtilities />

        {/* 8. Practical Accounting Toolkit (Hard Skills Evidence - Interactive Tabbed Display) */}
        <AccountingAssets />

        {/* 9. Career Journey Timeline (Zihad-Style Authentic Career Storytelling) */}
        <JourneyTimeline />

        {/* 10. Modern Minimal Horizontal-Scroll Photo Gallery ("Moments") */}
        <Gallery
          onOpenImage={(imageUrl) => setActiveScreenshot({ token: null, caption: '', imageUrl })}
        />

        {/* 11. Contact Section (Direct WhatsApp, 1-Click Email Copy, LinkedIn, Location) */}
        <Contact />
      </main>

      {/* 12. Minimalist Footer */}
      <Footer
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Accessible Fullscreen Lightbox Modal */}
      <LightboxModal
        token={activeScreenshot?.token || null}
        caption={activeScreenshot?.caption}
        imageUrl={activeScreenshot?.imageUrl}
        onClose={() => setActiveScreenshot(null)}
      />

      {/* Interactive PDF Viewer Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
