import React from "react";

interface CardEventProps {
  cardEvent: {
    id: string;
    name: string;
    description: string;
    image: string;
  };
}

const CardEvent = ({ cardEvent }: CardEventProps) => {
  return (
    <section className="eventos">
      <div className="eventos-card">
        <img src={cardEvent.image} alt="" />
        <div>
        <h3>{cardEvent.name}</h3>
        <p>{cardEvent.description}</p>
        <button>Reservar</button>
        <button></button>
        </div>
      </div>
    </section>
  );
};

export default CardEvent;
