"use client";

import React from "react";
import Image from "next/image";
import "./CardHabitacion.css";

interface CardHabitacionProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const CardHabitacion: React.FC<CardHabitacionProps> = ({
  image,
  title,
  description,
  price,
}) => {
  return (
    <div className="card-habitacion">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="card-habitacion-image"
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{price}</span>
    </div>
  );
};

export default CardHabitacion;
