import React from "react";
import {data} from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";


class App extends React.Component{
  componentDidMount(){
    const {store}=this.props;
    store.subscribe(()=>{   //subscribe takes function as an argument,whenever we dispatch an action this subscribe will be called.
      this.forceUpdate();  //we should avoid using this method
    });
    //make an api call then
    //dispatch an action

    //we are not making an api call here so let's just dispatch an action
    store.dispatch({
      type:'ADD_MOVIES',
      movies:data
    })
  }

  render(){
      const movies=this.props.store.getState();
      return (
        <div className="App">
          <Navbar />
          <div className="main">
            <div className="tabs">
              <div className="tab">Movies</div>
              <div className="tab">Favourites</div>
            </div>
            <div className="list">
                {movies.map((movie,index) =>(  //we are getting each item of data array and index of that item also through map function
                  <MovieCard movie={movie} key={`movies-${index}`}/>
                ))}
            </div>
          </div>
        </div>
      );
    }
}

export default App;
