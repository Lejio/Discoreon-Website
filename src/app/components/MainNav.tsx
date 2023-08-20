"use client";

import React from "react";
import Image from "next/image";
import NavItem from "./NavItem";
import { NavItemType } from "@/types/types";
import { Poppins } from "next/font/google"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Logo from "@/assets/discoreon_pokeball.png";
import LoginButton from "./LoginButton";

const poppins = Poppins({
  weight: "400",
  style: "normal",
  preload: false
})

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems: Array<NavItemType> = [
    { label: "Get Started", href: "/start", color: "foreground" },
    { label: "Invite", href: "/invite", color: "foreground" },
    { label: "Premium", href: "/premium", color: "foreground" },
    { label: "Showcase", href: "/showcase", color: "foreground" },
  ];

    const navItemComponents = navItems.map((item: NavItemType) => (
      <NavItem item={item} key={item.href}/>
    ));

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={` ${poppins.className}`}
      classNames={{
        wrapper: "max-w-full mx-[10%] gap-x-0",
        content: "w-auto"
      }}
    >
      <NavbarBrand className=" block">
        <Image src={Logo} alt={"Discoreon Logo"} height={50} />
      </NavbarBrand>

      <NavbarContent className="hidden md:flex gap-x-0" justify="center">
        {navItemComponents}
      </NavbarContent>

      <NavbarContent justify="end">

        <NavbarItem className="md:block hidden">
          <LoginButton />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
          icon={isMenuOpen ? AiOutlineClose : AiOutlineMenu}
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}