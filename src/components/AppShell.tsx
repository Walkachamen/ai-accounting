"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AIChatbot from "./AIChatbot";

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "General Ledger", href: "/ledger" },
  { name: "Bank Transactions", href: "/bank" },
  { name: "Invoices", href: "/invoices" },
  { name: "Bills", href: "/bills" },
  { name: "Inventory", href: "/inventory" },
  { name: "Projects", href: "/projects" },
  { name: "Reports", href: "/reports" },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="px-6 py-5 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-sm">
              AI
            </div>
            <div>
              <div className="font-semibold">AI Accounting</div>
              <div className="text-xs text-slate-400">Demo Company</div>
            </div>
          </div>
        </div>

        {/* Entity Switcher */}
        <div className="px-4 py-4 border-b border-slate-700">
          <div className="text-xs text-slate-400 mb-2 uppercase tracking-wide">Entity</div>
          <select className="w-full bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-sm text-white">
            <option>Consolidated</option>
            <option>Main Operating Co</option>
            <option>Holding Company</option>
            <option>Subsidiary LLC</option>
          </select>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="px-4 py-4 border-t border-slate-700 text-xs text-slate-500">
          AI Assistant ready
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
          <div className="text-sm text-slate-500">
            Multi-entity • Real-time books
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm text-slate-600">Controller</div>
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">
              NW
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
