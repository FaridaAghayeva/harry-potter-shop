import React, { useState } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import ToggleMenu from "./ToggleMenu/ToggleMenu";

export default function Navbar() {
  const [isVisible, setVisible] = useState(false);
  function displayToggleMenu() {
    setVisible(!isVisible);
  }
  return (
    <div className={style.container}>
      <div className={style.loginPart}>
        <div className={style.fanclub}>
          <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/hp_fan_club_logo_horizontal_dark.svg?v=31198702805312198181678387973" />
        </div>
        <div className={style.loginContainer}>
          <NavLink>Login</NavLink>
          <NavLink>Registration</NavLink>
          <img
            className={style.sun}
            src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/sun_2x.png"
          />
        </div>
      </div>
      <div className={style.itemsContainer}>
        <div className={style.logos}>
          <div onClick={displayToggleMenu} className={style.toggeIconContainer}>
            {isVisible ? (
              <div className={style.deleteIcon}></div>
            ) : (
              <div className={style.toggeIcon}></div>
            )}
          </div>
          <div className={style.warnerbrosIcon}></div>
          <div className={style.logo}>
            <NavLink to="/">
              {" "}
              <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/logo_hpshop.svg" />
            </NavLink>
          </div>
          <div className={style.cart}>
            <div className={style.wishlistcart}>
              <div className={style.wishlist}></div>
              <span className={style.wishlistText}>Wishlist</span>
            </div>
            <div className={style.basket}></div>
          </div>
        </div>
        <div className={style.items}>
          <div className={style.arrowleft}>
            <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/divider.svg" />
          </div>
          <div className={style.liItems}>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return isActive ? { color: "#a85" } : {};
              }}
            >
              <span>Home</span>
            </NavLink>
            <span>
              <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/dot.svg" />
            </span>
            <NavLink
              to="/about-us"
              style={({ isActive }) => {
                return isActive ? { color: "#a85" } : {};
              }}
            >
              <span>About Us</span>
            </NavLink>
            <span>
              <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/dot.svg" />
            </span>
            <NavLink
              to="/blogs"
              style={({ isActive }) => {
                return isActive ? { color: "#a85" } : {};
              }}
            >
              <span>Blogs</span>
            </NavLink>
            <span>
              <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/dot.svg" />
            </span>
            <NavLink
              to="/products"
              style={({ isActive }) => {
                return isActive ? { color: "#a85" } : {};
              }}
            >
              <span>Products</span>
            </NavLink>
            <span>
              <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/dot.svg" />
            </span>
            <NavLink
              to="/contact-us"
              style={({ isActive }) => {
                return isActive ? { color: "#a85" } : {};
              }}
            >
              <span>Contact Us</span>
            </NavLink>
          </div>
          <div className={style.arrowright}>
            <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/divider.svg" />
          </div>
        </div>
      </div>

      {isVisible ? (
        <div className={style.toggleMenu}>
          <ToggleMenu isVisible={isVisible} setVisible={setVisible} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
