import axios from "axios";

const API_KEY = "eb0ede71cfd200168a891ce9b77b6a33";
const API_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query) => {
  const response = await axios.get(`${API_URL}/search/movie`, {

    // Configurazione dei parametri della richiesta:
    params: {
      api_key: API_KEY, 
      query, 
    },
  });

  // Map che aggiunge una proprietà ad ogni elemento per specificarne la natura
  return response.data.results.map((movie) => ({
    ...movie,
    type: "movie",
  }));
};

export const fetchTvSeries = async (query) => {
  const response = await axios.get(`${API_URL}/search/tv`, {
    
    // Configurazione dei parametri della richiesta:
    params: {
      api_key: API_KEY, 
      query, 
    },
  });
  
  // Map che aggiunge una proprietà ad ogni elemento per specificarne la natura
  return response.data.results.map((tv) => ({
    ...tv,
    type: "tv",
  }));
};
