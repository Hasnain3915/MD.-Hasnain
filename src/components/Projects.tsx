import React from 'react';
import { ArrowUpRight, Smartphone, Globe, Sparkles, BookOpen } from 'lucide-react';
import { Project } from '../types';
import { projectsData } from '../data/projectsData';
import { PlaceholderFrame } from './PlaceholderFrame';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  onOpenScreenshot: (token: string, caption: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject, onOpenScreenshot }) => {
  const featuredProject = projectsData.find((p) => p.isFeatured) || projectsData[0];
  const supportingProjects = projectsData.filter((p) => !p.isFeatured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'mobile': return Smartphone;
      case 'web': return Globe;
      case 'ai': return Sparkles;
      default: return BookOpen;
    }
  };

  return (
    <section id="projects" className="py-20 border-b border-slate-800/60 dark:border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-teal-400 dark:text-teal-400 light:text-teal-700">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 mt-1">
            Selected Digital Work
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 max-w-2xl">
            Independent and AI-assisted projects built to explore practical finance, business workflows, education and digital problem-solving.
          </p>
        </div>

        {/* 1. FEATURED PROJECT (Heroic Bento Card) */}
        <div className="mb-12">
          <div className="relative rounded-2xl border-2 border-teal-500/30 dark:border-teal-500/30 light:border-teal-600/30 bg-gradient-to-b from-slate-900/90 to-slate-950 dark:from-slate-900/90 dark:to-[#0B0F19] light:from-white light:to-slate-50 p-6 sm:p-8 lg:p-10 shadow-2xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-mono font-semibold text-teal-300 dark:text-teal-300 light:text-teal-700 bg-teal-950/70 border border-teal-800/50 px-2.5 py-1 rounded">
                      {featuredProject.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      · {featuredProject.type}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
                    {featuredProject.title}
                  </h3>

                  <p className="text-xs font-mono text-slate-400 mb-4">
                    Role: {featuredProject.role}
                  </p>

                  <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                    {featuredProject.overview}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {featuredProject.keyFeatures.slice(0, 3).map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap items-center gap-2 mb-8">
                    {featuredProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/80 dark:bg-slate-800/90 light:bg-slate-200/80 text-teal-300 dark:text-teal-300 light:text-teal-800 border border-slate-700 dark:border-slate-700 light:border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onSelectProject(featuredProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                  >
                    <span>View Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <span className="text-xs font-mono text-slate-400">
                    5 Verified Screen Slots
                  </span>
                </div>
              </div>

              {/* Right: Featured Screen Grid Preview */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <PlaceholderFrame
                    token={featuredProject.screenshots[0].token}
                    aspectRatio="9:16"
                    label={featuredProject.screenshots[0].caption}
                    onClick={() => onOpenScreenshot(featuredProject.screenshots[0].token, featuredProject.screenshots[0].caption)}
                  />
                  <PlaceholderFrame
                    token={featuredProject.screenshots[1].token}
                    aspectRatio="9:16"
                    label={featuredProject.screenshots[1].caption}
                    onClick={() => onOpenScreenshot(featuredProject.screenshots[1].token, featuredProject.screenshots[1].caption)}
                  />
                </div>
                <button
                  onClick={() => onSelectProject(featuredProject)}
                  className="w-full text-center text-xs font-mono text-teal-400 hover:underline py-1.5 bg-slate-950/40 rounded-lg border border-slate-800"
                >
                  Click to inspect all 5 screens in Case Study →
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 2. SUPPORTING PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {supportingProjects.map((project) => {
            const Icon = getCategoryIcon(project.category);
            return (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/60 dark:bg-slate-900/70 light:bg-white p-6 hover:border-teal-500/40 transition-all duration-200 shadow-md"
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-md bg-teal-950/60 light:bg-teal-50 text-teal-400 light:text-teal-600 border border-teal-800/40 light:border-teal-200">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[11px] font-mono text-teal-400/90 font-medium">
                        {project.badge}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {project.type}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-1">
                    {project.title}
                  </h4>

                  <p className="text-xs text-slate-400 font-mono mb-3">
                    Role: {project.role}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mb-4 line-clamp-3">
                    {project.overview}
                  </p>

                  {/* Screenshots preview */}
                  <div className="mb-4">
                    <PlaceholderFrame
                      token={project.screenshots[0].token}
                      aspectRatio={project.screenshots[0].aspectRatio || '16:9'}
                      label={project.screenshots[0].caption}
                      onClick={() => onOpenScreenshot(project.screenshots[0].token, project.screenshots[0].caption)}
                    />
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 dark:bg-slate-800 light:bg-slate-100 text-teal-300 dark:text-teal-300 light:text-teal-800 border border-slate-700/60 dark:border-slate-700 light:border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    {project.screenshots.length} Screens verified
                  </span>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 light:text-teal-600 light:hover:text-teal-700 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
