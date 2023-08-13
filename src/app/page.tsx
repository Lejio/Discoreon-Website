import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { supabase } from "@/utils/supabase";

// import MainNavbar from "@/app/@unauthenticatedNav/MainNavbar";
import SubHero from "@/app/components/SubHero";
import EmbedBody from "@/app/components/EmbedBody";
import TypesImage from "@/app/components/TypesImage";
import Hero from "@/app/components/Hero";
import Rare from "@/app/components/Rare";
import Footer from "@/app/components/Footer";

export default async function MainMenu() {
  // Created a supabase server component using cookies.
  const supabase = createServerComponentClient({ cookies });

  // Obtains the current client session from cookies.
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Logging out the user metadata to check for the curretn session and account information.
  // console.log(session?.user.user_metadata)

  return (
    <main className="flex flex-col justify-center items-center">
      <Hero />
      <SubHero />
      <EmbedBody />
      <TypesImage />
      <Rare />
      <Footer />
    </main>
  );
}
