"use client";
import { getPrincipal } from '@/lib/getPrincipal';
import { use, useEffect, useState } from 'react';
import Servi from './Servi';

interface ServiType {
    id: string;
    name: string;
    image: string;
  }


const Servicios = () => {
  const [servi, setServi] = useState<ServiType[]>([]);

  useEffect(() => {
    async function fetchServi() {
      try {
        const response = await getPrincipal(
          "https://673e55760118dbfe860b0087.mockapi.io/api/v1/servicios"
        );
        setServi(response);
      } catch (error) {
        console.error("Error al obtener los servicios:", error);
      }
    }
    fetchServi();
  }, []);

  return (
    <div>
      <div>
      {servi.map((servi) => (
          <Servi key={servi.id} servi={servi} />
        ))}
      </div>
    </div>
  );
};

export default Servicios