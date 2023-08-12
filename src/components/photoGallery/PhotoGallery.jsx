import React from "react";
import classes from "./photoGallery.module.scss";
import photoGallery1 from "../img/photoGallery1.png";
import photoGallery2 from "../img/photoGallery2.png";
import photoGallery3 from "../img/photoGallery3.png";
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
        <h1>Фотогалерея</h1>
        <div className={classes.home}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
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
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
