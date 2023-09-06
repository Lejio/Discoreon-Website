import React from "react";
import { NavItemType } from "@/types/types";
import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";

const NavItem = ({ item }: { item: NavItemType }) => {
  return (
    <NavbarItem>
      <Link
        className={`flex flex-col text-lg hover:text-light-primary group transition duration-500`}
        href={item.href}
      >
        {/* Text in this span is measured in pixels and then passed into textWidth */}
        {item.label}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-1000 h-0.5 bg-light-primary"></span>
      </Link>
    </NavbarItem>
  );
};

export default NavItem;
