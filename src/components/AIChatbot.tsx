"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi. I'm your accounting assistant. I can help with categorization, reports, cash position, project profitability, and more. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulated AI responses for the demo
    setTimeout(() => {
      let reply = "I'm a demo assistant right now. In the full version I will be connected to your real books and can take actions with your approval.";

      const lower = userMessage.content.toLowerCase();
      if (lower.includes("cash") || lower.includes("balance")) {
        reply = "Current cash position is $248,420 across operating accounts. Would you like a breakdown by entity?";
      } else if (lower.includes("overdue") || lower.includes("receivable")) {
        reply = "You have $9,340 in overdue receivables. The largest is Invoice INV-1045 to SteelWorks Inc for $9,340.";
      } else if (lower.includes("profit") || lower.includes("margin")) {
        reply = "Month-to-date net income is $33,810. Inventory average gross margin is currently 28.5%.";
      } else if (lower.includes("project")) {
        reply = "Your most profitable active project is Warehouse Expansion - Phase 2 with $33,600 profit so far.";
      } else if (lower.includes("bill") || lower.includes("payable")) {
        reply = "Total outstanding bills are $21,590. $15,600 of that is overdue (Raw Material Partners).";
      }

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    }, 600);
  }

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-all"
      >
        {open ? (
          <span className="text-xl">×</span>
        ) : (
          <span className="text-sm font-bold">AI</span>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-96 h-[480px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col z-50 overflow-hidden">
          <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
            <div>
              <div className="font-semibold text-sm">Accounting Assistant</div>
              <div className="text-xs text-slate-400">Connected to your books</div>
            </div>
            <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white">
              ×
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-800"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="p-3 border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about cash, invoices, projects..."
                className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
