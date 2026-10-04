import React from 'react';
import { GraduationCap, Award, Shield, CheckCircle2, FileCheck2 } from 'lucide-react';
import { educationData, trainingData } from '../data/educationTrainingData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-slate-800/60 dark:border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-teal-400 dark:text-teal-400 light:text-teal-700">
            Academic & Professional Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 mt-1">
            Education & Professional Training
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 max-w-2xl">
            Formal business education combined with specialized accounting curriculum and high-discipline civic field training.
          </p>
        </div>

        {/* 2-Column Layout: Academic Education & Specialized Training */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Academic Degrees (BBA & HSC) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 font-semibold">
              <GraduationCap className="w-4 h-4 text-teal-400" />
              Academic Credentials
            </h3>

            {educationData.map((edu) => (
              <div
                key={edu.degree}
                className="p-6 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/60 dark:bg-slate-900/70 light:bg-white shadow-sm hover:border-teal-500/30 transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-teal-400 font-semibold px-2 py-0.5 rounded bg-teal-950/60 border border-teal-800/40">
                    {edu.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                  {edu.degree}
                </h4>

                <p className="text-xs sm:text-sm font-medium text-teal-400/90 dark:text-teal-400 light:text-teal-700 mt-0.5 mb-2">
                  {edu.institution}
                </p>

                <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 font-mono mb-4">
                  Focus: {edu.focus}
                </p>

                {edu.details && (
                  <div className="space-y-1.5 pt-3 border-t border-slate-800 dark:border-slate-800 light:border-slate-100">
                    {edu.details.map((detail, idx) => (
                      <p key={idx} className="text-xs text-slate-400 leading-relaxed">
                        • {detail}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Column 2: Specialized Training (SBMC + Ansar) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 font-semibold">
              <Award className="w-4 h-4 text-teal-400" />
              Specialized Professional Training & Discipline
            </h3>

            {/* SBMC Card */}
            <div className="p-6 sm:p-7 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/60 dark:bg-slate-900/70 light:bg-white shadow-sm hover:border-teal-500/30 transition-all">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                    {trainingData[0].title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-teal-400/90 dark:text-teal-400 light:text-teal-700">
                    {trainingData[0].institution}
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-teal-950/60 light:bg-teal-50 text-teal-400 light:text-teal-600 border border-teal-800/40 light:border-teal-200 shrink-0">
                  <FileCheck2 className="w-4 h-4" />
                </div>
              </div>

              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-4">
                {trainingData[0].note}
              </p>

              {/* Modules Grid */}
              <div className="mb-4">
                <span className="text-[11px] font-mono uppercase text-slate-400 block mb-2 font-semibold">
                  Course Curriculum Modules:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {trainingData[0].modules.map((mod) => (
                    <div key={mod} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commercial Documentation Exposure */}
              {trainingData[0].documentationExposure && (
                <div className="pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-100">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block mb-2 font-semibold">
                    Hands-On Business Documentation Exposure:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {trainingData[0].documentationExposure.map((doc) => (
                      <span
                        key={doc}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950/60 dark:bg-slate-950/70 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Ansar Training & Duty Card */}
            <div className="p-6 sm:p-7 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/60 dark:bg-slate-900/70 light:bg-white shadow-sm hover:border-teal-500/30 transition-all">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                    {trainingData[1].title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-teal-400/90 dark:text-teal-400 light:text-teal-700">
                    {trainingData[1].institution}
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-teal-950/60 light:bg-teal-50 text-teal-400 light:text-teal-600 border border-teal-800/40 light:border-teal-200 shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
              </div>

              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-4">
                {trainingData[1].note}
              </p>

              <div className="space-y-2">
                {trainingData[1].modules.map((mod) => (
                  <div key={mod} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 dark:border-slate-800 light:border-slate-100 text-[11px] font-mono text-slate-500">
                Ethical accountability · Field discipline · Crisis resilience
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
