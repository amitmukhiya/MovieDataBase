import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Tri.css";

const Popular = (props) => {
  const posterUrl = `https://image.tmdb.org/t/p/original/${props.pop.poster_path}`;
  const name = props.pop.original_title
    ? props.pop.original_title
    : props.pop.name;
  const rate = props.pop.vote_average;
  const detailUrl=`/movies/${props.pop.id}`;
  return (
    <>
      <Link to ={detailUrl} className="tile"><div className="">
        <div className="tile__media">
          <img className="tile__img" src={posterUrl} alt={name} />
        </div>
        <div className="tile__details">
          <span className="tile__title rate">{rate}</span>
          <div className="tile__title">{name}</div>
        </div>
      </div></Link>
    </>
  );
};

export default function PopularSection() {
  const [popular, setPopular] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=df17fa8ae0c40937fe08a2c3315df8ce&language=en-US`
    )
      .then((Response) => Response.json())
      .then((data) => {
        setPopular(data.results);
      });
  }, []);
  const popularResult = popular?.map((pop, i) => {
    return <Popular pop={pop} key={i} />;
  });

  return (
    <>
      <div className="mt-4">
        <h2>What's Popular</h2>
        <div className="contain">
          <div className="row">
            <div className="row__inner">
            {popularResult}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
