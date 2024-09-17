import React from "react";
import style from "../CategoriesSection/CategoriesSection.module.css";
import { NavLink } from "react-router-dom";

export default function CategoriesSecion() {
  return (
    <div className={style.container}>
      <div className={style.wand}>
        <NavLink to="/products">
          <p>Wand Shop</p>
        </NavLink>
      </div>
      <div className={style.trunk}>
        <NavLink to="/products">
          <p>Trunk Station</p>
        </NavLink>
      </div>
      <div className={style.clothing}>
        <NavLink to="/products">
          <p>Clothing Station</p>
        </NavLink>
      </div>
      <div className={style.trolley}>
        <NavLink to="/products">
          <p>Sweet Trolley</p>
        </NavLink>
      </div>
    </div>
  );
}
