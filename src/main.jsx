import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HeadProvider } from "./components/ContextAPIs/HeadHome/HeadHome.jsx";
import { FAQProvider } from "./components/ContextAPIs/FAQs/FAQ.jsx";
import { Provider } from "react-redux";
import { store } from "./components/redux/store.jsx";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
import { UserProvider } from "./components/ContextAPIs/Users/UserContext.jsx";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./components/ContextAPIs/Theme/Theme.jsx";
import "./i18n.js";
import { LanguageProvider } from "./components/ContextAPIs/Language/Language.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <ThemeProvider>
      <UserProvider>
        <CartProvider>
          <WishlistProvider>
            <Provider store={store}>
              <FAQProvider>
                <HeadProvider>
                  <App />
                </HeadProvider>
              </FAQProvider>
            </Provider>
          </WishlistProvider>
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  </LanguageProvider>
);
