import React from "react";
import logo from "../assets/Netflix_Logo_PMS.png";
const Header = () => {
  return (
    <div className="absolute px-36 py-2 bg-gradient-to-t from-black z-10">
      <img className="w-48" src={logo} alt="netflix logo" />
    </div>
  );
};

export default Header;
