import Movie from "./Movie";
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import classes from "./Movie.module.css";
const MovieList = (props) => {
  const [isLoading, setIsLoading] = useState(true);   // This will be true until react fetches the movie from the API
  const [movies, setMovies] = useState([]);    // This will contain all the movies fetched from the API

  useEffect(() => {
    // this will only run when the page loads for the first time or value of props(which contains the search query) changes
    setIsLoading(true);
    let searchParam = "batman";
    if (props.search !== "") {
      searchParam = props.search;
    }
    fetch(`https://www.omdbapi.com/?s=${searchParam}&apikey=10cb6d7`)  // using the fetch api to fetch movie information from OMDb API
      .then((data) => {
        return data.json();    // Converting the response into JSON
      })
      .then((res) => {
        setMovies(res.Search);   // Storing the movies inside the state
        setIsLoading(false);
      });
  }, [props]);

  if (isLoading) {
    return <div></div>;     // Returning empty div is react is still yet to finish the fetch call and get response
  }

  return (
    <Row style={{ marginLeft: "3rem" }} className={classes.row}>
      {movies ? (
        movies.map((movie, index) => {                          // using the map method to render all the movies
          return <Movie movie={movie} key={index} />;
        })
      ) : (
        <h2>Search Query does not match anything!!</h2>
      )}
    </Row>
  );
};

export default MovieList;
