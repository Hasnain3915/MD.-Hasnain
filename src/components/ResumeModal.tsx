import React, { useState, useEffect } from 'react';
import {
  X,
  Download,
  Printer,
  FileText,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Building,
  GraduationCap,
  Award,
  ShieldCheck,
  Check
} from 'lucide-react';
import { profileData } from '../data/profileData';
import { experienceData } from '../data/experienceData';
import { educationData, trainingData } from '../data/educationTrainingData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    window.open('https://drive.google.com/uc?export=download&id=1mrGTmbCLuHWG_OojdffxSmclmGDbFq8C', '_blank');
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[95vh] flex flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* PDF Viewer Mockup Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-slate-950 border-b border-slate-800 text-slate-300">
          
          {/* File Name & Document Type */}
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded bg-red-950/80 text-red-400 border border-red-800/50">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-semibold text-white truncate max-w-[200px] sm:max-w-xs block font-mono">
                Md_Hasnain_Resume_Junior_Accountant.pdf
              </span>
              <span className="text-[10px] text-slate-400 font-mono block">
                PDF Document · 1 Page · Standard A4
              </span>
            </div>
          </div>

          {/* Zoom and Page Controls */}
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setZoomLevel((prev) => Math.max(75, prev - 10))}
              aria-label="Zoom Out"
              className="p-1 text-slate-400 hover:text-white rounded transition-colors"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 text-slate-300 min-w-12 text-center">{zoomLevel}%</span>
            <button
              onClick={() => setZoomLevel((prev) => Math.min(125, prev + 10))}
              aria-label="Zoom In"
              className="p-1 text-slate-400 hover:text-white rounded transition-colors"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel(100)}
              aria-label="Reset Zoom"
              className="p-1 text-slate-400 hover:text-white rounded transition-colors ml-1"
              title="Reset Zoom"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>

          {/* Action Buttons: Print, Download, Close */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href="https://drive.google.com/uc?export=download&id=1mrGTmbCLuHWG_OojdffxSmclmGDbFq8C"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official PDF</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close PDF Viewer"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Document Viewport with Gray Backdrop */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950/80 flex justify-center">
          
          {/* Simulated A4 Paper Page */}
          <div
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
            className="w-full max-w-[780px] bg-white text-slate-900 shadow-2xl rounded-sm p-6 sm:p-10 border border-slate-300 transition-transform duration-200 select-text"
          >
            {/* Document Header */}
            <div className="border-b-2 border-slate-900 pb-4 mb-5">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 font-serif">
                    {profileData.name}
                  </h1>
                  <p className="text-sm font-bold text-teal-800 uppercase tracking-wide mt-0.5">
                    {profileData.tagline}
                  </p>
                </div>

                <div className="text-xs text-slate-600 space-y-0.5 sm:text-right font-mono">
                  <div className="flex sm:justify-end items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{profileData.location}</span>
                  </div>
                  <div className="flex sm:justify-end items-center gap-1.5">
                    <Mail className="w-3 h-3 text-slate-400" />
                    <span>{profileData.email}</span>
                  </div>
                  <div className="flex sm:justify-end items-center gap-1.5">
                    <Phone className="w-3 h-3 text-slate-400" />
                    <span>{profileData.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
                Professional Profile
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed">
                Aspiring Junior Accountant currently pursuing BBA with a focus on Accounting and Business Studies. Possesses 9 months of hands-on experience as Showroom In-Charge at Rainbow Paints (PRAN-RFL Group), managing daily counter cash, petty cash reconciliation, physical inventory verification, and invoicing. Trained in computerized accounting via Tally Prime and Advanced Microsoft Excel. Experienced in developing prompt-driven software prototypes for financial tracking and workflow automation.
              </p>
            </div>

            {/* Work Experience */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5 font-mono flex items-center justify-between">
                <span>Professional Experience</span>
                <span className="text-[10px] font-normal text-slate-500 font-sans">Full-time Operations</span>
              </h2>

              {experienceData.map((exp) => (
                <div key={exp.company} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-900">{exp.role}</span>
                      <span className="text-slate-700"> — {exp.company} ({exp.parentGroup})</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-600">{exp.period} ({exp.duration})</span>
                  </div>

                  <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-700">
                    {exp.responsibilities.map((r) => (
                      <li key={r.title}>
                        <strong className="text-slate-900">{r.title}:</strong> {r.description}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Academic Education */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
                Education
              </h2>

              <div className="space-y-2">
                {educationData.map((edu) => (
                  <div key={edu.degree} className="text-xs">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-slate-900">{edu.degree}</span>
                      <span className="text-[11px] font-mono text-slate-600">{edu.period}</span>
                    </div>
                    <div className="text-[11px] text-slate-600">
                      {edu.institution} · <span className="text-slate-800">Focus: {edu.focus}</span> ({edu.status})
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Training & Civic Duty */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
                Professional Training & Discipline
              </h2>

              <div className="space-y-2.5 text-xs">
                <div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900">{trainingData[0].title}</span>
                    <span className="text-[11px] font-mono text-slate-600">As-Sunnah SDI</span>
                  </div>
                  <p className="text-[11px] text-slate-700 mt-0.5">
                    Modules: Practical Bookkeeping, Tally Prime (Vouchers & Ledgers), Advanced Excel (VLOOKUP, Pivot, Validation), Commercial Documentation (Requisition, RFQ, Comparative Statements, Purchase Orders).
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900">{trainingData[1].title}</span>
                    <span className="text-[11px] font-mono text-slate-600">Civic Duty & Security</span>
                  </div>
                  <p className="text-[11px] text-slate-700 mt-0.5">
                    Field discipline, crisis management, physical security, teamwork, and high ethical accountability.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Competencies Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
                Core Competencies
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-[11px] text-slate-700">
                <div>
                  <strong className="text-slate-900">Accounting:</strong> Double-Entry, General Ledger, Cash Reconciliation, Petty Cash, Trial Balance.
                </div>
                <div>
                  <strong className="text-slate-900">Software:</strong> Tally Prime, Microsoft Excel (VLOOKUP, Pivot, Validation), MS Word.
                </div>
                <div>
                  <strong className="text-slate-900">Retail Operations:</strong> Showroom Management, Stock Verification, Billing & PO Processing.
                </div>
                <div>
                  <strong className="text-slate-900">Technology & AI:</strong> Generative AI Prompting, App & Web Prototyping, Workflow Automation.
                </div>
              </div>
            </div>

            {/* Verification Watermark */}
            <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Verified Candidate Profile · Md. Hasnain</span>
              <span>Available for On-site (Dhaka) & Remote</span>
            </div>

          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="px-4 py-3 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
            <span>Ready for corporate HR review and interview consideration</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/uc?export=download&id=1mrGTmbCLuHWG_OojdffxSmclmGDbFq8C"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official PDF</span>
            </a>
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
