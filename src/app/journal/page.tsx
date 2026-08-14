"use client";

import { useState } from "react";

type Line = {
  id: number;
  account: string;
  description: string;
  debit: string;
  credit: string;
};

export default function JournalPage() {
  const [date, setDate] = useState("2026-08-13");
  const [memo, setMemo] = useState("");
  const [lines, setLines] = useState<Line[]>([
    { id: 1, account: "", description: "", debit: "", credit: "" },
    { id: 2, account: "", description: "", debit: "", credit: "" },
  ]);

  function addLine() {
    setLines([
      ...lines,
      { id: Date.now(), account: "", description: "", debit: "", credit: "" },
    ]);
  }

  function updateLine(id: number, field: keyof Line, value: string) {
    setLines(lines.map((line) => (line.id === id ? { ...line, [field]: value } : line)));
  }

  function removeLine(id: number) {
    if (lines.length <= 2) return;
    setLines(lines.filter((line) => line.id !== id));
  }

  const totalDebit = lines.reduce((sum, l) => sum + (parseFloat(l.debit) || 0), 0);
  const totalCredit = lines.reduce((sum, l) => sum + (parseFloat(l.credit) || 0), 0);
  const isBalanced = Math.abs(totalDebit - totalCredit) < 0.01 && totalDebit > 0;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Journal Entry</h1>
          <p className="text-slate-600 text-sm mt-1">Create a double-entry journal entry</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        {/* Header fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Memo</label>
            <input
              type="text"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              placeholder="Description of this entry"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Lines */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2 font-medium text-slate-600 w-48">Account</th>
                <th className="text-left py-2 font-medium text-slate-600">Description</th>
                <th className="text-right py-2 font-medium text-slate-600 w-32">Debit</th>
                <th className="text-right py-2 font-medium text-slate-600 w-32">Credit</th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody>
              {lines.map((line) => (
                <tr key={line.id} className="border-b border-slate-100">
                  <td className="py-2 pr-2">
                    <select
                      value={line.account}
                      onChange={(e) => updateLine(line.id, "account", e.target.value)}
                      className="w-full border border-slate-300 rounded-md px-2 py-1.5 text-sm"
                    >
                      <option value="">Select account...</option>
                      <option value="1000">1000 - Cash</option>
                      <option value="1100">1100 - Accounts Receivable</option>
                      <option value="1200">1200 - Inventory</option>
                      <option value="2000">2000 - Accounts Payable</option>
                      <option value="4000">4000 - Sales Revenue</option>
                      <option value="5000">5000 - Cost of Goods Sold</option>
                      <option value="6000">6000 - Operating Expenses</option>
                      <option value="6100">6100 - Payroll Expense</option>
                    </select>
                  </td>
                  <td className="py-2 pr-2">
                    <input
                      type="text"
                      value={line.description}
                      onChange={(e) => updateLine(line.id, "description", e.target.value)}
                      className="w-full border border-slate-300 rounded-md px-2 py-1.5 text-sm"
                      placeholder="Line description"
                    />
                  </td>
                  <td className="py-2 pr-2">
                    <input
                      type="number"
                      value={line.debit}
                      onChange={(e) => updateLine(line.id, "debit", e.target.value)}
                      className="w-full border border-slate-300 rounded-md px-2 py-1.5 text-sm text-right"
                      placeholder="0.00"
                    />
                  </td>
                  <td className="py-2 pr-2">
                    <input
                      type="number"
                      value={line.credit}
                      onChange={(e) => updateLine(line.id, "credit", e.target.value)}
                      className="w-full border border-slate-300 rounded-md px-2 py-1.5 text-sm text-right"
                      placeholder="0.00"
                    />
                  </td>
                  <td className="py-2">
                    <button
                      onClick={() => removeLine(line.id)}
                      className="text-slate-400 hover:text-red-500 text-lg"
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-3">
          <button
            onClick={addLine}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            + Add line
          </button>
        </div>

        {/* Totals */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
          <div className="text-sm">
            <span className="text-slate-600">Totals: </span>
            <span className="font-medium">Debit ${totalDebit.toFixed(2)}</span>
            <span className="mx-2 text-slate-400">|</span>
            <span className="font-medium">Credit ${totalCredit.toFixed(2)}</span>
            {isBalanced ? (
              <span className="ml-3 text-emerald-600 font-medium">✓ Balanced</span>
            ) : (
              <span className="ml-3 text-amber-600 font-medium">Out of balance</span>
            )}
          </div>

          <div className="flex gap-2">
            <button className="border border-slate-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50">
              Cancel
            </button>
            <button
              disabled={!isBalanced}
              className={`px-4 py-2 rounded-lg text-sm font-medium text-white ${
                isBalanced ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-300 cursor-not-allowed"
              }`}
            >
              Post Entry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
