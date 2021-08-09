export default function movies (state=[],action){
    if(action.type === "ADD_MOVIES"){
        return action.movies;
    }
    return state; //if any action type dosen't match then return simply previous state i.e state here
}