import React from "react";
import "./Hero.css";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">Hotel Calacoto</h1>
      <p className="hero-description">
        "Un hotel para cada momento, lleno de emociones inolvidables."
      </p>
      <p className="hero-subtext">
        Cada momento se siente como la primera vez.
      </p>
      <button className="hero-button">
        <img src="" alt="Icon-butoon" className="hero-button" />
        <Link>/Services</Link>
      </button>
      <img src="" alt="Hotel Interior" className="hero-image" />
    </section>
  );
};

export default Hero;
