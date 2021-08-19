import React from "react";
import {data} from "../data";
import {addMovieToList,handleMovieSearh} from "../actions";




class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            showSearchResults:true,
            searchText:''
        };

    }

    handleAddToMovies=(movie) =>{
        this.props.dispatch(addMovieToList(movie));
        this.setState({
            showSearchResults:false
        });
    }

    handleSearch=()=>{
        const {searchText}=this.state;
        //i can call my api here but i should not call my api here because our component is basically apart of the ui we should keep our ui logoc seperate from data fetching logic...so we should call an action
        this.props.dispatch(handleMovieSearh(searchText));
    };

    handleChange=(e)=>{
        this.setState({
            searchText:e.target.value
        });
    };

    render (){
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange} />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                    
                </div>
            </div>
          );
    }

}

export default Navbar;
