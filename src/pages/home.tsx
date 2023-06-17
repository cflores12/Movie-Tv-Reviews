import { useGetMoviesOnlyViewsLikes } from "../components/hooks/use-queries";
import imgAvatar from "./img/img_avatar.png";
import eye from "./img/eye.svg";
import heart from "./img/heart.svg";

const Movies = {
  movie1: {
    id: 1,
    name: "Spider-man",
    image: "Somethuing Here",
    likes: 12,
    views: 12,
    reviews: {
      review1: {
        id: 1,
        comment: "Trash Moive dont see!",
        userName: "dan",
        stars: 1,
      },
      review2: {
        id: 2,
        comment: "Good Movie must watch!",
        userName: "bob",
        stars: 4,
      },
    },
  },
  movie2: {
    id: 2,
    name: "Super Mario Bros",
    image: "Something Here",
    likes: 22,
    views: 22,
    reviews: {
      review1: {
        id: 1,
        comment: "Die of Laughter! Must Watch!",
        userName: "dan",
        stars: 5,
      },
      review2: {
        id: 2,
        comment: "Good movie could be better",
        userName: "bob",
        stars: 3,
      },
    },
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
        <span className="card">
          <img src={imgAvatar} className="card-movie" />
          <div className="card-middle-box">
            <div className="box">
              <img src={eye} />
              <p>5,000</p>
              <img src={heart} />
              <p>10,000</p>
            </div>
          </div>
        </span>
        <span className="card">
          <img src={imgAvatar} className="card-movie" />
        </span>
        <span className="card">
          <img src={imgAvatar} className="card-movie" />
        </span>
        <span className="card">
          <img src={imgAvatar} className="card-movie" />
        </span>
        <span className="card">
          <img src={imgAvatar} className="card-movie" />
        </span>
        <span className="card">
          <img src={imgAvatar} className="card-movie" />
        </span>
      </div>
      <div className="playlists-comments">
        <div className="recent-comments">
          <p>This is for most recent reviews with comments</p>
        </div>
        <div className="popular-playlists">
          <p>This is for the most popular playlits</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
