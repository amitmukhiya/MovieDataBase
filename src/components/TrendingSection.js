import React from "react";
import { useEffect, useState } from "react";
import "./TrendingSection.css";
import { Link } from "react-router-dom";
import "./Tri.css";

const Trending = (props) => {
  const posterUrl = `https://image.tmdb.org/t/p/original/${props.trend.poster_path}`;
  const name = props.trend.original_title
    ? props.trend.original_title
    : props.trend.name;
  const rate = props.trend.vote_average * 10;

  const detailUrl = `/movies/${props.trend.id}`;
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

export default function TrendingSection() {
  const [trending, setTrending] = useState(null);
  const [word, setWord] = useState("day");
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/${word}?api_key=df17fa8ae0c40937fe08a2c3315df8ce`
    )
      .then((Response) => Response.json())
      .then((data) => {
        setTrending(data.results);
        // console.log(data.results)
      });
  }, [word]);
  const trendingResult = trending?.map((trend, i) => {
    return <Trending trend={trend} key={i} />;
  });
  return (
    <>
      <div>
        <div className="d-flex align-items-center my-2">
          <h2>Trending</h2>
          <div className=" border rounded-pill border-danger mx-3">
            <button
              type="button"
              onClick={() => setWord("day")}
              className=" today btn btn-primary btn-sm rounded-pill px-4"
            >
              Today
            </button>
            <button
              type="button"
              onClick={() => setWord("week")}
              className=" week btn btn-sm rounded-pill px-4"
            >
              This Week
            </button>
          </div>
        </div>
        <div className="contain">
          <div className="row">
            <div className="row__inner">{trendingResult}</div>
          </div>
        </div>
      </div>
    </>
  );
}
