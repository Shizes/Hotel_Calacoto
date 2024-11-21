"use client";
import { getPrincipal } from '@/lib/getPrincipal';
import { use, useEffect, useState } from 'react';
import Menu from './Menu';

interface MenuType {
    id: string;
    name: string;
    image: string;
  }


const Servicios = () => {
  const [menu, setMenu] = useState<MenuType[]>([]);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await getPrincipal(
          "https://673e55760118dbfe860b0087.mockapi.io/api/v1/servicios"
        );
        setMenu(response);
      } catch (error) {
        console.error("Error al obtener los servicios:", error);
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

export default Servicios