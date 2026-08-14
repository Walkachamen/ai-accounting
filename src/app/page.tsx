export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              AI
            </div>
            <h1 className="text-xl font-semibold text-slate-900">AI Accounting</h1>
          </div>
          <div className="text-sm text-slate-500">Demo Version</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Welcome</h2>
          <p className="text-slate-600">
            This is the starting foundation of your AI-native accounting system.
          </p>
        </div>

        {/* Simple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Dashboard</h3>
            <p className="text-sm text-slate-600">CEO & CFO views coming next</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">General Ledger</h3>
            <p className="text-sm text-slate-600">Chart of accounts & journal entries</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Bank Feeds</h3>
            <p className="text-sm text-slate-600">Transaction import & categorization</p>
          </div>
        </div>

        <div className="mt-10 p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-800">
          The basic structure is working. We will now start adding the real screens.
        </div>
      </main>
    </div>
  );
}
