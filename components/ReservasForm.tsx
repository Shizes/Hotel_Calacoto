import React, { useState } from "react";
import "./ReservasForm.css";

export const ReservasForm = () => {
  const [personas, setPersonas] = useState(1); // Default: 1 persona
  const [fechaInicio, setFechaInicio] = useState(""); // Fecha de inicio
  const [fechaSalida, setFechaSalida] = useState(""); // Fecha de salida

  const handlePersonasChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPersonas(parseInt(e.target.value));
  };

  return (
    <div className="reservas-form">
      {/* Campo de selección de personas */}
      <div className="campo">
        <label htmlFor="personas">Personas</label>
        <select id="personas" value={personas} onChange={handlePersonasChange}>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      {/* Campo de selección de fecha de inicio */}
      <div className="campo">
        <label htmlFor="fecha-inicio">Inicio</label>
        <input
          id="fecha-inicio"
          type="date"
          value={fechaInicio}
          onChange={(e) => setFechaInicio(e.target.value)}
        />
      </div>

      {/* Campo de selección de fecha de salida */}
      <div className="campo">
        <label htmlFor="fecha-salida">Salida</label>
        <input
          id="fecha-salida"
          type="date"
          value={fechaSalida}
          onChange={(e) => setFechaSalida(e.target.value)}
        />
      </div>

      {/* Botón de reservas */}
      <button className="boton-reserva">Reservas</button>
    </div>
  );
};
