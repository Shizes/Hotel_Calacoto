import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <h2>Servicios</h2>
      <div className="services-list">
        <div className="service">
          <img src="/assets/service_wifi.png" alt="WiFi" />
          <p>WiFi</p>
        </div>
        <div className="service">
          <img src="/assets/service_restaurant.png" alt="Restaurant" />
          <p>Restaurante</p>
        </div>
        <div className="service">
          <img src="/assets/service_parking.png" alt="Parking" />
          <p>Parqueo</p>
        </div>
      </div>
    </section>
  );
};

export default Services;