import { Switch, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import NavbarMain from "./components/ui/NavbarMain";
import { useState } from "react";
import FavMovies from "./components/FavMovies";
function App() {
  const [search , setSearch] = useState('');            // Creating the search query state
  const pathName = window.location.pathname;     
  
  const searchHandler = (key) => {
    setSearch(key);                                     // Updating the state when query comes from the NavbarMain component
  }
      

  return (
    <div>
      <NavbarMain searchInfo = {searchHandler} pathName = {pathName}/>
      <Switch>
        <Route path="/" exact><MovieList search = {search}/></Route>
        <Route path="/favorites"><FavMovies /></Route>
      </Switch>
    </div>
  );
}

export default App;
