import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import "./globals.css";
import { cookies } from "next/headers";
import { Providers } from "./providers";
import NavbarComponent from "./components/NavbarComponent";
import { UserMetadata } from "@supabase/supabase-js";
import { Int32 } from "mongodb";
import MongoConnection from "@/utils/mongo";
import { Pokemon } from "@/types/PokemonTypes";

export const metadata = {
  title: "Discoreon",
  description:
    "Invite the all new, advanced, full stack pokemon bot to your server to spice things up!",
};

export async function fetchPokemonData() {
  const randomNumber = Math.floor(Math.random() * 1011) + 1;

  const connection = MongoConnection.getInstance();
  const db = connection.getDb();
  const collection = db.collection("pokemon");

  const query_id = new Int32(randomNumber);

  const pokemon = await collection.findOne({
    _id: query_id,
  });

  // connection.close();

  return pokemon;
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  authenticated: React.ReactNode;
  loginmodal: React.ReactNode;
}) {
  // Created a supabase server component using cookies.
  const supabase = createServerComponentClient({ cookies });

  // Obtains the current client session from cookies.
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user_data: UserMetadata | undefined = session?.user.user_metadata;

  const pokemon = await fetchPokemonData();
  let pokemonObject;
  if (pokemon?.data && typeof pokemon.data === "object") {
    pokemonObject = pokemon?.data as Pokemon;
  }

  return (
    <html lang="en">
      <body>
        <Providers>
          <NavbarComponent
            user_metadata={user_data}
            pokemon_data={pokemonObject!}
          />
          {props.loginmodal}
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
