import ChatWindow from "../components/chatbot/ChatWindow.jsx";
import InputBox from "../components/chatbot/InputBox.jsx";
import { useChatContext } from "../context/ChatContext"; 
import "../index.css"; 

export default function ChatPage() {
  const { messages, sendMessage, loading } = useChatContext();

  return (
    <div className="page chat-page">
      <h1 className="title">AI Tutor 🤖</h1>

      <section className="deploy-guide">
        <h2>GitHub Pages Deployment Guide</h2>

        <h3>Project Structure Requirement</h3>
        <p>
          The app lives inside <code>my-study-app/</code>, not at the repository
          root. Always run commands from inside that folder.
        </p>

        <h3>Why GitHub Pages Needs the gh-pages Branch</h3>
        <p>
          GitHub Pages cannot directly serve your source code. It must be pointed
          to the built <code>dist/</code> output, which is static files.
        </p>

        <h3>Configuration Files</h3>
        <p>
          In <code>package.json</code>, the <code>homepage</code> field should
          match your GitHub Pages URL exactly, for example
          <code> https://github.com/VanshikaChauhan4/stud.git.io/stud/</code>.
        </p>
        <p>
          In <code>vite.config.js</code>, set <code>base: &quot;/stud/&quot;</code>
          because the repository name is <code>stud</code>, so assets must load
          from that subpath.
        </p>

        <h3>Deploy Script</h3>
        <p>
          The deploy script uses <code>gh-pages -d dist</code> to publish only the
          built files. It pushes the contents of <code>dist/</code> to the
          <code>gh-pages</code> branch and does not include source code.
        </p>

        <h3>Commands To Run</h3>
        <ul>
          <li>
            <code>cd my-study-app</code> moves into the app directory.
          </li>
          <li>
            <code>npm install</code> installs dependencies.
          </li>
          <li>
            <code>npm run build</code> creates the production build in{" "}
            <code>dist/</code>.
          </li>
          <li>
            <code>npm run deploy</code> publishes the build to the{" "}
            <code>gh-pages</code> branch.
          </li>
        </ul>

        <h3>GitHub Repository Settings</h3>
        <p>
          Go to <strong>Settings → Pages</strong> and set the source branch to{" "}
          <code>gh-pages</code>. This step is required so GitHub Pages serves the
          built app instead of the README.
        </p>

        <h3>Final Result</h3>
        <p>
          After completing all steps, opening your GitHub Pages URL will show the
          deployed app, not the repository README.
        </p>
      </section>

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
