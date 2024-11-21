import React from "react";
import "./OffersList.css";

const offers = [
  {
    title: "Habitación Simple",
    image: "/assets/room1.jpg",
    oldPrice: "$120",
    newPrice: "$80",
    status: "Disponible",
    statusClass: "available",
  },
  {
    title: "Suites Ejecutivas",
    image: "/assets/room2.jpg",
    oldPrice: "$200",
    newPrice: "$125",
    status: "Agotado",
    statusClass: "unavailable",
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
              <p className="offer-price">
                <span className="old-price">{offer.oldPrice}</span>{" "}
                <span className="new-price">{offer.newPrice} / noche</span>
              </p>
              <p className={`offer-status ${offer.statusClass}`}>{offer.status}</p>
              <button
                className={`offer-button ${offer.statusClass}`}
                disabled={offer.status === "Agotado"}
              >
                <img src="" alt="Carrito-img" className="c-image" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersList;