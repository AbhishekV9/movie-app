// {
//     type:'INCREASE_COUNT'  //type is necessary apart 
//                            //from this you can send any other data
// }

// {
//     type:'DECREASE_COUNT'  
// }

//action types
export const ADD_MOVIES='ADD_MOVIES';       //by this we are avoiding string comparisons
export const ADD_TO_FAVORITES='ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES='REMOVE_FROM_FAVORITES';
export const SET_SHOW_FAVORITES='SET_SHOW_FAVORITES';
export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';

//action creators
export function addMovies(movies){   //here movies is list of objects
    return{
      type:ADD_MOVIES,
      movies  //using short hand here
    };
}

export function addFavorite(movie){ //here movie will be an object only
  return{
    type:ADD_TO_FAVORITES,
    movie  //using short hand here
  };
}

export function removeFromFavorite(movie){
  return{
    type:REMOVE_FROM_FAVORITES,
    movie
  };
}

export function setShowFavorites(val){ //value will be either true or false
  return{
    type:SET_SHOW_FAVORITES,
    val
  };
}

export function addMovieToList(movie){
  return{
    type: ADD_MOVIE_TO_LIST,
    movie
  };
}

export function handleMovieSearh(searchText){
  const url=`http://www.omdbapi.com/?i=tt3896198&apikey=5361c51f&t=${searchText}`;
  return function(dispatch){
    fetch(url)
    .then(response => response.json())
    .then(movie => {
      console.log('movie',movie);
    });
  };
  //our actions generally return an object but here we are returning a function so here we basically want to tell redux that hey if you get an action then just simply pass this action to the reducer and if you get a function like this then just call this function with dispatch as the argument :- for this we can use middleware 
}
