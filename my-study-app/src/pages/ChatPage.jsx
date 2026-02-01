import ChatWindow from "../chatbot/ChatWindow";
import InputBox from "../chatbot/InputBox";
import { useChatContext } from "../context/ChatContext";
import "../styles/app.css";

export default function ChatPage() {
  const { messages, sendMessage, loading } = useChatContext();

  return (
    <div className="page chat-page">
      <h1 className="title">AI Tutor 🤖</h1>

      {/* Chat Messages */}
      <div className="chat-box">
        <ChatWindow messages={messages} />
      </div>

      {/* Input */}
      <InputBox
        loading={loading}
        onSend={(text) => sendMessage(text, "study-context")}
      />
    </div>
  );
}
