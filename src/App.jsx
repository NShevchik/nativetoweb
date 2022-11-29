import React, { useState } from "react";
import "./App.css";

const sendDataToReactNativeApp = async () => {
  window.ReactNativeWebView.postMessage("It is Data from WebView / Website");
};
window.addEventListener("message", (message) => {
  alert(message.data);
});
export function App() {
  const [state, setState] = useState();
  window.addEventListener("message", (message) => {
    setState(message.data);
  });
  return (
    <div className="App">
      <p>Webview / Website</p>
      <p>{state}</p>
      <button onClick={sendDataToReactNativeApp} className="button">
        Send Data To React Native
      </button>
    </div>
  );
}
