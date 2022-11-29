import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const sendDataToReactNativeApp = async () => {
    window.postMessage("It is Data from WebView / Website");
  };

  window.addEventListener("message", (message) => {
    alert(message.data);
    setMessage(message.data);
  });

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
