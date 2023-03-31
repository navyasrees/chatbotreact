import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";
import "./App.css";
import "react-chatbot-kit/build/main.css";
function App() {
  return (
    <div className="App">
      <Chatbot
        headerText=" "
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
}

export default App;
