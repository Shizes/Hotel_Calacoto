import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Image
          src="/icon/logo_hotel.jpg"
          alt="Calacoto Hotel Logo"
          width={74}
          height={64}
        />
      </div>
      {/* Botones */}
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
        <button className="navbar-button">
          <Image
            src="/icon/navbar.jpg"
            alt="Menu Icon"
            width={32}
            height={32}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
