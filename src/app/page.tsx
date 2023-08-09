import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import MainNavbar from "@/components/MainNavbar";
import SubHero from "@/components/menu/SubHero";
import EmbedBody from "@/components/menu/EmbedBody";
import TypesImage from "@/components/menu/TypesImage";
import Hero from "@/components/menu/Hero";
import Rare from "@/components/menu/Rare";
import Footer from "@/components/menu/Footer";

export default async function MainMenu() {
  // Created a supabase server component using cookies.
  const supabase = createServerComponentClient({ cookies });

  // Obtains the current client session from cookies.
  const {
    data: { session },
  } = await supabase.auth.getSession();


  return (
    <main className="flex flex-col justify-center items-center">
      <MainNavbar user_metadata={session ? session.user.user_metadata : session}/>
      <Hero />
      <SubHero />
      <EmbedBody />
      <TypesImage />
      <Rare />
      <Footer />
    </main>
  );
}
