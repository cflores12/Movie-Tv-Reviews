import { useGetMovies } from "../components/hooks/use-queries";

const Films = () => {
  const movieData = useGetMovies();

  if (movieData.length === 0) return null;

  return (
    <div>
      <h2>Grab Data of Movies with views and likes hover effect</h2>

      <div>
        <p>Test</p>
      </div>
      <div>
        <p>Test Grab</p>
      </div>
    </div>
  );
};

export default Films;
