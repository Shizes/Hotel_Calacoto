import React from "react";
import "./Offers.css";

const Offers = () => {
  return (
    <section className="offers">
      <h2>Ofertas Especiales</h2>
      <div className="offers-list">
        <div className="offer">
          <img src="/assets/offer_room1.jpg" alt="Room 1" />
          <p>Habitación Simple - $80/noche</p>
        </div>
        <div className="offer">
          <img src="/assets/offer_room2.jpg" alt="Room 2" />
          <p>Suite Ejecutiva - $125/noche</p>
        </div>
      </div>
    </section>
  );
};

export default Offers;