import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'modern-expense-tracker',
    title: 'Modern Expense & Finance Tracker',
    badge: 'Featured · AI-Assisted Personal Project',
    type: 'Native Android Mobile Application',
    role: 'Product Concept · Prompt Architecture · QA Testing',
    techStack: ['Kotlin', 'Jetpack Compose', 'Room / SQLite', 'Material 3'],
    isFeatured: true,
    category: 'mobile',
    sourceFileStatus: 'Verified from project architecture source files',
    overview: 'A native Android mobile application designed to simplify personal financial tracking, categorized budget controls, and informal debt records through a structured local-first database.',
    problem: 'Managing fragmented daily expenses, budgets, and informal debts can become difficult when records are scattered across paper slips or unstructured digital notes, leading to cash flow discrepancies.',
    approach: 'Leveraged prompt-driven software architecture to translate accounting principles (double-entry logic, debit/credit tracking, categorized accounts) into a reactive Android architecture with Room database persistence.',
    keyFeatures: [
      'Balance & cashflow overview with instant net balance calculation',
      'Income and expense tracking with multi-category classification',
      'Category-wise budgets with configurable spending alerts',
      'Financial analytics with spending trend visualization',
      'Loan and informal debt tracking with counterparty status',
      'Local/offline database architecture ensuring private storage'
    ],
    whatILearned: 'Gained practical insight into translating bookkeeping rules into data schemas, testing state changes across asynchronous local databases, and utilizing AI-assisted coding to accelerate UI development.',
    screenshots: [
      { token: '[EXPENSE_TRACKER_SCREEN_01]', caption: 'Main Dashboard & Net Balance Overview', aspectRatio: '9:16' },
      { token: '[EXPENSE_TRACKER_SCREEN_02]', caption: 'Income & Expense Categorized Entry Sheet', aspectRatio: '9:16' },
      { token: '[EXPENSE_TRACKER_SCREEN_03]', caption: 'Monthly Category Budgets & Alert Thresholds', aspectRatio: '9:16' },
      { token: '[EXPENSE_TRACKER_SCREEN_04]', caption: 'Spending Analytics & Cashflow Visual Charts', aspectRatio: '9:16' },
      { token: '[EXPENSE_TRACKER_SCREEN_05]', caption: 'Informal Debt & Receivable Ledger', aspectRatio: '9:16' }
    ]
  },
  {
    id: 'local-coffee-bakery',
    title: 'Local Coffee Shop & Bakery Platform',
    badge: 'Web Project',
    type: 'Responsive Commercial Web Platform / Personal Build',
    role: 'UI/UX Structuring · Front-End Setup · Menu Architecture · Ordering Workflow',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'web',
    sourceFileStatus: 'Verified from web project repository',
    overview: 'A modern responsive storefront concept crafted for a neighborhood coffee and bakery business, supporting menu exploration, price transparency, and seamless messaging-based order fulfillment.',
    problem: 'Small retail food businesses frequently lack an affordable, clean digital storefront with clear category pricing and direct customer ordering channels without heavy third-party marketplace commissions.',
    approach: 'Structured a lightweight web app with responsive menu catalogs, dynamic category filtering, baked-in operational details (opening hours, location), and a one-click WhatsApp order dispatch integration.',
    keyFeatures: [
      'Responsive landing page optimized for fast mobile and desktop browsing',
      'Dynamic menu presentation with category segregation and pricing',
      'Business information panel with operating hours and location data',
      'Direct WhatsApp ordering workflow with auto-formatted item list',
      'Visual product gallery showcasing daily fresh bakery selections'
    ],
    whatILearned: 'Deepened practical knowledge of responsive web layout design, customer-facing retail menu architectures, and frictionless mobile ordering workflows.',
    screenshots: [
      { token: '[COFFEE_WEBSITE_SCREEN_01]', caption: 'Hero Section & Featured Specialties', aspectRatio: '16:9' },
      { token: '[COFFEE_WEBSITE_SCREEN_02]', caption: 'Interactive Bakery & Coffee Menu with Pricing', aspectRatio: '16:9' },
      { token: '[COFFEE_WEBSITE_SCREEN_03]', caption: 'Mobile WhatsApp Direct Ordering Sheet', aspectRatio: '16:9' },
      { token: '[COFFEE_WEBSITE_SCREEN_04]', caption: 'Location, Operating Hours & Store Gallery', aspectRatio: '16:9' }
    ]
  },
  {
    id: 'family-expense-hub',
    title: 'Family Expense Hub',
    badge: 'Supporting Digital Project',
    type: 'Android Household Finance Application',
    role: 'Concept Design · Data Schema · UI Testing',
    techStack: ['Kotlin', 'Jetpack Compose', 'SQLite', 'Material Design'],
    category: 'mobile',
    sourceFileStatus: 'Verified from local Android build repository',
    overview: 'An Android utility focused on collaborative household budget tracking, multi-member contribution recording, and monthly grocery/utility expense oversight.',
    problem: 'Multiple household members spending on joint utilities and groceries often struggle to settle shared bills or track who paid for what at month-end.',
    approach: 'Modeled a multi-member account structure where each transaction is assigned to a contributor, computing net balance claims and monthly family spending breakdowns.',
    keyFeatures: [
      'Household dashboard displaying cumulative monthly spend',
      'Multi-member expenditure logging with quick contribution tags',
      'Category-based monthly budgets (Groceries, Utilities, Healthcare)',
      'Summary reports with exportable monthly statements',
      'Offline-first local database for dependable performance'
    ],
    whatILearned: 'Practical understanding of multi-party financial reconciliation, account consolidation, and clean data modeling for shared expenditures.',
    screenshots: [
      { token: '[FAMILY_EXPENSE_SCREEN_01]', caption: 'Household Central Spending Dashboard', aspectRatio: '9:16' },
      { token: '[FAMILY_EXPENSE_SCREEN_02]', caption: 'Multi-Member Contribution Log', aspectRatio: '9:16' },
      { token: '[FAMILY_EXPENSE_SCREEN_03]', caption: 'Monthly Utilities Breakdown & Settlement View', aspectRatio: '9:16' }
    ]
  },
  {
    id: 'smartteach-ai',
    title: 'SmartTeach AI',
    badge: 'AI Web Project',
    type: 'Bilingual Educational Web Application',
    role: 'AI Prompt Engineering · Frontend Prototyping',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API Integration'],
    category: 'ai',
    sourceFileStatus: 'Verified with Gemini API Integration architecture',
    overview: 'An educational assistance tool tailored for bilingual curriculum workflows, assisting educators in lesson preparation, automated quiz compilation, and assessment diagnostics.',
    problem: 'Educators often spend substantial manual hours structuring lesson outlines, formatting quizzes, and generating evaluation rubrics across dual languages.',
    approach: 'Integrated the Gemini API with structured prompt templates and response schemas to generate bilingual pedagogical materials, stored in a responsive web workspace.',
    keyFeatures: [
      'Gemini API Integration for fast, context-aware curriculum generation',
      'Structured bilingual lesson planning module (English & Bengali)',
      'Automated quiz generation with multiple question formats',
      'Student diagnostics dashboard with assessment criteria',
      'Saved content repository for quick classroom retrieval'
    ],
    whatILearned: 'Hands-on experience configuring Google GenAI API client workflows, structured prompt engineering, and building responsive UI layers around AI outputs.',
    screenshots: [
      { token: '[SMARTTEACH_SCREEN_01]', caption: 'Teacher Workspace & Lesson Generator', aspectRatio: '16:9' },
      { token: '[SMARTTEACH_SCREEN_02]', caption: 'Bilingual Quiz Builder with Answer Keys', aspectRatio: '16:9' },
      { token: '[SMARTTEACH_SCREEN_03]', caption: 'Diagnostic Assessment Criteria Dashboard', aspectRatio: '16:9' },
      { token: '[SMARTTEACH_SCREEN_04]', caption: 'Curriculum Resource Library & Exports', aspectRatio: '16:9' }
    ]
  },
  {
    id: 'muslim-life',
    title: 'Muslim Life',
    badge: 'Additional Digital Work',
    type: 'Mobile Application Prototype / Lifestyle',
    role: 'UI Design & Feature Prototyping',
    techStack: ['Android / Kotlin UI', 'Local Storage', 'Material 3'],
    category: 'mobile',
    sourceFileStatus: 'Verified personal prototype build',
    overview: 'An independent digital build created as part of exploring mobile interface ergonomics, prayer schedule calculation engines, and clean daily habit tracking.',
    problem: 'Providing an uncluttered, ad-free daily lifestyle companion focused on accurate timing, Quranic reading progress, and daily remembrance reminders.',
    approach: 'Built a calm, clean mobile layout adhering to Material 3 design tokens with minimal battery footprint and offline calculation logic.',
    keyFeatures: [
      'Offline calculation of daily schedule times based on geographical coordinates',
      'Daily habit checklist with progress indicators',
      'Clean typography-first reading view with customizable sizing',
      'Light and dark mode support with restrained spiritual aesthetics'
    ],
    whatILearned: 'Reinforced mobile UI/UX ergonomics, component modularity, and state persistence across application sessions.',
    screenshots: [
      { token: '[MUSLIM_LIFE_SCREEN_01]', caption: 'Daily Timeline & Schedule View', aspectRatio: '9:16' },
      { token: '[MUSLIM_LIFE_SCREEN_02]', caption: 'Habit Checklist & Progress Tracker', aspectRatio: '9:16' },
      { token: '[MUSLIM_LIFE_SCREEN_03]', caption: 'Typography-First Reading Interface', aspectRatio: '9:16' }
    ]
  }
];
