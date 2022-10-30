import React, { useEffect, useState } from "react";
import "./Page.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Page = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results)).catch((err)=>console.log(err))
  });

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={2}
          infiniteLoop={true}
          showStatus={false}
          interval={3000}
          autoFocus={true}
        >
          {popularMovies.map((movie, i) => (
            <>
              <div className="posterImage" key={i}>
                <img
                  key={i}
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt="pic"
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                </div>
              </div>
            </>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Page;
