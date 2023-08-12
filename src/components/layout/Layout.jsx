import React from "react";
import classes from "./layout.module.scss";
import layout from "../img/logo/layout.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'

function Layout() {
  return (
    <div className={classes.layout}>
      <div className={classes.wrapper}>
        <div className={classes.block}>
          <h1 className={classes.h1}>ОБЩАЯ ПЛАНИРОВКА</h1>
          <Swiper
          className={classes.swiper}
            slidesPerView={2}
            spaceBetween={24}
          >
            <SwiperSlide>
              <div className={classes.imgBtn}>
                <img src={layout} alt="" />
                <button className={classes.btn}>Планировка 1 этажа</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.imgBtn}>
                <img src={layout} alt="" />
                <button className={classes.btn}>Планировка 2-8 этажей</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.imgBtn}>
                <img src={layout} alt="" />
                <button className={classes.btn}>Планировка 2-8 этажей</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.imgBtn}>
                <img src={layout} alt="" />
                <button className={classes.btn}>Планировка 2-8 этажей</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Layout;
