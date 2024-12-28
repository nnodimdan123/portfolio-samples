import React, { useState } from "react";

function SideConsole({ scrollToSection }) {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I'm Daniel's Virtual Assistant. How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [badges, setBadges] = useState([]);
  const [mode, setMode] = useState("Professional");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { type: "user", text: input }]);
    setInput("");

    setIsTyping(true);
    setTimeout(() => {
      const botReply = generateBotReply(input);
      setMessages((prevMessages) => [...prevMessages, { type: "bot", text: botReply }]);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotReply = (userInput) => {
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes("who is daniel")) {
      unlockBadge("Explorer");
      return "Daniel Nnodim is a Junior at Luther College, majoring in Computer Science and Economics. He has skills in DevOps, RPA, web development, and financial analysis.";
    } else if (lowerInput.includes("projects")) {
      unlockBadge("Project Enthusiast");
      scrollToSection("projects");
      return (
        "Daniel has worked on:\n" +
        "- Finance Tracker: Budgeting and financial planning tool.\n" +
        "- E-commerce Platform: Built using the MERN stack.\n" +
        "- Currency Converter: Python-based CLI tool for real-time conversions."
      );
    } else if (lowerInput.includes("skills")) {
      unlockBadge("Skills Master");
      scrollToSection("skills");
      return (
        "Daniel's top skills include:\n" +
        "- Robotic Process Automation (RPA)\n" +
        "- JavaScript for full-stack development\n" +
        "- Python for backend and scripting\n" +
        "- Economic analysis and forecasting"
      );
    } else if (lowerInput.includes("resume")) {
      return '<a href="/resume.pdf" target="_blank">Download Daniel\'s resume here</a>.';
    } else if (lowerInput.includes("contact")) {
      return (
        "Connect with Daniel here:\n" +
        "- Instagram: [@nnodimdan](https://www.instagram.com/nnodimdan)\n" +
        "- GitHub: [nnodimdan123](https://github.com/nnodimdan123)\n" +
        "- LinkedIn: [nnodimdan](https://linkedin.com/in/nnodimdan)"
      );
    } else if (lowerInput.includes("achievements")) {
      unlockBadge("High Achiever");
      return (
        "Achievements include:\n" +
        "- Dean's List Recipient (2023)\n" +
        "- Certified in Basic Life Support (BLS)\n" +
        "- Certified in Mental Health First Aid\n" +
        "- Active involvement in extracurricular activities."
      );
    } else if (lowerInput.includes("joke")) {
      return "Why did the programmer quit their job? Because they didn't get arrays! 😂";
    } else if (lowerInput.includes("mode")) {
      return (
        `Current mode: ${mode}. Available modes are:\n` +
        "- Professional\n" +
        "- Friendly\n" +
        "- Quirky\nType 'Set mode to [your choice]' to switch."
      );
    } else if (lowerInput.includes("set mode to")) {
      const newMode = userInput.split("set mode to")[1]?.trim();
      if (["Professional", "Friendly", "Quirky"].includes(newMode)) {
        setMode(newMode);
        return `Mode changed to ${newMode}.`;
      } else {
        return "Invalid mode. Please choose Professional, Friendly, or Quirky.";
      }
    } else {
      return "I'm not sure how to respond to that. Try asking about projects, skills, or contact info!";
    }
  };

  const unlockBadge = (badge) => {
    if (!badges.includes(badge)) {
      setBadges([...badges, badge]);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: `🎉 You've unlocked the '${badge}' badge!` },
      ]);
    }
  };

  return (
    <div className="side-console">
      <h2 style={{ fontFamily: "'Press Start 2P', cursive", marginBottom: "1rem" }}>Chat with Daniel's Assistant</h2>
      <div style={{ maxHeight: "400px", overflowY: "auto", marginBottom: "1rem", paddingRight: "8px" }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: msg.type === "bot" ? "flex-start" : "flex-end",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                background: msg.type === "bot" ? "#222" : "#333",
                color: "#fff",
                padding: "8px 12px",
                borderRadius: "10px",
                maxWidth: "80%",
                wordWrap: "break-word",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              {msg.type === "bot" ? "🤖" : "🧑"} {msg.text}
            </span>
          </div>
        ))}
        {isTyping && (
          <div style={{ color: "#05ff82", fontStyle: "italic", marginBottom: "0.5rem" }}>🤖 Typing...</div>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask me anything..."
          style={{
            flex: 1,
            padding: "0.5rem",
            borderRadius: "6px",
            border: "1px solid #444",
            background: "#222",
            color: "#fff",
            marginRight: "10px",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            backgroundColor: "#05ff82",
            color: "#000",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
      <div style={{ marginTop: "1rem", color: "#05ff82" }}>
        <strong>Badges Unlocked:</strong> {badges.length > 0 ? badges.join(", ") : "None"}
      </div>
    </div>
  );
}

export default SideConsole;
