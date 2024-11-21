"use client"; // Esto lo convierte en un componente del cliente

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <Image
            src="/icon/logo_hotel.jpg"
            alt="Calacoto Hotel Logo"
            width={84}
            height={64}
          />
        </div>
        <div className="navbar-buttons">
          <Link href="/perfil">
            <button className="navbar-button">
              <Image
                src="/icon/user.jpg"
                alt="User Icon"
                width={32}
                height={32}
              />
            </button>
          </Link>
          <button className="navbar-button" onClick={toggleMenu}>
            <Image
              src="/icon/navbar.jpg"
              alt="Menu Icon"
              width={32}
              height={32}
            />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      {isMenuOpen && (
        <div className="sidebar">
          <button className="sidebar-back" onClick={toggleMenu}>
            <span>&larr;</span> Volver
          </button>
          <div className="sidebar-logo">
            <Image
              src="/icon/logo_hotel.jpg"
              alt="Calacoto Hotel Logo"
              width={84}
              height={64}
            />
          </div>
          <ul className="sidebar-links">
            <li>
              <Link href="/Principal">Principal</Link>
            </li>
            <li>
              <Link href="/ofertas">Ofertas</Link>
            </li>
            <li>
              <Link href="/habitaciones">Habitaciones</Link>
            </li>
            <li>
              <Link href="/eventos">Eventos</Link>
            </li>
            <li>
              <Link href="/salones">Salones</Link>
            </li>
            <li>
              <Link href="/galeria">Galería</Link>
            </li>
            <li>
              <Link href="/terminos">Términos y Condiciones</Link>
            </li>
            <li>
              <Link href="/contactos">Contactos</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
