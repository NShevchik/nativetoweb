import React, { useEffect, useState } from "react";
import "./App.css";

let messageData = "";

const sendDataToReactNativeApp = async () => {
  window.postMessage("It is Data from WebView / Website");
};

window.addEventListener("message", (message) => {
  alert(message.data);
  messageData = message.data;
});

function App() {
  const [message, setMessage] = useState("");
  setMessage(messageData);
  return (
    <div className="App">
      <p>Webview to native</p>
      <p>{message}</p>
      <button onClick={() => sendDataToReactNativeApp()}>
        Send Data To React Native App
      </button>
    </div>
  );
}

export default App;
