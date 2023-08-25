"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Spacer,
  Link,
} from "@nextui-org/react";
import { MdOutlineCatchingPokemon } from "react-icons/md";

const Sidebar = () => {
  const links = [
    { label: "Get Started", href: "/start", color: "foreground" },
    { label: "Get Started", href: "/start", color: "foreground" },
    { label: "Get Started", href: "/start", color: "foreground" },
    { label: "Get Started", href: "/start", color: "foreground" },
  ];

  const linkComponents = links.map((link) => {
    return <Link href={link.href}>{link.label}</Link>;
  });
  return (
    <Card className="sticky top-0 h-screen">
      <CardHeader>
        Get Started <Spacer x={3} /> <MdOutlineCatchingPokemon />
      </CardHeader>
      <CardBody>{linkComponents}</CardBody>
    </Card>
  );
};

export default Sidebar;
