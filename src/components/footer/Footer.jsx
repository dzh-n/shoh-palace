import React from "react";
import classes from "./footer.module.scss";
import facebook from "../img/logo/facebook.svg";
import instagram from "../img/logo/instagram.svg";
import telegram from "../img/logo/telegram.svg";
import logo from "../img/logo/logo.svg";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.logoTextIcon}>
          <img src={logo} alt="" />
          <div className={classes.text}>
            <p>Планировки</p>
            <p>Ход строительства</p>
            <p>Контакты</p>
          </div>
          <div className={classes.social}>
            <div>
              <img src={facebook} alt="" />
            </div>
            <div>
              <img src={instagram} alt="" />
            </div>
            <div>
              <img src={telegram} alt="" />
            </div>
          </div>
        </div>
        <p>
          Product by <span>BO</span>/BO
        </p>
      </div>
    </div>
  );
}

export default Footer;
