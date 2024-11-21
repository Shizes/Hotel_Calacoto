import React from "react";
import "./NavButton.css";

interface NavButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

export const NavButton: React.FC<NavButtonProps> = ({ direction, onClick }) => {
  return (
    <button className={`nav-button ${direction}`} onClick={onClick}>
      <i className="material-icons">
        {direction === "left" ? "arrow_back" : "arrow_forward"}
      </i>
    </button>
  );
};
