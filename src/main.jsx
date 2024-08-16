import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HeadProvider } from "./components/ContextAPIs/HeadHome/HeadHome.jsx";
import { FAQProvider } from "./components/ContextAPIs/FAQs/FAQ.jsx";
import { Provider } from "react-redux";
import { store } from "./components/redux/store.jsx";
import { CartProvider } from "react-use-cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <Provider store={store}>
      <FAQProvider>
        <HeadProvider>
          <App />
        </HeadProvider>
      </FAQProvider>
    </Provider>
  </CartProvider>
);
