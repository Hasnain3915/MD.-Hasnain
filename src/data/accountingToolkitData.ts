import { AccountingAsset } from '../types';

export const accountingToolkitData: AccountingAsset[] = [
  {
    id: 'cash-reconciliation',
    title: 'Daily Cash Reconciliation Model',
    subtitle: 'Showroom Cash Balance & Settlement System',
    token: '[CASH_RECONCILIATION_SCREEN]',
    description: 'Structured spreadsheet model designed to verify daily physical cash balances against registered drawer sales, cashless collections (bKash/Nagad/Cards), and approved petty cash payouts.',
    components: [
      'Opening Cash Drawer Balance',
      'Daily Cash Inflows (Gross Counter Sales)',
      'Digital / MFS Collections (bKash, Nagad, POS Terminals)',
      'Petty Cash Vouchers & Deductions',
      'Physical Currency Denomination Breakup',
      'Net Closing Balance & Bank Deposit Summary'
    ],
    relevance: 'Demonstrates strict cash handling discipline cultivated during 9 months as Showroom In-Charge at Rainbow Paints (PRAN-RFL Group).'
  },
  {
    id: 'inventory-dashboard',
    title: 'Inventory Balance & Reorder Dashboard',
    subtitle: 'Dynamic Stock Level & Reorder Warning System',
    token: '[INVENTORY_DASHBOARD_SCREEN]',
    description: 'Operational tracking dashboard utilizing Excel formulas (SUMIFS, MIN, VLOOKUP, Conditional Formatting) to monitor stock-out thresholds, safety buffers, and vendor delivery lead times.',
    components: [
      'SKU-wise Opening Stock & Received Stock Tracking',
      'Minimum Safety Stock & Critical Reorder Points',
      'Lead-time Monitoring & Delayed Shipment Flags',
      'Physical vs System Variance Audit Sheet',
      'Replenishment Requisition Generator'
    ],
    relevance: 'Directly applicable to multi-SKU retail inventory management, physical audits, and supplier coordination.'
  },
  {
    id: 'tally-workflow',
    title: 'Tally Prime Workflow Demonstration',
    subtitle: 'Standard Voucher Recording & Ledger Generation',
    token: '[TALLY_SCREEN]',
    description: 'Practical walkthrough and simulation of core accounting transactions in Tally Prime, ensuring adherence to double-entry rules and statutory reporting readiness.',
    components: [
      'Payment Voucher (F5) for Vendor & Overhead Expenses',
      'Receipt Voucher (F6) for Counter Collections & Receivables',
      'Contra Voucher (F4) for Cash-to-Bank / Bank-to-Cash Transfers',
      'Journal Voucher (F7) for Accruals & Depreciation Entries',
      'Sales (F8) & Purchase (F9) Invoice Ledgers',
      'Automated Trial Balance & Balance Sheet Generation'
    ],
    relevance: 'Reflects comprehensive hands-on training completed at As-Sunnah Skill Development Institute (SBMC).'
  },
  {
    id: 'documentation-pack',
    title: 'Commercial Documentation Pack',
    subtitle: 'Standardized Corporate Procurement & Sales Suite',
    token: '[BUSINESS_DOCUMENT_SCREEN]',
    description: 'Professional suite of standard business transaction templates built for audit-ready commercial documentation, vendor negotiation, and purchase management.',
    components: [
      'Internal Material Requisition Form',
      'Formal Vendor Request for Quotation (RFQ)',
      'Three-Vendor Comparative Analysis Statement',
      'Approved Commercial Purchase Order (PO)',
      'Formal Vendor Work Order',
      'Commercial Tax Invoice & Receipt Voucher'
    ],
    relevance: 'Ensures compliance with formal corporate procurement workflows and accounting documentation standards.'
  }
];
