import { useState } from "react";

export default function ChatBot() {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");

  const [lead, setLead] = useState({
    appType: "",
    description: "",
    contact: "",
  });

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 Welcome to LaunchPad Digital. What type of app would you like to build?",
    },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    if (step === 0) {
      setLead({ ...lead, appType: input });

      setMessages((prev) => [
        ...prev,
        { sender: "user", text: input },
        { sender: "bot", text: "Please describe your app idea." },
      ]);

      setStep(1);
    } else if (step === 1) {
      setLead({ ...lead, description: input });

      setMessages((prev) => [
        ...prev,
        { sender: "user", text: input },
        {
          sender: "bot",
          text: "What's your WhatsApp number or email?",
        },
      ]);

      setStep(2);
    } else if (step === 2) {
      const updatedLead = {
        ...lead,
        contact: input,
      };

      setLead(updatedLead);

      const phone = "27721948525"; // Your WhatsApp number

      const whatsappMessage = `
New Website Lead

App Type:
${updatedLead.appType}

Description:
${updatedLead.description}

Contact:
${updatedLead.contact}
`;

      const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
        whatsappMessage,
      )}`;

      window.open(whatsappUrl, "_blank");

      setMessages((prev) => [
        ...prev,
        { sender: "user", text: input },
        {
          sender: "bot",
          text: "Thank you! We'll contact you shortly.",
        },
      ]);

      setStep(3);
    }

    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white rounded-xl shadow-xl border">
      <div className="bg-purple-600 text-white p-3 rounded-t-xl font-semibold">
        LaunchPad Assistant
      </div>

      <div className="h-80 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg max-w-[80%] ${
              msg.sender === "bot"
                ? "bg-gray-100"
                : "bg-purple-600 text-white ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-3 flex gap-2 border-t">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-md px-3 py-2"
          placeholder="Type here..."
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />

        <button
          onClick={sendMessage}
          className="bg-purple-600 text-white px-4 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}
