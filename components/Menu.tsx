import React from "react";
import "./Menu.css";

interface MenuProps {
  menu: {
    id: string;
    name: string;
    image: string;
  };
}

const Menu = ({ menu }: MenuProps) => {
  return (
    <section className="menu">
    <div className="boton">
      <img src={menu.image} alt="boton" />
      <h2>{menu.name}</h2>
    </div>
    </section>
  );
};

export default Menu;
