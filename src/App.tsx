import React, { useEffect, useState } from "react";
import "./App.css";

// const sendDataToReactNativeApp = async () => {
//   window.postMessage("It is Data from WebView / Website");
// };
const sendDataToReactNativeApp = async () => {
  window.ReactNativeWebView.postMessage("Data from WebView / Website");
};

window.addEventListener("message", (message) => {
  alert(message.data);
});

function App() {
  return (
    <div className="App">
      <p>Webview to native</p>
      <button onClick={() => sendDataToReactNativeApp()}>
        Send Data To React Native App
      </button>
    </div>
  );
}

export default App;
