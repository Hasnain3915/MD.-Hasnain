import React from 'react';
import { Store, GraduationCap, Award, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profileData';

export const TrustSnapshot: React.FC = () => {
  const icons = [Store, GraduationCap, Award, ShieldCheck];

  return (
    <section className="py-8 border-y border-white/10 dark:border-white/10 light:border-slate-200 bg-[#111827]/40 dark:bg-[#111827]/60 light:bg-slate-50/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {profileData.statsStrip.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={item.metric}
                className="group relative p-5 rounded-2xl border border-white/10 dark:border-white/10 light:border-slate-200 bg-[#0B0F19]/60 dark:bg-[#0B0F19]/70 light:bg-white hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 font-mono">
                    {item.metric}
                  </span>
                  <div className="p-2 rounded-xl bg-emerald-950/50 light:bg-emerald-50 text-emerald-400 light:text-emerald-700 border border-emerald-800/30">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {item.caption}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
