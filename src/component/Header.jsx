import React from "react";
import "./Header.css";
import teslaLogo from "../assets/teslaLogo.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={teslaLogo} alt="logo" />
      </div>
      <div className="header__center">
        <p>MODEL 5 </p>
        <p>MODEL X </p>
        <p>MODEL 3 </p>
        <p>MODEL Y </p>
        <p>SOLAR ROOF</p>
        <p>SOLAR PANEL</p>
      </div>
      <div className="header__right">
        <p>Shop</p>
        <p>Tesla Account</p>
      </div>
    </div>
  );
}
