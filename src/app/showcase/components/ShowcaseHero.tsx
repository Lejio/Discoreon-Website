import React from "react";
import ShowcaseCard from "./ShowcaseCard";
import ShowcaseEngine from "./ShowcaseEngine";

const ShowcaseHero = () => {
  return (
    <div className="flex flex-col items-center justify-evenly py-[10%]">
      <div className="flex flex-row align-center justify-center w-full">
        <ShowcaseCard showcaseCard={<ShowcaseEngine />} />
        <ShowcaseCard showcaseCard={<ShowcaseEngine />} />
        <ShowcaseCard showcaseCard={<ShowcaseEngine />} />
      </div>
    </div>
  );
};

export default ShowcaseHero;
