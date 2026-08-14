export default function BillsPage() {
  const bills = [
    { number: "BILL-882", vendor: "Industrial Supplies Co", date: "2026-08-08", due: "2026-09-07", amount: 3850.00, status: "Open" },
    { number: "BILL-881", vendor: "Midwest Tooling", date: "2026-08-03", due: "2026-09-02", amount: 2140.00, status: "Open" },
    { number: "BILL-880", vendor: "Utility Services", date: "2026-07-28", due: "2026-08-27", amount: 1240.00, status: "Paid" },
    { number: "BILL-879", vendor: "Raw Material Partners", date: "2026-07-20", due: "2026-08-19", amount: 15600.00, status: "Overdue" },
    { number: "BILL-878", vendor: "Equipment Lease Co", date: "2026-07-15", due: "2026-08-14", amount: 4200.00, status: "Paid" },
    { number: "BILL-877", vendor: "Software Systems Inc", date: "2026-07-10", due: "2026-08-09", amount: 2400.00, status: "Paid" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Bills</h1>
          <p className="text-slate-600 text-sm mt-1">Accounts Payable</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          + Enter Bill
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">Open</div>
          <div className="text-xl font-bold text-slate-900">$5,990</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">Overdue</div>
          <div className="text-xl font-bold text-red-600">$15,600</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">Paid (30 days)</div>
          <div className="text-xl font-bold text-emerald-600">$7,840</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">Total Outstanding</div>
          <div className="text-xl font-bold text-slate-900">$21,590</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Bill #</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Vendor</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Date</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Due Date</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Status</th>
              <th className="text-right px-4 py-3 font-medium text-slate-600">Amount</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => (
              <tr key={bill.number} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-blue-600">{bill.number}</td>
                <td className="px-4 py-3 text-slate-900">{bill.vendor}</td>
                <td className="px-4 py-3 text-slate-600">{bill.date}</td>
                <td className="px-4 py-3 text-slate-600">{bill.due}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                    bill.status === "Paid" ? "bg-emerald-50 text-emerald-700" :
                    bill.status === "Overdue" ? "bg-red-50 text-red-700" :
                    "bg-blue-50 text-blue-700"
                  }`}>
                    {bill.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right font-medium">
                  ${bill.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
