import React, { useState } from "react";
import "./MobilePage.scss";

const sendDataToReactNativeApp = async (data) => {
  const jsondata = JSON.stringify(data);
  window.ReactNativeWebView.postMessage(jsondata);
};

export const MobilePage = () => {
  const [state, setState] = useState("");
  // window.addEventListener("message", (message) => {
  //   setState(message.data);
  // });

  return (
    <div className="mobile">
      <h1 className="mobile__title">Webview / Website</h1>
      <input
        type="text"
        className="mobile__input"
        placeholder="Please here..."
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
      <button
        onClick={() => sendDataToReactNativeApp(state)}
        className="mobile__button"
      >
        Send Data To React Native
      </button>
    </div>
  );
};
