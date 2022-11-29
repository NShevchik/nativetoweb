import React from "react";
import "./App.css";

const sendDataToReactNativeApp = async () => {
  window.postMessage("It is Data from WebView / Website");
};
window.addEventListener("message", (message) => {
  alert(message.data);
});

export function App() {
  return (
    <div className="App">
      <p>Webview / Website</p>
      <button className="button" onClick={() => sendDataToReactNativeApp()}>
        Send Data To React Native
      </button>
    </div>
  );
}
