import { useState, useEffect } from "react";
import api from "./utils/api-methods";
import { Movie, MovieViews } from "./types/movie";

export const useGetMoviesForViewLikes = () => {
  const [data, setData] = useState<MovieViews>();

  const getData = async () => {
    const results = await api.get<MovieViews>("./data/ndummy_data.json");
    setData(results);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};
