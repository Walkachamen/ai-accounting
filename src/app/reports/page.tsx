export default function ReportsPage() {
  const reports = [
    { name: "Profit & Loss", description: "Standard income statement", category: "Financial" },
    { name: "Balance Sheet", description: "Assets, liabilities & equity", category: "Financial" },
    { name: "Cash Flow Statement", description: "Operating, investing & financing", category: "Financial" },
    { name: "Accounts Receivable Aging", description: "Open invoices by age", category: "AR/AP" },
    { name: "Accounts Payable Aging", description: "Open bills by age", category: "AR/AP" },
    { name: "Inventory Valuation", description: "Stock value by item & location", category: "Inventory" },
    { name: "Project Profitability", description: "Job costing summary", category: "Projects" },
    { name: "Sales by Customer", description: "Revenue breakdown", category: "Sales" },
    { name: "Expense by Category", description: "Spending analysis", category: "Expenses" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Reports</h1>
          <p className="text-slate-600 text-sm mt-1">Prebuilt reports • AI can customize any of these</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((report) => (
          <div
            key={report.name}
            className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="text-xs font-medium text-blue-600 mb-1">{report.category}</div>
            <h3 className="font-semibold text-slate-900 mb-1">{report.name}</h3>
            <p className="text-sm text-slate-600">{report.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-5 bg-blue-50 border border-blue-100 rounded-xl">
        <h3 className="font-semibold text-blue-900 mb-1">AI Report Assistant</h3>
        <p className="text-sm text-blue-800">
          Later you will be able to ask the AI chatbot things like “Show me a P&L with prior year comparison” or “Add a margin % column to the inventory report”. The system will warn you if a change would break GAAP.
        </p>
      </div>
    </div>
  );
}
