import React from "react";
import N64Image from "./../img/N64.webp";

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={N64Image} alt="An image of tickets" />
    </React.Fragment>
  );
}

export default Header;