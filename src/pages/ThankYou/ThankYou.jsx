import React from "react";
import style from "../ThankYou/ThankYou.module.css";
import { NavLink } from "react-router-dom";
import RecommendedProducts from "../ThankYou/RecommendedProducts/RecommendedProducts";

export default function ThankYou() {
  return (
    <div className={style.container}>
      <div className={style.paddingDiv}>
        <div className={style.textContainer}>
          <h1 className={style.text}>Thank You!</h1>
          <NavLink to="/products">
            <h2>Continue shopping</h2>
          </NavLink>
        </div>
      </div>
      <RecommendedProducts />
    </div>
  );
}
