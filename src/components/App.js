import React from "react";
import {data} from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";


class App extends React.Component{
  componentDidMount(){
    console.log(this.props)
    const {store}=this.props;
    store.subscribe(()=>{   //subscribe takes function as an argument,whenever we dispatch an action this subscribe will be called.
      console.log('subscribed');
      this.forceUpdate();  //we should avoid using this forcrupdate function
    });
    //make an api call then
    //dispatch an action

    //we are not making an api call here so let's just dispatch an action
    store.dispatch(addMovies(data));
    console.log('dispatched');
  }

  isMovieFavorite=(movie)=>{
    const {favorites} =this.props.store.getState();
    const index=favorites.indexOf(movie); //if movie is available in favorites then we will gwt it's index otherwise
    //will get -1
    if(index!== -1){
      //found the movie in favorites
      return true;
    }
    return false; //movie not found in favorites
  }

  render(){
//    const movies=this.props.store.getState();  Earlier our state was simply an array now our state is an object with list array and favorites array
      const {list}=this.props.store.getState();
      console.log('RENDER',this.props.store.getState());
      return (
        <div className="App">
          <Navbar />
          <div className="main">
            <div className="tabs">
              <div className="tab">Movies</div>
              <div className="tab">Favourites</div>
            </div>
            <div className="list">
                {list.map((movie,index) =>(  //we are getting each item of data array and index of that item also through map function
                  <MovieCard
                  movie={movie} 
                  key={`movies-${index}`} 
                  dispatch={this.props.store.dispatch}
                  isFavorite={this.isMovieFavorite(movie)}
                  />
                ))}
            </div>
          </div>
        </div>
      );
    }
}

export default App;
