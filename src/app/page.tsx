export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Dashboard</h1>
      <p className="text-slate-600 mb-8">Welcome to your AI Accounting system.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="text-sm text-slate-500 mb-1">Cash Position</div>
          <div className="text-2xl font-bold text-slate-900">$248,420</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="text-sm text-slate-500 mb-1">Revenue (MTD)</div>
          <div className="text-2xl font-bold text-slate-900">$86,150</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="text-sm text-slate-500 mb-1">Expenses (MTD)</div>
          <div className="text-2xl font-bold text-slate-900">$52,340</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="text-sm text-slate-500 mb-1">Net Income (MTD)</div>
          <div className="text-2xl font-bold text-emerald-600">$33,810</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h2 className="font-semibold text-slate-900 mb-4">Recent Activity</h2>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between py-2 border-b border-slate-100">
            <span>Invoice #1042 – Acme Manufacturing</span>
            <span className="font-medium">$12,400.00</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-100">
            <span>Bill payment – Industrial Supplies Co</span>
            <span className="font-medium text-red-600">-$3,850.00</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-100">
            <span>Bank deposit – Customer payments</span>
            <span className="font-medium">$8,920.00</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Payroll run – August 1–15</span>
            <span className="font-medium text-red-600">-$18,640.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
