import React from "react";

import Hero from "../../components/Hero";
import Ofertas from "../../components/Ofertas";
import Servicios from "../../components/Servicios";
import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";


const Principal = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Servicios />
      <Ofertas />
      <Footer/>
    </div>
  );
};

export default Principal;