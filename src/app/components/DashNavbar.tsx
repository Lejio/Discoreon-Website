"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../assets/discoreon_pokeball.png";
import { Poppins } from "next/font/google";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import NavItem from "./NavItem";

import LogoutButton from "@/app/dashboard/components/LogoutButton";

const DashNavbar = () => {
  const [navbar, setNavbar] = useState("");
  const supabase = createClientComponentClient();
  const router = useRouter();

  const onToggleMenu = () => {
    navbar === "" ? setNavbar("top-[8%]") : setNavbar("");
  };

  const navOptions = [
    { label: "Dashboard", href: "/home" },
    { label: "Pokedex", href: "/pokedex" },
    { label: "Inventory", href: "/inventory" },
  ];

  const logoutHandler = async () => {
    // Creates a session object to retrieve the state of the session.
    const { error } = await supabase.auth.signOut();
    router.push("/");
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

          {/* Hidden Logout button for mobile users only. */}
          <li className="md:hidden block">
            <button
              onClick={logoutHandler}
              className={`text-lg hover:text-light-primary duration-300`}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <div className="md:block hidden">
          <LogoutButton />
        </div>

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

export default DashNavbar;
