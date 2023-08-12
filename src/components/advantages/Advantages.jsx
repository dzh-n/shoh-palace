import React from "react";
import classes from "./advantages.module.scss";
import icon from "../img/logo/icon.home.svg";
import parking from "../img/parking.png";
import playground from "../img/playground.png";
import videoSurveillance from "../img/videoSurveillance.png";
import closedYard from "../img/closedYard.png";
import waterSystem from "../img/waterSystem.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Advantages() {
  return (
    <div className={classes.advantages}>
      <div className={classes.wrapper}>
        <div className={classes.text}>
          <h1 className={classes.fontSize1}>Основные преимущества</h1>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi Ut enim ad <br />
            minim veniam. Ut enim ad minim veniam, quis nostrud exercitation
            ullamc.
          </p>
        </div>
        <div className={classes.sliderWrapper}>
          <Swiper
            slidesPerView={2}
            spaceBetween={16}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            <SwiperSlide>
              <div className={classes.card}>
                <img src={icon} alt="" />
                <h1 className={classes.fontSize2}>Охранная система</h1>
                <p>
                  Ut enim ad minim veniam, quis nostrud <br /> exercitation
                  ullamco laboris nisi.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.card}>
                <img src={icon} alt="" />
                <h1 className={classes.fontSize2}>Охранная система</h1>
                <p>
                  Ut enim ad minim veniam, quis nostrud <br /> exercitation
                  ullamco laboris nisi.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.card}>
                <img src={icon} alt="" />
                <h1 className={classes.fontSize2}>Охранная система</h1>
                <p>
                  Ut enim ad minim veniam, quis nostrud <br /> exercitation
                  ullamco laboris nisi.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.card}>
                <img src={icon} alt="" />
                <h1 className={classes.fontSize2}>Охранная система</h1>
                <p>
                  Ut enim ad minim veniam, quis nostrud <br /> exercitation
                  ullamco laboris nisi.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={classes.imgAdvantages}>
          <div className={classes.parkingcomand}>
            <p className={classes.parking}><span className={classes.borderbot}>ЛИЧНЫЙ</span> ПАРКИНГ</p>
            <img src={parking} alt="" />
          </div>
          <div className={classes.colImg}>
            <div className={classes.playgroundcomand}>
              <img src={playground} alt="" />{" "}
              <p className={classes.playground}><span className={classes.borderbot}>ДЕТСКАЯ П</span>ЛОЩАДКА</p>
            </div>
            <div className={classes.playgroundcomand}>
              <img src={videoSurveillance} alt="" />{" "}
              <p  className={classes.playground}><span className={classes.borderbot}>ВИДЕОНА</span>БЛЮДЕНИЕ</p>
            </div>
            <div className={classes.playgroundcomand}>
              <img src={closedYard} alt="" />{" "}
              <p  className={classes.playground}><span className={classes.borderbot}>ЗАКРЫТЫЙ</span> ДВОР</p>
            </div>
            <div className={classes.playgroundcomand}>
              <img src={waterSystem} alt="" />{" "}
              <p className={classes.playground}><span className={classes.borderbot}>СИСТЕМА</span> ВОДОСНОБЖЕНИЯ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
