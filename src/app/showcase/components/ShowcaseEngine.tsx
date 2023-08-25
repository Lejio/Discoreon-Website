import prisma from "@/utils/prisma";
import MongoConnection from "@/utils/mongo";
import Image from "next/image";
import { Int32 } from "mongodb";
import React from "react";

export async function fetchPokemonData() {
  const randomNumber = Math.floor(Math.random() * 1011) + 1;

  const connection = MongoConnection.getInstance();
  const db = connection.getDb();
  const collection = db.collection("pokemon");

  const pokemon = await collection.findOne({
    _id: new Int32(randomNumber),
  });

  return pokemon;
}

const ShowcaseEngine = async () => {
  const pokemon = await fetchPokemonData();
  console.log(pokemon?.data.versions[0].data.images.discord_image);

  return (
    <>
      <h2>{Number(pokemon?._id)}</h2>
      <Image
        src={pokemon!.data.versions.at(0).data.images.discord_image}
        alt={pokemon!.name}
        width={500}
        height={500}
      />
    </>
  );
};

export default ShowcaseEngine;
