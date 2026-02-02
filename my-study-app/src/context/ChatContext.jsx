import { createContext, useContext, useState } from "react";
import { askAI } from "../api/aiApi";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const styles = {
    bot: { color: "#00e5ff", marginBottom: "8px" },
    user: { textAlign: "right", marginBottom: "8px" },
  };

  const sendMessage = async (text, context) => {
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);

    const reply = await askAI(text, context);

    setMessages((prev) => [
      ...prev,
      { role: "bot", text: reply.answer },
    ]);

    setLoading(false);
  };

  return (
    <ChatContext.Provider
      value={{ messages, loading, styles, sendMessage }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = () => useContext(ChatContext);
