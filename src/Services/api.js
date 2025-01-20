import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getVideos = async () => {
  try {
    const response = await api.get("/videos"); // Cambiado a "/videos"
    return response.data;
  } catch (error) {
    console.error("Error al buscar videos", error);
    throw new Error("No se pudieron obtener los videos. Intente de nuevo.");
  }
};

export const saveVideo = async (video) => {
  try {
    const response = await api.post("/videos", video); // Cambiado a "/videos"
    return response.data;
  } catch (error) {
    console.error("Error al crear video", error);
    throw error;
  }
};

export const deleteVideo = async (videoId) => {
  try {
    const response = await api.delete(`/videos/${videoId}`); // Cambiado a "/videos"
    return response.data;
  } catch (error) {
    console.error("Error al eliminar video", error);
    throw error;
  }
};

export const updateVideo = async (videoId, updatedVideo) => {
  try {
    const response = await api.put(`/videos/${videoId}`, updatedVideo); // Cambiado a "/videos"
    return response.data;
  } catch (error) {
    console.error("Error al actualizar video", error);
    throw error;
  }
};
