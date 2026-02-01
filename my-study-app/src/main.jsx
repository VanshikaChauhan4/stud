import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { LearningProvider } from "./context/LearningContext";
import { ChatProvider } from "./context/ChatContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <LearningProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </LearningProvider>
  </AuthProvider>
);
