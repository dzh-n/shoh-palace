import React from "react";
import classes from "./mainBaner.module.scss";
import home1 from "../img/home1.png";

function MainBaner() {
  return (
    <div className={classes.mainBaner}>
      <div className={classes.wrapper}>
        <div className={classes.text}>
          <h1>
            GRAND SHOH <br /> PALACE
          </h1>
          <p>
            ️СОВРЕМЕННЫЙ ЖИЛОЙ КОМПЛЕКС БИЗНЕС КЛАССА <br /> В САМОМ СЕРДЦЕ
            СТОЛИЦЫ;
            <br />
            КВАРТИРЫ С ФУНКЦИОНАЛЬНОЙ ПЛАНИРОВКОЙ;
            <br /> КОМФОРТ, СПОКОЙСТВИЕ И БЕЗОПАСНОСТЬ.
          </p>
          <button className={classes.btn}>Оставить заявку</button>
        </div>
        <div className={classes.img}>
          <img src={home1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MainBaner;
