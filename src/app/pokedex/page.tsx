import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
// import DashNavbar from "@/components/DashNavbar";

const Pokedex = async () => {
  // Created a supabase server component using cookies.
  const supabase = createServerComponentClient({ cookies });

  // Obtains the current client session from cookies.
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Checks if a session exists, if it does not, redirect user to another route.
  if (!session) {
    redirect("/unauthenticated");
  }

  // Gets the metadata object of the signed in discord user after checking session exists.
  const discord_metadata = session.user.user_metadata;

  return (
    <div>
      {/* <DashNavbar /> */}
      Pokedex
    </div>
  );
};

export default Pokedex;
