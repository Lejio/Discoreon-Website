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
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Logo from "@/assets/discoreon_pokeball.png";

const poppins = Poppins({
  weight: "400",
  style: "normal",
  preload: false
})

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const bruh = {
    label: "brug",
    href: "/",
  };

  const navItems: Array<NavItemType> = [
    { label: "Get Started", href: "/start", color: "foreground" },
    { label: "Invite", href: "/invite", color: "foreground" },
    { label: "Premium", href: "/premium", color: "foreground" },
    { label: "Showcase", href: "/showcase", color: "foreground" },
  ];

  const navItemComponents = navItems.map(
    (item: NavItemType) => <NavItem item={item}/>);

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
        wrapper: "max-w-full md:mx-[10%]",
      }}
    >
      <NavbarBrand>
        <Image src={Logo} alt={"Discoreon Logo"} height={50} />
      </NavbarBrand>

      <NavbarContent className="hidden md:flex gap-x-0" justify="center">
        {navItemComponents}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>

        <NavbarItem className="md:block hidden">
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
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