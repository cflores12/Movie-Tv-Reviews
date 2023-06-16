import { useState, useEffect } from "react";
import api from "../utils/api-methods";
import { Movies, Movie } from "../types/movie";

export const useGetMovies = () => {
  const [data, setData] = useState<Movie[]>([]);

  const getData = async () => {
    const { movies } = await api.get<Movies>("./data/dummy_data.json");
    setData(movies);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};
