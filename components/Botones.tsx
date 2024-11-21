"use client";
import { getPrincipal } from "@/lib/getPrincipal";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import { fetchExternalImage } from "next/dist/server/image-optimizer";

interface MenuType {
  id: string;
  name: string;
  image: string;
}

const Botones = () => {
  const [menu, setMenu] = useState<MenuType[]>([]);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await getPrincipal(
          "https://673e55760118dbfe860b0087.mockapi.io/api/v1/botones"
        );
        setMenu(response);
      } catch (error) {
        console.error("Error al obtener los botones:", error);
      }
    }
    fetchMenu();
  }, []);

  return (
    <div>
      <div>
        {menu.map((menu) => (
          <Menu key={menu.id} menu={menu} />
        ))}
      </div>
    </div>
  );
};

export default Botones;
