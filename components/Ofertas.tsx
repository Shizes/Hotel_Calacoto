import React from "react";
import "./Ofertas.css";

const offers = [
  {
    title: "Habitación Simple",
    image: "/assets/room1.jpg",
    oldPrice: "$120",
    newPrice: "$80",
    status: "Disponible",
  },
  {
    title: "Suites Ejecutivas",
    image: "/assets/room2.jpg",
    oldPrice: "$200",
    newPrice: "$125",
    status: "Agotado",
  },
];

const OffersList = () => {
  return (
    <section className="offers-list">
      <h2>Ofertas Especiales</h2>
      <p>Mejores Ofertas del Mes</p>
      <div className="offers-grid">
        {offers.map((offer) => (
          <div className="offer-card" key={offer.title}>
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <div className="offer-details">
              <h3>{offer.title}</h3>
              <p>
                <span className="old-price">{offer.oldPrice}</span>{" "}
                <span className="new-price">{offer.newPrice}</span>
              </p>
              <p className={`status ${offer.status.toLowerCase()}`}>
                {offer.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersList;
