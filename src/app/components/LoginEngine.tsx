import React from "react";
import prisma from "@/utils/prisma";
import { Prisma } from "@prisma/client";
import { Pokemon } from "@/types/PokemonTypes";

export async function fetchPokemonData() {
  const randomNumber = Math.floor(Math.random() * 1011) + 1;

  const pokemon = await prisma.wild_pokemon_default.findFirst({
    where: { id: randomNumber },
  });

  return pokemon;
}

const LoginEngine = async () => {
  const pokemon = await fetchPokemonData();
  let pokemonObject;
  if (pokemon?.data && typeof pokemon.data === "object") {
    pokemonObject = pokemon?.data as Prisma.JsonObject;
    // console.log(pokemonObject.name);
  }
  return (
    <div>
      <h2>{Number(pokemon!.id)}</h2>
    </div>
  );
};

export default LoginEngine;
