import React, { useState } from "react";
import "./style.css";
import ShowSearchedFilm from "../ShowOnlyOneFilm";

const SearchFilm = ({
  filmSearch,
  setFilmSearch,
  finalSearch,
  setFinalSearch,
}) => {
  return (
    <div className="InputWrapper">
      <div className="input">
        <form
          class="example"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="textInput"
            type="text"
            placeholder="Search Your Film"
            onChange={(event) => {
              setFilmSearch(event.target.value);
            }}
            value={filmSearch}
          />
          {/* </div> */}
          {/* <div className="inputButton"> */}
          <button
            onClick={() => {
              setFinalSearch(filmSearch);
              {
                <ShowSearchedFilm searchedFilm={finalSearch} />;
              }
              setFilmSearch('')
            }}
          >
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchFilm;
