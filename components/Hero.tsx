import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">Hotel Calacoto</h1>
      <p className="hero-description">
        "Un hotel para cada momento, lleno de emociones inolvidables."
      </p>
      <p className="hero-subtext">Cada momento se siente como la primera vez.</p>
      <a href="#reservas">
        <img
          src=""
          alt="Ir a reservas"
          className="hero-action"
        />
      </a>
      <img
        src="/assets/hero_image.jpg"
        alt="Hotel Interior"
        className="hero-image"
      />
    </section>
  );
};

export default Hero;
