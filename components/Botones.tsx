import React from "react";

interface BotonProps {
  boton: {
    id: string;
    name: string;
    image: string;
  };
}

const Botones = ({ boton }: BotonProps) => {
  return (
    <div>
      <img src={boton.image} alt="boton" />
      <h2>{boton.name}</h2>
    </div>
  );
};

export default Botones;
