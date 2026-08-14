export default function BankPage() {
  const transactions = [
    { date: "2026-08-12", description: "ACH Deposit - Customer Payments", amount: 12450.00, status: "Categorized", account: "1000 - Cash" },
    { date: "2026-08-11", description: "Wire Transfer - Equipment Purchase", amount: -8750.00, status: "Needs Review", account: "—" },
    { date: "2026-08-10", description: "Payroll - Biweekly", amount: -18640.00, status: "Categorized", account: "6100 - Payroll" },
    { date: "2026-08-09", description: "Vendor Payment - Industrial Supplies", amount: -3240.50, status: "Categorized", account: "2000 - A/P" },
    { date: "2026-08-08", description: "Stripe Payout", amount: 6830.25, status: "Categorized", account: "1000 - Cash" },
    { date: "2026-08-07", description: "Utility Payment - Electric", amount: -1240.00, status: "Needs Review", account: "—" },
    { date: "2026-08-06", description: "Customer Check Deposit", amount: 4500.00, status: "Categorized", account: "1000 - Cash" },
    { date: "2026-08-05", description: "Software Subscription - Annual", amount: -2400.00, status: "Categorized", account: "6000 - OpEx" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Bank Transactions</h1>
          <p className="text-slate-600 text-sm mt-1">Connected accounts • AI categorization</p>
        </div>
        <div className="flex gap-2">
          <button className="border border-slate-300 bg-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50">
            Sync Feeds
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
            + Manual Transaction
          </button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">Uncategorized</div>
          <div className="text-xl font-bold text-amber-600">2</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">This Month Inflows</div>
          <div className="text-xl font-bold text-emerald-600">$23,780</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">This Month Outflows</div>
          <div className="text-xl font-bold text-slate-900">$34,270</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Date</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Description</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Account</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Status</th>
              <th className="text-right px-4 py-3 font-medium text-slate-600">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-3 text-slate-600">{tx.date}</td>
                <td className="px-4 py-3 text-slate-900">{tx.description}</td>
                <td className="px-4 py-3 text-slate-600">{tx.account}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                    tx.status === "Categorized" 
                      ? "bg-emerald-50 text-emerald-700" 
                      : "bg-amber-50 text-amber-700"
                  }`}>
                    {tx.status}
                  </span>
                </td>
                <td className={`px-4 py-3 text-right font-medium ${tx.amount < 0 ? "text-red-600" : "text-emerald-600"}`}>
                  {tx.amount < 0 ? "-" : "+"}${Math.abs(tx.amount).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
