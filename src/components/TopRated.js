import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Tri.css";

const Toprtd = (props) => {
  const posterUrl = `https://image.tmdb.org/t/p/original/${props.top.poster_path}`;
  const name = props.top.original_title
    ? props.top.original_title
    : props.top.name;
  const rate = props.top.vote_average;

  const detailUrl = `/${props.word}/${props.top.id}`;
  return (
    <>
      <Link to={detailUrl} className="tile">
        <div className="">
          <div className="tile__media">
            <img className="tile__img" src={posterUrl} alt={name} />
          </div>
          <div className="tile__details">
            <span className="tile__title rate">{rate}</span>
            <div className="tile__title">{name}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default function TopRated() {
  const [topRated, setTopRated] = useState(null);
  const [word, setWord] = useState("tv");
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${word}/top_rated?api_key=df17fa8ae0c40937fe08a2c3315df8ce&language=en-US&page=1`
    )
      .then((Response) => Response.json())
      .then((data) => {
        setTopRated(data.results);
      });
  }, [word]);
  console.log(topRated);
  const topRatedResults = topRated?.map((top, i) => {
    return <Toprtd top={top} key={i} word={word} />;
  });

  return (
    <>
      <div className="my-5">
      <div className="d-flex align-items-center my-2">
          <h2>Top Rated</h2>
          <div className=" border rounded-pill border-danger mx-3">
            <button
              type="button"
              onClick={() => setWord("movie")}
              className=" today btn btn-danger btn-sm rounded-pill px-4 me-1"
            >
              Movies
            </button>
            <button
              type="button"
              onClick={() => setWord("tv")}
              className=" week btn-primary btn btn-sm rounded-pill px-4"
            >
              Tv
            </button>
          </div>
        </div>
        <div className="contain">
          <div className="row">
            <div className="row__inner">{topRatedResults}</div>
          </div>
        </div>
      </div>
    </>
  );
}
