import React, { useEffect, useState } from "react";
import "./App.css";

const sendDataToReactNativeApp = async () => {
  window.postMessage("It is Data from WebView / Website");
};

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    window.addEventListener("message", (message) => {
      if (typeof message.data === "string") {
        setData(message.data);
      }
    });
  }, []);

  return (
    <div className="App">
      <p>Webview to native</p>
      <p>{data}</p>
      <button onClick={() => sendDataToReactNativeApp()}>
        Send Data To React Native App
      </button>
    </div>
  );
}

export default App;
