import React from "react";

const Footer = () => {
  const className = "mr-5 hover:text-light-primary duration-300";

  return (
    <footer className="flex items-center w-[80%] justify-between py-[2%]">
      <div className=" self-start flex md:flex-row flex-col">
        <a className={className} href="">
          Contact
        </a>
        <a className={className} href="">
          Privacy
        </a>
        <a className={className} href="">
          Terms
        </a>
      </div>
      <h3>&copy; Copyright 2023 Discoreon</h3>
    </footer>
  );
};

export default Footer;
