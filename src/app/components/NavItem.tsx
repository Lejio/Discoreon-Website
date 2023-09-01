// `use client`;
import React from "react";
// import { useEffect, useRef, useState } from "react";
import { NavItemType } from "@/types/types";
import { motion, Variants } from "framer-motion";
import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";

// NavItem Component --> A HTML li wrapper that adds come cool animations to it.
const NavItem = ({ item }: { item: NavItemType }) => {
  // React useRef hook to reference HTML elements.
  // const spanRef = useRef(null);
  // Text width state used to measure how long the SVG line should be.
  // const [textWidth, setTextWidth] = useState(0);

  // SVG line variants.
  // const outlineVariants: Variants = {
  //   default: {
  //     strokeWidth: 5,
  //     pathLength: 0,
  //     stroke: "#808080",
  //     strokeLinejoin: "round",
  //     strokeLinecap: "round",
  //     opacity: 0,
  //     transition: { duration: 0.5, ease: "easeOut" },
  //   },
  //   hover: {
  //     strokeWidth: 5,
  //     pathLength: 1,
  //     stroke: "#5363AD",
  //     strokeLinejoin: "round",
  //     strokeLinecap: "round",
  //     opacity: 100,
  //     transition: { duration: 0.5, ease: "easeOut" },
  //   },
  // };
  // Uses getBoundingClientRect method to obtain the width of the span containing the text.
  // const getTextWidthInPixels = (ref: {
  //   getBoundingClientRect: () => { (): any; new (): any; width: any };
  // }) => ref.getBoundingClientRect().width;

  // useEffect(() => {
  //   setTextWidth(getTextWidthInPixels(spanRef.current!));
  // }, [spanRef]);

  return (
    <NavbarItem>
      {/* <div> */}
      <Link
        className={`flex flex-col text-lg hover:text-light-primary group transition duration-500`}
        href={item.href}
      >
        {/* Text in this span is measured in pixels and then passed into textWidth */}
        {item.label}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-1000 h-0.5 bg-light-primary"></span>
        {/* <motion.svg
            className="flex"
            // Using the textWidth to determine the length of the SVG line.
            width={Math.floor(textWidth)}
            height={5}
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              variants={outlineVariants}
              strokeWidth={5}
              fill="none"
              stroke="gray"
              d={`M0,0
            L100, 0`}
            />
          </motion.svg> */}
      </Link>
      {/* </div> */}
    </NavbarItem>
  );
};

export default NavItem;
