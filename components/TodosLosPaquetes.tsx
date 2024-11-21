import React from "react";
import CardHabitacion from "@/components/CardHabitacion";
import "./TodosLosPaquetes.css";

export const TodosLosPaquetes = () => {
  const paquetes = [
    { imagen: "/img/habitacion_simple.jpg", titulo: "Habitacion Simple", precio: "$80 / noche" },
    { imagen: "/img/depa_doble.jpg", titulo: "Habitacion Doble/Matrimonial", precio: "$120 / noche" },
    { imagen: "/img/habitacion_triple.jpg", titulo: "Habitacion Triple", precio: "$110 / noche" },
    { imagen: "/img/SuiteEjecutiva_Business.jpg", titulo: "Departamento Familiar", precio: "$125 / noche" },
    { imagen: "/img/depa_simple.jpg", titulo: "Departamento Simple", precio: "$110 / noche" },
    { imagen: "/img/depa_doble.jpg", titulo: "Departamento Doble", precio: "$120 / noche" },
  ];

  return (
    <section className="todos-paquetes">
      <h2 className="section-title">Todos los Paquetes</h2>
      <div className="paquetes-container">
        {paquetes.map((paquete, index) => (
          <CardHabitacion
            key={index}
            imagen={paquete.imagen}
            titulo={paquete.titulo}
            precio={paquete.precio}
          />
        ))}
      </div>
    </section>
  );
};
