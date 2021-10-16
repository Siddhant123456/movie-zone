import Movie from "./Movie";
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import classes from './Movie.module.css';
const MovieList = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    let searchParam = "batman";
    if (props.search !== "") {

      searchParam = props.search;
    }
    fetch(`http://www.omdbapi.com/?s=${searchParam}&apikey=10cb6d7`)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setMovies(res.Search);
        setIsLoading(false);
      });
  }, [props]); 

  if (isLoading) {
    return (
      <div>
          
      </div>
    );
  }

  return (
    <Row style = {{marginLeft : '3rem'}} className = {classes.row}>
      {movies ? (
        movies.map((movie, index) => {
          return <Movie movie={movie} key={index} />;
        })
      ) : (
        <h2>Search Query does not match anything!!</h2>
      )}
    </Row>
  );
};

export default MovieList;
