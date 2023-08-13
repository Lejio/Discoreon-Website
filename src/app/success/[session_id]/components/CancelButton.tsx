'use client'

import React from "react";
import { supabase } from "@/utils/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const CancelButton = async () => {
  const supabase_auth = createServerComponentClient({ cookies });

  // Obtains the current client session from cookies.
  const {
    data: { session },
  } = await supabase_auth.auth.getSession();

  const user_metadata = session?.user.user_metadata;
  const provider_id: number = Number.parseInt(user_metadata!.provider_id);
  const full_name: string = user_metadata!.full_name;
  const cancelHandler = async () => {
    const { data:test_user, error} = await supabase.from("test_user").select("*").eq("discord_id", provider_id);
    console.log(test_user)
  };

  return <button onClick={cancelHandler}>Cancel Subscription</button>;
};

export default CancelButton;
