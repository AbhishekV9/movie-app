import { ADD_MOVIES } from '../actions'
const intitialMoviesState={
    list:[],
    favorites:[]
}
export default function movies (state=intitialMoviesState,action){
    if(action.type === ADD_MOVIES){
        console.log(action.movies)
        console.log('inside reducer action');
        return {
            ...state,
            list:action.movies
        }
    }
    console.log("outside reducer action")
    return state; //if any action type dosen't match then return simply previous state i.e state here
}

