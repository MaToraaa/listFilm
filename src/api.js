import axios from "axios";

const apiKey = import.meta.env.VITE_PILM_APIKEY;
const baseUrl = import.meta.env.VITE_PILM_BASE_URL;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  return movie.data.results;
};
