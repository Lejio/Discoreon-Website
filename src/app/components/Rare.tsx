import React from 'react'
import Image from 'next/image'
import LegendaryPokemonImage from '@/assets/pokemon_sprite_group.png'

const Rare = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-evenly w-[80%] rounded-2xl bg-light-primary py-[5%] px-[5%] my-[5%]">
      <div>
        <h3 className=" text-white md:text-5xl text-xl mx-0">
          Catch hundreds of rare Pokemon
          <br />
          across all versions and regions.
        </h3>
        <hr className="my-5" />
        <span className="md:text-2xl mx-0 text-dark-primary md:hover:text-amber-200 md:ease-in md:duration-300">
          With a total of 1010 pokemons and 250+ special versions.
        </span>
      </div>
      <Image alt="Legendary Group" src={LegendaryPokemonImage} />
    </div>
  );
}

export default Rare
