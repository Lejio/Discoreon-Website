import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { SITE_URL } from "@/utils/globals";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");


  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    await supabase.auth.exchangeCodeForSession(code);
  }

  // return NextResponse.redirect(
  //   "https://smooth-ralph-mechanics-fight.trycloudflare.com/dashboard"
  // );
  return NextResponse.redirect(`${SITE_URL}/dashboard`);
}