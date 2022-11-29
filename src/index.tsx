import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";

var userDeviceArray = [
  { device: "Android", platform: /Android/ },
  { device: "iPhone", platform: /iPhone/ },
  { device: "iPad", platform: /iPad/ },
  { device: "Symbian", platform: /Symbian/ },
  { device: "Windows Phone", platform: /Windows Phone/ },
  { device: "Tablet OS", platform: /Tablet OS/ },
  { device: "Linux", platform: /Linux/ },
  { device: "Windows", platform: /Windows NT/ },
  { device: "Macintosh", platform: /Macintosh/ },
];

var platform = navigator.userAgent;
function getPlatform() {
  for (var i in userDeviceArray) {
    if (userDeviceArray[i].platform.test(platform)) {
      return userDeviceArray[i].device;
    }
  }
  return "Неизвестная платформа!" + platform;
}
var device = getPlatform();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {device === "Windows" || device === "Macintosh" || device === "Linux" ? (
      <ErrorPage />
    ) : (
      <App />
    )}
  </React.StrictMode>
);
