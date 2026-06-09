import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FORM_ENDPOINT = "https://formspree.io/f/mjgdranr";

type Lead = {
  name: string;
  appType: string;
  budget: string;
  contact: string;
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);

  const [lead, setLead] = useState<Lead>({
    name: "",
    appType: "",
    budget: "",
    contact: "",
  });

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! I’m your LaunchPad assistant. What’s your name?",
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const playSound = (type: "send" | "receive") => {
    const audio = new Audio(
      type === "send" ? "/sounds/send.mp3" : "/sounds/receive.mp3",
    );
    audio.volume = 0.4;
    audio.play();
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const addBotMessage = (text: string) => {
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { sender: "bot", text }]);
      playSound("receive");
    }, 900);
  };

  const sendToFormspree = async (data: Lead) => {
    await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const value = input.trim();

    setMessages((prev) => [...prev, { sender: "user", text: value }]);

    playSound("send");
    setInput("");

    if (step === 0) {
      setLead((p) => ({ ...p, name: value }));
      setTimeout(
        () => addBotMessage("Nice to meet you! What type of app do you need?"),
        500,
      );
      setStep(1);
    } else if (step === 1) {
      setLead((p) => ({ ...p, appType: value }));
      setTimeout(() => addBotMessage("Great. What’s your budget range?"), 500);
      setStep(2);
    } else if (step === 2) {
      setLead((p) => ({ ...p, budget: value }));
      setTimeout(
        () => addBotMessage("Perfect. What’s your email or WhatsApp number?"),
        500,
      );
      setStep(3);
    } else if (step === 3) {
      const finalLead = {
        ...lead,
        contact: value,
      };

      setLead(finalLead);

      setTimeout(() => addBotMessage("🚀 Sending your request..."), 600);

      await sendToFormspree(finalLead);

      setTimeout(
        () => addBotMessage("✅ Done! We’ll contact you within 24 hours."),
        1200,
      );

      setStep(4);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 right-6 z-50 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        💬
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-40 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border overflow-hidden"
          >
            {/* Header */}
            <div className="bg-purple-600 text-white p-3 font-semibold">
              LaunchPad AI Assistant
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-3 space-y-2">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    m.sender === "bot"
                      ? "bg-gray-100"
                      : "bg-purple-600 text-white ml-auto"
                  }`}
                >
                  {m.text}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex gap-1 px-2 py-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75" />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="flex border-t p-2 gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your reply..."
                className="flex-1 border rounded px-2 py-1 outline-none"
              />

              <button
                onClick={handleSend}
                className="bg-purple-600 text-white px-3 rounded"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
