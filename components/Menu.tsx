import React from "react";

interface MenuProps {
  menu: {
    id: string;
    name: string;
    image: string;
  };
}

const Menu = ({ menu }: MenuProps) => {
  return (
    <div>
      <img src={menu.image} alt="boton" />
      <h2>{menu.name}</h2>
    </div>
  );
};

export default Menu;
