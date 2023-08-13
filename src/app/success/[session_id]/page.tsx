import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { stripe } from "@/utils/stripe";
import { supabase } from "@/utils/supabase";

const page = async ({
  params,
}: {
  params: {
    session_id: string;
  };
}) => {
  const supabase_auth = createServerComponentClient({ cookies });

  // Obtains the current client session from cookies.
  const {
    data: { session },
  } = await supabase_auth.auth.getSession();

  const user_metadata = session?.user.user_metadata;
  const provider_id: number = Number.parseInt(user_metadata!.provider_id);
  const full_name: string = user_metadata!.full_name;

  const stripe_session = await stripe.checkout.sessions.retrieve(
    params.session_id
  );
  console.log("stripe session");
  console.log(stripe_session.customer);

  const { data: test_subscription, error } = await supabase
    .from("test_subscription")
    .update({ discord_id: provider_id, discord_name: full_name })
    .eq("stripe_customer_id", stripe_session.customer!.toString());

  // const { data: test_subscription, error } = await supabase
  //   .from("test_subscription")
  //   .select("*")
  //   .eq("stripe_customer_id", stripe_session.customer!.toString());
  // console.log(error)
  // console.log(test_subscription);


  return (
    <div>
      Success!: Session_ID {params.session_id}
      <p>
        {provider_id}
        {full_name}
      </p>
    </div>
  );
};

export default page;
