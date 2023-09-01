import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SITE_URL } from "@/utils/globals";

// import MainNavbar from '@/components/MainNavbar'

const Unauthenticated = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect(SITE_URL + "/");
  }

  return (
    <div>
      {/* <MainNavbar user_metadata={undefined} /> */}
      Please sign in to continue.
    </div>
  );
};

export default Unauthenticated;
