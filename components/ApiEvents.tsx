"use client";
import { get } from "http";
import CardEvent from "./CardEvent";
import { getEventos } from "../lib/getEvento";
import { useEffect, useState } from "react";

interface CardEventsType {
  id: string;
  name: string;
  image: string;
  description: string;
}

const ApiEvents = () => {
    const[cardEvents, setCardEvents] = useState<CardEventsType[]>([]);
    useEffect(() => {
        async function fetchCardEvents() {
            try{
                const response = await getEventos(
                    "https://673e808e0118dbfe860b76dd.mockapi.io/eventos"
                );
                setCardEvents(response);
            }catch(error){
                console.error("Error al obtener eventos", error);
            }
        }
        fetchCardEvents();
    }, []);
  return (
    <div><h2>Eventos</h2>
    {cardEvents.map(( card)  => (<CardEvent key={card.id} cardEvent={card} />
        
    ))}
    </div>
  );
}

export default ApiEvents