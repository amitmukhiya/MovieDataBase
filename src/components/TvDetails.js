import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Genres = (props) => {
  return (
    <>
      <p className="mx-1 px-2 border border-1 rounded-pill border-primary">{props.gen.name}</p>
    </>
  );
};
export default function TvDetails() {
  const { id } = useParams();
  const [movieDetail, setMovieDetails] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=df17fa8ae0c40937fe08a2c3315df8ce&language=en-US`
    )
      .then((Response) => Response.json())
      .then((data) => {
        setMovieDetails(data);
      });
  }, [id]);

  // console.log(movieDetail);
  const genre = movieDetail.genres?.map((gen, i) => {
    return <Genres gen={gen} key={i} />;
  });
  const posterUrl = `https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`;
  const name = movieDetail.original_title
    ? movieDetail.original_title
    : movieDetail.name;
  return (
    <>
      <div className="p-2 bg_img" >
        <div className="d-flex my-4 gap-5 flex-wrap ">
          <img src={posterUrl} className="img-fluid col-4 rounded" alt={name} />
          <div className="container_1 col-7 bgImage" >
            <div>
              <div className="head d-flex align-items-center">
                <h1 className="fw-bold">{name} </h1>
                <h3 className="mx-2">({movieDetail.first_air_date})</h3>
              </div>
              <div className="d-flex">
                <h5>Tv</h5>
                <h5 className="d-flex ms-2">{genre}</h5>
                <h5 className="mx-2">{movieDetail.episode_run_time} Min/Ep</h5>
              </div>
            </div>
            <div className="user_rate my-3">
              <h4 className="d-flex">
                Rating :
                <p className="text-warning mx-1">
                  {movieDetail.vote_average}/10
                </p>
                | {movieDetail.vote_count} votes | Popularity :
                <p className="text-warning mx-1">{movieDetail.popularity}</p>
                {/* <a href="" className="mx-2">
                  Play Trailer
                </a> */}
              </h4>
            </div>
            <p className="fst-italic text-warning">"{movieDetail.tagline}"</p>
            <h3 className="text-primary fw-bold">OverView</h3>
            <p className="">{movieDetail.overview}</p>
            <div>
              <h5 className="fw-bold d-flex">Status: <p className="text-primary"> {movieDetail.status} </p> </h5>
              <h5 className="fw-bold">
                Language: {movieDetail.original_language}
              </h5>
              <div>
                <span className="fw-bold d-flex">
                  Seasons:{" "}
                  <p className="text-warning mx-2">{movieDetail.number_of_seasons}</p>
                </span>
                <span className="fw-bold d-flex">
                  Episodes:{" "}
                  <p className="text-warning mx-2">{movieDetail.number_of_episodes}</p>
                </span>
                <span className="fw-bold d-flex">
                 Type : <p className="mx-2">{movieDetail.type}</p>
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-center pt-5">
              <a href={movieDetail.homepage} className="btn btn-primary">
                More Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
