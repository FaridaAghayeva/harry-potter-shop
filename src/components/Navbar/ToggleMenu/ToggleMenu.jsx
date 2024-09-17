import React from "react";
import { NavLink } from "react-router-dom";
import style from "../ToggleMenu/ToggleMenu.module.css";
import { FaUser } from "react-icons/fa";
export default function ToggleMenu({ isVisible, setVisible }) {
  function clickPage() {
    setVisible(!isVisible);
  }
  return (
    <div className={style.container}>
      <div className={style.liItems}>
        <NavLink to="/" onClick={clickPage}>
          <span>Home</span>
        </NavLink>
        <hr></hr>
        <NavLink to="/about-us" onClick={clickPage}>
          <span>About Us</span>
        </NavLink>
        <hr></hr>
        <NavLink to="/blogs" onClick={clickPage}>
          <span>Blogs</span>
        </NavLink>
        <hr></hr>
        <NavLink to="/products" onClick={clickPage}>
          <span>Products</span>
        </NavLink>
        <hr></hr>
        <NavLink to="/contact-us" onClick={clickPage}>
          <span>Contact Us</span>
        </NavLink>
        <hr></hr>

        <NavLink to="/profile">
          <div className={style.userIcon} onClick={clickPage}>
            <FaUser /> Profile
          </div>
        </NavLink>
      </div>
      <div>
        <div className={style.logo}>
          <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/logo_hp_fan_club.png?v=181701325036633612841678387974" />
        </div>
        <div className={`${style.loginBtn} ${style.btn}`} onClick={clickPage}>
          <NavLink to="/login">
            <span>LOGIN</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
