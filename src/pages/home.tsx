import { useGetMoviesOnlyViewsLikes } from "../components/hooks/use-queries";

const Movies = {
  movie1: {
    id: 1,
    name: "Spider-man",
    image: "Somethuing Here",
    likes: 12,
    views: 12,
  },
  movie2: {
    id: 2,
    name: "Super Mario Bros",
    image: "Something Here",
    likes: 22,
    views: 22,
  },
};

const Home = () => {
  return (
    <div className="starter">
      <div className="starter-top">
        <h2>Track films and Tv Shows you've watched.</h2>
        <h2>Save and Share those you want to see.</h2>
        <h2>Tell your Friends and Family what's good.</h2>
      </div>
      <div className="most-view-like">
        <p>Recent Films with hover effect of likes and views</p>
        <div>
          <span>
            <p>{Movies.movie1.name}</p>
            <p>{Movies.movie1.likes}</p>
            <p>{Movies.movie1.views}</p>
          </span>
          <span>
            <p>{Movies.movie2.name}</p>
            <p>{Movies.movie2.likes}</p>
            <p>{Movies.movie2.views}</p>
          </span>
        </div>
      </div>
      <div>Popular reviews this week wtih column for popular lists</div>
    </div>
  );
};

export default Home;
