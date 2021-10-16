import { useContext } from "react";
import { Row } from "react-bootstrap";
import Movie from "./Movie";
import classes from './Movie.module.css';
import FavoritesContext from "../store/FavoriteContext";

const FavMovies = () => {
  const favContext = useContext(FavoritesContext);
  const movies = favContext.favorites;

    if(movies.length === 0){
        return (
            <div>
                <h2 style={{textAlign : 'center'}}>Your Favorite List is Empty</h2>
            </div>
        )
    }

  return (
      
    <Row style={{marginLeft : '3rem'}} className = {classes.row}>
        <h2 style={{textAlign : 'center'}}>Your Favorite Movies</h2>
      {movies && (
        movies.map((movie, index) => {
          return <Movie movie={movie} key={index} />;
        }))
      }
    </Row>

  );
};

export default FavMovies;
