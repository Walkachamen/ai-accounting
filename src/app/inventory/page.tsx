export default function InventoryPage() {
  const items = [
    { sku: "RF-100", name: "Roll Formed Channel 10ft", qty: 420, unitCost: 18.50, value: 7770.00, margin: 32 },
    { sku: "RF-200", name: "Roll Formed Angle 8ft", qty: 285, unitCost: 12.75, value: 3633.75, margin: 28 },
    { sku: "RF-310", name: "Custom Z-Purlin", qty: 160, unitCost: 24.00, value: 3840.00, margin: 35 },
    { sku: "RF-410", name: "Heavy Duty Track", qty: 95, unitCost: 41.20, value: 3914.00, margin: 22 },
    { sku: "RF-505", name: "Light Gauge Stud", qty: 780, unitCost: 6.40, value: 4992.00, margin: 30 },
    { sku: "RF-600", name: "Specialty Profile A", qty: 45, unitCost: 67.00, value: 3015.00, margin: 18 },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Inventory</h1>
          <p className="text-slate-600 text-sm mt-1">Stock levels • Margins • COGS</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          + Add Item
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">Total Inventory Value</div>
          <div className="text-xl font-bold text-slate-900">$27,164</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">Avg Gross Margin</div>
          <div className="text-xl font-bold text-emerald-600">28.5%</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">Low Stock Items</div>
          <div className="text-xl font-bold text-amber-600">2</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-500">Slow Moving</div>
          <div className="text-xl font-bold text-slate-900">1</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-slate-600">SKU</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Item</th>
              <th className="text-right px-4 py-3 font-medium text-slate-600">Qty on Hand</th>
              <th className="text-right px-4 py-3 font-medium text-slate-600">Unit Cost</th>
              <th className="text-right px-4 py-3 font-medium text-slate-600">Value</th>
              <th className="text-right px-4 py-3 font-medium text-slate-600">Margin %</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.sku} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-3 font-mono text-slate-700">{item.sku}</td>
                <td className="px-4 py-3 text-slate-900">{item.name}</td>
                <td className="px-4 py-3 text-right">{item.qty}</td>
                <td className="px-4 py-3 text-right">${item.unitCost.toFixed(2)}</td>
                <td className="px-4 py-3 text-right font-medium">${item.value.toLocaleString("en-US", { minimumFractionDigits: 2 })}</td>
                <td className="px-4 py-3 text-right">
                  <span className={item.margin < 25 ? "text-amber-600 font-medium" : "text-emerald-600 font-medium"}>
                    {item.margin}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
