import React, { useState } from "react";
import "./App.css";

// const sendDataToReactNativeApp = async () => {
//   window.ReactNativeWebView.postMessage("It is Data from WebView / Website");
// };

let sendDataToReactNativeApp: VoidFunction;

window.addEventListener("message", (message) => {
  alert(message.data);
});

export function App() {
  const [state, setState] = useState();
  window.addEventListener("message", (message) => {
    const data = message.data;
    if (typeof data === "string") {
      setState(message.data);
    }
  });
  return (
    <div className="App">
      <p>Webview / Website</p>
      <p>{state}</p>
      <button className="button" onClick={() => sendDataToReactNativeApp()}>
        Send Data To React Native
      </button>
    </div>
  );
}
