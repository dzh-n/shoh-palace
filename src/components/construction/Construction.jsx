import React from "react";
import classes from "./construction.module.scss";


function Construction() {
  return (
    <div className={classes.construction}>
      <div className={classes.wrapper}>
        <div className={classes.row}>
          <h1>ХОД СТРОИТЕЛЬСТВА</h1>
          <div className={classes.select}>
          <select className={classes.year}>
            <option>2023</option>
          </select>
          <select className={classes.month}>
            <option>январь</option>
            <option>февраль</option>
            <option>март</option>
            <option>апрель</option>
            <option>май</option>
            <option>июнь</option>
            <option>июль</option>
            <option>август</option>
            <option>сентябрь</option>
            <option>октябрь</option>
            <option>ноябрь</option>
            <option>декабрь</option>
          </select></div>
        </div>
      </div>
     
    </div>
  );
}

export default Construction;
