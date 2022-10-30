import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
const Details = () => {
  const [currentMovie, setCurrentMovie] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() =>{
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((result) => setCurrentMovie(result))}
  );

  console.log(currentMovie.overview);
  return (
    <div className="hello">
     <div className="detail-pic">
      <img  src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path }`} alt="pic" />
     </div>
     <div className="detail-poster">
      <img  src={`https://image.tmdb.org/t/p/original${currentMovie.poster_path }`} alt="pic" />
     </div>
      <div className="detail-description">
        <h1> { currentMovie.original_title} </h1>{"  "} <span><b>Release date:</b> {    currentMovie.release_date} </span>
        <p><b>Overview:</b> {currentMovie.overview} </p>
      </div>
      <div className="rating">
        <b> Rating: { currentMovie.vote_average} </b>
      </div>
      
    </div>
  );
};

export default Details;
