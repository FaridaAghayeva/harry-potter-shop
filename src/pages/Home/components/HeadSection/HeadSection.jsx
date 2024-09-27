import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { HeadContext } from "../../../../components/ContextAPIs/HeadHome/HeadHome";
import style from "../HeadSection/HeadSection.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HeadSection() {
  const { details } = useContext(HeadContext);
  const { t, i18n } = useTranslation();

  return (
    <div className={style.container}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed={3500}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className={style.mySwiper}
      >
        {details?.map((item, index) => {
          return (
            <SwiperSlide
              className={style.swiperSlide}
              key={index}
              style={{ backgroundImage: `url(${item?.image})` }}
            >
              <div className={style.background}>
                <div className={style.textContainer}>
                  <div className={style.title}>{item?.title}</div>
                  <div className={style.text}>{item?.text}</div>
                  <NavLink to="/products">
                    <div className={style.button}>{t("home.shop-now")}</div>
                  </NavLink>
                </div>
                <div className={style.textContainer}></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
