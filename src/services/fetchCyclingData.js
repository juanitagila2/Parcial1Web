import axios from "axios";

export const fetchCyclingData = async () => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.mockaroo.com/api/566d07d0?count=4&key=298bb4f0", // trae solo 4 registros
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
