import React from "react";
import { Link } from "react-router-dom";
import "./TrendingSection.css";

export default function Home(props) {
  const posterUrl = `https://image.tmdb.org/t/p/original/${props.movie.poster_path}`;
  const name = props.movie.original_title
    ? props.movie.original_title
    : props.movie.name;
    let media="tv";
    if(props.movie.media_type==="movie"){
      media="movie"
    }
    const detailUrl = `/${media}/${props.movie.id}`;
  return (
    <>
    <div className="card bg-dark my-4 m-1 p-0" style={{width: '12rem'}}>
        <img src={posterUrl} className="rounded" alt={name}/>
        <span className="rating col-2">{props.movie.vote_average}</span>
          <Link to={detailUrl} className="nav-link"><h5 className="card-title text-center text-white px-2">{name}</h5></Link>
      </div>
    </>
  );
}
