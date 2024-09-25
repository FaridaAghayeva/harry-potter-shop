import { fetchProducts } from "../../../components/redux/productsSlicer";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import style from "../ProductSingle/ProductSingle.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ReadMore from "../../../components/ReadMoreLessButton/ReadMore";
import "./style.css";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "react-use-wishlist";
import { toast } from "react-toastify";
import { ThemeContext } from "../../../components/ContextAPIs/Theme/Theme";

export default function ProductSingle() {
  const { darkMode } = useContext(ThemeContext);

  const { addItem } = useCart();
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();
  const [wishlistBtn, setWishlistBtn] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = data?.products?.data.find(
    (product) => product.id === productId
  );

  useEffect(() => {
    if (!data || data.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, data]);

  useEffect(() => {
    if (product) {
      setWishlistBtn(inWishlist(productId));
    }
  }, [inWishlist, productId, product]);

  const toggleWishlist = () => {
    if (wishlistBtn) {
      removeWishlistItem(productId);
      toast.warning("Product is removed from wishlist successfully!");
    } else {
      addWishlistItem(product);
      toast.success("Product is added to wishlist successfully!");
    }
    setWishlistBtn(!wishlistBtn);
  };
  return (
    <div>
      <div className={style.container}>
        <div className={style.swiperContainer}>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {product?.images?.map((item) => {
              return (
                <SwiperSlide key={product.id}>
                  <img src={item} className={style.imageMain} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={product?.images?.length}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            <div className={style.mySwiper}>
              {product?.images?.map((item) => {
                return (
                  <SwiperSlide key={product.id}>
                    <img
                      src={item}
                      className={style.image}
                      alt={product.title}
                    />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
        <div className={style.detailsContainer}>
          <div>
            <div className={style.heart} onClick={toggleWishlist}>
              {wishlistBtn ? (
                <div className={style.heart}>
                  <FaHeart
                    className={
                      darkMode === "dark"
                        ? style.heartFull
                        : style.heartFullLight
                    }
                  />
                  <p className={darkMode === "light" ? style.textColor : ""}>
                    Remove from Wishlist
                  </p>
                </div>
              ) : (
                <div className={style.heart}>
                  <CiHeart
                    className={
                      darkMode === "dark"
                        ? style.heartNotFull
                        : style.heartNotFullLight
                    }
                  />
                  <p className={darkMode === "light" ? style.textColor : ""}>
                    Add to Wishlist
                  </p>
                </div>
              )}
            </div>
          </div>
          <h1 className={darkMode === "dark" ? style.title : style.titleLight}>
            {product?.title}
          </h1>
          <hr></hr>
          <h1 className={darkMode === "dark" ? style.price : style.priceLight}>
            {product?.price}.00 AZN
          </h1>
          <hr></hr>
          <div>
            <div className={style.btn} onClick={() => addItem(product)}>
              ADD TO CART
            </div>
          </div>
          <hr></hr>
          <div></div>
          <ReadMore text={product?.text} maxLength={200} />
        </div>
      </div>
    </div>
  );
}
