export default function InvoicesPage() {
  const invoices = [
    { number: "INV-1048", customer: "Acme Manufacturing", date: "2026-08-10", due: "2026-09-09", amount: 12400.00, status: "Open" },
    { number: "INV-1047", customer: "Midwest Fabricators", date: "2026-08-05", due: "2026-09-04", amount: 8750.00, status: "Open" },
    { number: "INV-1046", customer: "Precision Parts LLC", date: "2026-07-28", due: "2026-08-27", amount: 15620.00, status: "Paid" },
    { number: "INV-1045", customer: "SteelWorks Inc", date: "2026-07-22", due: "2026-08-21", amount: 9340.00, status: "Overdue" },
    { number: "INV-1044", customer: "Northern Metals", date: "2026-07-15", due: "2026-08-14", amount: 22100.00, status: "Paid" },
    { number: "INV-1043", customer: "Acme Manufacturing", date: "2026-07-08", due: "2026-08-07", amount: 6800.00, status: "Paid" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Invoices</h1>
          <p className="text-slate-600 text-sm mt-1">Accounts Receivable</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          + New Invoice
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">Open</div>
          <div className="text-xl font-bold text-slate-900">$21,150</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">Overdue</div>
          <div className="text-xl font-bold text-red-600">$9,340</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">Paid (30 days)</div>
          <div className="text-xl font-bold text-emerald-600">$44,520</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">Total Outstanding</div>
          <div className="text-xl font-bold text-slate-900">$30,490</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Invoice #</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Customer</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Date</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Due Date</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Status</th>
              <th className="text-right px-4 py-3 font-medium text-slate-600">Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.number} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-blue-600">{inv.number}</td>
                <td className="px-4 py-3 text-slate-900">{inv.customer}</td>
                <td className="px-4 py-3 text-slate-600">{inv.date}</td>
                <td className="px-4 py-3 text-slate-600">{inv.due}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                    inv.status === "Paid" ? "bg-emerald-50 text-emerald-700" :
                    inv.status === "Overdue" ? "bg-red-50 text-red-700" :
                    "bg-blue-50 text-blue-700"
                  }`}>
                    {inv.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right font-medium">
                  ${inv.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
