import React, { useContext, useEffect, useState } from "react";
import Product from "../../Products/components/Product/Product";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../components/redux/productsSlicer";
import "../RecommendedProducts/style.css";
import style from "../RecommendedProducts/RecommendedProducts.module.css";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../components/ContextAPIs/Theme/Theme";

export default function RecommendedProducts() {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);
  const [swiperRef, setSwiperRef] = useState(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Force Swiper to update once products are fetched
  useEffect(() => {
    if (swiperRef && products.length > 0) {
      swiperRef.update(); // This forces Swiper to re-calculate slides
    }
  }, [swiperRef, products]);

  return (
    <div className={style.containerNewIns}>
      <h1
        className={
          darkMode === "dark" ? style.newInTitle : style.newInTitleLight
        }
      >
        {t("home.new-in")}
      </h1>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        spaceBetween={30}
        navigation={true}
        virtual
        breakpoints={{
          1200: { slidesPerView: 4 },
          900: { slidesPerView: 3 },
          600: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {products?.map((product, index) => (
          <SwiperSlide key={product.id} virtualIndex={index}>
            <Product
              product={product}
              price={product.price}
              title={product.title}
              image={product.images}
              id={product.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
