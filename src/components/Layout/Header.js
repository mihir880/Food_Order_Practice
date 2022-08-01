import React from "react";
import classes from "./Header.module.css";
import mealsHeroImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious Meals</h1>

        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsHeroImg} alt="Main Hero" />
      </div>
    </>
  );
};

export default Header;
