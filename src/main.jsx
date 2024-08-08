import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HeadProvider } from "./components/ContextAPIs/HeadHome/HeadHome.jsx";
import { FAQProvider } from "./components/ContextAPIs/FAQs/FAQ.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FAQProvider>
    <HeadProvider>
      <App />
    </HeadProvider>
  </FAQProvider>
);
