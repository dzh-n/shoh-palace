import React from "react";
import classes from "./about.module.scss";
import home2 from "../img/home2.png";

function About() {
  return (
    <div className={classes.about}>
      {" "}
      <div className={classes.wrapper}>
        <div className={classes.img}>
          <img src={home2} alt="" />
        </div>
        <div className={classes.text}>
          <h1>О ЖИЛОМ КОМПЛЕКСЕ</h1>
          <p>
            Жилой комплекс «Шоҳ Палас Plaza» расположен рядом с <br /> зелёной
            зоной города, которая гарантирует прекрасный <br /> вид из
            большинства окон. Владельцы таких квартир <br /> получают максимум
            свободного пространства, ведь частью <br /> интерьера их дома
            становится сам город. Это уникальное <br /> место для жизни человека, где
            предоставляются огромные <br /> возможности для создания истинного
            комфорта.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
