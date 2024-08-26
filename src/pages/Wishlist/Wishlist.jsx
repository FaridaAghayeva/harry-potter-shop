import React from "react";
import { WishlistProvider, useWishlist } from "react-use-wishlist";
import style from "../Wishlist/Wishlist.module.css";
import { NavLink } from "react-router-dom";
export default function Wishlist() {
  const { isWishlistEmpty, totalWishlistItems, items, removeWishlistItem } =
    useWishlist();

  if (isWishlistEmpty)
    return (
      <div className={style.wishlistEmptyTextContainer}>
        <h1 className={style.wishlistEmptyText}>Your wishlist is empty</h1>
        <NavLink to="/products">
          <h2>Continue shopping</h2>
        </NavLink>
        <hr className={style.hr1}></hr>
      </div>
    );

  return (
    <div className={style.wishlistContainer}>
      <h1>Wishlist ({totalWishlistItems})</h1>

      <div className={style.liItems}>
        {items.map((item) => (
          <div key={item.id} className={style.liItem}>
            <img
              src={item.images.slice(0, 1).map((item) => item)}
              className={style.img}
            />
            <div className={style.title}>{item.title}</div>
            <div
              className={style.btn}
              onClick={() => removeWishlistItem(item.id)}
            >
              Remove
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
