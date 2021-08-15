import { combineReducers } from 'redux';
import { ADD_MOVIES,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    SET_SHOW_FAVORITES } from '../actions'

const intitialMoviesState={
    list:[],
    favorites:[],
    showFavorites:false
}
export  function movies (state=intitialMoviesState,action){
    console.log('Movies Reducer');
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
        default:
            return state;
    }
}


const initialSearchState={
    result:{}
}

export function search(state=initialSearchState,action){
    console.log('search Reducer');
    return state;
}

const initialRootState={
    movies:intitialMoviesState,
    search:initialSearchState
}


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
    // search:search  the s movie or state is just called internally like above with aguments
    movies,
    search
})