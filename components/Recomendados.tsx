import React, { useRef } from "react";
import "./Recomendados.css";
import CardHabitacion from "./CardHabitacion";
import { NavButton } from "./ui/NavButton";

export const Recomendados = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200; // Mueve 200px por clic
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const habitaciones = [
    { imagen: "/img/habitacion_simple.jpg", titulo: "Habitacion Simple", precio: "$80 / noche" },
    { imagen: "/img/SuiteEjecutiva_Business.jpg", titulo: "Suites Ejecutivas", precio: "$125 / noche" },
    { imagen: "/img/depa_simple.jpg", titulo: "Departamento Simple", precio: "$20.99" },
    { imagen: "/img/depa_doble.jpg", titulo: "Habitacion Doble/Matrimonial", precio: "$120 / noche" },
  ];

  return (
    <section className="recomendados">
      <h2 className="section-title">Recomendados</h2>
      <div className="recomendados-container">
        <NavButton direction="left" onClick={() => scroll("left")} />
        <div className="cards-container" ref={containerRef}>
          {habitaciones.map((habitacion, index) => (
            <CardHabitacion
              key={index}
              imagen={habitacion.imagen}
              titulo={habitacion.titulo}
              precio={habitacion.precio}
            />
          ))}
        </div>
        <NavButton direction="right" onClick={() => scroll("right")} />
      </div>
    </section>
  );
};
