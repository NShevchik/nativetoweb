import React, { useState } from "react";
import { DATA } from "../../DATA";
import "./MobilePage.css";

const sendDataToReactNativeApp = async () => {
  const jsondata = JSON.stringify(DATA);
  window.ReactNativeWebView.postMessage(jsondata);
};

export const MobilePage = () => {
  const [state, setState] = useState("");
  window.addEventListener("message", (message) => {
    setState(message.data);
  });
  return (
    <div className="mobile">
      <p>Webview / Website</p>
      <p className="data">Data from Native:</p>
      <p>{state}</p>
      <button onClick={sendDataToReactNativeApp} className="button">
        Send Data To React Native
      </button>
    </div>
  );
};
