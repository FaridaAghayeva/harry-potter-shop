import React, { useEffect, useState } from "react";
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

export default function RecommendedProducts() {
  const [swiperRef, setSwiperRef] = useState(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={style.containerNewIns}>
      <h1 className={style.newInTitle}>Recommended Products</h1>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        virtual
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
