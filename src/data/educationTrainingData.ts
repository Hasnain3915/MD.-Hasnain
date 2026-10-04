import { EducationItem, TrainingItem } from '../types';

export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Business Administration (BBA)',
    institution: 'Bangladesh Open University (Regional Center: Dhaka)',
    focus: 'Business Administration / Accounting',
    period: '2024/2025 — Expected 2028/2029',
    status: 'Ongoing / Appeared',
    details: [
      'Focusing on Financial Accounting, Managerial Accounting, Business Mathematics, and Principles of Finance',
      'Regional Center: Dhaka · Flexible structure enabling hands-on showroom operations and financial work'
    ]
  },
  {
    degree: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'Dular Hat Adarsha Degree College',
    focus: 'Science Stream (GPA 4.75 / 5.00)',
    period: 'Passing Year: 2023',
    status: 'Completed (GPA 4.75)',
    details: [
      'Graduated with distinction (GPA 4.75 / 5.00) in Science curriculum',
      'Strong quantitative, analytical, and logical problem-solving foundation'
    ]
  },
  {
    degree: 'Secondary School Certificate (SSC) — Science',
    institution: 'Ahammedpur Secondary School And College',
    focus: 'Science Stream (GPA 4.11 / 5.00)',
    period: 'Passing Year: 2021',
    status: 'Completed (GPA 4.11)',
    details: [
      'Graduated in Science curriculum with GPA 4.11 / 5.00'
    ]
  }
];

export const trainingData: TrainingItem[] = [
  {
    title: 'Small Business Management Course (SBMC)',
    institution: 'As-Sunnah Skill Development Institute (Dhaka North)',
    note: 'Practical accounting, computerized finance, MS Office, AI tools, and professional ethics (3-Month, 2026).',
    modules: [
      'Practical Corporate Accounting & Financial Basics',
      'Tally Prime Software (Vouchers, Ledgers, Trial Balance & Statements)',
      'Microsoft Office Suite (Advanced Excel, Word, PowerPoint)',
      'Generative AI Tools & Digital Financial Productivity',
      'Practical English & Business Communication Skills',
      'Leadership Quality Management, Islamic Ethics & Commercial Law'
    ],
    documentationExposure: [
      'Requisition Forms',
      'Quotations & RFQs',
      'Comparative Statements (CS)',
      'Purchase Orders (PO)',
      'Work Orders (WO)',
      'Commercial Tax Invoices'
    ]
  },
  {
    title: 'Bangladesh Ansar & VDP Civic & Security Duty',
    institution: 'District Ansar & VDP Office, Bhola',
    note: 'National election duty, crowd control, tactical patrol, and high ethical accountability (2025).',
    modules: [
      'National Election Duty & High-Security Protocol',
      'Vital Installation Guarding & Tactical Crowd Control',
      'Chain-of-command discipline, ethical conduct & integrity',
      'First Aid, Emergency Response & Disaster Rescue Operations',
      'Physical fitness, parade drills, and teamwork under pressure'
    ]
  }
];
