import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/Home/Home";
import AboutUs from "../src/pages/AboutUs/AboutUs";
import ContactUs from "../src/pages/ContactUs/ContactUs";
import FAQ from "../src/pages/FAQ/FAQ";
import Products from "../src/pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import Cart from "./pages/Cart/Cart";
import ProductSingle from "./pages/Products/ProductSingle/ProductSingle";
import NotFound from "./pages/NotFound/NotFound";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Wishlist from "./pages/Wishlist/Wishlist";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </>
  );
}

function MainLayout() {
  const location = useLocation();

  const hideNavbarFooter =
    location.pathname === "/register" || location.pathname === "/login";

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductSingle />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ScrollButton />
      <ScrollToTop />
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

export default App;
