import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: 'accounting',
    name: 'Accounting & Bookkeeping',
    description: 'Foundational accounting principles, commercial recording, and reconciliations',
    skills: [
      'Practical Accounting',
      'Double-Entry Bookkeeping',
      'General Ledger',
      'Trial Balance',
      'Cash Reconciliation',
      'Expense Tracking',
      'Petty Cash',
      'Basic Financial Analysis'
    ]
  },
  {
    id: 'operations',
    name: 'Retail Operations',
    description: 'Practical showroom handling, inventory audits, and store documentation',
    skills: [
      'Showroom Operations',
      'Inventory Control',
      'Stock Auditing',
      'Reorder Monitoring',
      'Customer Billing',
      'Requisition Forms',
      'Purchase Orders',
      'Comparative Statements',
      'Quotation Preparation'
    ]
  },
  {
    id: 'software',
    name: 'Software & Productivity',
    description: 'Standard office and specialized accounting software tools',
    skills: [
      'Tally Prime',
      'Microsoft Excel',
      'VLOOKUP',
      'Pivot Tables',
      'Conditional Formatting',
      'Data Validation',
      'MS Word',
      'MS PowerPoint'
    ]
  },
  {
    id: 'technology',
    name: 'Technology & AI',
    description: 'Modern prompt workflows, prototyping, and automated operations',
    skills: [
      'Generative AI Prompting',
      'AI-Assisted Development',
      'App Prototyping',
      'Web Prototyping',
      'Workflow Automation',
      'Digital Productivity',
      'Web Research'
    ]
  },
  {
    id: 'values',
    name: 'Professional Values',
    description: 'Work ethic, accountability, and disciplined field experience',
    skills: [
      'Operational Discipline',
      'Ethical Accountability',
      'Crisis Management',
      'Teamwork',
      'Professional Communication',
      'Foundational English'
    ]
  }
];

export const valuePillars = [
  {
    id: 'pillar-1',
    title: 'Accounting Foundation',
    badge: 'Core Competency',
    description: 'Rigorous application of double-entry rules, ledger tracking, and documentation integrity.',
    items: [
      'Double-entry bookkeeping',
      'General ledger & trial balance',
      'Cash tracking & petty cash reconciliation',
      'Expense classification',
      'Commercial documentation'
    ]
  },
  {
    id: 'pillar-2',
    title: 'Retail Operations Reality',
    badge: 'Practical Experience',
    description: 'Real-world showroom discipline managing fast daily cash, high-SKU inventory, and retail customers.',
    items: [
      'Showroom operations & cash handling',
      'Inventory control & physical stock verification',
      'Stock replenishment & lead-time monitoring',
      'Customer billing & sales summary reporting',
      'Store coordination & supplier linkage'
    ]
  },
  {
    id: 'pillar-3',
    title: 'Technology & Automation Mindset',
    badge: 'Modern Advantage',
    description: 'Leveraging digital tools and AI-assisted workflows to accelerate manual bookkeeping and analysis.',
    items: [
      'Microsoft Excel (Pivot, VLOOKUP, Validation)',
      'Tally Prime entries & report generation',
      'Generative AI tools & prompt engineering',
      'App & web prototyping for business workflows',
      'Digital productivity & automation'
    ]
  }
];
