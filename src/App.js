import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "./App.css";
import Movie from "./Movie";


const App = () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1";

const [popular, setPopular] = useState([]);

useEffect(() => {
    fetchPopular();
  }, []);

const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
  };

return (
  <MDBRow>
      <h1>Movies</h1>    
     <MDBCol sm='6' >
        {popular?.map((movie) => {
          return <Movie movie={movie} />;
        })}
      </MDBCol>  
  </MDBRow>        
  );
};
export default App;
