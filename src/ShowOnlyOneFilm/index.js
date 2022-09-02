import React, { useState } from "react";
import { useContext } from "react";
import { FilmContext } from "../ShowAllMovies";
import "./style.css";

const ShowSearchedFilm = ({ searchedFilm }) => {
  const data = useContext(FilmContext);
  let index;

  for (let i = 0; i < data.length; i++) {
    if (data[i].title === searchedFilm) {
      // setIndexOfFilm(i);
      index = i;
      break;
    }
  }

  if (index || index === 0) {
    return (
      <div className="searchedFilmWrapper">
        <div className="searchedMovieBox">
          <div className="searchedFilmTitle">
            {<h3>{data[index].title}</h3>}
          </div>
          <div className="searchedFilmImageWrapper">
            <div className="runTime">
              <h4>Time {data[index].running_time}</h4>
            </div>
            <img className="searchedFilmImage" src={data[index].image} />
            <div className="rating">
              <h4>IMDB {data[index].rt_score}</h4>
            </div>
          </div>
          <div className="releaseDateWrapper">
            <h4>Release Date {data[index].release_date}</h4>
          </div>
        </div>
      </div>
  ); 
  } else if (searchedFilm && !index) {
    return (
      <div className="notFound">
        <h3 className="sorryText">Sorry, We Couldn`t Find Your Movie</h3>
      </div>
    )
  }
};
//   else {
//     return (
//       <div className="NotFound">
//         <h1>We couldn find your Film</h1>
//       </div>
//     );
//   }

export default ShowSearchedFilm;
