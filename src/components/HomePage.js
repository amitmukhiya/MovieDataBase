import React from "react";
import TopRated from "./TopRated";
import TrendingSection from "./TrendingSection";
import PopularSection from "./PopularSection"
import TrendingSectionTv from "./TrendingSectionTv";

export default function HomePage() {
  return (
    <>
    <div className="mx-2">
    <PopularSection/>
    <TopRated/>
    <TrendingSection/>
    <TrendingSectionTv/>
    </div>
    </>
  );
}
