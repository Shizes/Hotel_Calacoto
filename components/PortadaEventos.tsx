import React from "react";
import "./PortadaEventos.css";
import Image from "next/image";

const PortadaEventos = () => {
  return (
    <section className="eventos-container">
      <div className="eventos-overlay">
        <h1 className="eventos-title">Eventos</h1>
        <p className="eventos-description">
          “Porque nos apasiona el detalle y nos comprometemos a exceder tus
          expectativas, te ayudamos a crear experiencias inolvidables a través
          de eventos únicos. <br />
          <strong> A LA MEDIDA DE TUS OBJETIVOS.</strong>”
        </p>
        <div className="eventos-icon">
          {/*<Image
            src="/img/cumpleaños.png"
            width={40}
            height={40}
            alt="portada"
          />/*/}
        </div>
      </div>
    </section>
  );
};

export default PortadaEventos;
