import { createContext, useState } from "react";


const FavoritesContext = createContext({                   // creating the context which has some variables and some methods related to fav movies 
    favorites : [],
    totalFavorites : 0,
    addFavMovie: (favMovie) => {},
    removeFavMovie: (movie) => {},
    isMovieFav: (movie) => {},
});

export const FavoritesContextProvider = (props) => {
    
    const [favs , setFavs] = useState([])         // Storing the fav movies inside the state

    const addFavHandler = (favMovie) => {         // method to add movie to favs
        
        setFavs((prevState) => {
           return prevState.concat(favMovie);
        })
        
    }

    const removeFavHandler = (movie) => {      // method to remove movie from favs
        
        setFavs((prevState) => {
            return prevState.filter((mov) => mov.imdbID !== movie.imdbID);
        })
    }

    const movieIsFav = (movie) => {           // checking if movie is fav or not
        if(favs.length === 0){
            return false;
        }
        return favs.some((mov) => mov.imdbID === movie.imdbID);
        
    }



    const context = {
        favorites : favs,
        totalFavorites : favs.length,
        addFavMovie : addFavHandler,
        removeFavMovie : removeFavHandler,
        isMovieFav : movieIsFav,
    };


    //Provider component makes sure our react context is available to components
    return <FavoritesContext.Provider value = {context}>         
        {props.children}
    </FavoritesContext.Provider>
}


export default FavoritesContext;


