import React, { useContext, useState } from "react";
import "./style.css";
import { FilmContext } from "../../ShowAllMovies";
import ShowSearchedFilm from "../../ShowOnlyOneFilm";

const MovieBox = ({ index }) => {
  const data = useContext(FilmContext);
  const [filmName, setFilmName] = useState("");
  // console.log(data);
  return (
    <div className="movie">
      <button
        className="movieTitle"
        onClick={(e) => {
          {
            <ShowSearchedFilm searchedFilm={e.target.firstChild.nodeValue} />;
            alert(e.target.firstChild.nodeValue)
            console.log(
              e.target.firstChild.nodeValue,
              "called function onclick",
              e.target.firstChild
            );
          }
        }}
      >
        {data[index].title}
      </button>
      <div className="releaseDate">{data[index].release_date}</div>
      <div>
        <img className="movieImage" src={data[index].image} />
      </div>
    </div>
  );
};

export default MovieBox;
