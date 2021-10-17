import { Card } from "react-bootstrap";
import {FcLike , FcLikePlaceholder} from 'react-icons/fc'
import { useContext } from "react";
import FavoritesContext from "../store/FavoriteContext";
import classes from './Movie.module.css';


const Movie = ({ movie }) => {
    const favContext = useContext(FavoritesContext);   // Fetching the react context which contains the favorite movies of user

    const isMovieFav = favContext.isMovieFav(movie);   // Checking if the current movie is fav or not

    

    const toggleFavStatusHandler = () => {
        if(isMovieFav){
            favContext.removeFavMovie(movie);   // if the movie is fav then removing it from favs
        }
        else{
            favContext.addFavMovie(movie);    // if it is not fav then adding it to favs
        }
    }

  return (
    <Card style={{ width: "18rem" , margin : '2rem' ,marginBottom : "2rem" , marginTop : '2rem' , backgroundColor : 'black' , color : 'white', position:'static'}} className={classes.card}>
      <Card.Img variant="top" src={movie.Poster} className= {classes.img}/>

      <Card.Body>
        
      {isMovieFav ? <FcLike size = {30} className = {classes.likeBtn} onClick={toggleFavStatusHandler}/> : <FcLikePlaceholder size = {30} className = {classes.likeBtn} onClick={toggleFavStatusHandler}/>}
      <h3 className={classes.title}>{movie.Title}<br/><span style={{ fontSize : '1.1rem'}}>{movie.Year}</span></h3>
      
        
      </Card.Body>
    </Card>
  );
};

export default Movie;
