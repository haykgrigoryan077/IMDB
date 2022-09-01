import { useEffect, useState } from "react";
import "./App.css";
import getData from "./contextFile";
import SearchFilm from "./Input";
import { ShowAllMovies } from "./ShowAllMovies";
import { FilmContext } from "./ShowAllMovies";
import ShowSearchedFilm from "./ShowOnlyOneFilm";

function App() {
  const [data, setData] = useState([]);
  const [filmSearch, setFilmSearch] = useState("");
  const [finalSearch, setFinalSearch] = useState("");

  useEffect(() => {
    getData(setData);
  }, []);

  return (
    <div className="App">
      <ShowAllMovies />
      <FilmContext.Provider value={data}>
        <SearchFilm
          filmSearch={filmSearch}
          setFilmSearch={setFilmSearch}
          finalSearch={finalSearch}
          setFinalSearch={setFinalSearch}
        />
      </FilmContext.Provider>
      <FilmContext.Provider value={data}>
        <ShowSearchedFilm searchedFilm={finalSearch} />
      </FilmContext.Provider>
    </div>
  );
}

export default App;
