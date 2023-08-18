import React from "react";
import classes from "./photoGallery.module.scss";
import photoGallery1 from "../img/photoGallery1.png";
import photoGallery2 from "../img/photoGallery2.png";
import photoGallery3 from "../img/photoGallery3.png";
import arrowL from "../img/logo/arrowL.svg";
import arrowR from "../img/logo/arrowR.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

function PhotoGallery() {
  return (
    <div className={classes.photoGallery}>
      <div className={classes.wrapper}>
        <h1 className={classes.h1}>Фотогалерея</h1>
        <div className={classes.home}>
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={24}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              type: "fraction"
            }}
            navigation={{ nextEl: ".arrowLeft", prevEl: ".arrowRight" }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={photoGallery3}
                className={classes.photoGallery3}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={photoGallery1}
                className={classes.photoGallery1}
                alt=""
              />{" "}
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={photoGallery2}
                className={classes.photoGallery2}
                alt=""
              />{" "}
            </SwiperSlide>
            <img src={arrowL} className={classes.arrowLeft} alt="" />
            <img src={arrowR} className={classes.arrowRight} alt="" />
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
