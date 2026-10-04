import React, { useState } from 'react';
import { Calculator, BarChart3, Database, FileText, CheckCircle2, Eye, Table2, Layers, Sparkles } from 'lucide-react';

export const AccountingAssets: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cash' | 'inventory' | 'tally' | 'docs'>('cash');

  const tabs = [
    { id: 'cash' as const, label: 'Daily Cash Reconciliation', icon: Calculator },
    { id: 'inventory' as const, label: 'Inventory & Reorder Dashboard', icon: BarChart3 },
    { id: 'tally' as const, label: 'Tally Prime Workflow', icon: Database },
    { id: 'docs' as const, label: 'Commercial Document Suite', icon: FileText }
  ];

  return (
    <section id="toolkit" className="py-16 md:py-20 border-b border-white/10 dark:border-white/10 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hard Skills Evidence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 mt-1 font-sans">
            Practical Accounting Toolkit
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 max-w-2xl leading-relaxed font-normal">
            Interactive spreadsheet models, inventory formulas, and computerized accounting workflows practiced in showroom and corporate training.
          </p>
        </div>

        {/* Tab Switcher Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] max-w-fit">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white light:text-slate-600 light:hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display (Bento Master Viewport) */}
        <div className="rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/85 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden card-shine hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all duration-300">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
          
          {/* TAB 1: CASH RECONCILIATION */}
          {activeTab === 'cash' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] dark:border-white/[0.08] light:border-slate-200">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                    Model 01 · Excel Formula Template
                  </span>
                  <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mt-1 font-sans">
                    Daily Cash Reconciliation Model
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 max-w-2xl font-normal">
                    Excel model cross-verifying opening cash drawer balances, gross counter sales, digital payments (bKash/Nagad/Cards), petty cash payouts, and closing balance.
                  </p>
                </div>
                <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-cyan-950/60 text-cyan-300 border border-cyan-800/40 shrink-0">
                  Formula: Closing = Opening + Inflows - Petty Cash - MFS
                </span>
              </div>

              {/* Simulated Interactive Spreadsheet Grid */}
              <div className="overflow-x-auto rounded-2xl border border-white/10 dark:border-white/10 light:border-slate-200 bg-[#0B0F19]/80">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-white/5 border-b border-white/10 text-slate-400">
                    <tr>
                      <th className="py-3 px-4">Line Item / Ledger Category</th>
                      <th className="py-3 px-4">Formula / Methodology</th>
                      <th className="py-3 px-4">Verification Check</th>
                      <th className="py-3 px-4 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">Opening Cash Drawer</td>
                      <td className="py-3 px-4 text-slate-400">Fixed float carryover</td>
                      <td className="py-3 px-4 text-slate-400">Physical count verification</td>
                      <td className="py-3 px-4 text-right text-emerald-400">Matched</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">Daily Cash Counter Sales</td>
                      <td className="py-3 px-4 text-slate-400">=SUM(Invoice_Cash_Total)</td>
                      <td className="py-3 px-4 text-slate-400">Cross-verified against POS Register</td>
                      <td className="py-3 px-4 text-right text-emerald-400">Verified</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">Card & MFS Collections</td>
                      <td className="py-3 px-4 text-slate-400">=SUM(bKash + Nagad + POS_Slip)</td>
                      <td className="py-3 px-4 text-slate-400">Merchant settlement statement</td>
                      <td className="py-3 px-4 text-right text-emerald-400">Reconciled</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">Petty Cash Vouchers</td>
                      <td className="py-3 px-4 text-slate-400">=SUM(Approved_Vouchers)</td>
                      <td className="py-3 px-4 text-slate-400">Physical receipt attached & signed</td>
                      <td className="py-3 px-4 text-right text-emerald-400">Approved</td>
                    </tr>
                    <tr className="bg-emerald-950/20 font-bold text-emerald-300">
                      <td className="py-3 px-4">Net Physical Cash Closing</td>
                      <td className="py-3 px-4">=Opening + Cash_Sales - Petty_Cash</td>
                      <td className="py-3 px-4">Zero Variance = Physical Drawer Match</td>
                      <td className="py-3 px-4 text-right text-emerald-400 font-bold">0.00 Variance</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <span className="text-slate-400 block mb-1">Operational Provenance</span>
                  <strong className="text-white">Rainbow Paints Showroom</strong>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <span className="text-slate-400 block mb-1">Spreadsheet Engine</span>
                  <strong className="text-white">MS Excel + Automated Macros</strong>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <span className="text-slate-400 block mb-1">Audit Record</span>
                  <strong className="text-emerald-400">Zero Discrepancy Achieved</strong>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INVENTORY & REORDER DASHBOARD */}
          {activeTab === 'inventory' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 dark:border-white/10 light:border-slate-200">
                <div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                    Model 02 · Dynamic Operations Model
                  </span>
                  <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mt-1">
                    Inventory Balance & Reorder Dashboard
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mt-1 max-w-2xl">
                    Dynamic spreadsheet calculating safety stock buffers, lead-time thresholds, and auto-flagging replenishment triggers for finished paints and raw materials.
                  </p>
                </div>
                <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-emerald-950/60 text-emerald-300 border border-emerald-800/40 shrink-0">
                  Lead Time & Stockout Protection
                </span>
              </div>

              {/* Simulated Inventory Grid */}
              <div className="overflow-x-auto rounded-2xl border border-white/10 dark:border-white/10 light:border-slate-200 bg-[#0B0F19]/80">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-white/5 border-b border-white/10 text-slate-400">
                    <tr>
                      <th className="py-3 px-4">SKU / Material Code</th>
                      <th className="py-3 px-4">Current Stock</th>
                      <th className="py-3 px-4">Safety Minimum</th>
                      <th className="py-3 px-4">Lead Time (Days)</th>
                      <th className="py-3 px-4 text-right">Reorder Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">RP-EXT-WHT-20L (Exterior White)</td>
                      <td className="py-3 px-4">42 Units</td>
                      <td className="py-3 px-4 text-slate-400">20 Units</td>
                      <td className="py-3 px-4 text-slate-400">3 Days</td>
                      <td className="py-3 px-4 text-right text-emerald-400">Sufficient</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">RP-PRM-ECO-10L (Primer Base)</td>
                      <td className="py-3 px-4 text-amber-400 font-bold">14 Units</td>
                      <td className="py-3 px-4 text-slate-400">15 Units</td>
                      <td className="py-3 px-4 text-slate-400">4 Days</td>
                      <td className="py-3 px-4 text-right text-amber-400 font-bold">Reorder Triggered</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">RP-SYN-RED-04L (Synthetic Red)</td>
                      <td className="py-3 px-4">30 Units</td>
                      <td className="py-3 px-4 text-slate-400">10 Units</td>
                      <td className="py-3 px-4 text-slate-400">3 Days</td>
                      <td className="py-3 px-4 text-right text-emerald-400">Sufficient</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">RP-THN-IND-05L (Thinner Solvent)</td>
                      <td className="py-3 px-4 text-red-400 font-bold">6 Units</td>
                      <td className="py-3 px-4 text-slate-400">12 Units</td>
                      <td className="py-3 px-4 text-slate-400">2 Days</td>
                      <td className="py-3 px-4 text-right text-red-400 font-bold">Critical Low</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block mb-1">Inventory Management Logic:</strong>
                Conditional formatting rules highlight SKUs below reorder thresholds, automatically compiling factory requisition quantities based on historical sales velocity and supplier lead-time buffers.
              </div>
            </div>
          )}

          {/* TAB 3: TALLY PRIME WORKFLOW */}
          {activeTab === 'tally' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 dark:border-white/10 light:border-slate-200">
                <div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                    Model 03 · Computerized Accounting
                  </span>
                  <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mt-1">
                    Tally Prime Transaction Workflow
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mt-1 max-w-2xl">
                    Standardized voucher input procedures ensuring accurate debit/credit postings, ledger segregation, and automated statutory financial reports.
                  </p>
                </div>
                <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-emerald-950/60 text-emerald-300 border border-emerald-800/40 shrink-0">
                  As-Sunnah Institute SBMC
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#0B0F19]/80 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-emerald-400">F4 · Contra Voucher</span>
                    <span className="text-[10px] font-mono text-slate-500">Internal</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Cash deposits into bank account and counter cash withdrawals from bank.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0B0F19]/80 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-emerald-400">F5 · Payment Voucher</span>
                    <span className="text-[10px] font-mono text-slate-500">Disbursement</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Vendor bill settlements, petty cash overhead disbursements, and freight expenses.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0B0F19]/80 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-emerald-400">F6 · Receipt Voucher</span>
                    <span className="text-[10px] font-mono text-slate-500">Collections</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Customer account settlements, cash sales collections, and debtor receipts.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0B0F19]/80 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-emerald-400">F7 · Journal Voucher</span>
                    <span className="text-[10px] font-mono text-slate-500">Adjustment</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Non-cash adjustments, depreciation postings, and month-end expense accruals.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0B0F19]/80 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-emerald-400">F8 · Sales Voucher</span>
                    <span className="text-[10px] font-mono text-slate-500">Revenue</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Credit sales invoices, customer ledgers, and VAT/tax output recording.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0B0F19]/80 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-emerald-400">F9 · Purchase Voucher</span>
                    <span className="text-[10px] font-mono text-slate-500">Procurement</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Inventory acquisitions, vendor tax invoices, and accounts payable logging.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/30 text-xs text-slate-300 flex items-center justify-between">
                <span><strong>Report Generation:</strong> Automated Trial Balance, Profit & Loss, and Balance Sheet generation.</span>
                <span className="font-mono text-emerald-400">Full Audit Trail</span>
              </div>
            </div>
          )}

          {/* TAB 4: COMMERCIAL DOCUMENT SUITE */}
          {activeTab === 'docs' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 dark:border-white/10 light:border-slate-200">
                <div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                    Model 04 · Procurement & Sales Documentation
                  </span>
                  <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mt-1">
                    Commercial Document Suite
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mt-1 max-w-2xl">
                    Standardized corporate procurement and commercial documentation formats practiced at As-Sunnah Skill Development Institute.
                  </p>
                </div>
                <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-emerald-950/60 text-emerald-300 border border-emerald-800/40 shrink-0">
                  Audit-Ready Procurement
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#0B0F19]/80 border border-white/10">
                  <h4 className="font-bold text-white text-sm mb-1">1. Requisition Form</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Internal department material requirement draft detailing SKU descriptions, stock buffer status, and required dates.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0B0F19]/80 border border-white/10">
                  <h4 className="font-bold text-white text-sm mb-1">2. Request for Quotation (RFQ)</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Formal tender inquiry sent to registered vendors for price bids, delivery terms, and warranty specifications.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0B0F19]/80 border border-white/10">
                  <h4 className="font-bold text-white text-sm mb-1">3. Comparative Statement (CS)</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Three-vendor comparison matrix analyzing unit prices, payment credit windows, transport costs, and delivery speed.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0B0F19]/80 border border-white/10">
                  <h4 className="font-bold text-white text-sm mb-1">4. Purchase Order (PO)</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Legally binding commercial order issued to the winning supplier containing specifications, delivery schedules, and penalties.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0B0F19]/80 border border-white/10">
                  <h4 className="font-bold text-white text-sm mb-1">5. Work Order (WO)</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Contractual scope-of-work documentation detailing execution milestones for commercial showroom renovations and logistics.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0B0F19]/80 border border-white/10">
                  <h4 className="font-bold text-white text-sm mb-1">6. Commercial Tax Invoice</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Final billing instrument with line-item VAT, payment terms, and delivery challan reference for accounts payable clearing.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
                <strong>Documentation Rigor:</strong> Ensures compliance with corporate internal controls and statutory audit expectations.
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
