import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import App1 from "./AppCopy.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Pagination */}
    <App />

    {/* Infinite Scrolling */}
    {/* <App1 /> */}
  </StrictMode>
);
