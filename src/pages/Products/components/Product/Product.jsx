import React from "react";
import style from "../ProductsAll/ProductsAll.module.css";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";

export default function Product({ price, title, image, product, id }) {
  const { addItem } = useCart();

  return (
    <div className={style.container}>
      <div className={style.image}>
        {image?.slice(0, 1).map((item, i) => {
          return <img src={item} key={i} />;
        })}
      </div>
      <div className={style.details}>
        <NavLink to={`/products/${id}`}>
          <h1 className={style.title}>{title}</h1>
        </NavLink>

        <p className={style.price}>{`${price}.00 AZN`}</p>
        <div className={style.btn} onClick={() => addItem(product)}>
          ADD TO CART
        </div>
      </div>
    </div>
  );
}
