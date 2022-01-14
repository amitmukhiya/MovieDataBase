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

  const detailUrl = `/movies/${props.top.id}`;
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
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=df17fa8ae0c40937fe08a2c3315df8ce&language=en-US&page=1`
    )
      .then((Response) => Response.json())
      .then((data) => {
        setTopRated(data.results);
      });
  }, []);
  console.log(topRated);
  const topRatedResults = topRated?.map((top, i) => {
    return <Toprtd top={top} key={i} />;
  });

  return (
    <>
      <div className="my-5">
        <h2>Top Rated</h2>
        <div className="contain">
          <div className="row">
            <div className="row__inner">{topRatedResults}</div>
          </div>
        </div>
      </div>
    </>
  );
}
