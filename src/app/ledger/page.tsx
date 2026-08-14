export default function LedgerPage() {
  const accounts = [
    { code: "1000", name: "Cash - Operating", type: "Asset", balance: 142350.00 },
    { code: "1100", name: "Accounts Receivable", type: "Asset", balance: 68420.00 },
    { code: "1200", name: "Inventory", type: "Asset", balance: 95600.00 },
    { code: "2000", name: "Accounts Payable", type: "Liability", balance: -38450.00 },
    { code: "2100", name: "Accrued Expenses", type: "Liability", balance: -12500.00 },
    { code: "3000", name: "Common Stock", type: "Equity", balance: -50000.00 },
    { code: "4000", name: "Sales Revenue", type: "Revenue", balance: -286150.00 },
    { code: "5000", name: "Cost of Goods Sold", type: "Expense", balance: 162300.00 },
    { code: "6000", name: "Operating Expenses", type: "Expense", balance: 78450.00 },
    { code: "6100", name: "Payroll Expense", type: "Expense", balance: 92400.00 },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">General Ledger</h1>
          <p className="text-slate-600 text-sm mt-1">Chart of Accounts • Real-time balances</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          + New Journal Entry
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Code</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Account Name</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Type</th>
              <th className="text-right px-4 py-3 font-medium text-slate-600">Balance</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account.code} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-3 font-mono text-slate-700">{account.code}</td>
                <td className="px-4 py-3 text-slate-900">{account.name}</td>
                <td className="px-4 py-3 text-slate-600">{account.type}</td>
                <td className={`px-4 py-3 text-right font-medium ${account.balance < 0 ? "text-slate-900" : "text-slate-900"}`}>
                  {account.balance < 0
                    ? `($${Math.abs(account.balance).toLocaleString("en-US", { minimumFractionDigits: 2 })})`
                    : `$${account.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
