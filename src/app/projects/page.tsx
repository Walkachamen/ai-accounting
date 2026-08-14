export default function ProjectsPage() {
  const projects = [
    { id: "PRJ-104", name: "Warehouse Expansion - Phase 2", customer: "Acme Manufacturing", status: "Active", revenue: 86000, costs: 52400, profit: 33600 },
    { id: "PRJ-101", name: "Custom Racking System", customer: "Midwest Fabricators", status: "Active", revenue: 42500, costs: 28100, profit: 14400 },
    { id: "PRJ-098", name: "Office Mezzanine Build", customer: "Precision Parts LLC", status: "Completed", revenue: 31200, costs: 19850, profit: 11350 },
    { id: "PRJ-095", name: "Production Line Guards", customer: "SteelWorks Inc", status: "Active", revenue: 18750, costs: 14200, profit: 4550 },
    { id: "PRJ-090", name: "Roofing Support Structure", customer: "Northern Metals", status: "On Hold", revenue: 0, costs: 3200, profit: -3200 },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Projects / Job Costing</h1>
          <p className="text-slate-600 text-sm mt-1">Revenue, costs & profitability by job</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          + New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">Active Projects</div>
          <div className="text-xl font-bold text-slate-900">3</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">Total Revenue</div>
          <div className="text-xl font-bold text-slate-900">$178,450</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">Total Costs</div>
          <div className="text-xl font-bold text-slate-900">$117,750</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">Gross Profit</div>
          <div className="text-xl font-bold text-emerald-600">$60,700</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Project</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Customer</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Status</th>
              <th className="text-right px-4 py-3 font-medium text-slate-600">Revenue</th>
              <th className="text-right px-4 py-3 font-medium text-slate-600">Costs</th>
              <th className="text-right px-4 py-3 font-medium text-slate-600">Profit</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-3">
                  <div className="font-medium text-slate-900">{p.name}</div>
                  <div className="text-xs text-slate-500">{p.id}</div>
                </td>
                <td className="px-4 py-3 text-slate-700">{p.customer}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                    p.status === "Active" ? "bg-emerald-50 text-emerald-700" :
                    p.status === "Completed" ? "bg-slate-100 text-slate-700" :
                    "bg-amber-50 text-amber-700"
                  }`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">${p.revenue.toLocaleString()}</td>
                <td className="px-4 py-3 text-right">${p.costs.toLocaleString()}</td>
                <td className={`px-4 py-3 text-right font-medium ${p.profit >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                  ${p.profit.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
