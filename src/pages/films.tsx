import { useGetMovies } from "../components/hooks/use-queries";

const Films = () => {
  const movieData = useGetMovies();
  console.log(movieData);

  if (movieData.length === 0) return null;

  return (
    <div>
      <h2>Grab Data of Movies with views and likes hover effect</h2>

      <div>
        <p>Test</p>
        <p>{movieData[0].id}</p>
      </div>
      <div>
        <p>Test Grab</p>
        <p>{movieData[0].views}</p>
      </div>
    </div>
  );
};

export default Films;
