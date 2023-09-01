"use client";

import React from "react";
import Image from "next/image";
import NavItem from "./NavItem";
import { NavItemType } from "@/types/types";
import { Poppins } from "next/font/google";
import { UserMetadata } from "@supabase/supabase-js";
import AvatarComponent from "./AvatarComponent";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Divider,
} from "@nextui-org/react";
import Logo from "@/assets/discoreon_pokeball.png";
import LoginClient from "./LoginClient";
import { Prisma } from "@prisma/client";
import { Pokemon } from "@/types/PokemonTypes";

const poppins = Poppins({
  weight: "400",
  style: "normal",
  preload: false,
});

export default function NavbarComponent({
  user_metadata,
  pokemon_data,
}: {
  user_metadata: UserMetadata | undefined;
  pokemon_data: Pokemon;
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems: Array<NavItemType> = [
    { label: "Get Started", href: "/start", color: "foreground" },
    { label: "Invite", href: "/invite", color: "foreground" },
    { label: "Premium", href: "/premium", color: "foreground" },
    { label: "Showcase", href: "/showcase", color: "foreground" },
  ];

  const navItemComponents = navItems.map((item: NavItemType, index: number) => (
    <NavItem item={item} key={index} />
  ));

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={` ${poppins.className}`}
      classNames={{
        wrapper: "max-w-full lg:mx-[10%]",
        content: "",
      }}
    >
      <NavbarBrand>
        <Image src={Logo} alt={"Discoreon Logo"} height={50} priority={true} />
      </NavbarBrand>

      <NavbarContent className="hidden lg:flex gap-20" justify="center">
        {navItemComponents}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="lg:block hidden">
          {user_metadata ? (
            <AvatarComponent user_metadata={user_metadata} />
          ) : (
            <LoginClient pokemon={pokemon_data} />
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="center" className="lg:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden w-full"
          icon={isMenuOpen ? AiOutlineClose : AiOutlineMenu}
        />
      </NavbarContent>

      <NavbarMenu>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color="foreground"
              className="w-full my-[5%] justify-center"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
            <Divider className="my-4" />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
