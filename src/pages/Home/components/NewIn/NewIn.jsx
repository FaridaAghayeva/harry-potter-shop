import Product from "../../../Products/components/Product/Product";
import React, { useContext, useEffect, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "../NewIn/NewIn.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../NewIn/style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../components/redux/productsSlicer";
import { ThemeContext } from "../../../../components/ContextAPIs/Theme/Theme";
import { useTranslation } from "react-i18next";

export default function NewIn() {
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
