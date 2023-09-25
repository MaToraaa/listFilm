import axios from "axios";

const apiKey = import.meta.env.VITE_PILM_APIKEY;
const baseUrl = import.meta.env.VITE_PILM_BASE_URL;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
  return movie.data.results;
};
export const searchMovie = async (q) => {
  const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`);
  return search.data;
};
