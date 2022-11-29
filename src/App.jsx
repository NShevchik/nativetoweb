import React from "react";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { MobilePage } from "./pages/MobilePage/MobilePage";

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

export const App = () => {
  return device === "Windows" ||
    device === "Macintosh" ||
    device === "Linux" ? (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MobilePage />} />
      </Routes>
    </BrowserRouter>
  );
};
