import { createContext, useState } from "react";


const FavoritesContext = createContext({
    favorites : [],
    totalFavorites : 0,
    addFavMovie: (favMovie) => {},
    removeFavMovie: (movie) => {},
    isMovieFav: (movie) => {},
});

export const FavoritesContextProvider = (props) => {
    
    const [favs , setFavs] = useState([])

    const addFavHandler = (favMovie) => {
        //console.log(favMovie);
        setFavs((prevState) => {
           return prevState.concat(favMovie);
        })
        
    }

    const removeFavHandler = (movie) => {
        
        setFavs((prevState) => {
            return prevState.filter((mov) => mov.imdbID !== movie.imdbID);
        })
    }

    const movieIsFav = (movie) => {
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


    
    return <FavoritesContext.Provider value = {context}>
        {props.children}
    </FavoritesContext.Provider>
}


export default FavoritesContext;


