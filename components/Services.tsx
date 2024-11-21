import React from "react";
import "./ServicesList.css";

const services = [
  { title: "Caja Fuerte", icon: "" },
  { title: "Wifi", icon: "" },
  { title: "Restaurante", icon: "" },
  { title: "Minibar", icon: "" },
  { title: "Tv Cable", icon: "" },
  { title: "24/7 Luz", icon: "" },
  { title: "Lavandería", icon: "" },
  { title: "Espacio de Parqueo", icon: "" },
];

const ServicesList = () => {
  return (
    <section className="services-list">
      <h2>Servicios</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-item" key={service.title}>
            <img src={service.icon} alt={service.title} />
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
