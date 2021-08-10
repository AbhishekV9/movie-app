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


//action creators
export function addMovies(movies){   //here movies is list of objects
    return{
      type:ADD_MOVIES,
      movies  //using short hand here
    }
}

export function addFavorite(movie){ //here movie will be an object only
  return{
    type:ADD_TO_FAVORITES,
    movie  //using short hand here
  }
}

export function removeFromFavorite(movie){
  return{
    type:REMOVE_FROM_FAVORITES,
    movie
  }
}

export function setShowFavorites(val){ //value will be either true or false
  return{
    type:SET_SHOW_FAVORITES,
    val
  }
}

