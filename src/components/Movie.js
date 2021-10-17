import { Card } from "react-bootstrap";
import {FcLike , FcLikePlaceholder} from 'react-icons/fc'
import { useContext } from "react";
import FavoritesContext from "../store/FavoriteContext";
import classes from './Movie.module.css';


const Movie = ({ movie }) => {
    const favContext = useContext(FavoritesContext);

    const isMovieFav = favContext.isMovieFav(movie);

    const hoverHandler = (e) => {
        
    }

    const toggleFavStatusHandler = () => {
        if(isMovieFav){
            favContext.removeFavMovie(movie);
        }
        else{
            favContext.addFavMovie(movie);
        }
    }

  return (
    <Card style={{ width: "18rem" , margin : '2rem' ,marginBottom : "2rem" , marginTop : '2rem' , backgroundColor : 'black' , color : 'white', position:'static'}} className={classes.card}>
      <Card.Img variant="top" src={movie.Poster} className= {classes.img} onMouseOver={hoverHandler}/>

      <Card.Body>
        
      {isMovieFav ? <FcLike size = {30} className = {classes.likeBtn} onClick={toggleFavStatusHandler}/> : <FcLikePlaceholder size = {30} className = {classes.likeBtn} onClick={toggleFavStatusHandler}/>}
      <h3 className={classes.title}>{movie.Title}<br/><span style={{ fontSize : '1.1rem'}}>{movie.Year}</span></h3>
      
        
      </Card.Body>
    </Card>
  );
};

export default Movie;
