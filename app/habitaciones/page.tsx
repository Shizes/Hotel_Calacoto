"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";


const Habitaciones = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch(
          "https://673ea175a9bc276ec4b511e8.mockapi.io/rooms"
        );
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        console.error("Error al obtener las habitaciones:", error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Barra superior ajustada */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#f8f8f8",
          padding: "10px 20px",
          borderBottom: "1px solid #ddd",
          position: "sticky",
          top: "0",
          zIndex: "1000", // Asegura que la barra superior esté sobre otros elementos
        }}
      >
        {/* Iconos y texto */}
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span role="img" aria-label="person">
              👤
            </span>
            <div>
              <p style={{ margin: "0", fontSize: "14px", color: "#333" }}>
                Personas
              </p>
              <p style={{ margin: "0", fontSize: "12px", color: "#666" }}>01</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span role="img" aria-label="calendar">
              📅
            </span>
            <div>
              <p style={{ margin: "0", fontSize: "14px", color: "#333" }}>
                Inicio
              </p>
              <p style={{ margin: "0", fontSize: "12px", color: "#666" }}>
                09 oct 2024
              </p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span role="img" aria-label="calendar">
              📅
            </span>
            <div>
              <p style={{ margin: "0", fontSize: "14px", color: "#333" }}>
                Salida
              </p>
              <p style={{ margin: "0", fontSize: "12px", color: "#666" }}>
                13 oct 2024
              </p>
            </div>
          </div>
        </div>

        {/* Botón de reservas */}
        <button
          style={{
            backgroundColor: "#e91e63",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            fontSize: "14px",
            fontWeight: "bold",
            cursor: "pointer",
            zIndex: "999", // Coloca el botón por encima de otros elementos
          }}
        >
          Reservas
        </button>
      </div>

      {/* Imagen y descripción */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "300px",
          overflow: "hidden",
        }}
      >
        <img
          src="/img/fonditohabitaciones.jpg"
          alt="Habitaciones de lujo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            width: "80%",
            maxWidth: "600px",
          }}
        >
          <h1 style={{ margin: "0", fontSize: "24px" }}>Habitaciones</h1>
          <p style={{ margin: "10px 0", fontSize: "16px", lineHeight: "1.5" }}>
            Elegantes dormitorios de lujo, suites, alojamiento estilo Airbnb y
            apartamentos con cocina. Incluyen desayuno buffet, estacionamiento y
            conserjería 24/7. Encuentre el diseño perfecto para usted.
          </p>
        </div>
      </div>

      {/* Sección de habitaciones */}
      <div style={{ padding: "20px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Recomendados</h2>
        <div style={{ display: "flex", overflowX: "auto", gap: "10px" }}>
          {rooms.slice(0, 2).map((room) => (
            <div
              key={room.id}
              style={{
                flex: "0 0 auto",
                width: "250px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <img
                src={room.avatar}
                alt={room.name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <div style={{ padding: "10px" }}>
                <h3 style={{ fontSize: "18px", margin: "10px 0" }}>{room.name}</h3>
                <p style={{ fontSize: "16px", color: "#555" }}>{room.price}</p>
                <button
                  style={{
                    backgroundColor: "#6200ee",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px 15px",
                    cursor: "pointer",
                  }}
                >
                  Reservar
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "24px", margin: "20px 0" }}>Todos los Paquetes</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {rooms.map((room) => (
            <div
              key={room.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <img
                src={room.avatar}
                alt={room.name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <div style={{ padding: "10px" }}>
                <h3 style={{ fontSize: "18px", margin: "10px 0" }}>{room.name}</h3>
                <p style={{ fontSize: "16px", color: "#555" }}>{room.price}</p>
                <button
                  style={{
                    backgroundColor: "#6200ee",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px 15px",
                    cursor: "pointer",
                  }}
                >
                  Reservar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Habitaciones;
