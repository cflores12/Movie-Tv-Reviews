import "./stylesheets/filmsheet.css";
import Menu from "../components/dropdownmenu";
import SearchBar from "../components/search-bar";
import { useState } from "react";

const Films = () => {
  const [searchTerm, setSearchTerm] = useState("");
  //const movieData = useGetMovies();

  //if (movieData.length === 0) return null;

  return (
    <div className="film-body">
      <div className="top-bar">
        <div className="search-bar-dropdowns">
          <Menu /> {/*Year Filter*/}
          <Menu /> {/*Rating Filter*/}
          <Menu /> {/*POPULAR Filter*/}
          <Menu /> {/*GENRE Filter*/}
          <SearchBar term={searchTerm} setTerm={setSearchTerm} />
        </div>
        <div className="top-bottom">
          <h2>POPULAR FILMS THIS WEEK</h2>
          <div>List of Movies</div>
        </div>
      </div>
      <div>
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
