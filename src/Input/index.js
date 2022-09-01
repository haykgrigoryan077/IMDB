import React, { useState } from "react";
import './style.css'
import ShowSearchedFilm from "../ShowOnlyOneFilm";

const SearchFilm = ({filmSearch, setFilmSearch, finalSearch, setFinalSearch}) => {

    return (
        <div className="InputWrapper">
            <div className="input">
                <input
                    type='text'
                    placeholder="Search Your Film"
                    onChange={(event) => {
                        setFilmSearch(event.target.value)
                    }}
                    value={filmSearch}
                />
            </div>
            <div className="inputButton">
                <button onClick={() => {
                    setFinalSearch(filmSearch)
                    {<ShowSearchedFilm 
                        searchedFilm={finalSearch}
                    />}

                }}>SUBMIT</button>
            </div>
        </div>
    )
}

export default SearchFilm