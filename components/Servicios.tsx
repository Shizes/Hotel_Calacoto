import React from "react";
import "./Servicios.css";

const services = [
  { title: "Caja Fuerte", icon: "/assets/icon-safe.png" },
  { title: "Wifi", icon: "/assets/icon-wifi.png" },
  { title: "Restaurante", icon: "/assets/icon-restaurant.png" },
  { title: "Minibar", icon: "/assets/icon-minibar.png" },
  { title: "Tv Cable", icon: "/assets/icon-tv.png" },
  { title: "24/7 Luz", icon: "/assets/icon-light.png" },
  { title: "Lavandería", icon: "/assets/icon-laundry.png" },
  { title: "Espacio de Parqueo", icon: "/assets/icon-parking.png" },
];

const ServicesList = () => {
  return (
    <section className="services-list">
      <h2 className="services-title">Servicios</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-item" key={service.title}>
            <img src={service.icon} alt={service.title} className="service-icon" />
            <p className="service-title">{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
