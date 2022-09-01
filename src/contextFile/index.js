import React from "react";
import axios from "axios";

const getData = (setData) => {
  const baseUrl = "https://ghibliapi.herokuapp.com/films";

  axios.get(baseUrl)
  .then((response) => {
    const films = response.data
    setData(films)
  })
};

export default getData;
