import React, { useState, useEffect, useContext } from "react";
import style from "../ProductsAll/ProductsAll.module.css";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "react-use-wishlist";
import { toast } from "react-toastify";
import { ThemeContext } from "../../../../components/ContextAPIs/Theme/Theme";
import { useTranslation } from "react-i18next";

export default function Product({ price, title, image, product, id }) {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);
  const { addItem } = useCart();
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();
  const [wishlistBtn, setWishlistBtn] = useState(false);

  useEffect(() => {
    setWishlistBtn(inWishlist(product.id));
  }, [inWishlist, product.id]);

  const toggleWishlist = () => {
    if (wishlistBtn) {
      removeWishlistItem(product.id);
      toast.warning("Product is removed from wishlist successfully!");
    } else {
      addWishlistItem(product);
      toast.success("Product is added to wishlist successfully!");
    }
    setWishlistBtn(!wishlistBtn);
  };

  return (
    <div className={style.container}>
      <div className={style.image}>
        <div className={style.heart} onClick={toggleWishlist}>
          {wishlistBtn ? (
            <FaHeart
              className={
                darkMode === "light" ? style.heartFull : style.heartFullLight
              }
            />
          ) : (
            <CiHeart
              className={
                darkMode === "light"
                  ? style.heartNotFull
                  : style.heartNotFullLight
              }
            />
          )}
        </div>
        {image?.slice(0, 1).map((item, i) => (
          <div key={i} className={darkMode === "dark" && style.imgBck}>
            <img src={item} alt={title} />
          </div>
        ))}
      </div>
      <div className={style.details}>
        <NavLink to={`/products/${id}`}>
          <h1 className={darkMode === "light" ? style.title : style.titleLight}>
            {title}
          </h1>
        </NavLink>

        <p className={style.price}>{`${price}.00 AZN`}</p>
        <div
          className={style.btn}
          onClick={() => {
            addItem(product);
            toast.success("Product is added to cart successfully!");
          }}
        >
          {t("products.addcart")}
        </div>
      </div>
    </div>
  );
}
