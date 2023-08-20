import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import "./globals.css";
import { cookies } from "next/headers";
import { Providers } from "./providers";
import DashNav from "./components/DashNav";
import BackGround from "@/assets/background.svg";
import MainNav from "./components/MainNav";
import Image from "next/image";

export const metadata = {
  title: "Discoreon",
  description:
    "Invite the all new, advanced, full stack pokemon bot to your server to spice things up!",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  // Created a supabase server component using cookies.
  const supabase = createServerComponentClient({ cookies });

  // Obtains the current client session from cookies.
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en" className="light">
      <body>

        <Providers>
          {/* {session ? <DashNav /> : <MainNav />} */}
          {/* <Image src={BackGround} alt="type" className=" z-[-1] h-full object-fill absolute opacity-25" /> */}
          <MainNav />
          {props.children}
        </Providers>

      </body>
    </html>
  );
}
