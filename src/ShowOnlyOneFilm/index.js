import React, { useState } from "react";
import { useContext } from "react";
import { FilmContext } from "../ShowAllMovies";
import './style.css'


const ShowSearchedFilm = ({ searchedFilm }) => {
  const data = useContext(FilmContext);
  const [indexOfFilm, setIndexOfFilm] = useState('')
  let index;

  for (let i = 0; i < data.length; i++) {
    if (data[i].title === searchedFilm) {
      // setIndexOfFilm(i);
      index = i;
      break;
    }
  }

  console.log(data, data[index]);  
  
  if(index || index === 0) {
    return (
      <div className="searchedFilmWrapper">
        <div className="searchedFilmTitle">
          {<h3>{data[index].title}</h3>}
          {/* {index && <h3>uraaaaaaaaaaaa</h3>} */}
        </div>
      </div>
    );
  } 
}
//   else {
//     return (
//       <div className="NotFound">
//         <h1>We couldn find your Film</h1>
//       </div>
//     );
//   }


export default ShowSearchedFilm;
