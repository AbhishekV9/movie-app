import React from "react";
//import {data} from "../data";
import {addMovieToList,handleMovieSearh} from "../actions";




class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            searchText:''
        };
        console.log('navbar',this.state,props);
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
        const {result,showSearchResults}=this.props.search;
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange} />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>

                    {showSearchResults &&
                        <div className="search-results">
                            <div className="search-result">
                                <img src={result.Poster} alt="search-pic" />
                                <div className="movie-info">
                                    <span>{result.Title}</span>
                                    <button onClick={()=> this.handleAddToMovies(result)}>
                                        Add To Movies
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                    
                </div>
            </div>
          );
    }

}

export default Navbar;
