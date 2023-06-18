import { useGetMoviesOnlyViewsLikes } from "../components/hooks/use-queries";
import imgAvatar from "./img/img_avatar.png";
import eye from "./img/eye.svg";
import heart from "./img/heart.svg";
import profile from "./img/profile-example.svg";
import thumbUp from "./img/thumb-up.svg";
import thumbDown from "./img/thumb-down.svg";

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
          <h2>Recent Movie Reviews & Comments</h2>
          <div className="review">
            <img src={imgAvatar} className="movie" />
            <div className="user-info">
              <h5>Dan Forever</h5>
              <h6>6/17/2023 now</h6>
              <div className="comment">
                <img src={profile} className="profile" />
                <h5 className="user-comment">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like
                </h5>
                <div className="rating">
                  <div className="thumbUp">
                    <img src={thumbUp} />
                    <h5 className="thumb-count">10</h5>
                  </div>
                  <div className="thumbDown">
                    <img src={thumbDown} />
                    <h5 className="thumb-count">10</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="review">
            <img src={imgAvatar} className="movie" />
            <div className="user-info">
              <h5>Dan Forever</h5>
              <h6>6/17/2023 now</h6>
              <div className="comment">
                <img src={profile} className="profile" />
                <h5 className="user-comment">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like
                </h5>
                <div className="rating">
                  <div className="thumbUp">
                    <img src={thumbUp} />
                    <h5 className="thumb-count">10</h5>
                  </div>
                  <div className="thumbDown">
                    <img src={thumbDown} />
                    <h5 className="thumb-count">10</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popular-playlists">
          <h2>Popular Playlists</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
