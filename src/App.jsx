import { Routes, BrowserRouter, Route } from "react-router-dom";
import { getPlatform } from "./Functions/platformCheck";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { MobilePage } from "./pages/MobilePage/MobilePage";

export const App = () => {
  var device = getPlatform();
  return (
    <BrowserRouter>
      {device === "Windows" || device === "Macintosh" || device === "Linux" ? (
        <Routes>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<MobilePage />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
