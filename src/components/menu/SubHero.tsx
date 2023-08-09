import React from "react";

import Image from "next/image";
import HeroImage from "../../assets/hero.png";

const SubHero = () => {
  return (
    <div className="text-dark-primary w-[80%] flex items-center justify-evenly mr-0 my-5 bg-dark-primary rounded-2xl p-[5%]">
      <div>
        <h3 className="text-light-primary text-2xl md:text-6xl md:leading-tight mr-5">
          Experience <br />
          <span className=" text-white">Pokémon</span>
          <br /> Together!
        </h3>
        <br />
        <hr className=" border-1 border-white" />
        <br />
        <h4 className=" text-white text-2xl md:leading-snug">
          Multiplayer Battles <br />
          Trading <br />
          Player Driven Market
        </h4>
      </div>

      <Image alt='Hero Image' className=" h-[25vw] w-[25vw]" src={HeroImage} />
    </div>
  );
};

export default SubHero;
