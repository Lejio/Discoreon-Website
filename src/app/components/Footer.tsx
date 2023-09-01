"use client";

import React from "react";
import { Divider } from "@nextui-org/react";

const Footer = () => {
  const className = " mx-[20%] text-lg hover:text-light-primary duration-300";

  return (
    // <footer className="flex items-center w-[80%] justify-between py-[2%]">
    //   <div className=" self-start flex md:flex-row flex-col">
    // <a className={className} href="">
    //   Contact
    // </a>
    //     <Divider orientation="vertical" />
    // <a className={className} href="">
    //   Privacy
    // </a>
    // <a className={className} href="">
    //   Terms
    // </a>
    //   </div>
    //   <Divider orientation="vertical" className=" "/>
    //   <h3>&copy; Copyright 2023 Discoreon</h3>
    // </footer>
    <footer>
      <div className="flex h-5 items-center justify-center text-small my-[20%]">
        <a className={className} href="">
          Contact
        </a>
        <Divider orientation="vertical" className=" border-dark-primary" />
        <a className={className} href="">
          Privacy
        </a>
        <Divider orientation="vertical" />
        <a className={className} href="">
          Terms
        </a>
      </div>
    </footer>
  );
};

export default Footer;
