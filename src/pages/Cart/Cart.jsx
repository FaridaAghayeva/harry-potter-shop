import React from "react";
import { useCart } from "react-use-cart";
import style from "./Cart.module.css";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  if (isEmpty)
    return (
      <div className={style.cartEmptyTextContainer}>
        <h1 className={style.cartEmptyText}>Your cart is empty</h1>
        <NavLink to="/products">
          <h2>Continue shopping</h2>
        </NavLink>
        <hr className={style.hr1}></hr>
      </div>
    );

  return (
    <div className={style.cartContainer}>
      <h1>Review your cart ({totalUniqueItems})</h1>

      <ul>
        {items.map((item) => (
          <div key={item.id}>
            <hr className={style.hr1}></hr>
            <li className={style.liContainer}>
              <div className={style.imgContainer}>
                <img src={item.images.slice(0, 1).map((item) => item)} />
              </div>
              <div className={style.detailsContainer}>
                <NavLink to={`/products/${item.id}`}>
                  <h1 className={style.title}>{item.title}</h1>
                </NavLink>
                <h2 className={style.price}>{item.price}.00 AZN</h2>
                <div className={style.details}>
                  <div className={style.addQuantity}>
                    <div className={style.addButtons}>
                      <div
                        onClick={() =>
                          updateItemQuantity(item.id, (item.quantity ?? 0) - 1)
                        }
                        className={style.price}
                      >
                        -
                      </div>
                      <p className={style.price}>{item.quantity}</p>
                      <div
                        onClick={() =>
                          updateItemQuantity(item.id, (item.quantity ?? 0) + 1)
                        }
                        className={style.price}
                      >
                        +
                      </div>
                    </div>
                    <div>{item.price * item.quantity}.00 AZN</div>
                  </div>
                  <div className={style.wishRemove}>
                    <div
                      className={style.removeButton}
                      onClick={() => removeItem(item.id)}
                    >
                      &times; Remove
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
