"use client";
import { getPrincipal } from "@/lib/getPrincipal";
import { useEffect, useState } from "react";
import Botones from "./Botones";

interface ButtonType {
  id: string;
  name: string;
  image: string;
}

const Menu = () => {
  const [boton, setBoton] = useState<ButtonType[]>([]);

  useEffect(() => {
    async function fetchBotones() {
      try {
        const response = await getPrincipal(
          "https://673e55760118dbfe860b0087.mockapi.io/api/v1/botones"
        );
        setBoton(response);
      } catch (error) {
        console.error("Error al obtener los botones:", error);
      }
    }
    fetchBotones();
  }, []);

  return (
    <section>
      <div>
        {boton.map((boton) => (
          <Botones key={boton.id} boton={boton} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
