import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import "./globals.css";
import { cookies } from "next/headers";
import { Providers } from "./providers";
import BackGround from "@/assets/background.svg";
import NavbarComponent from "./components/NavbarComponent";
import { UserMetadata } from "@supabase/supabase-js";
import prisma from "@/utils/db";
import { Prisma } from "@prisma/client";
import { Pokemon } from "@/types/PokemonTypes";

export const metadata = {
  title: "Discoreon",
  description:
    "Invite the all new, advanced, full stack pokemon bot to your server to spice things up!",
};

export async function fetchPokemonData() {
  const randomNumber = Math.floor(Math.random() * 1011) + 1;

  const pokemon = await prisma.wild_pokemon_default.findFirst({
    where: { id: randomNumber },
  });

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
    console.log(pokemonObject);
  }

  return (
    <html lang="en">
      <body>
        <Providers>
          {/* {session ? <DashNav /> : <MainNav />} */}
          {/* <Image src={BackGround} alt="type" className=" z-[-1] h-full object-fill absolute opacity-25" /> */}
          <NavbarComponent
            user_metadata={user_data}
            pokemon_data={pokemonObject!}
          />
          {/* {props.children} */}
          {props.loginmodal}
          {user_data ? props.authenticated : props.children}
        </Providers>
      </body>
    </html>
  );
}
