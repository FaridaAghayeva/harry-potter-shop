import { fetchProducts } from "../../../components/redux/productsSlicer";
import React, { useEffect, useState } from "react";
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
export default function ProductSingle() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = data?.products?.data.find(
    (product) => product.id === productId
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
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
                    <img src={item} className={style.image} />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
        <div className={style.detailsContainer}>
          <h1 className={style.title}>{product?.title}</h1>
          <hr></hr>
          <h1 className={style.price}>{product?.price}.00 AZN</h1>
          <hr></hr>
          <div>
            <div className={style.btn}>ADD TO CART</div>
          </div>
          <hr></hr>
          <div></div>
          <ReadMore text={product?.text} maxLength={200} />
        </div>
      </div>
    </div>
  );
}
