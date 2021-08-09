import React from "react";
import {data} from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
            {data.map((movie,index) =>(  //we are getting each item of data array and index of that item also through map function
              <MovieCard movie={movie} key={`movies-${index}`}/>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
