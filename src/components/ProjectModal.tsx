import React, { useEffect } from 'react';
import { X, ExternalLink, Code2, AlertCircle, Lightbulb, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../types';
import { PlaceholderFrame } from './PlaceholderFrame';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenScreenshot: (token: string, caption: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenScreenshot
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 dark:bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border border-slate-700/80 dark:border-slate-800 bg-slate-900 dark:bg-[#0E1526] light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 p-6 sm:p-8 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 dark:bg-slate-800 light:bg-slate-100 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="pr-12 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-mono">
            <span className="text-teal-400 font-semibold">{project.badge}</span>
            <span className="text-slate-500" aria-hidden="true">·</span>
            <span className="text-slate-400">{project.type}</span>
          </div>

          <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-slate-900">
            {project.title}
          </h2>

          <div className="mt-2 text-xs text-slate-400 flex flex-wrap items-center gap-2 font-mono">
            <span className="text-slate-300 dark:text-slate-300 light:text-slate-700 font-semibold">Role:</span>
            <span>{project.role}</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-teal-400/90">{project.sourceFileStatus}</span>
          </div>
        </div>

        {/* Tech Stack Pills / Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-6 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
          <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-teal-400" />
            Verified Stack:
          </span>
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 dark:bg-slate-800/80 light:bg-slate-100 text-teal-300 dark:text-teal-300 light:text-teal-700 border border-slate-700 dark:border-slate-700 light:border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="space-y-6">
          
          {/* Overview */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-mono text-teal-400 mb-2 font-semibold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Project Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
              <h4 className="text-xs font-mono font-semibold text-amber-400 mb-1.5 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                The Problem
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
              <h4 className="text-xs font-mono font-semibold text-teal-400 mb-1.5 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5" />
                Engineering Approach
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-mono text-teal-400 mb-3 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified Functional Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 p-2.5 rounded-lg bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800 light:border-slate-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Previews / Screenshots */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs uppercase tracking-wider font-mono text-teal-400 font-semibold">
                Visual Assets & Screen Slots
              </h3>
              <span className="text-[11px] text-slate-400 font-mono">
                Click any screen to inspect placeholder
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {project.screenshots.map((screen) => (
                <div key={screen.token} className="flex flex-col gap-1.5">
                  <PlaceholderFrame
                    token={screen.token}
                    aspectRatio={screen.aspectRatio || '16:9'}
                    onClick={() => onOpenScreenshot(screen.token, screen.caption)}
                  />
                  <span className="text-[11px] text-slate-400 text-center font-mono line-clamp-1">
                    {screen.caption}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* What I Learned */}
          <div className="p-4 rounded-xl bg-teal-950/30 border border-teal-800/30 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
            <span className="font-semibold text-teal-300 block mb-1 font-mono">
              Key Insight & Competency Gained:
            </span>
            <p className="leading-relaxed">{project.whatILearned}</p>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400 font-mono">
              Verified artifact state · No commercial claims
            </div>

            <div className="flex items-center gap-3">
              {project.externalLink ? (
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-500 transition-colors"
                >
                  <span>Live Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-400 px-3 py-1.5 rounded bg-slate-800/50 border border-slate-700/60">
                  Live URL Pending Artifact Verification
                </span>
              )}

              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
