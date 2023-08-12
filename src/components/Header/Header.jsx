import classes from "./header.module.scss";
import logo from "../img/logo/logo.svg";
import burger from "../img/logo/burger.svg";
import { useState } from "react";

function Header() {
  // const text = [
  //   { id: 1, name: "О жилом комплексе" },
  //   { id: 2, name: "Планировки" },
  //   { id: 3, name: "Ход строительства" },
  //   { id: 4, name: "Контакты" },
  // ];

  // const [open, setOpen] = useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <img src={logo} alt="" />

        <div className={classes.text}>
          <p>О жилом комплексе</p>
          <p>Планировки</p>
          <p>Ход строительства</p>
          <p>Контакты</p>
        </div>

        <div className={classes.divBtn}>
          <button className={classes.btn}>Заказать звонок</button>
        </div>
        <div className={classes.burger}>
          <img src={burger} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
