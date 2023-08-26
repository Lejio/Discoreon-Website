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
    { label: "Get Started 1", href: "/start#one", color: "foreground" },
    { label: "Get Started 2", href: "/start#two", color: "foreground" },
    { label: "Get Started 3", href: "/start#three", color: "foreground" },
    { label: "Get Started 4", href: "/start#four", color: "foreground" },
  ];

  const linkComponents = links.map((link) => {
    return (
      // Should have a key for the entire thing. So it should be a div instead of just a link.
      <div key={link.label}>
        <Link href={link.href}>{link.label}</Link>
        <Spacer y={3} />
      </div>
    );
  });
  return (
    <Card className="sticky top-[10%] h-[10%] p-[1%]">
      <CardHeader>
        Get Started <Spacer x={3} /> <MdOutlineCatchingPokemon />
      </CardHeader>
      <CardBody>{linkComponents}</CardBody>
    </Card>
  );
};

export default Sidebar;
