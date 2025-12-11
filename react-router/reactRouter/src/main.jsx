import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <h1 classNameName="text-3xl font-bold underline bg-red-50">
      hello user how are you
    </h1>
  </BrowserRouter>
);
