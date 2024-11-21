// lib/fetchRooms.ts
export async function fetchRooms() {
    try {
      const response = await fetch("https://673ea175a9bc276ec4b511e8.mockapi.io/rooms", {
        cache: "no-store", // Asegura que los datos sean frescos cada vez
      });
      if (!response.ok) {
        throw new Error("Error al obtener las habitaciones");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error en fetchRooms:", error);
      throw error; // Permite manejar errores en la página principal
    }
  }
  