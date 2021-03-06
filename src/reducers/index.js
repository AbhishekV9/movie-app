import { combineReducers } from 'redux';
import { ADD_MOVIES,
    ADD_SEARCH_RESULT,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    SET_SHOW_FAVORITES,
    ADD_MOVIE_TO_LIST    } from '../actions'

const intitialMoviesState={
    list:[],
    favorites:[],
    showFavorites:false
}
export  function movies (state=intitialMoviesState,action){
    console.log('Movies Reducerssss',action);
    // if(action.type === ADD_MOVIES){
    //     console.log(action.movies)
    //     console.log('inside reducer action');
    //     return {                      returning an object here because our state is now an object
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // console.log("outside reducer action")
    // return state; //if any action type dosen't match then return simply previous state i.e state here

    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list:action.movies
            }
        case ADD_TO_FAVORITES:
            return{
                ...state,
                favorites:[action.movie , ...state.favorites]
            }
        case REMOVE_FROM_FAVORITES:
            const filteredArray=state.favorites.filter(
                movie => movie.Title !== action.movie.Title
            )

            return{
                ...state,
                favorites:filteredArray
            }
        case SET_SHOW_FAVORITES:
            return{
                ...state,
                showFavorites:action.val
            }
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                list:[action.movie,...state.list]
            }
        default:
            return state;
    }
}


const initialSearchState={
    result:{}, //we are using &t paramete in our api call so we will get one movie based on title and we if use &s parameter then we have change result as an array like:- result:[] because $s will result collection of movies
    showSearchResults:false
}

export function search(state=initialSearchState,action){
    //console.log('search Reducer');
    //return state;
   // ADD_SEARCH_RESULT
    switch(action.type){
        case ADD_SEARCH_RESULT:
           return {
            ...state,
            result:action.movie,
            showSearchResults:true
        }
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                showSearchResults:false
            }
        default:
            return state;
    }
}

// const initialRootState={
//     movies:intitialMoviesState,
//     search:initialSearchState
// }


//we dont need to write this method,it is already created for us by redux and we can just import it
// export default function rootReducer(state=initialRootState,action){
//     return{
//         movies:movies(state.movies,action),  //we are just telling that movies state should manage by movies reducer
//         search:search(state.search,action)   //and search state should be manage by search reducer
//     }
// }

//and this method requires ana argument wich should be an object
export default combineReducers({
    // movies:movies, as name of rpoperty and reducers are same we can use shorthand here 
    // search:search  the movie or state is just called internally like above with aguments
    movies :movies ,
    search
})