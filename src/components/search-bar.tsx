import { useState } from "react";

type Search = {
  term: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
};

function SearchBar({ term, setTerm }: Search) {
  return (
    <div>
      <label>FILMS:</label>
      <input
        value={term}
        type="text"
        onChange={(event) => setTerm(event.target.value)}
      />

      {/*{Data.filter((post) => {
        if (query === "") {    return post;
        } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
          return post;}
      }).map((post, index) => (
        <div className="box" key={index}>
          <p>{post.title}</p>
          <p>{post.author}</p>
        </div>
      ))}
      */}
    </div>
  );
}

export default SearchBar;
