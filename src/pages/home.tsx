import { useGetMoviesOnlyViewsLikes } from "../components/hooks/use-queries";
import imgAvatar from "./img/img_avatar.png";
import eye from "./img/eye.svg";
import heart from "./img/heart.svg";
import profile from "./img/profile-example.svg";
import thumbUp from "./img/thumb-up.svg";
import thumbDown from "./img/thumb-down.svg";
import smallComment from "./img/small-comment.svg";
import smallHeart from "./img/small-heart.svg";
import smallProfile from "./img/small-profile.svg";

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
        <div>
          <h2>Track films and Tv Shows you've watched.</h2>
          <h2>Save and Share those you want to see.</h2>
          <h2>Tell your Friends and Family what's good.</h2>
        </div>
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
              <div className="user-text">
                <h4>Movie</h4>
                <h4>2023</h4>
              </div>
              <div className="comment">
                <div className="user">
                  <img src={profile} className="profile" />
                  <h5>Dan Forever</h5>
                </div>
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
              <div className="user-text">
                <h4>Movie</h4>
                <h4>2023</h4>
              </div>
              <div className="comment">
                <div className="user">
                  <img src={profile} className="profile" />
                  <h5>Dan Forever</h5>
                </div>

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
          <div className="playlist-card">
            <img src={imgAvatar} className="playlist-img" />
            <div className="text">
              <img src={smallProfile} />
              <h5>Dan Forever</h5>
              <img src={smallHeart} />
              <h5>1000</h5>
              <img src={smallComment} />
              <h5>1000</h5>
            </div>
          </div>
          <div className="playlist-card">
            <img src={imgAvatar} className="playlist-img" />
            <div className="text">
              <img src={smallProfile} />
              <h5>Dan Forever</h5>
              <img src={smallHeart} />
              <h5>1000</h5>
              <img src={smallComment} />
              <h5>1000</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
