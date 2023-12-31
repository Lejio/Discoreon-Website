import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { SITE_URL } from "@/utils/globals";

// type RequestBodyType = {
//   success_url: string | undefined;
// };

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  // const requestBody: RequestBodyType =
  // (await request.json()) as RequestBodyType;
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    await supabase.auth.exchangeCodeForSession(code);
  }

  // return NextResponse.redirect(
  //   "https://smooth-ralph-mechanics-fight.trycloudflare.com/dashboard"
  // );

  // Redirecting to dashboard for now. Plan on working on parallel routes on main page.
  // revalidatePath(`${SITE_URL}/`);
  return NextResponse.redirect(
    `${SITE_URL}/${
      // requestBody.success_url ? requestBody.success_url : "dashboard"
      "dashboard"
    }`
  );
}
