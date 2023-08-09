"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/discoreon_pokeball.png";
import { Poppins } from "next/font/google";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { SITE_URL } from "@/utils/globals";
import NavItem from "./NavItem";

import LoginButton from "@/app/components/LoginButton";
import { UserMetadata } from "@supabase/supabase-js";

// { user_metadata }: { user_metadata: UserMetadata | null }

const MainNav = () => {
  const [navbar, setNavbar] = useState("");
  const supabase = createClientComponentClient();
  const router = useRouter();
  const onToggleMenu = () => {
    navbar === "" ? setNavbar("top-[8%]") : setNavbar("");
  };

  const navOptions = [
    { label: "Get Started", href: "/start" },
    { label: "Invite", href: `/invite` },
    { label: "Premium", href: "/premium" },
    { label: "Showcase", href: "/showcase" },
  ];

  // console.log(user_metadata);

  // Image loader, required by Image/NextJS to load images from other sources.
  const loginHandler = async () => {
    // Creates a session object to retrieve the state of the session.

    const session = await supabase.auth.getSession();

    // If the session is null, that means the user is not logged in, therefore redirect them to discord oauth.
    if (!session.data.session) {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "discord",
        options: {
          redirectTo: `${SITE_URL}/api/auth`,
        },
      });
    } else {
      // If the session is authenticated, then take them directly to the home page.
      router.push("/home");
    }
  };

  const navItems = navOptions.map((item) => {
    return <NavItem key={item.label} item={item} />;
  });

  return (
    <nav className="flex justify-between items-center w-[100%] px-5 mx-auto md:sticky top-0 bg-white md:drop-shadow-2xl">
      <div>
        <Link href={"/"}>
          <Image
            className="w-16 cursor-pointer"
            src={Logo}
            alt="Discoreon Pokeball"
            width={70}
            height={70}
          />
        </Link>
      </div>

      <div
        className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[30vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5 ${navbar}`}
      >
        <ul className=" flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          {navItems}
          <li className="md:hidden block">
            <button
              onClick={loginHandler}
              className={`text-lg hover:text-light-primary duration-300`}
            >
              Login
            </button>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-6">
        <div className={`md:block hidden `}>
          {/* <div className={`md:${user_metadata ? "hidden" : "block"} hidden `}> */}
          <LoginButton />
        </div>
        {/* { navbar === "" ? <></> : <button> Login </button>} */}
        {/* <div className={`${
                user_metadata ? "box" : "hidden"} `}>
          <Link href="/dashboard">
            <Image
              className={`border-2 rounded-full border-light-primary mb-[10%] "
              }`}
              // Since the foreign image source does not take a width property, Image/NextJS requires a unoptimized prop.
              unoptimized={imageLoader}
              width={50}
              height={50}
              src={user_metadata.picture}
              alt="Profile Picture"
            />
          </Link>
        </div> */}
        <button
          onClick={onToggleMenu}
          name="menu"
          className="text-3xl cursor-pointer md:hidden"
        >
          {navbar === "" ? <AiOutlineMenu /> : <AiOutlineClose />}
        </button>
      </div>
    </nav>
  );
};

export default MainNav;
