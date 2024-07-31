import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HeadProvider } from "./components/ContextAPIs/HeadHome/HeadHome.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HeadProvider>
    <App />
  </HeadProvider>
);
