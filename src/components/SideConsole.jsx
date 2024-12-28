import React, { useState } from "react";

function SideConsole() {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I'm Daniel's Virtual Assistant. How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Handle user input submission
  const handleSend = () => {
    if (!input.trim()) return;

    // Add user's message to the chat log
    setMessages([...messages, { type: "user", text: input }]);
    setInput(""); // Clear input field

    // Simulate bot typing delay
    setIsTyping(true);
    setTimeout(() => {
      const botReply = generateBotReply(input);
      setMessages((prevMessages) => [...prevMessages, { type: "bot", text: botReply }]);
      setIsTyping(false);
    }, 1000);
  };

  // Generate custom replies based on user input
  const generateBotReply = (userInput) => {
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes("who is daniel") || lowerInput.includes("who are you")) {
      return (
        "Daniel Nnodim is a Junior at Luther College, majoring in Computer Science and Economics. " +
        "He bridges tech and finance with expertise in DevOps, RPA, and web development."
      );
    } else if (lowerInput.includes("skills") || lowerInput.includes("what can you do")) {
      return (
        "Daniel's skills include:\n" +
        "- **Python**: Scripting and backend systems.\n" +
        "- **JavaScript**: Frontend and full-stack development.\n" +
        "- **Java**: Object-oriented programming.\n" +
        "- **Economics**: Market analysis and forecasting.\n" +
        "- **DevOps**: CI/CD and automation."
      );
    } else if (lowerInput.includes("projects") || lowerInput.includes("what have you worked on")) {
      return (
        "Daniel has worked on:\n" +
        "- **Finance Tracker**: A budgeting app.\n" +
        "- **E-commerce Platform**: Built using MERN stack.\n" +
        "- **Tic Tac Toe**: A Python AI-based game.\n" +
        "- **Currency Converter**: A Python CLI tool."
      );
    } else if (lowerInput.includes("finance tracker")) {
      return "The Finance Tracker helps manage budgets. Check it out here: https://sample-port.onrender.com/";
    } else if (lowerInput.includes("contact")) {
      return (
        "You can reach Daniel via:\n" +
        "- **LinkedIn**: https://linkedin.com/in/daniel-nnodim\n" +
        "- **Email**: nnodimdan@gmail.com"
      );
    } else if (lowerInput.includes("economics") || lowerInput.includes("finance")) {
      return (
        "Daniel applies Computer Science to solve economic challenges. He's passionate about sustainability " +
        "and the economic impact of climate change."
      );
    } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      return "Hello! How can I assist you today? Ask about Daniel's projects, skills, or anything else!";
    } else {
      return "I'm not sure how to respond to that. Try asking about projects, skills, or contact info!";
    }
  };

  return (
    <div className="side-console">
      <h2 style={{ fontFamily: "'Press Start 2P', cursive", marginBottom: "1rem" }}>
        Chat with Daniel's Assistant
      </h2>
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
          <div
            style={{
              color: "#05ff82",
              fontStyle: "italic",
              marginBottom: "0.5rem",
            }}
          >
            🤖 Typing...
          </div>
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
    </div>
  );
}

export default SideConsole;
