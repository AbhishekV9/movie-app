import React from "react";
import {connect } from "react-redux";
import {data} from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies,setShowFavorites } from "../actions";
//import {storeContext} from "../index";
//import {connect} from "../index"


class App extends React.Component{
  componentDidMount(){
    console.log("propd",this.props)
   //const {store}=this.props;
    // store.subscribe(()=>{   //subscribe takes function as an argument,whenever we dispatch an action this subscribe will be called.
    //   console.log('subscribed');
    //   this.forceUpdate();  //we should avoid using this forceupdate function
    // });
    //make an api call then
    //dispatch an action

    //we are not making an api call here so let's just dispatch an action
    this.props.dispatch(addMovies(data));
    console.log('dispatched');
  }

  isMovieFavorite=(movie)=>{
    const {movies} =this.props;
    const index=movies.favorites.indexOf(movie); //if movie is available in favorites then we will gwt it's index otherwise
    //will get -1
    if(index!== -1){
      //found the movie in favorites
      return true;
    }
    return false; //movie not found in favorites
  }

  onChangeTab=(val)=>{
    this.props.dispatch(setShowFavorites(val));
  };

  render(){
//    const movies=this.props.store.getState();  Earlier our state was simply an array now our state is an object with list array and favorites array
      const {movies,search}=this.props; // current state looks like = {movies:{}, search:{}}
      const {list , favorites , showFavorites }=movies;
      console.log('RENDERrrr',this.props);

      const displayMovies=showFavorites ? favorites : list ;
      console.log('displayMovies',displayMovies);
    
      return ( 
        <div className="App">
          <Navbar  search={search}/>
          <div className="main">
            <div className="tabs">
              <div className={`tab ${showFavorites ? '': 'active-tabs'}`} onClick={()=>this.onChangeTab(false)} >Movies</div> 
              {/* we are calling the function onclick isntead of passing the refference of the function */}
              <div className={`tab ${showFavorites ? 'active-tabs': ''}`} onClick={()=>this.onChangeTab(true)} >Favourites</div>
            </div>
            <div className="list">
                {displayMovies.map((movie,index) =>(  //we are getting each item of data array and index of that item also through map function
                  <MovieCard
                  movie={movie} 
                  key={`movies-${index}`} 
                  dispatch={this.props.dispatch}
                  isFavorite={this.isMovieFavorite(movie)}
                  />
                ))}
            </div>
            {displayMovies.length === 0 ? <div className="no-movies">No Movies To Dispaly </div> : null }
          </div>
        </div>
      );
    }
}


//app wrapper to use context inside app everywhere
// class AppWrapper extends React.Component{
//   render(){
//     return(
//       <storeContext.Consumer>
//         { (store)=> <App store={store} /> }
//       </storeContext.Consumer>
//     );   
//   }
// }

function mapStateToProps(state){
  return{
    movies:state.movies,
    search:state.search
  };
}

const connectedComponent=connect(mapStateToProps)(App);

export default connectedComponent;
