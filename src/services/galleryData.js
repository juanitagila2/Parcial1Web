import axios from "axios";

export const galleryData = async () => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.mockaroo.com/api/37797df0?count=3&key=298bb4f0", // trae solo 3 registros
    };

    const response = await axios.request(config);

    console.log("📢 API Response:", response.data); // imprime la respuesta

    // Verificamos si response.data es un array
    if (!Array.isArray(response.data)) {
      console.error(" La API no devolvió un array válido:", response.data);
      throw new Error("La API no devolvió un array válido");
    }

    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return [];
  }
};