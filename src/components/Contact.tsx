import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, MessageCircle, Send, Copy, Check, ExternalLink, AlertCircle, Clock, Sparkles } from 'lucide-react';
import { profileData } from '../data/profileData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message?: string;
  }>({ type: 'idle' });

  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please provide your name, email, and message details.'
      });
      return;
    }

    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Candidate Inquiry for Md. Hasnain\n\n` +
      `From: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `-- Sent via Md. Hasnain Portfolio Inquiry System`
    );

    const mailtoUrl = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setFormStatus({
      type: 'success',
      message: 'Opening your default email client with your preformatted message. You can also contact directly via WhatsApp.'
    });

    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-20 border-b border-white/10 dark:border-white/10 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 mt-1 font-sans">
            Let’s Connect & Collaborate
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 max-w-2xl leading-relaxed font-normal">
            Open to Junior Accountant, Accounts Assistant, and relevant Store Operations opportunities in Dhaka or remote teams.
          </p>
        </div>

        {/* 2-Column Bento Layout: Quick Actions & Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Communication Bento Cards */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Primary Action Card */}
            <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/85 backdrop-blur-xl shadow-xl relative overflow-hidden card-shine hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all duration-300 flex flex-col justify-between h-full">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
              
              <div>
                <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900 border-b border-white/[0.08] pb-3.5 flex items-center justify-between font-sans">
                  <span>Fastest Contact Channels</span>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-800/40">
                    Direct
                  </span>
                </h3>

                <div className="space-y-3.5 mt-5">
                  {/* Direct WhatsApp Button */}
                  <a
                    href={profileData.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all duration-300 hover:scale-[1.01] group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 shrink-0">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-emerald-400 block font-semibold">Instant Messaging</span>
                        <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                          Direct WhatsApp
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </a>

                  {/* 1-Click Email Copy Button */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all">
                    <div className="flex items-center gap-3.5 min-w-0 pr-2">
                      <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400 shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-mono text-slate-400 block">Official Email</span>
                        <a
                          href={`mailto:${profileData.email}`}
                          className="text-xs sm:text-sm font-bold text-white hover:text-cyan-400 transition-colors truncate block"
                        >
                          {profileData.email}
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-slate-200 transition-colors shrink-0"
                      title="1-Click Copy Email"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-cyan-400" />
                          <span className="text-cyan-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* LinkedIn Profile */}
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-all group hover:scale-[1.01]"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400 shrink-0">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400 block">Professional Network</span>
                        <span className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                          LinkedIn Profile
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors shrink-0" />
                  </a>

                  {/* Location Badge */}
                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.04] border border-white/10 text-xs">
                    <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400 shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 block">Location Badge</span>
                      <span className="text-sm font-bold text-white block mt-0.5">
                        {profileData.location}
                      </span>
                      <p className="text-[11px] text-slate-400 mt-1 font-normal leading-relaxed">
                        {profileData.workPreference}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Window Indicator */}
              <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs font-mono text-slate-400">
                <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Response window: Within 12–24 hours</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/85 backdrop-blur-xl shadow-xl relative overflow-hidden card-shine hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all duration-300 flex flex-col justify-between h-full">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
              
              <div>
                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-1 font-sans">
                  Send an Executive Inquiry
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-6 font-normal">
                  Direct dispatch to {profileData.email} via preformatted email draft.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Hiring Manager / Recruiter"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-slate-950/70 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5 font-medium">
                        Your Work Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-slate-950/70 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5 font-medium">
                      Subject / Role Title *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      placeholder="e.g. Junior Accountant Role — Dhaka Office"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-slate-950/70 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5 font-medium">
                      Message Details *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Include job scope, office location, interview schedule or relevant questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-slate-950/70 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {formStatus.type === 'error' && (
                    <div className="p-3.5 rounded-xl bg-red-950/50 border border-red-800/60 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formStatus.message}</span>
                    </div>
                  )}

                  {formStatus.type === 'success' && (
                    <div className="p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-700/60 text-emerald-300 text-xs flex items-start gap-2.5 leading-relaxed">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{formStatus.message}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message via Email Client</span>
                  </button>
                </form>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
