// {
//     type:'INCREASE_COUNT'  //type is necessary apart 
//                            //from this you can send any other data
// }

// {
//     type:'DECREASE_COUNT'  
// }

//action types
export const ADD_MOVIES='ADD_MOVIES';       //by this we are avoiding string comparisons
export const ADD_FAVORITES='ADD_FAVORITES';


//action creators
export function addMovies(movies){   //here movies is list of objects
    return{
      type:ADD_MOVIES,
      movies  //using short hand here
    }
}

export function addFavorite(movie){ //here movie will be an object only
  return{
    type:ADD_FAVORITES,
    movie  //using short hand here
  }
}
