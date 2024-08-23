import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductSingle />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ScrollButton />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
