import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle,  MDBCardImage} from 'mdb-react-ui-kit';
import "./App.css";
const Movie = ({movie}) => {
  return (
    <MDBCard>
       <MDBCardBody>
             <MDBCardTitle>{movie.title}</MDBCardTitle>
             <MDBCardImage src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
        </MDBCardBody>    
    </MDBCard>
  );
};
export default Movie;