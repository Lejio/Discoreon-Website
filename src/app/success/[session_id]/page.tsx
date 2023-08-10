
import React from "react";
import { useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect } from "react";
import { SITE_URL } from "@/utils/globals";

const page = () => {
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");
  const supabase = createClientComponentClient();

  useEffect(() => {
    const session = supabase.auth.getSession()

    fetch(`${SITE_URL}/api/discord`,
    {
      method: 'POST',
      body: JSON.stringify(
        {
          session_id: session_id
        }
      )
    }
    )
  })
  // const session = await stripe.checkout.sessions.retrieve(session_id!);

  // console.log(session);

  return <div>Success!: Session_ID {session_id}</div>;
};

export default page;
