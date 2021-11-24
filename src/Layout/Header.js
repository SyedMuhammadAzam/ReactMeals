import { Fragment } from "react";

import Mocca1 from "../Assets/Mocca2.jpg";
import Mocca from "../Assets/Mocca Lahore.png";
import classes from "./Header.module.css";
import CartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={Mocca} alt="Mocca" width="90" height="100" />
        <CartButton onClick={props.onClick}>Your Cart</CartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={Mocca1} alt="A table Full of Delicious Food" />
      </div>
    </Fragment>
  );
};
export default Header;
