import React from "react";
import "./css/Header.css";
import HeaderOptions from "./HeaderOptions.js";
import MenuBar from "./MenuBar.js";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__center">
          <HeaderOptions
            color="white"
            textColor="black"
            title="MAIN PAGE"
          />
          <HeaderOptions
            color="#04376F"
            textColor="white"
            title="BOOK DAY TOUR"
          />
        </div>
      </div>
      <div className="header__right">
        <MenuBar />
      </div>
    </div>
  );
}

export default Header;
