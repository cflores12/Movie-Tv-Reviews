import "./stylesheets/filmsheet.css";
import { Menu, List } from "../components/dropdownmenu";
import SearchBar from "../components/search-bar";
import { useState } from "react";
import avatar from "./img/img_avatar.png";

const Films = () => {
  const ex: List = {
    values: ["something", "else", "so", "far"],
  };
  const [searchTerm, setSearchTerm] = useState("");
  //const movieData = useGetMovies();

  //if (movieData.length === 0) return null;

  return (
    <div className="film-body">
      <div className="top-bar">
        <div className="search-bar-dropdowns">
          <Menu list={ex} /> {/*Year Filter*/}
          <Menu list={ex} /> {/*Rating Filter*/}
          <Menu list={ex} /> {/*POPULAR Filter*/}
          <Menu list={ex} /> {/*GENRE Filter*/}
          <SearchBar term={searchTerm} setTerm={setSearchTerm} />
        </div>
        <div className="top-bottom">
          <h2>POPULAR FILMS THIS WEEK</h2>
          <div>
            <img src={avatar} />
            <img src={avatar} />
          </div>
        </div>
      </div>
      <div className="review-movie-list">
        <h3>JUST REVIEWED</h3>
        <div>List of Movies just Review</div>
      </div>
      <div className="most-recent-comments">
        <div className="reviews">list of recent reviews</div>
        <div className="popular-reviewers">list of reviewers</div>
      </div>
    </div>
  );
};

export default Films;
