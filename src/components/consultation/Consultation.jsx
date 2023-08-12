import React from "react";
import classes from "./consultation.module.scss";

function Consultation() {
  return (
    <div className={classes.consultation}>
      <div className={classes.wrapper}>
        <h1>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</h1>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        <div className={classes.inputs}>
          <input placeholder="Ваше имя*" type="text" />
          <input placeholder="Номер телефона или email*" type="text" />
        </div>
        <button>Отправить</button>
      </div>
    </div>
  );
}

export default Consultation;
