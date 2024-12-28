import React, { useState } from "react";

function SideConsole({ scrollToSection }) {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I'm Daniel's Virtual Assistant. How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [badges, setBadges] = useState([]);
  const [mode, setMode] = useState("Professional");

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prevMessages) => [...prevMessages, { type: "user", text: input }]);
    setInput(""); // Clear input field

    setIsTyping(true);

    try {
      const botReply = await getChatGPTResponse(input);
      setMessages((prevMessages) => [...prevMessages, { type: "bot", text: botReply }]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: "Sorry, I couldn't process that. Please try again!" },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const getChatGPTResponse = async (userInput) => {
    // System message to define the assistant's context
    const systemMessage = {
      role: "system",
      content:
        "You are a virtual assistant for Daniel Nnodim, a Junior at Luther College majoring in Computer Science and Economics. " +
        "Daniel has expertise in DevOps, web development, RPA, and financial analysis.",
    };

    // Check for keywords and scroll to relevant sections
    if (userInput.toLowerCase().includes("projects")) {
      unlockBadge("Project Enthusiast");
      scrollToSection && scrollToSection("projects");
      return "Navigating to Projects section...";
    }

    if (userInput.toLowerCase().includes("skills")) {
      unlockBadge("Skills Master");
      scrollToSection && scrollToSection("skills");
      return "Navigating to Skills section...";
    }

    // API call to ChatGPT
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [systemMessage, { role: "user", content: userInput }],
          max_tokens: 150,
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error("Error fetching response:", error);
      throw error;
    }
  };

  const unlockBadge = (badge) => {
    if (!badges.includes(badge)) {
      setBadges((prevBadges) => [...prevBadges, badge]);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: `🎉 You've unlocked the '${badge}' badge!` },
      ]);
    }
  };

  return (
    <div className="side-console">
      <h2 style={{ fontFamily: "'Helvetica Neue', sans-serif", marginBottom: "1rem" }}>
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
          <div style={{ color: "#05ff82", fontStyle: "italic", marginBottom: "0.5rem" }}>
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
      <div style={{ marginTop: "1rem", color: "#05ff82" }}>
        <strong>Badges Unlocked:</strong> {badges.length > 0 ? badges.join(", ") : "None"}
      </div>
    </div>
  );
}

export default SideConsole;
