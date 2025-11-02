import { useState } from "react";
import Header from "@/components/Header";

export default function Chat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: "assistant", content: "Error connecting to server." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#E4EBE4]">
      <Header compact />
      <main className="flex-1 flex justify-center items-center px-8 py-6">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4 border p-3 rounded-md">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-md ${
                  m.role === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-gray-100 text-left"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && <p className="text-gray-500">...</p>}
          </div>

          <form onSubmit={sendMessage} className="flex gap-2">
            <input
              className="flex-1 border rounded-md p-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Send
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
