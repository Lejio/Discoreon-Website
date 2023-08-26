import React from "react";
import ShowcaseCard from "./ShowcaseCard";
import ShowcaseEngine from "./ShowcaseEngine";

const ShowcaseHero = () => {
  const numberOfTimes = 3;

  return (
    <div className="flex flex-col items-center justify-evenly py-[10%]">
      <div className="flex flex-row align-center justify-center w-full">
        {Array.from({ length: numberOfTimes }).map((_, index) => (
          <ShowcaseCard key={index} showcaseCard={<ShowcaseEngine />} />
        ))}
      </div>
    </div>
  );
};

export default ShowcaseHero;
