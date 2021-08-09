// {
//     type:'INCREASE_COUNT'  //type is necessary apart 
//                            //from this you can send any other data
// }

// {
//     type:'DECREASE_COUNT'  
// }

//action types
export const ADD_MOVIES='ADD_MOVIES';//by this we are avoiding string comparisons


//action creators
export function addMovies(movies){
    return{
      type:ADD_MOVIES,
      movies  //using short hand here
    }
}