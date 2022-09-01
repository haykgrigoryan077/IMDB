import React from "react";
import MovieBox from "../components/MovieBox";
import getData from "../contextFile";
import { useState } from "react";
import { useEffect } from "react";
import './style.css'

const FilmContext = React.createContext();

const ShowAllMovies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(setData);
  }, []);


  return (
    <div className="movieWrapper">
      {data.map((value, index) => {
        return (
          <FilmContext.Provider value={data}>
            <MovieBox key={data[index].id} index={index}/>
          </FilmContext.Provider>
        );
      })}
    </div>
  );
};

export  {ShowAllMovies, FilmContext};
