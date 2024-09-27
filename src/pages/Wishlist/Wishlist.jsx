import React, { useContext } from "react";
import { WishlistProvider, useWishlist } from "react-use-wishlist";
import style from "../Wishlist/Wishlist.module.css";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import { ThemeContext } from "../../components/ContextAPIs/Theme/Theme";
import { useTranslation } from "react-i18next";
export default function Wishlist() {
  const { t } = useTranslation();

  const { darkMode } = useContext(ThemeContext);
  const { addItem } = useCart();
  const { isWishlistEmpty, totalWishlistItems, items, removeWishlistItem } =
    useWishlist();

  if (isWishlistEmpty)
    return (
      <div className={style.wishlistEmptyTextContainer}>
        <h1
          className={
            darkMode === "light"
              ? style.wishlistEmptyText
              : style.wishlistEmptyTextLight
          }
        >
          {t("wishlist.emptytext")}
        </h1>
        <NavLink to="/products">
          <h2 className={darkMode === "light" ? "" : style.continueTexttLight}>
            {t("wishlist.davamatext")}
          </h2>
        </NavLink>
        <hr className={darkMode === "light" ? style.hr1 : style.hr1Light}></hr>
      </div>
    );

  return (
    <div className={style.wishlistContainer}>
      <h1 className={darkMode === "dark" ? "" : style.titleh2Light}>
        {t("wishlist.wishlist")} ({totalWishlistItems})
      </h1>

      <div className={style.liItems}>
        {items.map((item) => (
          <div key={item.id} className={style.liItem}>
            <img
              src={item.images.slice(0, 1).map((item) => item)}
              className={style.img}
            />
            <div
              className={darkMode === "dark" ? style.title : style.titleLight}
            >
              {item.title}
            </div>
            <div className={style.btnContainer}>
              <div
                className={style.btn}
                onClick={() => {
                  removeWishlistItem(item.id);
                  toast.warning(
                    "Product is removed from wishlist successfully!"
                  );
                }}
              >
                {t("wishlist.remove")}
              </div>
              <div
                onClick={() => {
                  addItem(item);
                  toast.success("Product is added from wishlist successfully!");
                }}
                className={style.basketContainer}
              >
                <div
                  className={
                    darkMode === "light" ? style.basket : style.basketLight
                  }
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
