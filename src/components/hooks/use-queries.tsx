import React, { useState, useEffect } from "react";

export function useGetMoviesOnlyViewsLikes() {
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/type");
    const data = await response.json();
    //const names = data.results.map((r) => r.name); // extracting 'name' prop into array of names
    setMovies(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return movies;
}
