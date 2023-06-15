import { useGetMoviesForViewLikes } from "../components/use-queries";

const Films = () => {
  const movieData = useGetMoviesForViewLikes();

  if (movieData.length === 0) return null;
  return (
    <div>
      <h2>Grab Data of Movies with views and likes hover effect</h2>

      <div>
        <p>Test</p>
        <p>{movieData[0]}</p>
      </div>
    </div>
  );
};

export default Films;
